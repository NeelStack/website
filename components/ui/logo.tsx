'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  variant?: 'full' | 'monochrome' | 'dark' | 'light'
}

/**
 * ✦ The Pure Unbroken Solid "N" — NeelStack Signature Brand Mark
 * 
 * - 100% Solid, continuous, unbroken, architectural geometric "N"
 * - Palette: Electric Blue (#3B82F6) -> Vivid Violet (#8B5CF6) Gradient
 * - Zero Clipping: Centered y=6..34 with 6px top/bottom safety padding
 */
export function LogoMark({ 
  size = 'md', 
  className,
  variant = 'full'
}: { 
  size?: 'sm' | 'md' | 'lg'
  className?: string
  variant?: 'full' | 'monochrome' | 'dark' | 'light'
}) {
  const dimensions = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 48, height: 48 },
  }[size]

  return (
    <div className={cn('relative inline-flex items-center justify-center shrink-0 group/logo select-none p-0.5', className)}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="relative z-10 transition-transform duration-300 group-hover/logo:scale-[1.03] overflow-visible"
      >
        <defs>
          <linearGradient id="neelstack-brand-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B72FE" />
            <stop offset="100%" stopColor="#2EC7F2" />
          </linearGradient>
        </defs>

        {/* Outer Hexagon Outline */}
        <path
          d="M50,10 L84.64,30 V70 L50,90 L15.36,70 V30 Z"
          fill="none"
          stroke={variant === 'monochrome' ? 'currentColor' : 'url(#neelstack-brand-grad)'}
          strokeWidth="5.8"
          strokeLinejoin="round"
          strokeLinecap="round"
          className={cn(
            variant === 'full' && 'drop-shadow-[0_2px_8px_rgba(59,114,254,0.12)]',
            variant === 'monochrome' && 'text-foreground'
          )}
        />

        {/* Inner Geometric N with Flat linecaps, Fluid Corner & Subliminal Slanted Cap */}
        <path
          d="M39,68 V32 L65.5,62 V31 L67,28.4"
          fill="none"
          stroke={variant === 'monochrome' ? 'currentColor' : 'url(#neelstack-brand-grad)'}
          strokeWidth="8"
          strokeLinecap="butt"
          strokeLinejoin="round"
          className={cn(
            variant === 'monochrome' && 'text-foreground'
          )}
        />
      </svg>
    </div>
  )
}

/**
 * Stylish NeelStack Wordmark Component
 */
export function NeelStackLogo({ 
  className, 
  showTagline = false, 
  size = 'md', 
  onClick,
  variant = 'full'
}: LogoProps) {
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
      <LogoMark size={size} variant={variant} />

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          {/* Stylish Brand Wordmark */}
          <span className={cn('font-sans font-semibold tracking-[-0.03em] leading-none', textSize)}>
            {variant === 'monochrome' ? (
              <span className="text-foreground">NeelStack</span>
            ) : (
              <>
                <span className="text-slate-900 dark:text-white transition-colors">Neel</span>
                <span className="bg-gradient-to-r from-[#3B72FE] to-[#2EC7F2] bg-clip-text text-transparent">
                  Stack
                </span>
              </>
            )}
          </span>

          {/* AI-Native Executive Badge */}
          <span className="hidden xl:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-semibold text-blue-600 dark:text-blue-400 tracking-tight shrink-0">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
            </span>
            <span>AI-Native</span>
          </span>
        </div>

        {showTagline && (
          <span className="text-[8px] font-bold text-slate-500 dark:text-slate-400 tracking-[0.25em] uppercase mt-1">
            AI-Native Product Engineering
          </span>
        )}
      </div>
    </Link>
  )
}





