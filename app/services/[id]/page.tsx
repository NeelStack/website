import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES } from '@/constants/services'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'
import { CheckCircle2 } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const service = SERVICES.find((s) => s.id === resolvedParams.id)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: `${service.name}`,
    description: service.description,
  }
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ id: s.id }))
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const service = SERVICES.find((s) => s.id === resolvedParams.id)
  
  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <MarketingLayout>
      <PageHero
        badge={service.category}
        title={service.name}
        description={service.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name },
        ]}
      />

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Main content */}
              <div className="md:col-span-2 space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 mb-4">
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Our Technical Approach
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We engineer {service.name.toLowerCase()} systems to be modular, performant, and secure. We focus on clean architectures that allow your systems to grow alongside your operations without carrying technical debt.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  All solutions include full source code ownership, automated deployment pipelines, and comprehensive documentation runbooks.
                </p>
              </div>

              {/* Highlights panel */}
              <div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                    Core Capabilities
                  </h3>
                  <ul className="space-y-3" aria-label="Capabilities highlights">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Looking for expert ${service.name.toLowerCase()}?`}
        description="Let's discuss your system requirements and map out a technical implementation plan."
        primaryLabel="Start a Project"
        primaryHref="/contact"
      />
    </MarketingLayout>
  )
}
