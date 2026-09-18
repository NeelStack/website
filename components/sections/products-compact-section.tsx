'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Wrench,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

export function ProductsCompactSection() {
  return (
    <section className="py-14 sm:py-18 md:py-24 relative overflow-hidden bg-transparent border-t border-border/60">
      <Container className="space-y-10 sm:space-y-12 relative z-10">
        {/* Section Header */}
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
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1 rounded-full border border-primary/25"
          >
            Product Portfolio
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            Proprietary Products Built by NeelStack
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            Beyond client services, we engineer our own market-tested platforms.
          </motion.p>
        </motion.div>

        {/* Two-column balanced product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* DhruvaOS Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-card dark:bg-[#110c22]/90 border-2 border-violet-500/30 tactile-card-3d hover:border-violet-500/60 relative overflow-hidden shadow-lg h-full"
          >
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/30 text-violet-500 dark:text-violet-400">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-extrabold text-foreground group-hover:text-violet-400 transition-colors">
                      DhruvaOS
                    </h3>
                    <p className="text-xs text-muted-foreground">AI School Operating System</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25">
                  Launch 2 Oct 2026
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                The unified operating system for schools — student information, admissions, fees, HR, attendance, parent communication, and campus analytics.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {['School ERP', 'Automated Fees', 'AI Campus Assistant', 'Parent Portal'].map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] font-medium text-violet-700 dark:text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded-md border border-violet-500/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-violet-500/20 relative z-10">
              <Button asChild variant="3d-violet" size="default" className="font-extrabold rounded-xl w-full sm:w-auto h-11 px-6">
                <Link href="/products/dhruvaos" className="gap-2 flex items-center justify-center">
                  Explore DhruvaOS <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* ToolVines Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-card dark:bg-[#091815]/90 border-2 border-emerald-500/30 tactile-card-3d hover:border-emerald-500/60 relative overflow-hidden shadow-lg h-full"
          >
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-extrabold text-foreground group-hover:text-emerald-400 transition-colors">
                      ToolVines
                    </h3>
                    <p className="text-xs text-muted-foreground">Developer & Utility Platform</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25">
                  Live & Free
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A fast, private suite of online developer tools, formatters, generators, and growth utilities. 100% browser-based with zero server storage.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {['100% Client-Side', 'Zero Data Storage', 'Developer Tools', 'Free Forever'].map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-500/20 relative z-10">
              <Button asChild variant="3d-secondary" size="default" className="font-extrabold rounded-xl w-full sm:w-auto h-11 px-6 border-emerald-500/30 hover:border-emerald-500/60">
                <a
                  href="https://toolvines.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2 flex items-center justify-center text-emerald-600 dark:text-emerald-400"
                >
                  Visit ToolVines <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
