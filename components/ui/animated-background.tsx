'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AiNetworkBg } from '@/components/ui/ai-network-bg'

/**
 * AnimatedBackground
 *
 * Full-page ambient background layer for NeelStack.
 * Three stacked layers:
 *   1. AI Constellation (nodes + data-flow lines) — brand identity layer
 *   2. Engineering Box Grid — subtle structural texture
 *   3. Aurora Orbs — depth & warmth from soft coloured glows
 *
 * Intentionally toned down so it never distracts from page content.
 */
export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Layer 1: AI Constellation Network — toned down for subtle ambient depth */}
      <div className="absolute inset-0 opacity-[0.25] dark:opacity-[0.30]">
        <AiNetworkBg />
      </div>

      {/* ─── Layer 2: Engineering Box Grid ─── */}
      {/* Very subtle — structural texture, not a visual focal point */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07] dark:opacity-[0.13] bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      {/* ─── Layer 3a: Slowly cycling ambient mesh gradient ─── */}
      {/* Provides a living, breathing feel without calling attention to itself */}
      <motion.div
        className="absolute inset-0 opacity-35 dark:opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.07) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(139,92,246,0.06) 0%, transparent 55%), radial-gradient(circle at 50% 80%, rgba(6,182,212,0.05) 0%, transparent 55%)',
            'radial-gradient(circle at 40% 30%, rgba(6,182,212,0.07) 0%, transparent 55%), radial-gradient(circle at 70% 70%, rgba(245,158,11,0.04) 0%, transparent 55%), radial-gradient(circle at 20% 80%, rgba(59,130,246,0.06) 0%, transparent 55%)',
            'radial-gradient(circle at 70% 20%, rgba(139,92,246,0.07) 0%, transparent 55%), radial-gradient(circle at 30% 60%, rgba(16,185,129,0.04) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(59,130,246,0.05) 0%, transparent 55%)',
            'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.07) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(139,92,246,0.06) 0%, transparent 55%), radial-gradient(circle at 50% 80%, rgba(6,182,212,0.05) 0%, transparent 55%)',
          ],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      {/* ─── Layer 3b: Large ultra-soft blue aurora orb (top-left) ─── */}
      <motion.div
        className="absolute top-[2%] left-[5%] w-[580px] h-[580px] rounded-full blur-[140px] opacity-30 dark:opacity-18"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.28) 0%, transparent 70%)' }}
        animate={{ x: [0, 55, -35, 0], y: [0, -45, 35, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ─── Layer 3c: Large ultra-soft violet aurora orb (right) ─── */}
      <motion.div
        className="absolute top-[28%] right-[4%] w-[520px] h-[520px] rounded-full blur-[150px] opacity-22 dark:opacity-14"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.24) 0%, transparent 70%)' }}
        animate={{ x: [0, -45, 35, 0], y: [0, 55, -35, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ─── Layer 3d: Ultra-soft cyan aurora orb (bottom-center) ─── */}
      <motion.div
        className="absolute bottom-[8%] left-[22%] w-[480px] h-[480px] rounded-full blur-[130px] opacity-20 dark:opacity-14"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 70%)' }}
        animate={{ x: [0, 45, -45, 0], y: [0, -35, 45, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
