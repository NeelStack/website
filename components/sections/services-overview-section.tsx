'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  Bot,
  Globe,
  Cloud,
  Rocket,
  RefreshCw,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

const SERVICES = [
  {
    id: 'custom-software',
    number: '01',
    title: 'Custom Software Development',
    category: 'Enterprise Engineering',
    description:
      'Tailored business applications, internal workflow platforms, client portals, and multi-tenant systems built around your specific operations.',
    tags: ['Custom ERP', 'B2B Portals', 'Workflow Engines', 'Secure APIs'],
    icon: Code2,
    href: '/services/custom-software',
    accent: 'text-blue-500 dark:text-cyan-400',
    iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-500 dark:text-cyan-400',
    topGlow: 'from-blue-500/10 to-transparent',
    borderHover: 'hover:border-blue-500/50',
  },
  {
    id: 'ai-development',
    number: '02',
    title: 'AI & Autonomous Agents',
    category: 'Intelligent Systems',
    description:
      'Custom LLM applications, RAG search pipelines, task-executing autonomous agents, and computer vision systems embedded directly into your tools.',
    tags: ['AI Agents', 'RAG Pipelines', 'LLM Fine-Tuning', 'Document AI'],
    icon: Bot,
    href: '/services/ai-development',
    accent: 'text-violet-500 dark:text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/30 text-violet-500 dark:text-violet-400',
    topGlow: 'from-violet-500/10 to-transparent',
    borderHover: 'hover:border-violet-500/50',
  },
  {
    id: 'web-mobile',
    number: '03',
    title: 'Web & Mobile Applications',
    category: 'Product Experience',
    description:
      'High-performance web apps, responsive SaaS dashboards, and cross-platform iOS & Android mobile solutions with fluid animations and offline sync.',
    tags: ['React / Next.js', 'React Native', 'PWA & Offline', 'SaaS Dashboards'],
    icon: Globe,
    href: '/services/web-applications',
    accent: 'text-emerald-500 dark:text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500 dark:text-emerald-400',
    topGlow: 'from-emerald-500/10 to-transparent',
    borderHover: 'hover:border-emerald-500/50',
  },
  {
    id: 'cloud-devops',
    number: '04',
    title: 'Cloud Architecture & DevOps',
    category: 'Infrastructure & Scale',
    description:
      'Resilient multi-cloud deployments, automated CI/CD release pipelines, Kubernetes clustering, Terraform IaC, and 24/7 telemetry monitoring.',
    tags: ['AWS / GCP / Azure', 'Docker & K8s', 'Terraform IaC', 'CI/CD Automation'],
    icon: Cloud,
    href: '/services/devops-cloud',
    accent: 'text-amber-500 dark:text-amber-400',
    iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-500 dark:text-amber-400',
    topGlow: 'from-amber-500/10 to-transparent',
    borderHover: 'hover:border-amber-500/50',
  },
  {
    id: 'product-engineering',
    number: '05',
    title: 'Full-Cycle MVP & Product Engineering',
    category: 'Rapid Execution',
    description:
      'From wireframes to production release in weeks. Architecture, rapid sprint cycles, UX design, load testing, and investor-ready launch.',
    tags: ['Rapid MVP Build', 'Full-Stack Sprints', 'Stripe Payments', 'User Analytics'],
    icon: Rocket,
    href: '/services',
    accent: 'text-rose-500 dark:text-rose-400',
    iconBg: 'bg-rose-500/10 border-rose-500/30 text-rose-500 dark:text-rose-400',
    topGlow: 'from-rose-500/10 to-transparent',
    borderHover: 'hover:border-rose-500/50',
  },
  {
    id: 'legacy-modernization',
    number: '06',
    title: 'Legacy System Modernization',
    category: 'Refactoring & Migration',
    description:
      'Deconstruct fragile legacy monoliths into scalable microservices and modern APIs without business interruption or data loss.',
    tags: ['Microservices', 'Zero-Downtime Migration', 'API Facades', 'Security Hardening'],
    icon: RefreshCw,
    href: '/services',
    accent: 'text-indigo-500 dark:text-indigo-400',
    iconBg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-500 dark:text-indigo-400',
    topGlow: 'from-indigo-500/10 to-transparent',
    borderHover: 'hover:border-indigo-500/50',
  },
]

export function ServicesOverviewSection() {
  return (
    <section id="services" className="py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden bg-transparent">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-violet-500/5 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

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
            className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1 rounded-full border border-primary/25"
          >
            Engineering Capabilities
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
            Our Core Software Engineering Services
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
            className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Senior engineering teams building robust digital products, cloud infrastructures, and AI systems tailored to your business goals.
          </motion.p>
        </motion.div>

        {/* Architectural Capabilities Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-5 bg-card/70 dark:bg-[#0c1222]/70 hover:bg-card dark:hover:bg-[#0c1222] border border-border/70 hover:border-primary/40 backdrop-blur-sm transition-all duration-200 relative overflow-hidden shadow-xs hover:shadow-md h-full"
              >
                <div className="space-y-3.5 relative z-10">
                  {/* Item Header: Icon + Category + Number */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-105 transition-transform shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-muted-foreground/60 bg-muted/40 dark:bg-white/[0.04] px-2 py-0.5 rounded border border-border/40">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-extrabold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 block">
                      Core Deliverables
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium text-foreground/80 bg-muted/60 dark:bg-white/[0.04] px-2 py-0.5 rounded border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-border/50 relative z-10 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2 transition-all"
                  >
                    Explore Service Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Navigation CTAs */}
        <div className="pt-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              variant="3d-primary"
              size="lg"
              className="h-12 px-8 font-extrabold rounded-xl shadow-lg"
            >
              <Link href="/services" className="gap-2 flex items-center justify-center">
                Explore All 6 Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="3d-secondary"
              size="lg"
              className="h-12 px-7 font-bold rounded-xl"
            >
              <Link href="/contact" className="gap-2 flex items-center justify-center">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
