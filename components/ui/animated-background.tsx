'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AiNetworkBg } from '@/components/ui/ai-network-bg'

/**
 * AnimatedBackground (60 FPS High-Performance Engine)
 *
 * Optimized for zero-lag zooming, scrolling, and scaling across high-DPI displays.
 * Replaced heavy CSS blur filters (blur-[140px]) with GPU-accelerated radial gradient lights.
 */
export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-background [will-change:transform] [transform:translate3d(0,0,0)]"
      aria-hidden="true"
    >
      {/* ─── Layer 1: 3D Spatial AI Constellation Architecture ─── */}
      <div className="absolute inset-0 opacity-85 dark:opacity-100">
        <AiNetworkBg />
      </div>

      {/* ─── Layer 2: Subtle Structural Grid ─── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.08] bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      {/* ─── Layer 3a: High-Performance GPU Ambient Mesh Gradient ─── */}
      <div
        className="absolute inset-0 opacity-50 dark:opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 18%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at 82% 28%, rgba(139,92,246,0.16) 0%, transparent 50%), radial-gradient(circle at 50% 82%, rgba(6,182,212,0.10) 0%, transparent 50%)',
        }}
      />

      {/* ─── Layer 3b: GPU-Accelerated Blue Aurora Light Orb (Top-Left) ─── */}
      <motion.div
        className="absolute top-[2%] left-[5%] w-[620px] h-[620px] rounded-full opacity-30 dark:opacity-22 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.32) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)',
          transform: 'translate3d(0,0,0)',
        }}
        animate={{ x: [0, 30, -20, 0], y: [0, -25, 20, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ─── Layer 3c: GPU-Accelerated Violet Aurora Light Orb (Right) ─── */}
      <motion.div
        className="absolute top-[25%] right-[4%] w-[580px] h-[580px] rounded-full opacity-30 dark:opacity-22 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.35) 0%, rgba(139,92,246,0.10) 40%, transparent 70%)',
          transform: 'translate3d(0,0,0)',
        }}
        animate={{ x: [0, -25, 20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ─── Layer 3d: GPU-Accelerated Cyan Aurora Light Orb (Bottom-Center) ─── */}
      <motion.div
        className="absolute bottom-[8%] left-[22%] w-[520px] h-[520px] rounded-full opacity-25 dark:opacity-18 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.28) 0%, rgba(6,182,212,0.06) 40%, transparent 70%)',
          transform: 'translate3d(0,0,0)',
        }}
        animate={{ x: [0, 25, -25, 0], y: [0, -20, 25, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
