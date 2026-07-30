'use client'

import React, { useState } from 'react'
import { Cpu, ShieldCheck, Zap, Server, Activity, Database, Lock, ArrowUpRight } from 'lucide-react'

const PILLARS = [
  {
    id: 'ai-rag',
    title: 'AI & Vector Pipeline',
    tag: 'LLM & RAG Engine',
    metric: '42ms Latency',
    status: 'Operational',
    icon: Cpu,
    color: 'from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30',
    dotColor: 'bg-cyan-400',
    description: 'Autonomous AI agents, vector database indexing, and semantic search routing tuned for enterprise accuracy.',
    details: ['Multi-LLM Routing (OpenAI, Anthropic, Llama)', 'Pinecone / Qdrant Vector Store Integration', 'Role-Gated Knowledge Graph Ingestion'],
  },
  {
    id: 'cloud-core',
    title: 'High-Scale SaaS Core',
    tag: 'Next.js 16 & Microservices',
    metric: '100k+ Req/sec',
    status: 'Active Scale',
    icon: Server,
    color: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30',
    dotColor: 'bg-purple-400',
    description: 'Multi-tenant database isolation, Redis edge caching, and serverless background worker queues.',
    details: ['PostgreSQL Multi-Tenant Schema', 'Redis Distributed Caching Layer', 'Automated CI/CD Pipeline & Edge Delivery'],
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    tag: 'SOC2 & RBAC Protocols',
    metric: 'AES-256 Encrypted',
    status: 'Verified',
    icon: ShieldCheck,
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
    dotColor: 'bg-emerald-400',
    description: 'Fine-grained role-based access control, cryptographic field encryption, and immutable audit logs.',
    details: ['OAuth2 / SAML Single Sign-On (SSO)', 'Field-Level Cryptographic Encryption', 'Real-Time Intrusion & Anomaly Auditing'],
  },
  {
    id: 'uptime',
    title: 'Global High-Availability',
    tag: 'Multi-Region SLA',
    metric: '99.99% Guaranteed',
    status: 'Healthy',
    icon: Zap,
    color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
    dotColor: 'bg-amber-400',
    description: 'Self-healing Kubernetes clusters, automated failover DNS, and zero-downtime rolling deployments.',
    details: ['Multi-Cloud Failover (AWS / GCP / Vercel)', 'Global CDN Edge Content Caching', 'Automated Automated Backup & Recovery'],
  },
]

export function EnterpriseArchitecturePreview() {
  const [activeTab, setActiveTab] = useState('ai-rag')
  const activePillar = PILLARS.find((p) => p.id === activeTab) || PILLARS[0]
  const Icon = activePillar.icon

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl border border-primary/25 bg-gradient-to-b from-card via-card/95 to-background p-6 sm:p-8 shadow-[0_0_50px_rgba(70,166,252,0.15)] backdrop-blur-xl card-hover text-left space-y-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 text-primary shadow-[0_0_16px_rgba(70,166,252,0.3)]">
            <Activity className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-heading text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
              NeelStack Enterprise Architecture Engine
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Architecture
              </span>
            </h3>
            <p className="text-xs text-muted-foreground">Standardized engineering blueprint deployed across all NeelStack client platforms &amp; SaaS products</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg border border-border/60">
          <Database className="h-3.5 w-3.5 text-primary" />
          <span>v4.2 Enterprise Core</span>
        </div>
      </div>

      {/* Pillars Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {PILLARS.map((p) => {
          const PIcon = p.icon
          const isActive = p.id === activeTab
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(70,166,252,0.2)]'
                  : 'border-border/60 bg-background/50 hover:bg-muted/60 hover:border-border'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <PIcon className={`h-4 w-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                <span className={`h-2 w-2 rounded-full ${p.dotColor}`} />
              </div>
              <span className="font-heading text-xs font-bold text-foreground line-clamp-1">{p.title}</span>
              <span className="text-[11px] font-mono text-muted-foreground mt-0.5">{p.metric}</span>
            </button>
          )
        })}
      </div>

      {/* Active Tab Details */}
      <div className="rounded-2xl border border-border/80 bg-gradient-to-r from-background via-card to-background p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg border ${activePillar.color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-heading text-base font-bold text-foreground">{activePillar.title}</h4>
              <span className="text-xs text-muted-foreground font-mono">{activePillar.tag}</span>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Status: {activePillar.status}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{activePillar.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {activePillar.details.map((detail, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground bg-muted/40 p-2.5 rounded-lg border border-border/50">
              <Lock className="h-3.5 w-3.5 text-primary shrink-0" />
              <span className="line-clamp-1">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
