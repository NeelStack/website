import {
  Building,
  FileText,
  GraduationCap,
  Zap,
} from 'lucide-react'
import type { Product } from '@/types'

// Extended product metadata (not part of Product type — used as display hints)
export const PRODUCT_META: Record<string, { deployedLabel?: string; betaDate?: string; isSchoolProject?: boolean }> = {
  toolvines: {
    deployedLabel: 'Live & Deployed',
  },
  dhruvaos: {
    betaDate: 'July 15, 2026',
  },
}

export const PRODUCTS: Product[] = [
  {
    id: 'toolvines',
    name: 'ToolVines',
    tagline: 'Browser Productivity Platform — Live & Deployed ✦',
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
    disclaimer: 'Disclaimer: NaukariMitra is an independent AI-powered exam preparation companion. It is NOT affiliated with, sponsored by, or endorsed by any government entity or public recruitment board.',
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
    disclaimer: 'Disclaimer: SarkariMitra is an independent citizen information platform. It is NOT affiliated with, sponsored by, or endorsed by any government department, public agency, or ministry.',
  },
  {
    id: 'dhruvaos',
    name: 'DhruvaOS',
    tagline: 'One Platform. Every Educational Workflow.',
    description:
      'Digitally transform schools, colleges, universities, and educational institutions with one unified platform for administration, academics, communication, finance, analytics, and AI-powered learning.',
    status: 'beta',
    icon: Zap,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    href: '/products/dhruvaos',
    features: [
      { label: 'Admissions & Fee Management' },
      { label: 'LMS & AI-Powered Learning' },
      { label: 'Institutional Analytics & HR' },
      { label: 'Parent, Teacher & Student Portals' },
    ],
    category: 'Education Operating System (EdOS)',
  },
]

export const LIVE_PRODUCTS = PRODUCTS.filter((p) => p.status === 'live')
export const UPCOMING_PRODUCTS = PRODUCTS.filter((p) => p.status === 'in-development')
