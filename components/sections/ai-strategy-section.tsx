'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Bot,
  Brain,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Compass,
  LineChart,
  Briefcase,
  Terminal,
  Activity,
  Workflow,
  CheckCircle2,
  FileText,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

const AGENT_ROLES = [
  { role: 'AI CEO', category: 'Executive', desc: 'Synthesizes company vision, long-term goals, strategic prioritization, and executive summaries.' },
  { role: 'AI CTO', category: 'Executive', desc: 'Architecture guidance, system health audits, tech stack evaluation, and engineering roadmaps.' },
  { role: 'AI CFO', category: 'Executive', desc: 'Financial planning, runway projections, cash-flow monitoring, and unit economics analysis.' },
  { role: 'AI COO', category: 'Executive', desc: 'Operational bottlenecks identification, resource allocation, and team rhythm synchronization.' },
  { role: 'AI CRO', category: 'Growth', desc: 'Revenue pipeline analysis, deal velocity tracking, pricing strategy, and conversion optimization.' },
  { role: 'AI CMO', category: 'Growth', desc: 'Market positioning, campaign insights, messaging resonance, and audience intelligence.' },
  { role: 'AI Product Officer', category: 'Product', desc: 'Feature spec generation, user feedback synthesis, roadmap prioritization, and PRD drafting.' },
  { role: 'AI Research Agent', category: 'Intelligence', desc: 'Competitive intelligence, market research, paper summarization, and domain knowledge graphs.' },
  { role: 'AI Sales Agent', category: 'Operations', desc: 'Lead qualification, outbound personalization, meeting preparation, and CRM note synthesis.' },
  { role: 'AI Operations Agent', category: 'Operations', desc: 'Cross-tool workflow automation, checklist verification, and recurring operational tasks.' },
  { role: 'AI Support Agent', category: 'Operations', desc: 'Ticket categorization, contextual troubleshooting, and intelligent knowledge base resolution.' },
]

const OS_CAPABILITIES = [
  { label: 'Company Intelligence', desc: 'Holistic synthesis of company data, metrics, and communications in real time.' },
  { label: 'Business Analysis', desc: 'Automated KPI tracking, variance analysis, and predictive scenario modeling.' },
  { label: 'Strategy & Planning', desc: 'Structured scenario exploration, risk assessment, and decision matrices.' },
  { label: 'Meeting Synthesis', desc: 'Autonomous meeting agendas, real-time transcription, and action item execution.' },
  { label: 'Decision Support', desc: 'Data-grounded recommendations for founders and leadership teams.' },
  { label: 'Task Execution', desc: 'Autonomous multi-step tool use, API triggering, and report generation.' },
  { label: 'Workflow Automation', desc: 'Automating cross-department handoffs and recurring operational pipelines.' },
  { label: 'Company Memory', desc: 'Persistent vector and graph memory preserving institutional knowledge across time.' },
  { label: 'AI Workforce Coordination', desc: 'Inter-agent supervisor topologies routing work seamlessly between specialized agents.' },
]

export function AiStrategySection() {
  return (
    <section id="ai-strategy" className="py-24 relative overflow-hidden bg-surface border-t border-border/60">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.12), transparent)',
        }}
        aria-hidden="true"
      />

      <Container className="space-y-16 relative z-10">
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
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
            className="inline-flex items-center gap-2 text-xs font-bold text-violet-500 dark:text-violet-400 uppercase tracking-widest bg-violet-500/10 px-4 py-1.5 rounded-full border border-violet-500/25"
          >
            <Sparkles className="h-3.5 w-3.5" />
            AI Strategy &amp; Research Direction
          </motion.div>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            The AI Company Operating System
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
            className="text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            NeelStack is researching and architecting a future workforce layer where specialized AI agents collaborate with founders and teams to accelerate decision-making, intelligence, and execution.
          </motion.p>

          <div className="pt-2">
            <span className="inline-block text-[11px] font-mono font-semibold text-muted-foreground/80 bg-muted/60 px-3 py-1 rounded-lg border border-border">
              Status: Long-Term Technology &amp; R&amp;D Direction
            </span>
          </div>

          <motion.div
            variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] } } }}
            style={{ originX: 0.5 }}
            className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent mt-2"
          />
        </motion.div>

        {/* Operating System Core Concept Card */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-violet-500/25 bg-gradient-to-b from-card to-violet-950/10 p-8 sm:p-10 shadow-2xl backdrop-blur-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/50 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-violet-400 uppercase tracking-wider">
                Autonomous Workforce Architecture
              </span>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                How the AI Company OS Operates
              </h3>
            </div>
            <div className="text-left md:text-right">
              <span className="text-xs text-muted-foreground block">Core Objective</span>
              <span className="text-xs font-bold text-foreground">Speed, Intelligence &amp; Operational Autonomy</span>
            </div>
          </div>

          {/* 9 Core OS Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OS_CAPABILITIES.map((cap) => (
              <div
                key={cap.label}
                className="p-4 rounded-2xl bg-card/60 border border-border/60 space-y-1.5 hover:border-violet-500/30 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-violet-400 shrink-0" />
                  <h4 className="text-xs font-bold text-foreground">{cap.label}</h4>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed pl-6">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized AI Agents Swarm Matrix */}
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              Specialized Agent Profiles
            </span>
            <h3 className="font-heading text-2xl font-extrabold text-foreground">
              Explored Specialized Agent Roles
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
              Each specialized agent is designed with dedicated cognitive parameters, domain tool access, and supervisor-worker coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AGENT_ROLES.map((agent) => (
              <div
                key={agent.role}
                className="rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm p-5 space-y-2 hover:border-violet-500/30 transition-all card-hover"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="h-4 w-4 text-violet-400" />
                    <h4 className="font-heading text-sm font-bold text-foreground">{agent.role}</h4>
                  </div>
                  <span className="text-[10px] font-semibold text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-md border border-border/60">
                    {agent.category}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {agent.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA for AI Strategy Discussions */}
        <div className="text-center pt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-7 rounded-3xl border border-border bg-card/60 backdrop-blur-md max-w-3xl mx-auto shadow-xl">
            <div className="text-left space-y-1">
              <h4 className="font-heading text-sm sm:text-base font-bold text-foreground">
                Read the Strategic Whitepaper
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Explore our full 42-section charter on the AI Company Operating System, Company Brain, and 4-tier authority model.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <Button asChild size="sm" variant="outline" className="w-full sm:w-auto font-bold border-violet-500/30 text-violet-500 dark:text-violet-400 hover:bg-violet-500/10">
                <Link href="/whitepapers/ai-company-operating-system" className="gap-1.5 flex items-center justify-center">
                  <FileText className="h-3.5 w-3.5" /> Read Whitepaper
                </Link>
              </Button>
              <Button asChild size="sm" className="w-full sm:w-auto glow-cta font-bold">
                <Link href="/contact" className="gap-1.5 flex items-center justify-center">
                  Talk to NeelStack <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
