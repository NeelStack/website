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
  Printer,
  Share2,
} from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import { JsonLd } from '@/components/seo/json-ld'
import { getSiteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'The AI Company Operating System — Strategic Whitepaper | NeelStack India',
  description:
    'A Strategic Whitepaper for Building a Billion-Dollar Technology Company. Architectural framework for deploying AI executive workforces (AI CEO, CTO, CFO, COO) alongside human founders.',
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
    title: 'The AI Company Operating System — Strategic Whitepaper | NeelStack Solutions',
    description:
      'A Strategic Whitepaper for Building a Billion-Dollar Technology Company. Authored by Founder & Legal CEO Shyam Chaurasiya with Strategic AI Operating Partner.',
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
          headline: 'The AI Company Operating System — A Strategic Whitepaper for Building a Billion-Dollar Technology Company',
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
          dateModified: '2026-09-14',
        }}
      />

      <article className="py-16 sm:py-24 relative overflow-hidden bg-background">
        {/* Glow ambient meshes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent blur-[120px] pointer-events-none" />

        <Container className="max-w-4xl mx-auto space-y-12 relative z-10">
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
          <div className="space-y-6 text-center sm:text-left border-b border-border/60 pb-10">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="h-3.5 w-3.5" />
                Strategic Whitepaper
              </span>
              <span className="text-xs font-mono text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border">
                Version 1.0 — September 2026
              </span>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Official Charter
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              The AI Company Operating System
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium">
              A Strategic Whitepaper for Building a Billion-Dollar Technology Company
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
              Strategic Whitepaper Sections
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <a href="#executive-summary" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">Executive Summary</a>
              <a href="#the-thesis" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">The Thesis</a>
              <a href="#the-vision" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">AI Executive Team</a>
              <a href="#company-brain" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">The Company Brain</a>
              <a href="#boardroom-mode" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">AI Boardroom</a>
              <a href="#meeting-execution" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">Meeting Execution</a>
              <a href="#authority-model" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">Authority Model</a>
              <a href="#trust-layer" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">The Trust Layer</a>
              <a href="#three-engines" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">Three-Engine Strategy</a>
              <a href="#capital-allocation" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">Capital Allocation</a>
              <a href="#operating-principles" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">15 Principles</a>
              <a href="#five-year-roadmap" className="px-3 py-1 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">5-Year Roadmap</a>
            </div>
          </div>

          {/* Body Content — Deep-Dive Sections */}
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
            
            {/* Executive Summary */}
            <section id="executive-summary" className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                Executive Summary
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                NeelStack Solutions Private Limited was incorporated on <strong>31 August 2026</strong> with a long-term ambition far larger than becoming another software services provider.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                The company operates through three complementary, self-reinforcing engines:
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
                    Our unified School Operating System (launching 2 October 2026), built to become a recurring B2B SaaS business and our active laboratory for agent coordination.
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-500">Engine 3</span>
                  <h3 className="text-base font-bold text-foreground">ToolVines</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Live browser-native tools platform (toolvines.com) delivering zero-retention utilities, organic search traffic, and scalable experimentation.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5 not-prose my-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">The Long-Term Strategic Opportunity</p>
                <h3 className="text-xl sm:text-2xl font-heading font-black text-foreground">
                  BUILD THE AI COMPANY OPERATING SYSTEM
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  The vision is to create a platform where any human founder can hire a coordinated, persistent, accountable <strong>AI executive workforce</strong> (AI CEO, AI CTO, AI CFO, AI COO, AI CRO, AI CMO, AI Product Officer) and hundreds of specialized AI agents.
                </p>
                <div className="mt-4 pt-4 border-t border-primary/20 text-xs font-semibold text-foreground italic">
                  &ldquo;The human founder remains the legal owner and ultimate accountable decision-maker. The AI becomes the company&apos;s intelligence and execution layer.&rdquo;
                </div>
              </div>
            </section>

            {/* 1. The Thesis */}
            <section id="the-thesis" className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                1. The Thesis
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                The traditional company is constrained by human organizational bandwidth. Assembling a complete C-suite and departmental workforce (CEO, CTO, CFO, COO, CRO, CMO, Product, Engineering, Sales, QA) is slow, capital-intensive, and geographically constrained.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Enterprise AI is moving rapidly from <em>&ldquo;ask AI a question&rdquo;</em> toward autonomous agents that operate across real tools, databases, and organizational workflows with explicit permissions, approval checkpoints, and audit trails.
              </p>
              <blockquote className="p-4 rounded-xl border-l-4 border-primary bg-muted/40 font-semibold text-foreground not-italic my-4">
                &ldquo;The next generation of companies will not simply use AI. They will be organized around AI.&rdquo;
              </blockquote>
            </section>

            {/* 2. The Vision: Executive Roles */}
            <section id="the-vision" className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                2. The Vision: The AI Executive Team
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                A founder enters NeelStack and instantiates a complete, synchronized executive council:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
                {[
                  { role: 'AI CEO', focus: 'Strategy & Capital', desc: 'Strategy, prioritization, company health, resource allocation, executive coordination, and bottleneck identification.' },
                  { role: 'AI CTO', focus: 'Engineering & Architecture', desc: 'Technology stack, system architecture, security postures, technical debt audits, and release velocity.' },
                  { role: 'AI CFO', focus: 'Financial Physics', desc: 'Cash runway, revenue forecasting, unit economics, scenario modeling, expense optimization, and budget gates.' },
                  { role: 'AI COO', focus: 'Operational Rhythm', desc: 'Project execution, timeline tracking, cross-department handoffs, SOP enforcement, and organizational friction removal.' },
                  { role: 'AI CRO', focus: 'Commercial Engine', desc: 'Lead qualification, pipeline velocity, pricing structures, proposals, and enterprise sales cycles.' },
                  { role: 'AI CMO', focus: 'Positioning & Demand', desc: 'Positioning, SEO intelligence, content distribution, competitor audits, and customer acquisition campaigns.' },
                  { role: 'AI Product Officer', focus: 'User Problem Validation', desc: 'Customer evidence synthesis, PRD drafting, feature prioritization, telemetry analysis, and feedback loops.' },
                  { role: 'Specialist AI Employees', focus: 'Execution Layer', desc: 'Dedicated agents across Sales, Research, Developer, QA, Support, Recruiting, and Executive Assistance.' },
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

            {/* 5. The Company Brain */}
            <section id="company-brain" className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                5. The Company Brain: Persistent Institutional Memory
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every enterprise deployed on NeelStack maintains an encrypted, persistent <strong>Company Brain</strong>. Unlike transient LLM chat windows, the Company Brain stores seven interconnected domains:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 not-prose my-6">
                {[
                  { domain: 'Company Facts', desc: 'Revenue, costs, headcount, legal contracts, pricing, and infrastructure.' },
                  { domain: 'Strategy & Thesis', desc: 'Company mission, positioning, quarterly OKRs, and market focus.' },
                  { domain: 'Decision History', desc: 'What was decided, when, by whom, why, expected vs actual outcomes.' },
                  { domain: 'Customer Intelligence', desc: 'Meeting transcripts, objections, feature requests, and buying behavior.' },
                  { domain: 'Operational SOPs', desc: 'Workflows, security protocols, release gates, and employee handbooks.' },
                  { domain: 'Financial Vault', desc: 'Cash runway, burn rate, invoices, receivables, and tax filings.' },
                  { domain: 'Technical Topology', desc: 'Architecture blueprints, API schemas, repositories, and incident logs.' },
                ].map((item) => (
                  <div key={item.domain} className="p-3.5 rounded-xl border border-border/70 bg-card/40 space-y-1">
                    <p className="text-xs font-bold text-foreground">{item.domain}</p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. The AI Boardroom */}
            <section id="boardroom-mode" className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                7. The AI Boardroom &amp; Constructive Disagreement
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                When a founder presents a critical strategic question (e.g. <em>&ldquo;Should we hire 20 engineers and launch a second product line?&rdquo;</em>), NeelStack does not return a single generic response. It initiates an executive deliberation where agents are engineered to challenge assumptions:
              </p>
              
              <div className="p-5 rounded-2xl border border-border bg-card/90 space-y-3 not-prose my-6 font-mono text-xs">
                <p className="text-primary font-bold uppercase tracking-wider">// Simulated Boardroom Deliberation</p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">AI CTO:</strong> Technically feasible in 21 days with current Turborepo architecture.</p>
                  <p><strong className="text-foreground">AI CRO:</strong> Five enterprise pipeline accounts have explicitly requested this feature.</p>
                  <p><strong className="text-foreground">AI CMO:</strong> Positioning overlaps directly with two incumbents; customer acquisition cost will spike 40%.</p>
                  <p><strong className="text-foreground">AI CFO:</strong> Cash reserves support development, but additional hiring reduces runway from 18 to 9 months.</p>
                  <p><strong className="text-foreground">AI COO:</strong> Current engineering capacity is already committed at 91% through DhruvaOS launch.</p>
                  <p className="text-emerald-500 font-bold"><strong className="text-foreground">AI CEO Decision:</strong> RECOMMENDATION: DO NOT HIRE YET. Run 5 paid pilot contracts with existing team before committing capital.</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-foreground">
                Disagreement is a core feature. An AI executive team that cannot say &ldquo;NO&rdquo; is a toy.
              </p>
            </section>

            {/* 8-10. Meeting Execution Engine */}
            <section id="meeting-execution" className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                8–10. The Closed-Loop Meeting Execution Engine
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Meetings currently end with lost transcripts and forgotten promises. NeelStack transforms meetings into a closed execution loop:
              </p>
              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 text-center not-prose font-mono text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400">
                Meeting → Understanding → Decision → Execution → 14 Verified Actions
              </div>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5 my-4">
                <li><strong>Pre-Meeting Brief:</strong> AI executives review customer history, discount tolerances, and engineering feasibility.</li>
                <li><strong>During Meeting:</strong> Contextual advisor to the founder (e.g. AI CFO recommending discount boundaries).</li>
                <li><strong>Post-Meeting Execution:</strong> Automatically extracts commitments, updates CRM, compiles commercial proposals, creates engineering tasks, and schedules calendar follow-ups.</li>
              </ul>
            </section>

            {/* 13. Agent Authority Model */}
            <section id="authority-model" className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                13. The 4-Level Agent Authority Model
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Autonomous AI must never receive unconstrained authority over money, legal commitments, or production systems:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 not-prose my-6">
                {[
                  { level: 'Level 0', title: 'OBSERVE', desc: 'Read-only access to company telemetry, documents, analytics, and meetings.' },
                  { level: 'Level 1', title: 'RECOMMEND', desc: 'Synthesizes insights, highlights anomalies, and submits structured proposals.' },
                  { level: 'Level 2', title: 'APPROVAL', desc: 'Agent compiles complete action (draft email, PR, invoice). Human approves. Agent executes.' },
                  { level: 'Level 3', title: 'AUTONOMY', desc: 'Pre-approved low-risk actions within hard rate limits (sync CRM, run test suites, format logs).' },
                ].map((item) => (
                  <div key={item.level} className="p-4 rounded-xl border border-border bg-card/70 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase text-primary">{item.level}</span>
                    <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 16. The Trust Layer */}
            <section id="trust-layer" className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                16. The Trust Layer: Trust Is The Product
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                The biggest barrier to deploying an AI workforce is not raw model intelligence — it is enterprise trust. NeelStack constructs eight mandatory security pillars:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 not-prose my-6 text-center">
                {['Identity & Role Verification', 'Granular Authorization', 'Cryptographic Audit Trail', 'Observability & Traceability', 'Deterministic Evaluation', 'Single-Click Rollback', 'Human Escalation Gates', 'Strict Tenant Isolation'].map((pillar) => (
                  <div key={pillar} className="p-3 rounded-xl border border-border/70 bg-card/40 flex items-center justify-center text-xs font-semibold text-foreground">
                    {pillar}
                  </div>
                ))}
              </div>
            </section>

            {/* 20 & 22. Strategy & Capital Allocation */}
            <section id="three-engines" className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                20–22. Capital Allocation &amp; The Three-Engine Strategy
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                NeelStack refuses to build ten speculative products simultaneously. We maintain disciplined capital allocation until clear product-market fit:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose my-6">
                <div className="p-5 rounded-2xl border border-purple-500/30 bg-purple-500/10 space-y-1">
                  <span className="text-3xl font-black text-purple-500">80%</span>
                  <h4 className="text-sm font-bold text-foreground">DhruvaOS</h4>
                  <p className="text-xs text-muted-foreground">Primary product bet. School operating system, recurring SaaS revenue, and our living AI laboratory.</p>
                </div>
                <div className="p-5 rounded-2xl border border-blue-500/30 bg-blue-500/10 space-y-1">
                  <span className="text-3xl font-black text-blue-500">15%</span>
                  <h4 className="text-sm font-bold text-foreground">NeelStack Services &amp; AI Infra</h4>
                  <p className="text-xs text-muted-foreground">Cash flow generation, custom software engineering, and reusable multi-agent architecture.</p>
                </div>
                <div className="p-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 space-y-1">
                  <span className="text-3xl font-black text-cyan-500">5%</span>
                  <h4 className="text-sm font-bold text-foreground">ToolVines Platform</h4>
                  <p className="text-xs text-muted-foreground">Organic web traffic, zero-retention utilities, and high-velocity experiments.</p>
                </div>
              </div>
              <p className="text-xs font-mono text-muted-foreground">
                * Speculative products (NaukariMitra, SarakariMitra) remain deliberately parked until core revenue gates are passed. Focus is a strategic advantage.
              </p>
            </section>

            {/* 23. Road to $1B & 24. 5-Year Roadmap */}
            <section id="five-year-roadmap" className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                23–24. The 8 Stages of Commercialization (2026–2030+)
              </h2>
              <div className="space-y-3 not-prose my-6">
                {[
                  { stage: 'Stage 1 & 2', title: '₹0 → ₹1 Lakh (2026)', desc: 'Proof of commercialization. DhruvaOS launch, NeelStack service contracts, and Company Brain prototype.' },
                  { stage: 'Stage 3 & 4', title: '₹10 Lakh → ₹1 Crore (2027)', desc: 'Repeatable sales engine. DhruvaOS PMF, meeting intelligence, and external FounderOS pilot deployments.' },
                  { stage: 'Stage 5 & 6', title: '₹10 Crore → ₹100 Crore+ (2028–2029)', desc: 'AI Workforce scale. Full executive council, multi-tenant agent execution, and enterprise advisor networks.' },
                  { stage: 'Stage 7 & 8', title: 'National & Global Scale → $1B+ (2030+)', desc: 'Global platform through which millions of companies create, operate, and scale with AI.' },
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

            {/* 30. 15 Operating Principles */}
            <section id="operating-principles" className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground border-b border-border/40 pb-2">
                30. NeelStack&apos;s 15 Operating Principles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 not-prose my-6">
                {[
                  '1. Revenue before vanity.',
                  '2. Customers before assumptions.',
                  '3. Execution before presentations.',
                  '4. Evidence before scaling.',
                  '5. Focus before expansion.',
                  '6. Cash before unnecessary hiring.',
                  '7. AI must produce outcomes.',
                  '8. Agents must be accountable.',
                  '9. AI must challenge humans.',
                  '10. Humans remain accountable for consequential decisions.',
                  '11. Every important action must be auditable.',
                  '12. Build once, reuse everywhere.',
                  '13. Distribution matters as much as technology.',
                  '14. Kill weak ideas quickly.',
                  '15. Never manufacture traction.',
                ].map((principle) => (
                  <div key={principle} className="p-3 rounded-xl border border-border/60 bg-card/40 text-xs font-semibold text-foreground">
                    {principle}
                  </div>
                ))}
              </div>
            </section>

            {/* 41 & 42. The Final Strategic Statement */}
            <section className="space-y-4 border-t border-border/60 pt-8">
              <div className="p-6 sm:p-8 rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 space-y-4 not-prose">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                  The Final Strategic Statement
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-foreground">
                  Build the Company That Builds Companies
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  The billion-dollar journey does not start with $1 billion. It starts with ₹1 of real revenue. Then first customer. Then first 10 customers. Then first ₹1 Crore.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-foreground">
                  <span>Human vision.</span>
                  <span>•</span>
                  <span>Machine intelligence.</span>
                  <span>•</span>
                  <span>AI workforce.</span>
                  <span>•</span>
                  <span>Company execution.</span>
                </div>
              </div>
            </section>

          </div>

          {/* Bottom Action Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-border/60">
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-foreground">Interested in NeelStack&apos;s AI Workforce Architecture?</p>
              <p className="text-xs text-muted-foreground mt-0.5">Explore our software products, services, or discuss strategic partnerships.</p>
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
