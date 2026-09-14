import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  CheckCircle2,
  Globe,
  ExternalLink,
  Clock,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  Search,
  FileCheck2,
  ShieldCheck,
  Layers,
  Bot,
  Calendar,
  Building,
  GraduationCap,
  MessageSquare,
  Users,
  Compass,
  Cpu,
  Workflow,
  Lock,
} from 'lucide-react'
import { PRODUCTS } from '@/constants/products'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'
import { StatusBadge } from '@/components/ui/status-badge'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{ id: string }>
}

// Helper to resolve aliases and prevent any 404
function resolveProduct(id: string) {
  const normalized = id.toLowerCase().trim()
  if (normalized === 'sarakarimitra' || normalized === 'sarkari-mitra' || normalized === 'sarkarimitra') {
    return PRODUCTS.find((p) => p.id === 'sarkarimitra')
  }
  if (normalized === 'naukari-mitra' || normalized === 'naukarimitra') {
    return PRODUCTS.find((p) => p.id === 'naukarimitra')
  }
  return PRODUCTS.find((p) => p.id === normalized)
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const product = resolveProduct(resolvedParams.id)
  if (!product) return { title: 'Product Not Found' }

  return {
    title: `${product.name} — ${product.status === 'planned' ? 'Planned Product & Architecture' : 'Enterprise Software'} | NeelStack India`,
    description: product.description,
    alternates: {
      canonical: `/products/${product.id}`,
    },
  }
}

export async function generateStaticParams() {
  return [
    { id: 'ai-company-os' },
    { id: 'naukarimitra' },
    { id: 'naukari-mitra' },
    { id: 'sarkarimitra' },
    { id: 'sarakarimitra' },
    { id: 'sarkari-mitra' },
  ]
}

// Deep architectural details for planned research products
const PLANNED_PRODUCT_DETAILS: Record<
  string,
  {
    targetDomain: string
    roadmapPhase: string
    mission: string
    architectureHighlights: { title: string; desc: string; icon: React.ComponentType<{ className?: string }> }[]
    faqs: { q: string; a: string }[]
  }
