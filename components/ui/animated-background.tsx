'use client'

import { useEffect, useState } from 'react'
import { AiNetworkBg } from '@/components/ui/ai-network-bg'

/**
 * AnimatedBackground (Production-Grade Celestial Cosmos)
 *
 * Combines adaptive ambient celestial atmospheric haze with the high-performance
 * 3D Celestial Intelligence Universe canvas engine. Flawless in both Light & Dark modes.
 */
export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-background [will-change:transform] [transform:translate3d(0,0,0)]"
      aria-hidden="true"
    >
      {/* ─── Layer 1: Adaptive Celestial Atmospheric Haze (Uniform Full-Screen Harmony) ─── */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-25 transition-opacity duration-700"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(59,130,246,0.03) 0%, rgba(139,92,246,0.02) 50%, transparent 100%)',
        }}
      />

      {/* ─── Layer 2: 3D Celestial Intelligence Cosmos Canvas ─── */}
      <div className="absolute inset-0 z-10">
        <AiNetworkBg />
      </div>
    </div>
  )
}
