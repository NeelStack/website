import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import type { BreadcrumbItem } from '@/types'

interface PageHeroProps {
  badge?: string
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  children?: React.ReactNode
  centered?: boolean
  className?: string
}

export function PageHero({
  badge,
  title,
  description,
  breadcrumbs,
  children,
  centered = true,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12',
        className
      )}
      aria-labelledby="page-hero-heading"
    >
      {/* Semi-transparent tint — global AnimatedBackground shows through */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% 0%, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.08) 45%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className={cn('mb-6', centered && 'flex justify-center')}>
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}

        <div className={cn(centered && 'text-center')}>
          {/* Badge */}
          {badge && (
            <span className="relative inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-5 shadow-[0_0_12px_oklch(0.62_0.22_258/15%)] dark:shadow-[0_0_16px_oklch(0.62_0.22_258/20%)]">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {badge}
            </span>
          )}

          {/* Title */}
          <h1
            id="page-hero-heading"
            className={cn(
              'font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance',
              centered && 'mx-auto max-w-3xl'
            )}
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p
              className={cn(
                'mt-4 text-base text-muted-foreground leading-relaxed md:text-lg text-pretty',
                centered && 'mx-auto max-w-2xl'
              )}
            >
              {description}
            </p>
          )}

          {/* Optional children (CTAs, etc.) */}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  )
}
