'use client'

import React, { useEffect, useRef } from 'react'

/**
 * ═══════════════════════════════════════════════════════════════════════
 * NEELSTACK // THE LIVING INTELLIGENCE FABRIC (CELESTIAL 3D EDITION)
 *
 * Core Concept:
 * "NeelStack is the invisible intelligence layer connecting software,
 * products, data, people, and AI agents." Rendered as a living deep-space
 * fabric: distant stars, drifting nebula light, a parallax "camera" that
 * gives the whole scene real depth, and gateway hubs that behave like
 * small worlds with their own orbiting satellites.
 *
 * Architecture & Engineering Highlights:
 * 1. Accessibility:
 *    - Strict prefers-reduced-motion: freezes drift, pulses, packets, rings,
 *      parallax camera, starfield twinkle, and constellation animation,
 *      retaining a serene static architectural blueprint.
 *    - IntersectionObserver: pauses the render loop completely when scrolled out of view.
 *    - Page Visibility API: pauses render loop when browser tab is inactive.
 *    - Non-interactive, aria-hidden="true", zero interference with assistive tech.
 *
 * 2. Performance (60 FPS mid-range mobile target):
 *    - Spatial Partitioning Grid (Bucket Hash): transforms O(n²) connection
 *      distance tests into localized cell checks.
 *    - Dual-Theme Nebula clouds are rendered ONCE to offscreen sprites at init time
 *      and simply drawImage()'d each frame — zero per-frame gradient recalculations.
 *    - shadowBlur eliminated from per-frame packets, agents, and pulses.
 *      Reserved exclusively for active hub nodes.
 *    - Batched canvas drawing: minimises context state switches.
 *    - Capped dynamic entity counts with memory recycling.
 *
 * 3. True 3D Depth (motion parallax):
 *    - A soft virtual camera drifts toward the cursor. Every node, star and
 *      nebula cloud shifts by an amount proportional to (1 - z), so near
 *      elements slide further than far ones — the actual cue human vision
 *      uses to read depth, not just size/alpha tricks.
 *    - Gateway hubs are treated as small worlds: 2 of them carry a thin
 *      elliptical orbit with a tiny satellite, reinforcing the celestial
 *      framing without adding visual noise.
 *
 * 4. Visual Restraint (Enterprise B2B Trust):
 *    - 70/20/8/2 motion ratio: 70% calm, 20% slow drift, 8% interaction, 2% emergence.
 *    - Welcome "N" constellation discovery at t=2.8s (every visitor sees it),
 *      followed by a dignified 75s recurrence cycle. The hexagon brand mark
 *      glows faintly behind the "N" during that reveal.
 *    - Attentive hub acknowledgment without jittery overreactions.
 *    - Center Calm Zone: keeps typography 100% legible and pristine.
 *    - A rare shooting star and a soft radial vignette round out the
 *      "celestial" read without competing with foreground content.
 * ═══════════════════════════════════════════════════════════════════════
 */

// ─── TUNABLE CONFIGURATION ───────────────────────────────────────────
const CONFIG = {
  // Topology counts
  nodesDesktop: 64,       // Balanced for high density without visual noise
  nodesMobile: 30,        // Lightweight footprint for mid-range mobile
  connectionDistanceDesktop: 160,
  connectionDistanceMobile: 135,
  spatialCellSize: 165,   // Cell size >= max connection distance for O(N) neighbor lookup

  // Dynamic entity caps (Demoted from spam to rare, intentional moments)
  maxPacketsDesktop: 6,
  maxPacketsMobile: 3,
  maxAgentsDesktop: 2,
  maxAgentsMobile: 1,
  maxRings: 6,

  // Celestial deep-space layer
  starsDesktop: 150,
  starsMobile: 85,
  shootingStarInterval: 20.0,   // seconds between eligibility checks
  shootingStarChance: 0.55,     // probability a shooting star actually fires
  parallaxStrength: 22,         // px of camera travel on desktop
  parallaxStrengthMobile: 10,   // px of camera travel on mobile (touch drift is subtler)

  // Cadence & Intervals (in seconds)
  chainPulseInterval: 12.0,       // Periodic node-to-node relay
  emergenceWaveInterval: 95.0,    // Rare global coherence wave
  welcomeLogoDelay: 2.8,          // Initial welcome discovery moment
  welcomeLogoHold: 4.2,           // Hold "N" crystalline structure
  welcomeLogoFade: 2.5,           // Gentle dissolution duration
  logoRepeatInterval: 75.0,       // Subsequent recurrence cycle

  // Physics & Speeds
  driftSpeedDesktop: 0.0010,
  driftSpeedMobile: 0.0007,
  mouseFieldRadiusDesktop: 160,
  mouseFieldRadiusMobile: 110,
  springDamping: 0.94,

  // Center Calm Zone (Balanced exclusion behind headline, prevents empty voids on mobile)
  calmZoneRadiusXDesktop: 260,
  calmZoneRadiusYDesktop: 160,
  calmZoneRadiusXMobile: 105,
  calmZoneRadiusYMobile: 80,

  // Color Tokens (Light & Dark mode calibrations)
  colors: {
    dark: {
      grid: 'rgba(56, 189, 248, 0.020)',
      connectionBase: 'rgba(56, 189, 248, 0.16)',
      connectionHighlight: 'rgba(56, 189, 248, 0.45)',
      software: '#38bdf8',
      ai: '#06b6d4',
      violet: '#8b5cf6',
      info: '#f8fafc',
      label: 'rgba(226, 232, 240, 0.50)',
      logoStroke: 'rgba(139, 92, 246, 0.38)',
    },
    light: {
      grid: 'rgba(15, 23, 42, 0.035)',
      connectionBase: 'rgba(2, 132, 199, 0.18)',
      connectionHighlight: 'rgba(2, 132, 199, 0.45)',
      software: '#2563eb',
      ai: '#0891b2',
      violet: '#7c3aed',
      info: '#475569',
      label: 'rgba(30, 41, 59, 0.65)',
      logoStroke: 'rgba(124, 58, 237, 0.35)',
    },
  },

  // Peripheral Product Worlds (Gateway Hubs)
  hubs: [
    { type: 'agents' as const, label: 'AI Agents', xFrac: 0.14, yFrac: 0.24, z: 0.15, delay: 0.4, primary: '#8b5cf6', secondary: '#c084fc' },
    { type: 'dhruva' as const, label: 'DhruvaOS', xFrac: 0.86, yFrac: 0.26, z: 0.18, delay: 0.8, primary: '#10b981', secondary: '#06b6d4' },
    { type: 'toolvines' as const, label: 'ToolVines', xFrac: 0.13, yFrac: 0.78, z: 0.20, delay: 1.2, primary: '#f59e0b', secondary: '#38bdf8' },
    { type: 'enterprise' as const, label: 'Enterprise', xFrac: 0.87, yFrac: 0.76, z: 0.16, delay: 1.6, primary: '#3b82f6', secondary: '#60a5fa' },
  ],
}

type HubType = typeof CONFIG.hubs[number]['type'] | 'core'
type PacketType = 'software' | 'ai' | 'info' | 'violet'

interface Node {
  id: number
  x: number
  y: number
  z: number // 0 (front) to 1 (deep cosmic plane)
  vx: number
  vy: number
  ox: number
  oy: number
  driftAngle: number
  driftSpeed: number
  baseRadius: number
  pulse: number
  pulseSpeed: number
  isHub: boolean
  hubType?: HubType
  hubLabel?: string
  color: string

