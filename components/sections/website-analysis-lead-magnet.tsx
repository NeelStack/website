'use client'

import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { useCurrency } from '@/components/providers/currency-provider'
import {
  CheckCircle2,
  FileSearch,
  Layout,
  Gauge,
  ShieldCheck,
  Search,
  Sparkles,
  ArrowRight,
  Eye,
} from 'lucide-react'

export function WebsiteAnalysisLeadMagnet() {
  const AUDIT_POINTS = [
    { title: 'Architecture & System Health Review', desc: 'Component hierarchy, server/client boundaries, state management, and memory efficiency.', icon: Layout },
    { title: 'Full Technical SEO & Discoverability', desc: 'Title tags, metadata hierarchies, canonical indexing structures, and rich JSON-LD schemas.', icon: Search },
    { title: 'Core Web Vitals & Speed Optimization', desc: 'LCP, INP, CLS benchmarks, bundle tree-shaking, font loading, and hydration bottlenecks.', icon: Gauge },
    { title: 'Accessibility & WCAG Compliance', desc: 'Screen reader aria attributes, keyboard tab indexing, color contrast, and focus management.', icon: Eye },
    { title: 'Security & Enterprise Guardrails', desc: 'Strict CSP headers, CORS policies, auth token handling, and dependency vulnerability scans.', icon: ShieldCheck },
    { title: 'Architectural Action Plan', desc: 'Comprehensive, prioritized technical blueprint with step-by-step engineering recommendations.', icon: FileSearch },
  ]

  return (
    <Section className="bg-background/50 border-t border-border/60">
      <Container size="xl">
        <div className="rounded-3xl border border-border/80 bg-card/80 p-6 sm:p-8 md:p-10 shadow-xl backdrop-blur-md w-full space-y-6 sm:space-y-8 card-hover relative overflow-hidden">
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" aria-hidden="true" />

          <div className="text-center space-y-4 max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Enterprise Technical Assessment</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Enterprise Architecture &amp; System Health Review
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Don&apos;t let hidden architectural bottlenecks, slow response times, or UX friction impact your growth. Book a dedicated architecture discovery session with our senior software engineers.
            </p>
          </div>

          {/* Audit points grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {AUDIT_POINTS.map((pt) => {
              const Icon = pt.icon
              return (
                <div key={pt.title} className="rounded-2xl border border-border/80 bg-background/60 backdrop-blur-md p-6 space-y-3 transition-all duration-300 hover:border-cyan-500/40 hover:bg-background/80 shadow-sm">
                  <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-400">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="font-heading text-sm font-bold text-foreground">{pt.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pt.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-border/80 relative z-10">
            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Complimentary 20-minute architecture discovery with our engineering leads</span>
            </div>

            <Button asChild variant="3d-yellow" size="lg" className="gap-2 px-8">
              <Link href="/book-consultation">
                Book Architecture Discovery
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
