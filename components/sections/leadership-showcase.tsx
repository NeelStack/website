'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  Mail,
  Bot,
  Cpu,
  Sparkles,
  ExternalLink,
  Code2,
  Lock,
  Workflow,
  CheckCircle2,
} from 'lucide-react'
import { Container } from '@/components/ui/container'

export const FOUNDING_LEADERSHIP = [
  {
    name: 'Shyam Sundar Chaurasiya',
    role: 'Founder & Engineering Lead',
    badge: 'Founder & Legal CEO',
    type: 'human-founder',
    avatarSrc: '/images/illustrations/avatar-leader.png',
    credentials: 'MCA Registered Director · CIN: U62011UP2026PTC250857',
    bio: 'Founder, legal CEO, and lead systems architect directing technology architecture, engineering roadmap, and product execution across all NeelStack platforms.',
    focusAreas: [
      'Systems Architecture & Cloud Topology',
      'Next.js 16 SSR & Python FastAPI Microservices',
      'Rust WebAssembly (WASM) Compute Engines',
    ],
    email: 'contact@neelstack.com',
    accentColor: 'border-blue-500/30 hover:border-blue-500/60',
    badgeClass: 'bg-blue-500/10 text-blue-600 dark:text-cyan-300 border-blue-500/25',
  },
  {
    name: 'Neelam Chaurasiya',
    role: 'Co-Founder & Business Operations Lead',
    badge: 'Co-Founder & Operations Lead',
    type: 'human-founder',
    avatarSrc: '/images/illustrations/avatar-cofounder-female.png',
    credentials: 'Co-founder & Governance Officer · GSTIN: 09AALCN9356Q1ZA',
    bio: 'Oversees organizational planning, corporate governance, financial logistics, and institutional partner relationships. Guides statutory compliance and operational growth.',
    focusAreas: [
      'Business Operations & Institutional Growth',
      'Statutory Compliance (GST, MSME, DPIIT)',
      'Enterprise Client & Pilot Onboarding',
    ],
    email: 'contact@neelstack.com',
    accentColor: 'border-purple-500/30 hover:border-purple-500/60',
    badgeClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/25',
  },
  {
    name: 'NeelStack AI CEO',
    role: 'Strategic AI Operating Partner',
    badge: 'Autonomous Executive Intelligence',
    type: 'ai-partner',
    avatarSrc: '/images/illustrations/avatar-leader.png',
    credentials: 'Multi-Agent Swarm · Model Context Protocol · LangGraph',
    bio: 'Executive agentic intelligence partner supporting real-time telemetry analysis, autonomous multi-agent workforce coordination, and operational strategy simulations.',
    focusAreas: [
      'Multi-Agent Swarm Orchestration (LangGraph)',
      'Model Context Protocol (MCP) Tool Integration',
      'Organizational Memory & GraphRAG Retrieval',
    ],
    whitepaperLink: '/whitepapers/ai-company-operating-system',
    accentColor: 'border-cyan-500/40 hover:border-cyan-400',
    badgeClass: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/30',
  },
]

