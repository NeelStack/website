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
 * Premium Theme-Adaptive "Neural Pulse" Logo Mark
 * Abstract N with geometric pillars and a vibrant cyan/violet diagonal spark.
 */
export function LogoMark({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const dimensions = {
    sm: { width: 28, height: 28 },
    md: { width: 36, height: 36 },
    lg: { width: 44, height: 44 },
  }[size]

  return (
    <div className={cn('relative inline-flex items-center justify-center shrink-0 group/logo select-none', className)}>
      {/* Outer ambient aura glow */}
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500/25 via-blue-600/25 to-violet-600/25 blur-md opacity-40 group-hover/logo:opacity-100 transition-opacity duration-500 pointer-events-none"
        aria-hidden="true"
      />

      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="relative z-10 transition-transform duration-500 group-hover/logo:scale-105 group-hover/logo:rotate-[2deg]"
      >
        {/* Hexa-Stack Architecture Pillars */}
        <rect x="7" y="6" width="7" height="28" rx="2.5" className="fill-slate-900 dark:fill-white transition-colors" />
        <rect x="26" y="6" width="7" height="28" rx="2.5" className="fill-slate-900 dark:fill-white transition-colors" />
        
        {/* Code-Stack Precision Prism Diagonal (< /> Software Architecture) */}
        <path
          d="M 7 12 L 14 6 L 21 16 L 33 28 L 26 34 L 17 22 Z"
          fill="url(#code-stack-light)"
          className="dark:hidden"
        />
        <path
          d="M 7 12 L 14 6 L 21 16 L 33 28 L 26 34 L 17 22 Z"
          fill="url(#code-stack-dark)"
          className="hidden dark:block"
        />
        
        {/* Code/AI Precision Focal Nodes */}
        <circle cx="10.5" cy="9.5" r="2" className="fill-white dark:fill-slate-950 transition-colors" />
        <circle cx="21" cy="16" r="1.5" className="fill-cyan-300 dark:fill-cyan-400" />
        <circle cx="29.5" cy="30.5" r="2" className="fill-white dark:fill-slate-950 transition-colors" />

        <defs>
          <linearGradient id="code-stack-light" x1="7" y1="6" x2="33" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="code-stack-dark" x1="7" y1="6" x2="33" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
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
      className={cn('inline-flex items-center gap-2 group select-none shrink-0', className)}
      aria-label="NeelStack Solutions — Home"
    >
      <LogoMark size={size} />

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <span className={cn('font-heading font-black tracking-[-0.03em] leading-none', textSize)}>
            <span className="text-slate-900 dark:text-white transition-colors">Neel</span>
            <span className="text-slate-900 dark:text-white transition-colors">Stack</span>
          </span>

          {/* Live Status Indicator Badge */}
          <span className="hidden xl:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[9px] font-bold text-cyan-600 dark:text-cyan-400 shadow-sm shrink-0">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
            </span>
            <span>AI-Native</span>
          </span>
        </div>

        {showTagline && (
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-1">
            Product Engineering
          </span>
        )}
      </div>
    </Link>
  )
}
