'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, GraduationCap, Heart, Layers, ShoppingBag, Users, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'

const TRUST_SIGNALS = [
  {
    industry: 'Healthcare & Pharma',
    metric: 'Sub-Second Records',
    description: 'Hospital EHR platforms, telemedicine portals, and HIPAA-compliant patient management systems.',
    color: 'text-rose-500 dark:text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/25',
    icon: Heart,
  },
  {
    industry: 'Government & Public Sector',
    metric: 'High-Concurrency Systems',
    description: 'Scalable recruitment portals and e-governance platforms serving millions of concurrent applicant requests.',
    color: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/25',
    icon: Building2,
  },
  {
    industry: 'EdTech & Academics',
    metric: 'Unified Education OS',
    description: 'Comprehensive school ERPs, online examination platforms, and automated parent communication networks.',
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/25',
    icon: GraduationCap,
  },
  {
    industry: 'Startups & SaaS Platforms',
    metric: 'MVP to Scale',
    description: 'Zero-to-one SaaS architecture, AI agent integration, and cloud-native serverless deployment pipelines.',
    color: 'text-violet-500 dark:text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/25',
    icon: Layers,
  },
  {
    industry: 'D2C Fashion & Retail',
    metric: 'Sub-Second Storefronts',
    description: 'Headless Next.js e-commerce storefronts with 60 FPS page transitions and real-time inventory sync.',
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/25',
    icon: ShoppingBag,
  },
  {
    industry: 'Global Enterprises',
    metric: 'Custom Workflow ERP',
    description: 'Integrated CRM portals, automated invoicing pipelines, and internal business decision systems.',
    color: 'text-cyan-500 dark:text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/25',
    icon: Users,
  },
]

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-transparent py-24 relative overflow-hidden">
      {/* Ambient bottom glow (tightened by 1/3) */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[460px] h-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(6,182,212,0.06), transparent)' }}
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
            className="inline-block text-xs font-bold text-cyan-500 dark:text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/25"
          >
            Domain Proven Execution
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            Trusted Across Critical Industries
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="text-sm sm:text-base text-muted-foreground"
          >
            From high-growth SaaS platforms to public sector organizations — we design software tailored to real-world domain workflows.
          </motion.p>
          <motion.div
            variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7, delay: 0.2, ease: [0.22,1,0.36,1] } } }}
            style={{ originX: 0.5 }}
            className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start"
        >
          {TRUST_SIGNALS.map((signal, idx) => {
            const Icon = signal.icon
            // Alternating vertical offset for masonry rhythm
            const isOffset = idx % 2 === 1
            return (
              <motion.div
                key={signal.industry}
                variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
                className={`group flex flex-col justify-between gap-5 rounded-3xl border border-border/80 bg-black/10 backdrop-blur-md p-7 card-hover hover:border-primary/30 relative overflow-hidden shadow-md ${isOffset ? 'sm:mt-8' : ''}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${signal.bg} group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-5 w-5 ${signal.color}`} aria-hidden="true" />
                    </span>
                    <span className="text-[11px] font-bold font-mono text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border">
                      {signal.metric}
                    </span>
                  </div>

                  <div>
                    <h3 className={`font-heading text-base font-bold ${signal.color}`}>
                      {signal.industry}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {signal.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="flex items-center gap-1.5 text-emerald-500">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Battle-Tested
                  </span>
                  <Link href="/case-studies" className="text-primary hover:underline">
                    View Impact →
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="flex justify-center pt-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all duration-200"
          >
            Explore Case Studies &amp; Client Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
