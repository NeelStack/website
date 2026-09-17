import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SERVICES } from '@/constants/services'
import { getSiteUrl } from '@/lib/site-url'
import { INDUSTRIES } from '@/constants/industries'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'
import { TrustBarSection } from '@/components/sections/trust-bar-section'
import { JsonLd } from '@/components/seo/json-ld'
import { CheckCircle2, Shield, ArrowRight, Lock, Server, Sparkles, Layers } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string; industryId: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id, industryId } = await params
  const service = SERVICES.find((s) => s.id === id)
  const industry = INDUSTRIES.find((i) => i.id === industryId)

  if (!service || !industry) {
    return {
      title: 'Solution Not Found | NeelStack',
      robots: { index: false },
      alternates: { canonical: null },
    }
  }

  return {
    title: `${service.name} for ${industry.name} — Enterprise Solutions | NeelStack India`,
    description: `Tailored ${service.name.toLowerCase()} software solutions engineered for ${industry.name}. Modular, secure, and scalable architectures designed for sector workflows.`,
    alternates: {
      canonical: `/services/${id}/for/${industryId}`,
    },
    openGraph: {
      title: `${service.name} for ${industry.name} | NeelStack`,
      description: `Custom ${service.name.toLowerCase()} solutions designed specifically for ${industry.name}.`,
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
  const siteUrl = getSiteUrl()

  return (
    <MarketingLayout>
      {/* ── Programmatic SEO JSON-LD ── */}
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
            url: siteUrl,
          },
          description: `Custom ${service.name.toLowerCase()} solutions designed specifically for ${industry.name}.`,
          url: `${siteUrl}/services/${service.id}/for/${industry.id}`,
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: siteUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Services',
              item: `${siteUrl}/services`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: service.name,
              item: `${siteUrl}/services/${service.id}`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: `For ${industry.name}`,
              item: `${siteUrl}/services/${service.id}/for/${industry.id}`,
            },
          ],
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

      <TrustBarSection />

      {/* ── Section 1: Domain Adaptation ── */}
      <Section>
        <Container>
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
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
                  We adapt our core {service.name.toLowerCase()} framework to address the exact operational workflows, regulatory security controls, and data protection requirements of {industry.name.toLowerCase()}.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Whether complying with data privacy mandates, handling high-concurrency peak traffic, or integrating legacy backend systems, our team ensures production-grade execution with zero vendor lock-in.
                </p>
              </div>

              {/* Industry solutions list */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">
                  Targeted Solutions for {industry.name}
                </h3>
                <ul className="space-y-2.5">
                  {industry.solutions.map((sol) => (
                    <li key={sol} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="pt-6 border-t border-border/40 space-y-4">
              <h2 className="font-heading text-xl font-bold text-foreground">Core Capabilities Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.highlights.map((item) => (
                  <div key={item} className="p-4 rounded-xl border border-border bg-card flex items-center gap-3">
                    <Shield className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-xs text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Guarantees for this vertical */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
              <div className="rounded-xl border border-border bg-card p-4 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <Lock className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-bold text-foreground">Sector Compliance</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Configured to adhere to {industry.name.split(' ')[0]} privacy standards and audit logging requirements.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Server className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-bold text-foreground">High Availability</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  99.9% uptime SLA with automated container failover and database clustering.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-bold text-foreground">Full IP Ownership</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  100% source code handover with complete architecture documentation and runbooks.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Ready to build a ${service.name.toLowerCase()} solution for your ${industry.name.toLowerCase()} organization?`}
        description="Schedule a technical discovery call to explore architecture blueprints, timeline estimates, and customized deliverables."
        primaryLabel="Schedule Consultation"
        primaryHref="/contact"
      />
    </MarketingLayout>
  )
}
