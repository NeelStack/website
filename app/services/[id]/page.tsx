import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { SERVICES } from '@/constants/services'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'
import { JsonLd } from '@/components/seo/json-ld'
import {
  CheckCircle2,
  Shield,
  Code2,
  ArrowRight,
  Package,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const service = SERVICES.find((s) => s.id === resolvedParams.id)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: `${service.name} — Professional ${service.category} Services | NeelStack`,
    description: `NeelStack delivers expert ${service.name.toLowerCase()} services. ${service.description}`,
    alternates: { canonical: `/services/${resolvedParams.id}` },
  }
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ id: s.id }))
}

/* ── Illustration map: service id → image path ── */
const SERVICE_ILLUSTRATIONS: Record<string, string> = {
  'ai-development':       '/images/illustrations/service-ai.png',
  'enterprise-web':       '/images/illustrations/service-web-dev.png',
  'mobile-development':   '/images/illustrations/hero-developer.png',
  'custom-software':      '/images/illustrations/service-web-dev.png',
  'devops-cloud':         '/images/illustrations/service-ai.png',
  'ui-ux-design':         '/images/illustrations/cta-advisor.png',
}

/* ── Generic fallback FAQs used only if a service has no faqs ── */
const FALLBACK_FAQS = [
  {
    question: 'Who owns the source code and intellectual property?',
    answer:
      'You retain 100% full ownership of all source code, design assets, and intellectual property developed during the project upon final delivery.',
  },
  {
    question: 'How do you handle project communication and updates?',
    answer:
      'We operate in agile sprints with direct Slack/Teams access, weekly demo calls, and transparent GitHub/GitLab repository progress tracking.',
  },
  {
    question: 'What happens after the initial product launch?',
    answer:
      'All projects include a post-launch warranty period alongside optional long-term SLA maintenance, infrastructure monitoring, and feature iteration agreements.',
  },
]

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const service = SERVICES.find((s) => s.id === resolvedParams.id)

  if (!service) {
    notFound()
  }

  const Icon = service.icon
  const faqs = service.faqs ?? FALLBACK_FAQS
  const illustrationSrc = SERVICE_ILLUSTRATIONS[resolvedParams.id] ?? '/images/illustrations/hero-developer.png'

  return (
    <MarketingLayout>
      {/* Structured Data */}
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

      {/* ── Section 1: Overview + Highlights ── */}
      <Section>
        <Container>
          <div className="max-w-5xl mx-auto">
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
                  We engineer {service.name.toLowerCase()} solutions to be modular, performant, and
                  secure — with clean architectures that grow alongside your operations without
                  accumulating technical debt.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Every engagement includes full source code ownership, automated deployment
                  pipelines, continuous test coverage, and comprehensive runbook documentation so
                  your team can operate and extend the system independently.
                </p>

                {/* Guarantee cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Security First</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Encrypted data layers, RBAC, and least-privilege design by default.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3">
                    <Code2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Clean Code</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        TypeScript strict mode, automated tests, and full documentation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky highlights panel */}
              <div>
                <div className="rounded-2xl border border-border bg-card p-6 sticky top-24">
                  <div className="flex items-center justify-center w-full mb-5 rounded-xl overflow-hidden bg-gradient-to-b from-primary/6 to-primary/2 py-4">
                    <Image
                      src={illustrationSrc}
                      alt={`${service.name} illustration`}
                      width={200}
                      height={200}
                      className="w-full max-w-[180px] h-auto object-contain"
                      style={{
                        filter: 'drop-shadow(0 8px 20px rgba(99,102,241,0.18))',
                      }}
                    />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                    Core Capabilities
                  </h3>
                  <ul className="space-y-3" aria-label="Capabilities highlights">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                      >
                        <CheckCircle2
                          className="h-5 w-5 text-primary shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-border">
                    <a
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      Start a Project
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 2: Technology Stack ── */}
      {service.techStack && service.techStack.length > 0 && (
        <section className="py-16 bg-muted/30 border-y border-border/50" aria-labelledby="tech-stack-heading">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="mb-10">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Technology Stack
                </p>
                <h2
                  id="tech-stack-heading"
                  className="font-heading text-2xl font-bold text-foreground"
                >
                  Tools & Platforms We Work With
                </h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                  We select technologies based on your specific requirements — not trend-chasing.
                  All listed technologies are actively used in production projects.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {service.techStack.map((group) => (
                  <div
                    key={group.label}
                    className="rounded-2xl border border-border bg-card p-5 space-y-3"
                  >
                    <h3 className="text-xs font-bold text-primary uppercase tracking-wider">
                      {group.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-border/80 bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── Section 3: Delivery Process ── */}
      {service.processSteps && service.processSteps.length > 0 && (
        <Section aria-labelledby="process-heading">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  How We Work
                </p>
                <h2
                  id="process-heading"
                  className="font-heading text-2xl font-bold text-foreground"
                >
                  Our Delivery Process
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.processSteps.map((step, index) => (
                  <div key={step.step} className="relative flex flex-col">
                    {/* Connecting line (desktop) */}
                    {index < service.processSteps!.length - 1 && (
                      <div
                        className="hidden lg:block absolute top-5 left-[calc(50%+20px)] right-[-50%] h-px bg-border/60"
                        aria-hidden="true"
                      />
                    )}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/30 text-sm font-bold text-primary mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-heading text-sm font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ── Section 4: What You Get (Deliverables) ── */}
      {service.deliverables && service.deliverables.length > 0 && (
        <section
          className="py-16 bg-muted/30 border-y border-border/50"
          aria-labelledby="deliverables-heading"
        >
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="mb-10">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Project Deliverables
                </p>
                <h2
                  id="deliverables-heading"
                  className="font-heading text-2xl font-bold text-foreground"
                >
                  What You Receive on Completion
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Every project delivers complete ownership — no vendor lock-in, no black boxes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <Package className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── Section 5: FAQs ── */}
      <Section aria-labelledby="faq-heading">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Common Questions
              </p>
              <h2
                id="faq-heading"
                className="font-heading text-2xl font-bold text-foreground"
              >
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-border bg-card overflow-hidden"
                  open={i === 0}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-foreground list-none select-none">
                    <span>{faq.question}</span>
                    <ChevronDown
                      className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 group-open:hidden"
                      aria-hidden="true"
                    />
                    <ChevronUp
                      className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 hidden group-open:block"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-5 pb-5 pt-1 border-t border-border/40">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Ready to start your ${service.name.toLowerCase()} project?`}
        description="Share your requirements and we will put together a detailed proposal with architecture recommendations, timeline, and pricing."
        primaryLabel="Start a Project"
        primaryHref="/contact"
      />
    </MarketingLayout>
  )
}
