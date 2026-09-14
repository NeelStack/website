'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Boxes,
  Brain,
  GraduationCap,
  Wrench,
  Workflow,
  Cpu,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

const BUILDING_PILLARS = [
  {
    icon: Boxes,
    title: 'Software Products',
    badge: 'Live & Shipped',
    desc: 'Browser-native utilities, SaaS platforms, and digital tools engineered with modern frameworks like Next.js, React, and WebAssembly.',
    color: 'text-blue-500 dark:text-blue-400',
    bgColor: 'bg-blue-500/10 border-blue-500/20',
    href: '/products',
  },
  {
    icon: Brain,
    title: 'AI Systems',
    badge: 'Research & Delivery',
    desc: 'Autonomous AI agents, retrieval-augmented generation (RAG) pipelines, custom LLM integrations, and intelligent decision systems.',
    color: 'text-violet-500 dark:text-violet-400',
    bgColor: 'bg-violet-500/10 border-violet-500/20',
    href: '/services/ai-development',
  },
  {
    icon: GraduationCap,
    title: 'School Operating System',
    badge: 'Ready for Launch',
    desc: 'DhruvaOS — our unified school operating system for school onboarding, administration, CMS, mobile apps, and institutional management (pilot onboarding open).',
    color: 'text-purple-500 dark:text-purple-400',
    bgColor: 'bg-purple-500/10 border-purple-500/20',
    href: '/products/dhruvaos',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    badge: 'Active Capability',
    desc: 'Custom workflows, API integrations, secure transaction pipelines, and internal business platforms that reduce manual operational overhead.',
    color: 'text-emerald-500 dark:text-emerald-400',
    bgColor: 'bg-emerald-500/10 border-emerald-500/20',
    href: '/services/custom-software',
  },
  {
    icon: Wrench,
    title: 'Developer Tools',
    badge: 'ToolVines Ecosystem',
    desc: 'Fast, client-side developer and productivity utilities with zero server-side storage, privacy by default, and high execution speed.',
    color: 'text-cyan-500 dark:text-cyan-400',
    bgColor: 'bg-cyan-500/10 border-cyan-500/20',
    href: 'https://toolvines.com',
    isExternal: true,
  },
  {
    icon: Cpu,
    title: 'Future AI Workforce Infrastructure',
    badge: 'Long-Term Vision',
    desc: 'Researching the AI Company Operating System — coordinating specialized AI agents across executive, analytical, and operational roles.',
    color: 'text-amber-500 dark:text-amber-400',
    bgColor: 'bg-amber-500/10 border-amber-500/20',
    href: '/#ai-strategy',
  },
]

export function WhatWeAreBuildingSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-card/30 backdrop-blur-sm border-t border-border/50">
      {/* Background ambient glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(59,130,246,0.1), transparent)',
        }}
        aria-hidden="true"
      />

      <Container className="space-y-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1 rounded-full border border-primary/25"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Our Focus &amp; Roadmap
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            What We Are Building
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
            className="text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            From live browser utilities and school operating systems to custom engineering and long-term AI workforce research.
          </motion.p>
          <motion.div
            variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] } } }}
            style={{ originX: 0.5 }}
            className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-primary/60 to-transparent mt-2"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BUILDING_PILLARS.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-3xl border border-border/70 bg-card/80 dark:bg-card/40 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between space-y-5 card-hover relative overflow-hidden transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40">
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-bold ${item.color} hover:underline`}
                    >
                      Explore details <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold ${item.color} hover:underline`}
                    >
                      Explore details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center pt-2">
          <Button asChild size="lg" variant="outline" className="rounded-xl font-bold">
            <Link href="/products" className="gap-2 flex items-center justify-center">
              View All Products &amp; Roadmap <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
