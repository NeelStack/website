import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SERVICES } from '@/constants/services'
import { INDUSTRIES } from '@/constants/industries'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'
import { JsonLd } from '@/components/seo/json-ld'
import { CheckCircle2, Shield } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string; industryId: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id, industryId } = await params
  const service = SERVICES.find((s) => s.id === id)
  const industry = INDUSTRIES.find((i) => i.id === industryId)

  if (!service || !industry) return { title: 'Solution Not Found' }

  return {
    title: `${service.name} for ${industry.name} — NeelStack`,
    description: `Tailored ${service.name.toLowerCase()} software solutions engineered for ${industry.name}. Modular, secure, and scalable architectures designed for sector workflows.`,
    alternates: {
      canonical: `/services/${id}/for/${industryId}`,
    },
  }
}

export async function generateStaticParams() {
  const params: Array<{ id: string; industryId: string }> = []
  for (const service of SERVICES) {
    for (const industry of INDUSTRIES) {
      params.push({ id: service.id, industryId: industry.id })
    }
  }
  return params
}

export default async function ServiceForIndustryPage({ params }: PageProps) {
  const { id, industryId } = await params
  const service = SERVICES.find((s) => s.id === id)
  const industry = INDUSTRIES.find((i) => i.id === industryId)

  if (!service || !industry) {
    notFound()
  }

  const ServiceIcon = service.icon
  const IndustryIcon = industry.icon

  return (
    <MarketingLayout>
      {/* Programmatic SEO JSON-LD */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `${service.name} for ${industry.name}`,
          serviceType: service.category,
          areaServed: industry.name,
          provider: {
            '@type': 'Organization',
            name: 'NeelStack',
            url: 'https://neelstack.com',
          },
          description: `Custom ${service.name.toLowerCase()} solutions designed specifically for ${industry.name}.`,
        }}
      />

      <PageHero
        badge={`${service.category} × ${industry.name}`}
        title={`${service.name} Solutions Tailored for ${industry.name}`}
        description={`Combine NeelStack's ${service.name.toLowerCase()} expertise with domain-specific architecture for ${industry.name.toLowerCase()} organizations.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name, href: `/services/${service.id}` },
          { label: `For ${industry.name}` },
        ]}
      />

      {/* Main Content Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <ServiceIcon className="h-6 w-6" />
                  </div>
                  <span className="text-xl font-bold text-muted-foreground">+</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <IndustryIcon className="h-6 w-6" />
                  </div>
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Sector-Specific Architecture
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We adapt our core {service.name.toLowerCase()} framework to address the exact operational workflows, regulatory security controls, and integration requirements of {industry.name.toLowerCase()}.
                </p>
              </div>

              {/* Industry solutions list */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">
                  Targeted Solutions for {industry.name}
                </h3>
                <ul className="space-y-2.5">
                  {industry.solutions.map((sol) => (
                    <li key={sol} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="pt-8 border-t border-border/40 space-y-6">
              <h2 className="font-heading text-xl font-bold text-foreground">Capabilities Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.highlights.map((item) => (
                  <div key={item} className="p-4 rounded-xl border border-border bg-card flex items-center gap-3">
                    <Shield className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-xs text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Ready to build a ${service.name.toLowerCase()} solution for your ${industry.name.toLowerCase()} organization?`}
        description="Schedule a technical discovery call with our engineering team."
        primaryLabel="Schedule Consultation"
        primaryHref="/contact"
      />
    </MarketingLayout>
  )
}
