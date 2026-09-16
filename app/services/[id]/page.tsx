import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { SERVICES } from '@/constants/services'
import { INDUSTRIES } from '@/constants/industries'
import { getSiteUrl } from '@/lib/site-url'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'
import { TrustBarSection } from '@/components/sections/trust-bar-section'
import { CapabilitiesSection } from '@/components/sections/capabilities-section'
import { BlogPreviewSection } from '@/components/sections/blog-preview-section'
import { JsonLd } from '@/components/seo/json-ld'
import {
  CheckCircle2,
  Shield,
  Code2,
  ArrowRight,
  Package,
  ChevronDown,
  ChevronUp,
  Lock,
  Server,
  Zap,
  Clock,
  Sparkles,
  Layers,
  ArrowUpRight,
} from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const service = SERVICES.find((s) => s.id === resolvedParams.id)
  if (!service) {
    return {
      title: 'Service Not Found | NeelStack',
      robots: { index: false },
      alternates: { canonical: null },
    }
  }
  return {
    title: `${service.name} — Professional ${service.category} Services | NeelStack India`,
    description: `NeelStack delivers enterprise ${service.name.toLowerCase()} services. ${service.description}`,
    alternates: { canonical: `/services/${resolvedParams.id}` },
    openGraph: {
      title: `${service.name} — Professional ${service.category} Services | NeelStack`,
      description: service.description,
    },
  }
}

export async function generateStaticParams() {
  if (!SERVICES || SERVICES.length === 0) return []
  return SERVICES.map((s) => ({ id: s.id }))
}

