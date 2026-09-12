'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    const darkState = document.documentElement.classList.contains('dark')
    setIsDark(darkState)
  }, [])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    if (nextDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) {
    return <div className="w-14 h-7.5 rounded-full border border-border bg-card/50" />
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light mode active' : 'Dark mode active'}
      className={cn(
        'relative flex items-center justify-between w-14 h-7.5 rounded-full p-1 border transition-colors duration-300 cursor-pointer select-none outline-none shrink-0 shadow-inner',
        isDark
          ? 'bg-card dark:bg-muted border-border shadow-black/40'
          : 'bg-muted border-border shadow-sm',
        className
      )}
    >
      {/* Track Background Icons */}
      <Sun className={cn('h-3.5 w-3.5 ml-0.5 transition-colors duration-300 z-0', isDark ? 'text-muted-foreground' : 'text-accent font-bold')} />
      <Moon className={cn('h-3.5 w-3.5 mr-0.5 transition-colors duration-300 z-0', isDark ? 'text-primary font-bold' : 'text-muted-foreground')} />

      {/* Sliding Thumb Knob */}
      <motion.div
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
        className={cn(
          'absolute top-0.75 left-0.75 h-5.5 w-5.5 rounded-full flex items-center justify-center shadow-md z-10 pointer-events-none',
          isDark
            ? 'bg-gradient-to-tr from-primary to-violet-500 shadow-primary/30'
            : 'bg-card shadow-sm border border-border'
        )}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-white" />
        ) : (
          <Sun className="h-3 w-3 text-accent" />
        )}
      </motion.div>
    </button>
  )
}
