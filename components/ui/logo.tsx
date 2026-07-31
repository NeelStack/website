'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

/**
 * ✦ The Architectural "N" — NeelStack Signature Brand Logo
 * A pure, solid, geometric "N" featuring a single continuous embedded signal channel
 * styled in a vibrant electric cyan-to-violet gradient glow. No loose dots, zero distraction.
 */
export function LogoMark({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const dimensions = {
    sm: { width: 30, height: 30 },
    md: { width: 38, height: 38 },
    lg: { width: 46, height: 46 },
  }[size]

  return (
    <div className={cn('relative inline-flex items-center justify-center shrink-0 group/logo select-none', className)}>
      {/* Outer Ambient Accent Glow */}
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500/35 via-blue-600/30 to-violet-600/35 blur-md opacity-40 group-hover/logo:opacity-100 group-hover/logo:blur-lg transition-all duration-300 pointer-events-none"
        aria-hidden="true"
      />

      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="relative z-10 transition-transform duration-300 group-hover/logo:scale-[1.03]"
      >
        <defs>
          {/* Light Mode Signal Line Gradient */}
          <linearGradient id="ns-unified-light" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>

          {/* Dark Mode Signal Line Gradient */}
          <linearGradient id="ns-unified-dark" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>

          {/* Precision Glow Filter */}
          <filter id="ns-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── 1. Main Solid Geometric "N" Body ── */}
        <path
          d="M 6 6 H 15.5 L 28.5 24.5 V 6 H 34 V 34 H 24.5 L 11.5 15.5 V 34 H 6 V 6 Z"
          className="fill-slate-900 dark:fill-white transition-colors"
        />

        {/* ── 2. Continuous Embedded Parallel Accent Cut (Light Mode) ── */}
        <path
          d="M 9.5 31.5 V 9.5 L 30.5 30.5 V 8.5"
          stroke="url(#ns-unified-light)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ns-glow-filter)"
          className="dark:hidden"
        />

        {/* ── 3. Continuous Embedded Parallel Accent Cut (Dark Mode) ── */}
        <path
          d="M 9.5 31.5 V 9.5 L 30.5 30.5 V 8.5"
          stroke="url(#ns-unified-dark)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ns-glow-filter)"
          className="hidden dark:block"
        />
      </svg>
    </div>
  )
}

/**
 * Complete NeelStack Brand Logo Component
 */
export function NeelStackLogo({ className, showTagline = false, size = 'md', onClick }: LogoProps) {
  const textSize = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  }[size]

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn('inline-flex items-center gap-3 group select-none shrink-0', className)}
      aria-label="NeelStack Solutions — Home"
    >
      <LogoMark size={size} />

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <span className={cn('font-heading font-black tracking-[-0.03em] leading-none', textSize)}>
            <span className="text-slate-900 dark:text-white transition-colors">Neel</span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">Stack</span>
          </span>

          {/* Live Status Indicator Badge */}
          <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-[9px] font-bold text-cyan-600 dark:text-cyan-400 shadow-sm shrink-0">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
            </span>
            <span>✦ AI-Native</span>
          </span>
        </div>

        {showTagline && (
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-1">
            Enterprise AI &amp; Product Engineering
          </span>
        )}
      </div>
    </Link>
  )
}
