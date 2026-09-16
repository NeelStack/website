import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { HeroSection } from '@/components/sections/hero-section'
import { TelemetryProofBar } from '@/components/sections/telemetry-proof-bar'
import { ThreeEnginesBento } from '@/components/sections/three-engines-bento'
import { ArchitecturalProcessTrack } from '@/components/sections/architectural-process-track'
import { AiStrategySection } from '@/components/sections/ai-strategy-section'
import { CapabilitiesSection } from '@/components/sections/capabilities-section'
import { TechnologySection } from '@/components/sections/technology-section'
import { CorporateGovernanceCard } from '@/components/sections/corporate-governance-card'
import { WhyUsSection } from '@/components/sections/why-us-section'
import { FreeConsultationCTA } from '@/components/sections/free-consultation-cta'

export const metadata: Metadata = {
  title: 'NeelStack Solutions | Frontier Multi-Agent Intelligence & Enterprise Systems',
  description:
    'Architecting autonomous systems and scalable software for the AI-native era. Powering the Three Engines: NeelStack Services, DhruvaOS, and ToolVines.',
  keywords: [
    'NeelStack Solutions',
    'Frontier AI engineering',
    'Multi-agent intelligence',
    'Agentic AI India',
    'ToolVines',
    'DhruvaOS school operating system',
    'AI Company OS',
    'Enterprise software development',
    'Model Context Protocol',
    'LangGraph multi-agent workflows',
  ],
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <MarketingLayout>
      {/* 1. Hero Section: Frontier AI Engineering */}
      <HeroSection />

      {/* 2. High-Trust Metrics & Telemetry Bar */}
      <TelemetryProofBar />

      {/* 3. The Three Engines Tactile Bento Grid */}
      <ThreeEnginesBento />

      {/* 4. Architectural Process Track ("How We Build") */}
      <ArchitecturalProcessTrack />

      {/* 5. AI Agent Strategy & Autonomous Workforce Platform */}
      <AiStrategySection />

      {/* 6. Core Engineering & Technical Capabilities */}
      <CapabilitiesSection />

      {/* 7. Frontier Technology Stack */}
      <TechnologySection />

      {/* 8. Corporate Governance & Transparency Card */}
      <CorporateGovernanceCard />

      {/* 9. Why NeelStack & Engineering Discipline */}
      <WhyUsSection />

      {/* 10. Contact / Request Architecture Proposal CTA */}
      <FreeConsultationCTA />
    </MarketingLayout>
  )
}
