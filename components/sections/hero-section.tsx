'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Smartphone, Bot, Wrench, ShieldCheck, Zap, Lock, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { HeroSpotlight } from '@/components/ui/hero-spotlight'

const services = [
  { icon: Globe, label: 'Websites', hub: 'enterprise' },
  { icon: Smartphone, label: 'Mobile Apps', hub: 'enterprise' },
  { icon: Bot, label: 'AI Agents', hub: 'agents' },
  { icon: Wrench, label: 'Custom Software', hub: 'toolvines' },
]

const ENTERPRISE_METRICS = [
  { icon: Globe, label: 'Global Delivery & Timezones', desc: 'Serving US, UK, UAE, EU & India' },
  { icon: ShieldCheck, label: 'Cloud-Native Architecture', desc: 'High-availability global edge' },
  { icon: Zap, label: 'Low-Latency Agent Execution', desc: 'Optimized inference pipelines' },
  { icon: Lock, label: 'International IP & Privacy', desc: 'Strict NDAs & client-side encryption' },
]

export function HeroSection() {
  const triggerHubHover = (hub: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('neelstack-hub-hover', { detail: { hub } }))
    }
  }

  const triggerHubLeave = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('neelstack-hub-leave'))
    }
  }

  return (
    <HeroSpotlight>
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.20] dark:opacity-[0.30] pointer-events-none z-0" aria-hidden="true" />

      {/* Static ambient mesh */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-35 dark:opacity-55 pointer-events-none z-0" aria-hidden="true" />

      <Container className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Main Centered Layout */}
        <div className="flex flex-col gap-6 text-center items-center">
          {/* Top Announcement Pill (Sequence 1.2s) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/products/dhruvaos"
              onMouseEnter={() => triggerHubHover('dhruva')}
              onMouseLeave={triggerHubLeave}
              className="group inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/15 px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 transition-all duration-200 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] max-w-[calc(100vw-2rem)] sm:max-w-full"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="truncate sm:whitespace-normal">Ready for Launch: <strong>DhruvaOS</strong> — School Operating System (Pilots Open)</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform text-cyan-500 shrink-0" />
            </Link>
          </motion.div>

          {/* Main Title — Exact Required Headline (Sequence 1.5s) */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.85rem] font-extrabold tracking-[-0.03em] text-foreground text-balance leading-[1.08] lg:leading-[1.04]"
          >
            Building the{' '}
            <span className="text-gradient-brand">Software &amp; AI Systems</span>
            <br />
            <span className="text-foreground">of Tomorrow</span>
          </motion.h1>

          {/* Subtitle — Exact Required Subheadline (Sequence 1.8s) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground text-balance font-sans mt-2"
          >
            NeelStack Solutions builds software products, AI-powered systems and digital platforms for businesses and organizations.
          </motion.p>

          {/* Service Pills (Sequence 2.0s) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-2 mt-2"
          >
            {services.map(({ icon: Icon, label, hub }) => (
              <span
                key={label}
                onMouseEnter={() => triggerHubHover(hub)}
                onMouseLeave={triggerHubLeave}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/50 shadow-sm backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-foreground/85 tracking-wide hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-200 cursor-default"
              >
                <Icon className="h-3.5 w-3.5 text-blue-500" aria-hidden="true" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* Primary CTA Buttons (Sequence 2.2s) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full sm:w-auto"
          >
            <div
              className="w-full sm:w-auto transition-transform duration-200 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]"
              onMouseEnter={() => triggerHubHover('agents')}
              onMouseLeave={triggerHubLeave}
            >
              <Button asChild size="lg" className="w-full sm:w-auto h-13 px-8 text-sm sm:text-base font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl shadow-lg shadow-blue-500/25 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_8px_24px_rgba(37,99,235,0.25)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 btn-shimmer">
                <Link href="/products" className="flex items-center gap-2">
                  Explore Products
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div
              className="w-full sm:w-auto transition-transform duration-200 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]"
              onMouseEnter={() => triggerHubHover('enterprise')}
              onMouseLeave={triggerHubLeave}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-13 px-8 text-sm sm:text-base font-bold border border-violet-500/30 hover:border-violet-400 bg-background/60 dark:bg-card/40 backdrop-blur-md hover:bg-violet-500/10 text-foreground hover:text-foreground hover:shadow-[0_0_24px_rgba(139,92,246,0.2)] rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Talk to NeelStack
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Integrated Defensible Enterprise Metrics Strip (Sequence 2.5s) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mt-6 pt-5 sm:mt-10 sm:pt-8 border-t border-border/50"
          >
            {ENTERPRISE_METRICS.map((metric) => {
              const Icon = metric.icon
              return (
                <div
                  key={metric.label}
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-border/60 bg-card/30 dark:bg-white/[0.02] backdrop-blur-sm transition-colors hover:border-blue-500/30"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon className="h-3.5 w-3.5 text-cyan-500" />
                    <span className="text-xs font-bold text-foreground tracking-tight">
                      {metric.label}
                    </span>
                  </div>
                  <span className="text-[11px] text-muted-foreground text-center">
                    {metric.desc}
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </Container>
    </HeroSpotlight>
  )
}
