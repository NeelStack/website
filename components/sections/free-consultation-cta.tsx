'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, Zap, CheckCircle2, ShieldCheck } from 'lucide-react'

const STATS = [
  {
    value: '20',
    unit: 'min',
    label: 'Free Strategy Call',
    icon: Clock,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10 border-indigo-500/25',
  },
  {
    value: '₹0',
    unit: '',
    label: 'Zero Cost & No Commitment',
    icon: CheckCircle2,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/25',
  },
  {
    value: '48h',
    unit: '',
    label: 'Custom Proposal Turnaround',
    icon: Zap,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/25',
  },
  {
    value: '100%',
    unit: '',
    label: 'Senior Engineering Leads',
    icon: ShieldCheck,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/25',
  },
]

export function FreeConsultationCTA() {
  return (
    <Section className="py-32 relative z-10 border-t border-border/50">
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
          <div className="relative rounded-[2.4rem] bg-card/95 backdrop-blur-xl border border-border/40 p-8 md:p-14 lg:p-20 overflow-hidden flex flex-col items-center text-center z-10">
            
            {/* Ambient Background Glow inside the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              No Obligation · 100% Free
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight mb-6 max-w-3xl">
              Ready to scale? Book your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400">
                Engineering Strategy Call
              </span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              Bypass the sales pitch. Sit down directly with our senior software architects to review your technical specs, discuss timelines, and map out a custom execution plan.
            </p>

            {/* The 4 Core Stats as Floating Tiles */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mb-12 relative z-20">
              {STATS.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className={`flex flex-col items-center justify-center text-center p-5 rounded-3xl border ${stat.bg} backdrop-blur-md shadow-lg transition-transform hover:-translate-y-1`}
                  >
                    <Icon className={`h-6 w-6 mb-3 ${stat.color} opacity-80`} />
                    <span className={`text-3xl font-extrabold font-heading leading-none ${stat.color}`}>
                      {stat.value}
                      {stat.unit && <span className="text-lg ml-0.5">{stat.unit}</span>}
                    </span>
                    <span className="text-[11px] font-bold text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-20"
            >
              <Button asChild size="xl" className="h-16 px-10 text-lg font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-2xl shadow-2xl shadow-indigo-500/25 border border-indigo-400/20 glow-cta group transition-all duration-300">
                <Link href="/book-consultation" className="flex items-center gap-3">
                  Book Free 20-Min Call
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>

          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
