'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * AnimatedBackground
 *
 * Full-page high-fidelity animated background layer.
 * Includes:
 * 1. Adaptive Light & Dark mode ambient aurora mesh gradients.
 * 2. Floating physics-based 3D Glass Bubbles with specular highlights.
 * 3. Light/Dark adaptive subtle grid overlay.
 * 4. Micro particle drifts.
 */

/* ── Floating 3D Glass Bubbles Configuration ── */
interface BubbleConfig {
  id: string
  size: number
  initialX: string
  initialY: string
  duration: number
  delay: number
  yDistance: number
  xDrift: number[]
  gradient: string
  borderGlow: string
  shadowColor: string
}

const bubbles: BubbleConfig[] = [
  {
    id: 'bubble-1',
    size: 110,
    initialX: '12%',
    initialY: '20%',
    duration: 16,
    delay: 0,
    yDistance: -80,
    xDrift: [0, 25, -20, 15, 0],
    gradient: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(59, 130, 246, 0.15) 45%, rgba(139, 92, 246, 0.08) 100%)',
    borderGlow: 'rgba(59, 130, 246, 0.3)',
    shadowColor: 'rgba(59, 130, 246, 0.12)',
  },
  {
    id: 'bubble-2',
    size: 150,
    initialX: '78%',
    initialY: '15%',
    duration: 22,
    delay: 2,
    yDistance: -100,
    xDrift: [0, -35, 25, -15, 0],
    gradient: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.75) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(6, 182, 212, 0.08) 100%)',
    borderGlow: 'rgba(139, 92, 246, 0.3)',
    shadowColor: 'rgba(139, 92, 246, 0.12)',
  },
  {
    id: 'bubble-3',
    size: 80,
    initialX: '45%',
    initialY: '45%',
    duration: 14,
    delay: 1,
    yDistance: -60,
    xDrift: [0, 20, -30, 10, 0],
    gradient: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.85) 0%, rgba(6, 182, 212, 0.18) 45%, rgba(59, 130, 246, 0.08) 100%)',
    borderGlow: 'rgba(6, 182, 212, 0.35)',
    shadowColor: 'rgba(6, 182, 212, 0.14)',
  },
  {
    id: 'bubble-4',
    size: 130,
    initialX: '25%',
    initialY: '70%',
    duration: 20,
    delay: 3,
    yDistance: -90,
    xDrift: [0, -25, 35, -20, 0],
    gradient: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.75) 0%, rgba(245, 158, 11, 0.14) 50%, rgba(236, 72, 153, 0.08) 100%)',
    borderGlow: 'rgba(245, 158, 11, 0.3)',
    shadowColor: 'rgba(245, 158, 11, 0.12)',
  },
  {
    id: 'bubble-5',
    size: 95,
    initialX: '85%',
    initialY: '65%',
    duration: 18,
    delay: 4,
    yDistance: -75,
    xDrift: [0, 30, -15, 25, 0],
    gradient: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(16, 185, 129, 0.15) 45%, rgba(59, 130, 246, 0.08) 100%)',
    borderGlow: 'rgba(16, 185, 129, 0.3)',
    shadowColor: 'rgba(16, 185, 129, 0.12)',
  },
  {
    id: 'bubble-6',
    size: 65,
    initialX: '60%',
    initialY: '85%',
    duration: 12,
    delay: 1.5,
    yDistance: -50,
    xDrift: [0, -15, 20, -10, 0],
    gradient: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(236, 72, 153, 0.16) 45%, rgba(139, 92, 246, 0.08) 100%)',
    borderGlow: 'rgba(236, 72, 153, 0.35)',
    shadowColor: 'rgba(236, 72, 153, 0.14)',
  },
]

/* ── Micro floating particles ── */
const particles = Array.from({ length: 16 }, (_, i) => ({
  id: `particle-${i}`,
  size: Math.random() * 3.5 + 1.5,
  x: `${Math.random() * 96 + 2}%`,
  y: `${Math.random() * 96 + 2}%`,
  duration: Math.random() * 14 + 10,
  delay: Math.random() * 5,
}))

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* ─── 1. Adaptive Light / Dark Base Mesh Gradient ─── */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.07) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 30%, rgba(6, 182, 212, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(245, 158, 11, 0.06) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.07) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 30% 60%, rgba(16, 185, 129, 0.06) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.06) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.07) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* ─── 2. Large Soft Ambient Aurora Orbs ─── */}
      <motion.div
        className="absolute top-10 left-[8%] w-[450px] h-[450px] rounded-full blur-[100px] opacity-40 dark:opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-[25%] right-[5%] w-[500px] h-[500px] rounded-full blur-[110px] opacity-35 dark:opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-[15%] left-[20%] w-[420px] h-[420px] rounded-full blur-[90px] opacity-35 dark:opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ─── 3. Floating 3D Glass Bubbles with Specular Highlights ─── */}
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full backdrop-blur-[2px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          style={{
            width: b.size,
            height: b.size,
            left: b.initialX,
            top: b.initialY,
            background: b.gradient,
            border: `1px solid ${b.borderGlow}`,
            boxShadow: `inset 0 2px 6px rgba(255, 255, 255, 0.7), 0 8px 24px ${b.shadowColor}`,
            willChange: 'transform',
          }}
          animate={{
            y: [0, b.yDistance, 0],
            x: b.xDrift,
            scale: [1, 1.06, 0.96, 1.04, 1],
            rotate: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: 'easeInOut',
          }}
        >
          {/* Specular light highlight arc on upper left of bubble */}
          <div className="absolute top-2 left-3 w-1/3 h-1/3 rounded-full bg-gradient-to-br from-white/90 to-transparent blur-[0.5px] pointer-events-none opacity-80" />
        </motion.div>
      ))}

      {/* ─── 4. Subtle Micro Drifting Particles ─── */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20 dark:bg-primary/30"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            willChange: 'transform',
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, 40, -20, 0],
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
