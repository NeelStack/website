'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Layers, 
  CheckCircle2,
  BookOpen,
  Cpu,
  Database,
  Lock,
  Sparkles
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

interface CaseStudy {
  id: string
  title: string
  subtitle: string
  systemProfile: string
  industry: string
  category: 'erp' | 'ai' | 'cloud' | 'backend'
  categoryLabel: string
  timeframe: string
  blogUrl: string
  blogReadTime: string
  metrics: Array<{ label: string; value: string; desc: string }>
  challenge: string
  solution: string
  architectureHighlights: string[]
  technologies: string[]
  statutoryCompliance: string[]
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'dhruvaos-agentic-ai-operations',
    title: 'Agentic AI in DhruvaOS: Autonomous Goal-Driven Enterprise Workflows & AST Tool Calling',
    subtitle: 'State-graph cognitive multi-agent orchestration replacing manual administrative form-filling ahead of September 30 Demo Launch.',
    systemProfile: 'DhruvaOS Autonomous Cognitive Engine (Proprietary SaaS)',
    industry: 'Enterprise AI & Autonomous Operations',
    category: 'ai',
    categoryLabel: 'Agentic AI & AGI',
    timeframe: 'In Production · Demo Launch Sept 30, 2026',
    blogUrl: '/blog/agentic-ai-in-dhruvaos-autonomous-enterprise-erp-agi',
    blogReadTime: '14 min read',
    metrics: [
      { value: '100%', label: 'AST Type Safety', desc: 'Zero unparameterized SQL or unsafe AST execution' },
      { value: '< 350ms', label: 'Cognitive Parsing', desc: 'Sub-second multi-agent intent routing' },
      { value: '84%', label: 'Time Reduction', desc: 'Manual operational reviews automated via LangGraph' },
      { value: '7-Year', label: 'WORM Retention', desc: 'Immutable audit trails mirrored to S3 Object Lock' },
    ],
    challenge:
      'Traditional enterprise ERPs require employees to serve as human middleware—manually typing records, navigating multi-level dropdowns, and reconciling ledgers. For DhruvaOS, our goal was to eliminate passive form-filling by engineering an autonomous, goal-driven agentic core while strictly preventing LLM hallucination and dangerous state commits in financial and academic records.',
    solution:
      'We engineered a multi-agent State-Graph using LangGraph, Python FastAPI, and isolated PostgreSQL schemas. Every agent tool invocation is guarded by Abstract Syntax Tree (AST) grammar checks and typed Pydantic v2 schemas. Autonomous agents continuously monitor attendance anomalies, optimize complex academic timetables via linear programming, and audit vendor GSTIN vouchers within human-in-the-loop (HITL) thresholds.',
    architectureHighlights: [
      'LangGraph State-Graph cognitive multi-agent supervisor and worker topologies',
      'Abstract Syntax Tree (AST) validation and deterministic Pydantic v2 tool bindings',
      'Dynamic Constraint Solver Agent solving multi-faculty NP-hard timetable matrices in <12s',
      'Dual-tier Human-in-the-Loop (HITL) threshold rules with cryptographically signed audit logs',
    ],
    technologies: ['LangGraph', 'Python 3.12', 'FastAPI', 'Pydantic v2', 'PostgreSQL 16', 'Qdrant Vector DB', 'Redis 7'],
    statutoryCompliance: ['DPDPA 2023 Section 9', 'NIC GST e-Invoicing Gateway', 'WORM Immutable Audit Logs'],
  },
  {
    id: 'dhruvaos-multitenant-erp-architecture',
    title: 'DhruvaOS Foundation: Dynamic Schema-per-Tenant Multi-Tenancy Architecture',
    subtitle: 'Segregating enterprise workloads with physical PostgreSQL schemas and sub-10ms Zitadel OIDC authorization.',
    systemProfile: 'DhruvaOS Cloud ERP Foundation Architecture',
    industry: 'Enterprise Cloud ERP',
    category: 'erp',
    categoryLabel: 'Enterprise ERP',
    timeframe: 'Foundation v2.6 · Demo Launch Sept 30, 2026',
    blogUrl: '/blog/architecting-dhruvaos-foundation-schema-per-tenant-postgresql',
    blogReadTime: '13 min read',
    metrics: [
      { value: '99.6%', label: 'Latency Reduction', desc: 'p95 API response maintained under 42ms' },
      { value: '99.98%', label: 'SLA Availability', desc: 'High-throughput concurrency with zero row locks' },
      { value: '100%', label: 'Tenant Isolation', desc: 'Physical schema separation per enterprise organization' },
      { value: 'Zero', label: 'Data Leak Surface', desc: 'PostgreSQL search_path dynamically bound per request' },
    ],
    challenge:
      'A single shared database schema with tenant_id filtering introduces severe data-leak risks and database row-lock contention during peak enterprise operations. Institutional clients (hospitals, university campuses, enterprise manufacturers) demand absolute physical isolation of sensitive ledgers, student records, and tax filings with zero downtime migrations.',
    solution:
      'NeelStack engineered the DhruvaOS Foundation 9-component topology. We implemented dynamic schema-per-tenant isolation inside PostgreSQL 16, dynamically setting search_path based on verified JWT tokens. Heavy asynchronous tasks (GST e-invoicing generation, payroll runs, PDF exports) are offloaded to distributed Celery worker clusters backed by Redis 7, while Zitadel handles OIDC/SAML single sign-on.',
    architectureHighlights: [
      'PostgreSQL 16 Schema-per-Tenant isolation with dynamic connection pool search_path routing',
      'FastAPI async core engine capable of processing 12,000 requests/second per container pod',
      'Stateless Zitadel enterprise identity provider with background in-memory JWKS cache',
      'Direct NIC GST e-Invoicing integration with automated digital signature verification',
    ],
    technologies: ['Next.js 16', 'Python FastAPI', 'PostgreSQL 16', 'Redis 7', 'Celery', 'Zitadel OIDC', 'Docker'],
    statutoryCompliance: ['GST e-Invoicing Mandate', 'MCA Corporate Governance', 'ISO 27001 Security Controls'],
  },
  {
    id: 'toolvines-browser-native-wasm',
    title: 'ToolVines: Sub-Second Browser-Native Utility Engine with Zero Server-Side Storage',
    subtitle: 'Eliminating cloud server bandwidth and protecting user privacy using WebAssembly (WASM) and OffscreenCanvas.',
    systemProfile: 'ToolVines Live Production Platform (toolvines.com)',
    industry: 'Productivity SaaS & Cloud Architecture',
    category: 'cloud',
    categoryLabel: 'Browser-Native WASM',
    timeframe: 'Live Production SaaS',
    blogUrl: '/blog/architecting-toolvines-client-side-utility-engine-nextjs-16',
    blogReadTime: '11 min read',
    metrics: [
      { value: '94%', label: 'Server Cost Saved', desc: 'Shifted 95% of document compute to client browser' },
      { value: '100%', label: 'Client Data Privacy', desc: 'Zero document retention on remote cloud storage' },
      { value: '< 120ms', label: 'Processing Latency', desc: 'Local memory image resizing and format conversion' },
      { value: '100/100', label: 'Core Web Vitals', desc: 'Lighthouse score across 100+ intent landing routes' },
    ],
    challenge:
      'Traditional online file converter sites upload confidential user documents to remote cloud servers, creating severe compliance and privacy vulnerabilities under GDPR and India\'s DPDPA 2023, while generating massive cloud compute and storage bills ($18,000/month). The engineering objective was to provide instant image compression, PDF editing, and AI workflows without ever retaining private user files.',
    solution:
      'NeelStack architected ToolVines on a browser-native execution model. Using WebAssembly (WASM), HTML5 OffscreenCanvas, and disposable Web Workers, file operations execute inside the visitor\'s browser memory buffer and are garbage-collected immediately upon completion. A hybrid AI provider using Google Gemini 1.5 Flash streams tokens in sub-500ms with Upstash Redis edge rate limiting.',
    architectureHighlights: [
      'Browser-native WASM and OffscreenCanvas execution eliminating server-side file uploads',
      'Next.js 16 App Router manifest-driven routing across 100+ programmatically generated tools',
      'Disposable Web Workers preventing browser garbage collection spikes and memory leaks',
      'Edge rate limiting via Upstash Redis protecting serverless AI endpoints',
    ],
    technologies: ['Next.js 16', 'React 19', 'WebAssembly (WASM)', 'HTML5 OffscreenCanvas', 'Upstash Redis', 'Tailwind v4'],
    statutoryCompliance: ['GDPR Privacy Standard', 'India DPDPA 2023 Section 8 (Data Minimization)'],
  },
  {
    id: 'sub-50ms-enterprise-microservices',
    title: 'High-Throughput Enterprise Backend: Sub-50ms FastAPI Microservices & WORM Compliance',
    subtitle: 'Production engineering blueprints for uvloop, Pydantic v2 serialization, and immutable audit logs.',
    systemProfile: 'NeelStack Enterprise Core Engine & Microservices Standards',
    industry: 'High-Throughput Microservices & Security',
    category: 'backend',
    categoryLabel: 'Backend Architecture',
    timeframe: 'Enterprise Standard Deployment',
    blogUrl: '/blog/achieving-sub-50ms-api-latency-fastapi-redis-async-python',
    blogReadTime: '10 min read',
    metrics: [
      { value: '38ms', label: 'p95 Latency', desc: 'Sub-50ms response under sustained high-volume load' },
      { value: '82%', label: 'Serialization Speedup', desc: 'Achieved with Pydantic v2 Rust core' },
      { value: '100%', label: 'WORM Compliance', desc: 'Immutable audit logs mirrored to S3 Object Lock' },
      { value: '< 0.001%', label: 'Error Rate', desc: 'Fault-tolerant connection pooling with asyncpg' },
    ],
    challenge:
      'Enterprise transaction systems handling thousands of concurrent requests often suffer from slow serialization latency in Python, database connection exhaustion, and cache stampede cascades when hot keys expire. Additionally, statutory compliance mandates under RBI, SEBI, and India\'s DPDPA require immutable, tamper-evident audit logs that cannot be overwritten.',
    solution:
      'We standardized on FastAPI with uvloop replacing the default asyncio event loop, yielding a 3x throughput gain. Pydantic v2 with its Rust-based validation core reduced serialization overhead by 82%. We implemented tuned asyncpg connection pools with stamped-lock Redis caching to eliminate stampedes, and streamed all state mutations to AWS S3 Object Lock in Compliance Mode.',
    architectureHighlights: [
      'uvloop Cython event loop integration providing Node/Go level request handling throughput',
      'Pydantic v2 Rust serialization engine eliminating CPU parsing bottlenecks',
      'Tiered Redis caching with distributed stamped lock pattern preventing database stampedes',
      'WORM (Write Once Read Many) immutable audit trails locked under statutory retention rules',
    ],
    technologies: ['Python FastAPI', 'uvloop', 'Pydantic v2', 'asyncpg', 'Redis Cluster', 'AWS S3 Object Lock'],
    statutoryCompliance: ['India DPDPA 2023 Section 9', 'WORM Immutable Audit Log Mandate', 'SOC2 / HIPAA Standards'],
  },
]

