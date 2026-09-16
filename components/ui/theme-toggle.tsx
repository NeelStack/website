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
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    if (nextDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) {
    return <div className="w-[70px] h-[34px] rounded-full border-2 border-border/80 bg-muted/60" />
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={cn(
        'group relative flex items-center justify-between w-[70px] h-[34px] rounded-full px-2 cursor-pointer select-none outline-none shrink-0 tactile-switch-3d transition-all duration-200',
        isDark
          ? 'bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950'
          : 'bg-gradient-to-r from-amber-100/90 via-slate-100 to-amber-50/90',
        className
      )}
    >
      {/* Background Track Icons */}
      <Sun
        className={cn(
          'h-4 w-4 transition-all duration-300 z-0',
          isDark ? 'text-amber-400 opacity-60 scale-75' : 'text-amber-600 opacity-90 scale-95'
        )}
      />
      <Moon
        className={cn(
          'h-4 w-4 transition-all duration-300 z-0',
          isDark ? 'text-cyan-400 opacity-90 scale-95' : 'text-slate-500 opacity-70 scale-75'
        )}
      />

      {/* 3D Elevated Sliding Switch Knob */}
      <motion.div
        animate={{
          x: isDark ? 36 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
        className={cn(
          'absolute top-0.5 left-0.5 h-7 w-7 rounded-full flex items-center justify-center z-10 pointer-events-none transition-all duration-200 border-2',
          isDark
            ? 'bg-gradient-to-tr from-slate-950 via-cyan-950 to-slate-900 border-cyan-300 shadow-[0_0_14px_rgba(6,182,212,0.8),1.5px_1.5px_0px_0px_#0284c7]'
            : 'bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 border-amber-900 shadow-[1.5px_1.5px_0px_0px_#78350f]'
        )}
      >
        <motion.div
          key={isDark ? 'dark-knob-icon' : 'light-knob-icon'}
          initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-3.5 w-3.5 text-cyan-300 drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
          ) : (
            <Sun className="h-3.5 w-3.5 text-amber-950 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]" />
          )}
        </motion.div>
      </motion.div>
    </button>
  )
}

