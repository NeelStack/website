import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Zap, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Service } from '@/types'

interface ServiceDirectoryItemProps {
  service: Service
  index: number
  className?: string
}

export function ServiceDirectoryItem({
  service,
  index,
  className,
}: ServiceDirectoryItemProps) {
  const Icon = service.icon
  const indexStr = String(index + 1).padStart(2, '0')

  return (
    <article
      className={cn(
        'group border-b border-border/60 py-6 sm:py-8 last:border-b-0 transition-colors',
        className
      )}
      aria-labelledby={`service-heading-${service.id}`}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
        {/* Left column: Index, Category & Icon */}
        <div className="shrink-0 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-3 md:w-44">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-muted/40 text-foreground/80 group-hover:border-primary/40 group-hover:text-primary transition-colors"
              aria-hidden="true"
            >
              <Icon className="h-4 w-4" />
            </span>
            <span className="font-mono text-xs font-bold text-muted-foreground/90 tracking-wider">
              {indexStr}
            </span>
          </div>

          <div className="flex flex-wrap md:flex-col items-end md:items-start gap-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              {service.category}
            </span>
            {service.turnaround && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground/80 bg-muted/40 px-2 py-0.5 rounded border border-border/50">
                <Clock className="h-2.5 w-2.5" />
                {service.turnaround}
              </span>
            )}
          </div>
        </div>

        {/* Right column: Title, Executive Summary, Capabilities & Actions */}
        <div className="flex-1 min-w-0 space-y-3">
          <div>
            <h3
              id={`service-heading-${service.id}`}
              className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors"
            >
              <Link href={service.href} className="focus-visible:outline-hidden focus-visible:underline">
                {service.name}
              </Link>
            </h3>
            {service.tagline && (
              <p className="text-xs font-mono text-muted-foreground/90 mt-1">
                {service.tagline}
              </p>
            )}
          </div>

          {/* High-readability uncolored executive summary */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl text-pretty">
            {service.description}
          </p>

          {/* Structured Key Capabilities — clean editorial list */}
          {service.keyCapabilities && service.keyCapabilities.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {service.keyCapabilities.slice(0, 2).map((cap) => (
                <div key={cap.title} className="text-xs leading-snug">
                  <span className="text-muted-foreground/70 mr-1.5 font-mono">—</span>
                  <span className="font-semibold text-foreground">{cap.title}: </span>
                  <span className="text-muted-foreground">{cap.desc}</span>
                </div>
              ))}
            </div>
          )}

          {/* Monochrome Tech Stack Chips & SLA */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {service.slaMetric && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground/90 bg-muted/30 border border-border/60 px-2 py-0.5 rounded mr-1">
                <Zap className="h-2.5 w-2.5 text-muted-foreground" />
                {service.slaMetric}
              </span>
            )}
            {service.highlights.slice(0, 4).map((h) => (
              <span
                key={h}
                className="text-[11px] font-mono text-muted-foreground/80 bg-muted/25 border border-border/40 px-2 py-0.5 rounded"
              >
                {h}
              </span>
            ))}
          </div>

          {/* Understated Action Strip */}
          <div className="flex items-center gap-5 pt-2 text-xs font-semibold">
            <Link
              href={service.href}
              className="inline-flex items-center gap-1 text-foreground hover:text-primary transition-colors"
            >
              <span>Explore Blueprint</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href={`/request-quote?service=${service.id}`}
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Scope Sprint</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
