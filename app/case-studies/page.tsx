import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { CaseStudiesClient } from '@/components/sections/case-studies-client'
import { CTASection } from '@/components/ui/cta-section'
import { getSiteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'Enterprise Case Studies — Software & AI Systems Architecture | NeelStack India',
  description:
    'Deep dives into how NeelStack engineers multi-tenant cloud ERPs, autonomous AI agent workflows, and high-throughput systems with defensible metrics.',
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    title: 'Enterprise Case Studies — Software & AI Systems Architecture | NeelStack India',
    description:
      'Deep dives into how NeelStack engineers multi-tenant cloud ERPs, autonomous AI agent workflows, and high-throughput systems with defensible metrics.',
    type: 'website',
  },
}

export default function CaseStudiesPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Enterprise Engineering Case Studies"
        title="Real Systems. Defensible Numbers."
        description="Explore how NeelStack designs, builds, and deploys high-scale software platforms, autonomous AI systems, and multi-tenant architectures for enterprises worldwide."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Case Studies' }]}
      />

      <CaseStudiesClient />

      <CTASection
        title="Ready to engineer your next software breakthrough?"
        description="Schedule a confidential architecture session directly with our senior software leads."
        primaryLabel="Schedule Engineering Session"
        primaryHref="/book-consultation"
        secondaryLabel="Explore DhruvaOS Cloud ERP"
        secondaryHref="/products/dhruvaos"
      />
    </MarketingLayout>
  )
}
