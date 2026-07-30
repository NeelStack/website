import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES } from '@/constants/services'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'
import { JsonLd } from '@/components/seo/json-ld'
import { CheckCircle2, Shield, Code2, Cpu } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const service = SERVICES.find((s) => s.id === resolvedParams.id)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: `${service.name} — Professional ${service.category} Services`,
    description: `NeelStack delivers expert ${service.name.toLowerCase()} services. ${service.description}`,
    alternates: { canonical: `/services/${resolvedParams.id}` },
  }
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ id: s.id }))
}

const SERVICE_FAQS = [
  {
    question: 'Who owns the source code and intellectual property?',
    answer: 'You retain 100% full ownership of all source code, design assets, and intellectual property developed during the project upon final delivery.',
  },
  {
    question: 'How do you handle project communication and updates?',
    answer: 'We operate in agile sprints with direct Slack/Teams access, weekly demo calls, and transparent GitHub/GitLab repository progress tracking.',
  },
  {
    question: 'What happens after the initial product launch?',
    answer: 'All projects include a post-launch warranty period alongside optional long-term SLA maintenance, infrastructure monitoring, and feature iteration agreements.',
  },
]

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const service = SERVICES.find((s) => s.id === resolvedParams.id)
  
  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <MarketingLayout>
      {/* Service Structured Data */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.name,
          serviceType: service.category,
          provider: {
            '@type': 'Organization',
            name: 'NeelStack',
            url: 'https://neelstack.com',
          },
          description: service.description,
        }}
      />

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
          <div className="max-w-4xl mx-auto space-y-16">
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
                  All solutions include full source code ownership, automated deployment pipelines, continuous automated tests, and comprehensive runbook documentation.
                </p>

                {/* Technical Guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Security First</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Encrypted data layers & RBAC integration.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3">
                    <Code2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Clean Code</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">TypeScript strict typing & automated tests.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights panel */}
              <div>
                <div className="rounded-2xl border border-border bg-card p-6 sticky top-24">
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

            {/* FAQ Section */}
            <div className="pt-8 border-t border-border/40 space-y-6">
              <h2 className="font-heading text-xl font-bold text-foreground">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 gap-4">
                {SERVICE_FAQS.map((faq) => (
                  <div key={faq.question} className="rounded-xl border border-border bg-card p-5 space-y-2">
                    <h3 className="font-heading text-sm font-bold text-foreground">{faq.question}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
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
