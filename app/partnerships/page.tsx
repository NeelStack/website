import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Users,
  Code2,
  ShieldCheck,
  Building2,
  FileCheck,
  Layers,
  ArrowRight,
  Handshake,
  Bot,
  Terminal,
  Cpu,
  Lock,
  Clock,
  Sparkles,
  CheckCircle2,
  Mail,
  Zap,
} from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { CTASection } from '@/components/ui/cta-section'
import { JsonLd } from '@/components/seo/json-ld'
import { getSiteUrl } from '@/lib/site-url'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: 'Engineering Subcontracting & Vendor Partnerships | NeelStack Solutions',
  description:
    'Partner with NeelStack as your specialized AI engineering and subcontracting vendor. Dedicated development pods, senior contract engineers, and AI model evaluation teams for IT systems integrators and tech enterprises.',
  openGraph: {
    title: 'Engineering Subcontracting & Vendor Partnerships | NeelStack Solutions',
    description:
      'Pre-vetted AI engineering pods, dedicated contract developers, and AI model evaluation teams for systems integrators and enterprise tech vendors. Complete statutory compliance and 100% IP assignment.',
    url: `${getSiteUrl()}/partnerships`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Subcontracting & Vendor Partnerships | NeelStack Solutions',
    description:
      'Expand engineering capacity with senior AI engineers, dedicated pods, and AI evaluation teams. Compliant vendor subcontracting.',
  },
  alternates: {
    canonical: '/partnerships',
  },
}

const SUBCONTRACT_MODELS = [
  {
    id: 'dedicated-pods',
    title: 'Dedicated Engineering Pods',
    badge: 'Turnkey Delivery',
    badgeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400',
    description:
      'Autonomous, self-managed engineering pods composed of a Lead Architect, Senior Full-Stack Engineers, QA Specialist, and DevOps Engineer aligned directly with your delivery roadmaps.',
    features: [
      'Dedicated Tech Lead managing daily agile standups',
      'Pre-assembled chemistry with zero onboarding lag',
      'Direct Jira / Slack / GitHub sprint integration',
      'Full-time exclusive allocation (no divided attention)',
    ],
    ctaHref: '/contact?subject=Dedicated+Pod+Inquiry',
    ctaText: 'Assemble a Pod',
  },
  {
    id: 'contract-specialists',
    title: 'Senior Contract Engineers',
    badge: 'Staff Augmentation',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    description:
      'Embed pre-vetted senior software engineers into your internal squads to bridge critical skill gaps in frontier technologies like Agentic AI, MCP, Rust, Python FastAPI, or Next.js.',
    features: [
      'Top 5% senior engineers with 5+ years production track record',
      'Rapid placement within 3 to 5 business days',
      'Flexible month-to-month contracts or 6–12 month extensions',
      'Time-zone aligned with North America, Europe, and APAC',
    ],
    ctaHref: '/contact?subject=Contract+Engineer+Placement',
    ctaText: 'Hire Specialist Engineers',
  },
  {
    id: 'white-label',
    title: 'White-Label Systems Delivery',
    badge: 'End-to-End Execution',
    badgeColor: 'border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400',
    description:
      'Deliver complex client software and AI transformations completely under your brand. We sign strict bilateral NDAs and execute behind your brand curtain with flawless quality.',
    features: [
      'Strict white-label covenants and customer-facing confidentiality',
      'Use your corporate email domains and communication channels',
      'Milestone-based SOW or retained capacity invoicing',
      'Complete intellectual property assignment on milestone sign-off',
    ],
    ctaHref: '/contact?subject=White-Label+Partnership',
    ctaText: 'Discuss White-Label Terms',
  },
  {
    id: 'ai-operations',
    title: 'AI Evaluation & Data Operations',
    badge: 'Human-in-the-Loop',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
    description:
      'Scalable human-in-the-loop teams for AI model alignment, RLHF verification, prompt red-teaming, ground-truth annotation, and continuous LLM output benchmark scoring.',
    features: [
      'Rigorous multi-stage inter-annotator agreement (Cohen’s Kappa > 0.85)',
      'Expert-in-the-loop verification for code, finance, and technical domains',
      'Air-gapped data workflows with zero-retention data covenants',
      'High-throughput annotation pipelines with weekly SLA auditing',
    ],
    ctaHref: '/contact?subject=AI+Data+Operations+Partnership',
    ctaText: 'Scale AI Evaluation',
  },
]

