import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { ServiceDirectoryItem } from '@/components/ui/service-directory-item'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { Container } from '@/components/ui/container'
import { CTASection } from '@/components/ui/cta-section'
import { CategoryFilter } from '@/components/ui/category-filter'
import { TrustBarSection } from '@/components/sections/trust-bar-section'
import { JsonLd } from '@/components/seo/json-ld'
import { SERVICES, SERVICE_CATEGORIES } from '@/constants/services'
import { getSiteUrl } from '@/lib/site-url'
import {
  Zap,
  Code2,
  Lock,
  Server,
  Sparkles,
  Layers,
  FileCode2,
  GitPullRequest,
  BookOpen,
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
      : SERVICES.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase())

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
        description="From strategic architecture and frontier AI agent development to high-scale web platforms and cloud infrastructure — 11 core disciplines engineered for long-term reliability."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <TrustBarSection />

      {/* ── Section 1: Services Directory (Editorial Layout) ── */}
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-10" aria-labelledby="services-list-heading">
        <Container>
          {/* Category filter — client component for interactivity */}
          <Suspense fallback={<div className="mb-6 h-10" />}>
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

          {/* Services editorial directory */}
          <h2 id="services-list-heading" className="sr-only">
            Services list
          </h2>
          <div className="border-t border-border/60">
            {filtered.map((service, index) => (
              <ServiceDirectoryItem
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Section 2: Enterprise Engineering Standards (Unified Spec Matrix) ── */}
      <section className="py-6 sm:py-8 md:py-10 bg-muted/20 border-y border-border/50" aria-labelledby="standards-heading">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-5 sm:mb-7 text-center max-w-2xl mx-auto">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 font-mono">
                Engineering Rigor
              </p>
              <h2
                id="standards-heading"
                className="font-heading text-2xl sm:text-3xl font-bold text-foreground"
              >
                The NeelStack Engineering Standard
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                We reject brittle prototypes and hollow boilerplate. Every platform we build is hardened for real-world enterprise operations.
              </p>
            </div>

            {/* Unified 4-pillar spec matrix — zero card boxes */}
            <div className="border border-border/70 rounded-2xl bg-card/60 divide-y sm:divide-y-0 sm:divide-x divide-border/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
              <div className="p-5 sm:p-6 space-y-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 border border-border/70 text-foreground/80">
                  <Code2 className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-foreground">TypeScript Strict Mode</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  End-to-end type safety, automated linting gates, and comprehensive unit/integration test coverage.
                </p>
              </div>

              <div className="p-5 sm:p-6 space-y-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 border border-border/70 text-foreground/80">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Frontier AI &amp; RAG</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Deterministic agentic workflows, GraphRAG memory layers, and guardrail protected model inference.
                </p>
              </div>

              <div className="p-5 sm:p-6 space-y-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 border border-border/70 text-foreground/80">
                  <Server className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Zero-Downtime CI/CD</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Terraform Infrastructure as Code, preview deployments per PR, and automated canary/blue-green releases.
                </p>
              </div>

              <div className="p-5 sm:p-6 space-y-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 border border-border/70 text-foreground/80">
                  <Lock className="h-4 w-4" />
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
      <section className="py-6 sm:py-8 md:py-10" aria-labelledby="engagement-models-heading">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-5 sm:mb-7 text-center max-w-2xl mx-auto">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 font-mono">
                Collaboration
              </p>
              <h2
                id="engagement-models-heading"
                className="font-heading text-2xl sm:text-3xl font-bold text-foreground"
              >
                How We Partner With You
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                Flexible engagement structures tailored for high-growth startups and established enterprise organizations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Model 1 */}
              <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 flex flex-col justify-between space-y-4 tactile-card-3d shadow-xs">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-muted/40 px-2.5 py-1 text-xs font-mono text-muted-foreground mb-2">
                    <Zap className="h-3 w-3" /> Sprint Delivery
                  </div>
                  <h3 className="text-base font-bold text-foreground">Fixed-Scope MVP Sprint</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Fast-paced 2 to 4-week delivery sprints designed for rapid MVP prototyping, feature builds, or system audits.
                  </p>
                </div>
                <Link
                  href="/request-quote?engagement=fixed-sprint"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted/40 px-4 py-2 text-xs font-bold text-foreground hover:bg-muted transition-colors"
                >
                  Scope a Sprint →
                </Link>
              </div>

              {/* Model 2 */}
              <div className="rounded-2xl border-2 border-primary/70 bg-card p-5 sm:p-6 flex flex-col justify-between space-y-4 relative tactile-card-3d shadow-md">
                <div className="absolute -top-2.5 right-5 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-mono font-bold text-primary-foreground tracking-wider uppercase">
                  Most Popular
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-muted/40 px-2.5 py-1 text-xs font-mono text-muted-foreground mb-2">
                    <Sparkles className="h-3 w-3" /> Embedded Pod
                  </div>
                  <h3 className="text-base font-bold text-foreground">Dedicated Engineering Pod</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Embedded senior engineers and AI architects functioning seamlessly as an extension of your product team.
                  </p>
                </div>
                <Link
                  href="/request-quote?engagement=dedicated-pod"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs"
                >
                  Book an Engineering Pod →
                </Link>
              </div>

              {/* Model 3 */}
              <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 flex flex-col justify-between space-y-4 tactile-card-3d shadow-xs">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-muted/40 px-2.5 py-1 text-xs font-mono text-muted-foreground mb-2">
                    <Layers className="h-3 w-3" /> Modernization
                  </div>
                  <h3 className="text-base font-bold text-foreground">Enterprise Re-Architecture</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Strangler-fig migration for monolithic legacy applications, database clustering, and security hardening.
                  </p>
                </div>
                <Link
                  href="/contact?subject=Enterprise%20Re-Architecture"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted/40 px-4 py-2 text-xs font-bold text-foreground hover:bg-muted transition-colors"
                >
                  Discuss Enterprise Scale →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 4: Tangible Deliverables Guarantee (Unified Matrix) ── */}
      <section className="py-6 sm:py-8 md:py-10 bg-muted/20 border-y border-border/50" aria-labelledby="deliverables-matrix-heading">
        <Container>
          <div className="max-w-5xl mx-auto space-y-5 sm:space-y-7">
            <div className="text-center max-w-2xl mx-auto space-y-1.5">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono">
                Tangible Artifacts
              </p>
              <h2
                id="deliverables-matrix-heading"
                className="font-heading text-2xl sm:text-3xl font-bold text-foreground"
              >
                What Every Project Delivers
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                When you partner with NeelStack, you receive complete production assets and runbooks — zero hidden repositories or locked down infrastructure.
              </p>
            </div>

            {/* Unified 4-column deliverables matrix */}
            <div className="border border-border/70 rounded-2xl bg-card/60 divide-y sm:divide-y-0 sm:divide-x divide-border/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
              <div className="p-5 sm:p-6 space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 border border-border/70 text-foreground/80">
                  <GitPullRequest className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-foreground">Full Git Repository Transfer</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Clean commit history, PR review templates, CI workflows, and complete intellectual property assignment.
                </p>
              </div>

              <div className="p-5 sm:p-6 space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 border border-border/70 text-foreground/80">
                  <FileCode2 className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-foreground">Terraform IaC &amp; Docker</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Version-controlled cloud infrastructure modules, Docker Compose environments, and Kubernetes Helm charts.
                </p>
              </div>

              <div className="p-5 sm:p-6 space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 border border-border/70 text-foreground/80">
                  <Code2 className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-foreground">OpenAPI 3.1 &amp; SDKs</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Interactive Swagger documentation, Postman collection environments, and typed client SDKs.
                </p>
              </div>

              <div className="p-5 sm:p-6 space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 border border-border/70 text-foreground/80">
                  <BookOpen className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-foreground">Runbooks &amp; Architecture ADRs</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Operational disaster recovery procedures, deployment guides, and Architecture Decision Records.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 5: General FAQ (Multi-Open Accordion) ── */}
      <section className="py-6 sm:py-8 md:py-10" aria-labelledby="faq-hub-heading">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-5 sm:mb-7 text-center">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 font-mono">
                Client Questions
              </p>
              <h2
                id="faq-hub-heading"
                className="font-heading text-2xl sm:text-3xl font-bold text-foreground"
              >
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1.5">
                Key operational details about working with NeelStack.
              </p>
            </div>
            <FAQAccordion items={SERVICES_HUB_FAQS} />
          </div>
        </Container>
      </section>

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
