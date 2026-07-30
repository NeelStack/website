import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  className?: string
  variant?: 'default' | 'compact' | 'horizontal' | 'detailed'
}

export function ServiceCard({ service, className, variant = 'default' }: ServiceCardProps) {
  const Icon = service.icon

  if (variant === 'compact') {
    return (
      <Link
        href={service.href}
        className={cn(
          'group flex items-start gap-4 rounded-2xl border border-border/80 bg-card p-5 shadow-sm',
          'hover:border-primary/50 hover:bg-primary/5 hover:shadow-md transition-all duration-300',
          className
        )}
        aria-label={`${service.name} service`}
      >
        <span
          className={cn(
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 shadow-inner',
            service.bgColor
          )}
          aria-hidden="true"
        >
          <Icon className={cn('h-5.5 w-5.5', service.color)} />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{service.name}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {service.description}
          </p>
        </div>
      </Link>
    )
  }

  if (variant === 'horizontal') {
    return (
      <div
        className={cn(
          'group flex gap-5 rounded-2xl border border-border/80 bg-card p-6 shadow-md',
          'hover:border-primary/50 hover:shadow-lg transition-all duration-300',
          className
        )}
      >
        <span
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/60',
            service.bgColor
          )}
          aria-hidden="true"
        >
          <Icon className={cn('h-6 w-6', service.color)} />
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
            {service.category}
          </p>
          <h3 className="font-heading text-base font-bold text-foreground mb-2">{service.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
          <div className="flex flex-wrap gap-2">
            {service.highlights.map((h) => (
              <span
                key={h}
                className="rounded-md border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-foreground"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
        <Link
          href={service.href}
          className="shrink-0 self-start text-muted-foreground hover:text-primary transition-colors"
          aria-label={`Learn more about ${service.name}`}
        >
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'group flex flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-md',
        'card-hover hover:border-primary/50 hover:shadow-xl relative overflow-hidden',
        className
      )}
    >
      {/* Radiant ambient glow overlay on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/15 transition-all duration-500" />

      <span
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-xl mb-4 border border-border/60 group-hover:scale-105 transition-all duration-300',
          service.bgColor
        )}
        aria-hidden="true"
      >
        <Icon className={cn('h-6 w-6', service.color)} />
      </span>

      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
        {service.category}
      </p>
      <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {service.highlights.map((h) => (
          <span
            key={h}
            className="rounded-md border border-border/80 bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-foreground hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
          >
            {h}
          </span>
        ))}
      </div>

      <Link
        href={service.href}
        className={cn(
          'inline-flex items-center gap-1.5 text-sm font-bold',
          service.color,
          'hover:gap-2.5 transition-all duration-200'
        )}
        aria-label={`Learn more about ${service.name}`}
      >
        Learn more
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  )
}
