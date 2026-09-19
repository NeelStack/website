'use client'

import React, { useEffect, useRef } from 'react'

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * NEELSTACK // THE 3D CELESTIAL INTELLIGENCE COSMOS (ADVANCED NEURAL ENGINE)
 *
 * "Intelligence is not just software. It is a living, cosmic neural network."
 *
 * Visual Architecture:
 * 1. Logarithmic Spiral Galactic Arms + Ambient Deep Field Neural Constellations
 * 2. Active Synaptic Data Pulses — Luminous energy beacons streaming along connections
 * 3. 3D Volumetric Chromatic Nebula Glows — Ethereal multi-stop depth auroras
 * 4. Supermassive Hub Pulsar Nodes — Radar/sonar relativistic energy rings & JWST starbursts
 * 5. Accretion Halo Orbital Photons — Energy beads circulating along 3D orbital manifolds
 * 6. Interactive Magnetic Gravitational Lens — Nodes react organically to cursor/touch
 * 7. Dual-Theme Vibrant Color Science — Crisp sapphire/indigo in Light mode,
 *    radiant cyber-cyan/violet in Dark mode
 * 8. Celestial Shockwave Interaction — Relativistic gravitational earthquake on click
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ─── TYPES & INTERFACES ─────────────────────────────────────────────────────

interface Point3D {
  x: number
  y: number
  z: number
}

interface CelestialStarNode {
  id: number
  armIndex: number
  armOffset: number
  spiralDist: number
  x: number
  y: number
  z: number
  baseX: number
  baseY: number
  baseZ: number
  radius: number
  energy: number
  pulsePhase: number
  pulseSpeed: number
  colorType: 'cyan' | 'blue' | 'violet' | 'white' | 'indigo'
  orbitSpeed: number
  hasGlint: boolean
  isHub: boolean
  hubRingPhase: number
}

interface SynapticPulse {
  fromNodeId: number
  toNodeId: number
  progress: number // 0.0 to 1.0
  speed: number
  color: string
}

interface AccretionRing3D {
  id: number
  radius: number
  tiltX: number
  tiltY: number
  tiltZ: number
  rotSpeed: number
  rotPhase: number
  width: number
  darkColors: [string, string, string]
  lightColors: [string, string, string]
  photonAngle: number
}

interface OrbitalSatellite3D {
  id: number
  orbitRadius: number
  orbitAngle: number
  orbitSpeed: number
  tiltX: number
  tiltY: number
  tiltZ: number
  scale: number
  beaconPhase: number
}

interface CelestialQuake {
  epicenterX: number
  epicenterY: number
  time: number
  duration: number
  intensity: number
  waveRadius: number
  maxWaveRadius: number
  waveSpeed: number
}

interface QuantumSpark {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  life: number
  maxLife: number
  color: string
}

interface NebulaDustParticle3D {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  radius: number
  alpha: number
  life: number
  maxLife: number
  darkColor: string
  lightColor: string
}

interface NebulaCloud3D {
  x: number
  y: number
  z: number
  radius: number
  rotAngle: number
  rotSpeed: number
  darkGrad: [string, string]
  lightGrad: [string, string]
  pulsePhase: number
  pulseSpeed: number
}

