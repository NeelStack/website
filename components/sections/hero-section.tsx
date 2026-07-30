'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, ShieldCheck, Clock, Cpu, Sparkles, Building, Briefcase, GraduationCap } from 'lucide-react'
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

export function HeroSection() {
  const { config } = useCurrency()

  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32"
      aria-label="Hero section"
    >
      {/* ── Background grid ── */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15" aria-hidden="true" />

      {/* ── Mesh gradient backdrop ── */}
      <div className="absolute inset-0 bg-mesh-gradient" aria-hidden="true" />

      {/* ── Primary electric-blue ambient glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(59, 130, 246, 0.22) 0%, transparent 60%)',
            'radial-gradient(ellipse 45% 35% at 75% 8%, rgba(6, 182, 212, 0.16) 0%, transparent 55%)',
          ].join(', '),
        }}
        aria-hidden="true"
      />

      {/* Floating Aurora Orbs */}
      <div className="absolute top-20 left-[5%] w-72 h-72 rounded-full aurora-orb-blue pointer-events-none" aria-hidden="true" />
      <div className="absolute top-36 right-[6%] w-80 h-80 rounded-full aurora-orb-violet pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-[25%] w-96 h-96 rounded-full aurora-orb-cyan pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center gap-7 max-w-5xl mx-auto">

          {/* Pre-heading badge */}
          <span className="relative inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary shadow-[0_0_20px_rgba(70,166,252,0.15)]">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Enterprise Software &amp; AI Engineering
          </span>

          {/* Main Display Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-extrabold tracking-tight text-foreground text-balance leading-[1.08]">
            We Build <span className="text-gradient-brand">Websites</span>,{' '}
            <span className="text-gradient-fashion">Mobile Apps</span>,{' '}
            <span className="text-gradient">AI Solutions</span> &amp; Custom Software
          </h1>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty">
            From startups to enterprise platforms, we design, develop, and scale high-performance digital products using AI, modern engineering, and cloud technologies.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Button asChild variant="gradient" size="lg" className="glow-cta px-8 text-base">
              <Link href="/book-consultation">
                Get Free Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
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
          </div>

          {/* Modernized DhruvaOS Ticket Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-xl rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-rose-500/10 p-4 shadow-[0_4px_24px_rgba(245,158,11,0.08)] backdrop-blur-sm relative overflow-hidden"
          >
            <div className="flex items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-foreground">
                  DhruvaOS Beta Launch — <span className="text-amber-500">August 15</span>
                </span>
              </div>
              <Link
                href="/products/dhruvaos"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-500 hover:text-amber-400 transition-colors shrink-0"
              >
                Explore EdOS
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <p className="text-[11px] text-muted-foreground text-left mt-1">
              AI-Powered operating system managing admissions, fee records, student data, and parent communications.
            </p>
          </motion.div>

          {/* Modernized Proof & Engineering Guarantee Micro-Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-4 pt-6 border-t border-border/40">
            {/* Guarantee 1 */}
            <div className="flex items-center gap-3 p-3 rounded-xl border border-blue-500/20 bg-blue-500/5 dark:bg-blue-950/10 text-left">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground leading-snug">Enterprise Security</h4>
                <p className="text-[10px] text-muted-foreground leading-tight">Built-in role auth &amp; data encryption</p>
              </div>
            </div>

            {/* Guarantee 2 */}
            <div className="flex items-center gap-3 p-3 rounded-xl border border-violet-500/20 bg-violet-500/5 dark:bg-violet-950/10 text-left">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-500">
                <Clock className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground leading-snug">24-Hour SLA Brief</h4>
                <p className="text-[10px] text-muted-foreground leading-tight">Prompt technical assessment response</p>
              </div>
            </div>

            {/* Guarantee 3 */}
            <div className="flex items-center gap-3 p-3 rounded-xl border border-rose-500/20 bg-rose-500/5 dark:bg-rose-950/10 text-left">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-500">
                <Cpu className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground leading-snug">AI-Native Engine</h4>
                <p className="text-[10px] text-muted-foreground leading-tight">RAG vector pipelines &amp; agents</p>
              </div>
            </div>
          </div>

          {/* Colorful Badges for Trusted Industries */}
          <div className="mt-4 flex flex-col items-center gap-3 w-full">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/80">
              Trusted solutions across
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl">
              {trustedBy.map((item) => (
                <span
                  key={item.name}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-bold transition-all duration-200 cursor-default hover:scale-105 ${item.color}`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
