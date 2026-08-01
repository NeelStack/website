'use client'

import React, { useEffect, useRef } from 'react'

interface Node3D {
  x: number
  y: number
  z: number
  baseX: number
  baseY: number
  baseZ: number
  vx: number
  vy: number
  vz: number
  radius: number
  color: string
  glowColor: string
  pulse: number
  pulseSpeed: number
  freqX: number
  freqY: number
  freqZ: number
  ampX: number
  ampY: number
  ampZ: number
  phaseX: number
  phaseY: number
  phaseZ: number
}

interface SparkParticle {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  radius: number
  alpha: number
  decay: number
}

interface ShockwaveRing {
  x: number
  y: number
  radius: number
  maxRadius: number
  alpha: number
  color: string
}

interface SnakeTrail {
  path: number[]
  progress: number
  segmentIndex: number
  speed: number
  color: string
  tail: { x: number; y: number; opacity: number }[]
}

const COLOR_SCHEMES = [
  { core: '#38bdf8', glow: 'rgba(56, 189, 248, 0.35)' }, // Soft Electric Cyan
  { core: '#60a5fa', glow: 'rgba(96, 165, 250, 0.35)' }, // Soft Sapphire Blue
  { core: '#c084fc', glow: 'rgba(192, 132, 252, 0.35)' }, // Soft Royal Violet
  { core: '#22d3ee', glow: 'rgba(34, 211, 238, 0.35)' },  // Soft Neon Cyan
  { core: '#34d399', glow: 'rgba(52, 211, 153, 0.35)' },  // Soft Emerald
]

