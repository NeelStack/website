import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { HeroSection } from '@/components/sections/hero-section'
import { TrustStripSection } from '@/components/sections/telemetry-proof-bar'
import { ServicesOverviewSection } from '@/components/sections/services-overview-section'
import { BusinessProblemsSection } from '@/components/sections/business-problems-section'
import { IndustriesOverviewSection } from '@/components/sections/industries-overview-section'
import { WhyUsSection } from '@/components/sections/why-us-section'
import { DhruvaOSShowcaseSection } from '@/components/sections/dhruvaos-showcase-section'
import { TechnologySection } from '@/components/sections/technology-section'
import { FreeConsultationCTA } from '@/components/sections/free-consultation-cta'

export const metadata: Metadata = {
  title: 'NeelStack Solutions | Software Engineering & AI Services for Modern Businesses',
  description:
    'NeelStack designs, builds and modernizes custom software, AI-powered systems and digital products for businesses. From enterprise applications to SaaS products and intelligent automation.',
  keywords: [
    'NeelStack Solutions',
    'Custom software development',
    'AI development services',
    'Software engineering company India',
    'Enterprise software development',
    'SaaS product engineering',
    'DhruvaOS school operating system',
    'Cloud and DevOps services',
    'Legacy modernization',
    'AI agent development',
  ],
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <MarketingLayout>
      {/* 1. Hero: Kinetic capabilities & AI systems headline */}
      <HeroSection />

      {/* 2. Trust Strip: Capabilities + registrations */}
      <TrustStripSection />

      {/* 4. Services: 6 business-oriented service cards */}
      <ServicesOverviewSection />

      {/* 4. Business Problems: Interactive Challenge-Solution Architecture */}
      <BusinessProblemsSection />

      {/* 5. Industries: 6 balanced domain verticals */}
      <IndustriesOverviewSection />

      {/* 6. Why NeelStack: 3 High-Impact Value Pillars */}
      <WhyUsSection />

      {/* 7. Products & Platforms: DhruvaOS Flagship Showcase + ToolVines Companion Bar */}
      <DhruvaOSShowcaseSection />

      {/* 8. Technology: Connected 4-tier technology architecture */}
      <TechnologySection />

      {/* 9. CTA: Outcome-driven final conversion banner */}
      <FreeConsultationCTA />
    </MarketingLayout>
  )
}
