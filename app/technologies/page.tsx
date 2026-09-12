import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { TechCategoryBlock } from '@/components/ui/tech-badge'
import { CTASection } from '@/components/ui/cta-section'
import {
  Bot,
  Brain,
  Cpu,
  Database,
  Eye,
  Layers,
  Plug,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frontier AI & Engineering Tech Stack in India | NeelStack Ecosystem',
  description:
    'Explore the modern frontier AI ecosystem and enterprise tech stack powering NeelStack — Model Context Protocol (MCP), LangGraph, GraphRAG, Mem0, NeMo Guardrails, Qdrant, Next.js 16, and high-performance cloud backends.',
  alternates: {
    canonical: '/technologies',
  },
}

interface AILayer {
  step: string
  title: string
  category: string
  desc: string
  icon: typeof Bot
  badgeColor: string
  borderAccent: string
  tools: string[]
}

const MODERN_AI_ECOSYSTEM_LAYERS: AILayer[] = [
  {
    step: '01',
    category: 'LLM',
    title: 'Frontier Foundation LLMs',
    desc: 'State-of-the-art multimodal reasoning, high-throughput code synthesis, and structured JSON output engines.',
    icon: Sparkles,
    badgeColor: 'text-blue-500 bg-blue-500/10 border-blue-500/25',
    borderAccent: 'group-hover:border-blue-500/40',
    tools: [
      'Anthropic Claude 3.5 Sonnet',
      'Google Gemini 1.5 / 2.0 Pro',
      'OpenAI GPT-4o',
      'Meta Llama 3.3',
      'Mistral Large',
      'Cohere Command-R+',
      'Ollama / vLLM (Air-Gapped)',
    ],
  },
  {
    step: '02',
    category: 'Agentic AI',
    title: 'Agentic AI & Orchestration',
    desc: 'Cyclic state machines, deterministic multi-agent graphs, and human-in-the-loop workflow controllers.',
    icon: Bot,
    badgeColor: 'text-purple-500 bg-purple-500/10 border-purple-500/25',
    borderAccent: 'group-hover:border-purple-500/40',
    tools: [
      'LangGraph',
      'Microsoft AutoGen',
      'CrewAI',
      'Camel-AI',
      'Microsoft Agent Framework',
      'LlamaIndex Workflows',
      'AWS Strands',
    ],
  },
  {
    step: '03',
    category: 'RAG',
    title: 'GraphRAG & Cognitive Search',
    desc: 'Knowledge-graph enriched vector retrieval, semantic entity extraction, and self-optimizing RAG pipelines.',
    icon: Search,
    badgeColor: 'text-orange-500 bg-orange-500/10 border-orange-500/25',
    borderAccent: 'group-hover:border-orange-500/40',
    tools: [
      'Microsoft GraphRAG',
      'DSPy (Stanford Self-Optimizing)',
      'LlamaIndex',
      'Haystack 2.0',
      'LangChain',
      'RAGFlow',
    ],
  },
  {
    step: '04',
    category: 'Embedding',
    title: 'Dense & Contextual Embeddings',
    desc: 'High-dimensional semantic embeddings, cross-encoder rerankers, and multimodal feature vector generation.',
    icon: Layers,
    badgeColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/25',
    borderAccent: 'group-hover:border-emerald-500/40',
    tools: [
      'OpenAI text-embedding-3-large',
      'Cohere Embed v3',
      'Voyage AI (Voyage-3)',
      'BAAI BGE-M3',
      'Azure OpenAI Embeddings',
      'Google Vertex AI Embeddings',
    ],
  },
  {
    step: '05',
    category: 'MCP',
    title: 'Model Context Protocol (MCP)',
    desc: 'Standardized open protocol connecting autonomous AI models to enterprise tools, filesystems, and databases.',
    icon: Plug,
    badgeColor: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/25',
    borderAccent: 'group-hover:border-cyan-500/40',
    tools: [
      'Anthropic MCP SDK',
      'MCP Registry',
      'PostgreSQL MCP Server',
      'GitHub MCP Server',
      'Slack MCP Server',
      'Google Drive MCP Server',
      'Filesystem MCP Server',
    ],
  },
  {
    step: '06',
    category: 'AI Security',
    title: 'Security, Guardrails & Privacy',
    desc: 'Programmatic dialogue rails, automated PII sanitization, prompt injection defenses, and enterprise compliance.',
    icon: ShieldCheck,
    badgeColor: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/25',
    borderAccent: 'group-hover:border-indigo-500/40',
    tools: [
      'NVIDIA NeMo Guardrails',
      'Guardrails AI',
      'Microsoft Presidio (PII Masking)',
      'Lakera Guard',
      'Prompt Security',
      'Azure AI Content Safety',
      'AWS Bedrock Guardrails',
    ],
  },
  {
    step: '07',
    category: 'Observability',
    title: 'AI Observability & Tracing',
    desc: 'Full-stack LLM call tracing, token cost analytics, latency profiling, and automated evaluation red-teaming.',
    icon: Eye,
    badgeColor: 'text-amber-500 bg-amber-500/10 border-amber-500/25',
    borderAccent: 'group-hover:border-amber-500/40',
    tools: [
      'Langfuse (Open-Source Tracing)',
      'LangSmith',
      'Weights & Biases',
      'Promptfoo Red-Teaming',
      'TruLens',
      'OpenTelemetry AI Instrumentation',
    ],
  },
  {
    step: '08',
    category: 'Memory',
    title: 'Stateful Agent Memory',
    desc: 'Long-term semantic and episodic memory layers enabling agents to recall user preferences across sessions.',
    icon: Brain,
    badgeColor: 'text-rose-500 bg-rose-500/10 border-rose-500/25',
    borderAccent: 'group-hover:border-rose-500/40',
    tools: [
      'Mem0 (AI Memory Layer)',
      'Zep (Temporal Memory)',
      'Letta (MemGPT Stateful Memory)',
      'LangGraph Checkpointing',
      'Redis Vector Memory',
      'PostgreSQL pgvector',
      'Chroma',
    ],
  },
  {
    step: '09',
    category: 'AI Agent',
    title: 'Autonomous Agent Frameworks',
    desc: 'Production-grade agent runtimes with strict static typing, tool validation, and swarm delegation logic.',
    icon: Cpu,
    badgeColor: 'text-teal-500 bg-teal-500/10 border-teal-500/25',
    borderAccent: 'group-hover:border-teal-500/40',
    tools: [
      'PydanticAI (Type-Safe Production)',
      'OpenAI Agents SDK / Swarm',
      'LangChain Agents',
      'Semantic Kernel',
      'Google ADK',
      'AWS Bedrock Agents',
    ],
  },
  {
    step: '10',
    category: 'Vector Database',
    title: 'Vector Databases & Indexing',
    desc: 'Ultra-fast approximate nearest neighbor (ANN) search engines indexing millions of enterprise documents.',
    icon: Database,
    badgeColor: 'text-violet-500 bg-violet-500/10 border-violet-500/25',
    borderAccent: 'group-hover:border-violet-500/40',
    tools: [
      'Qdrant (Rust Vector DB)',
      'pgvector (PostgreSQL)',
      'Milvus (Distributed Cloud)',
      'Pinecone',
      'Weaviate',
      'Redis Vector Search',
      'MongoDB Atlas Vector',
    ],
  },
]

