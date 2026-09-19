'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  TrendingDown,
  RefreshCw,
  Rocket,
  Bot,
  CheckCircle2,
  HelpCircle,
  ShieldAlert,
  Zap,
  Layers,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

const CHALLENGES = [
  {
    id: 'scaling',
    icon: TrendingDown,
    title: 'Scaling Bottlenecks & Cloud Inefficiencies',
    shortDesc: 'Slow queries, server crashes under load, and runaway cloud bills.',
    badge: 'Performance & Infra',
    accent: 'text-amber-500 dark:text-amber-400',
    iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-500 dark:text-amber-400',
    activeBg: 'border-amber-500/50 bg-amber-500/5',
    painPoint: 'Your system slows down or crashes during high traffic surges, causing lost revenue, customer churn, and unpredictable cloud provider invoices.',
    solutionHeadline: 'Elastic Cloud Architecture & Query Optimization',
    solutionDetails: [
      'Database indexing, read-replicas, and Redis distributed caching layers.',
      'Containerized microservices on Kubernetes with automated horizontal pod autoscaling.',
      'Cloud FinOps audit and compute right-sizing to cut unnecessary cloud infrastructure expenses.',
    ],
    metric: '99.99% Uptime & 40%+ Cloud Cost Reduction',
    serviceLink: '/services/devops-cloud',
    serviceLabel: 'Explore Cloud & DevOps Engineering',
  },
  {
    id: 'legacy',
    icon: RefreshCw,
    title: 'Legacy Tech Debt & Fragile Monoliths',
    shortDesc: 'Outdated monolithic code, fear of regressions, and slow releases.',
    badge: 'Modernization',
    accent: 'text-blue-500 dark:text-cyan-400',
    iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-500 dark:text-cyan-400',
    activeBg: 'border-cyan-500/50 bg-cyan-500/5',
    painPoint: 'Core business logic is trapped inside an undocumented, brittle legacy codebase where making a single change risks breaking critical production workflows.',
    solutionHeadline: 'Incremental Modular Refactoring (Strangler Fig Pattern)',
    solutionDetails: [
      'Gradual decoupling of legacy monoliths into standalone modern APIs and microservices.',
      'Automated integration test suites ensuring 100% regression safety before code promotion.',
      'Zero-downtime database migrations with automated dual-write synchronization.',
    ],
    metric: 'Zero Downtime & 3x Faster Feature Velocity',
    serviceLink: '/services/custom-software',
    serviceLabel: 'Explore Custom Software Modernization',
  },
  {
    id: 'mvp',
    icon: Rocket,
    title: 'Delayed Product Launches & Slow MVPs',
    shortDesc: 'Months spent in development without shipping to real users.',
    badge: 'Product Velocity',
    accent: 'text-rose-500 dark:text-rose-400',
    iconBg: 'bg-rose-500/10 border-rose-500/30 text-rose-500 dark:text-rose-400',
    activeBg: 'border-rose-500/50 bg-rose-500/5',
    painPoint: 'Early-stage products stall in development due to over-engineering or lack of full-stack execution, missing critical market windows and burning investor capital.',
    solutionHeadline: 'Full-Cycle Rapid Agile Engineering Sprints',
    solutionDetails: [
      'Battle-tested Next.js, Node.js, and Python foundations with built-in auth, payments, and billing.',
      'Rigorous weekly release cycles delivering tangible, testable software increments.',
      'Scalable database and API architecture ready to support 100k+ users from Day 1.',
    ],
    metric: 'Production-Ready MVP in 4–8 Weeks',
    serviceLink: '/services/web-applications',
    serviceLabel: 'Explore Web & Product Engineering',
  },
  {
    id: 'automation',
    icon: Bot,
    title: 'Manual Workflows & Operational Inefficiency',
    shortDesc: 'Teams bogged down by repetitive data entry and manual reporting.',
    badge: 'AI & Automation',
    accent: 'text-violet-500 dark:text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/30 text-violet-500 dark:text-violet-400',
    activeBg: 'border-violet-500/50 bg-violet-500/5',
    painPoint: 'Employees spend valuable hours copying data across disconnected software tools, generating reports manually, and handling repetitive customer inquiries.',
    solutionHeadline: 'Custom Autonomous AI Agents & Event Pipelines',
    solutionDetails: [
      'Custom LLM agents connected to internal tools and databases via secure APIs.',
      'Automated document processing, invoice reconciliation, and semantic search RAG systems.',
      'Event-driven webhook integrations automating multi-step operational workflows.',
    ],
    metric: '80%+ Reduction in Manual Processing Time',
    serviceLink: '/services/ai-development',
    serviceLabel: 'Explore AI & Autonomous Agents',
  },
]

