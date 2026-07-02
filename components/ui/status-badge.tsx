import { cn } from '@/lib/utils'
import type { ProductStatus } from '@/types'

interface StatusBadgeProps {
  status: ProductStatus
  className?: string
}

const statusConfig = {
  live: {
    label: 'Live',
    className: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    dot: 'bg-emerald-400',
  },
  beta: {
    label: 'Beta',
    className: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    dot: 'bg-amber-400',
  },
  'coming-soon': {
    label: 'Coming Soon',
    className: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    dot: 'bg-blue-400',
  },
  'in-development': {
    label: 'In Development',
    className: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    dot: 'bg-cyan-400',
  },
} as const

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium',
        config.className,
        className
      )}
    >
      <span
        className={cn('h-1.5 w-1.5 rounded-full', config.dot, {
          'animate-pulse': status === 'live',
        })}
        aria-hidden="true"
      />
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
