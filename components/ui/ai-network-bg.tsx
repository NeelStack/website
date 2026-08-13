'use client'

import React, { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  z: number // Depth: 0 (closest) to 1 (furthest)
  vx: number
  vy: number
  baseRadius: number
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
    const ctx = canvas.getContext('2d', { alpha: true }) // Optimize for transparency
    if (!ctx) return

    let animationFrameId: number
    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)

    let width = (canvas.width = window.innerWidth * dpr)
    let height = (canvas.height = window.innerHeight * dpr)
    ctx.scale(dpr, dpr)

    // Accessibility check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Resize management (Debounced to prevent garbage collection spikes)
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (!canvas) return
        width = canvas.width = window.innerWidth * dpr
        height = canvas.height = window.innerHeight * dpr
        ctx.setTransform(1, 0, 0, 1, 0, 0) // Reset transform
        ctx.scale(dpr, dpr)
        // We do NOT re-init the network, we just let nodes flow into the new bounds
      }, 250)
    }

    window.addEventListener('resize', handleResize)

    // Vibrant neon brand colors
    const COLORS = [
      'rgba(56, 189, 248, 0.65)',  // Cyan
      'rgba(96, 165, 250, 0.65)',  // Blue
      'rgba(192, 132, 252, 0.65)', // Violet
      'rgba(52, 211, 153, 0.65)',  // Emerald
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
    const maxNodes = 80 // Slightly increased for 3D density
    const connectionDist = 160 // Connection distance in pixels
    let mouseX = -9999
    let mouseY = -9999

    const initNetwork = () => {
      nodes = []
      signals = []
      nodePulses = []
      const w = window.innerWidth
      const h = window.innerHeight
      const speedMultiplier = prefersReducedMotion ? 0.05 : 1

      for (let i = 0; i < maxNodes; i++) {
        let x = Math.random() * w
        let y = Math.random() * h

        // Clear center zone for title text legibility
        const cx = w / 2
        const cy = h / 2
        const distFromCenter = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
        if (distFromCenter < 200) {
          const angle = Math.random() * Math.PI * 2
          const radius = 200 + Math.random() * 100
          x = cx + Math.cos(angle) * radius
          y = cy + Math.sin(angle) * radius
        }

        const z = Math.random() // 0 to 1

        nodes.push({
          x,
          y,
          z,
          // Deeper nodes move slower (parallax)
          vx: (Math.random() - 0.5) * 0.3 * (1 - z * 0.6) * speedMultiplier, 
          vy: (Math.random() - 0.5) * 0.3 * (1 - z * 0.6) * speedMultiplier,
          baseRadius: Math.random() * 1.5 + 2.0,
          color: COLORS[i % COLORS.length],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: (0.01 + Math.random() * 0.02) * speedMultiplier,
        })
      }
      
      // Sort nodes back-to-front so closer nodes render on top
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

    // Render loop
    const render = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      const isDark = document.documentElement.classList.contains('dark')
      const lineColor = isDark ? LINE_COLORS.dark : LINE_COLORS.light
      // Performance optimization: disable shadowBlur on low-end or dynamically, 
      // but we will keep a very low blur for closer nodes to maintain the 10/10 look.

      // 1. Update Nodes & Physics
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Wrap edges with a slight margin so they don't pop abruptly
        const margin = 50
        if (node.x < -margin) node.x = w + margin
        if (node.x > w + margin) node.x = -margin
        if (node.y < -margin) node.y = h + margin
        if (node.y > h + margin) node.y = -margin

        // Mouse Repulsion (only affects closer nodes strongly)
        if (mouseX > 0 && mouseY > 0) {
          const dx = node.x - mouseX
          const dy = node.y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          // Influence radius varies by depth (closer nodes dodge more)
          const influence = 180 * (1 - node.z * 0.5) 
          
          if (dist < influence) {
            const force = (1 - dist / influence) * 0.4 * (1 - node.z)
            const angle = Math.atan2(dy, dx)
            node.x += Math.cos(angle) * force
            node.y += Math.sin(angle) * force
          }
        }
      })

      // 2. Draw Connections (O(N^2) but constrained)
      const activeConnections: { from: number; to: number; dist: number; avgZ: number }[] = []

      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          
          // Only connect nodes that are reasonably close in Z-space (depth)
          // This creates distinct "layers" of networks rather than a messy spaghetti ball
          const zDist = Math.abs(n1.z - n2.z)
          if (zDist > 0.3) continue 

          const dx = n1.x - n2.x
          const dy = n1.y - n2.y
          
          // Fast distance check squared to avoid Math.sqrt if out of range
          if (dx * dx + dy * dy > connectionDist * connectionDist) continue
          
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          const avgZ = (n1.z + n2.z) / 2
          activeConnections.push({ from: i, to: j, dist, avgZ })

          const alphaMultiplier = (1.0 - dist / connectionDist) * (1 - avgZ * 0.7)
          
          ctx.beginPath()
          ctx.moveTo(n1.x, n1.y)
          ctx.lineTo(n2.x, n2.y)
          ctx.strokeStyle = lineColor
          ctx.globalAlpha = alphaMultiplier
          ctx.lineWidth = 1.0 + (1 - avgZ) * 0.5 // Closer lines are thicker
          ctx.stroke()
        }
      }
      ctx.globalAlpha = 1.0 // Reset

      // 3. Draw Nodes (Pre-sorted back to front)
      nodes.forEach((node) => {
        node.pulse += node.pulseSpeed
        const scale = 1 - node.z * 0.6 // Furthest nodes are 40% size
        const currentRadius = (node.baseRadius + Math.sin(node.pulse) * 0.5) * scale

        ctx.beginPath()
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        
        // Depth-based opacity and glow
        const alpha = 1 - node.z * 0.7
        ctx.globalAlpha = alpha
        
        if (isDark && node.z < 0.4) {
          ctx.shadowBlur = 8 * (1 - node.z) // Only closer nodes get expensive blur
          ctx.shadowColor = node.color
        } else {
          ctx.shadowBlur = 0
        }
        
        ctx.fill()
      })
      ctx.shadowBlur = 0
      ctx.globalAlpha = 1.0

      // 4. Spawn Neural Pulses
      if (signals.length < 40 && activeConnections.length > 0 && Math.random() < 0.25) {
        const conn = activeConnections[Math.floor(Math.random() * activeConnections.length)]
        signals.push({
          fromIndex: conn.from,
          toIndex: conn.to,
          progress: 0,
          speed: (0.015 + Math.random() * 0.02) * (prefersReducedMotion ? 0.2 : 1),
          color: SIGNAL_COLORS[Math.floor(Math.random() * SIGNAL_COLORS.length)],
        })
      }

      // 5. Update and Draw Signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const sig = signals[i]
        sig.progress += sig.speed

        const nFrom = nodes[sig.fromIndex]
        const nTo = nodes[sig.toIndex]

        if (sig.progress >= 1.0) {
          if (nTo) {
            nodePulses.push({
              x: nTo.x,
              y: nTo.y,
              z: nTo.z,
              radius: 1.5,
              maxRadius: (24 + Math.random() * 10) * (1 - nTo.z * 0.5),
              alpha: 0.8 * (1 - nTo.z * 0.5),
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
          
          const scale = 1 - currentZ * 0.6
          
          ctx.beginPath()
          ctx.arc(currentX, currentY, 2.0 * scale, 0, Math.PI * 2)
          ctx.fillStyle = sig.color
          ctx.globalAlpha = 1 - currentZ * 0.5
          
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
        pulse.radius += 0.8 * (1 - pulse.z * 0.5) // Further pulses expand slower
        pulse.alpha -= 0.025
        
        if (pulse.radius > pulse.maxRadius) pulse.alpha -= 0.05 // Fade out fast at edge

        if (pulse.alpha <= 0) {
          nodePulses.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2)
        ctx.strokeStyle = pulse.color
        ctx.globalAlpha = pulse.alpha
        ctx.lineWidth = 1.2 * (1 - pulse.z * 0.5)
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
      clearTimeout(resizeTimeout)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-95 dark:opacity-50 mix-blend-screen"
      />
    </div>
  )
}
