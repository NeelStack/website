import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { HeroSection } from '@/components/sections/hero-section'
import { TrustMarquee } from '@/components/sections/trust-marquee'
import { CapabilitiesSection } from '@/components/sections/capabilities-section'
import { TechnologySection } from '@/components/sections/technology-section'
import { PortfolioShowcaseSection } from '@/components/sections/portfolio-showcase-section'
import { WhyUsSection } from '@/components/sections/why-us-section'
import { FreeConsultationCTA } from '@/components/sections/free-consultation-cta'
import { getSiteUrl } from '@/lib/site-url'

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


export default function HomePage() {
  return (
    <MarketingLayout>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Validation */}
      <TrustMarquee />

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
