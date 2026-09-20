import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Container } from '@/components/ui/container'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import { JsonLd } from '@/components/seo/json-ld'
import { getSiteUrl } from '@/lib/site-url'
import { Button } from '@/components/ui/button'
import {
  DhruvaOSFeatureDirectory,
  DhruvaOSRoleShowcase
} from '@/components/sections/dhruvaos-interactive-sections'
import {
  CheckCircle2,
  Sparkles,
  Bot,
  ArrowRight,
  ShieldCheck,
  Lock,
  Database,
  Key,
  FileText,
  Smartphone,
  Sliders,
  Server,
  Cloud,
  Layers,
  Cpu,
  Zap,
  Globe,
  Laptop
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'DhruvaOS | AI-Powered Education Operating System (EdOS) | NeelStack India',
  description:
    'Digitally transform schools, colleges, universities, and educational trusts with DhruvaOS. The modern, enterprise-grade AI-powered operating system for all administrative, academic, financial, and AI workflows.',
  keywords: [
    'Education Operating System',
    'EdOS',
    'School ERP',
    'College Management Software',
    'University Administration System',
    'AI Education Platform',
    'NeelStack',
    'DhruvaOS'
  ],
  alternates: {
    canonical: '/products/dhruvaos'
  }
}

// 12 AI modules grouped into 3 cohesive pillars (Zero card boxes)
const AI_PILLARS = [
  {
    title: 'Curricular & Content Intelligence',
    subtitle: 'Automate lesson preparation, question papers, and timetable generation.',
    items: [
      { name: 'AI Lesson Planner', desc: 'Instantly structure lesson plans matching national curricular guidelines.' },
      { name: 'AI Question Paper Generator', desc: 'Compile custom assessments matching difficulty levels and subject rubrics.' },
      { name: 'AI Homework Desk', desc: 'Auto-compile daily home tasks based on active class lecture summaries.' },
      { name: 'AI Timetable Solver', desc: 'Solve teacher double-bookings, room availability, and elective slots in seconds.' },
    ],
  },
  {
    title: 'Predictive Analytics & Interventions',
    subtitle: 'Identify student dropouts, attendance drops, and performance anomalies early.',
    items: [
      { name: 'Student Risk Detection', desc: 'Identify students at academic or enrollment dropout risk weeks before exams.' },
      { name: 'Attendance Anomaly Insights', desc: 'Spot patterns in absences across transport routes, seasons, and grades.' },
      { name: 'Board Exam Forecasting', desc: 'Predict board exam performance and recommend syllabus pace changes.' },
      { name: 'Institutional Health BI', desc: 'Real-time indicators across fee recovery rates, staff retention, and admissions.' },
    ],
  },
  {
    title: 'Stakeholder Copilots & Communication',
    subtitle: 'Contextual AI assistance for teachers, parents, and administrative staff.',
    items: [
      { name: 'AI Parent Assistant', desc: 'Auto-translate updates and answer parent queries 24/7 across multiple languages.' },
      { name: 'Teacher Evaluation Assistant', desc: 'Automate answer evaluations, grade structures, and constructive student remarks.' },
      { name: 'Dynamic Circular Generator', desc: 'Generate professional parent notices, circular emails, and event briefs instantly.' },
      { name: 'Campus Support Copilot', desc: 'Secure internal chatbot answering student and faculty administrative support tickets.' },
    ],
  },
]

// 4 Deployment options (Clean table matrix — zero individual cards)
const DEPLOYMENTS = [
  {
    model: 'SaaS (Shared Cloud)',
    tag: 'Turnkey & Scalable',
    desc: 'Hosted on secure cloud instances. Zero maintenance, automatic security patches, and instant onboarding. Ideal for growing K-12 schools.',
    dataOwnership: '100% Client Data Export',
    sla: '99.9% Uptime SLA',
  },
  {
    model: 'White Label (Custom Domain)',
    tag: 'Fully Branded',
    desc: 'Deploy under your private branding, custom domain (portal.school.edu), and dedicated Apple/Google app store developer accounts.',
    dataOwnership: 'Custom Domain & App Identity',
    sla: '99.9% Uptime SLA',
  },
  {
    model: 'Dedicated Cloud',
    tag: 'Enterprise Isolation',
    desc: 'Isolated private databases and dedicated cloud infrastructure allocated specifically to your trust. Maximum isolation and performance.',
    dataOwnership: 'Dedicated Database Instance',
    sla: '99.95% Enterprise SLA',
  },
  {
    model: 'Self-Hosted (On-Premises)',
    tag: 'Air-Gapped & Sovereign',
    desc: 'Deploy inside your own physical campus servers or private VPC. Maintain total physical and regulatory sovereignty over all data assets.',
    dataOwnership: 'Air-Gapped Campus Storage',
    sla: 'Direct IT Control',
  },
]

