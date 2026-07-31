'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Zap, ShieldCheck, Clock, Cpu, Globe, Smartphone, Bot, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { useCurrency } from '@/components/providers/currency-provider'

const trustedBy = [
  { name: 'Startups', color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  { name: 'Healthcare Orgs', color: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20' },
  { name: 'Gov Agencies', color: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20' },
  { name: 'Universities', color: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20' },
  { name: 'Enterprises', color: 'text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/20' },
  { name: 'Pharma Companies', color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
]

// Service highlights — shown as a subtle horizontal ticker below the headline
const services = [
  { icon: Globe,      label: 'Websites' },
  { icon: Smartphone, label: 'Mobile Apps' },
  { icon: Bot,        label: 'AI Solutions' },
  { icon: Wrench,     label: 'Custom Software' },
]

export function HeroSection() {
  const { config } = useCurrency()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const orbBlueY   = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
  const orbVioletY = useTransform(scrollYProgress, [0, 1], ['0%', '-55%'])
  const orbCyanY   = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.10, delayChildren: 0.08 } },
  }

  const itemVariants = {
    hidden:   { opacity: 0, y: 30 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const } },
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 min-h-[88vh] flex items-center justify-center"
      aria-label="Hero section"
    >
      {/* ── Hero-local ambient overlays (complement global AnimatedBackground) ── */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-60" aria-hidden="true" />

      {/* Electric-blue arc at top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 55% 32% at 50% -4%, rgba(59,130,246,0.18) 0%, transparent 60%)',
            'radial-gradient(ellipse 28% 22% at 78% 6%, rgba(6,182,212,0.12) 0%, transparent 55%)',
          ].join(', '),
        }}
        aria-hidden="true"
      />

      {/* Central focal glow */}
      <div
        className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[200px] rounded-full pointer-events-none opacity-20 blur-[90px] bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-8 max-w-5xl mx-auto"
        >
          {/* ── Pre-heading badge ── */}
          <motion.span
            variants={itemVariants}
            className="relative inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-cyan-500/8 px-4 py-1.5 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 shadow-[0_0_22px_rgba(6,182,212,0.18)] hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </span>
            AI-Native Product Engineering Company
          </motion.span>

          {/* ── Main Display Headline ── */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-extrabold tracking-tight text-foreground text-balance leading-[1.08]"
          >
            {/* Line 1 */}
            <span className="block">
              We Build{' '}
              <span className="text-gradient-brand">Websites,</span>{' '}
              <span className="text-gradient-brand">Mobile Apps,</span>
            </span>
            {/* Line 2 */}
            <span className="block mt-1">
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #6366f1 50%, #a855f7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AI Solutions
              </span>
              {' '}
              <span className="text-foreground">&amp;</span>
              {' '}
              <span className="text-foreground">Custom Software</span>
            </span>
          </motion.h1>

          {/* ── Service icon pills (subtle visual anchor below headline) ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2.5"
          >
            {services.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-sm px-3.5 py-1 text-xs font-semibold text-muted-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* ── Subtitle ── */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty -mt-2"
          >
            From startups to enterprise platforms, we design, develop, and scale
            high-performance digital products using{' '}
            <span className="text-foreground font-semibold">AI</span>,{' '}
            <span className="text-foreground font-semibold">modern engineering</span>, and{' '}
            <span className="text-foreground font-semibold">cloud technologies</span>.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <motion.div whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }}>
              <Button asChild variant="gradient" size="lg" className="glow-cta px-8 text-base">
                <Link href="/book-consultation">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-amber-500/40 hover:border-amber-400 hover:bg-amber-500/10 text-amber-600 dark:text-amber-400 transition-colors text-base font-semibold"
              >
                <Link href="/request-quote">
                  Get Website Audit @ {config.auditPriceFormatted}
                  <Zap className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* ── DhruvaOS Launch Banner ── */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="w-full max-w-2xl rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/8 via-card/80 to-rose-500/8 p-2.5 px-5 shadow-[0_0_28px_rgba(245,158,11,0.10)] backdrop-blur-md relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-3 text-left group"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
              </span>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-extrabold text-foreground tracking-tight">
                    DhruvaOS EdTech Platform Launch
                  </span>
                  <span className="text-[10px] font-extrabold text-amber-500 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-full">
                    August 15
                  </span>
                </div>
                <span className="text-[11px] text-muted-foreground hidden sm:block">
                  Unified AI operating system for admissions, academics &amp; student communication.
                </span>
              </div>
            </div>
            <Link
              href="/products/dhruvaos"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20"
            >
              Explore EdOS
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* ── Engineering Proof Capsule Bar ── */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-3xl rounded-2xl border border-border/70 bg-card/50 backdrop-blur-xl p-4 sm:p-5 shadow-lg grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-border/50"
          >
            <div className="flex items-center gap-3.5 sm:px-3 pt-2 sm:pt-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-extrabold text-foreground tracking-tight">Enterprise Security</h4>
                <p className="text-[11px] text-muted-foreground mt-0.5">Role auth &amp; data encryption</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:px-5 pt-3 sm:pt-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-500">
                <Clock className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-extrabold text-foreground tracking-tight">24-Hour SLA Response</h4>
                <p className="text-[11px] text-muted-foreground mt-0.5">Fast engineering evaluation</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:px-5 pt-3 sm:pt-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500">
                <Cpu className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-extrabold text-foreground tracking-tight">AI-Native Architecture</h4>
                <p className="text-[11px] text-muted-foreground mt-0.5">RAG vector pipelines &amp; LLM agents</p>
              </div>
            </div>
          </motion.div>

          {/* ── Trusted Sectors Strip ── */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 w-full">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground/70">
              Trusted across sectors
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl">
              {trustedBy.map((item) => (
                <span
                  key={item.name}
                  className={`rounded-full border px-4 py-1.5 text-xs font-bold transition-all duration-300 cursor-default hover:scale-105 ${item.color}`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
