'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'

/**
 * ══════════════════════════════════════════════════════════════════════════════
 * PARTICLE LOGO CANVAS — REUSABLE INTERACTIVE PARTICLE MATRIX COMPONENT
 *
 * Converts any logo (image URL, SVG, or text monogram) into an interactive
 * matrix of physics-driven particles with:
 *  - Organic Color Morphing across theme & slide changes (smooth RGB interpolation)
 *  - Radial cursor repulsion (magnetic bubble displacement)
 *  - Cursor halo ambient glow lens
 *  - Click shockwave detonation
 *  - Spring damping elastic recovery
 *  - Idle subtle cosmic floating/breathing
 *  - Full Retina/Hi-DPI display scaling
 *  - Viewport IntersectionObserver auto-pause for battery/performance
 *  - Mobile touch & pointer event support
 *  - Accessible `prefers-reduced-motion` compliance
 * ══════════════════════════════════════════════════════════════════════════════
 */

export interface ParticleLogoProps {
  /** Source URL of the logo (PNG, WebP, SVG, transparent background recommended) */
  src?: string
  /** Fallback or standalone text if no image is provided (e.g. "DHRUVA", "NS", or school name) */
  text?: string
  /** Text styling options when `text` prop is used */
  textOptions?: {
    fontFamily?: string
    fontWeight?: string | number
    fontSize?: number
  }
  /** Custom CSS classes for the canvas container */
  className?: string
  /** Dot radius in CSS pixels (default: 2.4) */
  particleSize?: number
  /** Grid sampling distance in pixels (default: 3). Lower values = denser particles */
  densityStep?: number
  /** Maximum rendered width of the logo inside the canvas (default: 680) */
  maxContentWidth?: number
  /** Maximum rendered height of the logo inside the canvas (default: 680) */
  maxContentHeight?: number
  /** Color mode: 'palette' uses dark/light palettes, 'image' keeps pixel RGB, 'single' uses singleColor */
  colorMode?: 'palette' | 'image' | 'single'
  /** Single color hex/rgb for 'single' mode (default: '#38bdf8') */
  singleColor?: string
  /** Dark mode palette array */
  darkPalette?: string[]
  /** Light mode palette array */
  lightPalette?: string[]
  /** Radius of the mouse repulsion bubble in pixels (default: 95) */
  repulseRadius?: number
  /** Strength of the repulsion force (default: 7.5) */
  repulseStrength?: number
  /** Whether clicking detonate-scatters the particles (default: true) */
  clickShockwave?: boolean
  /** Radius of the click shockwave (default: 230) */
  shockwaveRadius?: number
  /** Push force of the click shockwave (default: 25) */
  shockwaveStrength?: number
  /** Hooke's spring tension pulling dots back home (default: 0.075) */
  springTension?: number
  /** Friction damping factor (default: 0.88). Lower = faster stop, higher = bouncy */
  friction?: number
  /** Subtle idle floating breathing effect when idle (default: true) */
  idleFloat?: boolean
  /** Accessible ARIA label for screen readers */
  ariaLabel?: string
  /** Callback fired when particles are generated and ready to animate */
  onReady?: () => void
}

interface RGB {
  r: number
  g: number
  b: number
}

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  vx: number
  vy: number
  colorIndex: number
  currR: number
  currG: number
  currB: number
  targetR: number
  targetG: number
  targetB: number
  size: number
  seed: number
}

function parseColorToRgb(str: string): RGB {
  if (str.startsWith('#')) {
    let c = str.slice(1)
    if (c.length === 3) {
      c = c
        .split('')
        .map((x) => x + x)
        .join('')
    }
    const n = parseInt(c, 16)
    if (!Number.isNaN(n)) {
      return {
        r: (n >> 16) & 255,
        g: (n >> 8) & 255,
        b: n & 255,
      }
    }
  }
  const match = str.match(/\d+/g)
  if (match && match.length >= 3) {
    return {
      r: Math.min(255, Math.max(0, Number(match[0]))),
      g: Math.min(255, Math.max(0, Number(match[1]))),
      b: Math.min(255, Math.max(0, Number(match[2]))),
    }
  }
  return { r: 56, g: 189, b: 248 }
}

