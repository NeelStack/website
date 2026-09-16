import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import { JsonLd } from '@/components/seo/json-ld'
import { getSiteUrl } from '@/lib/site-url'
import { Button } from '@/components/ui/button'
import {
  Bot,
  Sparkles,
  ShieldCheck,
  Search,
  Workflow,
  Cpu,
  Layers,
  Lock,
  ArrowRight,
  FileText,
  Users,
  Code2,
  Terminal,
  Activity,
  CheckCircle2,
  GitBranch,
  Database,
  BrainCircuit,
  TrendingUp,
  LineChart,
  DollarSign,
  Briefcase,
  Headphones,
  Sliders,
  ExternalLink,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Company Operating System (AI Workforce Platform) | NeelStack India',
  description:
    'The AI Company Operating System is NeelStack’s multi-agent architectural framework. Coordinating 11 specialized autonomous AI agents (AI CEO, CTO, CFO, COO, CMO, CRO, Product, Systems, QA, Research, Support) via Model Context Protocol (MCP) and LangGraph under human governance.',
  keywords: [
    'AI Company OS',
    'AI Workforce Platform',
    'AI CEO Multi-Agent Framework',
    'Model Context Protocol MCP',
    'LangGraph Multi-Agent Architecture',
    'Enterprise AI Operating System',
    'Autonomous AI Agents',
    'NeelStack Products',
  ],
  alternates: {
    canonical: '/products/ai-company-os',
  },
}

// 11 Specialized AI Agent Squads (6 Executive + 5 Functional)
const AGENT_SQUADS = [
  {
    role: 'AI CEO',
    tier: 'Executive Squad',
    icon: Sparkles,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    scope: 'Macro Strategic Orchestration',
    desc: 'Synthesizes high-level corporate objectives, arbitrates resource allocation conflicts across squads, and maintains alignment with founder vision.',
  },
  {
    role: 'AI CTO',
    tier: 'Executive Squad',
    icon: Cpu,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    scope: 'Architectural & Tech Governance',
    desc: 'Evaluates architectural RFCs, enforces clean-code patterns, monitors technical debt telemetry, and benchmarks AI model performance.',
  },
  {
    role: 'AI CFO',
    tier: 'Executive Squad',
    icon: DollarSign,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    scope: 'Unit Economics & Cloud Burn',
    desc: 'Tracks real-time AWS/GCP token and infrastructure burn rates, models cash-flow runway, and evaluates project unit margins.',
  },
  {
    role: 'AI COO',
    tier: 'Executive Squad',
    icon: Activity,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    scope: 'Operational Delivery & SLAs',
    desc: 'Monitors sprint delivery velocity, eliminates inter-squad blocking issues, tracks client SLAs, and audits process integrity.',
  },
  {
    role: 'AI CMO',
    tier: 'Executive Squad',
    icon: TrendingUp,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    scope: 'Narrative & Audience Telemetry',
    desc: 'Orchestrates technical case-study releases, optimizes search engine positioning, and measures developer brand resonance.',
  },
  {
    role: 'AI CRO',
    tier: 'Executive Squad',
    icon: LineChart,
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
    scope: 'Enterprise Pipeline & Scoping',
    desc: 'Analyzes enterprise RFP requirements, synthesizes technical proposal drafts, and models contractual pricing boundaries.',
  },
  {
    role: 'AI Product Architect',
    tier: 'Functional Squad',
    icon: Layers,
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/20',
    scope: 'PRD & User Story Graphs',
    desc: 'Translates high-level business goals into modular PRD documents, acceptance criteria trees, and UX wireframe requirements.',
  },
  {
    role: 'AI Systems Engineer',
    tier: 'Functional Squad',
    icon: Code2,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    scope: 'Full-Stack Code Synthesis',
    desc: 'Synthesizes clean Next.js, Python FastAPI, and Rust modules adhering strictly to corporate linters, type gates, and CI checks.',
  },
  {
    role: 'AI QA & Security Sentinel',
    tier: 'Functional Squad',
    icon: ShieldCheck,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/20',
    scope: 'AST Security & Mutation Tests',
    desc: 'Performs static security analysis, dependency vulnerability scans, and mutation test generation before any pull request.',
  },
  {
    role: 'AI Research Agent',
    tier: 'Functional Squad',
    icon: Search,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    scope: 'arXiv & Frontier AI Radar',
    desc: 'Scrapes and summarizes frontier LLM research preprints, evaluations, and framework releases to keep tech stacks ahead of the curve.',
  },
  {
    role: 'AI Support & Ticket Resolver',
    tier: 'Functional Squad',
    icon: Headphones,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    scope: 'Automated L1/L2 Incident Triage',
    desc: 'Analyzes incoming production logs and support tickets, generates automated reproduction scripts, and drafts solution PRs.',
  },
]

