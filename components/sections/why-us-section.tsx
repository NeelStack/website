'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Bot, Cloud, Cpu, Layers, Lock, Gauge, Search, Sparkles, Zap, ShieldCheck, Check, X } from 'lucide-react'


const COMPARISON_POINTS = [
  {
    feature: 'Product Engineering Philosophy',
    standard: 'Generic templates & website themes',
    neelstack: 'AI-native product engineering built to scale',
  },
  {
    feature: 'Architecture & Performance',
    standard: 'Monolithic CMS setups with high latency',
    neelstack: 'Sub-second Next.js SSR + FastAPI microservices',
  },
  {
    feature: 'AI Capabilities',
    standard: 'Superficial chat widget overlays',
    neelstack: 'Cognitive multi-agent workflows & vector RAG engines',
  },
  {
    feature: 'Engineering Delivery Team',
    standard: 'Junior offshore contractors & handoffs',
    neelstack: 'Dedicated senior software architects & product leads',
  },
  {
    feature: 'Design System & UX',
    standard: 'Uninspired standard bootstrap UI',
    neelstack: 'Pixel-perfect OKLCH dark/light tokens with 60 FPS motion',
  },
]

export function WhyUsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent border-t border-border/50">
      {/* Ambient glow (tightened by 1/3) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[460px] h-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,158,11,0.08), transparent)' }}
        aria-hidden="true"
      />

      <Container className="space-y-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="inline-block text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25"
          >
            Engineering Excellence
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            Why High-Growth Teams{' '}
            <span className="relative inline-block">
              Choose Us
              {/* Gradient underline accent */}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400 rounded-full" />
            </span>
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="text-sm sm:text-base text-muted-foreground"
          >
            We don&apos;t build standard websites. We engineer high-performance software systems designed for speed, scale, and user retention.
          </motion.p>
        </motion.div>


        {/* Engineering Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl border border-border/80 bg-surface/70 backdrop-blur-md p-6 sm:p-8 shadow-xl overflow-hidden"
        >
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
              The NeelStack Difference
            </span>
            <h3 className="font-heading text-2xl font-extrabold text-foreground">
              Standard Vendor vs. NeelStack Engineering
            </h3>
          </div>

          {/* Column Headers (Desktop Only) */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-4 pb-2 text-[10px] font-bold uppercase tracking-widest">
            <div className="col-span-4"></div>
            <div className="col-span-4 flex items-start">
              <span className="bg-rose-500/10 text-rose-600 dark:text-rose-400 px-3 py-1 rounded-lg border border-rose-500/20">Standard Vendor</span>
            </div>
            <div className="col-span-4 flex items-start">
              <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-lg border border-emerald-500/20">NeelStack Engineering</span>
            </div>
          </div>

          <div className="space-y-4">
            {COMPARISON_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-2xl bg-gradient-to-r from-card to-background/50 dark:from-card dark:to-slate-900/30 border border-border/60 items-center card-hover"
              >
                <div className="md:col-span-4 font-heading text-xs sm:text-sm font-bold text-foreground">
                  {item.feature}
                </div>

                <div className="md:col-span-4 flex items-center gap-2.5 text-xs text-muted-foreground bg-rose-500/5 p-3 rounded-xl border border-rose-500/15">
                  <X className="h-5 w-5 text-rose-500 shrink-0" />
                  <span>{item.standard}</span>
                </div>

                <div className="md:col-span-4 flex items-center gap-2.5 text-xs font-semibold text-foreground bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/25">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span>{item.neelstack}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

