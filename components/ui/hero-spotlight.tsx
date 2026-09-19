'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion'

interface HeroSpotlightProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
}

export function HeroSpotlight({ children, className = '', onMouseEnter, onMouseLeave, ...rest }: HeroSpotlightProps) {
  const sectionRef = useRef<HTMLElement>(null)

  // Cursor Spotlight coordinates
  const mouseSectionX = useMotionValue(0)
  const mouseSectionY = useMotionValue(0)
  const spotlightX = useSpring(mouseSectionX, { stiffness: 100, damping: 25 })
  const spotlightY = useSpring(mouseSectionY, { stiffness: 100, damping: 25 })
  const spotlightGradient = useMotionTemplate`radial-gradient(circle 420px at ${spotlightX}px ${spotlightY}px, rgba(59, 130, 246, 0.08) 0%, transparent 75%)`

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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative overflow-hidden min-h-0 hero-viewport-desktop flex flex-col justify-center bg-transparent ${className}`}
      aria-label="Hero section"
      {...rest}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-45 z-0"
        style={{ background: spotlightGradient }}
        aria-hidden="true"
      />
      {children}
    </section>
  )
}