export function AiNetworkBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2)

    let width = (canvas.width = window.innerWidth * dpr)
    let height = (canvas.height = window.innerHeight * dpr)
    ctx.scale(dpr, dpr)

    // Reduced Motion Detection
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let prefersReducedMotion = motionQuery.matches
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches
    }
    motionQuery.addEventListener('change', handleMotionChange)

    let isMobile = window.innerWidth < 768
    let isTablet = window.innerWidth >= 768 && window.innerWidth < 1024

    // Resize Handler
    let resizeTimer: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        if (!canvas) return
        isMobile = window.innerWidth < 768
        isTablet = window.innerWidth >= 768 && window.innerWidth < 1024
        width = canvas.width = window.innerWidth * dpr
        height = canvas.height = window.innerHeight * dpr
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.scale(dpr, dpr)
        initCelestialCosmos()
      }, 120)
    }
    window.addEventListener('resize', handleResize)

    // Visibility Management
    let isTabVisible = !document.hidden
    const handleVisibility = () => {
      isTabVisible = !document.hidden
      if (isTabVisible) lastFrameTime = performance.now()
    }
    document.addEventListener('visibilitychange', handleVisibility)

    let isInViewport = true
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewport = entry.isIntersecting
        if (isInViewport) lastFrameTime = performance.now()
      },
      { threshold: 0.05 }
    )
    observer.observe(canvas)

    // Mouse & 3D Celestial Camera Parallax State
    let mouseX = -9999
    let mouseY = -9999
    let targetCameraRotX = 0
    let targetCameraRotY = 0
    let cameraRotX = 0
    let cameraRotY = 0
    let mouseDecayTimer: ReturnType<typeof setTimeout>

    // Cosmos Entities
    let stars: CelestialStarNode[] = []
    let accretionRings: AccretionRing3D[] = []
    let satellites: OrbitalSatellite3D[] = []
    let activeQuakes: CelestialQuake[] = []
    let quantumSparks: QuantumSpark[] = []
    let nebulaDust: NebulaDustParticle3D[] = []
    let nebulaClouds: NebulaCloud3D[] = []
    let synapticPulses: SynapticPulse[] = []
    let activeConnectionsList: [number, number][] = []

    let lastFrameTime = performance.now()

    // ─── 1. INITIALIZE 3D CELESTIAL COSMOS ──────────────────────────────────
    const initCelestialCosmos = () => {
      stars = []
      accretionRings = []
      satellites = []
      activeQuakes = []
      quantumSparks = []
      nebulaDust = []
      nebulaClouds = []
      synapticPulses = []
      activeConnectionsList = []

      const baseR = isMobile ? 380 : isTablet ? 460 : 560

      // A. Build Outward-Framing Logarithmic Spiral Galactic Arms + Full-Field Ambient Nodes (More dots, subtle & serene)
      const starCount = isMobile ? 88 : isTablet ? 124 : 160
      const armCount = 3
      const colors: CelestialStarNode['colorType'][] = [
        'cyan',
        'blue',
        'violet',
        'white',
        'indigo',
        'cyan',
      ]

      for (let i = 0; i < starCount; i++) {
        const armIdx = i % armCount
        const armOffset = (armIdx * Math.PI * 2) / armCount

        // 75% stars on majestic logarithmic spiral arms, 25% ambient full-canvas celestial field nodes
        const isAmbientField = i >= Math.floor(starCount * 0.75)
        const isHub = i % 24 === 0 // ~4% prominent supermassive AI core nodes

        let x = 0
        let y = 0
        let z = 0
        let dist = 0

        if (!isAmbientField) {
          // Outward spiral arm distribution
          const u = 0.16 + Math.random() * 0.84
          const spiralAngle = u * Math.PI * 3.4 + armOffset
          dist = (baseR * 0.32 + u * baseR * 1.08) * (0.88 + Math.random() * 0.24)

          const dispersion = (isMobile ? 26 : 38) * (0.45 + u * 0.75)
          x = Math.cos(spiralAngle) * dist + (Math.random() - 0.5) * dispersion
          z = Math.sin(spiralAngle) * dist + (Math.random() - 0.5) * dispersion
          y =
            Math.sin(dist * 0.007 + spiralAngle) * (isMobile ? 36 : 46) * (1 - u * 0.2) +
            (Math.random() - 0.5) * dispersion * 0.8
        } else {
          // Full-viewport ambient constellation field nodes (ensuring full coverage top to bottom on mobile)
          const spreadW = isMobile ? (width / dpr) * 0.96 : baseR * 1.9
          const spreadH = isMobile ? (height / dpr) * 0.92 : baseR * 1.5
          x = (Math.random() - 0.5) * spreadW
          y = (Math.random() - 0.5) * spreadH
          z = (Math.random() - 0.5) * baseR * 1.3
          dist = Math.hypot(x, y, z)
        }

        const colorType = colors[i % colors.length]

        stars.push({
          id: i,
          armIndex: armIdx,
          armOffset,
          spiralDist: dist,
          x,
          y,
          z,
          baseX: x,
          baseY: y,
          baseZ: z,
          radius: isHub ? (Math.random() * 0.45 + 1.0) : (Math.random() * 0.45 + 0.42),
          energy: isHub ? 0.25 : (0.08 + Math.random() * 0.14),
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.006 + Math.random() * 0.008,
          colorType,
          orbitSpeed: (0.000022 + (isAmbientField ? 0.00001 : 0.000022)) * (isMobile ? 1.05 : 1.0),
          hasGlint: isHub || Math.random() < 0.12,
          isHub,
          hubRingPhase: Math.random() * Math.PI * 2,
        })
      }

      // B. Build 3D Volumetric Chromatic Nebula Glow Clouds (Subtle Ethereal Depth)
      const cloudCount = isMobile ? 2 : 3
      const cloudColorsDark: [string, string][] = isMobile
        ? [
          ['rgba(6, 182, 212, 0.12)', 'rgba(6, 182, 212, 0)'],
          ['rgba(59, 130, 246, 0.11)', 'rgba(59, 130, 246, 0)'],
          ['rgba(139, 92, 246, 0.10)', 'rgba(139, 92, 246, 0)'],
        ]
        : [
          ['rgba(6, 182, 212, 0.07)', 'rgba(6, 182, 212, 0)'],
          ['rgba(59, 130, 246, 0.07)', 'rgba(59, 130, 246, 0)'],
          ['rgba(139, 92, 246, 0.06)', 'rgba(139, 92, 246, 0)'],
        ]
      const cloudColorsLight: [string, string][] = [
        ['rgba(37, 99, 235, 0.05)', 'rgba(37, 99, 235, 0)'],
        ['rgba(79, 70, 229, 0.05)', 'rgba(79, 70, 229, 0)'],
        ['rgba(124, 58, 237, 0.04)', 'rgba(124, 58, 237, 0)'],
      ]

      for (let c = 0; c < cloudCount; c++) {
        const angle = (c * Math.PI * 2) / cloudCount + 0.3
        const dist = baseR * (0.45 + (c % 2) * 0.35)
        nebulaClouds.push({
          x: Math.cos(angle) * dist,
          y: Math.sin(angle * 1.5) * (baseR * 0.3),
          z: Math.sin(angle) * dist,
          radius: baseR * (0.65 + Math.random() * 0.35),
          rotAngle: angle,
          rotSpeed: (0.00003 + c * 0.00001) * (c % 2 === 0 ? 1 : -1),
          darkGrad: cloudColorsDark[c % cloudColorsDark.length],
          lightGrad: cloudColorsLight[c % cloudColorsLight.length],
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.005 + Math.random() * 0.005,
        })
      }

      // C. Build Accretion Halo Rings (Framing Perimeters + Photons)
      const ringConfigs = [
        {
          radius: baseR * 0.52,
          tiltX: 0.75,
          tiltY: 0.25,
          tiltZ: 0.15,
          rotSpeed: 0.00005,
          width: 0.75,
          dark: ['rgba(56, 189, 248, 0.22)', 'rgba(59, 130, 246, 0.18)', 'rgba(139, 92, 246, 0.18)'] as [string, string, string],
          light: ['rgba(37, 99, 235, 0.16)', 'rgba(79, 70, 229, 0.14)', 'rgba(124, 58, 237, 0.14)'] as [string, string, string],
        },
        {
          radius: baseR * 0.82,
          tiltX: 0.82,
          tiltY: -0.3,
          tiltZ: 0.35,
          rotSpeed: -0.00004,
          width: 0.65,
          dark: ['rgba(139, 92, 246, 0.18)', 'rgba(99, 102, 241, 0.16)', 'rgba(56, 189, 248, 0.16)'] as [string, string, string],
          light: ['rgba(79, 70, 229, 0.14)', 'rgba(37, 99, 235, 0.12)', 'rgba(2, 132, 199, 0.12)'] as [string, string, string],
        },
        {
          radius: baseR * 1.12,
          tiltX: -0.65,
          tiltY: 0.6,
          tiltZ: -0.2,
          rotSpeed: 0.00003,
          width: 0.55,
          dark: ['rgba(99, 102, 241, 0.16)', 'rgba(59, 130, 246, 0.14)', 'rgba(224, 242, 254, 0.16)'] as [string, string, string],
          light: ['rgba(37, 99, 235, 0.12)', 'rgba(99, 102, 241, 0.10)', 'rgba(2, 132, 199, 0.10)'] as [string, string, string],
        },
      ]

      ringConfigs.forEach((rc, i) => {
        accretionRings.push({
          id: i,
          radius: rc.radius,
          tiltX: rc.tiltX,
          tiltY: rc.tiltY,
          tiltZ: rc.tiltZ,
          rotSpeed: rc.rotSpeed,
          rotPhase: Math.random() * Math.PI * 2,
          width: rc.width,
          darkColors: rc.dark,
          lightColors: rc.light,
          photonAngle: Math.random() * Math.PI * 2,
        })
      })

      // D. Build 3D Orbital Quantum Probes (Crisp Geometric Satellites)
      const satelliteCount = isMobile ? 3 : 4
      for (let s = 0; s < satelliteCount; s++) {
        satellites.push({
          id: s,
          orbitRadius: baseR * (0.58 + s * 0.22),
          orbitAngle: (s * Math.PI * 2) / satelliteCount + Math.random(),
          orbitSpeed: (0.00006 + (satelliteCount - s) * 0.00002) * (s % 2 === 0 ? 1 : -1),
          tiltX: 0.45 + s * 0.18,
          tiltY: -0.3 + s * 0.22,
          tiltZ: s * 0.12,
          scale: isMobile ? 0.85 : 0.95,
          beaconPhase: Math.random() * Math.PI * 2,
        })
      }

      // E. Ambient Deep Cosmic Dust
      const dustCount = isMobile ? 12 : 18
      for (let d = 0; d < dustCount; d++) {
        nebulaDust.push({
          x: (Math.random() - 0.5) * (isMobile ? (width / dpr) * 1.3 : baseR * 2.8),
          y: (Math.random() - 0.5) * (isMobile ? (height / dpr) * 1.3 : baseR * 2.2),
          z: (Math.random() - 0.5) * baseR * 2.6,
          vx: (Math.random() - 0.5) * 0.03,
          vy: (Math.random() - 0.5) * 0.03,
          vz: (Math.random() - 0.5) * 0.03,
          radius: Math.random() * 0.7 + 0.3,
          alpha: Math.random() * 0.12 + 0.05,
          life: 0,
          maxLife: 320 + Math.random() * 350,
          darkColor: Math.random() > 0.5 ? '#38BDF8' : '#8B5CF6',
          lightColor: Math.random() > 0.5 ? '#2563EB' : '#7C3AED',
        })
      }
    }

    // ─── 2. INTERACTION & 3D PARALLAX CAMERA ────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      const cx = window.innerWidth * 0.5
      const cy = window.innerHeight * 0.5

      // Smooth 3D Camera Tilt Angles
      targetCameraRotY = (e.clientX - cx) * 0.00022
      targetCameraRotX = -(e.clientY - cy) * 0.00018

      clearTimeout(mouseDecayTimer)
      mouseDecayTimer = setTimeout(() => {
        targetCameraRotX = 0
        targetCameraRotY = 0
      }, 3500)
    }

    const handleMouseLeave = () => {
      mouseX = -9999
      mouseY = -9999
      targetCameraRotX = 0
      targetCameraRotY = 0
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        mouseX = touch.clientX
        mouseY = touch.clientY
        const cx = window.innerWidth * 0.5
        const cy = window.innerHeight * 0.5
        targetCameraRotY = (touch.clientX - cx) * 0.00028
        targetCameraRotX = -(touch.clientY - cy) * 0.00024
      }
    }

    const handleTouchEnd = () => {
      mouseX = -9999
      mouseY = -9999
    }

    // ─── CELESTIAL EARTHQUAKE TRIGGER (ON CLICK) ───────────────────────────
    const handleClick = (e: MouseEvent) => {
      if (prefersReducedMotion) return

      // 1. Trigger Gravitational Earthquake Wavefront
      activeQuakes.push({
        epicenterX: e.clientX,
        epicenterY: e.clientY,
        time: 0,
        duration: 1500,
        intensity: 1.0,
        waveRadius: 4,
        maxWaveRadius: Math.max(window.innerWidth, window.innerHeight) * 1.25,
        waveSpeed: 14.0,
      })

      // 2. High-Energy Supernova Excitation on Stars
      stars.forEach((star) => {
        star.energy = 0.90
      })

      // 3. Emit Micro Quantum Sparks
      const sparkCount = isMobile ? 10 : 20
      for (let k = 0; k < sparkCount; k++) {
        const angle = Math.random() * Math.PI * 2
        const spd = Math.random() * 3.8 + 1.2
        quantumSparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          radius: Math.random() * 1.2 + 0.5,
          alpha: 0.90,
          life: 0,
          maxLife: 42 + Math.random() * 22,
          color: Math.random() > 0.5 ? '#2563EB' : '#7C3AED',
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('click', handleClick, { passive: true })

    initCelestialCosmos()

    // ─── 3. 3D PERSPECTIVE PROJECTION MATRIX ────────────────────────────────
    const focalLength = 680

    function project3D(
      pt: Point3D,
      cx: number,
      cy: number,
      rotX: number,
      rotY: number,
      rotZ: number
    ): { screenX: number; screenY: number; scale: number; depth: number; rawZ: number } {
      // Rotate Y (Yaw)
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)
      const x1 = pt.x * cosY + pt.z * sinY
      const z1 = -pt.x * sinY + pt.z * cosY

      // Rotate X (Pitch)
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)
      const y2 = pt.y * cosX - z1 * sinX
      const z2 = pt.y * sinX + z1 * cosX

      // Rotate Z (Roll)
      const cosZ = Math.cos(rotZ)
      const sinZ = Math.sin(rotZ)
      const x3 = x1 * cosZ - y2 * sinZ
      const y3 = x1 * sinZ + y2 * cosZ
      const z3 = z2

      // Perspective scale
      const zDist = focalLength + z3
      const safeZ = Math.max(zDist, 40)
      const scale = focalLength / safeZ

      const screenX = cx + x3 * scale
      const screenY = cy + y3 * scale
      const depth = Math.max(0, Math.min(1, (z3 + 500) / 1000))

      return { screenX, screenY, scale, depth, rawZ: z3 }
    }

    // ─── 4. MAIN RENDER LOOP ────────────────────────────────────────────────
    let globalRotY = 0
    let globalRotX = 0.28
    let globalRotZ = 0.06
    let pulseSpawnTimer = 0

    const render = (currentTime: number) => {
      if (!isTabVisible || !isInViewport) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      const dt = Math.min((currentTime - lastFrameTime) / 16.666, 2.0)
      lastFrameTime = currentTime

      const w = window.innerWidth
      const h = window.innerHeight

      // ── CELESTIAL EARTHQUAKE CAMERA TREMOR SIMULATION ──
      let quakeShakeX = 0
      let quakeShakeY = 0
      let quakeShakeZ = 0

      for (let q = activeQuakes.length - 1; q >= 0; q--) {
        const quake = activeQuakes[q]
        quake.time += dt * 16.666
        quake.waveRadius += quake.waveSpeed * dt

        const progress = quake.time / quake.duration
        if (progress >= 1.0) {
          activeQuakes.splice(q, 1)
          continue
        }

        // High-frequency harmonic oscillation with exponential decay envelope
        const decay = Math.exp(-progress * 4.2) * (1 - progress)
        const freq = 0.048
        const shakeMag = quake.intensity * decay * (isMobile ? 3.5 : 6.0)

        quakeShakeX += Math.sin(quake.time * freq) * shakeMag
        quakeShakeY += Math.cos(quake.time * freq * 1.35 + 0.5) * shakeMag
        quakeShakeZ += Math.sin(quake.time * freq * 0.7) * (shakeMag * 0.002)
      }

      const cx = w * 0.5 + quakeShakeX
      const cy = h * 0.44 + quakeShakeY

      ctx.clearRect(0, 0, w, h)

      const isDark = document.documentElement.classList.contains('dark')

      // Smooth Camera Inertia + Quake Tilt
      cameraRotX += (targetCameraRotX - cameraRotX) * 0.05
      cameraRotY += (targetCameraRotY - cameraRotY) * 0.05

      if (!prefersReducedMotion) {
        globalRotY += 0.000045 * dt + cameraRotY * 0.03
        globalRotX = 0.28 + cameraRotX + quakeShakeZ
      }

      // Hero Typographic Quiet Zone Ellipse Radii (Balanced protection allowing full visibility)
      const calmRx = isMobile ? 140 : 300
      const calmRy = isMobile ? 95 : 160

      // ── A. Render 3D Volumetric Chromatic Nebula Glow Clouds ──
      ctx.save()
      if (isDark) ctx.globalCompositeOperation = 'screen'
      nebulaClouds.forEach((cloud) => {
        if (!prefersReducedMotion) {
          cloud.rotAngle += cloud.rotSpeed * dt
          cloud.pulsePhase += cloud.pulseSpeed * dt
        }

        const currentDist = Math.hypot(cloud.x, cloud.z)
        const cX = Math.cos(cloud.rotAngle) * currentDist
        const cZ = Math.sin(cloud.rotAngle) * currentDist

        const proj = project3D(
          { x: cX, y: cloud.y, z: cZ },
          cx,
          cy,
          globalRotX,
          globalRotY,
          globalRotZ
        )

        const pulse = 1 + Math.sin(cloud.pulsePhase) * 0.15
        const r = cloud.radius * proj.scale * pulse

        const grad = ctx.createRadialGradient(proj.screenX, proj.screenY, 0, proj.screenX, proj.screenY, r)
        const colors = isDark ? cloud.darkGrad : cloud.lightGrad
        grad.addColorStop(0, colors[0])
        grad.addColorStop(1, colors[1])

        ctx.beginPath()
        ctx.arc(proj.screenX, proj.screenY, r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })
      ctx.restore()

      // ── B. Render Gravitational Earthquake Ripple Rings ──
      ctx.save()
      for (let q = 0; q < activeQuakes.length; q++) {
        const quake = activeQuakes[q]
        const progress = quake.time / quake.duration
        const alpha = Math.max(0, (1 - progress) * 0.38)

        // Primary Concentric Warp Ring
        ctx.beginPath()
        ctx.arc(quake.epicenterX, quake.epicenterY, quake.waveRadius, 0, Math.PI * 2)
        ctx.strokeStyle = isDark ? `rgba(56, 189, 248, ${alpha})` : `rgba(37, 99, 235, ${alpha * 0.70})`
        ctx.lineWidth = 1.0
        ctx.stroke()

        // Harmonic Secondary Echo Wavefront
        if (quake.waveRadius > 35) {
          ctx.beginPath()
          ctx.arc(quake.epicenterX, quake.epicenterY, quake.waveRadius * 0.78, 0, Math.PI * 2)
          ctx.strokeStyle = isDark ? `rgba(139, 92, 246, ${alpha * 0.55})` : `rgba(124, 58, 237, ${alpha * 0.45})`
          ctx.lineWidth = 0.7
          ctx.stroke()
        }
      }
      ctx.restore()

      // ── C. Render Micro Quantum Sparks ──
      ctx.save()
      for (let k = quantumSparks.length - 1; k >= 0; k--) {
        const spark = quantumSparks[k]
        spark.x += spark.vx * dt
        spark.y += spark.vy * dt
        spark.vx *= 0.96
        spark.vy *= 0.96
        spark.life += dt

        const fade = 1 - spark.life / spark.maxLife
        if (fade <= 0) {
          quantumSparks.splice(k, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(spark.x, spark.y, spark.radius * fade, 0, Math.PI * 2)
        ctx.fillStyle = spark.color
        ctx.globalAlpha = isDark ? spark.alpha * fade * 0.8 : spark.alpha * fade * 0.6
        ctx.fill()
      }
      ctx.restore()

      // ── D. Render Ambient Cosmic Dust ──
      ctx.save()
      for (let d = nebulaDust.length - 1; d >= 0; d--) {
        const pt = nebulaDust[d]
        if (!prefersReducedMotion) {
          pt.x += pt.vx * dt
          pt.y += pt.vy * dt
          pt.z += pt.vz * dt
          pt.life += dt
        }

        const proj = project3D(
          { x: pt.x, y: pt.y, z: pt.z },
          cx,
          cy,
          globalRotX,
          globalRotY,
          globalRotZ
        )

        const fade = 1 - pt.life / pt.maxLife
        if (fade <= 0) {
          nebulaDust.splice(d, 1)
          continue
        }

        // Hero Quiet Zone Dampening
        const cdx = proj.screenX - cx
        const cdy = proj.screenY - cy
        const calmNorm = Math.sqrt((cdx / calmRx) ** 2 + (cdy / calmRy) ** 2)
        const textCalmAlpha = calmNorm < 1.0 ? Math.max(0.38, 0.38 + calmNorm * 0.62) : 1.0

        const depthAlpha = Math.max(0.10, 1 - proj.depth * 0.5) * textCalmAlpha
        ctx.beginPath()
        ctx.arc(proj.screenX, proj.screenY, Math.max(0.45, pt.radius * proj.scale), 0, Math.PI * 2)
        ctx.fillStyle = isDark ? pt.darkColor : pt.lightColor
        ctx.globalAlpha = isDark ? pt.alpha * fade * depthAlpha * 0.45 : pt.alpha * fade * depthAlpha * 0.32
        ctx.fill()
      }
      ctx.restore()

      // ── E. Render Accretion Halo Rings + Orbiting Photons ──
      ctx.save()
      if (isDark) ctx.globalCompositeOperation = 'screen'

      accretionRings.forEach((ring) => {
        ring.rotPhase += ring.rotSpeed * dt
        ring.photonAngle += (ring.rotSpeed * 8) * dt

        const ringSegments = isMobile ? 48 : 72
        const ringPoints: { screenX: number; screenY: number; scale: number; depth: number }[] = []

        for (let s = 0; s <= ringSegments; s++) {
          const angle = (s * Math.PI * 2) / ringSegments
          const currentR = ring.radius

          const lx = currentR * Math.cos(angle)
          const ly = currentR * Math.sin(angle)
          const lz = 0

          const cosTX = Math.cos(ring.tiltX + ring.rotPhase)
          const sinTX = Math.sin(ring.tiltX + ring.rotPhase)
          const y1 = ly * cosTX - lz * sinTX
          const z1 = ly * sinTX + lz * cosTX

          const cosTY = Math.cos(ring.tiltY)
          const sinTY = Math.sin(ring.tiltY)
          const x2 = lx * cosTY + z1 * sinTY
          const z2 = -lx * sinTY + z1 * cosTY

          const proj = project3D(
            { x: x2, y: y1, z: z2 },
            cx,
            cy,
            globalRotX,
            globalRotY,
            globalRotZ
          )
          ringPoints.push(proj)
        }

        if (ringPoints.length > 2) {
          ctx.beginPath()
          ctx.moveTo(ringPoints[0].screenX, ringPoints[0].screenY)
          for (let i = 1; i < ringPoints.length - 1; i++) {
            const xc = (ringPoints[i].screenX + ringPoints[i + 1].screenX) / 2
            const yc = (ringPoints[i].screenY + ringPoints[i + 1].screenY) / 2
            ctx.quadraticCurveTo(ringPoints[i].screenX, ringPoints[i].screenY, xc, yc)
          }
          ctx.closePath()

          const grad = ctx.createLinearGradient(0, 0, w, 0)
          const colors = isDark ? ring.darkColors : ring.lightColors
          grad.addColorStop(0, colors[0])
          grad.addColorStop(0.5, colors[1])
          grad.addColorStop(1, colors[2])

          ctx.strokeStyle = grad
          ctx.lineWidth = ring.width
          ctx.globalAlpha = isDark ? 0.16 : 0.12
          ctx.stroke()

          // Render Orbiting Accretion Photon
          const photonAngle = ring.photonAngle
          const plx = ring.radius * Math.cos(photonAngle)
          const ply = ring.radius * Math.sin(photonAngle)
          const cosTX = Math.cos(ring.tiltX + ring.rotPhase)
          const sinTX = Math.sin(ring.tiltX + ring.rotPhase)
          const py1 = ply * cosTX
          const pz1 = ply * sinTX
          const cosTY = Math.cos(ring.tiltY)
          const sinTY = Math.sin(ring.tiltY)
          const px2 = plx * cosTY + pz1 * sinTY
          const pz2 = -plx * sinTY + pz1 * cosTY

          const pProj = project3D({ x: px2, y: py1, z: pz2 }, cx, cy, globalRotX, globalRotY, globalRotZ)
          ctx.beginPath()
          ctx.arc(pProj.screenX, pProj.screenY, Math.max(0.8, 1.6 * pProj.scale), 0, Math.PI * 2)
          ctx.fillStyle = isDark ? '#38BDF8' : '#2563EB'
          ctx.globalAlpha = isDark ? 0.85 : 0.65
          ctx.fill()
        }
      })
      ctx.restore()

      // ── F. Update & Project Star Nodes with Gravitational Interactivity ──
      const projectedStars: {
        star: CelestialStarNode
        screenX: number
        screenY: number
        scale: number
        depth: number
        rawZ: number
        textCalmAlpha: number
      }[] = []

      stars.forEach((star) => {
        if (!prefersReducedMotion) {
          // Autonomous Galactic Orbit (Slow, graceful, majestic drift)
          const angle = Math.atan2(star.z, star.x) + star.orbitSpeed * dt
          const dist = Math.hypot(star.x, star.z)
          star.x = Math.cos(angle) * dist
          star.z = Math.sin(angle) * dist
          star.y = star.baseY + Math.sin(currentTime * 0.00015 + star.id) * 2.5

          star.pulsePhase += star.pulseSpeed * dt
          star.energy = Math.max(0.10, star.energy - 0.002 * dt)
          if (star.isHub) {
            star.hubRingPhase += 0.012 * dt
          }
        }

        const proj = project3D(
          { x: star.x, y: star.y, z: star.z },
          cx,
          cy,
          globalRotX,
          globalRotY,
          globalRotZ
        )

        let finalScreenX = proj.screenX
        let finalScreenY = proj.screenY

        // Apply Physical Ripple Displacement from Active Gravitational Quakes
        for (let q = 0; q < activeQuakes.length; q++) {
          const quake = activeQuakes[q]
          const qdx = finalScreenX - quake.epicenterX
          const qdy = finalScreenY - quake.epicenterY
          const qdist = Math.hypot(qdx, qdy)

          if (qdist > 0) {
            const distFromWave = Math.abs(qdist - quake.waveRadius)
            const waveWidth = 125
            if (distFromWave < waveWidth) {
              const phase = (1 - distFromWave / waveWidth) * Math.PI
              const progress = quake.time / quake.duration
              const dispMag = Math.sin(phase) * (isMobile ? 10 : 18) * (1 - progress) * quake.intensity
              finalScreenX += (qdx / qdist) * dispMag
              finalScreenY += (qdy / qdist) * dispMag
            }
          }
        }

        // Hero Typographic Quiet Zone
        const cdx = finalScreenX - cx
        const cdy = finalScreenY - cy
        const calmNorm = Math.sqrt((cdx / calmRx) ** 2 + (cdy / calmRy) ** 2)
        const textCalmAlpha = calmNorm < 1.0 ? Math.max(0.38, 0.38 + calmNorm * 0.62) : 1.0

        projectedStars.push({
          star,
          screenX: finalScreenX,
          screenY: finalScreenY,
          scale: proj.scale,
          depth: proj.depth,
          rawZ: proj.rawZ,
          textCalmAlpha,
        })
      })

      // Depth Sort (Z-Buffer)
      projectedStars.sort((a, b) => b.rawZ - a.rawZ)

      // ── G. Render Gravitational Synaptic Cosmic Web (Interstellar Links) ──
      const maxConnectDist3D = isMobile ? 92 : 100
      const maxConnectDistSq = maxConnectDist3D * maxConnectDist3D
      activeConnectionsList = []

      ctx.save()
      for (let i = 0; i < projectedStars.length; i++) {
        const ps1 = projectedStars[i]
        let connections = 0

        for (let j = i + 1; j < projectedStars.length; j++) {
          const ps2 = projectedStars[j]

          const dx3 = ps1.star.x - ps2.star.x
          const dy3 = ps1.star.y - ps2.star.y
          const dz3 = ps1.star.z - ps2.star.z
          const dist3DSq = dx3 * dx3 + dy3 * dy3 + dz3 * dz3

          if (dist3DSq <= maxConnectDistSq) {
            const dist3D = Math.sqrt(dist3DSq)
            const avgDepth = (ps1.depth + ps2.depth) / 2
            const avgEnergy = (ps1.star.energy + ps2.star.energy) / 2
            const avgTextCalm = (ps1.textCalmAlpha + ps2.textCalmAlpha) / 2

            const depthFactor = Math.max(0.12, 1 - avgDepth * 0.45) * avgTextCalm
            const alpha = (1 - dist3D / maxConnectDist3D) * 0.18 * depthFactor * (0.35 + avgEnergy * 0.65)

            ctx.beginPath()
            ctx.moveTo(ps1.screenX, ps1.screenY)
            ctx.lineTo(ps2.screenX, ps2.screenY)

            if (isDark) {
              ctx.strokeStyle = avgEnergy > 0.4 ? '#38BDF8' : '#6366F1'
              ctx.lineWidth = isMobile ? 0.70 : 0.50
              ctx.globalAlpha = isMobile ? alpha * 0.75 : alpha * 0.38
            } else {
              ctx.strokeStyle = avgEnergy > 0.4 ? '#2563EB' : '#4F46E5'
              ctx.lineWidth = isMobile ? 0.70 : 0.50
              ctx.globalAlpha = isMobile ? alpha * 0.55 : alpha * 0.28
            }

            ctx.stroke()
            activeConnectionsList.push([ps1.star.id, ps2.star.id])

            connections++
            if (connections >= (isMobile ? 1 : 2)) break
          }
        }
      }
      ctx.restore()

      // ── H. Spawn & Render Flowing Synaptic Data Pulses (Active Intelligence Flow) ──
      pulseSpawnTimer += dt
      if (pulseSpawnTimer > (isMobile ? 26 : 18) && activeConnectionsList.length > 0 && !prefersReducedMotion) {
        pulseSpawnTimer = 0
        const randPair = activeConnectionsList[Math.floor(Math.random() * activeConnectionsList.length)]
        const forward = Math.random() > 0.5
        synapticPulses.push({
          fromNodeId: forward ? randPair[0] : randPair[1],
          toNodeId: forward ? randPair[1] : randPair[0],
          progress: 0,
          speed: 0.012 + Math.random() * 0.012,
          color: isDark
            ? (Math.random() > 0.5 ? '#38BDF8' : '#A855F7')
            : (Math.random() > 0.5 ? '#2563EB' : '#7C3AED'),
        })
      }

      // Render Synaptic Pulses
      ctx.save()
      const starMap = new Map(projectedStars.map(ps => [ps.star.id, ps]))
      for (let p = synapticPulses.length - 1; p >= 0; p--) {
        const pulse = synapticPulses[p]
        pulse.progress += pulse.speed * dt
        if (pulse.progress >= 1.0) {
          const targetStar = starMap.get(pulse.toNodeId)
          if (targetStar) {
            targetStar.star.energy = Math.min(1.0, targetStar.star.energy + 0.35)
          }
          synapticPulses.splice(p, 1)
          continue
        }

        const ps1 = starMap.get(pulse.fromNodeId)
        const ps2 = starMap.get(pulse.toNodeId)
        if (!ps1 || !ps2) {
          synapticPulses.splice(p, 1)
          continue
        }

        const px = ps1.screenX + (ps2.screenX - ps1.screenX) * pulse.progress
        const py = ps1.screenY + (ps2.screenY - ps1.screenY) * pulse.progress
        const avgDepth = (ps1.depth + ps2.depth) / 2
        const pulseSize = Math.max(0.8, 1.8 * ((ps1.scale + ps2.scale) / 2))

        // Pulse Glow Core
        ctx.beginPath()
        ctx.arc(px, py, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = pulse.color
        ctx.globalAlpha = isDark ? 0.90 * (1 - avgDepth * 0.4) : 0.75 * (1 - avgDepth * 0.4)
        ctx.fill()
      }
      ctx.restore()

      // ── I. Render 3D Orbital Quantum Probes (Satellites) ──
      ctx.save()
      satellites.forEach((sat) => {
        if (!prefersReducedMotion) {
          sat.orbitAngle += sat.orbitSpeed * dt
          sat.beaconPhase += 0.025 * dt
        }

        const currentR = sat.orbitRadius
        const lx = currentR * Math.cos(sat.orbitAngle)
        const lz = currentR * Math.sin(sat.orbitAngle)
        const ly = Math.sin(sat.orbitAngle * 2) * 8

        const cosTX = Math.cos(sat.tiltX)
        const sinTX = Math.sin(sat.tiltX)
        const y1 = ly * cosTX - lz * sinTX
        const z1 = ly * sinTX + lz * cosTX

        const cosTY = Math.cos(sat.tiltY)
        const sinTY = Math.sin(sat.tiltY)
        const x2 = lx * cosTY + z1 * sinTY
        const z2 = -lx * sinTY + z1 * cosTY

        const proj = project3D(
          { x: x2, y: y1, z: z2 },
          cx,
          cy,
          globalRotX,
          globalRotY,
          globalRotZ
        )

        const cdx = proj.screenX - cx
        const cdy = proj.screenY - cy
        const calmNorm = Math.sqrt((cdx / calmRx) ** 2 + (cdy / calmRy) ** 2)
        const textCalmAlpha = calmNorm < 1.0 ? Math.max(0.32, 0.32 + calmNorm * 0.68) : 1.0

        const depthAlpha = Math.max(0.12, 1 - proj.depth * 0.45) * textCalmAlpha
        const pScale = proj.scale * sat.scale

        ctx.save()
        ctx.translate(proj.screenX, proj.screenY)

        // 1. Solar Wing Panels (Linear Array)
        ctx.strokeStyle = isDark ? 'rgba(147, 197, 253, 0.65)' : 'rgba(37, 99, 235, 0.50)'
        ctx.lineWidth = 0.65
        ctx.globalAlpha = isDark ? 0.55 * depthAlpha : 0.40 * depthAlpha

        // Left Solar Wing
        ctx.beginPath()
        ctx.moveTo(-4.2 * pScale, 0)
        ctx.lineTo(-1.3 * pScale, 0)
        ctx.stroke()

        // Right Solar Wing
        ctx.beginPath()
        ctx.moveTo(1.3 * pScale, 0)
        ctx.lineTo(4.2 * pScale, 0)
        ctx.stroke()

        // 2. Central Satellite Body
        ctx.beginPath()
        ctx.rect(-1.3 * pScale, -0.9 * pScale, 2.6 * pScale, 1.8 * pScale)
        ctx.fillStyle = isDark ? '#38BDF8' : '#2563EB'
        ctx.globalAlpha = isDark ? 0.65 * depthAlpha : 0.45 * depthAlpha
        ctx.fill()

        // 3. Periodic Blinking Signal Beacon Light
        const isBeaconFlash = Math.sin(sat.beaconPhase) > 0.88
        if (isBeaconFlash) {
          ctx.beginPath()
          ctx.arc(0, 0, Math.max(0.8, 1.5 * pScale), 0, Math.PI * 2)
          ctx.fillStyle = '#FFFFFF'
          ctx.globalAlpha = isDark ? 0.85 * depthAlpha : 0.70 * depthAlpha
          ctx.fill()
        }

        ctx.restore()
      })
      ctx.restore()

      // ── J. Render 3D Celestial Stars & Supermassive Hub Nodes (Subtle, Non-Distracting Starlight) ──
      projectedStars.forEach((ps) => {
        const star = ps.star
        const pulse = 1 + Math.sin(star.pulsePhase) * 0.06 + star.energy * 0.12
        const r = Math.max(0.5, star.radius * ps.scale * pulse)
        const depthAlpha = Math.max(0.14, 1 - ps.depth * 0.45) * ps.textCalmAlpha

        ctx.save()

        let darkHex = '#38BDF8'
        let lightHex = '#2563EB'

        if (star.colorType === 'cyan') {
          darkHex = '#38BDF8'
          lightHex = '#0284C7'
        } else if (star.colorType === 'violet') {
          darkHex = '#8B5CF6'
          lightHex = '#7C3AED'
        } else if (star.colorType === 'indigo') {
          darkHex = '#6366F1'
          lightHex = '#4F46E5'
        } else if (star.colorType === 'white') {
          darkHex = '#E0F2FE'
          lightHex = '#3B82F6'
        }

        const activeHex = isDark ? darkHex : lightHex

        // Supermassive Hub Radar/Sonar Pulsing Ring (Subtle)
        if (star.isHub && !prefersReducedMotion) {
          const ringProgress = (Math.sin(star.hubRingPhase) + 1) / 2
          const maxHubRingR = r * 3.8
          const hubRingR = r * 1.5 + ringProgress * maxHubRingR
          const hubAlpha = (1 - ringProgress) * (isDark ? 0.25 : 0.16) * depthAlpha

          ctx.beginPath()
          ctx.arc(ps.screenX, ps.screenY, hubRingR, 0, Math.PI * 2)
          ctx.strokeStyle = activeHex
          ctx.lineWidth = 0.6
          ctx.globalAlpha = hubAlpha
          ctx.stroke()
        }

        // 1. Radiant Starlight Aura (Gentle, soft, non-distracting)
        const glowRadius = r * (star.isHub ? 2.2 : 1.5)
        const glow = ctx.createRadialGradient(
          ps.screenX,
          ps.screenY,
          0,
          ps.screenX,
          ps.screenY,
          glowRadius
        )

        glow.addColorStop(0, activeHex)
        glow.addColorStop(0.55, activeHex)
        glow.addColorStop(1, 'rgba(0,0,0,0)')

        ctx.beginPath()
        ctx.arc(ps.screenX, ps.screenY, glowRadius, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.globalAlpha = isDark ? (0.16 + star.energy * 0.10) * depthAlpha : (0.11 + star.energy * 0.08) * depthAlpha
        ctx.fill()

        // 2. Prismatic 4-Point Starburst Diffraction Spike (JWST aesthetic, only on rare hub stars)
        if (star.hasGlint && star.isHub && !prefersReducedMotion) {
          const spikeLen = r * 2.4
          ctx.strokeStyle = isDark ? 'rgba(224, 242, 254, 0.40)' : 'rgba(37, 99, 235, 0.30)'
          ctx.lineWidth = 0.5

          ctx.beginPath()
          ctx.moveTo(ps.screenX - spikeLen, ps.screenY)
          ctx.lineTo(ps.screenX + spikeLen, ps.screenY)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(ps.screenX, ps.screenY - spikeLen)
          ctx.lineTo(ps.screenX, ps.screenY + spikeLen)
          ctx.stroke()
        }

        // 3. Stellar Pin-Point Solid Nucleus (Clean, non-flashy)
        ctx.beginPath()
        ctx.arc(ps.screenX, ps.screenY, r, 0, Math.PI * 2)
        ctx.fillStyle = activeHex
        ctx.globalAlpha = isDark ? depthAlpha * 0.55 : depthAlpha * 0.42
        ctx.fill()

        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    lastFrameTime = performance.now()
    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('click', handleClick)
      document.removeEventListener('visibilitychange', handleVisibility)
      motionQuery.removeEventListener('change', handleMotionChange)
      observer.disconnect()
      clearTimeout(resizeTimer)
      clearTimeout(mouseDecayTimer)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
