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
          ? 'bg-slate-900 border-slate-700/80 shadow-black/40'
          : 'bg-slate-100 border-slate-300/80 shadow-slate-300/50',
        className
      )}
    >
      {/* Track Background Icons */}
      <Sun className={cn('h-3.5 w-3.5 ml-0.5 transition-colors duration-300 z-0', isDark ? 'text-slate-600' : 'text-amber-500 font-bold')} />
      <Moon className={cn('h-3.5 w-3.5 mr-0.5 transition-colors duration-300 z-0', isDark ? 'text-cyan-400 font-bold' : 'text-slate-400')} />

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
            ? 'bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-cyan-500/30'
            : 'bg-white shadow-slate-400/40 border border-slate-200'
        )}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-white" />
        ) : (
          <Sun className="h-3 w-3 text-amber-500" />
        )}
      </motion.div>
    </button>
  )
}
