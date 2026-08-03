'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { IndustryCard } from '@/components/ui/industry-card'
import { INDUSTRIES } from '@/constants/industries'

export function IndustryGridSection() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 100% 100%, rgba(16,185,129,0.06), transparent)' }}
        aria-hidden="true"
      />

      <Container className="space-y-12 relative z-10">
        {/* Staggered heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
            className="inline-block text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/25"
          >
            Domain Verticals
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            Industries We Transform
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
            className="text-sm text-muted-foreground"
          >
            Delivering specialized software solutions built around real-world industry workflows.
          </motion.p>
          <motion.div
            variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] } } }}
            style={{ originX: 0.5 }}
            className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
          />
        </motion.div>

        {/* Staggered industry cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.id}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <IndustryCard industry={industry} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