// FAQ items
const FAQ_ITEMS = [
  { question: 'Who is DhruvaOS designed for?', answer: 'DhruvaOS is designed for school owners, directors, principals, college management committees, university boards, and educational trusts who want to centralize their entire academic, financial, and operational tasks inside a single workspace.' },
  { question: 'Can colleges and universities use DhruvaOS?', answer: 'Yes. DhruvaOS has modular structures tailored to college schedules, semester tracking, elective divisions, GPA grading schemes, multi-campus architectures, and department-level audits.' },
  { question: 'Can coaching institutes and academies use it?', answer: 'Yes. Coaching centers and training academies can customize the registration pipelines, batch schedules, test structures, and online LMS features.' },
  { question: 'Can it run on our own campus servers?', answer: 'Yes. Our Self-Hosted model allows you to deploy the entire EdOS on your institution\'s internal servers, ensuring absolute data control and zero third-party cloud dependence.' },
  { question: 'Do you support custom domains and white-labeling?', answer: 'Yes. With our White-Label model, you can map portals to your own domain names (e.g. portal.yourschool.edu) and run native apps under your own developer accounts.' },
  { question: 'Do you provide native mobile apps?', answer: 'Yes. We deploy native apps for Parents, Teachers, Students, Administrators, and Drivers on both the Apple App Store and Google Play Store.' },
  { question: 'Can we migrate from our existing ERP without downtime?', answer: 'Yes. NeelStack provides end-to-end data migration. Our engineering team securely transfers student directories, billing archives, and grading cards from your legacy software.' },
  { question: 'How is student data protected under DPDP Act 2023?', answer: 'DhruvaOS complies with Section 9 of India\'s Digital Personal Data Protection Act (DPDP) 2023. We employ bank-grade AES-256 encryption at rest, TLS 1.3 in transit, role-based access gates, and parental consent audit trails.' }
]

