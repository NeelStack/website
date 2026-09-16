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
 * ✦ The Pure Unbroken Solid "N" in Symmetrical Dual-Color 6-Hexagon — NeelStack Signature Brand Mark
 * 
 * - 6-sided Hexagon in 2 symmetrical 3-edge halves: Top Half (Royal Blue) + Bottom Half (Rich Violet)
 * - Symmetrical Wordmark: N (Royal Blue) · ee (Rich Violet Core) · l (Royal Blue) · Stack (Black/White)
 * - High-contrast palette tuned for both Dark (#070B14) and Light (#FAFBFF) modes
 * - Brand Colors: Dark #3B82F6 + #8B5CF6 · Light #2563EB + #7C3AED
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
    sm: { width: 36, height: 36 },
    md: { width: 44, height: 44 },
    lg: { width: 54, height: 54 },
  }[size]

  return (
    <div className={cn('relative inline-flex items-center justify-center shrink-0 group/logo select-none p-0.5', className)}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        aria-hidden="true"
        className="relative z-10 transition-transform duration-300 group-hover/logo:scale-[1.05] overflow-visible"
      >
        <defs>
          {/* Dual-Color Harmonic Gradient (Dark Theme): Electric Blue -> Rich Violet */}
          <linearGradient id="neelstack-dual-grad-dark" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          {/* Dual-Color Harmonic Gradient (Light Theme): Royal Sapphire -> Deep Violet */}
          <linearGradient id="neelstack-dual-grad-light" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>

        {variant === 'monochrome' ? (
          /* Monochrome Full Hexagon */
          <path
            d="M50,10 L84.64,30 V70 L50,90 L15.36,70 V30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="5.8"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="text-foreground"
          />
        ) : (
          /* 6-Sided Hexagon in 2 Symmetrical 3-Edge Halves */
          <g>
            {/* Top Half (3 symmetrical edges: Left Vertical + Roof Apex + Top-Right): Royal Blue */}
            <path
              d="M15.36,70 L15.36,30 L50,10 L84.64,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="5.8"
              strokeLinejoin="round"
              strokeLinecap="round"
              className="text-[#2563EB] dark:text-[#3B82F6] transition-colors duration-200"
            />

            {/* Bottom Half (3 symmetrical edges: Right Vertical + Base Apex + Bottom-Left): Rich Violet */}
            <path
              d="M84.64,30 L84.64,70 L50,90 L15.36,70"
              fill="none"
              stroke="currentColor"
              strokeWidth="5.8"
              strokeLinejoin="round"
              strokeLinecap="round"
              className="text-[#7C3AED] dark:text-[#8B5CF6] transition-colors duration-200"
            />
          </g>
        )}

        {/* Inner Geometric N — Mathematically Centered at (50,50) */}
        <g className="transition-opacity duration-300">
          {/* Light Theme N */}
          <path
            d="M38,67 V33 L62,67 V33"
            fill="none"
            stroke={variant === 'monochrome' ? 'currentColor' : 'url(#neelstack-dual-grad-light)'}
            strokeWidth="7"
            strokeLinecap="butt"
            strokeLinejoin="round"
            className={cn(
              variant === 'monochrome' ? 'text-foreground' : 'dark:hidden'
            )}
          />
          {/* Dark Theme N */}
          <path
            d="M38,67 V33 L62,67 V33"
            fill="none"
            stroke={variant === 'monochrome' ? 'currentColor' : 'url(#neelstack-dual-grad-dark)'}
            strokeWidth="7"
            strokeLinecap="butt"
            strokeLinejoin="round"
            className={cn(
              variant === 'monochrome' ? 'text-foreground' : 'hidden dark:inline'
            )}
          />
        </g>
      </svg>
    </div>
  )
}

/**
 * Stylish NeelStack Wordmark Component
 * Dual-Color Symmetrical System: N (Royal Blue) + ee (Rich Violet Core) + l (Royal Blue) + Stack (Black in Light / White in Dark)
 * Brand Colors: Dark #3B82F6 + #8B5CF6 · Light #2563EB + #7C3AED
 */
export function NeelStackLogo({ 
  className, 
  showTagline = false, 
  size = 'md', 
  onClick,
  variant = 'full'
}: LogoProps) {
  const textSize = {
    sm: 'text-xl sm:text-[22px]',
    md: 'text-2xl sm:text-[26px]',
    lg: 'text-3xl sm:text-[34px]',
  }[size]

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn('inline-flex items-center gap-2.5 sm:gap-3 group select-none shrink-0', className)}
      aria-label="NeelStack Solutions — Home"
    >
      <LogoMark size={size} variant={variant} />

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          {/* Stylish Symmetrical Brand Wordmark */}
          <span className={cn('font-sans font-bold tracking-[-0.03em] leading-none', textSize)}>
            {variant === 'monochrome' ? (
              <span className="text-foreground">NeelStack</span>
            ) : (
              <span className="inline-flex items-baseline font-black tracking-[-0.035em]">
                {/* N - Royal / Electric Blue */}
                <span className="text-[#2563EB] dark:text-[#3B82F6] transition-colors duration-200">N</span>
                {/* ee - Rich Violet Core */}
                <span className="text-[#7C3AED] dark:text-[#8B5CF6] transition-colors duration-200">ee</span>
                {/* l - Royal / Electric Blue */}
                <span className="text-[#2563EB] dark:text-[#3B82F6] transition-colors duration-200">l</span>
                {/* Stack - Pure Black in Light / Pure White in Dark */}
                <span className="text-slate-950 dark:text-white transition-colors duration-200 ml-[1px]">
                  Stack
                </span>
              </span>
            )}
          </span>

          {/* AI-Native Executive Badge */}
          <span className="hidden xl:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-[9px] font-bold text-violet-700 dark:text-violet-400 tracking-tight shrink-0">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500" />
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