export function BusinessProblemsSection() {
  const [activeId, setActiveId] = useState('scaling')
  const activeChallenge = CHALLENGES.find((c) => c.id === activeId) || CHALLENGES[0]
  const ActiveIcon = activeChallenge.icon

  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden bg-surface/50 border-t border-border/60">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.06), transparent 70%)',
        }}
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
            <HelpCircle className="h-3.5 w-3.5" />
            Problem-Led Engineering
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
            Real Business Challenges. Engineered Solutions.
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
            Select a critical operational bottleneck below to see how our engineering architecture resolves it.
          </motion.p>
        </motion.div>

        {/* Interactive Challenge -> Solution Architecture Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {/* Left Column: 4 Challenge Selectors (2x2 grid on iPad/tablet, single column on desktop & mobile) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3">
            {CHALLENGES.map((challenge) => {
              const Icon = challenge.icon
              const isActive = challenge.id === activeId
              return (
                <button
                  key={challenge.id}
                  type="button"
                  onClick={() => setActiveId(challenge.id)}
                  className={`text-left p-3.5 sm:p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex items-start gap-3.5 relative overflow-hidden group ${
                    isActive
                      ? `${challenge.activeBg} shadow-md border-primary/60 dark:border-primary/50`
                      : 'border-slate-200/80 dark:border-white/[0.06] bg-card/80 dark:bg-[#0a1122]/60 hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-card dark:hover:bg-[#0a1122]/90'
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border shrink-0 ${challenge.iconBg} ${
                      isActive ? 'scale-105' : 'group-hover:scale-105'
                    } transition-transform`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">
                        {challenge.badge}
                      </span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      )}
                    </div>
                    <h3
                      className={`font-heading text-sm sm:text-base font-extrabold leading-snug ${
                        isActive ? 'text-foreground' : 'text-foreground/85'
                      }`}
                    >
                      {challenge.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
                      {challenge.shortDesc}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column: Deep Solution Architecture Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChallenge.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-3xl p-5 sm:p-8 bg-card/95 dark:bg-[#0a1122] border-2 border-slate-200/90 dark:border-white/[0.08] shadow-lg dark:shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden"
              >
                {/* Background accent glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Problem Pain Point Alert */}
                  <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 dark:bg-rose-500/10 p-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400">
                      <ShieldAlert className="h-4 w-4 shrink-0" />
                      <span>The Business Bottleneck</span>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed pl-6">
                      {activeChallenge.painPoint}
                    </p>
                  </div>

                  {/* Engineered Solution Section */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border ${activeChallenge.iconBg}`}
                      >
                        <Zap className="h-4 w-4" />
                      </div>
                      <h4 className="font-heading text-base sm:text-lg font-extrabold text-foreground">
                        {activeChallenge.solutionHeadline}
                      </h4>
                    </div>

                    <ul className="space-y-2.5 pt-1">
                      {activeChallenge.solutionDetails.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Measurable Impact Metric */}
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 flex items-center justify-between gap-3">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      Expected Business Impact:
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400 text-right">
                      {activeChallenge.metric}
                    </span>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-4 border-t border-border/50 relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <Link
                    href={activeChallenge.serviceLink}
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold ${activeChallenge.accent} hover:gap-2.5 transition-all`}
                  >
                    {activeChallenge.serviceLabel} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <Button asChild variant="3d-yellow" size="default" className="h-10 px-5 font-bold rounded-xl text-xs sm:text-sm">
                    <Link href="/contact" className="flex items-center gap-1.5">
                      Discuss This Challenge <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}