export function AiNetworkBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = (canvas.width = window.innerWidth * dpr)
    let height = (canvas.height = window.innerHeight * dpr)
    ctx.scale(dpr, dpr)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth * dpr
      height = canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
    }

    window.addEventListener('resize', handleResize)

    const displayWidth = window.innerWidth
    const displayHeight = window.innerHeight

    // ─── Generate Antigravity Fluid 3D Neural Nodes ───
    const nodeCount = 44
    const nodes: Node3D[] = []

    for (let i = 0; i < nodeCount; i++) {
      let x = 0
      let y = 0
      const z = (Math.random() - 0.5) * 400

      // Cleared center zone for perfect desktop text legibility
      const region = i % 10
      if (region < 4) {
        x = (-0.48 + Math.random() * 0.20) * displayWidth
        y = (Math.random() - 0.5) * displayHeight * 0.95
      } else if (region < 8) {
        x = (0.28 + Math.random() * 0.20) * displayWidth
        y = (Math.random() - 0.5) * displayHeight * 0.95
      } else {
        x = (Math.random() - 0.5) * displayWidth * 0.88
        y = (Math.random() > 0.5 ? 0.38 : -0.38) * displayHeight
      }

      const scheme = COLOR_SCHEMES[i % COLOR_SCHEMES.length]

      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        vx: 0,
        vy: 0,
        vz: 0,
        radius: Math.random() * 1.8 + 3.0,
        color: scheme.core,
        glowColor: scheme.glow,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.012 + Math.random() * 0.015,
        freqX: 0.4 + Math.random() * 0.6,
        freqY: 0.4 + Math.random() * 0.6,
        freqZ: 0.3 + Math.random() * 0.5,
        ampX: 25 + Math.random() * 35,
        ampY: 25 + Math.random() * 35,
        ampZ: 20 + Math.random() * 30,
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        phaseZ: Math.random() * Math.PI * 2,
      })
    }

    // Autonomous Explosions & Shockwaves (No user click required)
    const sparks: SparkParticle[] = []
    const shockwaves: ShockwaveRing[] = []

    // Interactive Neural Streams
    const snakes: SnakeTrail[] = [
      {
        path: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
        progress: 0,
        segmentIndex: 0,
        speed: 0.012,
        color: '#38bdf8',
        tail: [],
      },
      {
        path: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41],
        progress: 0.33,
        segmentIndex: 0,
        speed: 0.014,
        color: '#c084fc',
        tail: [],
      },
      {
        path: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42],
        progress: 0.66,
        segmentIndex: 0,
        speed: 0.013,
        color: '#34d399',
        tail: [],
      },
    ]

    // Mouse Parallax & Antigravity Cursor Position Tracking
    let targetRotX = 0
    let targetRotY = 0
    let rotX = 0
    let rotY = 0
    let mouseX3D = 9999
    let mouseY3D = 9999

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / displayWidth - 0.5) * 2
      const normY = (e.clientY / displayHeight - 0.5) * 2
      targetRotY = normX * 0.22
      targetRotX = -normY * 0.22

      const centerX = displayWidth / 2
      const centerY = displayHeight / 2
      mouseX3D = e.clientX - centerX
      mouseY3D = e.clientY - centerY
    }

    window.addEventListener('mousemove', handleMouseMove, { capture: true, passive: true })

    const focalLength = 380
    let angle = 0
    let startTime = Date.now()
    let lastAutoBurstTime = Date.now()
    let nextBurstDelay = 2500 // Trigger auto-burst every 2.5s

    // Render loop (60 FPS Antigravity Engine)
    const render = () => {
      ctx.clearRect(0, 0, displayWidth, displayHeight)

      const isDark = document.documentElement.classList.contains('dark')
      const synapseLineColor = isDark ? 'rgba(56, 189, 248, 0.14)' : 'rgba(2, 132, 199, 0.12)'

      const now = Date.now()
      const time = (now - startTime) * 0.0012

      // Smooth camera rotation
      rotX += (targetRotX - rotX) * 0.04
      rotY += (targetRotY - rotY) * 0.04
      angle += 0.0015

      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)
      const cosY = Math.cos(rotY + angle)
      const sinY = Math.sin(rotY + angle)

      const centerX = displayWidth / 2
      const centerY = displayHeight / 2

      // Project 3D nodes with Harmonic Zero-G Physics
      const projected = nodes.map((node, i) => {
        const targetFloatX = Math.sin(time * node.freqX + node.phaseX) * node.ampX
        const targetFloatY = Math.cos(time * node.freqY + node.phaseY) * node.ampY
        const targetFloatZ = Math.sin(time * node.freqZ + node.phaseZ) * node.ampZ

        const currX = node.x
        const currY = node.y
        const dxMouse = currX - mouseX3D
        const dyMouse = currY - mouseY3D
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

        if (distMouse < 220) {
          const repulseForce = (1 - distMouse / 220) * 1.8
          node.vx += (dxMouse / distMouse) * repulseForce
          node.vy += (dyMouse / distMouse) * repulseForce
        }

        node.x += node.vx
        node.y += node.vy
        node.z += node.vz

        node.vx += (node.baseX + targetFloatX - node.x) * 0.02
        node.vy += (node.baseY + targetFloatY - node.y) * 0.02
        node.vz += (node.baseZ + targetFloatZ - node.z) * 0.02

        node.vx *= 0.90
        node.vy *= 0.90
        node.vz *= 0.90

        let x1 = node.x * cosY - node.z * sinY
        let z1 = node.z * cosY + node.x * sinY

        let y1 = node.y * cosX - z1 * sinX
        let z2 = z1 * cosX + node.y * sinX

        const scale = focalLength / (focalLength + z2 + 300)
        const projX = centerX + x1 * scale
        const projY = centerY + y1 * scale

        return {
          index: i,
          node,
          projX,
          projY,
          scale,
          z: z2,
          pulse: Math.sin(node.pulse),
        }
      })

      // ─── Autonomous Auto-Exploding Firing Engine ───
      if (now - lastAutoBurstTime > nextBurstDelay) {
        lastAutoBurstTime = now
        nextBurstDelay = 2200 + Math.random() * 1800 // Next burst in 2.2s - 4.0s

        // Select a random node that is currently in view
        const targetProj = projected[Math.floor(Math.random() * projected.length)]
        if (targetProj && targetProj.scale > 0.6) {
          // 1. Mini shockwave ring
          shockwaves.push({
            x: targetProj.projX,
            y: targetProj.projY,
            radius: 8,
            maxRadius: 160,
            alpha: 0.75,
            color: targetProj.node.color,
          })

          // 2. Autonomous impulse force to nearby nodes
          nodes.forEach((node) => {
            const dx = node.x - targetProj.node.x
            const dy = node.y - targetProj.node.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist > 0 && dist < 220) {
              const force = (1 - dist / 220) * 8.0
              const angle = Math.atan2(dy, dx)
              node.vx += Math.cos(angle) * force
              node.vy += Math.sin(angle) * force
            }
          })

          // 3. Emit 12 ambient neon spark particles
          for (let k = 0; k < 12; k++) {
            const speed = Math.random() * 4.5 + 2.0
            const pAngle = Math.random() * Math.PI * 2
            sparks.push({
              x: targetProj.projX,
              y: targetProj.projY,
              vx: Math.cos(pAngle) * speed,
              vy: Math.sin(pAngle) * speed,
              color: targetProj.node.color,
              radius: Math.random() * 2.2 + 1.2,
              alpha: 0.85,
              decay: Math.random() * 0.022 + 0.016,
            })
          }
        }
      }

      const projMap = new Map(projected.map((p) => [p.index, p]))

      // Draw Synapse Pathways
      ctx.beginPath()
      ctx.strokeStyle = synapseLineColor
      ctx.lineWidth = 1.0

      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i]
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j]
          const dx = p1.projX - p2.projX
          const dy = p1.projY - p2.projY
          const distSq = dx * dx + dy * dy

          const midX = (p1.projX + p2.projX) / 2
          const midY = (p1.projY + p2.projY) / 2
          const distFromCenter = Math.sqrt((midX - centerX) ** 2 + (midY - centerY) ** 2)

          if (distSq < 34000 && distFromCenter > 200) {
            ctx.moveTo(p1.projX, p1.projY)
            ctx.lineTo(p2.projX, p2.projY)
          }
        }
      }
      ctx.stroke()

      // Render Shockwave Rings
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i]
        sw.radius += 6.0
        sw.alpha -= 0.03

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(56, 189, 248, ${sw.alpha * 0.7})`
        ctx.lineWidth = 1.8
        ctx.stroke()
      }

      // Render Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i]
        sp.x += sp.vx
        sp.y += sp.vy
        sp.vx *= 0.93
        sp.vy *= 0.93
        sp.alpha -= sp.decay

        if (sp.alpha <= 0) {
          sparks.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2)
        ctx.fillStyle = sp.color
        ctx.globalAlpha = sp.alpha
        ctx.fill()
        ctx.globalAlpha = 1.0
      }

      // Render Snake Neural Streams
      snakes.forEach((snake) => {
        snake.progress += snake.speed
        if (snake.progress >= 1) {
          snake.progress = 0
          snake.segmentIndex = (snake.segmentIndex + 1) % (snake.path.length - 1)
        }

        const idxA = snake.path[snake.segmentIndex]
        const idxB = snake.path[snake.segmentIndex + 1]
        const pA = projMap.get(idxA)
        const pB = projMap.get(idxB)

        if (pA && pB) {
          const headX = pA.projX + (pB.projX - pA.projX) * snake.progress
          const headY = pA.projY + (pB.projY - pA.projY) * snake.progress

          snake.tail.unshift({ x: headX, y: headY, opacity: 1.0 })
          if (snake.tail.length > 10) snake.tail.pop()

          for (let k = 0; k < snake.tail.length; k++) {
            const seg = snake.tail[k]
            const alpha = (1 - k / snake.tail.length) * 0.7
            const segRadius = (1 - k / snake.tail.length) * 3.8 + 1.2

            ctx.beginPath()
            ctx.arc(seg.x, seg.y, segRadius, 0, Math.PI * 2)
            ctx.fillStyle = k === 0 ? '#ffffff' : snake.color
            ctx.globalAlpha = alpha
            ctx.fill()
            ctx.globalAlpha = 1.0
          }
        }
      })

      // Sort by Z for 3D sphere depth rendering
      projected.sort((a, b) => b.z - a.z)

      // Draw Compact Glass 3D Sphere Neural Nodes (Strictly small)
      projected.forEach(({ node, projX, projY, scale }) => {
        const radius = Math.min(Math.max(node.radius * scale, 2.7), 4.8)

        // Compact Outer Glow
        const glowGrad = ctx.createRadialGradient(projX, projY, 0, projX, projY, radius * 2.2)
        glowGrad.addColorStop(0, node.glowColor)
        glowGrad.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.arc(projX, projY, radius * 2.2, 0, Math.PI * 2)
        ctx.fillStyle = glowGrad
        ctx.fill()

        // Volumetric Glass 3D Core Highlight
        const coreGrad = ctx.createRadialGradient(
          projX - radius * 0.35,
          projY - radius * 0.35,
          radius * 0.05,
          projX,
          projY,
          radius
        )
        coreGrad.addColorStop(0, '#ffffff')
        coreGrad.addColorStop(0.35, node.color)
        coreGrad.addColorStop(0.85, '#0284c7')
        coreGrad.addColorStop(1, '#0f172a')

        ctx.beginPath()
        ctx.arc(projX, projY, radius, 0, Math.PI * 2)
        ctx.fillStyle = coreGrad
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove, { capture: true })
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85 dark:opacity-90"
      />
    </div>
  )
}
