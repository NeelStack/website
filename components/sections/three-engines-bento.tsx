'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ExternalLink,
  Bot,
  GraduationCap,
  Wrench,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  Activity,
  Lock,
  Terminal,
  Network,
  ArrowUpRight,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

const ENGINE_SERVICES = {
  id: 'services',
  engineNumber: '// ENGINE 01',
  name: 'NeelStack Services',
  category: 'Enterprise AI & Custom Software Engineering',
  badge: 'ENTERPRISE AI & DEV · ZERO DATA LEAK',
  description:
    'Architecting production-grade multi-agent swarms, Model Context Protocol (MCP) tool pipelines, sub-second web platforms, and schema-per-tenant enterprise backends.',
  accentColor: 'text-blue-500 dark:text-cyan-400',
  icon: Bot,
  actionText: 'Book AI Consultation',
  actionHref: '/book-consultation',
  capabilities: [
    {
      title: 'Multi-Agent Autonomous Swarms',
      desc: 'LangGraph cyclic state machines, human-in-the-loop approvals, and deterministic AST schemas.',
    },
    {
      title: 'Sub-Second Next.js 16 Frontends',
      desc: 'Turbopack, React 19 Server Components, and Rust WASM edge runtimes.',
    },
    {
      title: 'Schema-per-Tenant Backends',
      desc: 'Dynamic PostgreSQL 16 schema isolation, FastAPI async core, and Redis 7 clusters.',
    },
    {
      title: 'Air-Gapped & Enterprise Security',
      desc: '100% tenant-isolated VPCs, automated PII redaction, and strict legal NDAs.',
    },
  ],
  techTags: [
    'LangGraph',
    'MCP Protocol',
    'Python FastAPI',
    'Next.js 16',
    'PostgreSQL 16',
    'pgvector',
    'uvloop',
    'Docker Edge',
  ],
  specs: [
    { label: 'Edge Latency', value: '< 20ms Global', icon: Zap, detail: 'Cloudflare / Docker Edge' },
    { label: 'Agent Protocol', value: 'Model Context Protocol (MCP)', icon: Network, detail: 'Universal Agent Tooling' },
    { label: 'Data Isolation', value: '100% Tenant-Sandboxed', icon: Lock, detail: 'Dynamic Schema Routing' },
    { label: 'System SLA', value: '99.99% Production Uptime', icon: ShieldCheck, detail: 'Fault-Tolerant Microservices' },
  ],
  pipelineSteps: [
    { step: '01', name: 'Event / Prompt Trigger' },
    { step: '02', name: 'LangGraph Multi-Agent Swarm' },
    { step: '03', name: 'MCP Tool & Sandbox Execution' },
    { step: '04', name: 'Zero-Leak Schema DB' },
    { step: '05', name: 'Sub-50ms Response' },
  ],
}

const ENGINE_DHRUVAOS = {
  id: 'dhruvaos',
  engineNumber: '// ENGINE 02',
  name: 'DhruvaOS',
  category: 'Institutional Operating System',
  badge: 'LAUNCH: 02 OCT 2026 · PILOTS OPEN',
  description:
    'The modern institutional operating system powering school administration, automated student lifecycles, dynamic fee ledgers, and official multi-campus portals.',
  accentColor: 'text-violet-500 dark:text-violet-400',
  icon: GraduationCap,
  actionText: 'Explore DhruvaOS Ecosystem',
  actionHref: '/products/dhruvaos',
  capabilities: [
    'End-to-End Student Lifecycle & Digital Admissions',
    'Automated Institutional Fee Ledgers & Online Payment Gateway',
    'Instant School CMS, Official Portal & Native Mobile Apps',
    'Autonomous Compliance & Academic Report Generation',
  ],
  techTags: ['Multi-Campus OS', 'Automated Fee Ledgers', 'School CMS', 'Mobile Apps', 'Pilot Phase'],
  specs: [
    { label: 'Pilot Onboarding', value: 'Active & Enrolling', icon: Sparkles },
    { label: 'Architecture', value: 'Turborepo Monorepo', icon: Layers },
  ],
}

