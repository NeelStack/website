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
