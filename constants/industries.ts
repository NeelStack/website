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
  ShoppingCart,
  Truck,
} from 'lucide-react'
import type { Industry } from '@/types'

export const INDUSTRIES: Industry[] = [
  {
    id: 'education',
    name: 'Education & Academia',
    description:
      'Transforming educational institutions with custom portals, administration platforms, and personalized testing guides.',
    icon: BookOpen,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
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
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
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
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
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
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
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
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
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
    color: 'text-fuchsia-400',
    bgColor: 'bg-fuchsia-500/10',
    href: '/industries/startups',
    solutions: [
      'Rapid MVP development',
      'Multi-tenant SaaS platforms',
      'AI pipeline integrations',
      'Cost-performance optimization',
    ],
  },
]
