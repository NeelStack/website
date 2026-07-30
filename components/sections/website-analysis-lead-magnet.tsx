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
  const { config } = useCurrency()

  const AUDIT_POINTS = [
    { title: 'UI/UX Design Review', desc: 'Visual hierarchy, typography contrast, layout balance, & mobile navigation responsiveness.', icon: Layout },
    { title: 'Full SEO Analysis', desc: 'Title tags, meta descriptions, canonical structures, search indexability, & JSON-LD schemas.', icon: Search },
    { title: 'Performance Audit', desc: 'Core Web Vitals, page load speed, asset optimization, & unneeded script bottlenecks.', icon: Gauge },
    { title: 'Accessibility (WCAG) Review', desc: 'Screen reader aria attributes, keyboard navigation, color contrast, & focus trap verification.', icon: Eye },
    { title: 'Security & Best Practices Audit', desc: 'SSL headers, console error leaks, CORS configurations, & dependency vulnerability scans.', icon: ShieldCheck },
    { title: 'Actionable PDF Report', desc: 'Comprehensive, prioritized PDF document with step-by-step code & design fixes.', icon: FileSearch },
  ]

  return (
    <Section className="py-20 bg-gradient-to-br from-amber-500/5 via-background to-blue-500/5 border-t border-border/40">
      <Container>
        <div className="rounded-3xl border border-amber-500/30 bg-card/90 p-8 sm:p-12 shadow-2xl backdrop-blur-sm max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Low-Cost Entry Audit</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Get Your Comprehensive Website Analysis —{' '}
              <span className="text-amber-600 dark:text-amber-400 font-mono">{config.auditPriceFormatted}</span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Don&apos;t let hidden bugs, slow load times, or bad UX hurt your conversion rates. Let our senior software engineers conduct a complete 6-point audit of your website for just{' '}
              <strong className="text-foreground">{config.auditPriceFormatted}</strong>.
            </p>
          </div>

          {/* Audit points grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AUDIT_POINTS.map((pt) => {
              const Icon = pt.icon
              return (
                <div key={pt.title} className="rounded-2xl border border-border bg-background p-5 space-y-2 card-hover">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-heading text-sm font-bold text-foreground">{pt.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pt.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-border/60">
            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Delivered as an actionable PDF report within 48 hours</span>
            </div>

            <Button asChild variant="gradient" size="lg" className="glow-cta gap-2 px-8">
              <Link href={`/request-quote?service=website-audit&price=${encodeURIComponent(config.auditPriceFormatted)}`}>
                Claim Your Website Audit ({config.auditPriceFormatted})
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