export const TECHNICAL_LEADERSHIP = [
  {
    name: 'Pradeep Kumar Maurya',
    role: 'Marketing Lead',
    badge: 'Growth Strategy & Marketing',
    avatarSrc: '/images/illustrations/avatar-business.png',
    bio: 'Directs marketing strategy, developer relations, brand architecture, and educational outreach to expand NeelStack products and services.',
    focusAreas: [
      'Go-To-Market Strategy & Outreach',
      'Educational Institution Partnerships',
      'Developer Advocacy & Product Marketing',
    ],
    email: 'contact@neelstack.com',
    badgeClass: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/25',
  },
  {
    name: 'Aman Singh',
    role: 'Senior Agentic AI & ML Developer',
    badge: 'Agentic AI & ML Systems',
    avatarSrc: '/images/illustrations/avatar-engineer.png',
    bio: 'Specializes in autonomous agentic workflows, LangGraph state machines, Model Context Protocol tools, and vector RAG neural memory pipelines.',
    focusAreas: [
      'LangGraph Multi-Agent Workflows',
      'Model Context Protocol (MCP) Tool Integration',
      'Vector Embeddings & Semantic Search Pipelines',
    ],
    email: 'contact@neelstack.com',
    badgeClass: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/25',
  },
  {
    name: 'Rakesh Kushwaha',
    role: 'Senior Systems Architect & Infrastructure Lead',
    badge: 'Systems Architecture & Cloud Infra',
    avatarSrc: '/images/illustrations/hero-developer.png',
    bio: 'Leads distributed backend systems, multi-tenant database sharding, cloud edge reliability, and secure Docker/Kubernetes container orchestration.',
    focusAreas: [
      'Microservices Topology & Schema Isolation',
      'Cloud DevOps & Docker Containerization',
      'High-Throughput API Gateway Engineering',
    ],
    email: 'contact@neelstack.com',
    badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
  },
  {
    name: 'Shyam Singh',
    role: 'Senior Full-Stack Engineer & Frontend Lead',
    badge: 'Full-Stack & Frontend Lead',
    avatarSrc: '/images/illustrations/avatar-engineer.png',
    bio: 'Engineers high-performance web applications, sub-second Next.js SSR interfaces, client-side WebAssembly integrations, and accessible design systems.',
    focusAreas: [
      'Next.js 16 App Router & React 19 Client Systems',
      'WebAssembly (WASM) In-Browser Processing',
      'Design Systems & Responsive UX Architecture',
    ],
    email: 'contact@neelstack.com',
    badgeClass: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/25',
  },
  {
    name: 'Vishnu Chaurasiya',
    role: 'Senior Full-Stack Developer',
    badge: 'Full-Stack & Backend Systems',
    avatarSrc: '/images/illustrations/hero-developer.png',
    bio: 'Builds robust backend microservices, high-speed REST/GraphQL APIs, database query optimizations, and end-to-end automated testing suites.',
    focusAreas: [
      'Python FastAPI & Node.js Microservices',
      'PostgreSQL Schema Design & Query Optimization',
      'Automated Testing & Continuous Integration',
    ],
    email: 'contact@neelstack.com',
    badgeClass: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25',
  },
]

export const ENGINEERING_PILLARS = [
  {
    title: 'Frontier AI & Agentic Runtimes',
    desc: 'LangGraph cyclic state machines, Model Context Protocol (MCP) tool meshes, and hierarchical agent supervisor graphs.',
    icon: Bot,
  },
  {
    title: 'Modern Full-Stack Engineering',
    desc: 'Next.js 16 App Router, React 19, Python FastAPI, PostgreSQL 16 schema-per-tenant isolation, and Docker containerization.',
    icon: Cpu,
  },
  {
    title: 'High-Performance WASM Compute',
    desc: 'In-browser Rust WebAssembly execution with zero server file storage for client-side privacy across 320+ utilities.',
    icon: Code2,
  },
  {
    title: 'DPDP Security & Privacy by Design',
    desc: 'Compliance with India DPDP Act 2023 Section 9, zero-retention data pipelines, AES-256 encryption, and TLS 1.3 tunneling.',
    icon: Lock,
  },
]

