import Link from 'next/link'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import type { PricingPlan } from '@/types'

interface PricingCardProps {
  plan: PricingPlan
  className?: string
}

export function PricingCard({ plan, className }: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border bg-card p-8 transition-shadow duration-300',
        plan.isPopular
          ? 'border-primary shadow-lg shadow-primary/10'
          : 'border-border hover:border-border/80 hover:shadow-md',
        className
      )}
    >
      {/* Popular badge */}
      {plan.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="font-heading text-lg font-semibold text-foreground">{plan.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="mb-8">
        {plan.price ? (
          <div className="flex items-end gap-1">
            <span className="font-heading text-4xl font-extrabold text-foreground">
              {plan.price}
            </span>
            {plan.priceSuffix && (
              <span className="mb-1 text-sm text-muted-foreground">{plan.priceSuffix}</span>
            )}
          </div>
        ) : (
          <span className="font-heading text-2xl font-bold text-foreground">
            Custom Pricing
          </span>
        )}
      </div>

      {/* CTA */}
      <Button
        asChild
        variant={plan.isPopular ? 'default' : 'outline'}
        className="w-full mb-8"
      >
        <Link href={plan.ctaHref}>{plan.ctaLabel}</Link>
      </Button>

      {/* Features */}
      <ul className="flex-1 space-y-3" aria-label={`${plan.name} plan features`}>
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            {feature.included ? (
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                aria-label="Included"
              />
            ) : (
              <X
                className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40"
                aria-label="Not included"
              />
            )}
            <span
              className={cn(
                'text-sm leading-relaxed',
                feature.included ? 'text-foreground' : 'text-muted-foreground/60'
              )}
            >
              {feature.label}
              {feature.note && (
                <span className="ml-1 text-xs text-muted-foreground">({feature.note})</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
