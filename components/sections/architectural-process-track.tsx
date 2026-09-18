'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/container'
import {
  FileSearch,
  Cpu,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Activity,
  Workflow,
  Sparkles,
  ArrowRight,
  Lock,
  Layers,
  Bot,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const PIPELINE_STEPS = [
  {
    id: '01_DISCOVERY',
    stepNumber: '01',
    codeHeader: '01_DISCOVERY',
    title: 'Technical Blueprinting & Scope Calibration',
    shortDesc: 'Deep system topology mapping, latency budgets, and security posture definition.',
    icon: FileSearch,
    accentColor: 'text-blue-500 dark:text-cyan-400',
    borderColor: 'border-blue-500/40',
    activeBg: 'bg-blue-500/10',
    deliverables: [
      'Comprehensive Technical Architecture Blueprint (TAB)',
      'Schema Design & Latency Budget Specification (<50ms target)',
      'Threat Model & Zero-Data-Leak Privacy Scoping',
      'Milestone-Driven Sprint Execution Plan',
    ],
    telemetryStatus: 'TOPOLOGY CALIBRATED · 45MS LATENCY ENVELOPE',
    specs: [
      { label: 'Target Latency', value: '< 45ms Global Edge', icon: Zap },
      { label: 'Isolation Mode', value: 'Shared Schema RLS', icon: Lock },
      { label: 'Encryption', value: 'AES-256 & TLS 1.3', icon: ShieldCheck },
      { label: 'Stack Baseline', value: 'Next.js 16 + FastAPI', icon: Layers },
    ],
  },
  {
    id: '02_ORCHESTRATION',
    stepNumber: '02',
    codeHeader: '02_ORCHESTRATION',
    title: 'Multi-Agent System Design & Data Pipeline Integration',
    shortDesc: 'LangGraph supervisor-worker networks, Model Context Protocol tools, and vector RAG ingestion.',
    icon: Cpu,
    accentColor: 'text-violet-500 dark:text-violet-400',
    borderColor: 'border-violet-500/40',
    activeBg: 'bg-violet-500/10',
    deliverables: [
      'LangGraph Multi-Agent Supervisor Workflows',
      'Model Context Protocol (MCP) Standard Server Integration',
      'Vector & GraphRAG Semantic Search Ingestion Pipelines',
      'Sub-Second Next.js 16 SSR & Rust WASM Interface Binding',
    ],
    telemetryStatus: 'SYNCHRONIZED · 4 AGENTS MAPPED · MCP ACTIVE',
    specs: [
      { label: 'Agent Topology', value: 'LangGraph State Machine', icon: Bot },
      { label: 'Protocol Mesh', value: 'Model Context Protocol', icon: Workflow },
      { label: 'Memory Core', value: 'GraphRAG + pgvector', icon: Cpu },
      { label: 'Edge Compute', value: 'Rust WebAssembly', icon: Sparkles },
    ],
  },
  {
    id: '03_HARDENING',
    stepNumber: '03',
    codeHeader: '03_HARDENING',
    title: 'Zero-Data-Leak Sandboxing & Performance Tuning',
    shortDesc: 'Isolated tenant sandboxing, end-to-end encryption, and rigorous stress testing.',
    icon: ShieldCheck,
    accentColor: 'text-emerald-500 dark:text-emerald-400',
    borderColor: 'border-emerald-500/40',
    activeBg: 'bg-emerald-500/10',
    deliverables: [
      'Schema-Level PostgreSQL Multi-Tenant Isolation',
      'Client-Side Encryption & Zero Server Data Retention',
      'WCAG 2.1 AA Accessibility & 60 FPS Animation Benchmarks',
      'Automated Vulnerability Fuzzing & Red-Teaming',
    ],
    telemetryStatus: 'SECURITY HARDENED · 0 DATA LEAK RISK',
    specs: [
      { label: 'Tenant Boundary', value: 'Schema-Isolated Vault', icon: Lock },
      { label: 'Data Retention', value: '0-Byte Remote Buffer', icon: ShieldCheck },
      { label: 'UI Frame Budget', value: '60 FPS Motion Lock', icon: Activity },
      { label: 'Compliance', value: 'DPDP Act 2023 Sec 9', icon: ShieldCheck },
    ],
  },
  {
    id: '04_DEPLOYMENT',
    stepNumber: '04',
    codeHeader: '04_DEPLOYMENT',
    title: 'Production Rollout & Continuous Telemetry',
    shortDesc: 'Zero-downtime blue/green edge rollout, real-time telemetry observability, and 24/7 SLAs.',
    icon: Zap,
    accentColor: 'text-amber-500 dark:text-amber-400',
    borderColor: 'border-amber-500/40',
    activeBg: 'bg-amber-500/10',
    deliverables: [
      'Automated Blue/Green Zero-Downtime Edge Deployment',
      'Distributed Real-Time Telemetry & Agent Health Tracking',
      'Continuous Evaluation Loops for Multi-Agent Accuracy',
      'Guaranteed 1-Day Response SLA & Founder Support',
    ],
    telemetryStatus: 'PRODUCTION LIVE · 99.99% EDGE UPTIME',
    specs: [
      { label: 'Deployment Strategy', value: 'Blue/Green Zero Downtime', icon: Layers },
      { label: 'Observability', value: 'Langfuse + OpenTelemetry', icon: Activity },
      { label: 'SLA Guarantee', value: '< 24h Response SLA', icon: Zap },
      { label: 'Support Model', value: 'Direct Lead Engineer Access', icon: Sparkles },
    ],
  },
]

export function ArchitecturalProcessTrack() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const activeStep = PIPELINE_STEPS[activeStepIndex]

  return (
    <section id="process-track" className="py-8 sm:py-10 md:py-12 relative overflow-hidden bg-surface/50 border-t border-border/60">
      {/* Background Ambience */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139, 92, 246, 0.08), transparent 70%)',
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
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-violet-500 dark:text-violet-400 uppercase tracking-widest bg-violet-500/10 px-3.5 py-1 rounded-full border border-violet-500/25"
          >
            <Workflow className="h-3.5 w-3.5" />
            [HOW WE BUILD &amp; DELIVER]
          </motion.div>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight text-balance"
          >
            The Architectural Process Track
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Every software platform and AI system we engineer passes through our deterministic 4-stage delivery pipeline.
          </motion.p>
        </motion.div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {PIPELINE_STEPS.map((step, idx) => {
            const Icon = step.icon
            const isActive = activeStepIndex === idx

            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex flex-col text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? `${step.borderColor} ${step.activeBg} bg-card shadow-lg scale-[1.02]`
                    : 'border-border/80 bg-card/60 hover:border-primary/40 hover:bg-card/90'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`font-mono text-xs font-bold ${isActive ? step.accentColor : 'text-muted-foreground'}`}>
                    {step.stepNumber}
                  </span>
                  <Icon className={`h-4 w-4 ${isActive ? step.accentColor : 'text-muted-foreground'}`} />
                </div>
                <h3 className="font-heading text-xs sm:text-sm font-bold text-foreground line-clamp-2">
                  {step.title}
                </h3>
              </button>
            )
          })}
        </div>

        {/* Active Stage Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto rounded-3xl bg-card/90 dark:bg-[#0d1322]/90 backdrop-blur-xl p-6 sm:p-8 md:p-10 tactile-card-3d space-y-8"
          >
            {/* Top Stage Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 pb-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <span className={`font-mono text-xs font-bold px-3 py-1 rounded-md bg-muted border border-border w-fit ${activeStep.accentColor}`}>
                  PHASE // {activeStep.codeHeader}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-foreground">
                  {activeStep.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  {activeStep.telemetryStatus}
                </span>
              </div>
            </div>

            {/* Stage Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Scope & Deliverables */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                    Engineering Objectives
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {activeStep.shortDesc}
                  </p>
                </div>

                {/* Deliverables checklist */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground block">
                    Core Engineering Deliverables:
                  </span>
                  <div className="space-y-2">
                    {activeStep.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium">
                        <CheckCircle2 className={`h-4 w-4 ${activeStep.accentColor} shrink-0 mt-0.5`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button asChild variant="3d-primary" size="default" className="font-bold rounded-xl">
                    <Link href="/book-consultation" className="flex items-center gap-2">
                      Schedule Pipeline Discussion <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column: Architectural Blueprint Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-border/80 bg-background/80 dark:bg-[#070b14] p-5 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-border/50 text-[11px] text-muted-foreground font-mono">
                    <div className="flex items-center gap-2">
                      <Activity className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Architecture Telemetry</span>
                    </div>
                    <span className="text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      VERIFIED
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {activeStep.specs.map((spec) => {
                      const Icon = spec.icon
                      return (
                        <div
                          key={spec.label}
                          className="p-3 rounded-xl border border-border/60 bg-card/60 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <Icon className="h-3.5 w-3.5 text-primary" />
                            <span className="text-xs text-muted-foreground">{spec.label}</span>
                          </div>
                          <span className="font-mono text-xs font-bold text-foreground">
                            {spec.value}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="pt-3 border-t border-border/50 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                    <span>NeelStack Pipeline v2.4</span>
                    <span className="text-cyan-400">Zero-Leak Guard Active</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
