'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Layers, Wrench, Calendar, ShieldCheck, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const TELEMETRY_STATS = [
  {
    id: 'engines',
    label: '3 Core Engines',
    tag: 'SERVICES · DHRUVAOS · TOOLVINES',
    desc: 'Unified enterprise & product ecosystem',
    icon: Layers,
    accent: 'text-blue-600 dark:text-blue-400',
    badgeBg: 'bg-blue-500/10 border-blue-500/25',
    href: '#three-engines',
  },
  {
    id: 'tools',
    label: '320+ Tools Live',
    tag: 'TOOLVINES ECOSYSTEM',
    desc: 'Zero-upload browser utilities & WASM',
    icon: Wrench,
    accent: 'text-emerald-600 dark:text-emerald-400',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/25',
    href: 'https://toolvines.com',
    isExternal: true,
  },
  {
    id: 'launch',
    label: 'Oct 2, 2026',
    tag: 'DHRUVAOS FLAGSHIP LAUNCH',
    desc: 'School operating system pilots active',
    icon: Calendar,
    accent: 'text-violet-600 dark:text-violet-400',
    badgeBg: 'bg-violet-500/10 border-violet-500/25',
    href: '/products/dhruvaos',
  },
  {
    id: 'verifiable',
    label: '100% Verifiable',
    tag: 'DIPP278202 · CIN U62011UP2026PTC250857',
    desc: 'Startup India & MCA registered entity',
    icon: ShieldCheck,
    accent: 'text-amber-600 dark:text-amber-400',
    badgeBg: 'bg-amber-500/10 border-amber-500/25',
    href: '#corporate-governance',
  },
]

export function TelemetryProofBar() {
  return (
    <section aria-label="NeelStack key metrics and accreditation proof" className="relative overflow-hidden border-y border-border/70 bg-card/60 dark:bg-[#070d1e]/80 backdrop-blur-md py-6 sm:py-8 z-20">
      {/* Background ambient gradient line */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {TELEMETRY_STATS.map((stat, idx) => {
            const Icon = stat.icon
            const content = (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between p-4 sm:p-4.5 rounded-2xl bg-background/70 dark:bg-card/60 tactile-card-3d hover:border-blue-500/60 cursor-pointer overflow-hidden"
              >
                {/* Top row with icon & tag */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${stat.badgeBg} ${stat.accent} transition-transform group-hover:scale-105`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-heading text-sm sm:text-base font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {stat.label}
                    </span>
                  </div>

                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </div>

                {/* Monospace MLH proof badge */}
                <div className="space-y-1">
                  <div className="inline-block">
                    <span className="font-mono text-[10px] font-bold tracking-tight text-foreground/80 dark:text-slate-300 bg-muted dark:bg-slate-900/90 px-2 py-0.5 rounded border border-border/90 group-hover:border-primary/40 transition-colors">
                      [{stat.tag}]
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            )

            return stat.isExternal ? (
              <a
                key={stat.id}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <Link key={stat.id} href={stat.href} className="block">
                {content}
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