const STATUTORY_CREDENTIALS = [
  {
    label: 'Legal Corporate Entity',
    value: SITE_CONFIG.legalName,
    detail: 'Incorporated under the Companies Act, 2013 on 31 August 2026',
  },
  {
    label: 'Corporate Identification (CIN)',
    value: SITE_CONFIG.accreditations.cin,
    detail: 'Ministry of Corporate Affairs (MCA), Government of India',
  },
  {
    label: 'GST Registered',
    value: SITE_CONFIG.accreditations.gstin,
    detail: 'Pan-India B2B compliant invoicing with reverse charge & credit',
  },
  {
    label: 'Startup India & MSME',
    value: `${SITE_CONFIG.accreditations.startupIndia} · ${SITE_CONFIG.accreditations.msme}`,
    detail: 'DPIIT recognized enterprise technology startup entity',
  },
]

const PARTNERSHIP_FAQS = [
  {
    question: 'How do you handle client intellectual property (IP) and source code ownership?',
    answer:
      'All source code, documentation, schemas, and AI artifacts engineered by NeelStack are 100% assigned to your enterprise or client upon milestone invoice sign-off. We sign bilateral Non-Disclosure Agreements (NDAs) and Master Services Agreements (MSAs) containing unambiguous IP indemnification and non-compete clauses.',
  },
  {
    question: 'Can your engineers operate under our corporate email and communication tools?',
    answer:
      'Yes. For white-label and dedicated subcontracting engagements, our engineers can be issued accounts on your Google Workspace / Microsoft 365, Slack, Jira, and GitHub / GitLab organizations, operating as seamless members of your engineering delivery unit.',
  },
  {
    question: 'What is the minimum engagement term for dedicated engineering pods?',
    answer:
      'Dedicated engineering pods typically start with a 3-month commitment, which allows for stable team velocity, sprint calibration, and measurable delivery milestones. For short-term capacity bursts or specialized contract engineers, flexible 4 to 8 week engagements are also available.',
  },
  {
    question: 'How do billing, rate cards, and payment terms work for international partners?',
    answer:
      'We support both USD/EUR wire transfers for global partners and INR invoicing with GST for domestic technology firms. Billing can be structured as bi-weekly or monthly time-and-materials, monthly retained pod fees, or fixed-price milestone statements of work (SOWs).',
  },
  {
    question: 'How quickly can a dedicated pod or contract engineer be onboarded?',
    answer:
      'Individual contract engineers can typically be interviewed and onboarded within 3 to 5 business days. Full multi-disciplinary engineering pods can be mobilized and initiated within 7 to 10 business days following MSA execution.',
  },
]