const ENGINE_TOOLVINES = {
  id: 'toolvines',
  engineNumber: '// ENGINE 03',
  name: 'ToolVines',
  category: 'Developer Utility Network',
  badge: '320+ LIVE TOOLS · 100% PRIVATE',
  description:
    'A global ecosystem of 320+ free, ultra-fast browser tools engineered with WebAssembly. Everything processes in-browser for complete client-side data privacy.',
  accentColor: 'text-emerald-500 dark:text-emerald-400',
  icon: Wrench,
  actionText: 'Visit ToolVines.com',
  actionHref: 'https://toolvines.com',
  capabilities: [
    '320+ Live Browser Utilities (PDF, Image, WASM, OCR)',
    '100% Client-Side Processing with Zero Server File Uploads',
    'Rust-Powered WebAssembly for Native In-Browser Speed',
    'Ad-Free Clean Architecture with Instant Utility Delivery',
  ],
  techTags: ['320+ Free Tools', 'Rust WASM', 'Zero Uploads', 'Client Privacy', 'Instant Export'],
  specs: [
    { label: 'Server Retention', value: '0.00 KB Uploaded', icon: ShieldCheck },
    { label: 'Execution', value: '100% Client Memory', icon: Cpu },
  ],
}

export function ThreeEnginesBento() {
  return (
    <section id="three-engines" className="py-8 sm:py-10 md:py-12 relative overflow-hidden bg-transparent">
      {/* Background Ambience */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[350px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(37, 99, 235, 0.08), rgba(139, 92, 246, 0.06), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="space-y-6 sm:space-y-8 relative z-10">
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
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1 rounded-full border border-primary/25"
          >
            <Layers className="h-3.5 w-3.5" />
            [THE THREE CORE ENGINES]
          </motion.div>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight text-balance"
          >
            Integrated Operating Model
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-sans"
          >
            Three specialized, reinforcing divisions delivering enterprise AI consulting, proprietary SaaS infrastructure, and global developer tools.
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* ══════════════════════════════════════════════════════════════════
              CARD 1: ENGINE 01 — NEELSTACK SERVICES (SPAN 7)
              Enriched Flagship Architecture & Zero Gaps
             ══════════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl border-2 border-border/90 bg-card/85 dark:bg-[#0c1222]/90 backdrop-blur-xl p-6 sm:p-8 mlh-card-chunky hover:border-blue-500/70 relative overflow-hidden group shadow-xl"
          >
            <div className="space-y-6 relative z-10">
              {/* Header Badge & Category */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    {ENGINE_SERVICES.engineNumber}
                  </span>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    {ENGINE_SERVICES.category}
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-cyan-300 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/30">
                  [{ENGINE_SERVICES.badge}]
                </span>
              </div>

              {/* Title & Core Summary */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
                    {ENGINE_SERVICES.name}
                  </h3>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/30 text-cyan-400 shadow-sm">
                    <Bot className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ENGINE_SERVICES.description}
                </p>
              </div>

              {/* Multi-Agent Swarm Pipeline Architecture Banner */}
              <div className="p-3.5 rounded-2xl bg-muted/40 dark:bg-[#080d1a]/80 border border-cyan-500/20 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 font-bold">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Multi-Agent Swarm Pipeline Topology</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-normal">State-Graph Driven</span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                  {ENGINE_SERVICES.pipelineSteps.map((p, idx) => (
                    <div key={p.step} className="flex items-center gap-1.5">
                      <span className="px-2 py-1 rounded-lg bg-card border border-border text-foreground font-semibold flex items-center gap-1 shadow-2xs">
                        <span className="text-[9px] text-cyan-500 font-black">{p.step}</span>
                        <span>{p.name}</span>
                      </span>
                      {idx < ENGINE_SERVICES.pipelineSteps.length - 1 && (
                        <ArrowRight className="h-3 w-3 text-cyan-500/60 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Engineering Disciplines (Dual Column Layout) */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Production Capabilities Matrix</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ENGINE_SERVICES.capabilities.map((cap) => (
                    <div
                      key={cap.title}
                      className="p-3 rounded-xl border border-border/70 bg-card/60 dark:bg-card/40 hover:border-cyan-500/40 transition-colors space-y-1"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 dark:text-cyan-400 shrink-0" />
                        <span>{cap.title}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed pl-6">
                        {cap.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Architectural Telemetry Specs Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {ENGINE_SERVICES.specs.map((spec) => {
                  const Icon = spec.icon
                  return (
                    <div
                      key={spec.label}
                      className="p-2.5 rounded-xl border border-border/70 bg-background/70 dark:bg-card/40 flex flex-col justify-between gap-1 tactile-card-3d"
                    >
                      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                        <Icon className="h-3 w-3 text-cyan-400" />
                        <span className="truncate">{spec.label}</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-foreground">
                        {spec.value}
                      </span>
                      <span className="text-[9px] text-muted-foreground truncate">
                        {spec.detail}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Tech Arsenal Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {ENGINE_SERVICES.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] px-2 py-0.5 rounded-md border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 mt-6 border-t border-border/50 flex flex-wrap items-center justify-between gap-3 relative z-10">
              <Button asChild variant="3d-yellow" size="default" className="rounded-xl font-extrabold shadow-md">
                <Link href={ENGINE_SERVICES.actionHref} className="gap-2 flex items-center">
                  {ENGINE_SERVICES.actionText} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <div className="flex items-center gap-3">
                <Button asChild variant="3d-secondary" size="sm" className="rounded-xl font-bold">
                  <Link href="/services">
                    All 11 Services →
                  </Link>
                </Button>
                <Link
                  href="/whitepapers/ai-company-operating-system"
                  className="text-xs font-semibold text-muted-foreground hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  Whitepaper v1.0 <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════════════════
              RIGHT COLUMN: ENGINE 02 & ENGINE 03 STACKED (SPAN 5)
             ══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 2: DhruvaOS */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 flex flex-col justify-between rounded-3xl border-2 border-border/90 bg-card/85 dark:bg-[#110c22]/90 backdrop-blur-xl p-6 sm:p-7 mlh-card-chunky hover:border-violet-500/70 relative overflow-hidden group shadow-xl"
            >
              <div className="space-y-4 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-3">
                  <span className="font-mono text-xs font-bold text-violet-600 dark:text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-md border border-violet-500/20">
                    {ENGINE_DHRUVAOS.engineNumber}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/25 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {ENGINE_DHRUVAOS.badge}
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-violet-400 transition-colors">
                      {ENGINE_DHRUVAOS.name}
                    </h3>
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
                      <GraduationCap className="h-4.5 w-4.5" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {ENGINE_DHRUVAOS.description}
                  </p>
                </div>

                <div className="space-y-1.5">
                  {ENGINE_DHRUVAOS.capabilities.slice(0, 3).map((cap) => (
                    <div key={cap} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-violet-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {ENGINE_DHRUVAOS.specs.map((spec) => {
                    const Icon = spec.icon
                    return (
                      <div key={spec.label} className="p-2.5 rounded-xl border border-border/70 bg-background/50 dark:bg-card/40 tactile-card-3d">
                        <div className="flex items-center gap-1 text-[9px] text-muted-foreground font-mono">
                          <Icon className="h-3 w-3 text-violet-400" />
                          <span>{spec.label}</span>
                        </div>
                        <span className="font-mono text-[11px] font-bold text-foreground block mt-0.5">
                          {spec.value}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {ENGINE_DHRUVAOS.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] px-2 py-0.5 rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between relative z-10">
                <Button asChild variant="3d-secondary" size="sm" className="font-bold rounded-xl">
                  <Link href={ENGINE_DHRUVAOS.actionHref} className="gap-1.5 flex items-center">
                    {ENGINE_DHRUVAOS.actionText} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
                <span className="text-[11px] font-mono font-bold text-emerald-500 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Pilots Active
                </span>
              </div>
            </motion.div>

            {/* Card 3: ToolVines */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 flex flex-col justify-between rounded-3xl border-2 border-border/90 bg-card/85 dark:bg-[#091815]/90 backdrop-blur-xl p-6 sm:p-7 mlh-card-chunky hover:border-emerald-500/70 relative overflow-hidden group shadow-xl"
            >
              <div className="space-y-4 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-3">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    {ENGINE_TOOLVINES.engineNumber}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    [{ENGINE_TOOLVINES.badge}]
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-emerald-400 transition-colors">
                      {ENGINE_TOOLVINES.name}
                    </h3>
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <Wrench className="h-4.5 w-4.5" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {ENGINE_TOOLVINES.description}
                  </p>
                </div>

                <div className="space-y-1.5">
                  {ENGINE_TOOLVINES.capabilities.slice(0, 3).map((cap) => (
                    <div key={cap} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {ENGINE_TOOLVINES.specs.map((spec) => {
                    const Icon = spec.icon
                    return (
                      <div key={spec.label} className="p-2.5 rounded-xl border border-border/70 bg-background/50 dark:bg-card/40 tactile-card-3d">
                        <div className="flex items-center gap-1 text-[9px] text-muted-foreground font-mono">
                          <Icon className="h-3 w-3 text-emerald-400" />
                          <span>{spec.label}</span>
                        </div>
                        <span className="font-mono text-[11px] font-bold text-foreground block mt-0.5">
                          {spec.value}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {ENGINE_TOOLVINES.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] px-2 py-0.5 rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between relative z-10">
                <a
                  href={ENGINE_TOOLVINES.actionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  {ENGINE_TOOLVINES.actionText} <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <Link href="/products/toolvines" className="text-xs font-semibold text-muted-foreground hover:text-foreground">
                  Architecture Overview →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}


