import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
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
          'group flex items-center gap-3 rounded-xl border border-border bg-black/10 backdrop-blur-md px-4 py-3',
          'hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200 shadow-sm',
          className
        )}
        aria-label={`${industry.name} industry solutions`}
      >
        <span
          className={cn(
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-105',
            industry.bgColor
          )}
          aria-hidden="true"
        >
          <Icon className={cn('h-4 w-4', industry.color)} />
        </span>
        <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{industry.name}</span>
        <ArrowRight
          className="ml-auto h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
          aria-hidden="true"
        />
      </Link>
    )
  }

  return (
    <div
      className={cn(
        'group flex flex-col rounded-2xl border border-border bg-black/10 backdrop-blur-md p-6 relative overflow-hidden',
        'hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg',
        className
      )}
    >
      {/* Light subtle glow backdrop on top right */}
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-all ${industry.color.includes('rose') ? 'bg-rose-500' : industry.color.includes('blue') ? 'bg-blue-500' : industry.color.includes('emerald') ? 'bg-emerald-500' : industry.color.includes('amber') ? 'bg-amber-500' : 'bg-violet-500'}`} />

      <span
        className={cn('flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-transform group-hover:scale-105 border border-border/40', industry.bgColor)}
        aria-hidden="true"
      >
        <Icon className={cn('h-5 w-5', industry.color)} />
      </span>

      <h3 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{industry.name}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-5">
        {industry.description}
      </p>

      <ul className="space-y-2 mb-6 border-t border-border/50 pt-4" aria-label={`Solutions for ${industry.name}`}>
        {industry.solutions.slice(0, 4).map((solution) => (
          <li key={solution} className="flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className={cn('h-3.5 w-3.5 shrink-0 opacity-70', industry.color)} aria-hidden="true" />
            <span>{solution}</span>
          </li>
        ))}
      </ul>

      <Link
        href={industry.href}
        className={cn(
          'inline-flex items-center gap-1.5 text-xs font-bold pt-2 border-t border-border/50',
          industry.color,
          'hover:gap-2.5 transition-all duration-200'
        )}
        aria-label={`View ${industry.name} solutions`}
      >
        View solutions
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </div>
  )
}
