import {
  Bot,
  Building,
  FileText,
  GraduationCap,
  Sparkles,
  Zap,
} from 'lucide-react'
import type { Product } from '@/types'

export const PRODUCT_META: Record<string, { deployedLabel?: string; targetLaunch?: string }> = {
  toolvines: {
    deployedLabel: 'Live Product',
  },
  dhruvaos: {
    targetLaunch: '2 October 2026',
  },
  'ai-company-os': {
    deployedLabel: 'R&D / Whitepaper v1.0',
  },
  naukarimitra: {
    deployedLabel: 'Planned Product',
  },
  sarkarimitra: {
    deployedLabel: 'Planned Product',
  },
}

export const PRODUCTS: Product[] = [
  {
    id: 'toolvines',
    name: 'ToolVines',
    tagline: 'Browser-Native Developer & Productivity Platform',
    description:
      'High-performance suite of 320+ developer utilities, document formatters, crypto engines, and media tools executing 100% client-side via Rust WebAssembly. Zero server uploads, zero telemetry.',
    status: 'live',
    icon: FileText,
    color: 'text-blue-500 dark:text-blue-400',
    bgColor: 'bg-blue-500/10',
    href: '/products/toolvines',
    features: [
      { label: '320+ Client-Side Tools — PDF, Code, Cryptography & Media' },
      { label: '100% In-Memory WASM — 0.00 KB uploaded to remote servers' },
      { label: 'Offline PWA Support — Full functionality without internet' },
      { label: 'Air-Gapped Ready — Enterprise on-premise portal deployments' },
    ],
    category: 'Developer Platform',
  },
  {
    id: 'dhruvaos',
    name: 'DhruvaOS',
    tagline: 'School Operating System — Launching 2 October 2026',
    description:
      "DhruvaOS is NeelStack's unified school operating system, ready for launch and currently onboarding early pilot institutions. Built to provide a unified digital infrastructure for school administration, academic management, and modern workflows.",
    status: 'in-development',
    icon: Zap,
    color: 'text-purple-500 dark:text-purple-400',
    bgColor: 'bg-purple-500/10',
    href: '/products/dhruvaos',
    features: [
      { label: 'School onboarding & institutional setup' },
      { label: 'School administration & management workflows' },
      { label: 'School CMS & official website capabilities' },
      { label: 'Mobile & Desktop applications' },
      { label: 'Planned AI-agent capabilities' },
    ],
    category: 'School Operating System',
  },
  {
    id: 'ai-company-os',
    name: 'AI Company OS',
    tagline: 'Autonomous Multi-Agent Workforce Platform',
    description:
      "NeelStack's research and product direction exploring 11 specialized AI agents (AI CEO, AI CTO, AI CFO, AI COO, AI CRO, AI CMO, AI Product, Systems, QA, Research, and Support) coordinated via Model Context Protocol (MCP) and LangGraph.",
    status: 'in-development',
    icon: Bot,
    color: 'text-cyan-500 dark:text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    href: '/products/ai-company-os',
    features: [
      { label: '11 Specialized executive & functional AI agent squads' },
      { label: 'Model Context Protocol (MCP) tool & schema integration' },
      { label: 'Cyclic LangGraph state machines with rollback protection' },
      { label: 'Human-in-the-loop multi-tier authorization gates' },
    ],
    category: 'AI Workforce Platform',
  },
  {
    id: 'naukarimitra',
    name: 'NaukariMitra',
    tagline: 'AI-Powered Government Job Companion — Planned',
    description:
      'Planned AI-powered competitive examination preparation platform designed to provide syllabus vector RAG, adaptive mock tests, and multilingual concept mentoring for over 3 Crore Indian aspirants (naukarimitra.in).',
    status: 'planned',
    icon: GraduationCap,
    color: 'text-emerald-500 dark:text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    href: '/products/naukarimitra',
    features: [
      { label: '50+ Exam syllabus & notification vector knowledge graphs' },
      { label: 'Adaptive mock exam generator with negative marking calibration' },
      { label: 'Step-by-step AI concept tutor in 8+ vernacular languages' },
      { label: 'Spaced repetition active recall memory scheduler' },
    ],
    category: 'Ed-Tech Platform (Planned)',
    disclaimer: 'Disclaimer: NaukariMitra is an independent AI exam preparation concept. It is NOT affiliated with, sponsored by, or endorsed by any government entity or public recruitment board.',
  },
  {
    id: 'sarkarimitra',
    name: 'SarkariMitra',
    tagline: 'AI Citizen Assistance Platform — Planned',
    description:
      'Planned AI-powered citizen assistance platform helping 140 Crore people discover 1,500+ Central and State government schemes, verify eligibility criteria, and obtain verified document checklists with scam-free official redirects (sarakarimitra.org).',
    status: 'planned',
    icon: Building,
    color: 'text-amber-500 dark:text-amber-400',
    bgColor: 'bg-amber-500/10',
    href: '/products/sarkarimitra',
    features: [
      { label: '1,500+ Central & State scheme knowledge graph' },
      { label: 'Conversational eligibility evaluator in everyday language' },
      { label: 'Document readiness verifier & Seva Kendra directory' },
      { label: 'Voice-first dialect support with 100% .gov.in redirection' },
    ],
    category: 'Gov-Tech Platform (Planned)',
    disclaimer: 'Disclaimer: SarkariMitra is an independent citizen information concept. It is NOT affiliated with, sponsored by, or endorsed by any government department, public agency, or ministry.',
  },
]

export const LIVE_PRODUCTS = PRODUCTS.filter((p) => p.status === 'live')
export const UPCOMING_PRODUCTS = PRODUCTS.filter((p) => p.status === 'in-development')
export const PLANNED_PRODUCTS = PRODUCTS.filter((p) => p.status === 'planned' || p.status === 'coming-soon')
