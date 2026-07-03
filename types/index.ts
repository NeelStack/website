import type { LucideIcon } from 'lucide-react'

// ─────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  description?: string
  icon?: LucideIcon
  badge?: string
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

export interface NavMenu {
  label: string
  href?: string
  groups?: NavGroup[]
  items?: NavItem[]
}

// ─────────────────────────────────────────────
// Products
// ─────────────────────────────────────────────

export type ProductStatus = 'live' | 'beta' | 'coming-soon' | 'in-development'

export interface ProductFeature {
  label: string
}

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  status: ProductStatus
  icon: LucideIcon
  color: string          // Tailwind color class (e.g. "text-blue-400")
  bgColor: string        // Tailwind bg class (e.g. "bg-blue-500/10")
  href: string
  features: ProductFeature[]
  category: string
}

// ─────────────────────────────────────────────
// Services
// ─────────────────────────────────────────────

export interface Service {
  id: string
  name: string
  description: string
  icon: LucideIcon
  color: string
  bgColor: string
  href: string
  highlights: string[]
  category: string
}

// ─────────────────────────────────────────────
// Industries
// ─────────────────────────────────────────────

export interface Industry {
  id: string
  name: string
  description: string
  icon: LucideIcon
  color: string
  bgColor: string
  href: string
  solutions: string[]
}

// ─────────────────────────────────────────────
// Portfolio & Case Studies
// ─────────────────────────────────────────────

export type ProjectStatus = 'live' | 'in-progress' | 'coming-soon'

export interface Project {
  id: string
  name: string
  client?: string
  description: string
  status: ProjectStatus
  category: string
  tags: string[]
  image?: string
  href: string
  year?: string
}

export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: CaseStudyResult[]
  technologies: string[]
  image?: string
  href: string
}

export interface CaseStudyResult {
  metric: string
  value: string
  description?: string
}

// ─────────────────────────────────────────────
// Blog
// ─────────────────────────────────────────────

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string
  category: string
  tags: string[]
  author: BlogAuthor
  publishedAt: string
  readTime: string
  image?: string
  href: string
  featured?: boolean
}

export interface BlogAuthor {
  name: string
  avatar?: string
  role: string
}

// ─────────────────────────────────────────────
// Testimonials
// ─────────────────────────────────────────────

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
  rating?: number
}

// ─────────────────────────────────────────────
// Stats
// ─────────────────────────────────────────────

export interface Stat {
  label: string
  value: string
  suffix?: string
  description?: string
}

// ─────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────

export interface FAQItem {
  question: string
  answer: string
  category?: string
}

// ─────────────────────────────────────────────
// Pricing
// ─────────────────────────────────────────────

export type PricingTier = 'starter' | 'professional' | 'enterprise'

export interface PricingFeature {
  label: string
  included: boolean
  note?: string
}

export interface PricingPlan {
  id: PricingTier
  name: string
  description: string
  price?: string
  priceSuffix?: string
  isPopular?: boolean
  features: PricingFeature[]
  ctaLabel: string
  ctaHref: string
}

// ─────────────────────────────────────────────
// Technology
// ─────────────────────────────────────────────

export interface Technology {
  name: string
  category: string
  logo?: string
}

export interface TechCategory {
  name: string
  technologies: Technology[]
}

// ─────────────────────────────────────────────
// Process / Timeline
// ─────────────────────────────────────────────

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: LucideIcon
}

// ─────────────────────────────────────────────
// Careers
// ─────────────────────────────────────────────

export type JobType = 'full-time' | 'part-time' | 'contract' | 'internship'
export type JobMode = 'remote' | 'hybrid' | 'on-site'

export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: JobType
  mode: JobMode
  experience: string
  description: string
  href: string
  postedAt: string
}

// ─────────────────────────────────────────────
// Contact
// ─────────────────────────────────────────────

export interface ContactInfo {
  type: 'email' | 'phone' | 'address' | 'hours'
  label: string
  value: string
  href?: string
  icon: LucideIcon
}

// ─────────────────────────────────────────────
// Shared
// ─────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface PageMeta {
  title: string
  description: string
  breadcrumbs?: BreadcrumbItem[]
}
