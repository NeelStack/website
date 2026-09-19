'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react'

const TRUST_REASSURANCES = [
  { label: 'Direct Engineering Consultation', icon: CheckCircle2 },
  { label: 'NDA & IP Protection Guaranteed', icon: ShieldCheck },
  { label: 'Response Within 24 Business Hours', icon: Clock },
]

export function FreeConsultationCTA() {
  return (
    <Section className="relative z-10 border-t border-border/50 py-16 sm:py-20">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] p-px overflow-hidden group shadow-2xl"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 opacity-30 group-hover:opacity-50 transition-opacity duration-700" />

          {/* Inner content */}
          <div className="relative rounded-[2.4rem] bg-card/95 backdrop-blur-xl border border-border/40 p-6 sm:p-12 md:p-16 overflow-hidden flex flex-col items-center text-center z-10 space-y-6 sm:space-y-7">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight max-w-3xl relative z-10">
              Have a software challenge?{' '}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400">
                {"Let's build the right solution."}
              </span>
            </h2>

            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto relative z-10">
              Tell us about your project, timeline, and goals. We will provide a direct architectural review and engineering scope without sales pressure.
            </p>

            {/* CTA Button */}
            <div className="relative z-20 pt-1 sm:pt-2 w-full sm:w-auto">
              <Button
                asChild
                variant="3d-yellow"
                size="xl"
                className="w-full sm:w-auto h-12 sm:h-14 md:h-15 px-6 sm:px-10 text-sm sm:text-base md:text-lg rounded-2xl flex items-center justify-center gap-3 cursor-pointer shadow-xl hover:scale-105 transition-transform"
              >
                <Link href="/contact" className="flex items-center justify-center gap-3">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            {/* Trust Assurance Strip */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3 relative z-10 text-xs text-muted-foreground">
              {TRUST_REASSURANCES.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-1.5 font-medium">
                  <Icon className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
