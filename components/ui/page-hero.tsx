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
        'relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20',
        className
      )}
      aria-labelledby="page-hero-heading"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.62 0.22 258 / 6%) 0%, transparent 70%)',
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
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-5">
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
