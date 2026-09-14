'use client'

import React, { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  z: number // Depth: 0 (closest) to 1 (furthest)
  vx: number
  vy: number
  ox: number // Origin anchor for organic drift
  oy: number
  driftAngle: number
  driftSpeed: number
  baseRadius: number
  color: string
  pulse: number
  pulseSpeed: number
  isHub: boolean
}

interface Signal {
  fromIndex: number
  toIndex: number
  progress: number // 0 to 1
  speed: number
  color: string
}

interface NodePulse {
  x: number
  y: number
  z: number
  radius: number
  maxRadius: number
  alpha: number
  color: string
}

export function AiNetworkBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)

    let width = (canvas.width = window.innerWidth * dpr)
    let height = (canvas.height = window.innerHeight * dpr)
    ctx.scale(dpr, dpr)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (!canvas) return
        width = canvas.width = window.innerWidth * dpr
        height = canvas.height = window.innerHeight * dpr
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.scale(dpr, dpr)
      }, 200)
    }

    window.addEventListener('resize', handleResize)

    // Curated brand neural palette
    const COLORS_DARK = [
      'rgba(56, 189, 248, 0.75)',  // Electric Cyan
      'rgba(99, 102, 241, 0.75)',  // Indigo
      'rgba(168, 85, 247, 0.75)',  // Violet
      'rgba(52, 211, 153, 0.75)',  // Emerald
    ]

    const COLORS_LIGHT = [
      'rgba(2, 132, 199, 0.65)',   // Ocean Blue
      'rgba(79, 70, 229, 0.65)',   // Royal Indigo
      'rgba(147, 51, 234, 0.65)',  // Purple
      'rgba(5, 150, 105, 0.65)',   // Emerald
    ]

    const LINE_COLORS = {
      dark: 'rgba(56, 189, 248, 0.14)',
      light: 'rgba(2, 132, 199, 0.12)',
    }

    const SIGNAL_COLORS = ['#38bdf8', '#818cf8', '#c084fc', '#34d399']

    let nodes: Node[] = []
    let signals: Signal[] = []
    let nodePulses: NodePulse[] = []
    const maxNodes = 75
    const connectionDist = 165
    let mouseX = -9999
    let mouseY = -9999

    const initNetwork = () => {
      nodes = []
      signals = []
      nodePulses = []
      const w = window.innerWidth
      const h = window.innerHeight
      const speedMult = prefersReducedMotion ? 0.05 : 1

      for (let i = 0; i < maxNodes; i++) {
        let x = Math.random() * w
        let y = Math.random() * h

        // Soft exclusion zone around center heading
        const cx = w / 2
        const cy = h / 2
        const distFromCenter = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
        if (distFromCenter < 190) {
          const angle = Math.random() * Math.PI * 2
          const radius = 190 + Math.random() * 110
          x = cx + Math.cos(angle) * radius
          y = cy + Math.sin(angle) * radius
        }

        const z = Math.random() // Depth from 0 (front) to 1 (back)
        const isHub = i % 12 === 0 && z < 0.45 // 5-6 major cluster gateway hubs

        nodes.push({
          x,
          y,
          z,
          ox: x,
          oy: y,
          vx: (Math.random() - 0.5) * 0.28 * (1 - z * 0.5) * speedMult,
          vy: (Math.random() - 0.5) * 0.28 * (1 - z * 0.5) * speedMult,
          driftAngle: Math.random() * Math.PI * 2,
          driftSpeed: (0.003 + Math.random() * 0.005) * speedMult,
          baseRadius: isHub ? Math.random() * 1.5 + 3.2 : Math.random() * 1.2 + 1.8,
          color: COLORS_DARK[i % COLORS_DARK.length],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: (0.015 + Math.random() * 0.02) * speedMult,
          isHub,
        })
      }

      nodes.sort((a, b) => b.z - a.z)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseLeave = () => {
      mouseX = -9999
      mouseY = -9999
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    initNetwork()

    let lastTime = performance.now()

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.666, 2.0)
      lastTime = time

      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      const isDark = document.documentElement.classList.contains('dark')
      const lineColor = isDark ? LINE_COLORS.dark : LINE_COLORS.light
      const palette = isDark ? COLORS_DARK : COLORS_LIGHT

      // 1. Update Nodes with gentle drift + mouse interaction
      nodes.forEach((node, idx) => {
        node.color = palette[idx % palette.length]
        node.driftAngle += node.driftSpeed * dt

        // Organic sinusoidal wave offset
        node.x += (node.vx + Math.cos(node.driftAngle) * 0.15) * dt
        node.y += (node.vy + Math.sin(node.driftAngle) * 0.15) * dt

        // Soft border wrap
        const margin = 60
        if (node.x < -margin) node.x = w + margin
        if (node.x > w + margin) node.x = -margin
        if (node.y < -margin) node.y = h + margin
        if (node.y > h + margin) node.y = -margin

        // Interactive mouse interaction (repulsion & subtle magnet)
        if (mouseX > 0 && mouseY > 0) {
          const dx = node.x - mouseX
          const dy = node.y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          const influence = 170 * (1 - node.z * 0.4)

          if (dist < influence && dist > 1) {
            const force = (1 - dist / influence) * 0.35 * (1 - node.z) * dt
            const angle = Math.atan2(dy, dx)
            node.x += Math.cos(angle) * force
            node.y += Math.sin(angle) * force
          }
        }
      })

      // 2. Draw Connections
      const activeConnections: { from: number; to: number; dist: number; avgZ: number }[] = []

      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]

          const zDist = Math.abs(n1.z - n2.z)
          if (zDist > 0.32) continue

          const dx = n1.x - n2.x
          const dy = n1.y - n2.y
          const distSq = dx * dx + dy * dy

          if (distSq > connectionDist * connectionDist) continue

          const dist = Math.sqrt(distSq)
          const avgZ = (n1.z + n2.z) / 2
          activeConnections.push({ from: i, to: j, dist, avgZ })

          const alphaMultiplier = (1.0 - dist / connectionDist) * (1 - avgZ * 0.65)

          ctx.beginPath()
          ctx.moveTo(n1.x, n1.y)
          ctx.lineTo(n2.x, n2.y)
          ctx.strokeStyle = lineColor
          ctx.globalAlpha = alphaMultiplier
          ctx.lineWidth = 0.9 + (1 - avgZ) * 0.5
          ctx.stroke()
        }
      }

      // Draw active cursor thread to closest nodes
      if (mouseX > 0 && mouseY > 0) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i]
          if (n.z > 0.4) continue
          const dx = n.x - mouseX
          const dy = n.y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(mouseX, mouseY)
            ctx.lineTo(n.x, n.y)
            ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.22)' : 'rgba(2, 132, 199, 0.18)'
            ctx.globalAlpha = (1 - dist / 130) * (1 - n.z)
            ctx.lineWidth = 1.1
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1.0

      // 3. Draw Nodes (with Gateway Hub concentric rings)
      nodes.forEach((node) => {
        node.pulse += node.pulseSpeed * dt
        const scale = 1 - node.z * 0.55
        const currentRadius = (node.baseRadius + Math.sin(node.pulse) * 0.4) * scale

        // Outer concentric glow ring on cluster hub nodes
        if (node.isHub) {
          const hubGlow = (node.baseRadius * 2.6 + Math.sin(node.pulse * 1.5) * 2) * scale
          ctx.beginPath()
          ctx.arc(node.x, node.y, hubGlow, 0, Math.PI * 2)
          ctx.strokeStyle = node.color
          ctx.globalAlpha = 0.25 * (1 - node.z)
          ctx.lineWidth = 1
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.globalAlpha = 1 - node.z * 0.65

        if (isDark && node.z < 0.35) {
          ctx.shadowBlur = 9 * (1 - node.z)
          ctx.shadowColor = node.color
        } else {
          ctx.shadowBlur = 0
        }

        ctx.fill()
      })

      ctx.shadowBlur = 0
      ctx.globalAlpha = 1.0

      // 4. Neural Signal Packets
      if (signals.length < 35 && activeConnections.length > 0 && Math.random() < 0.22) {
        const conn = activeConnections[Math.floor(Math.random() * activeConnections.length)]
        signals.push({
          fromIndex: conn.from,
          toIndex: conn.to,
          progress: 0,
          speed: (0.016 + Math.random() * 0.02) * (prefersReducedMotion ? 0.2 : 1),
          color: SIGNAL_COLORS[Math.floor(Math.random() * SIGNAL_COLORS.length)],
        })
      }

      // 5. Update & Draw Signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const sig = signals[i]
        sig.progress += sig.speed * dt

        const nFrom = nodes[sig.fromIndex]
        const nTo = nodes[sig.toIndex]

        if (sig.progress >= 1.0) {
          if (nTo) {
            nodePulses.push({
              x: nTo.x,
              y: nTo.y,
              z: nTo.z,
              radius: 1.5,
              maxRadius: (22 + Math.random() * 10) * (1 - nTo.z * 0.45),
              alpha: 0.75 * (1 - nTo.z * 0.45),
              color: sig.color,
            })
          }
          signals.splice(i, 1)
          continue
        }

        if (nFrom && nTo) {
          const currentX = nFrom.x + (nTo.x - nFrom.x) * sig.progress
          const currentY = nFrom.y + (nTo.y - nFrom.y) * sig.progress
          const currentZ = nFrom.z + (nTo.z - nFrom.z) * sig.progress

          const scale = 1 - currentZ * 0.55

          ctx.beginPath()
          ctx.arc(currentX, currentY, 2.2 * scale, 0, Math.PI * 2)
          ctx.fillStyle = sig.color
          ctx.globalAlpha = 1 - currentZ * 0.45

          if (isDark && currentZ < 0.4) {
            ctx.shadowBlur = 8
            ctx.shadowColor = sig.color
          }

          ctx.fill()
          ctx.shadowBlur = 0
          ctx.globalAlpha = 1.0
        }
      }

      // 6. Draw Pulse Waves
      for (let i = nodePulses.length - 1; i >= 0; i--) {
        const pulse = nodePulses[i]
        pulse.radius += 0.85 * (1 - pulse.z * 0.5) * dt
        pulse.alpha -= 0.024 * dt

        if (pulse.radius > pulse.maxRadius) pulse.alpha -= 0.05 * dt

        if (pulse.alpha <= 0) {
          nodePulses.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2)
        ctx.strokeStyle = pulse.color
        ctx.globalAlpha = Math.max(0, pulse.alpha)
        ctx.lineWidth = 1.2 * (1 - pulse.z * 0.5)
        ctx.stroke()
        ctx.globalAlpha = 1.0
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(resizeTimeout)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-95 dark:opacity-75"
      />
    </div>
  )
}