// 6 Core Platform Foundation Subsystems
const CORE_FOUNDATIONS = [
  {
    title: 'Model Context Protocol (MCP) Mesh',
    icon: Workflow,
    tech: 'Standardized Client-Agent Protocol',
    desc: 'Standardized schema-governed interface granting AI agents secure, read/write access to PostgreSQL databases, Git repositories, AWS/GCP cloud logs, and Jira tickets.',
  },
  {
    title: 'Cyclic LangGraph State Machines',
    icon: GitBranch,
    tech: 'Stateful Multi-Agent Orchestration',
    desc: 'Deterministic cyclic graph topologies with multi-turn planning, branch evaluation, automated rollback verification, and deadlock detection.',
  },
  {
    title: 'Microsoft GraphRAG Episodic Memory',
    icon: Database,
    tech: 'Hybrid Vector & Knowledge Graph',
    desc: 'Persistent episodic memory indexing historical architectural RFCs, commit history, client contracts, and meeting notes into semantic graphs.',
  },
  {
    title: 'LiteLLM Multi-Model Router',
    icon: BrainCircuit,
    tech: 'Dynamic Model Load Balancing',
    desc: 'Routes reasoning queries dynamically across Claude 3.7 Sonnet, GPT-4o, Gemini 2.5/3, DeepSeek R1, or local Ollama models based on task latency and cost constraints.',
  },
  {
    title: 'Human-in-the-Loop Multi-Tier Gates',
    icon: Lock,
    tech: 'Cryptographic Authorization Triggers',
    desc: 'Enforces human executive authorization for budget allocations, production deployments, and legal contract merges. Zero autonomous critical actions.',
  },
  {
    title: 'Air-Gapped Enterprise VPC Isolation',
    icon: ShieldCheck,
    tech: 'Zero-Trust Tenant Boundary',
    desc: 'Deploys inside client VPCs or On-Premise Kubernetes with strict schema-level data segregation, ensuring zero proprietary IP cross-pollination.',
  },
]

// 4 Leadership & Enterprise Personas
const PERSONAS = [
  {
    role: 'Chief Technology Officers & VP Engineering',
    desc: 'Automate code reviews, accelerate complex architectural migrations, and maintain continuous security audits across massive multi-repo codebases.',
  },
  {
    role: 'Chief Operating Officers & Operations Leads',
    desc: 'Gain 24/7 visibility into cross-department delivery bottlenecks, automated sprint velocity tracking, and instant root-cause analysis.',
  },
  {
    role: 'Autonomous Enterprise Founders',
    desc: 'Operate lean with hyper-leveraged teams where a 5-person engineering squad delivers the output of a 50-person traditional company.',
  },
  {
    role: 'Enterprise Digital Transformation Leaders',
    desc: 'Deploy private, air-gapped multi-agent workflows integrated with legacy SAP, Salesforce, and internal database vaults safely.',
  },
]