  // Screen-projected position after the parallax camera is applied.
  // World-space (x, y) drives physics; (sx, sy) is what actually gets drawn,
  // so every layer that reads it automatically inherits real depth parallax.
  sx: number
  sy: number

  // Signature "N" Constellation State
  isLogoNode?: boolean
  logoSegment?: number // 1: left stem, 2: diagonal, 3: right stem
  logoTargetX?: number
  logoTargetY?: number

  // Awakening state
  awakeningDelay: number
  awakened: boolean
  alphaMultiplier: number
}

interface Connection {
  from: number
  to: number
  dist: number
  avgZ: number
  highlight: number
}

interface DataPacket {
  fromIndex: number
  toIndex: number
  progress: number
  speed: number
  type: PacketType
  color: string
}

interface AutonomousAgent {
  id: number
  currentNode: number
  targetNode: number
  progress: number
  speed: number
  pauseRemaining: number
  color: string
  trail: { x: number; y: number; alpha: number }[]
}

interface ExpandingRing {
  x: number
  y: number
  z: number
  radius: number
  maxRadius: number
  alpha: number
  color: string
  speed: number
}

interface ChainPulse {
  chain: number[]
  currentIndex: number
  progress: number
  speed: number
  color: string
}

// Deep background starfield point (parallax + gentle twinkle)
interface Star {
  x: number
  y: number
  z: number // near 1 = far background plane, near 0.55 = closest star layer
  r: number
  twinklePhase: number
  twinkleSpeed: number
}

// A soft drifting cloud of brand-color light, drawn from a cached sprite
interface NebulaBlob {
  x: number
  y: number
  z: number
  radius: number
  driftAngle: number
  driftSpeed: number
  spriteIndex: number
}

// A rare comet streak across the sky
interface ShootingStar {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  length: number
}

// A tiny moon orbiting select gateway hubs — reinforces the "small world" read
interface OrbitSatellite {
  hubId: number
  angle: number
  speed: number
  radius: number
  size: number
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

