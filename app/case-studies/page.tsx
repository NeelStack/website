import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { CaseStudiesClient } from '@/components/sections/case-studies-client'
import { CTASection } from '@/components/ui/cta-section'
import { JsonLd } from '@/components/seo/json-ld'
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
  const siteUrl = getSiteUrl()

  return (
    <MarketingLayout>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'NeelStack Enterprise Engineering Case Studies',
          description: 'Production architecture case studies on autonomous multi-agent ERPs, multi-tenant cloud systems, and high-throughput backends.',
          url: `${siteUrl}/case-studies`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Agentic AI in DhruvaOS: Autonomous Goal-Driven Enterprise Workflows',
              url: `${siteUrl}/blog/agentic-ai-in-dhruvaos-autonomous-enterprise-erp-agi`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'DhruvaOS Foundation: Dynamic Schema-per-Tenant Multi-Tenancy Architecture',
              url: `${siteUrl}/blog/architecting-dhruvaos-foundation-schema-per-tenant-postgresql`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'ToolVines Architecture: High-Throughput In-Browser Private Compute Platform',
              url: `${siteUrl}/blog/building-scalable-multitenant-saas-applications`,
            },
          ],
        }}
      />
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
