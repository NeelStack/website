'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Laptop, Server, Database, Cloud, Bot, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const TECH_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    icon: Laptop,
    badge: 'Sub-Second Web & Apps',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-500/10 border-blue-500/25',
    items: [
      { name: 'Next.js 16', desc: 'App Router & Turbopack SSR' },
      { name: 'TypeScript', desc: 'Strict end-to-end type safety' },
      { name: 'React 19', desc: 'Server Components & Concurrent UI' },
      { name: 'Tailwind CSS v4', desc: 'Utility-first OKLCH design system' },
      { name: 'React Native', desc: 'Native iOS & Android compilation' },
      { name: 'Flutter', desc: 'High-fps cross-platform mobile apps' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Microservices',
    icon: Server,
    badge: 'High-Throughput APIs',
    color: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-500/10 border-cyan-500/25',
    items: [
      { name: 'Python FastAPI', desc: 'Asynchronous sub-millisecond REST APIs' },
      { name: 'Node.js / Express', desc: 'Event-driven real-time services' },
      { name: 'Go (Golang)', desc: 'Ultra-fast low-latency backend microservices' },
      { name: 'NestJS', desc: 'Enterprise-structured TypeScript backend' },
      { name: 'GraphQL & REST', desc: 'Flexible API query & mutation architecture' },
      { name: 'gRPC', desc: 'High-performance inter-service communication' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    icon: Bot,
    badge: 'Cognitive LLM Pipelines',
    color: 'text-rose-600 dark:text-rose-400',
    bgColor: 'bg-rose-500/10 border-rose-500/25',
    items: [
      { name: 'Generative LLM Models', desc: 'Multimodal AI reasoning & text generation' },
      { name: 'LangChain & LlamaIndex', desc: 'RAG vector retrieval & agent orchestration' },
      { name: 'Pinecone & Qdrant', desc: 'High-speed vector embedding databases' },
      { name: 'PyTorch & HuggingFace', desc: 'Custom model fine-tuning & NLP' },
      { name: 'Frontier Reasoning Engines', desc: 'Complex reasoning, code generation & analytical AI' },
      { name: 'Local Ollama & Open Models', desc: 'Privacy-focused self-hosted AI models' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    icon: Database,
    badge: 'ACID & Vector Storage',
    color: 'text-violet-600 dark:text-violet-400',
    bgColor: 'bg-violet-500/10 border-violet-500/25',
    items: [
      { name: 'PostgreSQL', desc: 'Enterprise relational & pgvector storage' },
      { name: 'Redis', desc: 'In-memory caching & pub/sub messaging' },
      { name: 'MongoDB', desc: 'Scalable document database pipelines' },
      { name: 'Supabase', desc: 'Realtime PostgreSQL with instant auth' },
      { name: 'Pinecone', desc: 'Managed cloud vector search DB' },
      { name: 'Amazon Aurora', desc: 'Autoscaling multi-region relational DB' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    badge: 'Zero-Downtime CI/CD',
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-500/10 border-amber-500/25',
    items: [
      { name: 'AWS & Vercel', desc: 'Global edge deployment & serverless' },
      { name: 'Docker & Kubernetes', desc: 'Containerization & pod orchestration' },
      { name: 'Terraform', desc: 'Infrastructure as Code (IaC) automation' },
      { name: 'GitHub Actions', desc: 'Automated testing & deployment CI/CD' },
      { name: 'Cloudflare', desc: 'DDoS mitigation & edge CDN caching' },
      { name: 'Datadog & Sentry', desc: 'Real-time telemetry & crash monitoring' },
    ],
  },
]

export function TechnologySection() {
  const [activeTab, setActiveTab] = useState('frontend')
  const currentCategory = TECH_CATEGORIES.find((c) => c.id === activeTab) ?? TECH_CATEGORIES[0]

  return (
    <Section id="technologies" className="py-24 relative overflow-hidden bg-card/60 backdrop-blur-sm">
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
            Battle-Tested Engineering Stack
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            Modern Tech Ecosystem
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="text-sm sm:text-base text-muted-foreground"
          >
            We build with battle-tested open-source frameworks, edge cloud infrastructure, and modern AI tools.
          </motion.p>
          <motion.div
            variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7, delay: 0.2, ease: [0.22,1,0.36,1] } } }}
            style={{ originX: 0.5 }}
            className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          />
        </motion.div>

        {/* Tab Switcher — with active tab glow */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl border border-border bg-background max-w-3xl mx-auto shadow-md">
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
        <div className="rounded-3xl border border-border/80 bg-card p-6 md:p-8 shadow-xl relative overflow-hidden">
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
                  className="group p-4 rounded-2xl border border-border/60 bg-surface/50 hover:bg-surface hover:border-primary/30 transition-all duration-200 card-hover flex flex-col justify-between gap-2"
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