> = {
  naukarimitra: {
    targetDomain: 'naukarimitra.in',
    roadmapPhase: 'Phase 3: EdTech & Exam Intelligence',
    mission:
      'Democratizing competitive examination preparation for over 3 Crore Indian aspirants through structured AI guidance, multilingual syllabus indexing, and zero-distraction study tools.',
    architectureHighlights: [
      {
        title: '50+ Exam Syllabus Vector Index',
        desc: 'Semantic RAG architecture indexing official notifications, exam patterns, and syllabus matrices across UPSC, SSC, Banking, Railways, and State PSCs.',
        icon: Search,
      },
      {
        title: 'Adaptive Mock Exam Generator',
        desc: 'AI-calibrated test generation calibrated to historical negative marking, sectional time distributions, and official question difficulty tiers.',
        icon: GraduationCap,
      },
      {
        title: 'Step-by-Step AI Concept Tutor',
        desc: 'Low-latency conversational tutor explaining complex quantitative aptitude, logical reasoning, and general studies concepts with visual breakdowns.',
        icon: Bot,
      },
      {
        title: 'Spaced Repetition Revision Engine',
        desc: 'Algorithmic memory retention tracker calculating personalized review intervals to ensure concepts are consolidated before exam day.',
        icon: Clock,
      },
      {
        title: 'Vernacular Language Processing',
        desc: 'Bhashini AI integration delivering native explanations in Hindi and regional Indian languages so language is never a barrier to opportunity.',
        icon: BookOpen,
      },
      {
        title: 'Pure Ad-Free Environment',
        desc: 'Built with zero commercial advertising, zero distracting clickbait feeds, and zero selling of student candidate data.',
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: 'When will NaukariMitra be available for public testing?',
        a: 'NaukariMitra is staged in Phase 3 of our product roadmap. Data ingestion pipelines and syllabus vector graphs are currently in active research. We plan to release early pilot access to select study cohorts following our core commercial infrastructure rollouts.',
      },
      {
        q: 'Is NaukariMitra affiliated with any government recruitment board?',
        a: 'No. NaukariMitra is an independent proprietary AI ed-tech concept developed by NeelStack Solutions Private Limited. It is not affiliated with, endorsed by, or operated by any government department, public service commission, or recruitment agency.',
      },
      {
        q: 'How will NaukariMitra differ from existing test preparation apps?',
        a: 'Existing apps prioritize high-frequency paid subscriptions and ad impressions. NaukariMitra is designed as a calm, distraction-free utility using low-latency LLMs and vector memory to target specific knowledge gaps rather than generic rote memorization.',
      },
    ],
  },
  sarkarimitra: {
    targetDomain: 'sarakarimitra.org',
    roadmapPhase: 'Phase 3: Civic & Public Services Intelligence',
    mission:
      'Bridging the critical information gap between government welfare policy and grassroots citizen access through plain-language conversational AI, multilingual voice queries, and verified eligibility checklists.',
    architectureHighlights: [
      {
        title: '1,200+ Scheme Knowledge Graph',
        desc: 'Unified relational and semantic database indexing Central and State welfare initiatives, agriculture grants, healthcare subsidies, and educational scholarships.',
        icon: Layers,
      },
      {
        title: 'Conversational Eligibility Evaluator',
        desc: 'Natural language dialogue asking simple everyday questions (occupation, age, state, land holding) to calculate exact scheme qualification without bureaucratic jargon.',
        icon: MessageSquare,
      },
      {
        title: 'Document Readiness Checklist',
        desc: 'Verified list of required identity proofs, income affidavits, and certificates with step-by-step guidance on nearest Seva Kendras and official submission portals.',
        icon: FileCheck2,
      },
      {
        title: 'Voice & Regional Dialect Support',
        desc: 'Voice-first multilingual processing allowing rural citizens, farmers, and first-time smartphone users to speak in their native dialect and hear audio responses.',
        icon: Users,
      },
      {
        title: 'Scam-Free Official Redirection',
        desc: 'Every scheme profile links exclusively to authentic official government portals (.gov.in / .nic.in), protecting citizens against fake fee portals and middlemen.',
        icon: Compass,
      },
      {
        title: 'Zero-Telemetry Citizen Privacy',
        desc: 'Strict client-side privacy architecture. Session data is ephemeral; no Aadhaar numbers, personal phone numbers, or identity documents are ever retained or monetized.',
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: 'Is SarakariMitra an official government portal?',
        a: 'No. SarakariMitra is an independent public welfare navigation initiative engineered by NeelStack Solutions Private Limited. It is designed to help citizens understand public documentation. All official filings and verifications are redirected exclusively to official government portals.',
      },
      {
        q: 'How is SarakariMitra trained on government scheme details?',
        a: 'Our systems ingest published gazettes, ministry guidelines, and official public documentation into a structured knowledge graph, cross-verifying eligibility criteria to eliminate outdated or misleading information.',
      },
      {
        q: 'Can organizations or NGOs partner on pilot testing?',
        a: 'Yes. We welcome conversations with rural outreach organizations, digital literacy centers, and academic researchers interested in evaluating multilingual civic access technology.',
      },
    ],
  },
  'ai-company-os': {
    targetDomain: 'neelstack.com/whitepapers/ai-company-operating-system',
    roadmapPhase: 'Strategic Operating Framework & Multi-Agent Architecture',
    mission:
      'Coordinating specialized autonomous AI agent squads across company intelligence, software engineering, financial modeling, and operational execution under human-in-the-loop governance.',
    architectureHighlights: [
      {
        title: '11 Specialized Agent Squads',
        desc: 'Autonomous multi-agent hierarchy comprising AI CEO, AI CTO, AI CFO, AI COO, AI CMO, AI Product, AI Research, AI Sales, AI Ops, and AI Support.',
        icon: Users,
      },
      {
        title: 'Model Context Protocol (MCP)',
        desc: 'Standardized client-agent protocol granting LLMs verified, schema-governed access to databases, Git repositories, and cloud telemetry.',
        icon: Workflow,
      },
      {
        title: 'LangGraph State-Machine Flows',
        desc: 'Cyclic graph reasoning topologies featuring deterministic error recovery, branch validation, and automated rollback protections.',
        icon: Cpu,
      },
      {
        title: 'Microsoft GraphRAG Vector Memory',
        desc: 'Persistent hybrid retrieval indexing past architecture blueprints, meeting notes, customer interactions, and git history into semantic graphs.',
        icon: Search,
      },
      {
        title: 'Human-in-the-Loop Governance',
        desc: 'Multi-tier authorization gates requiring human executive approval for budget commitments, production deploys, and customer contract merges.',
        icon: ShieldCheck,
      },
      {
        title: 'Isolated Tenant Boundaries',
        desc: 'Strict schema and vector space isolation ensuring zero cross-pollination between internal operating models and client proprietary IP.',
        icon: Lock,
      },
    ],
    faqs: [
      {
        q: 'What is the AI Company Operating System?',
        a: 'The AI Company Operating System is NeelStack’s multi-agent architectural framework. It models every executive and functional corporate role as a specialized, persistent AI agent coordinated via LangGraph and Model Context Protocol.',
      },
      {
        q: 'Does AI Company OS replace human executives?',
        a: 'No. The philosophy is human-in-the-loop amplification. Founders and human engineers retain sole legal authority and strategic direction, while AI agents handle real-time code reviews, continuous data analysis, support routing, and synthesis.',
      },
      {
        q: 'Can enterprise clients license this multi-agent architecture?',
        a: 'Yes. NeelStack Solutions builds and customizes private multi-agent architectures and custom MCP tool pipelines for enterprise clients looking to automate complex workflows.',
      },
    ],
  },
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const product = resolveProduct(resolvedParams.id)

  if (!product) {
    notFound()
  }

  const Icon = product.icon
  const isPlanned = product.status === 'planned' || product.id === 'ai-company-os'
  const plannedMeta = PLANNED_PRODUCT_DETAILS[product.id]

  return (
    <MarketingLayout>
      <PageHero
        badge={isPlanned ? 'Roadmap Phase · Planned Product' : product.category}
        title={product.name}
        description={product.tagline}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: product.name },
        ]}
      />

      <Section className="pt-4 pb-14 md:pt-6 md:pb-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Planned Product Notice Banner */}
            {isPlanned && plannedMeta && (
              <div className="rounded-3xl border border-amber-500/30 bg-amber-500/10 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{plannedMeta.roadmapPhase}</span>
                    </div>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                      Planned Proprietary Product &amp; R&amp;D Initiative
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {plannedMeta.mission}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Button asChild size="sm" variant="outline" className="font-bold border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10">
                      <Link href={`/contact?subject=${encodeURIComponent(product.name + ' Early Access & Inquiry')}`}>
                        Register Early Interest
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Product Info Left Column */}
              <div className="md:col-span-2 space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>

                <div className="flex items-center gap-3">
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Project Specifications
                  </h2>
                  <StatusBadge status={product.status} />
                </div>

                <p className="text-base text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {product.disclaimer && (
                  <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5 text-xs text-amber-600 dark:text-amber-400 leading-relaxed font-sans flex items-start gap-3">
                    <ShieldAlert className="h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold">Statutory Notice: </strong>
                      {product.disclaimer}
                    </div>
                  </div>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed">
                  At NeelStack Solutions, we engineer proprietary platforms using clean, domain-driven architectures. Each subsystem is evaluated against real-world utility, high database efficiency, and strict privacy by design.
                </p>

                {product.status === 'live' && (
                  <div className="pt-2">
                    <Button asChild className="gap-2 glow-cta">
                      <Link href={product.href} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4" />
                        Visit Live Platform
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>

              {/* Target Capabilities Right Column */}
              <div>
                <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-md p-6 shadow-md space-y-4">
                  <h3 className="font-heading text-xs font-bold text-foreground uppercase tracking-widest text-primary">
                    Target Capabilities
                  </h3>
                  <ul className="space-y-3" aria-label="Product features highlights">
                    {product.features.map((feature) => (
                      <li key={feature.label} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feature.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* In-Development Architecture Highlights for Planned Products */}
            {isPlanned && plannedMeta && (
              <div className="space-y-6 pt-6 border-t border-border/60">
                <div className="text-left space-y-1">
                  <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-primary">
                    Engineering Architecture
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                    Core Technical Subsystems in Development
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Detailed blueprint of the AI workflows, knowledge ingestion, and user experience paradigms being engineered.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {plannedMeta.architectureHighlights.map((arch) => {
                    const ArchIcon = arch.icon
                    return (
                      <div
                        key={arch.title}
                        className="rounded-2xl border border-border/80 bg-card/50 p-5 space-y-2.5 transition-all hover:border-primary/40 hover:bg-card/80"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                          <ArchIcon className="h-4 w-4" />
                        </div>
                        <h4 className="font-heading text-sm font-bold text-foreground">{arch.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{arch.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Multi-Stage Roadmap Phasing Context */}
            {isPlanned && (
              <div className="rounded-3xl border border-border/80 bg-card/40 p-6 sm:p-8 space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-primary">
                    Roadmap Alignment
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                    NeelStack Multi-Engine Product Roadmap
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    To maintain disciplined execution and defensible economics, NeelStack rolls out initiatives across sequential development gates:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                  <div className="p-4 rounded-2xl border border-border/60 bg-muted/20 space-y-1.5">
                    <span className="font-mono text-[10px] font-bold uppercase text-emerald-500">Phase 1 · Active &amp; Live</span>
                    <h5 className="font-bold text-foreground">Services &amp; ToolVines</h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Core enterprise software engineering, AI systems consulting, and browser-native productivity tools network.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl border border-border/60 bg-muted/20 space-y-1.5">
                    <span className="font-mono text-[10px] font-bold uppercase text-cyan-500">Phase 2 · Launch 2 Oct 2026</span>
                    <h5 className="font-bold text-foreground">DhruvaOS School OS</h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Unified operating system for institutions, onboarding early school pilots for administrative transformation.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl border border-primary/30 bg-primary/5 space-y-1.5">
                    <span className="font-mono text-[10px] font-bold uppercase text-primary">Phase 3 · Planned R&amp;D</span>
                    <h5 className="font-bold text-foreground">{product.name}</h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Specialized civic and educational intelligence platforms deployed following commercial infrastructure maturity.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* FAQs for Planned Products */}
            {isPlanned && plannedMeta && (
              <div className="space-y-4 pt-4 border-t border-border/60">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {plannedMeta.faqs.map((faq) => (
                    <div key={faq.q} className="rounded-2xl border border-border/70 bg-card/60 p-5 space-y-1.5">
                      <h4 className="text-sm font-bold text-foreground">{faq.q}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Early Access / Contact Box */}
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-xl">
              <div className="space-y-1 max-w-lg">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                  {isPlanned ? `Interested in ${product.name}?` : 'Interested in custom enterprise features?'}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {isPlanned
                    ? 'Connect with our engineering team to explore pilot data access, academic partnerships, or architectural inquiries.'
                    : 'We engineer custom modules and dedicated integrations based on our proprietary tech stacks.'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <Button asChild className="w-full sm:w-auto glow-cta font-bold">
                  <Link href={`/contact?subject=${encodeURIComponent(product.name + ' Inquiry')}`} className="gap-1.5">
                    Contact Engineering <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Ready to build tomorrow's software?"
        description="Connect with our founders and software architects to discuss your technical challenges and platform roadmap."
        primaryLabel="Request a Quote"
        primaryHref="/request-quote"
      />
    </MarketingLayout>
  )
}
