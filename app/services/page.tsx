import { Suspense } from 'react'
import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { ServiceCard } from '@/components/ui/service-card'
import { Container } from '@/components/ui/container'
import { CTASection } from '@/components/ui/cta-section'
import { CategoryFilter } from '@/components/ui/category-filter'
import { SERVICES, SERVICE_CATEGORIES } from '@/constants/services'

export const metadata: Metadata = {
  title: 'Software Engineering & AI Development Services',
  description:
    'NeelStack provides end-to-end technology services: AI agent development, custom web applications, enterprise software, API backends, cloud infrastructure, and technology consulting.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Software Engineering & AI Services — NeelStack',
    description:
      'End-to-end technology services: AI development, web applications, custom software, DevOps, database design, and technology consulting.',
  },
}

interface PageProps {
  searchParams: Promise<{ category?: string }>
}

function getGridClass(count: number): string {
  if (count === 1) return 'grid grid-cols-1 gap-5 md:max-w-2xl'
  if (count === 2) return 'grid grid-cols-1 gap-5 sm:grid-cols-2 md:max-w-4xl'
  return 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'
}

export default async function ServicesPage({ searchParams }: PageProps) {
  const { category } = await searchParams
  const activeCategory = category && SERVICE_CATEGORIES.includes(category as (typeof SERVICE_CATEGORIES)[number])
    ? category
    : 'All'

  const filtered =
    activeCategory === 'All'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory)

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
          {/* Category filter — client component for interactivity */}
          <Suspense fallback={<div className="mb-10 h-10" />}>
            <CategoryFilter
              categories={SERVICE_CATEGORIES}
              active={activeCategory}
            />
          </Suspense>

          {/* Screen-reader result count */}
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            {filtered.length} {filtered.length === 1 ? 'service' : 'services'} found
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          </p>

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
