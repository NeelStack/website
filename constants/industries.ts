import {
  BookOpen,
  Building2,
  Factory,
  FlaskConical,
  HeartPulse,
  Hotel,
  Home,
  Landmark,
  Rocket,
  Shirt,
  ShoppingCart,
  Truck,
} from 'lucide-react'
import type { Industry } from '@/types'

export const INDUSTRIES: Industry[] = [
  {
    id: 'fashion-d2c',
    name: 'Fashion, Apparel & D2C Brands',
    description:
      'Designing high-aesthetic Next.js storefronts, 3D interactive lookbooks, AI size estimation, and social commerce integrations for clothing brands.',
    icon: Shirt,
    color: 'text-rose-600 dark:text-rose-400',
    bgColor: 'bg-rose-500/10 border-rose-500/20',
    href: '/industries/fashion-d2c',
    solutions: [
      'High-Speed Custom Storefronts',
      'AI Virtual Try-On & Sizing Engines',
      'Interactive 3D Lookbooks',
      'Social Commerce & Inventory Sync',
    ],
  },
  {
    id: 'education',
    name: 'Education & Academia',
    description:
      'Transforming educational institutions with custom portals, administration platforms, and personalized testing guides.',
    icon: BookOpen,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-500/10 border-blue-500/20',
    href: '/industries/education',
    solutions: [
      'School Management Systems',
      'Bookstore & Distribution platforms',
      'AI-powered Exam guidance',
      'Student record databases',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare Providers',
    description:
      'Designing web applications and operational tools tailored for clinics, laboratories, and health services.',
    icon: HeartPulse,
    color: 'text-rose-600 dark:text-rose-400',
    bgColor: 'bg-rose-500/10 border-rose-500/20',
    href: '/industries/healthcare',
    solutions: [
      'Clinic workflow portals',
      'Secure inventory databases',
      'Patient engagement applications',
      'Regulatory compliance checks',
    ],
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical Systems',
    description:
      'Helping pharmaceutical brand developers manage distribution, inventory tracking, CMS interfaces, and third-party manufacturing checks.',
    icon: FlaskConical,
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-500/10 border-emerald-500/20',
    href: '/industries/pharmaceutical',
    solutions: [
      'Inventory distribution management',
      'Brand showcase CMS platforms',
      'Manufacturing validation tools',
      'Quality control trackers',
    ],
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    description:
      'Providing citizen assistance utilities, conversational schemes search algorithms, and guidelines tools.',
    icon: Building2,
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-500/10 border-amber-500/20',
    href: '/industries/government',
    solutions: [
      'Scheme discoverability guides',
      'Eligibility check algorithms',
      'Required document checklists',
      'Conversational AI assistants',
    ],
  },
  {
    id: 'retail',
    name: 'Retail & Digital Commerce',
    description:
      'Empowering book stores, retailers, and distributors with point of sale, billing, and stock analytics platforms.',
    icon: ShoppingCart,
    color: 'text-violet-600 dark:text-violet-400',
    bgColor: 'bg-violet-500/10 border-violet-500/20',
    href: '/industries/retail',
    solutions: [
      'Bookstore POS systems',
      'Supplier portal panels',
      'Billing automation engines',
      'Dynamic inventory tracking',
    ],
  },
  {
    id: 'startups',
    name: 'Startups & SaaS Projects',
    description:
      'Accelerating early-stage businesses with high-fidelity React frontends, robust Python backends, and cloud hosting setups.',
    icon: Rocket,
    color: 'text-fuchsia-600 dark:text-fuchsia-400',
    bgColor: 'bg-fuchsia-500/10 border-fuchsia-500/20',
    href: '/industries/startups',
    solutions: [
      'Rapid MVP development',
      'Multi-tenant SaaS platforms',
      'AI pipeline integrations',
      'Cost-performance optimization',
    ],
  },
]
