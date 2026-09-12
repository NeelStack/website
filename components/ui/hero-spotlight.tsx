'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion'

interface HeroSpotlightProps {
  children: React.ReactNode
  className?: string
}

export function HeroSpotlight({ children, className = '' }: HeroSpotlightProps) {
  const sectionRef = useRef<HTMLElement>(null)

  // Cursor Spotlight coordinates
  const mouseSectionX = useMotionValue(0)
  const mouseSectionY = useMotionValue(0)
  const spotlightX = useSpring(mouseSectionX, { stiffness: 100, damping: 25 })
  const spotlightY = useSpring(mouseSectionY, { stiffness: 100, damping: 25 })
  const spotlightGradient = useMotionTemplate`radial-gradient(circle 500px at ${spotlightX}px ${spotlightY}px, rgba(59, 114, 254, 0.14) 0%, transparent 80%)`

  function handleSectionMouseMove(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    mouseSectionX.set(event.clientX - rect.left)
    mouseSectionY.set(event.clientY - rect.top)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      className={`relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 lg:min-h-[85vh] flex flex-col justify-center bg-background ${className}`}
      aria-label="Hero section"
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-65 z-0"
        style={{ background: spotlightGradient }}
        aria-hidden="true"
      />
      {children}
    </section>
  )
}
