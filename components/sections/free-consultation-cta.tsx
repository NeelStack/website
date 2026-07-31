'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Clock, Sparkles, ArrowRight, Target, Laptop } from 'lucide-react'

export function FreeConsultationCTA() {
  const BENEFIT_ITEMS = [
    { title: '20-Minute Strategy Call', desc: 'Direct video/phone session with a senior software architect.', icon: Clock },
    { title: 'Understand Requirements', desc: 'In-depth review of your business goals and technical specs.', icon: Target },
    { title: 'Discuss Expectations', desc: 'Clear evaluation of timelines, budget boundaries, and scope.', icon: Sparkles },
    { title: 'Recommended Solution', desc: 'Custom tech stack recommendation and execution roadmap.', icon: Laptop },
  ]

  return (
    <Section className="py-20 bg-gradient-to-br from-emerald-950/20 via-background to-blue-950/20 border-t border-border/40">
      <Container className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-emerald-500/30 bg-card/90 p-8 sm:p-12 shadow-2xl backdrop-blur-sm space-y-10"
        >
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>No Obligation · 100% Free</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              Get Your First Consultation Call <span className="text-emerald-600 dark:text-emerald-400">FREE!</span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Have a project in mind or need expert advice on AI, web development, or cloud architecture? Book a free 20-minute strategy session with our engineering leads — no sales pitch, just honest technical guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFIT_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-2xl border border-border bg-background p-5 space-y-2 card-hover">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button asChild variant="gradient" size="lg" className="glow-cta gap-2 px-8">
              <Link href="/book-consultation">
                Book Free 20-Min Strategy Call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/request-quote">Get a Project Quote</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
