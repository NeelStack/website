'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

    <Section className="py-20 bg-background/50 border-t border-border/60">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-border/80 bg-card/80 shadow-xl backdrop-blur-md overflow-hidden card-hover"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-0">

            {/* ── LEFT: Main content ── */}
            <div className="p-8 sm:p-12 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>No Obligation · 100% Free</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Get Your First Consultation Call{' '}
                  <span className="text-indigo-400">FREE!</span>
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                  Have a project in mind or need expert advice on AI, web development, or cloud architecture? Book a free 20-minute strategy session with our engineering leads — no sales pitch, just honest technical guidance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BENEFIT_ITEMS.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-2xl border border-border/80 bg-background/60 backdrop-blur-md p-5 space-y-2.5 transition-all duration-300 hover:border-indigo-500/40 hover:bg-background/80 shadow-sm">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-sm font-bold text-foreground">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
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
            </div>

            {/* ── RIGHT: Advisor character illustration ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="relative hidden lg:flex items-center justify-center bg-black/10 border-l border-border/30 overflow-hidden min-h-[380px]"
              aria-hidden="true"
            >
              {/* Soft glow behind character */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 65% at 50% 85%, rgba(99,102,241,0.15) 0%, transparent 70%)',
                }}
              />

              {/* "100% Free" badge */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full border border-border/40 bg-black/30 backdrop-blur-md px-4 py-1.5 shadow-md whitespace-nowrap text-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                <span className="text-[11px] font-bold text-foreground">No Sales Pitch · Completely Free</span>
              </div>

              {/* Float wrapper */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-full px-4 pb-0 flex justify-center"
              >
                <Image
                  src="/images/illustrations/cta-advisor.png"
                  alt="Friendly consultant illustration"
                  width={380}
                  height={450}
                  className="w-full h-auto object-contain object-center scale-110"
                  style={{
                    filter:
                      'drop-shadow(0 16px 32px rgba(99,102,241,0.2))',
                  }}
                />
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