// 8 FAQs
const FAQ_ITEMS = [
  {
    question: 'What is the AI Company Operating System?',
    answer:
      'The AI Company Operating System is NeelStack’s multi-agent architectural framework. It models every executive and functional corporate role as a specialized, persistent AI agent coordinated via LangGraph state machines and the Model Context Protocol (MCP).',
  },
  {
    question: 'Does the AI Company Operating System replace human employees?',
    answer:
      'No. The philosophy is strictly human-in-the-loop cognitive amplification. Human founders and engineers retain sole legal authority, ethical accountability, and strategic sign-off, while AI agents handle real-time code synthesis, continuous data analysis, support routing, and multi-tier synthesis.',
  },
  {
    question: 'Where can I read the full technical whitepaper?',
    answer:
      'The complete Version 1.0 Strategic Whitepaper is published and accessible at neelstack.com/whitepapers/ai-company-operating-system. It outlines the full mathematical foundations, memory topologies, and governance gates.',
  },
  {
    question: 'What is the role of the Model Context Protocol (MCP) in this system?',
    answer:
      'MCP is an open standard that allows AI agents to securely connect to external tools and data sources. In our OS, every database, Git repo, and cloud telemetry feed exposes an MCP server, ensuring agents interact through strictly typed, auditable interfaces.',
  },
  {
    question: 'Can enterprise clients license this multi-agent framework?',
    answer:
      'Yes. NeelStack Solutions builds and customizes private multi-agent architectures and custom MCP tool pipelines for enterprise clients looking to deploy autonomous workflows behind their own VPC or internal firewalls.',
  },
  {
    question: 'How is data security and tenant isolation guaranteed?',
    answer:
      'Every enterprise client runs in an isolated tenant schema with dedicated vector databases. Agent reasoning prompts and context windows never cross tenant boundaries, and client proprietary IP is never used to train global public models.',
  },
  {
    question: 'How do the agents avoid hallucinations in critical workflows?',
    answer:
      'Agents operate within deterministic LangGraph state-machine topologies with multi-agent consensus checks (e.g., AI Systems Engineer writes code, AI QA Sentinel tests it, AI CTO verifies architecture). Any validation failure triggers automatic rollback and human escalation.',
  },
  {
    question: 'What LLM models power the platform?',
    answer:
      'Our LiteLLM proxy dynamically routes tasks to the best-suited frontier model: Claude 3.7 Sonnet for complex coding/reasoning, Gemini 2.5/3 for massive multi-million token context ingestion, GPT-4o for rapid operational routing, and local Ollama/DeepSeek models for air-gapped workloads.',
  },
]

