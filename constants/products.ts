import {
  Building,
  FileText,
  GraduationCap,
  Share2,
} from 'lucide-react'
import type { Product } from '@/types'

export const PRODUCTS: Product[] = [
  {
    id: 'toolvines',
    name: 'ToolVines',
    tagline: 'Browser-based Productivity Platform',
    description:
      'Browser-based productivity platform providing PDF, image, video, annotation and document utilities with AI-powered features designed to simplify everyday workflows for individuals, professionals and businesses.',
    status: 'live',
    icon: FileText,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    href: 'https://toolvines.com',
    features: [
      { label: 'PDF, image, and video utilities' },
      { label: 'Annotation and document tools' },
      { label: 'AI-powered workflow features' },
      { label: 'Browser-based utility workflows' },
    ],
    category: 'Productivity Platform',
  },
  {
    id: 'naukarimitra',
    name: 'NaukariMitra',
    tagline: 'AI-powered Government Job Companion',
    description:
      'AI-powered government job preparation platform providing exam guidance, mock tests, personalized learning, previous papers and exam assistance.',
    status: 'in-development',
    icon: GraduationCap,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    href: '/products/naukarimitra',
    features: [
      { label: 'Exam guidance & study resources' },
      { label: 'Mock tests & previous papers' },
      { label: 'Personalized learning assistance' },
      { label: 'Study progression trackers' },
    ],
    category: 'Ed-Tech Platform',
  },
  {
    id: 'sarkarimitra',
    name: 'SarkariMitra',
    tagline: 'AI Citizen Assistance Platform',
    description:
      'AI-powered citizen assistance platform helping people discover government schemes, benefits, public services, eligibility criteria, required documents and application guidance through conversational AI. Its purpose is to simplify access to government information and citizen services.',
    status: 'in-development',
    icon: Building,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    href: '/products/sarkarimitra',
    features: [
      { label: 'Discover schemes & benefits' },
      { label: 'Verify eligibility criteria' },
      { label: 'Review required document lists' },
      { label: 'Step-by-step application guidance' },
    ],
    category: 'Gov-Tech Platform',
  },
  {
    id: 'dhruvaos',
    name: 'DhruvaOS',
    tagline: 'AI-powered Social Media Automation',
    description:
      'AI-powered social media automation platform helping creators, startups and businesses manage content, publishing, workflows and digital growth.',
    status: 'in-development',
    icon: Share2,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    href: '/products/dhruvaos',
    features: [
      { label: 'AI content ideas generation' },
      { label: 'Multi-channel publisher scheduler' },
      { label: 'Interactive content workflows manager' },
      { label: 'Aggregated social digital analytics' },
    ],
    category: 'Marketing SaaS',
  },
]

export const LIVE_PRODUCTS = PRODUCTS.filter((p) => p.status === 'live')
export const UPCOMING_PRODUCTS = PRODUCTS.filter((p) => p.status === 'in-development')