/* ── Illustration map: service id → image path ── */
const SERVICE_ILLUSTRATIONS: Record<string, string> = {
  'ai-development':        '/images/illustrations/service-ai.png',
  'web-applications':      '/images/illustrations/service-web-dev.png',
  'mobile-development':    '/images/illustrations/hero-developer.png',
  'custom-software':       '/images/illustrations/service-web-dev.png',
  'workflow-automation':   '/images/illustrations/service-ai.png',
  'enterprise-platforms':  '/images/illustrations/service-web-dev.png',
  'api-development':       '/images/illustrations/service-ai.png',
  'database-systems':      '/images/illustrations/service-ai.png',
  'devops-cloud':          '/images/illustrations/service-ai.png',
  'technology-consulting': '/images/illustrations/cta-advisor.png',
  'ui-ux-design':          '/images/illustrations/cta-advisor.png',
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
  const siteUrl = getSiteUrl()

  // Related complementary services (exclude current)
  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <MarketingLayout>
      {/* ── Structured Data ── */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.name,
          serviceType: service.category,
          provider: {
            '@type': 'Organization',
            name: 'NeelStack',
            url: siteUrl,
          },
          description: service.description,
          url: `${siteUrl}/services/${service.id}`,
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
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
          ],
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

      <TrustBarSection />

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
                  secure — with clean architectures that scale alongside your operations without
                  accumulating technical debt.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Every engagement includes full source code ownership, automated deployment
                  pipelines, continuous test coverage, and comprehensive runbook documentation so
                  your engineering team can operate and extend the system independently.
                </p>

                {/* Guarantee cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Security First</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Encrypted data layers, strict RBAC, and least-privilege design by default.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3">
                    <Code2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Clean Code</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        TypeScript strict mode, automated CI checks, and comprehensive documentation.
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
                    <Link
                      href={`/request-quote?service=${service.id}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      Start a Project
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
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
                  All listed platforms are actively deployed in enterprise production environments.
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

      {/* ── Section 3: Sector-Specific Industry Deployments ── */}
      <Section aria-labelledby="industry-matrix-heading">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Domain Adaptation
                </p>
                <h2
                  id="industry-matrix-heading"
                  className="font-heading text-2xl font-bold text-foreground"
                >
                  Industry Solutions for {service.name}
                </h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                  Explore how we customize our {service.name.toLowerCase()} architecture for specific sector regulations, workflows, and compliance standards.
                </p>
              </div>
              <Link
                href="/industries"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline self-start md:self-auto"
              >
                View all industries <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {INDUSTRIES.map((ind) => {
                const IndIcon = ind.icon
                return (
                  <Link
                    key={ind.id}
                    href={`/services/${service.id}/for/${ind.id}`}
                    className="group rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                          <IndIcon className="h-5 w-5" />
                        </div>
                        <span className="text-[11px] font-semibold text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                          Tailored Setup <ArrowUpRight className="h-3 w-3" />
                        </span>
                      </div>
                      <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {ind.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                        {ind.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/40">
                      <span className="text-xs font-medium text-primary">
                        Explore {ind.name.split(' ')[0]} Architecture →
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 4: Delivery Process ── */}
      {service.processSteps && service.processSteps.length > 0 && (
        <section className="py-16 bg-muted/30 border-y border-border/50" aria-labelledby="process-heading">
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
                <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                  Transparent 4-phase agile delivery with continuous staging updates, demo sessions, and zero surprise handovers.
                </p>
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
        </section>
      )}

      {/* ── Section 5: What You Get (Deliverables) ── */}
      {service.deliverables && service.deliverables.length > 0 && (
        <Section aria-labelledby="deliverables-heading">
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
                  Every engagement delivers complete source ownership — no proprietary lock-in, no hidden codebases.
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
        </Section>
      )}

      {/* ── Section 6: Enterprise SLA & Governance Standards ── */}
      <section className="py-16 bg-muted/30 border-y border-border/50" aria-labelledby="sla-heading">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Enterprise Standards
              </p>
              <h2
                id="sla-heading"
                className="font-heading text-2xl font-bold text-foreground"
              >
                Service Level Guarantees & Governance
              </h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                Rigorous operational baselines engineered into every contract and deployment pipeline.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">100% IP Ownership</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Full git history, architecture diagrams, and unrestricted commercial license transferred upon delivery.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Server className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">99.9% Uptime Architecture</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Multi-AZ container failover, database clustering, and automated health recovery checks.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">SOC 2 & DPDP Baseline</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Encrypted data at rest (AES-256) and in transit (TLS 1.3), granular RBAC, and zero-trust perimeter.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Bi-Weekly Sprints</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Direct Slack/Teams engineer access, continuous staging previews, and transparent milestone burndowns.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 7: Engagement Models ── */}
      <Section aria-labelledby="engagement-heading">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Flexible Collaboration
              </p>
              <h2
                id="engagement-heading"
                className="font-heading text-2xl font-bold text-foreground"
              >
                Engagement Models for {service.name}
              </h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                Choose the collaboration structure that fits your project velocity, budget, and internal engineering capacity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Model 1 */}
              <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400 mb-2">
                    <Zap className="h-3.5 w-3.5" /> MVP Sprint
                  </div>
                  <h3 className="text-base font-bold text-foreground">Fixed-Scope Delivery</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Ideal for MVPs, proof-of-concept AI agents, or specific modular feature additions with defined scope.
                  </p>
                  <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>2–4 Weeks Delivery Turnaround</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Fixed Milestones & Budget</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>100% Codebase Handover</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/request-quote?service=${service.id}&engagement=fixed-sprint`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted/60 px-4 py-2 text-xs font-bold text-foreground hover:bg-muted transition-colors"
                >
                  Scope a Sprint →
                </Link>
              </div>

              {/* Model 2 (Featured) */}
              <div className="rounded-2xl border-2 border-primary/60 bg-card p-6 flex flex-col justify-between space-y-4 shadow-lg relative">
                <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold text-primary-foreground tracking-wider uppercase">
                  Most Popular
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-400 mb-2">
                    <Sparkles className="h-3.5 w-3.5" /> Dedicated Pod
                  </div>
                  <h3 className="text-base font-bold text-foreground">Embedded Engineering Pod</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Senior full-stack & AI engineers embedded directly in your team to scale product velocity continuously.
                  </p>
                  <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Monthly Sprint Retainer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Direct Slack / Teams Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Flexible Scope & Rapid Pivoting</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/request-quote?service=${service.id}&engagement=dedicated-pod`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Book an Engineering Pod →
                </Link>
              </div>

              {/* Model 3 */}
              <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 mb-2">
                    <Layers className="h-3.5 w-3.5" /> Enterprise
                  </div>
                  <h3 className="text-base font-bold text-foreground">Modernization & Migration</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Enterprise strangler-fig re-architecture, microservices decomposition, and cloud infrastructure hardening.
                  </p>
                  <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Multi-Milestone Roadmap</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Zero-Downtime Cutover SLA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Security & Compliance Audits</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/contact?service=${service.id}&subject=Enterprise%20Modernization`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted/60 px-4 py-2 text-xs font-bold text-foreground hover:bg-muted transition-colors"
                >
                  Discuss Enterprise Scale →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 8: Frequently Asked Questions ── */}
      <section className="py-16 bg-muted/30 border-y border-border/50" aria-labelledby="faq-heading">
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
              <p className="text-sm text-muted-foreground mt-2">
                Clear answers regarding architecture, ownership, costs, and timeline execution.
              </p>
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
      </section>

      {/* ── Section 9: Complementary Services ── */}
      <Section aria-labelledby="related-services-heading">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Ecosystem
                </p>
                <h2
                  id="related-services-heading"
                  className="font-heading text-2xl font-bold text-foreground"
                >
                  Complementary Engineering Services
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Browse all 11 services <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedServices.map((rel) => {
                const RelIcon = rel.icon
                return (
                  <Link
                    key={rel.id}
                    href={`/services/${rel.id}`}
                    className="group rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary mb-3">
                        <RelIcon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                        {rel.category}
                      </span>
                      <h3 className="font-heading text-sm font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                        {rel.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                        {rel.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/40 text-xs font-medium text-primary flex items-center gap-1">
                      Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      <CapabilitiesSection />
      
      <BlogPreviewSection />

      <CTASection
        title={`Ready to start your ${service.name.toLowerCase()} project?`}
        description="Share your technical goals and we will put together a comprehensive proposal with architecture recommendations, timeline milestones, and pricing."
        primaryLabel="Start a Project"
        primaryHref={`/request-quote?service=${service.id}`}
      />
    </MarketingLayout>
  )
}
