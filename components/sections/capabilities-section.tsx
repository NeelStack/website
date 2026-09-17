'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Lock,
  Cpu,
  Sparkles,
  Layers,
  Clock,
  ArrowUpRight,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { SERVICES, SERVICE_CATEGORIES } from '@/constants/services'
import type { Service } from '@/types'

const TELEMETRY_PILLARS = [
  { label: '11 Disciplines', desc: 'Full-Spectrum Engineering', icon: Layers },
  { label: '100% IP Transfer', desc: 'Zero Vendor Lock-in', icon: Lock },
  { label: 'Sub-50ms Latency', desc: 'Edge-Rendered & WASM', icon: Zap },
  { label: 'SOC 2 / DPDP', desc: 'Enterprise Compliance', icon: Shield },
]

function CapabilityCard({ item, index }: { item: Service; index: number }) {
  const Icon = item.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="group rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 bg-card dark:bg-[#0b1329] border-2 border-border/85 tactile-card-3d hover:border-primary/60 relative overflow-hidden shadow-md"
    >
      {/* Radiant ambient glow on hover */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/15 transition-all duration-500" />

      <div className="space-y-4 relative z-10">
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${item.bgColor} ${item.color} group-hover:scale-105 transition-transform duration-300 shadow-2xs`}
          >
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 uppercase tracking-wider">
              {item.category}
            </span>
            {item.badge && (
              <span className="inline-flex text-[10px] font-mono font-bold text-muted-foreground bg-muted/80 px-2.5 py-1 rounded-full border border-border items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" /> {item.badge}
              </span>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="font-heading text-lg sm:text-xl font-extrabold text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          {item.tagline && (
            <p className="text-xs font-mono font-semibold text-primary/80 mt-1">
              {item.tagline}
            </p>
          )}
        </div>

        {/* Core Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {item.description}
        </p>

        {/* Key Capabilities Structured Checklist */}
        {item.keyCapabilities && item.keyCapabilities.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-border/40">
            {item.keyCapabilities.slice(0, 2).map((cap) => (
              <div key={cap.title} className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-foreground">{cap.title}: </span>
                  <span className="text-muted-foreground text-[11px] leading-snug">{cap.desc}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SLA & Turnaround Strip */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-muted-foreground">
          {item.slaMetric && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted/70 dark:bg-white/[0.04] border border-border/60">
              <Zap className="h-3 w-3 text-amber-500" /> {item.slaMetric}
            </span>
          )}
          {item.turnaround && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted/70 dark:bg-white/[0.04] border border-border/60">
              <Clock className="h-3 w-3 text-cyan-500" /> {item.turnaround}
            </span>
          )}
        </div>

        {/* Tech Arsenal Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.highlights.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium text-slate-700 dark:text-slate-300 bg-slate-100/90 hover:bg-slate-200/80 dark:bg-white/[0.05] dark:hover:bg-white/[0.08] px-2 py-0.5 rounded-lg border border-slate-200/80 dark:border-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-border/50 flex items-center justify-between relative z-10">
        <Link
          href={item.href}
          className={`inline-flex items-center gap-1.5 text-xs font-extrabold ${item.color} group-hover:gap-2.5 transition-all`}
        >
          Explore Service Blueprint <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          href={`/request-quote?service=${item.id}`}
          className="text-[11px] font-bold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
        >
          Scope Sprint <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  )
}

export function CapabilitiesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'All') return SERVICES
    return SERVICES.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase())
  }, [selectedCategory])

  return (
    <section id="services-capabilities" className="py-8 sm:py-10 md:py-12 bg-transparent relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none" aria-hidden="true" />

      <Container className="space-y-6 sm:space-y-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1 rounded-full border border-primary/25"
          >
            <Sparkles className="h-3.5 w-3.5" />
            [CORE ENGINEERING &amp; AI CAPABILITIES]
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            11 Production-Grade Disciplines<br className="hidden sm:block" /> Engineered for the AI Era
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
            className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            From autonomous agent swarms and sub-second web platforms to schema-isolated ERPs and cloud infrastructure — complete technical transparency with 100% source code ownership.
          </motion.p>
        </motion.div>

        {/* Telemetry Pillars Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto"
        >
          {TELEMETRY_PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.label}
                className="p-3.5 rounded-2xl border border-border/80 bg-card/70 dark:bg-card/40 backdrop-blur-md flex items-center gap-3 tactile-card-3d shadow-2xs"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground font-mono">{pillar.label}</div>
                  <div className="text-[11px] text-muted-foreground truncate">{pillar.desc}</div>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {SERVICE_CATEGORIES.map((cat) => {
            const count = cat === 'All' ? SERVICES.length : SERVICES.filter((s) => s.category.toLowerCase() === cat.toLowerCase()).length
            const isActive = selectedCategory.toLowerCase() === cat.toLowerCase()

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                  isActive
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-card/80 text-muted-foreground hover:text-foreground border-border/80 hover:border-primary/40'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Services Grid with Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <CapabilityCard key={service.id} item={service} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Action Footer */}
        <div className="pt-6 text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="3d-primary" size="lg" className="h-12 px-8 font-extrabold rounded-xl shadow-lg">
              <Link href="/services" className="gap-2 flex items-center justify-center">
                Explore Full Services Directory ({SERVICES.length}) <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="3d-secondary" size="lg" className="h-12 px-7 font-bold rounded-xl">
              <Link href="/book-consultation" className="gap-2 flex items-center justify-center">
                Book Architecture Consultation <Cpu className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            Every engagement includes 100% full source code ownership, automated CI/CD pipelines, and zero vendor lock-in.
          </p>
        </div>
      </Container>
    </section>
  )
}
