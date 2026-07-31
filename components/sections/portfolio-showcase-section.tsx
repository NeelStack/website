'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

export function PortfolioShowcaseSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface">
      {/* Centered glow spotlight behind heading */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(139,92,246,0.12), transparent)',
        }}
        aria-hidden="true"
      />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-violet-500/5 blur-[130px] pointer-events-none" aria-hidden="true" />

      <Container className="space-y-12 relative z-10">
        {/* Heading — staggered entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="inline-block text-xs font-bold text-violet-500 dark:text-violet-400 uppercase tracking-widest bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/25"
          >
            Portfolio &amp; Product Engineering
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            Featured SaaS Products &amp; Deliveries
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="text-sm sm:text-base text-muted-foreground"
          >
            We engineer our own live SaaS products while delivering custom enterprise platforms for clients worldwide.
          </motion.p>
          <motion.div
            variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7, delay: 0.2, ease: [0.22,1,0.36,1] } } }}
            style={{ originX: 0.5 }}
            className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* ToolVines — Teal/Cyan/Blue identity */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-3xl border border-blue-500/30 bg-gradient-to-b from-card to-blue-950/10 p-7 md:p-8 flex flex-col justify-between space-y-6 card-hover relative overflow-hidden shadow-2xl"
          >
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/25">
                  Productivity Suite
                </span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/25 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live &amp; Deployed
                </span>
              </div>

              <div>
                <h3 className="font-heading text-3xl font-extrabold text-foreground group-hover:text-blue-400 transition-colors">
                  ToolVines
                </h3>
                <p className="text-xs font-mono text-blue-500 mt-1">toolvines.com</p>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Browser-native utility platform consolidating PDF, image, document, and AI tools with zero server-side data retention.
              </p>

              {/* Authentic Feature Highlights */}
              <div className="space-y-2 pt-1 border-t border-border/40">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>PDF Tools — Merge, Split, Compress, Convert &amp; OCR</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Image Tools — Resizer, Compressor, Crop &amp; Format Converters</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Document Tools — Text Converters, Formatters &amp; Annotation</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>AI Tools — Document Search, OCR &amp; Smart Summarizer</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-surface border border-border">PDF Tools</span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-surface border border-border">Image Tools</span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-surface border border-border">Document Tools</span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-surface border border-border">AI Tools</span>
              </div>
            </div>

            <div className="pt-6 border-t border-border/40 flex items-center justify-between relative z-10">
              <Link
                href="https://toolvines.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Visit ToolVines <ExternalLink className="h-4 w-4" />
              </Link>
              <Link href="/products/toolvines" className="text-xs font-semibold text-muted-foreground hover:text-foreground">
                Learn details →
              </Link>
            </div>
          </motion.div>

          {/* DhruvaOS — Amber/Rose identity */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-3xl border border-amber-500/30 bg-gradient-to-b from-card to-amber-950/10 p-7 md:p-8 flex flex-col justify-between space-y-6 card-hover relative overflow-hidden shadow-2xl"
          >
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
                  Education OS (EdOS)
                </span>
                <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
                  Beta Launching Soon
                </span>
              </div>

              <div>
                <h3 className="font-heading text-3xl font-extrabold text-foreground group-hover:text-amber-400 transition-colors">
                  DhruvaOS
                </h3>
                <p className="text-xs font-mono text-amber-500 mt-1">Unified EdTech Operating System</p>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Unified AI-powered operating system for schools and colleges — managing admissions, academics, fee invoices, analytics, and parent communications.
              </p>

              {/* Authentic Feature Highlights */}
              <div className="space-y-2 pt-1 border-t border-border/40">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Automated Student Admissions &amp; Academic Record Management</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Fee Invoicing, Online Payment Gateways &amp; Ledger Audit</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>AI Parent Assistant &amp; WhatsApp Notification Gateway</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-surface border border-border">React 19</span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-surface border border-border">PostgreSQL</span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-surface border border-border">Redis</span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-surface border border-border">Vector RAG Engine</span>
              </div>
            </div>

            <div className="pt-6 border-t border-border/40 flex items-center justify-between relative z-10">
              <Link
                href="/products/dhruvaos"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 dark:text-amber-400 hover:underline"
              >
                Explore DhruvaOS <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-xs text-amber-500 font-mono font-bold">Beta: August 15</span>
            </div>
          </motion.div>
        </div>

        {/* Full-width Client Work Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="rounded-3xl border border-border/80 bg-surface p-8 md:p-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 card-hover shadow-lg"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/25">
              Custom Engineering Deliveries
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground">
              Enterprise Client Systems &amp; Case Studies
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Explore how we built mission-critical Healthcare EHR portals, Government E-Governance platforms, and D2C Fashion E-Commerce storefronts with sub-second page loads.
            </p>
          </div>

          <Button asChild variant="gradient" size="lg" className="shrink-0 gap-2 glow-cta">
            <Link href="/case-studies">
              View All Case Studies <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
