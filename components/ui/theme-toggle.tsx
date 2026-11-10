'use client'

import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    // Read DOM theme immediately
    const checkDomTheme = () => {
      if (typeof document !== 'undefined') {
        const isDarkTheme = document.documentElement.classList.contains('dark')
        setIsDark(isDarkTheme)
      }
    }

    checkDomTheme()
    setMounted(true)

    // 1. MutationObserver: Watch <html> class attribute changes in real-time
    // Guarantees all ThemeToggle instances (desktop, mobile header, mobile drawer) stay in sync
    const observer = new MutationObserver(() => {
      checkDomTheme()
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    // 2. Intra-window custom event: Instant simultaneous updates across all mounted toggles
    const handleCustomThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ isDark: boolean }>
      if (customEvent.detail && typeof customEvent.detail.isDark === 'boolean') {
        setIsDark(customEvent.detail.isDark)
      } else {
        checkDomTheme()
      }
    }
    window.addEventListener('neelstack-theme-change', handleCustomThemeChange)

    // 3. Storage event: Cross-tab theme synchronization
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
    window.addEventListener('storage', handleStorageChange)

    // 4. OS system theme changes (if user hasn't explicitly overridden)
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
    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      observer.disconnect()
      window.removeEventListener('neelstack-theme-change', handleCustomThemeChange)
      window.removeEventListener('storage', handleStorageChange)
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  const toggleTheme = () => {
    // Determine the next state based on the ACTUAL current DOM class, never stale React state
    const currentIsDark = document.documentElement.classList.contains('dark')
    const nextDark = !currentIsDark

    // Apply to DOM class immediately
    if (nextDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }

    // Persist to localStorage
    try {
      localStorage.setItem('theme', nextDark ? 'dark' : 'light')
    } catch {
      // Safe fallback for restricted storage environments
    }

    // Update local state immediately
    setIsDark(nextDark)

    // Broadcast event so all other ThemeToggle instances on the page update simultaneously
    window.dispatchEvent(
      new CustomEvent('neelstack-theme-change', {
        detail: { isDark: nextDark },
      })
    )
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
          'group relative flex items-center justify-between w-[54px] h-[28px] rounded-full px-1.5 select-none shrink-0 border transition-none',
          'bg-slate-100 border-slate-300/80',
          'dark:bg-slate-800/90 dark:border-slate-700/80',
          className
        )}
        aria-hidden="true"
      >
        <Sun className="h-3 w-3 text-amber-500/50 dark:text-slate-500 opacity-60 shrink-0" />
        <Moon className="h-3 w-3 text-slate-400 dark:text-cyan-400/50 opacity-60 shrink-0" />
        <div
          className={cn(
            'absolute top-[2px] h-[22px] w-[22px] rounded-full border transition-none shadow-xs',
            'left-[2px] bg-white border-slate-200/90',
            'dark:left-[30px] dark:bg-slate-900 dark:border-slate-700'
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
        'group relative flex items-center justify-between w-[54px] h-[28px] rounded-full px-1.5 cursor-pointer select-none shrink-0 tactile-switch-3d transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        isDark
          ? 'bg-slate-800/90 border-slate-700/80 hover:bg-slate-800'
          : 'bg-slate-100 border-slate-300/80 hover:bg-slate-200/80',
        className
      )}
    >
      {/* Background Track Icons */}
      <Sun
        className={cn(
          'h-3 w-3 transition-opacity duration-200 z-0 pointer-events-none',
          isDark ? 'opacity-25 text-slate-500' : 'opacity-60 text-amber-600/80'
        )}
      />
      <Moon
        className={cn(
          'h-3 w-3 transition-opacity duration-200 z-0 pointer-events-none',
          isDark ? 'opacity-60 text-cyan-400/80' : 'opacity-25 text-slate-400'
        )}
      />

      {/* Subtle Elevated Sliding Switch Knob */}
      <motion.div
        initial={false}
        animate={{
          x: isDark ? 28 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 550,
          damping: 32,
        }}
        className={cn(
          'absolute top-[2px] left-[2px] h-[22px] w-[22px] rounded-full flex items-center justify-center z-10 pointer-events-none border transition-colors duration-200 shadow-xs',
          isDark
            ? 'bg-slate-900 border-slate-700 text-slate-200'
            : 'bg-white border-slate-200/90 text-slate-700'
        )}
      >
        <motion.div
          key={isDark ? 'dark-icon' : 'light-icon'}
          initial={false}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.16 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-2.5 w-2.5 text-cyan-300" />
          ) : (
            <Sun className="h-2.5 w-2.5 text-amber-500" />
          )}
        </motion.div>
      </motion.div>
    </button>
  )
}
