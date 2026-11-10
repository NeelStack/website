import {
  FileText,
  Zap,
} from 'lucide-react'
import type { Product } from '@/types'

export const PRODUCT_META: Record<string, { deployedLabel?: string; targetLaunch?: string }> = {
  dhruvaos: {
    deployedLabel: 'Flagship Product · Beta Live',
    targetLaunch: '14 November 2026',
  },
  toolvines: {
    deployedLabel: 'Live Product (WASM Utility Platform)',
  },
}

export const PRODUCTS: Product[] = [
  {
    id: 'dhruvaos',
    name: 'DhruvaOS',
    tagline: 'AI-Native School Operating System — Beta Live · Launching 14 November 2026',
    description:
      "DhruvaOS is NeelStack's flagship AI-native school operating system, currently onboarding early pilot educational institutions. Engineered to provide unified digital infrastructure for admissions, fee reconciliation, RFID attendance, parent communication, and automated school administration.",
    status: 'beta',
    icon: Zap,
    color: 'text-purple-500 dark:text-purple-400',
    bgColor: 'bg-purple-500/10',
    href: '/products/dhruvaos',
    features: [
      { label: 'Institutional onboarding & administrative governance' },
      { label: 'Automated fee reconciliation & online collections' },
      { label: 'Academics, timetable constraint-solving & gradebooks' },
      { label: 'Mobile apps for parents, students & teachers' },
      { label: 'AI campus assistant & predictive institutional analytics' },
    ],
    category: 'Flagship School Operating System',
  },
  {
    id: 'toolvines',
    name: 'ToolVines',
    tagline: 'Browser-Native Developer & Productivity Platform',
    description:
      'High-performance suite of client-side developer utilities, document formatters, cryptography engines, and media tools executing in-browser via Rust WebAssembly with zero remote document storage.',
    status: 'live',
    icon: FileText,
    color: 'text-blue-500 dark:text-blue-400',
    bgColor: 'bg-blue-500/10',
    href: '/products/toolvines',
    features: [
      { label: 'Client-side WebAssembly tools — PDF, Code, Cryptography & Media' },
      { label: 'In-browser local processing — Zero document data uploaded to servers' },
      { label: 'Offline PWA support — Full functionality cached locally' },
      { label: 'Air-gapped deployment ready for enterprise intranet environments' },
    ],
    category: 'Developer Platform (Live)',
  },
]

export const LIVE_PRODUCTS = PRODUCTS.filter((p) => p.status === 'live' || p.status === 'beta')
export const UPCOMING_PRODUCTS = PRODUCTS.filter((p) => p.status === 'in-development')
export const PLANNED_PRODUCTS = PRODUCTS.filter((p) => p.status === 'planned' || p.status === 'coming-soon')
