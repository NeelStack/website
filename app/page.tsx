import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { HeroSection } from '@/components/sections/hero-section'
import { AccreditationBadges } from '@/components/ui/accreditation-badges'
import { WhatWeAreBuildingSection } from '@/components/sections/what-we-are-building-section'
import { AiStrategySection } from '@/components/sections/ai-strategy-section'
import { PortfolioShowcaseSection } from '@/components/sections/portfolio-showcase-section'
import { CapabilitiesSection } from '@/components/sections/capabilities-section'
import { TechnologySection } from '@/components/sections/technology-section'
import { WhyUsSection } from '@/components/sections/why-us-section'
import { FreeConsultationCTA } from '@/components/sections/free-consultation-cta'

export const metadata: Metadata = {
  title: 'NeelStack Solutions | Software Products & AI Systems',
  description:
    'NeelStack Solutions builds software products, AI systems and digital platforms, including ToolVines and DhruvaOS.',
  keywords: [
    'NeelStack Solutions',
    'Software products India',
    'AI systems company',
    'Agentic AI',
    'ToolVines',
    'DhruvaOS school operating system',
    'AI Company OS',
    'Enterprise software development',
    'Digital platforms India',
  ],
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <MarketingLayout>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Official Government of India Accreditations */}
      <AccreditationBadges />

      {/* 3. What We Are Building: Core Pillars */}
      <WhatWeAreBuildingSection />

      {/* 4. AI Agent Strategy & Autonomous Workforce Platform */}
      <AiStrategySection />

      {/* 5. Featured Products & Systems Portfolio */}
      <PortfolioShowcaseSection />

      {/* 6. Core Engineering & Technical Capabilities */}
      <CapabilitiesSection />

      {/* 7. Frontier Technology Stack */}
      <TechnologySection />

      {/* 8. Why NeelStack & Company Vision */}
      <WhyUsSection />

      {/* 9. Contact / Talk to NeelStack CTA */}
      <FreeConsultationCTA />
    </MarketingLayout>
  )
}