export default function DhruvaOSPage() {
  return (
    <MarketingLayout>
      {/* SoftwareApplication JSON-LD */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'DhruvaOS',
          operatingSystem: 'Web, iOS, Android',
          applicationCategory: 'EducationalApplication',
          description:
            'Unified AI-powered operating system for schools, colleges, and universities managing admissions, academics, fee invoices, analytics, and parent communications.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
          },
          provider: {
            '@type': 'Organization',
            name: 'NeelStack',
            url: getSiteUrl(),
          },
        }}
      />

      {/* ─── Hero Section ──────────────────────────────────────────────────────── */}
      <section className="relative pt-16 pb-8 sm:pt-20 sm:pb-10 overflow-hidden bg-transparent">
        <Container className="relative z-10 text-center space-y-6 sm:space-y-7">
          {/* Breadcrumbs */}
          <div className="flex justify-center">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'DhruvaOS' }]} />
          </div>

          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Ready for Launch &middot; Pilot School Onboarding Open
            </span>
          </div>

          {/* Heading Pitch */}
          <div className="max-w-4xl mx-auto space-y-3">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground">
              DhruvaOS &mdash; School <br />
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Operating System
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              DhruvaOS is NeelStack&apos;s unified school operating system. A complete digital infrastructure designed for school onboarding, admin setup, official website CMS, cross-platform apps, and intelligent AI workflows.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-1">
            <Button asChild variant="3d-yellow" size="lg" className="rounded-xl font-bold">
              <Link href="/contact?product=dhruvaos#contact-form">
                Join Pilot Program
              </Link>
            </Button>
            <Button asChild variant="3d-secondary" size="lg" className="rounded-xl font-bold">
              <Link href="/book-consultation">
                Book Architecture Walkthrough
              </Link>
            </Button>
          </div>
          <p className="text-xs font-mono text-muted-foreground/80">
            Dedicated portal <span className="text-primary font-semibold">dhruvaos.com</span> launching 2 October 2026
          </p>

          {/* Clean Overview Stat Strip — Zero Boxed Cards */}
          <div className="max-w-3xl mx-auto grid grid-cols-3 divide-x divide-border/60 py-3 sm:py-4 border-y border-border/60">
            <div className="text-center px-3">
              <span className="font-mono text-base sm:text-lg font-bold text-foreground">2 Oct 2026</span>
              <p className="text-[10px] text-muted-foreground uppercase mt-0.5">Demo Launch</p>
            </div>
            <div className="text-center px-3">
              <span className="font-mono text-base sm:text-lg font-bold text-foreground">4 Core Pillars</span>
              <p className="text-[10px] text-muted-foreground uppercase mt-0.5">24 Integrated Modules</p>
            </div>
            <div className="text-center px-3">
              <span className="font-mono text-base sm:text-lg font-bold text-foreground">Multi-Tenant</span>
              <p className="text-[10px] text-muted-foreground uppercase mt-0.5">Enterprise Architecture</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── System Architecture & Foundation (Unified 3-Tier Blueprint) ────────── */}
      <section className="py-8 sm:py-10 bg-muted/20 border-y border-border/50" aria-labelledby="topology-heading">
        <Container className="space-y-6 sm:space-y-7">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono">
              Foundation Architecture
            </p>
            <h2 id="topology-heading" className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Enterprise Monorepo Topology
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Engineered as a unified Turborepo orchestrating 6 frontend clients, 3 asynchronous backend services, and a hardened database vault.
            </p>
          </div>

          {/* 3-Tier Monorepo Architecture Blueprint — Zero 3D Boxes */}
          <div className="max-w-5xl mx-auto border border-border/70 rounded-2xl bg-card/60 divide-y md:divide-y-0 md:divide-x divide-border/70 grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            {/* Tier 1: Clients */}
            <div className="p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                <Laptop className="h-4 w-4 text-foreground" />
                <span>Tier 1: Frontend Clients</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="font-bold text-foreground">Web Portal: </span>
                  <span className="text-muted-foreground">Next.js 16 + React 19 institutional administration console.</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Admin Plane: </span>
                  <span className="text-muted-foreground">Vite + React 19 super-admin dashboard for global tenant control.</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Desktop Client: </span>
                  <span className="text-muted-foreground">Tauri 2.0 cross-platform application with offline local caching.</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Mobile App: </span>
                  <span className="text-muted-foreground">Capacitor 7 with Yjs real-time collaborative synchronization.</span>
                </div>
              </div>
            </div>

            {/* Tier 2: Microservices */}
            <div className="p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                <Server className="h-4 w-4 text-foreground" />
                <span>Tier 2: Backend Services</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="font-bold text-foreground">Core API: </span>
                  <span className="text-muted-foreground">FastAPI Python 3.13 managing multi-tenant academic logic.</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">AI Gateway: </span>
                  <span className="text-muted-foreground">pgvector RAG, SSE streaming, and frontier model orchestration.</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Licensing &amp; Billing: </span>
                  <span className="text-muted-foreground">FastAPI with Stripe/Razorpay and automated GST e-invoicing.</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Worker Queues: </span>
                  <span className="text-muted-foreground">Celery + Redis asynchronous tasks for report card generation.</span>
                </div>
              </div>
            </div>

            {/* Tier 3: Data & Security */}
            <div className="p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                <Database className="h-4 w-4 text-foreground" />
                <span>Tier 3: Security &amp; Vault</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="font-bold text-foreground">Database Vault: </span>
                  <span className="text-muted-foreground">PostgreSQL 16 with Row-Level Security (RLS) tenant isolation.</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Identity &amp; Auth: </span>
                  <span className="text-muted-foreground">Zitadel OIDC/SAML, dynamic JWKS verification, and WebAuthn.</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Storage Engine: </span>
                  <span className="text-muted-foreground">S3-compatible object storage with AES-256 client-side encryption.</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Audit Trail: </span>
                  <span className="text-muted-foreground">Append-only compliance log capturing all administrative edits.</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Orchestrate Your Academy (Master-Detail Feature Showcase) ─────────── */}
      <section className="py-8 sm:py-10" aria-labelledby="orchestrate-heading">
        <Container className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono">
              Administrative Command Center
            </p>
            <h2 id="orchestrate-heading" className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Orchestrate Your Academy with Unified Digital Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              DhruvaOS eliminates disconnected spreadsheets. Monitor attendance, manage fees, run payroll, and inspect institutional health from one console.
            </p>
          </div>

          {/* 2-Column Clean Capability Showcase */}
          <div className="border border-border/70 rounded-2xl bg-card/60 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-foreground">Real-Time Operational Indicators</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    Live telemetry across active student enrollment, staff attendance, fee collection velocity, and campus alerts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-foreground">One-Click Administrative Workflows</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    Instantly admit students, generate tuition invoices, record biometric exceptions, and publish circulars.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-foreground">Automated HR &amp; Faculty Payroll</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    Consolidate teaching hours, leave allowances, deductions, and generate compliant monthly salary slips.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-foreground">Granular Role-Based Permissions</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    Establish custom access scopes for Directors, Principals, Accountants, Teachers, and Department Heads.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-foreground">Audit-Ready Activity Logging</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    Every grade change, fee concession, and record modification is recorded with immutable user timestamps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-foreground">Predictive Risk Telemetry</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    Intelligent models highlight academic dropout patterns, fee collection arrears, and attendance declines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-1">
            <Button asChild variant="3d-yellow" size="lg" className="rounded-xl font-bold">
              <Link href="/contact?product=dhruvaos#contact-form">
                Book a Live Product Demonstration <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* ─── Categorized Feature Directory (Replaced 24-Card Wall) ─────────────── */}
      <section className="py-8 sm:py-10 bg-muted/20 border-y border-border/50" aria-labelledby="features-directory-heading">
        <Container className="space-y-6 sm:space-y-7">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono">
              Comprehensive Operations
            </p>
            <h2 id="features-directory-heading" className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              One Platform. Every Educational Workflow.
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Replace dozens of fragmented, slow software tools with a single integrated operating system.
            </p>
          </div>

          {/* Interactive Categorized Directory Component */}
          <DhruvaOSFeatureDirectory />
        </Container>
      </section>

      {/* ─── Deep Cognitive Automation (Unified 3-Pillar AI Matrix) ───────────── */}
      <section className="py-8 sm:py-10" aria-labelledby="ai-matrix-heading">
        <Container className="space-y-6 sm:space-y-7 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border/70 text-xs font-mono text-muted-foreground">
              <Bot className="h-3.5 w-3.5 text-foreground" />
              <span>AI-Native Operations</span>
            </div>
            <h2 id="ai-matrix-heading" className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Deep Cognitive Automation
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Instead of an isolated chatbot, DhruvaOS embeds contextual AI tools directly within everyday institutional workflows.
            </p>
          </div>

          {/* 3-Pillar AI Spec Matrix — Zero Neon Cards */}
          <div className="border border-border/70 rounded-2xl bg-card/60 divide-y md:divide-y-0 md:divide-x divide-border/70 grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            {AI_PILLARS.map((pillar) => (
              <div key={pillar.title} className="p-5 sm:p-6 space-y-4">
                <div>
                  <h3 className="text-sm font-bold font-heading text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-border/60">
                  {pillar.items.map((item) => (
                    <div key={item.name} className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3 text-muted-foreground shrink-0" />
                        <span className="text-xs font-semibold text-foreground">{item.name}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed pl-4.5">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Platform For Everyone (Interactive Role Showcase — Replaced 9 Cards) ─ */}
      <section className="py-8 sm:py-10 bg-muted/20 border-y border-border/50" aria-labelledby="personas-heading">
        <Container className="space-y-6 sm:space-y-7">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono">
              Role-Specific Interfaces
            </p>
            <h2 id="personas-heading" className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              One Interface, Tailored for Everyone
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every stakeholder accesses a dedicated portal connected to the same real-time ledger.
            </p>
          </div>

          {/* Interactive Role Showcase */}
          <DhruvaOSRoleShowcase />
        </Container>
      </section>

      {/* ─── Flexible Deployment Models (Unified Comparison Matrix) ─────────────── */}
      <section className="py-8 sm:py-10" aria-labelledby="deployments-heading">
        <Container className="space-y-6 sm:space-y-7 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono">
              Infrastructure Options
            </p>
            <h2 id="deployments-heading" className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Flexible Deployment Models
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Choose the architecture that matches your regulatory, branding, and data sovereignty requirements.
            </p>
          </div>

          {/* 4-Column Deployment Comparison Matrix */}
          <div className="border border-border/70 rounded-2xl bg-card/60 divide-y sm:divide-y-0 sm:divide-x divide-border/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
            {DEPLOYMENTS.map((dep) => (
              <div key={dep.model} className="p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-muted-foreground/80 bg-muted/40 px-2 py-0.5 rounded border border-border/50 inline-block">
                    {dep.tag}
                  </span>
                  <h3 className="text-sm font-bold text-foreground">
                    {dep.model}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {dep.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground space-y-1">
                  <div>{dep.dataOwnership}</div>
                  <div className="text-foreground/90 font-semibold">{dep.sla}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Enterprise Security & Compliance Bar ─────────────────────────────── */}
      <section className="py-8 sm:py-10 bg-muted/20 border-y border-border/50" aria-labelledby="security-heading">
        <Container className="space-y-6 sm:space-y-7 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono">
              Regulatory Compliance
            </p>
            <h2 id="security-heading" className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Institutional Security &amp; DPDP Act 2023
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Strictly engineered to comply with Section 9 of India&apos;s Digital Personal Data Protection Act 2023 for student data.
            </p>
          </div>

          <div className="border border-border/70 rounded-2xl bg-card/60 divide-y sm:divide-y-0 sm:divide-x divide-border/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
            <div className="p-5 space-y-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50 border border-border/70 text-foreground/80">
                <Key className="h-4 w-4" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Role-Based Access (RBAC)</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Granular permissions restrict student records, exam marks, and financial data by role.
              </p>
            </div>

            <div className="p-5 space-y-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50 border border-border/70 text-foreground/80">
                <Lock className="h-4 w-4" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Bank-Grade Encryption</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                AES-256 encryption at rest and TLS 1.3 in transit protect all sensitive institutional data.
              </p>
            </div>

            <div className="p-5 space-y-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50 border border-border/70 text-foreground/80">
                <FileText className="h-4 w-4" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Tamper-Proof Audit Logs</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Every administrative edit and grade modification is captured in an append-only audit trail.
              </p>
            </div>

            <div className="p-5 space-y-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50 border border-border/70 text-foreground/80">
                <Database className="h-4 w-4" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Automated Hourly Backups</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Encrypted database archives are backed up hourly with automated point-in-time recovery.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Seamless Infrastructure Integrations ─────────────────────────────── */}
      <section className="py-8 sm:py-10" aria-labelledby="integrations-heading">
        <Container className="space-y-6 sm:space-y-7 max-w-4xl mx-auto text-center">
          <div className="space-y-2">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono">
              Ecosystem Connectivity
            </p>
            <h2 id="integrations-heading" className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Seamless Hardware &amp; API Integrations
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Connect DhruvaOS with payment gateways, campus biometric hardware, and existing office suites.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
            {[
              { title: 'Payment Gateways', desc: 'Razorpay, Stripe, UPI, and net banking.' },
              { title: 'Messaging APIs', desc: 'Twilio WhatsApp API, broadcast SMS & voice.' },
              { title: 'Workplace Suites', desc: 'Google Workspace & Microsoft 365 OIDC.' },
              { title: 'Biometric Hardware', desc: 'Fingerprint scanners & RFID smart cards.' },
              { title: 'Fleet Telemetry', desc: 'Live vehicular GPS and route tracking.' },
              { title: 'Developer REST API', desc: 'OpenAPI 3.1 endpoints for custom databases.' },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-xl border border-border/70 bg-card/40 space-y-1">
                <h4 className="text-xs font-bold text-foreground">{item.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── FAQ Accordion Section ────────────────────────────────────────────── */}
      <section className="py-8 sm:py-10 bg-muted/20 border-t border-border/50" aria-labelledby="faq-heading">
        <Container className="max-w-3xl mx-auto space-y-6 sm:space-y-7">
          <div className="text-center space-y-2">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono">
              Institutional Inquiries
            </p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Common questions regarding pilot onboarding, server deployment, and data migration.
            </p>
          </div>

          <FAQAccordion items={FAQ_ITEMS} />
        </Container>
      </section>

      {/* ─── Final CTA ────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 border-t border-border/50 bg-card/60">
        <Container className="text-center space-y-5 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
            Ready to Modernize Your Educational Institution?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Schedule an architectural demonstration with our solution engineers or register as an early Pilot School partner today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Button asChild variant="3d-yellow" size="lg" className="rounded-xl font-bold">
              <Link href="/contact?product=dhruvaos#contact-form">
                Apply for Pilot Program
              </Link>
            </Button>
            <Button asChild variant="3d-secondary" size="lg" className="rounded-xl font-bold">
              <Link href="/book-consultation">
                Book Architecture Walkthrough
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
