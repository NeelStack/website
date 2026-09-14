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
  naukarimitra: {
    deployedLabel: 'Planned Product',
  },
  sarkarimitra: {
    deployedLabel: 'Planned Product',
  },
  'ai-company-os': {
    deployedLabel: 'R&D / Product Direction',
  },
}

export const PRODUCTS: Product[] = [
  {
    id: 'toolvines',
    name: 'ToolVines',
    tagline: 'Browser Productivity Platform — Live Product',
    description:
      'Browser-native utility platform consolidating PDF tools, image processing, document conversion, and AI utilities with zero server-side data retention.',
    status: 'live',
    icon: FileText,
    color: 'text-blue-500 dark:text-blue-400',
    bgColor: 'bg-blue-500/10',
    href: 'https://toolvines.com',
    features: [
      { label: 'PDF Tools — Merge, Split, Compress, Convert & OCR' },
      { label: 'Image Tools — Resizer, Compressor, Crop & Format Converter' },
      { label: 'Document Tools — Text Converters & Format Utilities' },
      { label: 'AI Utilities — Local OCR & Document Summarization' },
    ],
    category: 'Productivity Platform',
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
    name: 'AI Workforce Platform',
    tagline: 'AI Company Operating System — Long-Term R&D Direction',
    description:
      "NeelStack's research and product direction exploring specialized AI agents (AI CEO, AI CTO, AI CFO, AI COO, AI CRO, AI CMO, AI Product, Research, Sales, Operations, and Support) to coordinate company intelligence and workflows.",
    status: 'in-development',
    icon: Bot,
    color: 'text-cyan-500 dark:text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    href: '/#ai-strategy',
    features: [
      { label: 'Specialized executive & functional AI agent roles' },
      { label: 'Company intelligence & business decision support' },
      { label: 'Workflow automation & task execution' },
      { label: 'Persistent company memory & coordination' },
    ],
    category: 'AI Workforce Architecture',
  },
  {
    id: 'naukarimitra',
    name: 'NaukariMitra',
    tagline: 'AI-Powered Government Job Companion — Planned',
    description:
      'Planned AI-powered government exam preparation platform designed to provide exam guidance, mock tests, previous papers, and personalized study assistance (naukarimitra.in).',
    status: 'planned',
    icon: GraduationCap,
    color: 'text-emerald-500 dark:text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    href: '/products/naukarimitra',
    features: [
      { label: 'Exam guidance & syllabus breakdowns' },
      { label: 'Mock tests & previous papers' },
      { label: 'Personalized learning assistance' },
      { label: 'Study progression tracking' },
    ],
    category: 'Ed-Tech Platform (Planned)',
    disclaimer: 'Disclaimer: NaukariMitra is an independent AI exam preparation concept. It is NOT affiliated with, sponsored by, or endorsed by any government entity or public recruitment board.',
  },
  {
    id: 'sarkarimitra',
    name: 'SarakariMitra',
    tagline: 'AI Citizen Assistance Platform — Planned',
    description:
      'Planned AI-powered citizen assistance platform helping people discover government schemes, benefits, public services, eligibility criteria, and required documents (sarakarimitra.org).',
    status: 'planned',
    icon: Building,
    color: 'text-amber-500 dark:text-amber-400',
    bgColor: 'bg-amber-500/10',
    href: '/products/sarkarimitra',
    features: [
      { label: 'Discover government schemes & public benefits' },
      { label: 'Verify eligibility criteria' },
      { label: 'Review required document checklists' },
      { label: 'Conversational guidance assistance' },
    ],
    category: 'Gov-Tech Platform (Planned)',
    disclaimer: 'Disclaimer: SarakariMitra is an independent citizen information concept. It is NOT affiliated with, sponsored by, or endorsed by any government department, public agency, or ministry.',
  },
]

export const LIVE_PRODUCTS = PRODUCTS.filter((p) => p.status === 'live')
export const UPCOMING_PRODUCTS = PRODUCTS.filter((p) => p.status === 'in-development')
export const PLANNED_PRODUCTS = PRODUCTS.filter((p) => p.status === 'planned' || p.status === 'coming-soon')