const ENTERPRISE_STACK_CATEGORIES = [
  {
    title: 'Frontend & WebAssembly',
    technologies: [
      'Next.js 16 App Router',
      'React 19 Server Components',
      'TypeScript 5.5+',
      'Rust WebAssembly (WASM)',
      'Tailwind CSS v4 (OKLCH)',
      'Framer Motion',
      'Radix UI / shadcn',
      'TanStack Query v5',
    ],
  },
  {
    title: 'Mobile Architecture',
    technologies: [
      'React Native',
      'Flutter',
      'Expo Application Services',
      'Swift (iOS Native)',
      'Kotlin (Android Native)',
      'Offline-First SQLite',
    ],
  },
  {
    title: 'Backend & Microservices',
    technologies: [
      'Python FastAPI',
      'Go (Golang)',
      'Rust Systems Services',
      'Node.js / NestJS',
      'gRPC & Protocol Buffers',
      'GraphQL Apollo',
      'Pydantic v2',
    ],
  },
  {
    title: 'Databases & In-Memory',
    technologies: [
      'PostgreSQL 16',
      'pgvector',
      'Redis 7 Cluster',
      'Supabase Realtime',
      'Amazon Aurora',
      'ClickHouse OLAP',
      'MongoDB Atlas',
    ],
  },
  {
    title: 'Cloud & Edge Infrastructure',
    technologies: [
      'AWS Multi-Region',
      'Vercel Edge Network',
      'Cloudflare Workers & WAF',
      'Google Cloud Platform',
      'Azure Cloud',
      'Fly.io Edge',
    ],
  },
  {
    title: 'DevOps, CI/CD & IaC',
    technologies: [
      'Docker Containers',
      'Kubernetes (K8s)',
      'Terraform / OpenTofu',
      'GitHub Actions CI/CD',
      'ArgoCD GitOps',
      'Helm Charts',
    ],
  },
  {
    title: 'Testing & Quality Assurance',
    technologies: [
      'Vitest',
      'Playwright E2E',
      'k6 Performance Load Testing',
      'Pytest',
      'Storybook',
      'Lighthouse CI',
    ],
  },
  {
    title: 'Observability & APM',
    technologies: [
      'Langfuse',
      'Datadog APM',
      'Sentry Tracing',
      'OpenTelemetry',
      'Grafana & Prometheus',
      'Logfire',
    ],
  },
  {
    title: 'Security & Enterprise Auth',
    technologies: [
      'OAuth 2.1 & OpenID Connect',
      'Auth.js / Supabase Auth',
      'Keycloak IAM',
      'AWS KMS & Vault',
      'Snyk Vulnerability Scans',
      'OWASP ZAP',
    ],
  },
]

