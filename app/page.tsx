import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { HeroSection } from '@/components/sections/hero-section'
import { TrustBarSection } from '@/components/sections/trust-bar-section'
import { CapabilitiesSection } from '@/components/sections/capabilities-section'
import { PortfolioShowcaseSection } from '@/components/sections/portfolio-showcase-section'
import { FashionShowcaseSection } from '@/components/sections/fashion-showcase-section'
import { IndustryGridSection } from '@/components/sections/industry-grid-section'
import { WhyUsSection } from '@/components/sections/why-us-section'
import { TechnologySection } from '@/components/sections/technology-section'
import { ProcessSection } from '@/components/sections/process-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { BlogPreviewSection } from '@/components/sections/blog-preview-section'
import { WebsiteAnalysisLeadMagnet } from '@/components/sections/website-analysis-lead-magnet'
import { FreeConsultationCTA } from '@/components/sections/free-consultation-cta'
import { getSiteUrl } from '@/lib/site-url'
import { Laptop, Smartphone, Sparkles, Bot, Cloud, Sliders, Shield, Users, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'NeelStack | Enterprise AI & Product Engineering Company',
  description:
    'NeelStack designs, engineers, and scales intelligent software platforms, enterprise SaaS, and custom AI solutions that scale businesses.',
  keywords: [
    'Enterprise Software',
    'AI Native Product Engineering',
    'Custom Software Development',
    'SaaS Engineering',
    'Cloud-Native Architectures',
    'NeelStack',
    'DhruvaOS',
    'ToolVines',
  ],
  alternates: {
    canonical: getSiteUrl(),
  },
}

/* ── Customer-First Primary Services ── */
const primaryServices = [
  {
    id: 'website-development',
    title: 'Website Development',
    icon: Laptop,
    desc: 'High-speed business websites, corporate portals, Next.js storefronts, and conversion-focused landing pages.',
    href: '/services/enterprise-web',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-500/10 border-blue-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: Smartphone,
    desc: 'Native iOS & Android apps, cross-platform Flutter/React Native solutions, and Progressive Web Apps (PWA).',
    href: '/services/mobile-development',
    color: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-500/10 border-cyan-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.18)]',
  },
  {
    id: 'custom-software-erp',
    title: 'Custom Software & ERP/CRM',
    icon: Sparkles,
    desc: 'Tailored ERP systems, CRM client portals, internal team workflow tools, and multi-tenant SaaS products.',
    href: '/services/custom-software',
    color: 'text-violet-600 dark:text-violet-400',
    bgColor: 'bg-violet-500/10 border-violet-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Agents',
    icon: Bot,
    desc: '24/7 AI chatbots, autonomous workflow agents, custom LLMs, and vector RAG document search engines.',
    href: '/services/ai-development',
    color: 'text-rose-600 dark:text-rose-400',
    bgColor: 'bg-rose-500/10 border-rose-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.18)]',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    icon: Cloud,
    desc: 'AWS & Vercel hosting setups, Docker containerization, automated CI/CD pipelines, and zero-downtime scaling.',
    href: '/services/devops-cloud',
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-500/10 border-amber-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.18)]',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    icon: Sliders,
    desc: 'Interactive Figma wireframing, high-fidelity design systems, conversion rate optimization, and brand identity.',
    href: '/services/ui-ux-design',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-500/10 border-emerald-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]',
  },
]

/* ── "Why Choose" differentiators ── */
const whyChoose = [
  {
    title: 'AI-First Engineering',
    desc: 'We weave cognitive LLM modules directly into database and server workflows rather than tacking on superficial bots.',
    icon: Bot,
    color: 'text-cyan-600 dark:text-cyan-400',
    borderColor: 'border-l-cyan-500',
    bgColor: 'bg-cyan-500/10 border-cyan-500/25',
  },
  {
    title: 'Cloud-Native Architecture',
    desc: 'Engineered for serverless execution, autoscaling, and global multi-region deployments with subsecond latency.',
    icon: Cloud,
    color: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-l-violet-500',
    bgColor: 'bg-violet-500/10 border-violet-500/25',
  },
  {
    title: 'Enterprise-Grade Security',
    desc: 'Role-based authorization matrices, database encryption at rest and in transit, and audit logging standards.',
    icon: Shield,
    color: 'text-amber-600 dark:text-amber-400',
    borderColor: 'border-l-amber-500',
    bgColor: 'bg-amber-500/10 border-amber-500/25',
  },
  {
    title: 'Dedicated Senior Engineers',
    desc: 'No outsourcing or junior handoffs. You work directly with senior software architects and engineers.',
    icon: Users,
    color: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-l-emerald-500',
    bgColor: 'bg-emerald-500/10 border-emerald-500/25',
  },
  {
    title: 'Modern Linear/Stripe UX',
    desc: 'Vibrant, minimal design languages built on strict CSS custom properties and spring micro-interactions.',
    icon: Layers,
    color: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-l-blue-500',
    bgColor: 'bg-blue-500/10 border-blue-500/25',
  },
  {
    title: 'Product Thinking',
    desc: 'We build with business commercial goals in mind — focusing on speed to market, user retention, and low maintenance.',
    icon: Sparkles,
    color: 'text-rose-600 dark:text-rose-400',
    borderColor: 'border-l-rose-500',
    bgColor: 'bg-rose-500/10 border-rose-500/25',
  },
]

export default function HomePage() {
  return (
    <MarketingLayout>
      {/* 1. Hero Section (Word reveal, AI network, parallax orbs) */}
      <HeroSection />

      {/* 2. Trust Bar (Engineering Pillars with blend connectors) */}
      <TrustBarSection />

      {/* 3. Core Capabilities (3D Hover tilt cards, staggered header) */}
      <CapabilitiesSection />

      {/* 4. Featured Portfolio Showcase (ToolVines, DhruvaOS) */}
      <PortfolioShowcaseSection />

      {/* 5. D2C Fashion Showcase */}
      <FashionShowcaseSection />

      {/* 6. Industries Domain Matrix (staggered card entrance) */}
      <IndustryGridSection />

      {/* 7. Why Clients Choose Us (Infinite horizontal marquee) */}
      <WhyUsSection />

      {/* 8. Interactive Tech Stack Switcher (Framer Motion layoutId + tab glow) */}
      <TechnologySection />

      {/* 9. Product Development Methodology (Animated timeline) */}
      <ProcessSection />

      {/* 10. Industry Trust Signals (Verified domain outcomes) */}
      <TestimonialsSection />

      {/* 11. Website Analysis Lead Magnet */}
      <WebsiteAnalysisLeadMagnet />

      {/* 12. Engineering Insights */}
      <BlogPreviewSection />

      {/* 13. Consultation CTA */}
      <FreeConsultationCTA />
    </MarketingLayout>
  )
}