const CATEGORIES = [
  { id: 'all', label: 'All Architecture Studies' },
  { id: 'ai', label: 'Agentic AI & AGI' },
  { id: 'erp', label: 'Enterprise ERP' },
  { id: 'cloud', label: 'Browser-Native WASM' },
  { id: 'backend', label: 'Backend Architecture' },
]

export function CaseStudiesClient() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filteredStudies = activeCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.category === activeCategory)

  return (
    <section className="py-16 md:py-24" aria-label="Case studies catalog">
      <Container className="space-y-12">
        {/* Executive Trust & Engineering Benchmark Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl shadow-lg">
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-heading font-black text-primary">100% Valid</span>
            <p className="text-xs font-bold text-foreground">Defensible Systems</p>
            <p className="text-[11px] text-muted-foreground">Real production architectures only</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-heading font-black text-cyan-600 dark:text-cyan-400">&lt; 50ms</span>
            <p className="text-xs font-bold text-foreground">p95 API Latency Standard</p>
            <p className="text-[11px] text-muted-foreground">FastAPI + Redis caching benchmarks</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-heading font-black text-emerald-600 dark:text-emerald-400">100%</span>
            <p className="text-xs font-bold text-foreground">Statutory Compliance</p>
            <p className="text-[11px] text-muted-foreground">GST, DPDPA 2023 &amp; WORM audit readiness</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-heading font-black text-violet-600 dark:text-violet-400">Zero</span>
            <p className="text-xs font-bold text-foreground">Data Leak Vulnerability</p>
            <p className="text-[11px] text-muted-foreground">Schema-per-tenant PostgreSQL isolation</p>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                  : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {filteredStudies.map((cs) => {
              const isExpanded = expandedId === cs.id
              return (
                <motion.article
                  key={cs.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-border/80 bg-card/80 dark:bg-card/40 p-6 sm:p-8 lg:p-10 shadow-xl backdrop-blur-xl card-hover relative overflow-hidden"
                >
                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/50 pb-6">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                          {cs.categoryLabel}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {cs.timeframe}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-foreground tracking-tight pt-2">
                        {cs.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cs.subtitle}
                      </p>
                    </div>

                    <div className="text-right hidden sm:block">
                      <span className="text-xs font-mono text-muted-foreground/80 block">Engineering System</span>
                      <span className="text-xs font-bold text-foreground">{cs.systemProfile}</span>
                    </div>
                  </div>

                  {/* Quantified Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                    {cs.metrics.map((metric) => (
                      <div key={metric.label} className="p-4 rounded-2xl bg-muted/40 border border-border/50 space-y-1">
                        <div className="text-2xl sm:text-3xl font-heading font-black text-foreground">
                          {metric.value}
                        </div>
                        <div className="text-xs font-bold text-primary">{metric.label}</div>
                        <div className="text-[11px] text-muted-foreground leading-snug">{metric.desc}</div>
                      </div>
                    ))}
                  </div>

                  {/* Core Architectural Narrative */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 pb-6 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    <div className="space-y-2 p-5 rounded-2xl bg-muted/20 border border-border/40">
                      <h3 className="font-bold text-foreground text-sm flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-rose-500" />
                        The Core Engineering Challenge
                      </h3>
                      <p>{cs.challenge}</p>
                    </div>
                    <div className="space-y-2 p-5 rounded-2xl bg-muted/20 border border-border/40">
                      <h3 className="font-bold text-foreground text-sm flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        The NeelStack Architectural Solution
                      </h3>
                      <p>{cs.solution}</p>
                    </div>
                  </div>

                  {/* Expandable Architecture Blueprint */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 pt-4 border-t border-border/50"
                      >
                        <div className="space-y-3">
                          <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                            <Layers className="h-4 w-4 text-primary" />
                            Key Architecture Components Deployed
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {cs.architectureHighlights.map((item, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground p-3 rounded-xl bg-card border border-border/60">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-emerald-500" />
                            Statutory &amp; Regulatory Compliance Enforced
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {cs.statutoryCompliance.map((comp, i) => (
                              <span key={i} className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                                {comp}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer Row with Direct Blog Link */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/50">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {cs.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-border/60 bg-muted/60 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : cs.id)}
                        className="text-xs font-bold text-muted-foreground hover:text-foreground underline underline-offset-4 cursor-pointer"
                      >
                        {isExpanded ? 'Collapse Blueprint' : 'View Blueprint'}
                      </button>
                      <Button asChild size="sm" variant="gradient" className="glow-cta">
                        <Link href={cs.blogUrl} className="flex items-center gap-1.5 text-xs font-bold">
                          <BookOpen className="h-3.5 w-3.5" />
                          <span>Read Full Architecture Blog ({cs.blogReadTime})</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
