import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Industry } from '@/types'

interface IndustryCardProps {
  industry: Industry
  className?: string
  variant?: 'default' | 'compact' | 'detailed'
}

export function IndustryCard({ industry, className, variant = 'default' }: IndustryCardProps) {
  const Icon = industry.icon

  if (variant === 'compact') {
    return (
      <Link
        href={industry.href}
        className={cn(
          'group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3',
          'hover:border-primary/30 hover:bg-primary/5 transition-all duration-200',
          className
        )}
        aria-label={`${industry.name} industry solutions`}
      >
        <span
          className={cn(
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
            industry.bgColor
          )}
          aria-hidden="true"
        >
          <Icon className={cn('h-4 w-4', industry.color)} />
        </span>
        <span className="text-sm font-medium text-foreground">{industry.name}</span>
        <ArrowRight
          className="ml-auto h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
      </Link>
    )
  }

  return (
    <div
      className={cn(
        'group flex flex-col rounded-2xl border border-border bg-card p-6',
        'hover:border-primary/30 transition-all duration-300',
        className
      )}
    >
      <span
        className={cn('flex h-12 w-12 items-center justify-center rounded-xl mb-4', industry.bgColor)}
        aria-hidden="true"
      >
        <Icon className={cn('h-6 w-6', industry.color)} />
      </span>

      <h3 className="font-heading text-lg font-bold text-foreground mb-2">{industry.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
        {industry.description}
      </p>

      <ul className="space-y-1.5 mb-6" aria-label={`Solutions for ${industry.name}`}>
        {industry.solutions.slice(0, 4).map((solution) => (
          <li key={solution} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span
              className={cn('h-1 w-1 rounded-full shrink-0', industry.color.replace('text-', 'bg-'))}
              aria-hidden="true"
            />
            {solution}
          </li>
        ))}
      </ul>

      <Link
        href={industry.href}
        className={cn(
          'inline-flex items-center gap-1.5 text-sm font-medium',
          industry.color,
          'hover:gap-2.5 transition-all duration-200'
        )}
        aria-label={`View ${industry.name} solutions`}
      >
        View solutions
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  )
}
