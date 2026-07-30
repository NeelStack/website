'use client'

import React, { useEffect, useState } from 'react'

export function MouseSpotlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 hidden sm:block"
      style={{
        background: `radial-gradient(650px circle at ${pos.x}px ${pos.y}px, rgba(70, 166, 252, 0.07), transparent 80%)`,
      }}
      aria-hidden="true"
    />
  )
}
