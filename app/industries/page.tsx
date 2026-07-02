import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { IndustryCard } from '@/components/ui/industry-card'
import { Container } from '@/components/ui/container'
import { CTASection } from '@/components/ui/cta-section'
import { INDUSTRIES } from '@/constants/industries'

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'NeelStack serves education, healthcare, government, pharma, retail, manufacturing, finance, logistics, real estate, hospitality, and startups.',
}

export default function IndustriesPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Industries we serve"
        title="Deep Domain Expertise Across Sectors"
        description="We bring specialized knowledge to every engagement. Our teams understand the regulatory environments, data sensitivities, and user expectations unique to each industry."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />

      <section className="py-16" aria-labelledby="industries-grid-heading">
        <Container>
          <h2 id="industries-grid-heading" className="sr-only">Industries</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} variant="detailed" />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Serve a different industry?"
        description="We work across many verticals not listed here. If you have a specialized need, our team will quickly learn your domain and deliver exceptional software."
        primaryLabel="Discuss Your Industry"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
    </MarketingLayout>
  )
}