    // Reduced Motion Media Query & Listener
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let prefersReducedMotion = motionMediaQuery.matches

    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches
    }
    motionMediaQuery.addEventListener('change', handleMotionPreferenceChange)

    let isMobile = window.innerWidth < 768

    let resizeTimeout: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (!canvas) return
        isMobile = window.innerWidth < 768
        width = canvas.width = window.innerWidth * dpr
        height = canvas.height = window.innerHeight * dpr
        // Reset transform before re-scaling to prevent compounding DPR
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.scale(dpr, dpr)
        initNetwork()
      }, 150)
    }

    window.addEventListener('resize', handleResize)

    // Visibility detection: pause when browser tab is backgrounded
    let isTabVisible = !document.hidden
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden
      if (isTabVisible) {
        lastTime = performance.now()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // IntersectionObserver: pause when canvas scrolls out of viewport
    let isInViewport = true
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isInViewport = entry.isIntersecting
        if (isInViewport) {
          lastTime = performance.now()
        }
      },
      { threshold: 0.05 }
    )
    intersectionObserver.observe(canvas)

    // State collections
    let nodes: Node[] = []
    let connections: Connection[] = []
    let packets: DataPacket[] = []
    let agents: AutonomousAgent[] = []
    let rings: ExpandingRing[] = []
    let chainPulses: ChainPulse[] = []
    let stars: Star[] = []
    let nebulaBlobs: NebulaBlob[] = []
    let nebulaSpritesDark: HTMLCanvasElement[] = []
    let nebulaSpritesLight: HTMLCanvasElement[] = []
    let shootingStars: ShootingStar[] = []
    let satellites: OrbitSatellite[] = []

    // Parallax "camera" — drifts toward the cursor; near elements (low z)
    // move more than far elements (high z), which is what reads as real 3D.
    let camX = 0
    let camY = 0
    let lastShootingStarTime = 0

    // "N" constellation anchor, computed in initNetwork and reused by the
    // render loop for the hexagon glow + gradient stroke.
    let logoCenterX = 0
    let logoCenterY = 0
    let logoScale = 0

    let mouseX = -9999
    let mouseY = -9999
    let mouseActive = false
    let mouseDecayTimer: ReturnType<typeof setTimeout>
    let scrollY = 0

    // Interactive Hub Acknowledgment
    let activeHoverHub: HubType | null = null

    // Lifecycle Clocks
    const startTime = performance.now()
    let lastTime = performance.now()
    let lastChainPulseTime = 0
    let lastEmergenceWaveTime = 0

    // ─── Network Generator ─────────────────────────────────────────────
    const initNetwork = () => {
      nodes = []
      connections = []
      packets = []
      agents = []
      rings = []
      chainPulses = []
      stars = []
      nebulaBlobs = []
      nebulaSpritesDark = []
      nebulaSpritesLight = []
      shootingStars = []
      satellites = []

      const w = window.innerWidth
      const h = window.innerHeight
      const cx = w / 2
      const cy = h / 2

      const nodeCount = isMobile ? CONFIG.nodesMobile : CONFIG.nodesDesktop

      // Pre-calculate NeelStack "N" Constellation geometry in upper cosmic field
      logoCenterX = isMobile ? cx : cx + w * 0.28
      logoCenterY = isMobile ? cy * 0.40 : cy * 0.46
      logoScale = Math.min(w, h) * (isMobile ? 0.18 : 0.16)
      const logoPoints: { x: number; y: number; segment: number }[] = []
      const pointsPerSeg = isMobile ? 5 : 8

      // Stem 1 (Left vertical)
      for (let i = 0; i < pointsPerSeg; i++) {
        const t = i / (pointsPerSeg - 1)
        logoPoints.push({
          x: logoCenterX - logoScale * 0.46,
          y: logoCenterY + logoScale * (0.45 - t * 0.90),
          segment: 1,
        })
      }
      // Stem 2 (Diagonal crossbar)
      for (let i = 0; i < pointsPerSeg; i++) {
        const t = i / (pointsPerSeg - 1)
        logoPoints.push({
          x: logoCenterX + logoScale * (-0.46 + t * 0.92),
          y: logoCenterY + logoScale * (-0.45 + t * 0.90),
          segment: 2,
        })
      }
      // Stem 3 (Right vertical)
      for (let i = 0; i < pointsPerSeg; i++) {
        const t = i / (pointsPerSeg - 1)
        logoPoints.push({
          x: logoCenterX + logoScale * 0.46,
          y: logoCenterY + logoScale * (0.45 - t * 0.90),
          segment: 3,
        })
      }

      // 1. Anchor the 4 Peripheral Product Worlds
      CONFIG.hubs.forEach((spec, idx) => {
        nodes.push({
          id: idx,
          x: w * spec.xFrac,
          y: h * spec.yFrac,
          z: spec.z,
          ox: w * spec.xFrac,
          oy: h * spec.yFrac,
          vx: 0,
          vy: 0,
          sx: w * spec.xFrac,
          sy: h * spec.yFrac,
          driftAngle: Math.random() * Math.PI * 2,
          driftSpeed: 0.001,
          baseRadius: isMobile ? 4.5 : 5.6,
          pulse: Math.random() * Math.PI,
          pulseSpeed: 0.020,
          isHub: true,
          hubType: spec.type,
          hubLabel: spec.label,
          color: spec.primary,
          awakeningDelay: spec.delay,
          awakened: false,
          alphaMultiplier: 0,
        })
      })

      // 2. Central Awakening Seed Core
      nodes.push({
        id: 4,
        x: cx,
        y: cy * 0.50,
        z: 0.12,
        ox: cx,
        oy: cy * 0.50,
        vx: 0,
        vy: 0,
        sx: cx,
        sy: cy * 0.50,
        driftAngle: 0,
        driftSpeed: 0.001,
        baseRadius: 4.2,
        pulse: 0,
        pulseSpeed: 0.028,
        isHub: true,
        hubType: 'core',
        hubLabel: 'Core Seed',
        color: '#06b6d4',
        awakeningDelay: 0.15,
        awakened: false,
        alphaMultiplier: 0,
      })

      // 3. Distributed Computational Nodes Across 3D Space
      const calmW = isMobile ? CONFIG.calmZoneRadiusXMobile : CONFIG.calmZoneRadiusXDesktop
      const calmH = isMobile ? CONFIG.calmZoneRadiusYMobile : CONFIG.calmZoneRadiusYDesktop

      for (let i = 5; i < nodeCount; i++) {
        let x = Math.random() * w
        let y = Math.random() * h

        // Center Calm Zone: deflect nodes outward so text is 100% readable
        const dx = x - cx
        const dy = y - (cy + 15)
        const normDist = Math.sqrt((dx / calmW) ** 2 + (dy / calmH) ** 2)

        if (normDist < 1.0) {
          const angle = Math.random() * Math.PI * 2
          const rad = 1.05 + Math.random() * 0.50
          x = cx + Math.cos(angle) * (calmW * rad)
          y = cy + 15 + Math.sin(angle) * (calmH * rad)
        }

        const z = Math.random() // Depth from 0 (foreground) to 1 (deep cosmic plane)
        const logoIdx = i - 5
        const isLogoCandidate = logoIdx < logoPoints.length
        const logoTarget = isLogoCandidate ? logoPoints[logoIdx] : undefined

        let color = '#38bdf8'
        if (z > 0.65) color = '#8b5cf6'
        else if (z < 0.3) color = '#06b6d4'
        else if (i % 5 === 0) color = '#f8fafc'

        nodes.push({
          id: i,
          x,
          y,
          z,
          ox: x,
          oy: y,
          vx: (Math.random() - 0.5) * 0.18 * (1 - z * 0.5),
          vy: (Math.random() - 0.5) * 0.18 * (1 - z * 0.5),
          sx: x,
          sy: y,
          driftAngle: Math.random() * Math.PI * 2,
          driftSpeed: (0.0015 + Math.random() * 0.003) * (isMobile ? CONFIG.driftSpeedMobile : CONFIG.driftSpeedDesktop) * 1000,
          baseRadius: z < 0.3 ? Math.random() * 0.6 + 2.2 : Math.random() * 0.6 + 1.2,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.012 + Math.random() * 0.018,
          isHub: false,
          color,
          isLogoNode: isLogoCandidate,
          logoSegment: logoTarget?.segment,
          logoTargetX: logoTarget?.x,
          logoTargetY: logoTarget?.y,
          awakeningDelay: 0.3 + z * 1.4 + Math.random() * 0.4,
          awakened: false,
          alphaMultiplier: 0,
        })
      }

      // Sort by Z for proper atmospheric depth layering
      nodes.sort((a, b) => b.z - a.z)

      // 4. Autonomous AI Agent Entities (Restrained: 2 desktop, 1 mobile)
      const agentCount = isMobile ? CONFIG.maxAgentsMobile : CONFIG.maxAgentsDesktop
      const agentPalette = ['#06b6d4', '#8b5cf6']
      for (let a = 0; a < agentCount; a++) {
        const startNode = Math.floor(Math.random() * Math.min(12, nodes.length))
        agents.push({
          id: a,
          currentNode: startNode,
          targetNode: startNode,
          progress: 0,
          speed: 0.011 + Math.random() * 0.008,
          pauseRemaining: Math.random() * 1.5,
          color: agentPalette[a % agentPalette.length],
          trail: [],
        })
      }

      // 5. Deep-space starfield (fixed screen-space points, parallax-driven)
      const starCount = isMobile ? CONFIG.starsMobile : CONFIG.starsDesktop
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: 0.55 + Math.random() * 0.45, // background plane — always behind the network
          r: Math.random() * 1.15 + 0.25,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.35 + Math.random() * 1.1,
        })
      }

      // 6. Nebula clouds — cached once as offscreen sprites for both dark & light palettes
      const nebulaSpecsDark: { xFrac: number; yFrac: number; colorHex: string; radiusFrac: number }[] = [
        { xFrac: 0.16, yFrac: 0.16, colorHex: CONFIG.colors.dark.software, radiusFrac: 0.34 },
        { xFrac: 0.85, yFrac: 0.18, colorHex: CONFIG.colors.dark.violet, radiusFrac: 0.30 },
        { xFrac: 0.20, yFrac: 0.88, colorHex: CONFIG.colors.dark.ai, radiusFrac: 0.32 },
        { xFrac: 0.82, yFrac: 0.86, colorHex: CONFIG.colors.dark.software, radiusFrac: 0.27 },
      ]

      const nebulaSpecsLight: { xFrac: number; yFrac: number; colorHex: string; radiusFrac: number }[] = [
        { xFrac: 0.16, yFrac: 0.16, colorHex: CONFIG.colors.light.software, radiusFrac: 0.34 },
        { xFrac: 0.85, yFrac: 0.18, colorHex: CONFIG.colors.light.violet, radiusFrac: 0.30 },
        { xFrac: 0.20, yFrac: 0.88, colorHex: CONFIG.colors.light.ai, radiusFrac: 0.32 },
        { xFrac: 0.82, yFrac: 0.86, colorHex: CONFIG.colors.light.software, radiusFrac: 0.27 },
      ]

      nebulaSpecsDark.forEach((spec, i) => {
        const radius = Math.min(w, h) * spec.radiusFrac
        const spriteSize = Math.max(2, Math.ceil(radius * 2))

        // Dark mode sprite
        const offDark = document.createElement('canvas')
        offDark.width = spriteSize
        offDark.height = spriteSize
        const octxDark = offDark.getContext('2d')
        if (octxDark) {
          const grad = octxDark.createRadialGradient(radius, radius, 0, radius, radius, radius)
          grad.addColorStop(0, spec.colorHex + '2e')
          grad.addColorStop(0.5, spec.colorHex + '14')
          grad.addColorStop(1, spec.colorHex + '00')
          octxDark.fillStyle = grad
          octxDark.fillRect(0, 0, spriteSize, spriteSize)
        }
        nebulaSpritesDark.push(offDark)

        // Light mode sprite
        const lightSpec = nebulaSpecsLight[i]
        const offLight = document.createElement('canvas')
        offLight.width = spriteSize
        offLight.height = spriteSize
        const octxLight = offLight.getContext('2d')
        if (octxLight) {
          const gradLight = octxLight.createRadialGradient(radius, radius, 0, radius, radius, radius)
          gradLight.addColorStop(0, lightSpec.colorHex + '18')
          gradLight.addColorStop(0.5, lightSpec.colorHex + '0a')
          gradLight.addColorStop(1, lightSpec.colorHex + '00')
          octxLight.fillStyle = gradLight
          octxLight.fillRect(0, 0, spriteSize, spriteSize)
        }
        nebulaSpritesLight.push(offLight)

        nebulaBlobs.push({
          x: w * spec.xFrac,
          y: h * spec.yFrac,
          z: 0.9 + i * 0.02,
          radius,
          driftAngle: Math.random() * Math.PI * 2,
          driftSpeed: 0.00022 + Math.random() * 0.00035,
          spriteIndex: i,
        })
      })

      // 7. Orbiting satellites — a light "small world" touch on select flagship hubs
      satellites = []
      CONFIG.hubs.forEach((spec, hIdx) => {
        if (spec.type === 'dhruva' || spec.type === 'agents') {
          satellites.push({
            hubId: hIdx,
            angle: Math.random() * Math.PI * 2,
            speed: 0.32 + Math.random() * 0.18,
            radius: (isMobile ? 13 : 17) + Math.random() * 3,
            size: isMobile ? 1.2 : 1.5,
          })
        }
      })
    }

    // ─── Input & Event Listeners ───────────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      mouseActive = true
      clearTimeout(mouseDecayTimer)
      mouseDecayTimer = setTimeout(() => {
        mouseActive = false
      }, 2500)
    }

    const handleMouseLeave = () => {
      mouseX = -9999
      mouseY = -9999
      mouseActive = false
    }

    const handleScroll = () => {
      scrollY = window.scrollY || 0
    }

    // Interactive Hub Hover (Attentive acknowledgment without jitter)
    const handleHubHover = (e: Event) => {
      const customEvent = e as CustomEvent<{ hub: HubType }>
      if (customEvent.detail && customEvent.detail.hub) {
        activeHoverHub = customEvent.detail.hub
        const targetNode = nodes.find((n) => n.isHub && n.hubType === activeHoverHub)
        if (targetNode) {
          targetNode.pulseSpeed = 0.045

          // Spawn a single elegant data packet toward the hub
          const incoming = connections.filter((c) => c.to === targetNode.id || c.from === targetNode.id)
          if (incoming.length > 0) {
            const conn = incoming[Math.floor(Math.random() * incoming.length)]
            packets.push({
              fromIndex: conn.from === targetNode.id ? conn.to : conn.from,
              toIndex: targetNode.id,
              progress: 0,
              speed: 0.032,
              type: 'violet',
              color: targetNode.color,
            })
          }

          // Single subtle confirmation ring (screen-space aligned)
          rings.push({
            x: targetNode.sx,
            y: targetNode.sy,
            z: targetNode.z,
            radius: 4,
            maxRadius: 36,
            alpha: 0.70,
            color: targetNode.color,
            speed: 1.2,
          })
        }
      }
    }

    const handleHubLeave = () => {
      activeHoverHub = null
      nodes.forEach((n) => {
        if (n.isHub) n.pulseSpeed = 0.020
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('neelstack-hub-hover', handleHubHover)
    window.addEventListener('neelstack-hub-leave', handleHubLeave)

    initNetwork()

    // ─── Main Render Loop (60 FPS Optimized) ───────────────────────────
    const render = (currentTime: number) => {
      // Pause completely if tab is hidden OR canvas is scrolled out of viewport
      if (!isTabVisible || !isInViewport) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      const dt = Math.min((currentTime - lastTime) / 16.666, 2.0)
      lastTime = currentTime
      const elapsedSec = (currentTime - startTime) / 1000

      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      const isDark = !document.documentElement.classList.contains('light')
      const themeColors = isDark ? CONFIG.colors.dark : CONFIG.colors.light

      const scrollFactor = Math.min(scrollY / (h * 1.5 || 1), 1.0)

      // ─── Parallax Camera: the actual source of "3D" depth ─────────────
      // Near elements (z near 0) move more than far ones (z near 1) as the
      // camera drifts toward the cursor — real motion parallax.
      const parallaxMax = isMobile ? CONFIG.parallaxStrengthMobile : CONFIG.parallaxStrength
      if (prefersReducedMotion) {
        camX = 0
        camY = 0
      } else {
        const targetCamX = mouseActive ? ((mouseX - w / 2) / (w / 2)) * parallaxMax : 0
        const targetCamY = mouseActive ? ((mouseY - h / 2) / (h / 2)) * parallaxMax : 0
        camX += (targetCamX - camX) * Math.min(1, 0.045 * dt)
        camY += (targetCamY - camY) * Math.min(1, 0.045 * dt)
      }

      // ─── "N" Constellation Discovery Phase ────────────────────────────
      // Welcome moment at t=2.8s..7.0s, followed by slower recurring cycle
      let logoWeight = 0
      if (!prefersReducedMotion) {
        if (elapsedSec < 15.0) {
          // Welcome discovery moment for every visitor
          if (elapsedSec >= CONFIG.welcomeLogoDelay && elapsedSec < CONFIG.welcomeLogoDelay + 2.5) {
            const t = (elapsedSec - CONFIG.welcomeLogoDelay) / 2.5
            logoWeight = t * t * (3 - 2 * t)
          } else if (elapsedSec >= CONFIG.welcomeLogoDelay + 2.5 && elapsedSec < CONFIG.welcomeLogoDelay + 2.5 + CONFIG.welcomeLogoHold) {
            logoWeight = 1.0
          } else if (elapsedSec >= CONFIG.welcomeLogoDelay + 2.5 + CONFIG.welcomeLogoHold && elapsedSec < CONFIG.welcomeLogoDelay + 2.5 + CONFIG.welcomeLogoHold + CONFIG.welcomeLogoFade) {
            const t = 1.0 - (elapsedSec - (CONFIG.welcomeLogoDelay + 2.5 + CONFIG.welcomeLogoHold)) / CONFIG.welcomeLogoFade
            logoWeight = t * t * (3 - 2 * t)
          }
        } else {
          // Recurring cadence every ~75s
          const cycleTime = (elapsedSec - 15.0) % CONFIG.logoRepeatInterval
          if (cycleTime < 2.5) {
            const t = cycleTime / 2.5
            logoWeight = t * t * (3 - 2 * t)
          } else if (cycleTime >= 2.5 && cycleTime < 2.5 + CONFIG.welcomeLogoHold) {
            logoWeight = 1.0
          } else if (cycleTime >= 2.5 + CONFIG.welcomeLogoHold && cycleTime < 2.5 + CONFIG.welcomeLogoHold + CONFIG.welcomeLogoFade) {
            const t = 1.0 - (cycleTime - (2.5 + CONFIG.welcomeLogoHold)) / CONFIG.welcomeLogoFade
            logoWeight = t * t * (3 - 2 * t)
          }
        }
      }

      // ─── Layer 0a: Nebula Cloud Backdrop (cached sprites, cheap blit) ──
      ctx.save()
      ctx.globalCompositeOperation = isDark ? 'lighter' : 'source-over'
      nebulaBlobs.forEach((blob) => {
        if (!prefersReducedMotion) {
          blob.driftAngle += blob.driftSpeed * dt
        }
        const driftX = Math.cos(blob.driftAngle) * 26
        const driftY = Math.sin(blob.driftAngle * 0.8) * 20
        const offX = -camX * (1 - blob.z)
        const offY = -camY * (1 - blob.z)
        const sprite = isDark ? nebulaSpritesDark[blob.spriteIndex] : nebulaSpritesLight[blob.spriteIndex]
        if (!sprite) return
        const drawX = blob.x + driftX + offX - blob.radius
        const drawY = blob.y + driftY + offY - blob.radius
        ctx.globalAlpha = isDark ? 0.9 : 0.45
        ctx.drawImage(sprite, drawX, drawY)
      })
      ctx.restore()
      ctx.globalAlpha = 1.0

      // ─── Layer 0b: Deep Starfield (twinkling, parallax) ────────────────
      ctx.save()
      stars.forEach((star) => {
        if (!prefersReducedMotion) star.twinklePhase += star.twinkleSpeed * 0.016 * dt
        const twinkle = prefersReducedMotion ? 0.7 : 0.55 + Math.sin(star.twinklePhase) * 0.45
        const offX = -camX * (1 - star.z) * 0.6
        const offY = -camY * (1 - star.z) * 0.6
        let sx = star.x + offX
        let sy = star.y + offY
        // Wrap softly within viewport bounds so parallax never reveals empty edges
        if (sx < -4) sx += w + 8
        if (sx > w + 4) sx -= w + 8
        if (sy < -4) sy += h + 8
        if (sy > h + 4) sy -= h + 8
        ctx.beginPath()
        ctx.arc(sx, sy, star.r, 0, Math.PI * 2)
        ctx.fillStyle = isDark ? `rgba(226, 232, 240, ${0.55 * twinkle})` : `rgba(71, 85, 105, ${0.4 * twinkle})`
        ctx.fill()
      })
      ctx.restore()

      // ─── Layer 1: Topological Grid (Batched Single Path) ──────────────
      ctx.save()
      ctx.strokeStyle = themeColors.grid
      ctx.lineWidth = 0.5
      const gridSize = isMobile ? 85 : 105
      ctx.beginPath()
      for (let gx = 0; gx < w; gx += gridSize) {
        ctx.moveTo(gx, 0)
        ctx.lineTo(gx, h)
      }
      for (let gy = 0; gy < h; gy += gridSize) {
        ctx.moveTo(0, gy)
        ctx.lineTo(w, gy)
      }
      ctx.stroke()
      ctx.restore()

      // ─── Layer 2: Update Node Kinematics ──────────────────────────────
      const mouseRadius = (isMobile ? CONFIG.mouseFieldRadiusMobile : CONFIG.mouseFieldRadiusDesktop)

      nodes.forEach((node) => {
        if (elapsedSec >= node.awakeningDelay) {
          node.awakened = true
          node.alphaMultiplier = Math.min(1.0, node.alphaMultiplier + 0.04 * dt)
        } else {
          node.alphaMultiplier = 0
        }

        // When reduced motion is active: freeze kinematics completely
        if (prefersReducedMotion) {
          node.x = node.ox
          node.y = node.oy
          node.sx = node.x
          node.sy = node.y
          return
        }

        node.pulse += node.pulseSpeed * dt
        node.driftAngle += node.driftSpeed * dt

        const targetDriftX = node.x + (node.vx + Math.cos(node.driftAngle) * 0.09) * dt
        const targetDriftY = node.y + (node.vy + Math.sin(node.driftAngle) * 0.09) * dt

        // Interpolation into "N" constellation
        if (logoWeight > 0 && node.isLogoNode && node.logoTargetX !== undefined && node.logoTargetY !== undefined) {
          node.x = node.x + (node.logoTargetX - node.x) * (0.065 * dt * logoWeight)
          node.y = node.y + (node.logoTargetY - node.y) * (0.065 * dt * logoWeight)
        } else {
          node.x = targetDriftX
          node.y = targetDriftY
        }

        // Viewport wrapping
        const pad = 60
        if (node.x < -pad) node.x = w + pad
        if (node.x > w + pad) node.x = -pad
        if (node.y < -pad) node.y = h + pad
        if (node.y > h + pad) node.y = -pad

        // Project world position through the parallax camera for drawing & hit-testing
        const offX = -camX * (1 - node.z)
        const offY = -camY * (1 - node.z)
        node.sx = node.x + offX
        node.sy = node.y + offY

        // Cursor Attention Field
        if (mouseActive && mouseX > 0 && mouseY > 0) {
          const cdx = mouseX - node.x
          const cdy = mouseY - node.y
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy)
          const fieldR = mouseRadius * (1 - node.z * 0.4)

          if (cdist < fieldR && cdist > 2) {
            const pullFactor = (1 - cdist / fieldR) * 0.08 * (1 - node.z) * dt
            node.vx += (cdx / cdist) * pullFactor
            node.vy += (cdy / cdist) * pullFactor
            node.pulse += 0.015 * dt

            // Subtle reaction ring if cursor lingers near node (screen-space coordinates)
            if (cdist < 45 && Math.random() < 0.012 && node.alphaMultiplier > 0.6 && rings.length < CONFIG.maxRings) {
              rings.push({
                x: node.sx,
                y: node.sy,
                z: node.z,
                radius: 2,
                maxRadius: 20 * (1 - node.z * 0.4),
                alpha: 0.50,
                color: node.color,
                speed: 0.7,
              })
            }
          }
        }

        node.vx *= CONFIG.springDamping
        node.vy *= CONFIG.springDamping
      })

      // ─── Layer 3: Spatial Partitioning Grid for Connections (O(N)) ───
      connections = []
      const maxConnDist = (isMobile ? CONFIG.connectionDistanceMobile : CONFIG.connectionDistanceDesktop) * (1.0 + scrollFactor * 0.1)
      const maxConnSq = maxConnDist * maxConnDist
      const cellSize = CONFIG.spatialCellSize
      const cols = Math.ceil(w / cellSize) + 1
      const rows = Math.ceil(h / cellSize) + 1

      // Bucket allocation (built from screen-projected coords, so connections
      // stay visually attached to the parallaxed nodes they link)
      const grid: number[][] = Array.from({ length: cols * rows }, () => [])
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (n.alphaMultiplier < 0.1) continue
        const cxGrid = Math.max(0, Math.min(cols - 1, Math.floor(n.sx / cellSize)))
        const cyGrid = Math.max(0, Math.min(rows - 1, Math.floor(n.sy / cellSize)))
        grid[cyGrid * cols + cxGrid].push(i)
      }

      const calmW = isMobile ? CONFIG.calmZoneRadiusXMobile : CONFIG.calmZoneRadiusXDesktop
      const calmH = isMobile ? CONFIG.calmZoneRadiusYMobile : CONFIG.calmZoneRadiusYDesktop
      const screenCx = w / 2
      const screenCy = h / 2

      // Check connections within cell and 4 forward neighbor cells
      const neighborOffsets = [
        [0, 0],   // same cell
        [1, 0],   // right
        [-1, 1],  // bottom-left
        [0, 1],   // bottom
        [1, 1],   // bottom-right
      ]

      ctx.save()
      for (let cyG = 0; cyG < rows; cyG++) {
        for (let cxG = 0; cxG < cols; cxG++) {
          const cellNodes = grid[cyG * cols + cxG]
          if (cellNodes.length === 0) continue

          for (let nIdx = 0; nIdx < cellNodes.length; nIdx++) {
            const i = cellNodes[nIdx]
            const n1 = nodes[i]

            for (let off = 0; off < neighborOffsets.length; off++) {
              const nX = cxG + neighborOffsets[off][0]
              const nY = cyG + neighborOffsets[off][1]

              if (nX < 0 || nX >= cols || nY < 0 || nY >= rows) continue
              const neighborCell = grid[nY * cols + nX]

              // If same cell, only inspect subsequent nodes to avoid duplicate pairs
              const startJ = (off === 0) ? nIdx + 1 : 0
              for (let mIdx = startJ; mIdx < neighborCell.length; mIdx++) {
                const j = neighborCell[mIdx]
                const n2 = nodes[j]

                const zDiff = Math.abs(n1.z - n2.z)
                if (zDiff > 0.35) continue

                const dx = n1.sx - n2.sx
                const dy = n1.sy - n2.sy
                const dSq = dx * dx + dy * dy
                if (dSq > maxConnSq) continue

                const dist = Math.sqrt(dSq)
                const avgZ = (n1.z + n2.z) / 2

                // Center Calm Zone Muffling (100% Headline Legibility)
                const midX = (n1.sx + n2.sx) / 2
                const midY = (n1.sy + n2.sy) / 2
                const cdx = midX - screenCx
                const cdy = midY - (screenCy + 15)
                const centerDistNorm = Math.sqrt((cdx / calmW) ** 2 + (cdy / calmH) ** 2)
                let centerMuffle = 1.0
                if (centerDistNorm < 1.0) {
                  centerMuffle = Math.max(0.04, centerDistNorm * centerDistNorm)
                }

                // Cursor attention line brightening
                let highlight = 0
                if (mouseActive) {
                  const mDist = Math.sqrt((mouseX - midX) ** 2 + (mouseY - midY) ** 2)
                  if (mDist < 150) {
                    highlight = (1 - mDist / 150) * (1 - avgZ * 0.5)
                  }
                }

                connections.push({ from: i, to: j, dist, avgZ, highlight })

                const baseAlpha = (1 - dist / maxConnDist) * (1 - avgZ * 0.65) * Math.min(n1.alphaMultiplier, n2.alphaMultiplier)
                const finalAlpha = Math.min(0.60, (baseAlpha * 0.16 + highlight * 0.30) * centerMuffle)

                ctx.beginPath()
                ctx.moveTo(n1.sx, n1.sy)
                ctx.lineTo(n2.sx, n2.sy)

                if (highlight > 0.2) {
                  ctx.strokeStyle = isDark
                    ? `rgba(56, 189, 248, ${finalAlpha * 1.5})`
                    : `rgba(2, 132, 199, ${finalAlpha * 1.5})`
                  ctx.lineWidth = 1.2
                } else {
                  ctx.strokeStyle = isDark
                    ? `rgba(56, 189, 248, ${finalAlpha})`
                    : `rgba(2, 132, 199, ${finalAlpha})`
                  ctx.lineWidth = 0.85 + (1 - avgZ) * 0.3
                }
                ctx.stroke()
              }
            }
          }
        }
      }
      ctx.restore()

      // ─── Layer 4: "N" Constellation Luminous Path + Hexagon Echo ──────
      if (logoWeight > 0.05) {
        // Faint hexagon glow behind the "N" — ties the animated fabric
        // back to the actual brand mark during the reveal moment.
        ctx.save()
        const hexOffX = -camX * 0.5
        const hexOffY = -camY * 0.5
        const hx = logoCenterX + hexOffX
        const hy = logoCenterY + hexOffY
        const hexR = logoScale * 1.05
        ctx.beginPath()
        for (let side = 0; side < 6; side++) {
          const ang = (Math.PI / 3) * side - Math.PI / 2
          const px = hx + Math.cos(ang) * hexR
          const py = hy + Math.sin(ang) * hexR
          if (side === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.closePath()
        const hexGrad = ctx.createLinearGradient(hx - hexR, hy - hexR, hx + hexR, hy + hexR)
        hexGrad.addColorStop(0, isDark ? `rgba(56, 189, 248, ${0.30 * logoWeight})` : `rgba(37, 99, 235, ${0.24 * logoWeight})`)
        hexGrad.addColorStop(1, isDark ? `rgba(139, 92, 246, ${0.30 * logoWeight})` : `rgba(124, 58, 237, ${0.24 * logoWeight})`)
        ctx.strokeStyle = hexGrad
        ctx.lineWidth = 1.3
        ctx.stroke()
        ctx.restore()
      }

      if (logoWeight > 0.15) {
        ctx.save()
        const segGrad = ctx.createLinearGradient(
          logoCenterX - logoScale, logoCenterY - logoScale,
          logoCenterX + logoScale, logoCenterY + logoScale
        )
        segGrad.addColorStop(0, isDark ? `rgba(59, 130, 246, ${0.55 * logoWeight})` : `rgba(37, 99, 235, ${0.5 * logoWeight})`)
        segGrad.addColorStop(1, isDark ? `rgba(56, 189, 248, ${0.55 * logoWeight})` : `rgba(8, 145, 178, ${0.5 * logoWeight})`)
        ctx.strokeStyle = segGrad
        ctx.lineWidth = 1.4

        for (let seg = 1; seg <= 3; seg++) {
          const segNodes = nodes
            .filter((n) => n.isLogoNode && n.logoSegment === seg)
            .sort((a, b) => (a.logoTargetY ?? 0) - (b.logoTargetY ?? 0))

          if (segNodes.length > 1) {
            ctx.beginPath()
            ctx.moveTo(segNodes[0].sx, segNodes[0].sy)
            for (let k = 1; k < segNodes.length; k++) {
              ctx.lineTo(segNodes[k].sx, segNodes[k].sy)
            }
            ctx.stroke()
          }
        }
        ctx.restore()
      }

      // ─── Layer 5: Render Nodes & Peripheral Product Hubs ───────────────
      nodes.forEach((node) => {
        if (node.alphaMultiplier <= 0) return

        const scale = 1 - node.z * 0.55
        const isHoveredHub = node.isHub && node.hubType === activeHoverHub
        const curR = (node.baseRadius + (isHoveredHub ? 1.2 : 0) + (prefersReducedMotion ? 0 : Math.sin(node.pulse) * 0.35)) * scale

        // Gateway Hub Rings
        if (node.isHub && node.hubType && node.hubType !== 'core') {
          const hubConfig = CONFIG.hubs.find((hc) => hc.type === node.hubType)
          const ringR = (node.baseRadius * (isHoveredHub ? 3.4 : 2.7) + (prefersReducedMotion ? 0 : Math.sin(node.pulse * 1.6) * 2.2)) * scale

          ctx.beginPath()
          ctx.arc(node.sx, node.sy, ringR, 0, Math.PI * 2)
          ctx.strokeStyle = hubConfig?.primary || node.color
          ctx.globalAlpha = (isHoveredHub ? 0.60 : 0.30) * (1 - node.z) * node.alphaMultiplier
          ctx.lineWidth = isHoveredHub ? 1.4 : 0.9
          ctx.stroke()

          // Secondary subtle outer ring
          if (node.hubType === 'dhruva' || node.hubType === 'agents' || isHoveredHub) {
            ctx.beginPath()
            ctx.arc(node.sx, node.sy, ringR * 1.45, 0, Math.PI * 2)
            ctx.strokeStyle = hubConfig?.secondary || node.color
            ctx.globalAlpha = (isHoveredHub ? 0.40 : 0.16) * (1 - node.z) * node.alphaMultiplier
            ctx.lineWidth = 0.75
            ctx.stroke()
          }

          // Orbiting satellite — small-world touch, restrained to 2 flagship hubs
          satellites
            .filter((s) => s.hubId === node.id)
            .forEach((sat) => {
              if (!prefersReducedMotion) sat.angle += sat.speed * 0.016 * dt
              const satX = node.sx + Math.cos(sat.angle) * sat.radius * scale
              const satY = node.sy + Math.sin(sat.angle) * sat.radius * 0.55 * scale
              ctx.beginPath()
              ctx.ellipse(node.sx, node.sy, sat.radius * scale, sat.radius * 0.55 * scale, 0, 0, Math.PI * 2)
              ctx.strokeStyle = node.color
              ctx.globalAlpha = 0.10 * node.alphaMultiplier
              ctx.lineWidth = 0.6
              ctx.stroke()

              ctx.beginPath()
              ctx.arc(satX, satY, sat.size * scale, 0, Math.PI * 2)
              ctx.fillStyle = node.color
              ctx.globalAlpha = 0.75 * node.alphaMultiplier * (1 - node.z)
              ctx.fill()
            })

          // Semantic World Label
          if (node.hubLabel && !isMobile && node.alphaMultiplier > 0.6) {
            ctx.save()
            ctx.font = '500 10px monospace'
            ctx.fillStyle = themeColors.label
            ctx.globalAlpha = node.alphaMultiplier
            ctx.fillText(node.hubLabel, node.sx + ringR + 8, node.sy + 3)
            ctx.restore()
          }
        }

        // Draw node body
        ctx.beginPath()
        ctx.arc(node.sx, node.sy, curR, 0, Math.PI * 2)
        ctx.fillStyle = isDark
          ? node.color
          : (node.color === '#f8fafc' || node.color === '#ffffff')
            ? '#475569'
            : (node.color === '#38bdf8')
              ? '#0284c7'
              : (node.color === '#06b6d4')
                ? '#0891b2'
                : (node.color === '#8b5cf6')
                  ? '#7c3aed'
                  : node.color
        ctx.globalAlpha = (isDark ? (1 - node.z * 0.60) : (0.85 - node.z * 0.40)) * node.alphaMultiplier

        // Reserve expensive shadowBlur ONLY for active/hovered hubs
        if (isDark && (isHoveredHub || (node.isHub && node.z < 0.25))) {
          ctx.shadowBlur = (isHoveredHub ? 16 : 10) * (1 - node.z)
          ctx.shadowColor = node.color
        } else {
          ctx.shadowBlur = 0
        }

        ctx.fill()
        ctx.shadowBlur = 0
      })

      ctx.globalAlpha = 1.0

      // ─── Layer 6: Autonomous AI Agents (Restrained) ───────────────────
      if (!prefersReducedMotion) {
        agents.forEach((agent) => {
          if (agent.pauseRemaining > 0) {
            agent.pauseRemaining -= 0.016 * dt
            return
          }

          agent.progress += agent.speed * dt
          const fromN = nodes[agent.currentNode]
          const toN = nodes[agent.targetNode]

          if (!fromN || !toN || agent.progress >= 1.0) {
            agent.currentNode = agent.targetNode
            agent.progress = 0
            agent.pauseRemaining = 0.6 + Math.random() * 1.2

            const neighbors = connections
              .filter((c) => c.from === agent.currentNode || c.to === agent.currentNode)
              .map((c) => (c.from === agent.currentNode ? c.to : c.from))

            if (neighbors.length > 0) {
              agent.targetNode = neighbors[Math.floor(Math.random() * neighbors.length)]
            } else {
              agent.targetNode = Math.floor(Math.random() * nodes.length)
            }
            return
          }

          const ax = fromN.sx + (toN.sx - fromN.sx) * agent.progress
          const ay = fromN.sy + (toN.sy - fromN.sy) * agent.progress
          const az = fromN.z + (toN.z - fromN.z) * agent.progress
          const scale = 1 - az * 0.5

          // Record trail
          agent.trail.unshift({ x: ax, y: ay, alpha: 0.5 })
          if (agent.trail.length > 5) agent.trail.pop()

          // Draw agent trail
          for (let t = 0; t < agent.trail.length; t++) {
            const pt = agent.trail[t]
            pt.alpha -= 0.035
            ctx.beginPath()
            ctx.arc(pt.x, pt.y, (1.8 - t * 0.25) * scale, 0, Math.PI * 2)
            ctx.fillStyle = agent.color
            ctx.globalAlpha = Math.max(0, pt.alpha * (1 - az * 0.4))
            ctx.fill()
          }

          // Cheaper radial glow ring instead of expensive shadowBlur
          ctx.beginPath()
          ctx.arc(ax, ay, 5.0 * scale, 0, Math.PI * 2)
          ctx.fillStyle = agent.color
          ctx.globalAlpha = 0.18
          ctx.fill()

          // Agent core
          ctx.beginPath()
          ctx.arc(ax, ay, 3.0 * scale, 0, Math.PI * 2)
          ctx.fillStyle = agent.color
          ctx.globalAlpha = 0.92 * (1 - az * 0.4)
          ctx.fill()
          ctx.globalAlpha = 1.0
        })
      }

      // ─── Layer 7: Intelligence Chain Pulses (Every ~12s) ───────────────
      if (!prefersReducedMotion && elapsedSec - lastChainPulseTime > CONFIG.chainPulseInterval && nodes.length > 10) {
        lastChainPulseTime = elapsedSec
        const startNodeIdx = Math.floor(Math.random() * Math.min(5, nodes.length))
        const chain: number[] = [startNodeIdx]
        let cur = startNodeIdx

        for (let step = 0; step < 4; step++) {
          const neighbors = connections
            .filter((c) => c.from === cur || c.to === cur)
            .map((c) => (c.from === cur ? c.to : c.from))
            .filter((idx) => !chain.includes(idx))

          if (neighbors.length > 0) {
            const nextIdx = neighbors[Math.floor(Math.random() * neighbors.length)]
            chain.push(nextIdx)
            cur = nextIdx
          } else {
            break
          }
        }

        if (chain.length >= 3 && chainPulses.length === 0) {
          chainPulses.push({
            chain,
            currentIndex: 0,
            progress: 0,
            speed: 0.018,
            color: isDark ? '#06b6d4' : '#0891b2',
          })
        }
      }

      for (let i = chainPulses.length - 1; i >= 0; i--) {
        const cp = chainPulses[i]
        cp.progress += cp.speed * dt

        const fromNode = nodes[cp.chain[cp.currentIndex]]
        const toNode = nodes[cp.chain[cp.currentIndex + 1]]

        if (!fromNode || !toNode) {
          chainPulses.splice(i, 1)
          continue
        }

        if (cp.progress >= 1.0) {
          cp.currentIndex++
          cp.progress = 0

          if (rings.length < CONFIG.maxRings) {
            rings.push({
              x: toNode.sx,
              y: toNode.sy,
              z: toNode.z,
              radius: 2,
              maxRadius: 24 * (1 - toNode.z * 0.5),
              alpha: 0.75,
              color: cp.color,
              speed: 0.85,
            })
          }

          if (cp.currentIndex >= cp.chain.length - 1) {
            chainPulses.splice(i, 1)
            continue
          }
        }

        const px = fromNode.sx + (toNode.sx - fromNode.sx) * cp.progress
        const py = fromNode.sy + (toNode.sy - fromNode.sy) * cp.progress
        const pz = fromNode.z + (toNode.z - fromNode.z) * cp.progress
        const scale = 1 - pz * 0.5

        // Faux glow via secondary arc
        ctx.beginPath()
        ctx.arc(px, py, 4.8 * scale, 0, Math.PI * 2)
        ctx.fillStyle = cp.color
        ctx.globalAlpha = 0.20
        ctx.fill()

        ctx.beginPath()
        ctx.arc(px, py, 2.8 * scale, 0, Math.PI * 2)
        ctx.fillStyle = cp.color
        ctx.globalAlpha = 0.90 * (1 - pz * 0.4)
        ctx.fill()
        ctx.globalAlpha = 1.0
      }

      // ─── Layer 8: Semantic Data Packets (Capped: 6 Desktop / 3 Mobile) ─
      const maxPackets = isMobile ? CONFIG.maxPacketsMobile : CONFIG.maxPacketsDesktop
      if (!prefersReducedMotion && packets.length < maxPackets && connections.length > 0 && Math.random() < 0.18) {
        const conn = connections[Math.floor(Math.random() * connections.length)]
        const types: PacketType[] = ['software', 'ai', 'violet']
        const pType = types[Math.floor(Math.random() * types.length)]
        let pColor = isDark ? '#38bdf8' : '#2563eb'
        if (pType === 'ai') pColor = isDark ? '#06b6d4' : '#0891b2'
        else if (pType === 'violet') pColor = isDark ? '#8b5cf6' : '#7c3aed'

        packets.push({
          fromIndex: conn.from,
          toIndex: conn.to,
          progress: 0,
          speed: 0.016 + Math.random() * 0.018,
          type: pType,
          color: pColor,
        })
      }

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i]
        p.progress += p.speed * dt

        const nFrom = nodes[p.fromIndex]
        const nTo = nodes[p.toIndex]

        if (p.progress >= 1.0) {
          packets.splice(i, 1)
          continue
        }

        if (nFrom && nTo) {
          const currentX = nFrom.sx + (nTo.sx - nFrom.sx) * p.progress
          const currentY = nFrom.sy + (nTo.sy - nFrom.sy) * p.progress
          const currentZ = nFrom.z + (nTo.z - nFrom.z) * p.progress
          const scale = 1 - currentZ * 0.55

          ctx.beginPath()
          ctx.arc(currentX, currentY, 2.0 * scale, 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.globalAlpha = 1 - currentZ * 0.45
          ctx.fill()
          ctx.globalAlpha = 1.0
        }
      }

      // ─── Layer 9: Expanding Ripple Rings (Capped) ─────────────────────
      if (!prefersReducedMotion) {
        for (let i = rings.length - 1; i >= 0; i--) {
          const ring = rings[i]
          ring.radius += ring.speed * (1 - ring.z * 0.4) * dt
          ring.alpha -= 0.024 * dt

          if (ring.radius > ring.maxRadius) ring.alpha -= 0.06 * dt

          if (ring.alpha <= 0) {
            rings.splice(i, 1)
            continue
          }

          ctx.beginPath()
          ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2)
          ctx.strokeStyle = ring.color
          ctx.globalAlpha = Math.max(0, ring.alpha)
          ctx.lineWidth = 1.0 * (1 - ring.z * 0.4)
          ctx.stroke()
          ctx.globalAlpha = 1.0
        }
      }

      // ─── Layer 10: Rare Global Emergence Wave (Every ~95s) ─────────────
      if (!prefersReducedMotion && elapsedSec - lastEmergenceWaveTime > CONFIG.emergenceWaveInterval) {
        lastEmergenceWaveTime = elapsedSec
        rings.push({
          x: w / 2,
          y: h / 2,
          z: 0.05,
          radius: 10,
          maxRadius: Math.max(w, h) * 0.90,
          alpha: 0.50,
          color: isDark ? '#38bdf8' : '#0284c7',
          speed: 3.8,
        })
      }

      // ─── Layer 11: Rare Shooting Star (celestial accent) ───────────────
      if (!prefersReducedMotion) {
        if (elapsedSec - lastShootingStarTime > CONFIG.shootingStarInterval) {
          lastShootingStarTime = elapsedSec
          if (Math.random() < CONFIG.shootingStarChance && shootingStars.length < 2) {
            const fromLeft = Math.random() < 0.5
            const startX = fromLeft ? -40 : w + 40
            const startY = Math.random() * h * 0.55
            const dirX = fromLeft ? 1 : -1
            shootingStars.push({
              x: startX,
              y: startY,
              vx: dirX * (5.5 + Math.random() * 2.5),
              vy: 2.2 + Math.random() * 1.4,
              life: 0,
              maxLife: 42 + Math.random() * 14,
              length: 70 + Math.random() * 40,
            })
          }
        }

        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const s = shootingStars[i]
          s.life += dt
          s.x += s.vx * dt
          s.y += s.vy * dt
          if (s.life > s.maxLife || s.x < -100 || s.x > w + 100 || s.y > h + 100) {
            shootingStars.splice(i, 1)
            continue
          }
          const fade = 1 - s.life / s.maxLife
          const mag = Math.hypot(s.vx, s.vy) || 1
          const tailX = s.x - (s.vx / mag) * s.length
          const tailY = s.y - (s.vy / mag) * s.length
          const trailGrad = ctx.createLinearGradient(s.x, s.y, tailX, tailY)
          trailGrad.addColorStop(0, isDark ? `rgba(226, 232, 240, ${0.85 * fade})` : `rgba(51, 65, 85, ${0.6 * fade})`)
          trailGrad.addColorStop(1, isDark ? 'rgba(226, 232, 240, 0)' : 'rgba(51, 65, 85, 0)')

          ctx.beginPath()
          ctx.moveTo(s.x, s.y)
          ctx.lineTo(tailX, tailY)
          ctx.strokeStyle = trailGrad
          ctx.lineWidth = 1.3
          ctx.stroke()

          ctx.beginPath()
          ctx.arc(s.x, s.y, 1.4, 0, Math.PI * 2)
          ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${fade})` : `rgba(30, 41, 59, ${fade})`
          ctx.fill()
        }
      }

      // ─── Layer 12: Cinematic Vignette (celestial depth framing) ────────
      ctx.save()
      const vignette = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.35, w / 2, h / 2, Math.max(w, h) * 0.75)
      vignette.addColorStop(0, 'rgba(0,0,0,0)')
      vignette.addColorStop(1, isDark ? 'rgba(2, 6, 16, 0.35)' : 'rgba(15, 23, 42, 0.06)')
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, w, h)
      ctx.restore()

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    // ─── Cleanup ───────────────────────────────────────────────────────
    return () => {
      motionMediaQuery.removeEventListener('change', handleMotionPreferenceChange)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('neelstack-hub-hover', handleHubHover)
      window.removeEventListener('neelstack-hub-leave', handleHubLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      intersectionObserver.disconnect()
      clearTimeout(resizeTimeout)
      clearTimeout(mouseDecayTimer)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-95 dark:opacity-90 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
}
