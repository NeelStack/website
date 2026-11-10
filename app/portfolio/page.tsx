import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { ProjectCard } from '@/components/ui/project-card'
import { Container } from '@/components/ui/container'
import { CTASection } from '@/components/ui/cta-section'
import { JsonLd } from '@/components/seo/json-ld'
import { getSiteUrl } from '@/lib/site-url'
import type { Project } from '@/types'

export const metadata: Metadata = {
  title: 'Product Portfolio — Deployed Systems & Platforms',
  openGraph: {
    title: 'Product Portfolio — Deployed Software & AI Systems | NeelStack',
    description: 'Explore proprietary software products, open developer utilities, and enterprise platforms engineered by NeelStack.',
    url: `${getSiteUrl()}/portfolio`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Portfolio — Deployed Software & AI Systems | NeelStack',
    description: 'Explore proprietary software products, open developer utilities, and enterprise platforms engineered by NeelStack.',
  },
  description:
    'Explore the NeelStack Solutions product portfolio — including DhruvaOS (flagship beta), ToolVines (live platform), and our specialist AI workforce engineering capabilities.',
  alternates: {
    canonical: '/portfolio',
  },
}

const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'dhruvaos',
    name: 'DhruvaOS',
    description:
      "NeelStack's flagship AI-native school operating system, currently in active beta and onboarding early pilot institutions. Features unified school onboarding, automated fee reconciliation, CMS, cross-platform apps, and campus AI.",
    status: 'in-progress',
    category: 'Flagship School Operating System',
    tags: ['FastAPI', 'Next.js 16', 'PostgreSQL 16 RLS', 'Multi-Tenant', 'Tauri / Flutter'],
    href: '/products/dhruvaos',
    year: '2026',
  },
  {
    id: 'toolvines',
    name: 'ToolVines',
    description:
      'Browser-native productivity platform providing 320+ PDF, image, document, and developer utilities with zero server-side file retention and client-side Rust WebAssembly compute.',
    status: 'live',
    category: 'Developer Platform (Live)',
    tags: ['Rust WASM', 'Next.js 16', 'Zero-Retention', 'Client-Side Compute'],
    href: 'https://toolvines.com',
    year: '2026',
  },
]

export default function PortfolioPage() {
  const siteUrl = getSiteUrl()
  const liveProjects = PORTFOLIO_PROJECTS.filter((p) => p.status === 'live')
  const devProjects = PORTFOLIO_PROJECTS.filter((p) => p.status === 'in-progress')

  return (
    <MarketingLayout>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'NeelStack Software & AI Product Portfolio',
          description: 'Software platforms and AI systems engineered and operated by NeelStack Solutions.',
          url: `${siteUrl}/portfolio`,
          itemListElement: PORTFOLIO_PROJECTS.map((project, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'SoftwareApplication',
              name: project.name,
              applicationCategory: project.category,
              description: project.description,
              url: project.href.startsWith('http') ? project.href : `${siteUrl}${project.href}`,
            },
          })),
        }}
      />
      <PageHero
        badge="Products & Systems"
        title="Software Products and AI Systems"
        description="A comprehensive overview of our live software, upcoming product launches, and active AI systems research."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]}
      />

      <section className="py-8 sm:py-10 md:py-12" aria-labelledby="live-products-heading">
        <Container>
          {/* Live Products */}
          <div className="mb-8 sm:mb-10">
            <h2
              id="live-products-heading"
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 sm:mb-5"
            >
              Live &amp; Deployed Products
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {liveProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* In Development & Planned */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 sm:mb-5">
              Products in Development &amp; Systems Architecture
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {devProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a software or AI product idea?"
        description="Talk to our team about system architecture, product development, or technical exploration."
        primaryLabel="Talk to NeelStack"
        primaryHref="/contact"
        secondaryLabel="Explore Products"
        secondaryHref="/products"
      />
    </MarketingLayout>
  )
}

