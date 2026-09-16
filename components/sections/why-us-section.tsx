'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Bot, Cloud, Cpu, Layers, Lock, Gauge, Search, Sparkles, Zap, ShieldCheck, Check, X } from 'lucide-react'


const COMPARISON_POINTS = [
  {
    feature: 'Product Engineering Philosophy',
    standard: 'Template-based website builders',
    neelstack: 'AI-native product engineering built to scale',
  },
  {
    feature: 'Architecture & Performance',
    standard: 'Traditional CMS with standard hosting',
    neelstack: 'Sub-second Next.js SSR + FastAPI microservices',
  },
  {
    feature: 'AI Capabilities',
    standard: 'Basic chatbot integrations',
    neelstack: 'Cognitive multi-agent workflows & vector RAG engines',
  },
  {
    feature: 'Engineering Delivery Team',
    standard: 'Traditional outsourcing model',
    neelstack: 'Dedicated senior software architects & product leads',
  },
  {
    feature: 'Design System & UX',
    standard: 'Pre-built component libraries',
    neelstack: 'Pixel-perfect OKLCH dark/light tokens with 60 FPS motion',
  },
]

export function WhyUsSection() {
  return (
    <section className="py-12 sm:py-14 md:py-16 relative overflow-hidden bg-transparent border-t border-border/50">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[460px] h-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,158,11,0.08), transparent)' }}
        aria-hidden="true"
      />

      <Container className="space-y-16 relative z-10">
        {/* Company Vision Strip */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-7 rounded-3xl border-2 border-primary/35 bg-card/85 backdrop-blur-md space-y-3 relative overflow-hidden tactile-card-3d"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 inline-block">
              Our Vision
            </span>
            <h3 className="font-heading text-xl font-extrabold text-foreground">
              Intelligent, Automated Operations
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Build technology that allows organizations and founders to operate with greater intelligence, automation, and speed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-7 rounded-3xl border-2 border-violet-500/35 bg-card/85 backdrop-blur-md space-y-3 relative overflow-hidden tactile-card-3d"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20 inline-block">
              Long-Term Vision
            </span>
            <h3 className="font-heading text-xl font-extrabold text-foreground">
              AI Company Operating Layer
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              NeelStack aims to build an AI-powered company operating layer where intelligent agents can help organizations understand their business, make better decisions, and execute work.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="inline-block text-xs font-mono font-bold text-violet-500 uppercase tracking-widest bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/25"
          >
            Engineering Standards
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            Engineering Discipline &amp; Craftsmanship
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="text-sm sm:text-base text-muted-foreground"
          >
            We don&apos;t build disposable templates. We engineer high-performance software systems designed for speed, stability, and scale.
          </motion.p>
        </motion.div>

        {/* Engineering Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl border-2 border-border/90 bg-surface/80 backdrop-blur-md p-6 sm:p-8 shadow-xl tactile-card-3d overflow-hidden"
        >
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
              The NeelStack Difference
            </span>
            <h3 className="font-heading text-2xl font-extrabold text-foreground">
              Standard Approach vs. NeelStack Engineering
            </h3>
          </div>

          {/* Column Headers (Desktop Only) */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-4 pb-2 text-[10px] font-mono font-bold uppercase tracking-widest">
            <div className="col-span-4"></div>
            <div className="col-span-4 flex items-start">
              <span className="bg-rose-500/10 text-rose-600 dark:text-rose-400 px-3 py-1 rounded-lg border border-rose-500/20">Standard Approach</span>
            </div>
            <div className="col-span-4 flex items-start">
              <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-lg border border-emerald-500/20">NeelStack Engineering</span>
            </div>
          </div>

          <div className="space-y-4">
            {COMPARISON_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-2xl bg-card border-2 border-border/70 items-center tactile-card-3d"
              >
                <div className="md:col-span-4 font-heading text-xs sm:text-sm font-bold text-foreground">
                  {item.feature}
                </div>

                <div className="md:col-span-4 flex items-center gap-2.5 text-xs text-muted-foreground bg-rose-500/5 p-3 rounded-xl border border-rose-500/20 font-medium">
                  <X className="h-5 w-5 text-rose-500 shrink-0" />
                  <span>{item.standard}</span>
                </div>

                <div className="md:col-span-4 flex items-center gap-2.5 text-xs font-bold text-foreground bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/30">
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

