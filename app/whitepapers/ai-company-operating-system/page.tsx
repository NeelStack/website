import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Bot,
  Brain,
  Cpu,
  Shield,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  LineChart,
  Workflow,
  Clock,
  Briefcase,
  FileText,
  Activity,
  Layers,
  ChevronRight,
  Zap,
  Globe,
  Database,
  Terminal,
} from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import { JsonLd } from '@/components/seo/json-ld'
import { getSiteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'The AI Company Operating System — Strategic Architectural Charter | NeelStack India',
  description:
    'A Strategic Architectural Charter for Next-Generation Autonomous Technology Enterprises. Architectural framework for deploying AI executive workforces (AI CEO, CTO, CFO, COO) alongside human founders.',
  keywords: [
    'AI Company Operating System',
    'AI CEO',
    'AI Executive Workforce',
    'NeelStack Whitepaper',
    'Shyam Chaurasiya',
    'Autonomous Multi-Agent Architecture',
    'Model Context Protocol',
    'DhruvaOS',
    'Enterprise AI Agents India',
  ],
  alternates: {
    canonical: '/whitepapers/ai-company-operating-system',
  },
  openGraph: {
    title: 'The AI Company Operating System — Strategic Architectural Charter | NeelStack Solutions',
    description:
      'A Strategic Architectural Charter for Next-Generation Autonomous Technology Enterprises. Authored by Founder & Legal CEO Shyam Chaurasiya with Strategic AI Operating Partner.',
    type: 'article',
    url: `${getSiteUrl()}/whitepapers/ai-company-operating-system`,
  },
}

