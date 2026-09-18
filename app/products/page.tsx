import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import { JsonLd } from '@/components/seo/json-ld'
import { getSiteUrl } from '@/lib/site-url'
import { Button } from '@/components/ui/button'
import {
  FileText,
  Zap,
  Bot,
  GraduationCap,
  Building,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Globe,
  CheckCircle2,
  Layers,
  Rocket,
  Clock,
  Sparkles,
  Workflow,
  Laptop,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Proprietary Software Products — DhruvaOS, ToolVines, AI Company OS | NeelStack India',
  description:
    'Explore NeelStack’s proprietary software ecosystem — ToolVines browser-native tools, DhruvaOS school operating system, AI Company OS multi-agent framework, NaukariMitra, and SarkariMitra.',
  keywords: [
    'NeelStack Products',
    'DhruvaOS School OS',
    'ToolVines Developer Tools',
    'AI Company Operating System',
    'NaukariMitra AI Exam Prep',
    'SarkariMitra Citizen Schemes',
    'Proprietary Software India',
  ],
  alternates: {
    canonical: '/products',
  },
}

// 5 Flagship & Planned Products Portfolio
const PORTFOLIO_PRODUCTS = [
  {
    id: 'toolvines',
    name: 'ToolVines',
    track: 'Track 1: Shipped & Scaling',
    badge: 'Live in Production',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    tagline: 'Browser-Native Developer & Productivity Platform',
    desc: 'Suite of 320+ developer utilities, document formatters, crypto engines, and media tools executing 100% client-side via Rust WebAssembly. Zero server uploads, zero telemetry.',
    icon: FileText,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    metrics: ['320+ Client-Side Tools', '0.00 KB Server Uploads', '100% Offline PWA'],
    href: '/products/toolvines',
    externalHref: 'https://toolvines.com',
  },
  {
    id: 'dhruvaos',
    name: 'DhruvaOS',
    track: 'Track 2: Ready for Launch',
    badge: 'Launch: 2 October 2026',
    badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    tagline: 'Unified School Operating System (EdOS)',
    desc: 'The modern AI-powered digital infrastructure for school administration, academic workflows, parent apps, teacher suites, multi-tenant databases, and institutional analytics.',
    icon: Zap,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/10',
    metrics: ['24 Core Feature Engines', '12 AI Workflow Modules', '4 Deployment Models'],
    href: '/products/dhruvaos',
  },
  {
    id: 'ai-company-os',
    name: 'AI Company Operating System',
    track: 'Track 4: Strategic Enterprise Framework',
    badge: 'R&D Framework & Whitepaper v1.0',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    tagline: 'Autonomous Multi-Agent Workforce Platform',
    desc: 'Coordinating 11 specialized autonomous AI agents (AI CEO, CTO, CFO, COO, CMO, CRO, Product, Systems, QA, Research, Support) via Model Context Protocol (MCP) and LangGraph under human governance.',
    icon: Bot,
    iconColor: 'text-cyan-500',
    iconBg: 'bg-cyan-500/10',
    metrics: ['11 Specialized Agents', 'MCP Schema mesh', 'LangGraph State Machines'],
    href: '/products/ai-company-os',
  },
  {
    id: 'naukarimitra',
    name: 'NaukariMitra',
    track: 'Track 3: Civic & EdTech Intelligence',
    badge: 'Phase 3 Roadmap · Planned',
    badgeColor: 'border-teal-500/30 bg-teal-500/10 text-teal-400',
    tagline: 'AI-Powered Government Exam Companion',
    desc: 'Democratizing competitive exam preparation for over 3 Crore Indian aspirants across UPSC, SSC, Banking, Railways, and State PSCs through multilingual syllabus RAG and adaptive mock tests.',
    icon: GraduationCap,
    iconColor: 'text-teal-500',
    iconBg: 'bg-teal-500/10',
    metrics: ['50+ Exam Knowledge Graphs', '8+ Vernacular Languages', '100% Ad-Free'],
    href: '/products/naukarimitra',
  },
  {
    id: 'sarkarimitra',
    name: 'SarkariMitra',
    track: 'Track 3: Civic & EdTech Intelligence',
    badge: 'Phase 3 Roadmap · Planned',
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    tagline: 'AI Citizen Assistance & Scheme Navigator',
    desc: 'Bridging the welfare information gap for 140 Crore citizens. Plain-language conversational eligibility checks, dialect voice queries, document checklists, and scam-free official redirection.',
    icon: Building,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-500/10',
    metrics: ['1,500+ Welfare Schemes', 'Voice-First Dialects', '100% .gov.in Redirection'],
    href: '/products/sarkarimitra',
  },
]

