'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Laptop,
  Building2,
  Rocket,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'
import { Container } from '@/components/ui/container'

const INDUSTRIES = [
  {
    id: 'education',
    title: 'Education & EdTech',
    badge: 'Home of DhruvaOS',
    description:
      'School ERPs, student information systems, admissions pipelines, automated fee reconciliation, attendance tracking, and campus analytics.',
    icon: GraduationCap,
    accent: 'text-violet-500 dark:text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/30 text-violet-500 dark:text-violet-400',
    borderHover: 'hover:border-violet-500/50',
    ctaText: 'Explore DhruvaOS Platform',
    href: '/products/dhruvaos',
    isFlagship: true,
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    badge: 'HIPAA & DISHA Ready',
    description:
      'Patient portals, diagnostic lab workflows, appointment scheduling systems, and secure telemetry data management.',
    icon: HeartPulse,
    accent: 'text-rose-500 dark:text-rose-400',
    iconBg: 'bg-rose-500/10 border-rose-500/30 text-rose-500 dark:text-rose-400',
    borderHover: 'hover:border-rose-500/50',
    ctaText: 'Learn More',
    href: '/contact',
    isFlagship: false,
  },
  {
    id: 'saas-tech',
    title: 'Enterprise SaaS & B2B Tech',
    badge: 'High-Concurrency',
    description:
      'Multi-tenant cloud architectures, usage-based subscription billing, developer APIs, and high-volume data analytics.',
    icon: Laptop,
    accent: 'text-blue-500 dark:text-cyan-400',
    iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-500 dark:text-cyan-400',
    borderHover: 'hover:border-cyan-500/50',
    ctaText: 'Learn More',
    href: '/contact',
    isFlagship: false,
  },
  {
    id: 'retail-d2c',
    title: 'Retail & E-Commerce',
    badge: 'High Conversion',
    description:
      'Custom marketplace platforms, omnichannel inventory tracking, payment gateway integrations, and personalized recommendation engines.',
    icon: ShoppingBag,
    accent: 'text-emerald-500 dark:text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500 dark:text-emerald-400',
    borderHover: 'hover:border-emerald-500/50',
    ctaText: 'Learn More',
    href: '/contact',
    isFlagship: false,
  },
  {
    id: 'sme-enterprise',
    title: 'Real Estate & Construction',
    badge: 'Operations & ERP',
    description:
      'Project management tracking, contractor portals, vendor invoice reconciliation, property listing engines, and automated reporting.',
    icon: Building2,
    accent: 'text-amber-500 dark:text-amber-400',
    iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-500 dark:text-amber-400',
    borderHover: 'hover:border-amber-500/50',
    ctaText: 'Learn More',
    href: '/contact',
    isFlagship: false,
  },
  {
    id: 'startups',
    title: 'Startups & Scaleups',
    badge: 'Rapid 0 → 1',
    description:
      'Full-stack MVP development, architectural blueprints, scalable cloud foundations, and investor-ready technical demos.',
    icon: Rocket,
    accent: 'text-indigo-500 dark:text-indigo-400',
    iconBg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-500 dark:text-indigo-400',
    borderHover: 'hover:border-indigo-500/50',
    ctaText: 'Learn More',
    href: '/contact',
    isFlagship: false,
  },
]

export function IndustriesOverviewSection() {
  return (
    <section id="industries" className="py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden bg-transparent border-t border-border/60">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-[140px] pointer-events-none"
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
            className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1 rounded-full border border-primary/25"
          >
            Domain Expertise
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
            Industries We Engineer For
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
            Deep domain understanding combined with clean software engineering across high-impact business sectors.
          </motion.p>
        </motion.div>

        {/* 6 Balanced Domain Verticals Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4 bg-card/70 dark:bg-[#0c1222]/70 hover:bg-card dark:hover:bg-[#0c1222] border border-border/70 hover:border-primary/40 backdrop-blur-sm transition-all duration-200 relative overflow-hidden shadow-xs hover:shadow-md h-full"
              >
                <div className="space-y-3.5 relative z-10">
                  {/* Top row: Icon + Domain Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[10px] font-mono font-bold text-muted-foreground bg-muted/40 dark:bg-white/[0.04] px-2.5 py-0.5 rounded border border-border/40">
                      {industry.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-border/50 relative z-10">
                  <Link
                    href={industry.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2 transition-all"
                  >
                    {industry.ctaText} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
