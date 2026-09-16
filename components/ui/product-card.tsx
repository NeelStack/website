import Link from 'next/link'
import { ArrowRight, Rocket, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { StatusBadge } from '@/components/ui/status-badge'
import { PRODUCT_META } from '@/constants/products'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  className?: string
  variant?: 'default' | 'compact' | 'detailed'
}

export function ProductCard({ product, className, variant = 'default' }: ProductCardProps) {
  const Icon = product.icon
  const meta = PRODUCT_META[product.id]

  if (variant === 'compact') {
    return (
      <Link
        href={product.href}
        className={cn(
          'group flex items-start gap-4 rounded-2xl border-2 border-border/80 bg-card p-5 shadow-sm tactile-card-3d',
          'hover:border-primary/60 hover:bg-primary/5 transition-all duration-200',
          product.status === 'coming-soon' && 'opacity-75',
          className
        )}
        aria-label={`${product.name} — ${product.tagline}`}
      >
        <span
          className={cn(
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-border/70 shadow-sm group-hover:scale-105 transition-transform',
            product.bgColor
          )}
          aria-hidden="true"
        >
          <Icon className={cn('h-5.5 w-5.5', product.color)} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
            <StatusBadge status={product.status} />
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>
    )
  }

  const isDeployed = product.status === 'live'
  const isBeta = product.status === 'beta'

  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between rounded-3xl border-2 bg-card p-6 sm:p-7 w-full max-w-md overflow-hidden tactile-card-3d shadow-md',
        'transition-all duration-200 ease-out',
        isDeployed
          ? 'border-emerald-500/40 hover:border-emerald-400'
          : isBeta
            ? 'border-violet-500/40 hover:border-violet-400'
            : 'border-border/80 hover:border-primary/50',
        product.status === 'coming-soon' && 'opacity-85',
        className
      )}
    >
      <div>
        {/* Header */}
        <div className="relative z-10 flex items-start justify-between mb-4">
          <span
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-border/70 shadow-sm transition-transform duration-200 group-hover:scale-110',
              product.bgColor
            )}
            aria-hidden="true"
          >
            <Icon className={cn('h-6 w-6', product.color)} />
          </span>
          <div className="flex flex-col items-end gap-1.5">
            <StatusBadge status={product.status} />
            {/* Deployed badge */}
            {isDeployed && meta?.deployedLabel && (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-400">
                <Rocket className="h-2.5 w-2.5" aria-hidden="true" />
                {meta.deployedLabel}
              </span>
            )}
            {/* Target launch badge */}
            {meta?.targetLaunch && (
              <span className="inline-flex items-center gap-1 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-mono font-bold text-violet-400">
                <Zap className="h-2.5 w-2.5" aria-hidden="true" />
                {meta.targetLaunch}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1">
          <p className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-heading text-lg font-extrabold text-foreground mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
          <p className={cn('text-xs font-bold mb-3 font-heading', isDeployed ? 'text-emerald-500 dark:text-emerald-400' : isBeta ? 'text-violet-500 dark:text-violet-400' : 'text-primary')}>
            {product.tagline}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
            {product.description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6" aria-label={`${product.name} features`}>
            {product.features.map((feature) => (
              <li key={feature.label} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                <span
                  className={cn('h-1.5 w-1.5 rounded-full shrink-0', product.color.replace('text-', 'bg-'))}
                  aria-hidden="true"
                />
                {feature.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 pt-4 border-t border-border/50">
        {isDeployed ? (
          <Link
            href={product.href}
            className={cn(
              'inline-flex items-center gap-1.5 text-xs font-extrabold font-heading',
              'text-emerald-500 dark:text-emerald-400 hover:text-emerald-300',
              'hover:gap-2.5 transition-all duration-200'
            )}
            aria-label={`Learn more about ${product.name}`}
          >
            Explore Product Ecosystem
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        ) : isBeta ? (
          <Link
            href={product.href}
            className={cn(
              'inline-flex items-center gap-1.5 text-xs font-extrabold font-heading',
              'text-violet-500 dark:text-violet-400 hover:text-violet-300',
              'hover:gap-2.5 transition-all duration-200'
            )}
            aria-label={`View beta for ${product.name}`}
          >
            Preview Beta Architecture
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        ) : (
          <Link
            href={product.href}
            className={cn(
              'inline-flex items-center gap-1.5 text-xs font-bold font-heading text-muted-foreground',
              'hover:text-primary transition-all duration-200'
            )}
            aria-label={`View roadmap for ${product.name}`}
          >
            In Active Engineering
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  )
}