export default function AICompanyOSPage() {
  return (
    <MarketingLayout>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'AI Company Operating System',
          operatingSystem: 'Linux, Kubernetes, Cloud VPC',
          applicationCategory: 'BusinessApplication',
          description:
            'Autonomous enterprise multi-agent operating system coordinating 11 specialized AI agent squads under human-in-the-loop governance.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-violet-500/8 rounded-full blur-[110px] pointer-events-none" />

        <Container className="relative z-10 text-center space-y-8">
          {/* Breadcrumb */}
          <div className="flex justify-center">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'AI Company OS' },
              ]}
            />
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
              R&amp;D Direction &middot; Multi-Agent Operating System &middot; Whitepaper v1.0
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground">
              AI Company OS &mdash; The <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Autonomous Workforce Platform
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Coordinating 11 specialized autonomous AI agents across corporate intelligence, software engineering, financial modeling, and operational execution under strict human-in-the-loop governance.
            </p>
          </div>

          {/* Whitepaper Link Banner */}
          <div className="max-w-3xl mx-auto rounded-2xl border-2 border-primary/40 bg-gradient-to-r from-primary/10 via-cyan-500/10 to-transparent p-4 sm:p-5 text-left flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-sm tactile-card-3d">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold text-foreground">Read the Complete Strategic Whitepaper</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Explore the mathematical state machines, episodic memory topologies, and Model Context Protocol architecture.
              </p>
            </div>
            <Button asChild variant="3d-yellow" size="sm" className="shrink-0 font-bold rounded-xl">
              <Link href="/whitepapers/ai-company-operating-system" className="gap-1.5">
                View Whitepaper <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button asChild variant="3d-yellow" size="lg" className="w-full sm:w-auto h-12 px-8 font-bold gap-2 rounded-xl">
              <Link href="/contact?product=ai-company-os&subject=Enterprise%20Multi-Agent%20Consultation">
                Consult on Multi-Agent Architecture
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="3d-secondary" size="lg" className="w-full sm:w-auto h-12 px-7 font-bold rounded-xl">
              <Link href="#squads">
                Explore 11 Agent Squads
              </Link>
            </Button>
          </div>

          {/* Defensible Architecture Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 text-left">
            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-cyan-500 font-bold">
                <Bot className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">11 Agents</span>
              </div>
              <p className="text-xs text-muted-foreground">Executive &amp; functional agent squads</p>
            </div>

            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-blue-500 font-bold">
                <Workflow className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">MCP Protocol</span>
              </div>
              <p className="text-xs text-muted-foreground">Schema-governed tool &amp; data access</p>
            </div>

            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-violet-500 font-bold">
                <GitBranch className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">LangGraph</span>
              </div>
              <p className="text-xs text-muted-foreground">Cyclic state machines with verification</p>
            </div>

            <div className="p-4 rounded-2xl border-2 border-border/80 bg-card/70 backdrop-blur-sm space-y-1 tactile-card-3d">
              <div className="flex items-center gap-2 text-emerald-500 font-bold">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-heading text-lg sm:text-xl">Human Gate</span>
              </div>
              <p className="text-xs text-muted-foreground">Mandatory sign-off on critical actions</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 11 Specialized Agent Squads ────────────────────────────────────────── */}
      <section id="squads" className="py-20 bg-card/40 backdrop-blur-sm border-y border-border/40 scroll-mt-20">
        <Container className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Agent Hierarchy
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              11 Specialized Agent Roles
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Divided into Executive Strategic Leadership and Functional Engineering &amp; Operations Squads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {AGENT_SQUADS.map((agent) => {
              const IconComp = agent.icon
              return (
                <div
                  key={agent.role}
                  className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 space-y-2.5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${agent.bgColor} ${agent.color} border ${agent.borderColor}`}>
                      <IconComp className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {agent.tier}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                      {agent.role}
                    </h3>
                    <p className="text-[10px] font-mono text-cyan-500/80">{agent.scope}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{agent.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ─── Core Platform Foundations ──────────────────────────────────────────── */}
      <Section className="py-20 border-b border-border/40 bg-surface/50">
        <Container className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              Foundation Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Enterprise Technical Foundations
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Built on open protocols, persistent graph memory, and deterministic state-machine flows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {CORE_FOUNDATIONS.map((found) => {
              const IconComp = found.icon
              return (
                <div
                  key={found.title}
                  className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur-md p-6 space-y-3 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground">{found.title}</h3>
                  <p className="text-[10px] font-mono text-cyan-500/80">{found.tech}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{found.desc}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* ─── Target Personas & Leadership ───────────────────────────────────────── */}
      <Section className="py-20 bg-card/40 backdrop-blur-sm border-b border-border/40">
        <Container className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Built for Forward-Thinking Technical Leadership
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Empowering enterprise executives and founders to scale autonomous workflows with absolute governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {PERSONAS.map((per) => (
              <div
                key={per.role}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 space-y-2 hover:border-cyan-500/25 transition-all"
              >
                <h3 className="text-sm font-heading font-bold text-cyan-500">
                  {per.role}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {per.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── Structured FAQs ────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border/40 bg-transparent">
        <Container className="max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-cyan-500">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
              Architecture &amp; Enterprise Specifications
            </h2>
          </div>

          <FAQAccordion items={FAQ_ITEMS} />
        </Container>
      </section>

      {/* ─── Pre-Footer CTA ──────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-card to-surface text-center">
        <Container className="max-w-3xl space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
            Architect Your Autonomous Enterprise
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Partner with NeelStack’s AI systems architects to design custom multi-agent squads, private Model Context Protocol servers, and enterprise automation pipelines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="glow-cta px-8 font-bold">
              <Link href="/contact?product=ai-company-os&subject=Enterprise%20Multi-Agent%20Architecture" className="gap-2">
                Schedule Architecture Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-7 font-bold">
              <Link href="/whitepapers/ai-company-operating-system">Read Whitepaper</Link>
            </Button>
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
