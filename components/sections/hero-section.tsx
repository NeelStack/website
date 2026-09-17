'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { HeroSpotlight } from '@/components/ui/hero-spotlight'

const MLH_HERO_STATS = [
  { value: '99.9%', label: 'Uptime SLA', code: 'ENTERPRISE INFRA', accent: 'text-blue-600 dark:text-cyan-400' },
  { value: '<24h', label: 'Response SLA', code: 'DIRECT ENGINEER ACCESS', accent: 'text-emerald-600 dark:text-emerald-400' },
  { value: 'NDA', label: 'Privacy by Design', code: 'ZERO DATA LEAKS', accent: 'text-violet-600 dark:text-violet-400' },
  { value: '2026', label: 'Founded', code: 'DPIIT RECOGNIZED', accent: 'text-indigo-600 dark:text-indigo-400' },
]

const FRONTIER_BADGES = [
  { icon: Bot, label: 'Multi-Agent Swarms', code: 'LangGraph · MCP' },
  { icon: Cpu, label: 'Sub-Second Edge', code: 'Next.js 16 · WASM' },
  { icon: Layers, label: 'Three Core Engines', code: 'Services · DhruvaOS · ToolVines' },
  { icon: ShieldCheck, label: 'Verified Entity', code: 'DIPP278202 · MCA' },
]

export function HeroSection() {
  return (
    <HeroSpotlight className="pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-28 md:pb-10">
      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.04] dark:opacity-[0.12] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Dynamic subtle ambient mesh glow */}
      <div
        className="absolute inset-0 ambient-mesh-glow opacity-15 dark:opacity-30 pointer-events-none z-0"
        aria-hidden="true"
      />

      <Container className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Main Centered Layout */}
        <div className="flex flex-col gap-6 text-center items-center">
          {/* Top Monospace Announcement Pill — 3D Tactile Capsule */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border-2 border-blue-500/50 dark:border-cyan-400/50 bg-blue-500/10 dark:bg-blue-950/60 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-mono font-bold text-blue-600 dark:text-cyan-300 backdrop-blur-md shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_rgba(6,182,212,0.6)] hover:border-cyan-400 hover:shadow-[3px_3px_0px_#000] dark:hover:shadow-[3px_3px_0px_rgba(6,182,212,0.9)] transition-all cursor-default max-w-full">
              <Sparkles className="h-3.5 w-3.5 text-blue-500 dark:text-cyan-400 animate-pulse shrink-0" />
              <span className="tracking-tight text-center">
                [FRONTIER MULTI-AGENT INTELLIGENCE &amp; ENTERPRISE SYSTEMS]
              </span>
            </div>
          </motion.div>

          {/* Main Title with 3D Depth */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.5rem] font-extrabold tracking-[-0.035em] text-foreground text-balance leading-[1.08] lg:leading-[1.06] text-3d-headline"
          >
            Building{' '}
            <span className="text-gradient-brand drop-shadow-sm">
              Scalable Software &amp; AI Systems
            </span>{' '}
            for the AI-Native Era
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground text-balance font-sans font-medium"
          >
            NeelStack Solutions builds software products, AI-powered systems and digital platforms for businesses and organizations.
          </motion.p>

          {/* Tactile CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full sm:w-auto"
          >
            {/* Primary Yellow Tactile Button */}
            <div className="w-full sm:w-auto">
              <Button
                asChild
                variant="3d-yellow"
                size="lg"
                className="w-full sm:w-auto h-13 px-8 text-sm sm:text-base rounded-xl flex items-center justify-center gap-2"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Talk to NeelStack
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            {/* Secondary Tactile Button */}
            <div className="w-full sm:w-auto">
              <Button
                asChild
                variant="3d-secondary"
                size="lg"
                className="w-full sm:w-auto h-13 px-8 text-sm sm:text-base rounded-xl flex items-center justify-center gap-2"
              >
                <Link href="/products" className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-primary" />
                  Explore Products
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Frontier Technology Badges with 3D Micro Elevation */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-2 mt-2"
          >
            {FRONTIER_BADGES.map(({ icon: Icon, label, code }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border-2 border-border/80 bg-background/80 dark:bg-card/80 px-3.5 py-1 text-xs font-semibold text-foreground tracking-wide hover:border-cyan-500/50 hover:bg-cyan-500/5 shadow-[2px_2px_0px_rgba(0,0,0,0.06)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-150 cursor-default"
              >
                <Icon className="h-3.5 w-3.5 text-blue-500 dark:text-cyan-400" aria-hidden="true" />
                <span>{label}</span>
                <span className="font-mono text-[10px] text-muted-foreground ml-0.5 opacity-80">
                  [{code}]
                </span>
              </span>
            ))}
          </motion.div>

          {/* 3D Tactile Hero Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-4 pt-4 border-t border-border/60"
          >
            {MLH_HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center p-3.5 rounded-2xl tactile-card-3d bg-card/80 dark:bg-card/60 backdrop-blur-md cursor-default"
              >
                <span className={`font-heading text-2xl sm:text-3xl font-black ${stat.accent} tracking-tight leading-none drop-shadow-sm`}>
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-foreground mt-1.5 tracking-tight">
                  {stat.label}
                </span>
                <span className="font-mono text-[9px] text-muted-foreground mt-0.5 uppercase tracking-tight">
                  [{stat.code}]
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </HeroSpotlight>
  )
}