export function LeadershipShowcase() {
  return (
    <section id="leadership" className="py-8 sm:py-10 md:py-12 relative overflow-hidden bg-surface/60 border-t border-border/60">
      <Container className="space-y-6 sm:space-y-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1 rounded-full border border-primary/25">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            [CORPORATE LEADERSHIP &amp; ENGINEERING TEAM]
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight">
            Founders, Leadership &amp; Engineering Team
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Governed by human legal accountability, enterprise technical discipline, and powered by autonomous multi-agent intelligence.
          </p>
        </div>

        {/* 1. Founding Leadership Trio */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-border/60 max-w-6xl mx-auto">
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
              {"// Founding & Executive Leadership"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {FOUNDING_LEADERSHIP.map((person) => {
              const isAi = person.type === 'ai-partner'

              return (
                <div
                  key={person.name}
                  className={`rounded-3xl border ${person.accentColor} bg-card/90 dark:bg-[#0c1222]/90 backdrop-blur-xl overflow-hidden flex flex-col tactile-card-3d group`}
                >
                  {/* Visual Avatar Banner */}
                  <div
                    className={`relative flex items-end justify-center pt-8 pb-0 border-b border-border/50 ${
                      isAi
                        ? 'bg-gradient-to-b from-cyan-500/15 via-cyan-500/5 to-transparent'
                        : 'bg-gradient-to-b from-primary/10 via-primary/5 to-transparent'
                    }`}
                  >
                    {isAi && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-[10px] font-mono font-bold text-cyan-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        AI Operating Partner
                      </div>
                    )}

                    {!isAi && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono font-bold text-emerald-500 dark:text-emerald-400">
                        <ShieldCheck className="h-3 w-3" />
                        Verified Leader
                      </div>
                    )}

                    <Image
                      src={person.avatarSrc}
                      alt={`${person.name} illustration portrait`}
                      width={180}
                      height={180}
                      className="h-44 w-auto object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                      style={{
                        filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.2))',
                      }}
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col justify-between flex-1 gap-5">
                    <div className="space-y-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${person.badgeClass}`}>
                        {person.badge}
                      </span>

                      <div>
                        <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                          {person.name}
                        </h3>
                        <p className={`text-xs font-bold uppercase tracking-wider mt-0.5 ${isAi ? 'text-cyan-500 dark:text-cyan-400' : 'text-primary'}`}>
                          {person.role}
                        </p>
                      </div>

                      <p className="font-mono text-[10px] text-muted-foreground border-y border-border/50 py-1.5 break-words">
                        {person.credentials}
                      </p>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {person.bio}
                      </p>
                    </div>

                    {/* Focus Areas */}
                    <div className="space-y-2 pt-2 border-t border-border/50">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-foreground block">
                        Key Responsibilities &amp; Focus:
                      </span>
                      <ul className="space-y-1.5">
                        {person.focusAreas.map((area) => (
                          <li key={area} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${isAi ? 'text-cyan-400' : 'text-primary'}`} />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Action Link */}
                    <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                      {person.whitepaperLink ? (
                        <Link
                          href={person.whitepaperLink}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-500 dark:text-cyan-400 hover:underline"
                        >
                          Read AI OS Whitepaper v1.0 <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      ) : (
                        <a
                          href={`mailto:${person.email}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                        >
                          <Mail className="h-3.5 w-3.5" /> Contact via {person.email}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 2. Technical Leadership & Software Architects (Grid) */}
        <div className="space-y-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 pb-2 border-b border-border/60">
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
              {"// Technical Leadership & Core Engineering Team"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNICAL_LEADERSHIP.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-border/80 bg-card/80 dark:bg-[#0c1222]/80 backdrop-blur-xl overflow-hidden flex flex-col justify-between tactile-card-3d hover:border-primary/60 group"
              >
                {/* Visual Avatar Header */}
                <div className="relative flex items-end justify-center pt-6 pb-0 bg-gradient-to-b from-muted/40 via-muted/10 to-transparent border-b border-border/40">
                  <Image
                    src={member.avatarSrc}
                    alt={`${member.name} illustration`}
                    width={140}
                    height={140}
                    className="h-36 w-auto object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                    style={{
                      filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.15))',
                    }}
                  />
                </div>

                {/* Member Body */}
                <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                  <div className="space-y-2">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase border ${member.badgeClass}`}>
                      {member.badge}
                    </span>

                    <div>
                      <h4 className="font-heading text-base sm:text-lg font-bold text-foreground">
                        {member.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-primary mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                      {member.bio}
                    </p>
                  </div>

                  {/* Focus list */}
                  <div className="space-y-1.5 pt-3 border-t border-border/40">
                    {member.focusAreas.map((area) => (
                      <div key={area} className="flex items-start gap-1.5 text-[11px] text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>

                  {/* Contact */}
                  <div className="pt-2 border-t border-border/40">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-[11px] font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <Mail className="h-3 w-3" /> {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Engineering Disciplines & Pillars */}
        <div className="pt-8 border-t border-border/60 max-w-5xl mx-auto">
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
              Engineering Disciplines
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
              Built on High-Accountability Systems Architecture
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ENGINEERING_PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-4.5 space-y-2 hover:border-primary/40 transition-colors"
                >
                  <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="font-heading text-xs font-bold text-foreground">{pillar.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
