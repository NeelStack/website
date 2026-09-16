'use client'

import { useEffect } from 'react'

/**
 * Global Mouse Spotlight Tracker
 * Attaches a lightweight, throttle-free requestAnimationFrame pointer listener
 * that updates --mouse-x and --mouse-y CSS custom properties on hovered cards
 * (.tactile-card-3d, .card-spotlight, .tactile-card-yellow, .interactive-mesh-card).
 */
export function MouseSpotlight() {
  useEffect(() => {
    let animationFrameId: number | null = null

    const handlePointerMove = (e: PointerEvent) => {
      if (animationFrameId !== null) return

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = null

        // Find all interactive card containers under pointer or near
        const cards = document.querySelectorAll<HTMLElement>(
          '.tactile-card-3d, .card-spotlight, .tactile-card-yellow, .interactive-mesh-card'
        )

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect()
          const isNear =
            e.clientX >= rect.left - 60 &&
            e.clientX <= rect.right + 60 &&
            e.clientY >= rect.top - 60 &&
            e.clientY <= rect.bottom + 60

          if (isNear) {
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            card.style.setProperty('--mouse-x', `${x}px`)
            card.style.setProperty('--mouse-y', `${y}px`)
          }
        })
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return null
}
