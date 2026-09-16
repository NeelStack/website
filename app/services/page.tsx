import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { ServiceCard } from '@/components/ui/service-card'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'
import { CategoryFilter } from '@/components/ui/category-filter'
import { TrustBarSection } from '@/components/sections/trust-bar-section'
import { CapabilitiesSection } from '@/components/sections/capabilities-section'
import { JsonLd } from '@/components/seo/json-ld'
import { SERVICES, SERVICE_CATEGORIES } from '@/constants/services'
import { getSiteUrl } from '@/lib/site-url'
import {
  Shield,
  Zap,
  Code2,
  Lock,
  Server,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Layers,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Software Engineering & AI Development Services | NeelStack India',
  description:
    'NeelStack delivers end-to-end technology services: Agentic AI development, modern web applications, enterprise software, API backends, cloud infrastructure, and technology consulting.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Software Engineering & AI Services | NeelStack India',
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

const SERVICES_HUB_FAQS = [
  {
    question: 'How does NeelStack structure software development engagements?',
    answer:
      'We offer three transparent engagement models: Fixed-Scope Sprints (2–4 weeks for MVPs and modular features), Dedicated Engineering Pods (monthly sprint retainers for embedded continuous development), and Enterprise Modernization Roadmaps (phased legacy refactoring with zero downtime).',
  },
  {
    question: 'Who owns the intellectual property and code repositories?',
    answer:
      'You retain 100% full legal ownership of all source code, design tokens, architecture documentation, and container configurations upon milestone delivery. We never impose proprietary vendor lock-in.',
  },
  {
    question: 'How do you ensure enterprise-grade security and compliance?',
    answer:
      'All our software is built with security-by-design: strict Role-Based Access Control (RBAC), end-to-end encryption in transit (TLS 1.3) and at rest (AES-256), automated vulnerability scanning in CI/CD, and alignment with India DPDP 2023 and SOC 2 standards.',
  },
  {
    question: 'Can you work alongside our existing in-house development team?',
    answer:
      'Yes. Our engineers frequently embed into existing client teams via direct Slack/Teams integration, participating in daily standups, sprint planning, and pull request reviews.',
  },
]

export default async function ServicesPage({ searchParams }: PageProps) {
  const { category } = await searchParams
  const activeCategory = category && SERVICE_CATEGORIES.includes(category as (typeof SERVICE_CATEGORIES)[number])
    ? category
    : 'All'

  const filtered =
    activeCategory === 'All'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory)

  const siteUrl = getSiteUrl()

  return (
    <MarketingLayout>
      {/* ── Structured Data ── */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'NeelStack Technology & AI Services',
          description: 'Comprehensive software engineering and AI services offered by NeelStack.',
          itemListElement: SERVICES.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: service.name,
            url: `${siteUrl}/services/${service.id}`,
            description: service.description,
          })),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: SERVICES_HUB_FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
      />

      <PageHero
        badge="Enterprise Services"
        title="End-to-End Technology & AI Services"
        description="From strategic architecture and frontier AI agent development to high-scale web platforms and cloud infrastructure — engineered for long-term reliability."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <TrustBarSection />

      {/* ── Section 1: Services Directory ── */}
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

      {/* ── Section 2: Enterprise Engineering Standards ── */}
      <section className="py-16 bg-muted/30 border-y border-border/50" aria-labelledby="standards-heading">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Engineering Rigor
              </p>
              <h2
                id="standards-heading"
                className="font-heading text-3xl font-bold text-foreground"
              >
                The NeelStack Engineering Standard
              </h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                We reject brittle prototypes and hollow boilerplate. Every platform we build is hardened for real-world enterprise operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">TypeScript Strict Mode</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  End-to-end type safety, automated linting gates, and comprehensive unit/integration test coverage.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Frontier AI & RAG</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Deterministic agentic workflows, GraphRAG memory layers, and guardrail protected model inference.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Server className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Zero-Downtime CI/CD</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Terraform Infrastructure as Code, preview deployments per PR, and automated canary/blue-green releases.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">100% Code Ownership</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Full git repository transfer, complete architecture documentation, and zero proprietary runtime lock-in.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 3: Engagement Models ── */}
      <Section aria-labelledby="engagement-models-heading">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Collaboration
              </p>
              <h2
                id="engagement-models-heading"
                className="font-heading text-3xl font-bold text-foreground"
              >
                How We Partner With You
              </h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Flexible engagement structures tailored for high-growth startups and established enterprise organizations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Model 1 */}
              <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400 mb-2">
                    <Zap className="h-3.5 w-3.5" /> Sprint Delivery
                  </div>
                  <h3 className="text-base font-bold text-foreground">Fixed-Scope MVP Sprint</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Fast-paced 2 to 4-week delivery sprints designed for rapid MVP prototyping, feature builds, or system audits.
                  </p>
                </div>
                <Link
                  href="/request-quote?engagement=fixed-sprint"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted/60 px-4 py-2 text-xs font-bold text-foreground hover:bg-muted transition-colors"
                >
                  Scope a Sprint →
                </Link>
              </div>

              {/* Model 2 */}
              <div className="rounded-2xl border-2 border-primary/60 bg-card p-6 flex flex-col justify-between space-y-4 shadow-lg relative">
                <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold text-primary-foreground tracking-wider uppercase">
                  Most Popular
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-400 mb-2">
                    <Sparkles className="h-3.5 w-3.5" /> Embedded Pod
                  </div>
                  <h3 className="text-base font-bold text-foreground">Dedicated Engineering Pod</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Embedded senior engineers and AI architects functioning seamlessly as an extension of your product team.
                  </p>
                </div>
                <Link
                  href="/request-quote?engagement=dedicated-pod"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Book an Engineering Pod →
                </Link>
              </div>

              {/* Model 3 */}
              <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 mb-2">
                    <Layers className="h-3.5 w-3.5" /> Modernization
                  </div>
                  <h3 className="text-base font-bold text-foreground">Enterprise Re-Architecture</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Strangler-fig migration for monolithic legacy applications, database clustering, and security hardening.
                  </p>
                </div>
                <Link
                  href="/contact?subject=Enterprise%20Re-Architecture"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted/60 px-4 py-2 text-xs font-bold text-foreground hover:bg-muted transition-colors"
                >
                  Discuss Enterprise Scale →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 4: General FAQ ── */}
      <section className="py-16 bg-muted/30 border-y border-border/50" aria-labelledby="faq-hub-heading">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Client Questions
              </p>
              <h2
                id="faq-hub-heading"
                className="font-heading text-3xl font-bold text-foreground"
              >
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                Key operational details about working with NeelStack.
              </p>
            </div>
            <div className="space-y-4">
              {SERVICES_HUB_FAQS.map((faq, i) => (
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

      <CapabilitiesSection />

      <CTASection
        title="Ready to Build Enterprise-Grade Systems?"
        description="Whether you are scoping a 2-week architecture sprint, embedding an autonomous AI pod, or embarking on whole-system modernization, our leadership engineering team is ready."
        primaryLabel="Request a Quote"
        primaryHref="/request-quote"
        secondaryLabel="Book Free Architecture Call"
        secondaryHref="/book-consultation"
      />
    </MarketingLayout>
  )
}
