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

  const isDeployed = product.status === 'live'
  const isBeta = product.status === 'beta'

  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-2xl border bg-card p-6 w-full max-w-md overflow-hidden',
        'transition-all duration-300 ease-out',
        isDeployed
          ? 'border-emerald-500/30 hover:border-emerald-400/60 hover:shadow-[0_0_32px_rgba(52,211,153,0.12),0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1'
          : isBeta
            ? 'border-amber-500/25 hover:border-amber-400/50 hover:shadow-[0_0_32px_rgba(251,191,36,0.10),0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1'
            : 'border-border hover:border-primary/30 hover:shadow-[0_8px_32px_oklch(0.62_0.22_258/8%),0_2px_8px_oklch(0_0_0/30%)] hover:-translate-y-1',
        product.status === 'coming-soon' && 'opacity-80',
        className
      )}
    >
      {/* Deployed ambient glow overlay */}
      {isDeployed && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(52,211,153,0.06) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
      )}
      {/* Beta ambient glow overlay */}
      {isBeta && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(251,191,36,0.06) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <span
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110',
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
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/8 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
              <Rocket className="h-2.5 w-2.5" aria-hidden="true" />
              Deployed
            </span>
          )}
          {/* Beta date badge */}
          {isBeta && meta?.betaDate && (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/8 px-2 py-0.5 text-[10px] font-semibold text-amber-400">
              <Zap className="h-2.5 w-2.5" aria-hidden="true" />
              July 15 Beta
            </span>
          )}
          {/* School project label */}
          {meta?.isSchoolProject && (
            <span className="inline-flex items-center rounded-full border border-purple-500/25 bg-purple-500/8 px-2 py-0.5 text-[10px] font-medium text-purple-400">
              School Project
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-heading text-lg font-bold text-foreground mb-2">{product.name}</h3>
        <p className={cn('text-sm font-medium mb-3', isDeployed ? 'text-emerald-400' : isBeta ? 'text-amber-400' : 'text-accent')}>
          {product.tagline}
        </p>
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
      <div className="relative z-10">
        {isDeployed ? (
          <Link
            href={product.href}
            className={cn(
              'inline-flex items-center gap-1.5 text-sm font-semibold',
              'text-emerald-400 hover:text-emerald-300',
              'hover:gap-2.5 transition-all duration-200'
            )}
            aria-label={`Learn more about ${product.name}`}
          >
            Explore product
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        ) : isBeta ? (
          <Link
            href={product.href}
            className={cn(
              'inline-flex items-center gap-1.5 text-sm font-semibold',
              'text-amber-400 hover:text-amber-300',
              'hover:gap-2.5 transition-all duration-200'
            )}
            aria-label={`View beta for ${product.name}`}
          >
            Preview Beta
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
    </div>
  )
}
