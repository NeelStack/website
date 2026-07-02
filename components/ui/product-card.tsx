import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { StatusBadge } from '@/components/ui/status-badge'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  className?: string
  variant?: 'default' | 'compact' | 'detailed'
}

export function ProductCard({ product, className, variant = 'default' }: ProductCardProps) {
  const Icon = product.icon

  if (variant === 'compact') {
    return (
      <Link
        href={product.href}
        className={cn(
          'group flex items-start gap-4 rounded-xl border border-border bg-card p-5',
          'hover:border-primary/30 hover:bg-primary/5 transition-all duration-200',
          product.status === 'coming-soon' && 'opacity-75',
          className
        )}
        aria-label={`${product.name} — ${product.tagline}`}
      >
        <span
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
            product.bgColor
          )}
          aria-hidden="true"
        >
          <Icon className={cn('h-5 w-5', product.color)} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-heading text-sm font-semibold text-foreground">{product.name}</h3>
            <StatusBadge status={product.status} />
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>
    )
  }

  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-2xl border border-border bg-card p-6 w-full max-w-md',
        'hover:border-primary/30 transition-all duration-300',
        product.status === 'coming-soon' && 'opacity-80',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-xl',
            product.bgColor
          )}
          aria-hidden="true"
        >
          <Icon className={cn('h-6 w-6', product.color)} />
        </span>
        <StatusBadge status={product.status} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-heading text-lg font-bold text-foreground mb-2">{product.name}</h3>
        <p className="text-sm font-medium text-accent mb-3">{product.tagline}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-6" aria-label={`${product.name} features`}>
          {product.features.map((feature) => (
            <li key={feature.label} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span
                className={cn('h-1 w-1 rounded-full shrink-0', product.color.replace('text-', 'bg-'))}
                aria-hidden="true"
              />
              {feature.label}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      {product.status === 'live' ? (
        <Link
          href={product.href}
          className={cn(
            'inline-flex items-center gap-1.5 text-sm font-medium',
            product.color,
            'hover:gap-2.5 transition-all duration-200'
          )}
          aria-label={`Learn more about ${product.name}`}
        >
          Explore product
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : (
        <Link
          href={product.href}
          className={cn(
            'inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground',
            'hover:text-primary transition-all duration-200'
          )}
          aria-label={`View roadmap for ${product.name}`}
        >
          In Development
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