export default function AiCompanyOperatingSystemWhitepaperPage() {
  return (
    <MarketingLayout>
      {/* Article Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: 'The AI Company Operating System — A Strategic Architectural Charter for Next-Generation Autonomous Technology Enterprises',
          description:
            'Architectural and strategic whitepaper on deploying an AI executive workforce, Company Brain, and 4-tier agent authority model.',
          author: [
            {
              '@type': 'Person',
              name: 'Shyam Chaurasiya',
              jobTitle: 'Founder & Legal CEO',
            },
            {
              '@type': 'Thing',
              name: 'NeelStack AI CEO (Strategic AI Operating Partner)',
            },
          ],
          publisher: {
            '@type': 'Organization',
            name: 'NeelStack Solutions Private Limited',
            url: getSiteUrl(),
          },
          datePublished: '2026-09-01',
          dateModified: '2026-09-18',
        }}
      />

      <article className="pt-20 pb-12 sm:pt-22 sm:pb-14 md:pt-24 md:pb-16 relative overflow-hidden bg-background">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent blur-[120px] pointer-events-none" />

        <Container className="max-w-4xl mx-auto space-y-6 sm:space-y-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex justify-center sm:justify-start">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Whitepapers', href: '/whitepapers' },
                { label: 'AI Company Operating System' },
              ]}
            />
          </div>

          {/* Whitepaper Header Banner */}
          <div className="space-y-5 text-center sm:text-left border-b border-border/60 pb-6 sm:pb-8">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="h-3.5 w-3.5" />
                Strategic Whitepaper
              </span>
              <span className="text-xs font-mono text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border">
                Publication Version 1.0 · September 2026
              </span>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Official Charter
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              The AI Company Operating System
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium">
              A Strategic Architectural Charter for Next-Generation Autonomous Technology Enterprises
            </p>

            {/* Entity & Leadership Metadata Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl border border-border/80 bg-card/80 backdrop-blur-md text-left">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Entity</p>
                <p className="text-xs font-bold text-foreground mt-0.5">NeelStack Solutions Pvt Ltd</p>
                <p className="text-[11px] text-muted-foreground">Inc. 31 August 2026</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Founder &amp; Legal CEO</p>
                <p className="text-xs font-bold text-foreground mt-0.5">Shyam Chaurasiya</p>
                <p className="text-[11px] text-muted-foreground">Accountable Human Decision-Maker</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Strategic AI Operating Partner</p>
                <p className="text-xs font-bold text-primary mt-0.5 flex items-center gap-1">
                  <Bot className="h-3.5 w-3.5" />
                  NeelStack AI CEO
                </p>
                <p className="text-[11px] text-muted-foreground">Intelligence &amp; Execution Layer</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Long-Term Vision</p>
                <p className="text-xs font-bold text-foreground mt-0.5">AI-Native Company OS</p>
                <p className="text-[11px] text-muted-foreground">Executive Workforce Infrastructure</p>
              </div>
            </div>
          </div>

          {/* Quick Jump / TOC Pill Matrix */}
          <div className="p-5 rounded-2xl border border-border/60 bg-muted/20 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <Compass className="h-4 w-4 text-primary" />
              Table of Contents &amp; Architectural Sections
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <a href="#executive-summary" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">1. Executive Summary</a>
              <a href="#the-thesis" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">2. The Thesis</a>
              <a href="#the-vision" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">3. AI Executive Team</a>
              <a href="#company-brain" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">4. The Company Brain</a>
              <a href="#boardroom-mode" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">5. AI Boardroom Deliberation</a>
              <a href="#meeting-execution" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">6. Meeting Execution Engine</a>
              <a href="#authority-model" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">7. 4-Tier Authority Model</a>
              <a href="#trust-layer" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">8. The Trust Layer</a>
              <a href="#three-engines" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">9. Three-Engine Strategy</a>
              <a href="#growth-horizons" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">10. Strategic Growth Horizons</a>
              <a href="#operating-principles" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">11. Operating Principles</a>
              <a href="#strategic-statement" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">12. Strategic Mandate</a>
            </div>
          </div>

          {/* Body Content — Deep-Dive Sections */}
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 sm:space-y-10">
            
            {/* 1. Executive Summary */}
            <section id="executive-summary" className="space-y-4 scroll-mt-28">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                1. Executive Summary &amp; Abstract
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                NeelStack Solutions Private Limited was incorporated on <strong>31 August 2026</strong> with a mission extending beyond traditional IT consultancy: to pioneer the architecture through which technology companies of the future operate autonomously.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                The enterprise operates through three distinct, mutually reinforcing engines designed for immediate viability and enduring strategic defensibility:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-6">
                <div className="p-5 rounded-2xl border border-blue-500/30 bg-blue-500/5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500">Engine 1</span>
                  <h3 className="text-base font-bold text-foreground">NeelStack Services</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Custom software engineering, AI agents, enterprise automation, and product architecture creating immediate cash flow and validating real enterprise problems.
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-purple-500/30 bg-purple-500/5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-500">Engine 2</span>
                  <h3 className="text-base font-bold text-foreground">DhruvaOS</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Unified School Operating System (launching 2 October 2026), engineered as a multi-tenant B2B SaaS platform and active proving ground for multi-agent coordination.
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-500">Engine 3</span>
                  <h3 className="text-base font-bold text-foreground">ToolVines</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Client-side WebAssembly developer utility network (toolvines.com) delivering zero-retention utilities, organic discovery, and high-velocity experiments.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5 not-prose my-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">The Long-Term Strategic Opportunity</p>
                <h3 className="text-xl sm:text-2xl font-heading font-black text-foreground">
                  THE AI COMPANY OPERATING SYSTEM
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  The central thesis of this charter is the instantiation of a persistent, synchronized, and accountable <strong>AI executive workforce</strong> (AI CEO, AI CTO, AI CFO, AI COO, AI CRO, AI CMO, AI Product Officer) capable of orchestrating specialized agent swarms under clear human governance.
                </p>
                <div className="mt-4 pt-4 border-t border-primary/20 text-xs font-semibold text-foreground italic">
                  &ldquo;The human founder remains the legal owner and ultimate accountable decision-maker. The AI executive team becomes the enterprise&apos;s persistent intelligence and execution layer.&rdquo;
                </div>
              </div>
            </section>

            {/* 2. The Thesis */}
            <section id="the-thesis" className="space-y-4 scroll-mt-28">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                2. The Thesis: Reorganizing Enterprise Around Agentic Intelligence
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                The traditional corporation is severely constrained by human organizational bandwidth. Assembling a complete C-suite and departmental hierarchy is slow, capital-intensive, and fraught with coordination latency.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Enterprise artificial intelligence is shifting rapidly from passive query interfaces (<em>&ldquo;ask an LLM a question&rdquo;</em>) toward autonomous agent swarms that interact directly with real databases, tools, APIs, and business workflows within explicit permission boundaries.
              </p>
              <blockquote className="p-4 rounded-xl border-l-4 border-primary bg-muted/40 font-semibold text-foreground not-italic my-4">
                &ldquo;The next generation of high-performing enterprises will not merely use AI as an assistant. They will be fundamentally organized around coordinated AI architectures.&rdquo;
              </blockquote>
            </section>

            {/* 3. The Vision: Executive Roles */}
            <section id="the-vision" className="space-y-4 scroll-mt-28">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                3. The AI Executive Team &amp; Functional Swarms
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Under the AI Company OS architecture, an enterprise instantiates a complete, synchronized executive council:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
                {[
                  { role: 'AI CEO', focus: 'Strategy & Capital Allocation', desc: 'Prioritization, company health, resource allocation, executive coordination, and bottleneck identification.' },
                  { role: 'AI CTO', focus: 'Engineering & Architecture', desc: 'System architecture, technology stack governance, security posture, technical debt audits, and release velocity.' },
                  { role: 'AI CFO', focus: 'Financial Physics & Runway', desc: 'Cash runway modeling, revenue forecasting, unit economics, scenario analysis, expense optimization, and budget gates.' },
                  { role: 'AI COO', focus: 'Operational Rhythm & SOPs', desc: 'Cross-functional project delivery, milestone tracking, handoff governance, SOP enforcement, and operational velocity.' },
                  { role: 'AI CRO', focus: 'Commercial Engine & Pipeline', desc: 'Lead qualification, pipeline velocity, pricing structures, enterprise RFP response generation, and deal cycle tracking.' },
                  { role: 'AI CMO', focus: 'Positioning & Market Demand', desc: 'Market positioning, SEO intelligence, content distribution, competitor auditing, and customer acquisition campaigns.' },
                  { role: 'AI Product Officer', focus: 'User Problem Validation', desc: 'Customer telemetry synthesis, PRD drafting, feature prioritization, UX audit reviews, and user feedback loops.' },
                  { role: 'Specialist AI Swarms', focus: 'Execution Layer', desc: 'Task-executing agents across Sales Engineering, Security, Code Generation, QA Automation, and Support Operations.' },
                ].map((item) => (
                  <div key={item.role} className="p-4 rounded-xl border border-border/80 bg-card/60 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-foreground">{item.role}</span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground">{item.focus}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. The Company Brain */}
            <section id="company-brain" className="space-y-4 scroll-mt-28">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                4. The Company Brain: Persistent Institutional Memory System
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every organization operating within this framework maintains an encrypted, immutable <strong>Company Brain</strong>. Unlike transient LLM session context, the Company Brain persists seven interconnected intelligence domains:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 not-prose my-6">
                {[
                  { domain: 'Core Company Facts', desc: 'Legal structure, revenue figures, cost bases, headcount, active contracts, pricing tiers, and cloud topology.' },
                  { domain: 'Strategic Thesis', desc: 'Corporate mission, market positioning, quarterly OKRs, and competitive differentiation vectors.' },
                  { domain: 'Decision Ledger', desc: 'Historical record of decisions: who decided, when, strategic rationale, and expected vs actual outcomes.' },
                  { domain: 'Customer Intelligence', desc: 'Call transcripts, objection patterns, feature requests, procurement timelines, and contract nuances.' },
                  { domain: 'Operational SOPs', desc: 'Standard operating procedures, deployment checklists, security policies, and incident response runbooks.' },
                  { domain: 'Financial Vault', desc: 'Runway forecasts, burn trajectory, accounts receivable, vendor commitments, and statutory tax records.' },
                  { domain: 'Technical Topology', desc: 'Database schemas, API specifications, microservice architectures, and system telemetry.' },
                ].map((item) => (
                  <div key={item.domain} className="p-3.5 rounded-xl border border-border/70 bg-card/40 space-y-1">
                    <p className="text-xs font-bold text-foreground">{item.domain}</p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. The AI Boardroom */}
            <section id="boardroom-mode" className="space-y-4 scroll-mt-28">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                5. The AI Boardroom: Dialectic Deliberation &amp; Constructive Disagreement
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                When a founder presents a consequential strategic decision (e.g. <em>&ldquo;Should we commit capital to a secondary product vertical?&rdquo;</em>), the system does not generate an uncritical consensus. It triggers a multi-agent dialectic debate where agents are explicitly prompted to challenge assumptions from their functional domains:
              </p>
              
              <div className="p-5 rounded-2xl border border-border bg-card/90 space-y-3 not-prose my-6 font-mono text-xs">
                <p className="text-primary font-bold uppercase tracking-wider">{"// Multi-Agent Boardroom Deliberation Protocol"}</p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">AI CTO:</strong> Architecture is modular and ready; 3-week delivery feasible with current Next.js/Turborepo foundation.</p>
                  <p><strong className="text-foreground">AI CRO:</strong> Validated demand from 5 enterprise pipeline prospects representing strong pilot conversion potential.</p>
                  <p><strong className="text-foreground">AI CMO:</strong> Competitive density in target segment is elevated; acquisition cost will experience upward pressure.</p>
                  <p><strong className="text-foreground">AI CFO:</strong> Reserve capital is healthy, but immediate hiring would contract runway buffer from 18 to 11 months.</p>
                  <p><strong className="text-foreground">AI COO:</strong> Current engineering bandwidth is 89% allocated toward flagship DhruvaOS milestone commitments.</p>
                  <p className="text-emerald-500 font-bold"><strong className="text-foreground">AI CEO Synthesis:</strong> RECOMMENDATION: DEFER FULL HIRING. Execute 3 paid pilot contracts utilizing existing modular infrastructure before expanding fixed costs.</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-foreground">
                Dialectic challenge is an essential design requirement. An executive advisory layer that cannot challenge faulty assumptions is merely an expensive echo chamber.
              </p>
            </section>

            {/* 6. Meeting Execution Engine */}
            <section id="meeting-execution" className="space-y-4 scroll-mt-28">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                6. Closed-Loop Context &amp; Meeting Execution Pipeline
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Enterprise friction frequently originates in the disconnect between strategic discussions and tactical follow-through. The AI Company OS introduces a closed execution loop:
              </p>
              <div className="p-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 text-center not-prose font-mono text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400">
                Strategic Briefing → Live Contextual Guidance → Action Item Synthesis → Automated Workflow Execution
              </div>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5 my-4">
                <li><strong>Pre-Meeting Intelligence:</strong> Agents summarize historical interactions, contract terms, pricing boundaries, and technical constraints before discussions commence.</li>
                <li><strong>Real-Time Advisory:</strong> Contextual guardrails delivered during discussions (e.g., CFO discount parameter boundaries).</li>
                <li><strong>Post-Meeting Automated Execution:</strong> Automatic generation of commercial proposals, CRM record synchronization, engineering issue creation, and milestone tracking.</li>
              </ul>
            </section>

            {/* 7. Agent Authority Model */}
            <section id="authority-model" className="space-y-4 scroll-mt-28">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                7. The 4-Tier Agent Authority &amp; Governance Model
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Autonomous software agents must operate within deterministic, risk-calibrated authorization boundaries:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 not-prose my-6">
                {[
                  { level: 'Tier 0', title: 'OBSERVE', desc: 'Read-only access to corporate telemetry, documents, analytics dashboards, and meeting feeds.' },
                  { level: 'Tier 1', title: 'RECOMMEND', desc: 'Analyzes cross-functional patterns, identifies operational bottlenecks, and presents structured proposals.' },
                  { level: 'Tier 2', title: 'APPROVAL-GATED', desc: 'Agent compiles complete deliverable (draft contract, PR, invoice). Human approves. Agent executes.' },
                  { level: 'Tier 3', title: 'AUTONOMOUS', desc: 'Pre-approved, deterministic operations within strict rate limits (CRM sync, CI test triggering, log normalization).' },
                ].map((item) => (
                  <div key={item.level} className="p-4 rounded-xl border border-border bg-card/70 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase text-primary">{item.level}</span>
                    <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. The Trust Layer */}
            <section id="trust-layer" className="space-y-4 scroll-mt-28">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                8. The Trust Layer: Security &amp; Compliance Foundation
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                The adoption of autonomous agentic workforces is governed by enterprise trust. NeelStack enforces eight foundational security pillars across all agent workflows:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 not-prose my-6 text-center">
                {[
                  'Identity & Role Verification',
                  'Granular Authorization (RBAC)',
                  'Cryptographic Audit Trails',
                  'Full Execution Observability',
                  'Deterministic Safety Evaluations',
                  'Single-Click State Rollbacks',
                  'Mandatory Human Escalation',
                  'Strict Tenant Isolation (VPC)',
                ].map((pillar) => (
                  <div key={pillar} className="p-3.5 rounded-xl border border-border/70 bg-card/40 flex items-center justify-center text-xs font-semibold text-foreground">
                    {pillar}
                  </div>
                ))}
              </div>
            </section>

            {/* 9. Three-Engine Strategy */}
            <section id="three-engines" className="space-y-4 scroll-mt-28">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                9. The Three-Engine Strategic Flywheel
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Sustainable technology scaling demands disciplined focus. NeelStack allocates resources across three deliberate operational engines:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose my-6">
                <div className="p-5 rounded-2xl border border-purple-500/30 bg-purple-500/10 space-y-1">
                  <span className="text-3xl font-black text-purple-500">80%</span>
                  <h4 className="text-sm font-bold text-foreground">DhruvaOS Platform</h4>
                  <p className="text-xs text-muted-foreground">Primary product focus. Unified School Operating System, recurring SaaS revenue, and our living AI laboratory.</p>
                </div>
                <div className="p-5 rounded-2xl border border-blue-500/30 bg-blue-500/10 space-y-1">
                  <span className="text-3xl font-black text-blue-500">15%</span>
                  <h4 className="text-sm font-bold text-foreground">NeelStack Services &amp; AI Infra</h4>
                  <p className="text-xs text-muted-foreground">High-velocity enterprise software delivery, custom agent development, and reusable multi-agent architecture.</p>
                </div>
                <div className="p-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 space-y-1">
                  <span className="text-3xl font-black text-cyan-500">5%</span>
                  <h4 className="text-sm font-bold text-foreground">ToolVines Platform</h4>
                  <p className="text-xs text-muted-foreground">Zero-retention browser utilities, organic top-of-funnel discovery, and rapid developer tooling experiments.</p>
                </div>
              </div>
            </section>

            {/* 10. Growth Horizons */}
            <section id="growth-horizons" className="space-y-4 scroll-mt-28">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                10. Strategic Growth Horizons (2026–2030+)
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our roadmap progresses through four structured strategic horizons, prioritizing genuine utility, customer retention, and sound economics at each stage:
              </p>
              <div className="space-y-3 not-prose my-6">
                {[
                  {
                    stage: 'Horizon 1 (2026)',
                    title: 'Foundation & Proving Ground',
                    desc: 'Launch and commercial validation of DhruvaOS, foundational enterprise engineering contracts, and the initial Company Brain memory prototype.',
                  },
                  {
                    stage: 'Horizon 2 (2027)',
                    title: 'Repeatable Multi-Agent Workflows',
                    desc: 'Expansion of DhruvaOS across premier educational institutions, live meeting intelligence pipelines, and external FounderOS pilot deployments.',
                  },
                  {
                    stage: 'Horizon 3 (2028–2029)',
                    title: 'Autonomous Enterprise Scaling',
                    desc: 'Deployment of full synchronized C-suite executive councils, multi-tenant agent execution networks, and enterprise compliance certifications.',
                  },
                  {
                    stage: 'Horizon 4 (2030+)',
                    title: 'Global Enterprise Infrastructure',
                    desc: 'Worldwide platform enabling thousands of enterprises to create, operate, and scale autonomously with coordinated AI workforces.',
                  },
                ].map((item) => (
                  <div key={item.stage} className="p-4 rounded-xl border border-border/70 bg-card/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-primary">{item.stage}</span>
                      <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 11. 15 Operating Principles */}
            <section id="operating-principles" className="space-y-4 scroll-mt-28">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                11. Core Operating Principles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 not-prose my-6">
                {[
                  '1. Real customer value before vanity metrics.',
                  '2. Direct customer evidence before assumptions.',
                  '3. Production execution before theoretical slides.',
                  '4. Verified unit economics before premature scaling.',
                  '5. Strategic focus before horizontal distraction.',
                  '6. Prudent cash management before headcount expansion.',
                  '7. AI systems must deliver measurable business outcomes.',
                  '8. Autonomous agents must be fully observable and accountable.',
                  '9. AI advisors must be engineered to challenge human biases.',
                  '10. Humans retain legal and moral accountability for consequential choices.',
                  '11. Every consequential action must possess a cryptographic audit trail.',
                  '12. Design modularly: build once, deploy across platforms.',
                  '13. Distribution strategy is as vital as technological capability.',
                  '14. Ruthlessly sunset unviable initiatives early.',
                  '15. Never manufacture artificial traction or fake trust signals.',
                ].map((principle) => (
                  <div key={principle} className="p-3 rounded-xl border border-border/60 bg-card/40 text-xs font-semibold text-foreground">
                    {principle}
                  </div>
                ))}
              </div>
            </section>

            {/* 12. The Strategic Statement */}
            <section id="strategic-statement" className="space-y-4 border-t border-border/60 pt-8">
              <div className="p-6 sm:p-8 rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 space-y-4 not-prose">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                  The Strategic Mandate
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-foreground">
                  Build the Enterprise That Empowers Enterprises to Scale
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Enduring enterprise transformation does not start with speculative projections. It begins with genuine operational utility and unwavering customer trust from Day 1. First customer. Then first ten customers. Then disciplined architectural compounding across global markets.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-foreground">
                  <span>Human Leadership.</span>
                  <span>•</span>
                  <span>Machine Intelligence.</span>
                  <span>•</span>
                  <span>AI Workforce.</span>
                  <span>•</span>
                  <span>Enterprise Execution.</span>
                </div>
              </div>
            </section>

          </div>

          {/* Bottom Action Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-border/60">
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-foreground">Interested in NeelStack&apos;s AI Workforce Architecture?</p>
              <p className="text-xs text-muted-foreground mt-0.5">Explore our software platforms, engineering services, or schedule an architecture briefing.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline" size="sm">
                <Link href="/whitepapers">Back to Whitepapers</Link>
              </Button>
              <Button asChild variant="gradient" size="sm" className="glow-cta">
                <Link href="/contact?subject=AI%20Company%20OS%20Partnership">
                  Talk to Leadership <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </article>
    </MarketingLayout>
  )
}