export default function TechnologiesPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Frontier AI & Cloud Architecture"
        title="The Modern AI & Engineering Ecosystem"
        description="We engineer intelligent software systems using modern frontier AI frameworks, autonomous multi-agent runtimes, Model Context Protocol (MCP), and battle-tested edge cloud infrastructure."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Technologies' }]}
      />

      {/* Modern AI Ecosystem 10-Layer Visual Showcase */}
      <section className="py-20 relative overflow-hidden" aria-labelledby="ai-ecosystem-heading">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
              10-Layer Frontier Architecture
            </span>
            <h2 id="ai-ecosystem-heading" className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight">
              The Modern AI Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We leverage an end-to-end cognitive architecture—spanning foundation reasoning models, Model Context Protocol (MCP), GraphRAG neural retrieval, real-time guardrails, and persistent agent memory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MODERN_AI_ECOSYSTEM_LAYERS.map((layer) => {
              const Icon = layer.icon
              return (
                <div
                  key={layer.step}
                  className={`group relative rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:bg-card/90 ${layer.borderAccent}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-md border font-mono ${layer.badgeColor}`}>
                            {layer.step} {layer.category}
                          </span>
                        </div>
                        <h3 className="font-heading text-lg font-bold text-foreground mt-1">
                          {layer.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                    {layer.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                    {layer.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center rounded-lg border border-border/60 bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground/85 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Enterprise Full-Stack & Systems Infrastructure */}
      <section className="py-16 border-t border-border/60 bg-muted/20" aria-labelledby="enterprise-stack-heading">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
              Production-Grade Infrastructure
            </span>
            <h2 id="enterprise-stack-heading" className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground">
              Enterprise Engineering & Systems Stack
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Battle-tested full-stack frameworks, high-throughput microservices, and automated zero-downtime deployment pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ENTERPRISE_STACK_CATEGORIES.map((category) => (
              <TechCategoryBlock
                key={category.title}
                title={category.title}
                technologies={category.technologies}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want to build with a frontier AI & modern cloud stack?"
        description="Whether you are architecting autonomous agentic workflows with MCP or scaling a high-throughput enterprise platform, our engineering leads are ready to collaborate."
        primaryLabel="Schedule Architecture Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore Case Studies"
        secondaryHref="/blog"
      />
    </MarketingLayout>
  )
}