export default function PartnershipsPage() {
  return (
    <MarketingLayout>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Engineering Subcontracting & Vendor Partnerships — NeelStack Solutions',
          url: `${getSiteUrl()}/partnerships`,
          description:
            'Pre-vetted AI engineering pods, contract developers, and AI model evaluation teams for IT systems integrators and enterprise tech vendors.',
          publisher: {
            '@type': 'Organization',
            name: SITE_CONFIG.legalName,
            url: getSiteUrl(),
            legalName: SITE_CONFIG.legalName,
            identifier: SITE_CONFIG.accreditations.cin,
          },
        }}
      />

      <PageHero
        badge="B2B VENDOR & SUBCONTRACTING PARTNERSHIPS"
        title="Scale Your Technology Delivery with Specialist Engineering Pods"
        description="We partner with global system integrators, technology consultancies, and AI enterprises as an agile subcontracting and engineering delivery partner. Senior AI engineers, turnkey pods, and AI data operations with complete statutory compliance."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Partnerships' }]}
      />

      {/* Statutory Trust Bar */}
      <section className="border-y border-border/60 bg-muted/20 py-6">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATUTORY_CREDENTIALS.map((cred) => (
              <div
                key={cred.label}
                className="p-4 rounded-xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-1"
              >
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                  {cred.label}
                </p>
                <p className="text-xs font-bold font-mono text-foreground truncate">
                  {cred.value}
                </p>
                <p className="text-[11px] text-muted-foreground leading-tight">
                  {cred.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Subcontracting Engagement Models */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-widest">
              Engagement Models
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight text-balance">
              Engineered to Fit Your Enterprise Delivery Pipeline
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Whether you need to augment an internal squad, deliver a white-label enterprise transformation, or scale human-in-the-loop AI evaluation, we offer flexible, compliant partnership structures.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SUBCONTRACT_MODELS.map((model) => (
              <div
                key={model.id}
                className="rounded-3xl border-2 border-slate-200/90 dark:border-white/10 bg-card p-6 sm:p-8 flex flex-col justify-between hover:border-primary/40 transition-all duration-200 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${model.badgeColor}`}
                    >
                      {model.badge}
                    </span>
                    <Handshake className="h-5 w-5 text-muted-foreground/60" />
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {model.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {model.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-border/50">
                    {model.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-foreground/90">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-border/50">
                  <Link
                    href={model.ctaHref}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <span>{model.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Enterprise Vendors Choose NeelStack */}
      <Section className="bg-muted/30 border-y border-border/60">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-widest">
                Vendor Assurance
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Zero Friction. Strict IP Security. Reliable Velocity.
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We understand the rigor required by Tier-1 system integrators and global consultancies. Our operations are engineered to integrate seamlessly into your governance workflows.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                    <Lock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground">Air-Gapped Repositories &amp; Zero Co-mingling</h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Client codebases run in strictly segregated cloud infrastructure with MFA-enforced access controls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground">100% Intellectual Property Indemnification</h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Full assignment of all code, documentation, and IP upon milestone settlement with explicit indemnity covenants.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground">Direct Senior Engineer Collaboration</h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      No junior buffer or layer of non-technical coordinators. Your tech leads collaborate directly with our engineers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-3xl border-2 border-slate-200/90 dark:border-white/10 bg-card p-6 sm:p-8 space-y-6">
              <h3 className="font-heading text-lg font-bold text-foreground flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                Technical Capabilities &amp; Stack Alignment
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-border/70 bg-muted/20 space-y-2">
                  <p className="text-[11px] font-mono font-bold text-primary uppercase">Frontier AI &amp; Agents</p>
                  <p className="text-xs text-muted-foreground">
                    LangGraph, AutoGen, Model Context Protocol (MCP), vLLM inference, LoRA fine-tuning, pgvector hybrid search, Claude &amp; OpenAI API orchestration.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-border/70 bg-muted/20 space-y-2">
                  <p className="text-[11px] font-mono font-bold text-cyan-500 uppercase">Modern Web &amp; Mobile</p>
                  <p className="text-xs text-muted-foreground">
                    Next.js App Router, React 19, TypeScript, Tailwind CSS, Flutter, React Native, Vite, WebAssembly (WASM).
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-border/70 bg-muted/20 space-y-2">
                  <p className="text-[11px] font-mono font-bold text-violet-500 uppercase">Backend &amp; Distributed Systems</p>
                  <p className="text-xs text-muted-foreground">
                    Python (FastAPI, Celery), Go, Rust, Node.js, PostgreSQL, Redis, Apache Kafka, REST &amp; gRPC services.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-border/70 bg-muted/20 space-y-2">
                  <p className="text-[11px] font-mono font-bold text-amber-500 uppercase">Cloud, DevOps &amp; Data</p>
                  <p className="text-xs text-muted-foreground">
                    AWS, Google Cloud (GCP), Docker, Kubernetes, Terraform, GitHub Actions CI/CD, dbt, BigQuery, Databricks.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-primary/20 bg-primary/5 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-foreground">Need a custom technical stack evaluation?</p>
                  <p className="text-[11px] text-muted-foreground">
                    Our technical directors can evaluate your RFP or sprint backlog within 24 hours.
                  </p>
                </div>
                <Link
                  href="/contact?subject=Technical+Stack+Evaluation"
                  className="shrink-0 text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  Request Review <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4-Step Partnership Onboarding */}
      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-widest">
              Vendor Onboarding
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Rapid, Predictable Vendor Mobilization
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: 'NDA & Requirements Alignment',
                desc: 'Execution of bilateral mutual NDA and technical requirement alignment within 24–48 hours.',
              },
              {
                step: '02',
                title: 'Pod Profiling & Technical Vetting',
                desc: 'Review candidate engineer profiles, portfolio code repositories, and conduct direct video technical interviews.',
              },
              {
                step: '03',
                title: 'MSA & Statement of Work',
                desc: 'Formalize Master Services Agreement (MSA) and sprint Statement of Work (SOW) with clear milestone deliverables.',
              },
              {
                step: '04',
                title: 'Sprint Kickoff & Agile Integration',
                desc: 'Repository provisioning, communication sync, and immediate sprint onboarding into your team workflows.',
              },
            ].map((s) => (
              <div
                key={s.step}
                className="p-5 rounded-2xl border border-border/70 bg-card/60 space-y-2 hover:border-primary/40 transition-colors"
              >
                <span className="text-xs font-mono font-extrabold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                  Step {s.step}
                </span>
                <h4 className="font-heading text-sm font-bold text-foreground pt-1">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-muted/20 border-t border-border/60">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-widest">
              Partnership FAQs
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Frequently Asked Questions by Vendor Partners
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={PARTNERSHIP_FAQS} />
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <CTASection
        title="Ready to Expand Your"
        titleAccent="Technical Delivery Capacity?"
        description="Connect with our technical leadership to request our vendor rate card, candidate profiles, and master subcontracting agreement template."
        primaryLabel="Inquire for Partnerships"
        primaryHref="/contact?subject=Vendor+Partnership+Inquiry"
        secondaryLabel="Book Technical Discovery"
        secondaryHref="/book-consultation"
      />
    </MarketingLayout>
  )
}
