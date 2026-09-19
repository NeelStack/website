'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import {
  Target,
  TrendingUp,
  FileCode2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react'

const VALUE_PILLARS = [
  {
    id: 'business-roi',
    pillarNumber: 'Pillar 01',
    title: 'Business-First ROI & Full-Cycle Ownership',
    subtitle: 'From Requirements to Production Deployment',
    description:
      'We treat your software as a business asset. Every architecture decision is grounded in operational efficiency, user experience, and measurable ROI.',
    icon: Target,
    accent: 'text-blue-500 dark:text-cyan-400',
    iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-500 dark:text-cyan-400',
    topGlow: 'from-blue-500/15 via-cyan-500/10 to-transparent',
    borderHover: 'hover:border-cyan-500/50',
    features: [
      'Outcome-led roadmaps focused on user workflows, not tech jargon',
      'End-to-end execution: Architecture, UX design, coding, CI/CD, and monitoring',
      'Transparent weekly sprint milestones with working software demos',
    ],
    highlightBadge: 'Outcome-Driven Engineering',
  },
  {
    id: 'scale-ai',
    pillarNumber: 'Pillar 02',
    title: 'Enterprise Scale & Pragmatic AI',
    subtitle: 'Built for High Traffic & Real Business Utility',
    description:
      'We build scalable, cloud-native systems and integrate autonomous AI agents where they eliminate real manual bottlenecks — not for marketing buzzwords.',
    icon: TrendingUp,
    accent: 'text-violet-500 dark:text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/30 text-violet-500 dark:text-violet-400',
    topGlow: 'from-violet-500/15 via-purple-500/10 to-transparent',
    borderHover: 'hover:border-violet-500/50',
    features: [
      'Cloud-native elasticity on AWS, GCP, and Kubernetes with auto-scaling',
      'Custom LLM agents, RAG search pipelines, and document automation',
      'Rigorous integration testing and automated regression guardrails',
    ],
    highlightBadge: 'Zero Hype · Production AI',
  },
  {
    id: 'ip-ownership',
    pillarNumber: 'Pillar 03',
    title: '100% IP Ownership & Direct Access',
    subtitle: 'Zero Vendor Lock-In · Speak Directly with Builders',
    description:
      'You own all source code, deployment scripts, Docker configurations, and documentation. You communicate directly with the senior engineers building your platform.',
    icon: FileCode2,
    accent: 'text-emerald-500 dark:text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500 dark:text-emerald-400',
    topGlow: 'from-emerald-500/15 via-teal-500/10 to-transparent',
    borderHover: 'hover:border-emerald-500/50',
    features: [
      '100% client intellectual property and source code ownership',
      'Direct Slack/meet collaboration with senior software architects',
      'Zero proprietary vendor lock-in or recurring framework licensing fees',
    ],
    highlightBadge: '100% IP & Code Ownership',
  },
]

export function WhyUsSection() {
  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden bg-surface/40 border-t border-border/50">
      {/* Ambient background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(59,130,246,0.08), transparent)',
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
            className="inline-block text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1 rounded-full border border-primary/25"
          >
            The NeelStack Standard
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
            What Sets Our Engineering Apart
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
            Senior engineering talent paired with full code ownership and direct architectural communication.
          </motion.p>
        </motion.div>

        {/* 3 High-Impact Value Pillars */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {VALUE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group p-5 sm:p-6 lg:p-8 rounded-3xl border-2 border-slate-200/90 dark:border-white/[0.08] bg-card/95 dark:bg-[#0a1122]/95 backdrop-blur-md space-y-5 lg:space-y-6 relative overflow-hidden tactile-card-3d ${pillar.borderHover} h-full flex flex-col justify-between shadow-md dark:shadow-2xl`}
              >
                {/* Top glow accent */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${pillar.topGlow} opacity-80 group-hover:opacity-100 transition-opacity`}
                  aria-hidden="true"
                />

                <div className="space-y-5 relative z-10">
                  {/* Top Bar: Icon + Pillar Number */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${pillar.iconBg} group-hover:scale-105 transition-transform duration-300 shadow-2xs`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="font-mono text-xs font-bold text-muted-foreground/70 bg-muted/60 dark:bg-white/[0.04] px-2.5 py-1 rounded-lg border border-border/40">
                      {pillar.pillarNumber}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-xl font-extrabold text-foreground group-hover:text-foreground transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className={`text-xs font-bold ${pillar.accent}`}>
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2 border-t border-border/40">
                    {pillar.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Highlight Badge */}
                <div className="pt-4 border-t border-border/50 relative z-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground/80 bg-muted/50 dark:bg-white/[0.04] px-3 py-1.5 rounded-lg border border-border/50 w-full justify-center">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    {pillar.highlightBadge}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
