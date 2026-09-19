'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * NEELSTACK // THEME SWITCHER (ENTERPRISE 3D TACTILE ENGINE)
 *
 * Features:
 * 1. Zero FOUC & Full Hydration Safety
 * 2. Cross-Tab Theme Synchronization via Window Storage Events
 * 3. System Color Scheme Detection (prefers-color-scheme)
 * 4. WCAG 2.1 AA Compliant (role="switch", aria-checked, keyboard focus ring)
 * 5. Symmetrical 3D Physical Elevation & Micro-Spring Physics
 * ═══════════════════════════════════════════════════════════════════════════
 */

export function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Sync state with DOM class
  const syncWithDOM = useCallback(() => {
    if (typeof document !== 'undefined') {
      const isDarkTheme = document.documentElement.classList.contains('dark')
      setIsDark(isDarkTheme)
    }
  }, [])

  useEffect(() => {
    // Read DOM theme immediately before marking mounted
    const isDarkTheme = document.documentElement.classList.contains('dark')
    setIsDark(isDarkTheme)
    setMounted(true)

    // Listen for cross-tab theme changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const newTheme = e.newValue
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark')
          document.documentElement.classList.remove('light')
          setIsDark(true)
        } else if (newTheme === 'light') {
          document.documentElement.classList.remove('dark')
          document.documentElement.classList.add('light')
          setIsDark(false)
        }
      }
    }

    // Listen for OS system theme changes (if user hasn't explicitly overridden)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      try {
        const storedTheme = localStorage.getItem('theme')
        if (!storedTheme) {
          if (e.matches) {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
            setIsDark(true)
          } else {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
            setIsDark(false)
          }
        }
      } catch {
        // Safe fallback for restricted storage environments
      }
    }

    window.addEventListener('storage', handleStorageChange)
    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [syncWithDOM])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)

    if (nextDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      try {
        localStorage.setItem('theme', 'dark')
      } catch {
        // Safe fallback for restricted storage environments
      }
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      try {
        localStorage.setItem('theme', 'light')
      } catch {
        // Safe fallback for restricted storage environments
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleTheme()
    }
  }

  // Pure CSS-driven skeleton fallback during SSR to guarantee zero layout shift and zero theme flash
  if (!mounted) {
    return (
      <div
        className={cn(
          'group relative flex items-center justify-between w-[68px] h-[32px] rounded-full px-2 select-none shrink-0 border-2 transition-none',
          'bg-gradient-to-r from-amber-100 via-sky-50 to-amber-100 border-amber-300/80',
          'dark:bg-gradient-to-r dark:from-slate-950 dark:via-[#0b1329] dark:to-slate-950 dark:border-cyan-500/30',
          className
        )}
        aria-hidden="true"
      >
        <Sun className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400/40 opacity-75 shrink-0" />
        <Moon className="h-3.5 w-3.5 text-slate-400/50 dark:text-cyan-400 opacity-75 shrink-0" />
        <div
          className={cn(
            'absolute top-[2px] h-[24px] w-[24px] rounded-full border-2 transition-none',
            'left-[2px] bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 border-amber-900/80 shadow-[1px_1px_0px_#78350f]',
            'dark:left-[38px] dark:bg-gradient-to-tr dark:from-slate-950 dark:via-cyan-950 dark:to-slate-900 dark:border-cyan-300 dark:shadow-[0_0_12px_rgba(6,182,212,0.7)]'
          )}
        />
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={cn(
        'group relative flex items-center justify-between w-[68px] h-[32px] rounded-full px-2 cursor-pointer select-none shrink-0 tactile-switch-3d transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        isDark
          ? 'bg-gradient-to-r from-slate-950 via-[#0b1329] to-slate-950 border-2 border-cyan-500/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.08)]'
          : 'bg-gradient-to-r from-amber-100 via-sky-50 to-amber-100 border-2 border-amber-300/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),0_1px_0_rgba(255,255,255,0.9)]',
        className
      )}
    >
      {/* Background Track Icons */}
      <Sun
        className={cn(
          'h-3.5 w-3.5 transition-all duration-300 z-0 pointer-events-none',
          isDark
            ? 'text-amber-400/40 scale-75'
            : 'text-amber-600 scale-100 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]'
        )}
      />
      <Moon
        className={cn(
          'h-3.5 w-3.5 transition-all duration-300 z-0 pointer-events-none',
          isDark
            ? 'text-cyan-400 scale-100 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]'
            : 'text-slate-400/50 scale-75'
        )}
      />

      {/* 3D Elevated Sliding Switch Knob */}
      <motion.div
        initial={false}
        animate={{
          x: isDark ? 36 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 520,
          damping: 30,
        }}
        className={cn(
          'absolute top-[2px] left-[2px] h-[24px] w-[24px] rounded-full flex items-center justify-center z-10 pointer-events-none border-2 transition-colors duration-300',
          isDark
            ? 'bg-gradient-to-tr from-slate-950 via-cyan-950 to-slate-900 border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.7),1px_1px_0px_#0284c7]'
            : 'bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 border-amber-900/80 shadow-[1px_1px_0px_#78350f,0_2px_4px_rgba(245,158,11,0.3)]'
        )}
      >
        <motion.div
          key={isDark ? 'dark-icon' : 'light-icon'}
          initial={false}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-3 w-3 text-cyan-200 drop-shadow-[0_0_4px_rgba(6,182,212,0.9)]" />
          ) : (
            <Sun className="h-3 w-3 text-amber-950 drop-shadow-[0_1px_0px_rgba(255,255,255,0.6)]" />
          )}
        </motion.div>
      </motion.div>
    </button>
  )
}
