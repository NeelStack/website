'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Zap, Globe, Smartphone, Bot, Wrench, CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { useCurrency } from '@/components/providers/currency-provider'

const trustedBy = [
  { name: 'Startups', color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  { name: 'Healthcare Orgs', color: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20' },
  { name: 'Gov Agencies', color: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20' },
  { name: 'Universities', color: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20' },
  { name: 'Enterprises', color: 'text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/20' },
]

const services = [
  { icon: Globe, label: 'Websites' },
  { icon: Smartphone, label: 'Mobile Apps' },
  { icon: Bot, label: 'AI Agents' },
  { icon: Wrench, label: 'Custom Software' },
]

const OWN_PRODUCTS = [
  {
    id: 'toolVines',
    name: 'ToolVines',
    badge: 'Live',
    badgeColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
    dot: 'bg-emerald-500',
    href: '/products/toolvines',
    desc: 'Developer Productivity Platform',
  },
  {
    id: 'dhruvaos',
    name: 'DhruvaOS',
    badge: 'Aug 15',
    badgeColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/15 border-amber-500/30',
    dot: 'bg-amber-500',
    href: '/products/dhruvaos',
    desc: 'AI EdTech Operating System',
  },
  {
    id: 'naukariMitra',
    name: 'NaukariMitra',
    badge: 'In Dev',
    badgeColor: 'text-blue-600 dark:text-blue-400 bg-blue-500/15 border-blue-500/30',
    dot: 'bg-blue-400',
    href: '/products',
    desc: 'AI Job & Career Guidance',
  },
]

export function HeroSection() {
  const { config } = useCurrency()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16 lg:min-h-[85vh] flex flex-col justify-center"
      aria-label="Hero section"
    >
      {/* Ambient mesh */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-60 pointer-events-none" aria-hidden="true" />

      {/* Top arc gradient */}
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

      <Container className="relative z-10 w-full">
        {/* Main Grid: Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-center">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
          >
            {/* Pre-heading badge */}
            <motion.span
              variants={itemVariants}
              className="relative inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-cyan-500/8 px-4 py-1.5 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 shadow-[0_0_22px_rgba(6,182,212,0.15)] hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </span>
              AI-Native Product Engineering · We Build & We Ship
            </motion.span>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] xl:text-[3.6rem] font-extrabold tracking-tight text-foreground text-balance leading-[1.1]"
            >
              <span className="block">
                We Build{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 40%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Websites,
                </span>
              </span>
              <span className="block mt-0.5">
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #d946ef 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Mobile Apps,
                </span>{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #0d9488 45%, #10b981 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  AI Agents
                </span>
              </span>
              <span className="block mt-0.5 text-foreground">
                &amp; Custom Software
              </span>
            </motion.h1>

            {/* Subtitle — explicitly calls out AI agents and own products */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty"
            >
              We engineer high-performance digital products for clients — and ship{' '}
              <span className="text-foreground font-semibold">our own AI-powered SaaS products</span>.
              From intelligent{' '}
              <span className="text-foreground font-semibold">AI agents &amp; chatbots</span> to{' '}
              <span className="text-foreground font-semibold">full-stack platforms</span>, we deliver
              end-to-end using modern cloud architecture.
            </motion.p>

            {/* Service pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              {services.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 shadow-sm backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-foreground/80"
                >
                  <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons with Perfect Alignment and Height Match */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 450, damping: 15 }}
                className="w-full sm:w-auto"
              >
                <Button asChild size="lg" className="w-full sm:w-auto h-13 px-8 text-sm sm:text-base font-bold bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white rounded-xl shadow-lg shadow-primary/20 border-0 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200">
                  <Link href="/book-consultation" className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 450, damping: 15 }}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-13 px-8 text-sm sm:text-base font-bold border-2 border-amber-500/40 bg-amber-500/5 hover:border-amber-500 hover:bg-amber-500/15 text-amber-600 dark:text-amber-400 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                >
                  <Link href="/request-quote" className="flex items-center gap-2">
                    Get Website Audit @ {config.auditPriceFormatted}
                    <Zap className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* ── RIGHT COLUMN: Premium Team Collaboration Illustration (No unnecessary container wrapper) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center pt-0 pb-4 lg:mb-0"
            aria-hidden="true"
          >
            {/* Team Collaboration Image directly (larger size, no container wrapper padding) */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full max-w-[440px] flex justify-center py-4"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-violet-500/12 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
              <Image
                src="/images/illustrations/hero_img_transparent.png"
                alt="NeelStack Hero Illustration"
                width={540}
                height={450}
                className="w-full h-auto object-contain relative z-10 opacity-92 dark:brightness-105"
                style={{
                  filter: 'drop-shadow(0 16px 32px rgba(139,92,246,0.20)) drop-shadow(0 0 20px rgba(168,85,247,0.12))',
                }}
                priority
              />
            </motion.div>
          </motion.div>

        </div>

        {/* ── BOTTOM ROW: Spans full width under hero columns ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mt-14 pt-8 border-t border-border/40 grid grid-cols-1 lg:grid-cols-[62%_38%] gap-8 w-full text-left"
        >
          {/* Also building our own products */}
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-card/90 to-background/50 backdrop-blur-xl p-5 space-y-3.5 shadow-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground/80">
                Also building our own products
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {OWN_PRODUCTS.map((product) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="group relative rounded-xl p-[1px] bg-gradient-to-br from-cyan-500/40 via-emerald-500/10 to-violet-500/40 hover:from-cyan-400/60 hover:to-violet-400/60 transition-all duration-300 shadow-sm overflow-hidden block"
                >
                  <div className="flex items-center gap-2.5 bg-background/10 backdrop-blur-md px-3 py-3 rounded-xl h-full w-full">
                    <span className={`relative flex h-2 w-2 shrink-0`}>
                      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${product.dot} opacity-60`} />
                      <span className={`relative inline-flex h-2 w-2 rounded-full ${product.dot}`} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-extrabold text-foreground group-hover:text-primary transition-colors truncate">{product.name}</span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border ${product.badgeColor}`}>{product.badge}</span>
                      </div>
                      <p className="text-[10px] text-foreground/70 truncate mt-0.5">{product.desc}</p>
                    </div>
                    <ArrowRight className="h-3 w-3 text-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Serving sectors */}
          <div className="flex flex-col gap-3 justify-center">
            <div className="flex items-center gap-3 w-full">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground/60 shrink-0">
                Serving sectors
              </p>
              <div className="flex-1 h-px bg-border/40" />
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {trustedBy.map((item) => (
                <span
                  key={item.name}
                  className={`rounded-full border px-3 py-1.5 text-[11px] font-bold transition-all duration-300 cursor-default hover:scale-105 ${item.color}`}
                >
                  {item.name}
                </span>
              ))}
              <span className="rounded-full border border-border/50 px-3 py-1.5 text-[11px] font-bold text-muted-foreground/70">
                + more
              </span>
            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  )
}
