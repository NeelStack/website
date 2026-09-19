'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Laptop, Server, Cloud, Bot, Cpu, Database, CheckCircle2 } from 'lucide-react'

const TECH_LAYERS = [
  {
    id: 'frontend',
    title: 'Frontend & Mobile Experience',
    badge: 'Client Tier',
    icon: Laptop,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'PWA'],
    capabilities: 'Fast SSR/SSG rendering, fluid animations, and cross-platform mobile fidelity.',
    accent: 'text-blue-500 dark:text-cyan-400',
    iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-500 dark:text-cyan-400',
    borderHover: 'hover:border-cyan-500/50',
  },
  {
    id: 'backend',
    title: 'Backend & Distributed Services',
    badge: 'Core Services',
    icon: Server,
    technologies: ['Node.js', 'Python / FastAPI', 'Go', 'REST APIs', 'gRPC', 'WebSockets'],
    capabilities: 'High-throughput microservices, robust authentication, and event pipelines.',
    accent: 'text-emerald-500 dark:text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500 dark:text-emerald-400',
    borderHover: 'hover:border-emerald-500/50',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    badge: 'Scale & Resilience',
    icon: Cloud,
    technologies: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform IaC', 'CI/CD'],
    capabilities: 'Multi-region redundancy, automated deployment pipelines, and 24/7 uptime.',
    accent: 'text-amber-500 dark:text-amber-400',
    iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-500 dark:text-amber-400',
    borderHover: 'hover:border-amber-500/50',
  },
  {
    id: 'ai-data',
    title: 'AI, LLMs & Data Architecture',
    badge: 'Intelligent Tier',
    icon: Bot,
    technologies: ['OpenAI', 'Claude', 'Gemini', 'RAG Pipelines', 'PostgreSQL', 'Redis', 'pgvector'],
    capabilities: 'Autonomous task agents, semantic vector search, and partitioned databases.',
    accent: 'text-violet-500 dark:text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/30 text-violet-500 dark:text-violet-400',
    borderHover: 'hover:border-violet-500/50',
  },
]

export function TechnologySection() {
  return (
    <section id="technologies" className="py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden bg-transparent border-t border-border/60">
      <Container className="space-y-8 sm:space-y-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="inline-block text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1 rounded-full border border-primary/25"
          >
            Technology Architecture
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight text-balance"
          >
            Modern Stack. Enterprise Architecture.
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            We select battle-tested, modern tools tailored to performance, maintainability, and scale.
          </motion.p>
        </motion.div>

        {/* 4 Connected Technology Layers in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {TECH_LAYERS.map((layer, idx) => {
            const Icon = layer.icon
            return (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-3xl border-2 border-slate-200/90 dark:border-white/[0.08] bg-card/95 dark:bg-[#0a1122]/95 p-5 sm:p-7 space-y-4 tactile-card-3d ${layer.borderHover} transition-colors shadow-md dark:shadow-2xl h-full flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  {/* Header: Icon + Title + Tier Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${layer.iconBg} shrink-0`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                          {layer.badge}
                        </span>
                        <h3 className="font-heading text-base font-extrabold text-foreground">
                          {layer.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Capabilities Summary */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {layer.capabilities}
                  </p>

                  {/* Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {layer.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-foreground/90 bg-muted/60 dark:bg-white/[0.05] px-2.5 py-1 rounded-lg border border-border/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