// Technical Capability Comparison Matrix
const CAPABILITY_MATRIX = [
  {
    product: 'ToolVines',
    runtime: 'Rust WASM + React 19 + PWA',
    target: 'Global Developers & Engineers',
    highlight: '100% Client-Side In-Memory WASM; 0 Bytes Uploaded',
    privacy: 'Zero Telemetry / No Database Retention',
    status: 'Live in Production',
  },
  {
    product: 'DhruvaOS',
    runtime: 'Turborepo + FastAPI + Postgres 16',
    target: 'K-12, Colleges & University Trusts',
    highlight: 'Shared schema RLS isolation, 12 AI modules, DPDP 2023',
    privacy: 'AES-256 at Rest / Role-Based RBAC',
    status: 'Launching 2 Oct 2026',
  },
  {
    product: 'AI Company OS',
    runtime: 'LangGraph + MCP Mesh + LiteLLM',
    target: 'Enterprises & Tech Leadership',
    highlight: '11 autonomous agent squads, cyclic state graphs, GraphRAG',
    privacy: 'Human-in-the-Loop Multi-Tier Authorization',
    status: 'R&D Framework / Whitepaper',
  },
  {
    product: 'NaukariMitra',
    runtime: 'FastAPI + pgvector + Bhashini AI',
    target: '3 Crore+ Indian Exam Aspirants',
    highlight: '50+ exam syllabus vector RAG & adaptive mock tests',
    privacy: 'Zero Student Data Monetization / Ad-Free',
    status: 'Planned (Phase 3 Roadmap)',
  },
  {
    product: 'SarkariMitra',
    runtime: 'Knowledge Graph + Multilingual Voice',
    target: '140 Crore Indian Citizens',
    highlight: 'Conversational eligibility & authentic .gov.in shield',
    privacy: 'Zero PII Retention / Ephemeral Sessions',
    status: 'Planned (Phase 3 Roadmap)',
  },
]

