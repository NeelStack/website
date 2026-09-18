'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  GraduationCap,
  Users,
  IndianRupee,
  CalendarCheck,
  BookOpen,
  MessageSquare,
  Bot,
  BarChart3,
  Sparkles,
  Wrench,
  ExternalLink,
  Lock,
  CheckCircle2,
  Activity,
  Shield,
  Layers,
  Server,
  Database,
  Cloud,
  Cpu,
  Terminal,
  Network,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

const DHRUVAOS_FEATURES = [
  { label: 'Admissions & Students', icon: Users },
  { label: 'Fee Collection & Finance', icon: IndianRupee },
  { label: 'Attendance & Timetables', icon: CalendarCheck },
  { label: 'Academics & Exams', icon: BookOpen },
  { label: 'Parent Communication', icon: MessageSquare },
  { label: 'AI Campus Assistant', icon: Bot },
  { label: 'Executive Analytics', icon: BarChart3 },
]

export function DhruvaOSShowcaseSection() {
  return (
    <section id="products" className="py-14 sm:py-18 md:py-24 relative overflow-hidden bg-surface/50 border-t border-border/60">
      {/* Ambient violet mesh glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(139,92,246,0.12), transparent 70%)',
        }}
        aria-hidden="true"
      />

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
          className="text-center max-w-3xl mx-auto space-y-4"
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
            className="inline-flex items-center gap-2 text-xs font-bold text-violet-500 dark:text-violet-400 uppercase tracking-widest bg-violet-500/10 px-3.5 py-1 rounded-full border border-violet-500/30"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Proprietary Products & Platforms
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
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight text-balance"
          >
            Built & Engineered by NeelStack
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
            className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Beyond enterprise client services, we engineer our own market-tested platforms and developer networks.
          </motion.p>
        </motion.div>

        {/* Flagship DhruvaOS Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto rounded-3xl border-2 border-violet-500/30 bg-card/95 dark:bg-[#0a0718]/95 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-md dark:shadow-2xl relative overflow-hidden"
        >
          {/* Corner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Product Information */}
            <div className="lg:col-span-5 space-y-6 relative z-10">
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-500 dark:text-violet-400 uppercase tracking-widest bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/30">
                  <GraduationCap className="h-3.5 w-3.5" />
                  Flagship Product
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Launching 2 Oct 2026
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  Meet DhruvaOS
                </h3>
                <p className="text-sm sm:text-base font-semibold text-violet-500 dark:text-violet-400">
                  The AI-Powered School Operating System
                </p>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A unified institutional platform built to replace fragmented software. From online admissions and automated fee reconciliation to smart attendance, exams, and AI-driven campus analytics.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {DHRUVAOS_FEATURES.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <span
                      key={feature.label}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-violet-500/20 bg-violet-500/5 dark:bg-violet-500/10 px-2.5 py-1 text-[11px] font-semibold text-foreground hover:border-violet-500/40 transition-all cursor-default"
                    >
                      <Icon className="h-3 w-3 text-violet-500 dark:text-violet-400 shrink-0" />
                      {feature.label}
                    </span>
                  )
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <Button
                  asChild
                  variant="3d-violet"
                  size="default"
                  className="h-11 px-6 font-extrabold rounded-xl shadow-lg"
                >
                  <Link href="/products/dhruvaos" className="gap-2 flex items-center justify-center">
                    Explore DhruvaOS <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="3d-secondary"
                  size="default"
                  className="h-11 px-5 font-bold rounded-xl"
                >
                  <Link href="/book-consultation" className="gap-2 flex items-center justify-center">
                    Book a Demo <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Genuine Production Architecture Topology Blueprint */}
            <div className="lg:col-span-7 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-60 pointer-events-none" />

              {/* Browser Mockup Window (Theme-Adaptive) */}
              <div className="relative rounded-2xl border-2 border-slate-200/90 dark:border-violet-500/30 bg-slate-100/90 dark:bg-[#07040f] overflow-hidden shadow-xl dark:shadow-2xl">
                {/* Title Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-200/70 dark:bg-[#0e091e] border-b border-slate-200 dark:border-violet-500/20 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-slate-700 dark:text-violet-200 bg-white dark:bg-violet-950/70 px-4 py-0.5 rounded-md border border-slate-200 dark:border-violet-500/25 shadow-2xs">
                    <Lock className="h-3 w-3 text-violet-500 dark:text-violet-400" />
                    <span>https://dhruvaos.com</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold font-mono">
                    <Activity className="h-3 w-3 animate-pulse text-emerald-500" />
                    <span>Live Architecture</span>
                  </div>
                </div>

                {/* Minimal Production Architecture Blueprint Canvas */}
                <div className="p-4 sm:p-5 space-y-3 bg-slate-50/90 dark:bg-gradient-to-b dark:from-[#0e081e] dark:via-[#090514] dark:to-[#06030c] text-foreground dark:text-white">
                  {/* Layer 1: Edge & Ingress Tier */}
                  <div className="rounded-xl border border-violet-200 dark:border-violet-500/30 bg-violet-50/70 dark:bg-violet-500/10 p-3 flex items-center justify-between gap-3 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/15 dark:bg-violet-500/20 text-violet-600 dark:text-violet-300">
                        <Network className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-heading text-xs font-bold text-slate-900 dark:text-white">Edge Security & Ingress</span>
                          <span className="text-[9px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-500/30 font-bold">
                            WAF + TLS 1.3
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-600 dark:text-slate-300 font-mono">
                          AWS WAF · CloudFront CDN · Application Load Balancer
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Layer 2: Identity & Security Tier */}
                  <div className="rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] p-2.5 flex items-center justify-between gap-3 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/15 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300">
                        <Shield className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-heading text-xs font-bold text-slate-900 dark:text-white">Zitadel IAM & Multi-Tenant Auth</span>
                          <span className="text-[9px] font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-1.5 py-0.2 rounded border border-cyan-200 dark:border-cyan-500/30 font-bold">
                            SSO & RBAC
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                          Role-Based Access Control · MFA / Passkeys · Tenant Isolation
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Layer 3: Application & AI Services (ECS Fargate) */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] p-2.5 space-y-1 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-xs font-bold text-cyan-700 dark:text-cyan-300">Core Engine</span>
                        <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400">FastAPI</span>
                      </div>
                      <p className="text-[10px] text-slate-600 dark:text-slate-300 leading-tight">
                        Admissions, Student SIS, Fee Engine, Attendance & Exams
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] p-2.5 space-y-1 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-xs font-bold text-violet-700 dark:text-violet-300">AI Campus Engine</span>
                        <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400">GenAI & RAG</span>
                      </div>
                      <p className="text-[10px] text-slate-600 dark:text-slate-300 leading-tight">
                        Intelligent Query Assistant, Document AI & Automated Insights
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] p-2.5 space-y-1 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-xs font-bold text-emerald-700 dark:text-emerald-300">Web Portals</span>
                        <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400">Next.js 16</span>
                      </div>
                      <p className="text-[10px] text-slate-600 dark:text-slate-300 leading-tight">
                        School Administration, Faculty, Students & Parent Portals
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] p-2.5 space-y-1 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-xs font-bold text-amber-700 dark:text-amber-300">Admin Control Plane</span>
                        <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400">Governance</span>
                      </div>
                      <p className="text-[10px] text-slate-600 dark:text-slate-300 leading-tight">
                        Multi-School Onboarding, Licensing & Audit Logging
                      </p>
                    </div>
                  </div>

                  {/* Layer 4: Isolated Data & Storage Tier */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-2.5 flex items-center gap-2.5 shadow-2xs">
                      <Database className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <div className="min-w-0">
                        <span className="font-heading text-xs font-bold text-slate-900 dark:text-slate-200 block truncate">RDS PostgreSQL 16</span>
                        <span className="text-[9px] text-slate-500 dark:text-slate-400 font-mono">pgvector · Multi-AZ HA · KMS Encrypted</span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-2.5 flex items-center gap-2.5 shadow-2xs">
                      <Server className="h-4 w-4 text-rose-600 dark:text-rose-400 shrink-0" />
                      <div className="min-w-0">
                        <span className="font-heading text-xs font-bold text-slate-900 dark:text-slate-200 block truncate">ElastiCache Redis</span>
                        <span className="text-[9px] text-slate-500 dark:text-slate-400 font-mono">Sub-ms Cache · TLS & AUTH Protected</span>
                      </div>
                    </div>
                  </div>

                  {/* Layer 5: Enterprise Security & Cloud Reliability */}
                  <div className="pt-2 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-600 dark:text-slate-400 font-mono">
                    <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-semibold">
                      <Cloud className="h-3 w-3 text-amber-500 dark:text-amber-400" />
                      AWS Cloud Architecture
                    </span>
                    <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-semibold">
                      <Lock className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                      Zero-Trust Secrets Manager
                    </span>
                    <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-semibold">
                      <CheckCircle2 className="h-3 w-3 text-violet-600 dark:text-violet-400" />
                      Encrypted S3 Backups
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Companion Ecosystem Product: ToolVines */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-6xl mx-auto rounded-2xl border-2 border-emerald-500/30 bg-card/90 dark:bg-[#081512]/90 backdrop-blur-md p-5 sm:p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400 shrink-0">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-heading text-base font-extrabold text-foreground">
                  ToolVines
                </h4>
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/25">
                  Free Platform
                </span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-1">
                A fast, private suite of online developer tools and formatters. 100% client-side privacy with zero server storage.
              </p>
            </div>
          </div>

          <a
            href="https://toolvines.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 transition-all shrink-0"
          >
            Visit ToolVines <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
