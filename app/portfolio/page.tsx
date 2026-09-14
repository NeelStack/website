import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { ProjectCard } from '@/components/ui/project-card'
import { Container } from '@/components/ui/container'
import { CTASection } from '@/components/ui/cta-section'
import type { Project } from '@/types'

export const metadata: Metadata = {
  title: 'Product Portfolio — Software & AI Systems | NeelStack Solutions',
  description:
    'Explore the NeelStack Solutions product portfolio — including ToolVines (live), DhruvaOS (in development), and our AI workforce research direction.',
  alternates: {
    canonical: '/portfolio',
  },
}

const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'toolvines',
    name: 'ToolVines',
    description:
      'Browser-based productivity platform providing PDF, image, document, and AI tools with zero server-side file retention and client-side WebAssembly compute.',
    status: 'live',
    category: 'Productivity Platform',
    tags: ['WebAssembly', 'Next.js', 'Zero-Retention', 'Browser Compute'],
    href: 'https://toolvines.com',
    year: '2026',
  },
  {
    id: 'dhruvaos',
    name: 'DhruvaOS',
    description:
      "NeelStack's school operating system, currently being prepared for launch. Features school onboarding, admin setup, CMS, official website, mobile app, desktop app, and planned AI capabilities.",
    status: 'in-progress',
    category: 'School Operating System',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Multi-Tenant', 'Tauri'],
    href: '/products/dhruvaos',
    year: '2026',
  },
  {
    id: 'ai-workforce',
    name: 'AI Workforce Platform / AI Company OS',
    description:
      'Research and product direction exploring specialized AI agents (Executive, Engineering, Operations, Sales) for organizational intelligence and workflow automation.',
    status: 'in-progress',
    category: 'AI Systems Architecture',
    tags: ['LangGraph', 'Model Context Protocol (MCP)', 'Multi-Agent', 'Memory'],
    href: '/#ai-strategy',
    year: '2026',
  },
  {
    id: 'naukarimitra',
    name: 'NaukariMitra',
    description:
      'Planned career exploration and competitive exam preparation platform with guided learning workflows and structured resources.',
    status: 'in-progress',
    category: 'Career & Learning (Planned)',
    tags: ['React', 'AI Assistance', 'Education', 'Mock Testing'],
    href: '/products/naukarimitra',
    year: '2026',
  },
  {
    id: 'sarakarimitra',
    name: 'SarakariMitra',
    description:
      'Planned public services and citizen guidance platform designed to help users discover and navigate government schemes and public documentation.',
    status: 'in-progress',
    category: 'Public Services (Planned)',
    tags: ['Next.js', 'Conversational AI', 'Public Services'],
    href: '/products/sarakarimitra',
    year: '2026',
  },
]

export default function PortfolioPage() {
  const liveProjects = PORTFOLIO_PROJECTS.filter((p) => p.status === 'live')
  const devProjects = PORTFOLIO_PROJECTS.filter((p) => p.status === 'in-progress')

  return (
    <MarketingLayout>
      <PageHero
        badge="Products & Systems"
        title="Software Products and AI Systems"
        description="A comprehensive overview of our live software, upcoming product launches, and active AI systems research."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]}
      />

      <section className="py-16" aria-labelledby="live-products-heading">
        <Container>
          {/* Live Products */}
          <div className="mb-16">
            <h2
              id="live-products-heading"
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8"
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
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
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