export default function ProductsPage() {
  return (
    <MarketingLayout>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'NeelStack Proprietary Software Products',
          description:
            'Explore NeelStack’s proprietary software ecosystem — ToolVines browser-native tools, DhruvaOS school operating system, AI Company OS multi-agent framework, NaukariMitra, and SarkariMitra.',
          url: `${getSiteUrl()}/products`,
          provider: {
            '@type': 'Organization',
            name: 'NeelStack Solutions Private Limited',
            url: getSiteUrl(),
          },
        }}
      />

      {/* ─── Hero Section ────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-transparent">
        {/* Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-cyan-500/8 rounded-full blur-[110px] pointer-events-none" />

        <Container className="relative z-10 text-center space-y-8">
          {/* Breadcrumb */}
          <div className="flex justify-center">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Products' },
              ]}
            />
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-primary">
              Proprietary Software &middot; Dogfooding in Production &middot; Multi-Engine Ecosystem
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground">
              Software We Build, Ship, and <br />
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Prove in Production
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We don’t just engineer custom software for clients &mdash; we prove our architecture, performance benchmarks, and security safeguards across our own proprietary platforms.
            </p>
          </div>

          {/* Metrics Strip */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 text-left">
            <div className="p-4 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-2 text-primary font-bold">
                <FileText className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">ToolVines</span>
              </div>
              <p className="text-xs text-muted-foreground">320+ live client-side tools</p>
            </div>

            <div className="p-4 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-2 text-purple-400 font-bold">
                <Zap className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">DhruvaOS</span>
              </div>
              <p className="text-xs text-muted-foreground">School OS launching Oct 2</p>
            </div>

            <div className="p-4 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <Bot className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">AI Company OS</span>
              </div>
              <p className="text-xs text-muted-foreground">11-agent operating framework</p>
            </div>

            <div className="p-4 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">100% Verified</span>
              </div>
              <p className="text-xs text-muted-foreground">Clean domain-driven tech</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 4-Track Product Portfolio Cards ────────────────────────────────────── */}
      <Section className="bg-card/40 backdrop-blur-sm border-y border-border/40">
        <Container className="space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              Product Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Multi-Track Proprietary Software Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Spanning live developer platforms, enterprise operating systems, and civic intelligence engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PORTFOLIO_PRODUCTS.map((prod) => {
              const IconComp = prod.icon
              return (
                <div
                  key={prod.id}
                  className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-primary/40 hover:shadow-xl transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${prod.iconBg} ${prod.iconColor} border border-border/60 group-hover:scale-105 transition-transform`}>
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${prod.badgeColor}`}>
                        {prod.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                        {prod.track}
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-xs font-semibold text-primary/90">
                        {prod.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {prod.desc}
                    </p>

                    <ul className="space-y-1.5 pt-2 border-t border-border/50">
                      {prod.metrics.map((m) => (
                        <li key={m} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Button asChild className="glow-cta font-bold flex-1">
                      <Link href={prod.href} className="gap-2 justify-center">
                        Explore Full Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    {prod.externalHref && (
                      <Button asChild variant="outline" size="icon" className="shrink-0" title="Open Live Platform">
                        <a href={prod.externalHref} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* ─── Technical Capability Comparison Matrix ─────────────────────────────── */}
      <section className="py-8 sm:py-10 md:py-12 border-b border-border/40 bg-transparent">
        <Container className="space-y-6 sm:space-y-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              Technical Matrix
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
              Cross-Product Engineering Architecture
            </h2>
            <p className="text-sm text-muted-foreground">
              Transparent evaluation of our stack choices, data isolation boundaries, and privacy safeguards.
            </p>
          </div>

          <div className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur-md p-6 sm:p-8 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-border text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    <th className="py-3.5 px-4">Product Name</th>
                    <th className="py-3.5 px-4">Stack / Runtime</th>
                    <th className="py-3.5 px-4">Target Market</th>
                    <th className="py-3.5 px-4">Architecture Highlights</th>
                    <th className="py-3.5 px-4">Privacy &amp; Security</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {CAPABILITY_MATRIX.map((row) => (
                    <tr key={row.product} className="hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-4 font-bold text-foreground whitespace-nowrap">
                        {row.product}
                      </td>
                      <td className="py-4 px-4 font-mono text-primary/80 text-[11px]">
                        {row.runtime}
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">
                        {row.target}
                      </td>
                      <td className="py-4 px-4 text-foreground font-medium">
                        {row.highlight}
                      </td>
                      <td className="py-4 px-4 text-emerald-500 font-medium">
                        {row.privacy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Why NeelStack Builds Proprietary Software ──────────────────────────── */}
      <Section className="bg-card/40 backdrop-blur-sm border-b border-border/40">
        <Container className="space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Why We Build Our Own Products
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Our proprietary platforms act as high-velocity proving grounds for our engineering methods.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Dogfooding in Production',
                icon: Rocket,
                desc: 'We test our multi-agent workflows, Next.js optimization patterns, and WASM compilation pipelines under real production traffic before recommending them to clients.',
              },
              {
                title: 'Clean-Sheet Domain Design',
                icon: Layers,
                desc: 'Every product is built from first principles using clean domain-driven models, strict schema validation, and zero legacy technical debt.',
              },
              {
                title: 'Enterprise Reusability',
                icon: Workflow,
                desc: 'Components, authentication gateways, and vector retrieval pipelines developed for our products are hardened and packaged for enterprise client delivery.',
              },
            ].map((principle) => {
              const IconComp = principle.icon
              return (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 space-y-3 hover:border-primary/30 transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground">{principle.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{principle.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* ─── Pre-Footer CTA ──────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-card to-surface text-center">
        <Container className="max-w-3xl space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
            Need a Custom Proprietary Product Built for Your Enterprise?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We engineer bespoke software platforms, internal ERPs, and specialized multi-agent operating systems with full source code ownership.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="glow-cta px-8 font-bold">
              <Link href="/contact" className="gap-2">
                Start a Product Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-7 font-bold">
              <Link href="/services">View Engineering Services</Link>
            </Button>
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
