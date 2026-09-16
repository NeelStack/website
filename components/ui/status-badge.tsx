import { cn } from '@/lib/utils'
import type { ProductStatus } from '@/types'

interface StatusBadgeProps {
  status: ProductStatus
  className?: string
}

const statusConfig = {
  live: {
    label: 'Live',
    className: 'border-emerald-500/40 bg-emerald-500/12 text-emerald-600 dark:text-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.15)]',
    dot: 'bg-emerald-500',
    pingDot: true,
  },
  beta: {
    label: 'In Development',
    className: 'border-violet-500/40 bg-violet-500/12 text-violet-600 dark:text-violet-300 shadow-[0_0_10px_rgba(139,92,246,0.15)]',
    dot: 'bg-violet-500',
    pingDot: false,
  },
  'coming-soon': {
    label: 'Planned',
    className: 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400',
    dot: 'bg-blue-500',
    pingDot: false,
  },
  'in-development': {
    label: 'In Development / Upcoming',
    className: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
    dot: 'bg-cyan-500',
    pingDot: false,
  },
  planned: {
    label: 'Planned',
    className: 'border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400',
    dot: 'bg-purple-500',
    pingDot: false,
  },
} as const

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-all duration-200',
        config.className,
        className
      )}
    >
      {/* Animated ping dot for live/beta */}
      <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
        {config.pingDot && (
          <span
            className={cn(
              'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
              config.dot
            )}
          />
        )}
        <span className={cn('relative inline-flex h-1.5 w-1.5 rounded-full', config.dot)} />
      </span>
      {config.label}
    </span>
  )
}

interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'accent' | 'outline'
  className?: string
}

export function Tag({ children, variant = 'default', className }: TagProps) {
  const variantClass = {
    default: 'border-border bg-muted text-muted-foreground',
    primary: 'border-primary/30 bg-primary/10 text-primary',
    accent: 'border-accent/30 bg-accent/10 text-accent',
    outline: 'border-border bg-transparent text-foreground',
  }[variant]

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium',
        variantClass,
        className
      )}
    >
      {children}
    </span>
  )
}