export function ParticleLogoCanvas({
  src,
  text,
  textOptions,
  className = 'w-full h-full min-h-[350px]',
  particleSize = 2.4,
  densityStep = 3,
  maxContentWidth = 680,
  maxContentHeight = 680,
  colorMode = 'palette',
  singleColor = '#38bdf8',
  darkPalette = ['#38bdf8', '#60a5fa', '#93c5fd', '#818cf8', '#ffffff'],
  lightPalette = ['#0284c7', '#2563eb', '#3b82f6', '#1d4ed8', '#4338ca'],
  repulseRadius = 95,
  repulseStrength = 7.5,
  clickShockwave = true,
  shockwaveRadius = 230,
  shockwaveStrength = 25,
  springTension = 0.075,
  friction = 0.88,
  idleFloat = true,
  ariaLabel = 'Interactive particle logo',
  onReady,
}: ParticleLogoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const isDarkRef = useRef<boolean>(true)
  const isMobileRef = useRef<boolean>(false)

  // Mutable animation references
  const particlesRef = useRef<Particle[]>([])
  const animIdRef = useRef<number | null>(null)
  const isVisibleRef = useRef<boolean>(true)
  const mouseRef = useRef<{
    x: number
    y: number
    isActive: boolean
    shockwave: { x: number; y: number; active: boolean; radius: number } | null
  }>({
    x: -99999,
    y: -99999,
    isActive: false,
    shockwave: null,
  })

  // Determine current active palette
  const getActivePalette = useCallback(() => {
    return isDarkRef.current ? darkPalette : lightPalette
  }, [darkPalette, lightPalette])

  // Sample image or text into particle grid
  const sampleParticles = useCallback(
    (
      sourceImg: HTMLImageElement | null,
      width: number,
      height: number
    ): Particle[] => {
      const offscreen = document.createElement('canvas')
      offscreen.width = width
      offscreen.height = height
      const offCtx = offscreen.getContext('2d', { willReadFrequently: true })
      if (!offCtx) return []

      let drawW = Math.min(width * 0.96, maxContentWidth)
      let drawH = Math.min(height * 0.96, maxContentHeight)
      let startX = (width - drawW) / 2
      let startY = (height - drawH) / 2

      if (sourceImg && sourceImg.width && sourceImg.height) {
        // Maintain aspect ratio
        const imgAspect = sourceImg.width / sourceImg.height
        const containerAspect = drawW / drawH

        if (imgAspect > containerAspect) {
          drawH = drawW / imgAspect
        } else {
          drawW = drawH * imgAspect
        }
        startX = (width - drawW) / 2
        startY = (height - drawH) / 2

        offCtx.drawImage(sourceImg, startX, startY, drawW, drawH)
      } else if (text) {
        // Render text monogram
        offCtx.textAlign = 'center'
        offCtx.textBaseline = 'middle'
        const fontSize = textOptions?.fontSize ?? Math.min(drawW * 0.28, 90)
        const fontWeight = textOptions?.fontWeight ?? '800'
        const fontFamily =
          textOptions?.fontFamily ??
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'

        offCtx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
        offCtx.fillStyle = '#ffffff'
        startX = 0
        startY = 0
        drawW = width
        drawH = height
        offCtx.fillText(text, width / 2, height / 2)
      } else {
        // Fallback geometric monogram emblem
        const cx = width / 2
        const cy = height / 2
        const r = Math.min(drawW, drawH) * 0.38
        offCtx.lineWidth = 16
        offCtx.strokeStyle = '#ffffff'
        offCtx.beginPath()
        offCtx.arc(cx, cy, r, 0, Math.PI * 2)
        offCtx.stroke()
        offCtx.beginPath()
        offCtx.moveTo(cx - r * 0.5, cy - r * 0.5)
        offCtx.lineTo(cx + r * 0.5, cy + r * 0.5)
        offCtx.stroke()
      }

      // Read pixel data
      const imgData = offCtx.getImageData(0, 0, width, height)
      const data = imgData.data
      const newParticles: Particle[] = []
      const step = Math.max(2, Math.round(densityStep))
      const activePalette = getActivePalette()

      let particleIndex = 0
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4
          const alpha = data[index + 3]

          if (alpha > 80) {
            let rgb: RGB = { r: 56, g: 189, b: 248 }
            const colorIndex = particleIndex % activePalette.length
            if (colorMode === 'image') {
              rgb = {
                r: data[index],
                g: data[index + 1],
                b: data[index + 2],
              }
            } else if (colorMode === 'palette' && activePalette.length > 0) {
              rgb = parseColorToRgb(activePalette[colorIndex])
            } else if (colorMode === 'single') {
              rgb = parseColorToRgb(singleColor)
            }

            newParticles.push({
              x: x + (Math.random() - 0.5) * 40,
              y: y + (Math.random() - 0.5) * 40,
              originX: x,
              originY: y,
              vx: (Math.random() - 0.5) * 1.5,
              vy: (Math.random() - 0.5) * 1.5,
              colorIndex,
              currR: rgb.r,
              currG: rgb.g,
              currB: rgb.b,
              targetR: rgb.r,
              targetG: rgb.g,
              targetB: rgb.b,
              size: particleSize,
              seed: Math.random() * Math.PI * 2,
            })
            particleIndex++
          }
        }
      }

      return newParticles
    },
    [
      text,
      textOptions,
      maxContentWidth,
      maxContentHeight,
      densityStep,
      colorMode,
      singleColor,
      getActivePalette,
      particleSize,
    ]
  )

  // Smoothly morph particle colors when palette or theme changes
  useEffect(() => {
    if (colorMode !== 'palette' || particlesRef.current.length === 0) return

    const activePalette = isDarkRef.current ? darkPalette : lightPalette
    if (!activePalette || activePalette.length === 0) return

    for (const p of particlesRef.current) {
      const hex = activePalette[p.colorIndex % activePalette.length]
      const target = parseColorToRgb(hex)
      p.targetR = target.r
      p.targetG = target.g
      p.targetB = target.b

      // Gentle organic shimmer on color transition
      p.vx += (Math.random() - 0.5) * 1.8
      p.vy += (Math.random() - 0.5) * 1.8
    }
  }, [darkPalette, lightPalette, colorMode])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let isDisposed = false
    let imageObj: HTMLImageElement | null = null

    // Initialize theme detector
    const checkTheme = () => {
      if (typeof document !== 'undefined') {
        const isDark = document.documentElement.classList.contains('dark')
        isDarkRef.current = isDark

        if (colorMode === 'palette') {
          const activePalette = isDark ? darkPalette : lightPalette
          for (const p of particlesRef.current) {
            const hex = activePalette[p.colorIndex % activePalette.length]
            const target = parseColorToRgb(hex)
            p.targetR = target.r
            p.targetG = target.g
            p.targetB = target.b
          }
        }
      }
    }

    checkTheme()

    // Observe theme class switches on <html>
    const themeObserver = new MutationObserver(() => {
      checkTheme()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    // Resize handler
    const setupCanvas = () => {
      isMobileRef.current = typeof window !== 'undefined' && window.innerWidth < 768
      const rect = container.getBoundingClientRect()
      const w = Math.floor(rect.width) || 400
      const h = Math.floor(rect.height) || 400
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`

      ctx.resetTransform?.()
      ctx.scale(dpr, dpr)

      particlesRef.current = sampleParticles(imageObj, w, h)
      setIsLoaded(true)
      onReady?.()
    }

    // Load Image or Text
    if (src) {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.src = src
      img.onload = () => {
        if (isDisposed) return
        imageObj = img
        setupCanvas()
      }
      img.onerror = () => {
        if (isDisposed) return
        imageObj = null
        setupCanvas()
      }
    } else {
      setupCanvas()
    }

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      if (!isDisposed) {
        setupCanvas()
      }
    })
    resizeObserver.observe(container)

    // Viewport IntersectionObserver to pause loop off-screen
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        isVisibleRef.current = entry ? entry.isIntersecting : true
      },
      { threshold: 0.05 }
    )
    intersectionObserver.observe(container)

    // Main animation loop
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      if (isDisposed) return

      if (!isVisibleRef.current) {
        animIdRef.current = requestAnimationFrame(animate)
        return
      }

      const dt = Math.min((currentTime - lastTime) / 1000, 0.1)
      lastTime = currentTime

      const rect = container.getBoundingClientRect()
      const w = rect.width
      const h = rect.height

      ctx.clearRect(0, 0, w, h)

      const mouse = mouseRef.current
      const particles = particlesRef.current

      // Ambient Magnetic Halo underneath cursor
      if (mouse.isActive && !prefersReducedMotion) {
        const haloRadius = repulseRadius * 1.15
        const haloGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          haloRadius
        )
        const haloColor = isDarkRef.current
          ? 'rgba(56, 189, 248, 0.08)'
          : 'rgba(37, 99, 235, 0.05)'
        haloGrad.addColorStop(0, haloColor)
        haloGrad.addColorStop(1, 'transparent')
        ctx.fillStyle = haloGrad
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, haloRadius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Process shockwave pulse expansion
      if (mouse.shockwave && mouse.shockwave.active) {
        mouse.shockwave.radius += 560 * dt
        if (mouse.shockwave.radius > shockwaveRadius) {
          mouse.shockwave.active = false
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (!prefersReducedMotion) {
          // 1. Cursor Hover Repulsion
          if (mouse.isActive) {
            const dx = p.x - mouse.x
            const dy = p.y - mouse.y
            const dist = Math.hypot(dx, dy)
            const currentRadius = isMobileRef.current ? Math.min(repulseRadius, 70) : repulseRadius
            const currentForce = isMobileRef.current ? repulseStrength * 0.6 : repulseStrength

            if (dist < currentRadius && dist > 0.001) {
              const normX = dx / dist
              const normY = dy / dist
              const force = (1 - dist / currentRadius) * currentForce
              p.vx += normX * force
              p.vy += normY * force
            }
          }

          // 2. Click Shockwave Repulsion
          if (mouse.shockwave && mouse.shockwave.active) {
            const sdx = p.x - mouse.shockwave.x
            const sdy = p.y - mouse.shockwave.y
            const sdist = Math.hypot(sdx, sdy)
            const ringThickness = 55

            if (
              Math.abs(sdist - mouse.shockwave.radius) < ringThickness &&
              sdist > 0.001
            ) {
              const snormX = sdx / sdist
              const snormY = sdy / sdist
              const sforce =
                (1 -
                  Math.abs(sdist - mouse.shockwave.radius) / ringThickness) *
                shockwaveStrength
              p.vx += snormX * sforce
              p.vy += snormY * sforce
            }
          }

          // 3. Subtle Idle Cosmic Floating (Calm & Slower on Mobile)
          let targetX = p.originX
          let targetY = p.originY

          if (idleFloat) {
            const speedFactor = isMobileRef.current ? 0.0006 : 0.0015
            const floatAmp = isMobileRef.current ? 0.9 : 1.8
            const timeVal = currentTime * speedFactor
            targetX += Math.cos(timeVal + p.seed) * floatAmp
            targetY += Math.sin(timeVal + p.seed * 1.3) * floatAmp
          }

          // 4. Elastic Spring Force back to Home
          const homeDx = targetX - p.x
          const homeDy = targetY - p.y
          const currentTension = isMobileRef.current ? springTension * 0.8 : springTension
          p.vx += homeDx * currentTension
          p.vy += homeDy * currentTension

          // 5. Friction Damping
          const currentFriction = isMobileRef.current ? 0.84 : friction
          p.vx *= currentFriction
          p.vy *= currentFriction

          // Clamp velocity to prevent runaway speeds (Gentler on mobile)
          const speed = Math.hypot(p.vx, p.vy)
          const maxSpeed = isMobileRef.current ? 16 : 30
          if (speed > maxSpeed) {
            p.vx = (p.vx / speed) * maxSpeed
            p.vy = (p.vy / speed) * maxSpeed
          }

          p.x += p.vx
          p.y += p.vy

          // 6. Smooth RGB Color Morphing
          const morphRate = isMobileRef.current ? 0.05 : 0.08
          p.currR += (p.targetR - p.currR) * morphRate
          p.currG += (p.targetG - p.currG) * morphRate
          p.currB += (p.targetB - p.currB) * morphRate
        } else {
          // Static snapshot for reduced-motion
          p.x = p.originX
          p.y = p.originY
          p.currR = p.targetR
          p.currG = p.targetG
          p.currB = p.targetB
        }

        // Draw particle
        const r = Math.round(p.currR)
        const g = Math.round(p.currG)
        const b = Math.round(p.currB)
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      animIdRef.current = requestAnimationFrame(animate)
    }

    animIdRef.current = requestAnimationFrame(animate)

    // Pointer Event Handlers
    const updatePointer = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current.x = clientX - rect.left
      mouseRef.current.y = clientY - rect.top
      mouseRef.current.isActive = true
    }

    const handlePointerMove = (e: PointerEvent) => {
      updatePointer(e.clientX, e.clientY)
    }

    const handlePointerLeave = () => {
      mouseRef.current.isActive = false
      mouseRef.current.x = -99999
      mouseRef.current.y = -99999
    }

    const handlePointerDown = (e: PointerEvent) => {
      if (!clickShockwave) return
      const rect = container.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top

      mouseRef.current.shockwave = {
        x: clickX,
        y: clickY,
        active: true,
        radius: 10,
      }
    }

    // Touch Event Handlers for fluid mobile interaction & smooth scroll passthrough
    let touchStartX = 0
    let touchStartY = 0

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartX = e.touches[0].clientX
        touchStartY = e.touches[0].clientY
        updatePointer(touchStartX, touchStartY)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        const diffY = Math.abs(touch.clientY - touchStartY)
        const diffX = Math.abs(touch.clientX - touchStartX)

        // If finger is scrolling vertically, yield to natural page scrolling
        if (diffY > 12 && diffY > diffX) {
          handlePointerLeave()
          return
        }
        updatePointer(touch.clientX, touch.clientY)
      }
    }

    const handleTouchEnd = () => {
      handlePointerLeave()
    }

    container.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    })
    container.addEventListener('pointerleave', handlePointerLeave, {
      passive: true,
    })
    container.addEventListener('pointerdown', handlePointerDown, {
      passive: true,
    })
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      isDisposed = true
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current)
      themeObserver.disconnect()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      container.removeEventListener('pointermove', handlePointerMove)
      container.removeEventListener('pointerleave', handlePointerLeave)
      container.removeEventListener('pointerdown', handlePointerDown)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [
    src,
    sampleParticles,
    repulseRadius,
    repulseStrength,
    clickShockwave,
    shockwaveRadius,
    shockwaveStrength,
    springTension,
    friction,
    idleFloat,
    colorMode,
    darkPalette,
    lightPalette,
    onReady,
  ])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-crosshair select-none touch-pan-y ${className}`}
      aria-label={ariaLabel}
      role="img"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
      {!isLoaded && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
          aria-hidden="true"
        >
          <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
        </div>
      )}
    </div>
  )
}
