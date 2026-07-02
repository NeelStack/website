'use client'

import { useState } from 'react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { ServiceCard } from '@/components/ui/service-card'
import { Container } from '@/components/ui/container'
import { CTASection } from '@/components/ui/cta-section'
import { cn } from '@/lib/utils'
import { SERVICES, SERVICE_CATEGORIES } from '@/constants/services'

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filtered =
    activeCategory === 'All'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory)

  const getGridClass = (count: number) => {
    if (count === 1) return 'grid grid-cols-1 gap-5 md:max-w-2xl'
    if (count === 2) return 'grid grid-cols-1 gap-5 sm:grid-cols-2 md:max-w-4xl'
    return 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'
  }

  return (
    <MarketingLayout>
      <PageHero
        badge="Our services"
        title="End-to-End Technology Services"
        description="From strategy and design to development, deployment, and support — we cover every phase of your software journey."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="py-16" aria-labelledby="services-list-heading">
        <Container>
          {/* Category filter tabs */}
          <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter services by category">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-muted'
                )}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services grid */}
          <h2 id="services-list-heading" className="sr-only">
            Services list
          </h2>
          <div className={getGridClass(filtered.length)}>
            {filtered.map((service) => (
              <ServiceCard key={service.id} service={service} variant="detailed" />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's talk about your project"
        description="Tell us what you need to build and we will put together a custom proposal with timeline, architecture recommendations, and pricing."
      />
    </MarketingLayout>
  )
}
