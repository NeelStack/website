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
import { JsonLd } from '@/components/seo/json-ld'
import { getSiteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'NeelStack Solutions | AI Engineering, LLM Integration & Custom Software Development',
  description:
    'NeelStack builds AI-powered products, LLM/RAG pipelines, autonomous AI agents, chatbot integrations, and custom enterprise software. From AI product engineering to SaaS platforms and intelligent automation.',
  keywords: [
    'NeelStack Solutions',
    'AI engineering company India',
    'LLM integration services',
    'RAG pipeline development',
    'AI agent development',
    'Chatbot integration services',
    'Custom software development',
    'AI product engineering',
    'Enterprise AI solutions',
    'DhruvaOS school operating system',
  ],
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <MarketingLayout>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'NeelStack Solutions',
          alternateName: ['NeelStack', 'NeelStack AI', 'NeelStack Technologies'],
          url: getSiteUrl(),
          description:
            'NeelStack Solutions builds software products, AI systems, and digital platforms, including ToolVines and DhruvaOS.',
          publisher: {
            '@type': 'Organization',
            name: 'NeelStack Solutions Private Limited',
            url: getSiteUrl(),
          },
        }}
      />
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
