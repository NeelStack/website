'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import {
  Code2,
  Bot,
  Cloud,
  Rocket,
  Building2,
  ShieldCheck,
  Award,
  FileCheck2,
} from 'lucide-react'

const CAPABILITY_ITEMS = [
  { label: 'Software Engineering', icon: Code2 },
  { label: 'AI & Automation', icon: Bot },
  { label: 'Cloud & DevOps', icon: Cloud },
  { label: 'Product Development', icon: Rocket },
]

const TRUST_ITEMS = [
  { label: 'MCA Registered', icon: Building2 },
  { label: 'Startup India', icon: Award },
  { label: 'MSME Recognized', icon: ShieldCheck },
  { label: 'GST Verified', icon: FileCheck2 },
]

export function TrustStripSection() {
  return (
    <section
      aria-label="NeelStack capabilities and trust credentials"
      className="relative overflow-hidden border-y border-border/70 bg-card/60 dark:bg-[#070d1e]/80 backdrop-blur-md py-5 sm:py-6 z-20"
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />

      <Container>
        <div className="flex flex-col gap-4">
          {/* Capabilities Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {CAPABILITY_ITEMS.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-background/70 dark:bg-card/60 text-xs font-semibold text-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-border/40 max-w-sm mx-auto w-full" aria-hidden="true" />

          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {TRUST_ITEMS.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-semibold text-muted-foreground"
              >
                <Icon className="h-3 w-3 text-emerald-500" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
