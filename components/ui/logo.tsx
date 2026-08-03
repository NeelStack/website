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
    <div className={cn('relative inline-flex items-center justify-center shrink-0 group/logo select-none p-1', className)}>
      <svg

        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="relative z-10 transition-transform duration-300 group-hover/logo:scale-[1.03] overflow-visible"
      >
        <defs>
          {/* Executive Blue-to-Violet Gradient */}
          <linearGradient id="neelstack-bv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        {/* ── 100% Solid Continuous Geometric "N" Body ── */}
        <path
          d="M 6 6 H 14.5 L 27 25 V 6 H 34.5 V 34 H 26 L 13.5 15 V 34 H 6 V 6 Z"
          fill={variant === 'monochrome' ? 'currentColor' : 'url(#neelstack-bv-grad)'}
          className={cn(
            variant === 'full' && 'drop-shadow-[0_2px_4px_rgba(59,130,246,0.25)]',
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
      className={cn('inline-flex items-center gap-3.5 group select-none shrink-0', className)}
      aria-label="NeelStack Solutions — Home"
    >
      <LogoMark size={size} variant={variant} />

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2.5">
          {/* Stylish Blue-to-Violet Wordmark */}
          <span className={cn('font-heading font-black tracking-[-0.05em] leading-none', textSize)}>
            {variant === 'monochrome' ? (
              <span className="text-foreground font-black">NeelStack</span>
            ) : (
              <>
                <span className="text-slate-900 dark:text-white transition-colors font-black">Neel</span>
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent font-black">
                  Stack
                </span>
              </>
            )}
          </span>

          {/* AI-Native Executive Badge */}
          <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-[9px] font-semibold text-violet-600 dark:text-violet-400 tracking-tight shrink-0">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500" />
            </span>
            <span>AI-Native</span>
          </span>
        </div>

        {showTagline && (
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-1">
            Enterprise AI &amp; Software Infrastructure
          </span>
        )}
      </div>
    </Link>
  )
}




