'use client'

import React, { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  pulse: number
  pulseSpeed: number
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
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)

    let width = (canvas.width = window.innerWidth * dpr)
    let height = (canvas.height = window.innerHeight * dpr)
    ctx.scale(dpr, dpr)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth * dpr
      height = canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      initNetwork()
    }

    window.addEventListener('resize', handleResize)

    // Vibrant neon brand colors
    const COLORS = [
      'rgba(56, 189, 248, 0.55)',  // Cyan
      'rgba(96, 165, 250, 0.55)',  // Blue
      'rgba(192, 132, 252, 0.55)', // Violet
      'rgba(52, 211, 153, 0.55)',  // Emerald
    ]

    const LINE_COLORS = {
      dark: 'rgba(56, 189, 248, 0.15)',
      light: 'rgba(2, 132, 199, 0.15)',
    }

    const SIGNAL_COLORS = [
      '#38bdf8', // Cyan
      '#60a5fa', // Blue
      '#c084fc', // Violet
      '#34d399', // Emerald
    ]

    let nodes: Node[] = []
    let signals: Signal[] = []
    let nodePulses: NodePulse[] = []
    const maxNodes = 75
    const connectionDist = 145
    let mouseX = -9999
    let mouseY = -9999

    const initNetwork = () => {
      nodes = []
      signals = []
      nodePulses = []
      const w = window.innerWidth
      const h = window.innerHeight

      for (let i = 0; i < maxNodes; i++) {
        let x = Math.random() * w
        let y = Math.random() * h

        // Clear center zone for title text legibility
        const cx = w / 2
        const cy = h / 2
        const distFromCenter = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
        if (distFromCenter < 180) {
          const angle = Math.random() * Math.PI * 2
          const radius = 180 + Math.random() * 100
          x = cx + Math.cos(angle) * radius
          y = cy + Math.sin(angle) * radius
        }

        nodes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.25, // Slightly faster drifting for 3D feel
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 1.5 + 2.0, // Thicker, highly visible nodes
          color: COLORS[i % COLORS.length],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
        })
      }
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

    // Render loop
    const render = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      const isDark = document.documentElement.classList.contains('dark')
      const lineColor = isDark ? LINE_COLORS.dark : LINE_COLORS.light

      // 1. Update and Draw Nodes
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Wrap edges
        if (node.x < 0) node.x = w
        if (node.x > w) node.x = 0
        if (node.y < 0) node.y = h
        if (node.y > h) node.y = 0

        // Push away slightly on hover
        if (mouseX > 0 && mouseY > 0) {
          const dx = node.x - mouseX
          const dy = node.y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180) {
            const force = (1 - dist / 180) * 0.35
            const angle = Math.atan2(dy, dx)
            node.x += Math.cos(angle) * force
            node.y += Math.sin(angle) * force
          }
        }

        // Draw node
        node.pulse += node.pulseSpeed
        const currentRadius = node.radius + Math.sin(node.pulse) * 0.35

        ctx.beginPath()
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.shadowBlur = isDark ? 6 : 0
        ctx.shadowColor = node.color
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // 2. Draw Connections
      const activeConnections: { from: number; to: number; dist: number }[] = []

      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          const dx = n1.x - n2.x
          const dy = n1.y - n2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDist) {
            activeConnections.push({ from: i, to: j, dist })

            const alphaMultiplier = 1.0 - dist / connectionDist
            ctx.beginPath()
            ctx.moveTo(n1.x, n1.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.strokeStyle = lineColor
            ctx.lineWidth = 1.2 * alphaMultiplier
            ctx.stroke()
          }
        }
      }

      // 3. Spawn Neural Pulses (more frequent for prominent network)
      if (signals.length < 35 && activeConnections.length > 0 && Math.random() < 0.2) {
        const conn = activeConnections[Math.floor(Math.random() * activeConnections.length)]
        signals.push({
          fromIndex: conn.from,
          toIndex: conn.to,
          progress: 0,
          speed: 0.012 + Math.random() * 0.018,
          color: SIGNAL_COLORS[Math.floor(Math.random() * SIGNAL_COLORS.length)],
        })
      }

      // 4. Update and Draw Signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const sig = signals[i]
        sig.progress += sig.speed

        const nFrom = nodes[sig.fromIndex]
        const nTo = nodes[sig.toIndex]

        if (sig.progress >= 1.0) {
          // Trigger a pulse wave at the destination node when signal arrives
          if (nTo) {
            nodePulses.push({
              x: nTo.x,
              y: nTo.y,
              radius: 1.5,
              maxRadius: 24 + Math.random() * 10,
              alpha: 0.75,
              color: sig.color,
            })
          }
          signals.splice(i, 1)
          continue
        }

        if (nFrom && nTo) {
          const currentX = nFrom.x + (nTo.x - nFrom.x) * sig.progress
          const currentY = nFrom.y + (nTo.y - nFrom.y) * sig.progress

          ctx.beginPath()
          ctx.arc(currentX, currentY, 1.8, 0, Math.PI * 2)
          ctx.fillStyle = sig.color
          ctx.shadowBlur = 6
          ctx.shadowColor = sig.color
          ctx.fill()
          ctx.shadowBlur = 0
        }
      }

      // 5. Draw Pulse Waves at Fired Connection Nodes
      for (let i = nodePulses.length - 1; i >= 0; i--) {
        const pulse = nodePulses[i]
        pulse.radius += 0.75
        pulse.alpha -= 0.022

        if (pulse.alpha <= 0) {
          nodePulses.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2)
        ctx.strokeStyle = pulse.color
        ctx.globalAlpha = pulse.alpha
        ctx.lineWidth = 0.8
        ctx.stroke()
        ctx.globalAlpha = 1.0
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-95 dark:opacity-100"
      />
    </div>
  )
}
