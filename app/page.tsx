import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { HeroSection } from '@/components/sections/hero-section'
import { AccreditationBadges } from '@/components/ui/accreditation-badges'
import { CapabilitiesSection } from '@/components/sections/capabilities-section'
import { TechnologySection } from '@/components/sections/technology-section'
import { PortfolioShowcaseSection } from '@/components/sections/portfolio-showcase-section'
import { WhyUsSection } from '@/components/sections/why-us-section'
import { FreeConsultationCTA } from '@/components/sections/free-consultation-cta'
import { getSiteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'NeelStack | Best Software Development Company in India — Agentic AI & Custom Software',
  description:
    'NeelStack is a premier enterprise software development and Agentic AI company in India. We engineer autonomous AI agents, enterprise chatbots, custom ERPs, and high-performance cloud platforms for organizations worldwide.',
  keywords: [
    'best software development company in India',
    'AI development company India',
    'build AI chatbot India',
    'agentic AI company India',
    'enterprise software development company India',
    'custom ERP software India',
    'hire AI developers India',
    'Model Context Protocol MCP developers',
    'LangGraph multi-agent engineering',
    'software development company Gorakhpur UP',
    'NeelStack',
    'DhruvaOS',
    'ToolVines',
  ],
  alternates: {
    canonical: '/',
  },
}


export default function HomePage() {
  return (
    <MarketingLayout>
      {/* 1. Hero Section with Interactive System Terminal */}
      <HeroSection />

      {/* 2. Official Government of India Accreditations */}
      <AccreditationBadges />

      {/* 3. Core Capabilities (Bento Grid) */}
      <CapabilitiesSection />

      {/* 4. Interactive Tech Stack Switcher (AI focused) */}
      <TechnologySection />

      {/* 5. Featured Portfolio Showcase */}
      <PortfolioShowcaseSection />

      {/* 6. Why Clients Choose Us */}
      <WhyUsSection />

      {/* 7. Consultation CTA */}
      <FreeConsultationCTA />
    </MarketingLayout>
  )
}
