'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Laptop, Server, Cloud, Bot, Network, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const TECH_CATEGORIES = [
  {
    id: 'agentic-ai',
    title: 'Agentic AI & MCP',
    icon: Bot,
    badge: 'Autonomous Multi-Agent Runtimes',
    color: 'text-rose-600 dark:text-rose-400',
    bgColor: 'bg-rose-500/10 border-rose-500/25',
    items: [
      { name: 'LangGraph & Multi-Agent Graphs', desc: 'Deterministic cyclic state machines, human-in-the-loop & persistence checkpoints' },
      { name: 'Model Context Protocol (MCP)', desc: 'Anthropic MCP SDK, custom enterprise database & tool servers' },
      { name: 'PydanticAI & Agent Frameworks', desc: 'Type-safe production agent runtimes with validated tool schemas' },
      { name: 'Frontier Foundation LLMs', desc: 'Anthropic Claude 3.5 Sonnet, Google Gemini 1.5/2.0 Pro, GPT-4o, Llama 3.3' },
      { name: 'Multi-Agent Swarms', desc: 'Microsoft AutoGen, CrewAI & collaborative multi-agent task execution' },
      { name: 'Air-Gapped & Local Inference', desc: 'vLLM, Ollama & high-throughput self-hosted open-weights models' },
    ],
  },
  {
    id: 'rag-memory',
    title: 'GraphRAG & Memory',
    icon: Network,
    badge: 'Cognitive Retrieval & Neural State',
    color: 'text-violet-600 dark:text-violet-400',
    bgColor: 'bg-violet-500/10 border-violet-500/25',
    items: [
      { name: 'Microsoft GraphRAG', desc: 'Knowledge-graph accelerated retrieval over unstructured enterprise corpora' },
      { name: 'DSPy Compiled Pipelines', desc: 'Self-optimizing algorithmic prompt synthesis & structured reasoning pipelines' },
      { name: 'Mem0 & Letta (MemGPT)', desc: 'Stateful episodic, semantic, and hierarchical agent memory architectures' },
      { name: 'LlamaIndex & Haystack 2.0', desc: 'High-accuracy document ingestion, hybrid semantic chunking & reranking' },
      { name: 'Qdrant & pgvector', desc: 'Rust-based vector search & PostgreSQL HNSW high-dimensional indexing' },
      { name: 'Voyage AI & BGE-M3', desc: 'State-of-the-art dense embedding models with contextual reranker layers' },
    ],
  },
  {
    id: 'ai-security',
    title: 'Security & Observability',
    icon: ShieldCheck,
    badge: 'Enterprise Guardrails & Telemetry',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-500/10 border-emerald-500/25',
    items: [
      { name: 'NVIDIA NeMo Guardrails', desc: 'Programmable dialogue safety rails, topical containment & jailbreak mitigation' },
      { name: 'Langfuse & LangSmith', desc: 'Distributed LLM tracing, latency profiling, cost tracking & session replay' },
      { name: 'Microsoft Presidio', desc: 'Automated enterprise PII detection, redaction & compliance data masking' },
      { name: 'Promptfoo Red-Teaming', desc: 'Automated LLM vulnerability red-teaming & CI/CD evaluation test harnesses' },
      { name: 'Guardrails AI & Lakera', desc: 'Real-time hallucination prevention & prompt injection defense shields' },
      { name: 'OpenTelemetry AI Spans', desc: 'Standardized vendor-agnostic distributed telemetry across agent microservices' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & WASM',
    icon: Laptop,
    badge: 'Sub-Second Next.js & WebAssembly',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-500/10 border-blue-500/25',
    items: [
      { name: 'Next.js 16 App Router', desc: 'Turbopack, Server Actions & edge streaming SSR architectures' },
      { name: 'React 19 & Concurrent UI', desc: 'React Compiler, Server Components & optimistic state mutations' },
      { name: 'Rust & WebAssembly (WASM)', desc: 'Zero-latency client-side compute powering ToolVines utility suite' },
      { name: 'TypeScript 5.5+', desc: 'Strict end-to-end static type safety across distributed API surfaces' },
      { name: 'Tailwind CSS v4', desc: 'Modern OKLCH color engine & lightning-fast atomic compilation' },
      { name: 'React Native & Flutter', desc: '60 FPS cross-platform native iOS & Android applications' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Microservices',
    icon: Server,
    badge: 'High-Throughput Go & FastAPI',
    color: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-500/10 border-cyan-500/25',
    items: [
      { name: 'Python FastAPI', desc: 'Asynchronous sub-millisecond REST APIs with Pydantic v2 validation' },
      { name: 'Go (Golang) Services', desc: 'Ultra-low-latency concurrency & minimal memory footprint microservices' },
      { name: 'Rust Systems Services', desc: 'Memory-safe, zero-cost abstractions for compute-intensive workloads' },
      { name: 'NestJS & Node.js', desc: 'Enterprise-structured modular TypeScript microservices architecture' },
      { name: 'gRPC & Protocol Buffers', desc: 'High-performance binary inter-service streaming & low-overhead RPCs' },
      { name: 'PostgreSQL 16 & Redis 7', desc: 'Enterprise ACID relational storage, in-memory caching & pub/sub' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud, Edge & DevOps',
    icon: Cloud,
    badge: 'Zero-Downtime Infrastructure',
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-500/10 border-amber-500/25',
    items: [
      { name: 'AWS & Vercel Edge', desc: 'Multi-region global distribution, serverless lambdas & edge caching' },
      { name: 'Docker & Kubernetes', desc: 'Containerization, pod autoscaling & zero-downtime rolling deploys' },
      { name: 'Terraform & OpenTofu', desc: 'Declarative Infrastructure-as-Code for reproducible cloud topologies' },
      { name: 'GitHub Actions CI/CD', desc: 'Automated test suites, security scans & production pipelines' },
      { name: 'Cloudflare Workers & WAF', desc: 'Global edge computing, anti-DDoS & edge security rules' },
      { name: 'Datadog & Sentry', desc: 'Enterprise APM telemetry, distributed traces & real-time alerting' },
    ],
  },
]

export function TechnologySection() {
  const [activeTab, setActiveTab] = useState('agentic-ai')
  const currentCategory = TECH_CATEGORIES.find((c) => c.id === activeTab) ?? TECH_CATEGORIES[0]

  return (
    <Section id="technologies" className="py-24 relative overflow-hidden bg-transparent">
      {/* Subtle dark mesh backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(59,130,246,0.05), transparent)' }}
        aria-hidden="true"
      />
      <Container className="space-y-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="inline-block text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/25"
          >
            Frontier AI & Enterprise Stack
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            Next-Generation Tech Ecosystem
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="text-sm sm:text-base text-muted-foreground"
          >
            We architect autonomous multi-agent systems, Model Context Protocol (MCP) integrations, GraphRAG neural memory, and high-concurrency distributed backends.
          </motion.p>
          <motion.div
            variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7, delay: 0.2, ease: [0.22,1,0.36,1] } } }}
            style={{ originX: 0.5 }}
            className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          />
        </motion.div>

        {/* Tab Switcher — with active tab glow */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl border border-border bg-black/10 backdrop-blur-md max-w-3xl mx-auto shadow-md">
          {TECH_CATEGORIES.map((cat) => {
            const Icon = cat.icon
            const isActive = activeTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  'relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer',
                  isActive
                    ? 'text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/80'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-primary rounded-xl shadow-[0_0_20px_rgba(70,166,252,0.4)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span>{cat.title}</span>
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Tech Stack Grid with AnimatePresence */}
        <div className="rounded-3xl border border-border/80 bg-black/10 backdrop-blur-md p-6 md:p-8 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border/60 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${currentCategory.bgColor} ${currentCategory.color}`}>
                <currentCategory.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">{currentCategory.title}</h3>
                <span className={`text-xs font-semibold uppercase tracking-wider ${currentCategory.color}`}>
                  {currentCategory.badge}
                </span>
              </div>
            </div>
            <span className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full font-mono">
              6 Enterprise Core Frameworks
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {currentCategory.items.map((tech) => (
                <div
                  key={tech.name}
                  className="group p-4 rounded-2xl border border-border/60 bg-black/5 hover:bg-surface hover:border-primary/30 transition-all duration-200 card-hover flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </h4>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tech.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  )
}

