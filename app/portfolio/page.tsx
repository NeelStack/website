import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { ProjectCard } from '@/components/ui/project-card'
import { Container } from '@/components/ui/container'
import { CTASection } from '@/components/ui/cta-section'
import type { Project } from '@/types'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore NeelStack project portfolio — live products, client work, and ongoing builds across healthcare, government, education, and enterprise.',
}

const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'toolvines',
    name: 'ToolVines',
    description:
      'Our first live product. A browser-based productivity platform providing PDF, image, video, annotation and document utilities with AI-powered features designed to simplify everyday workflows.',
    status: 'live',
    category: 'Productivity Platform',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    href: 'https://toolvines.com',
    year: '2026',
  },
  {
    id: 'naukarimitra',
    name: 'NaukariMitra',
    description:
      'AI-powered government job preparation platform providing exam guidance, mock tests, previous papers, study resources and personalized learning assistance.',
    status: 'in-progress',
    category: 'Ed-Tech Platform (In Dev)',
    tags: ['React', 'AI', 'Education', 'Government Tests'],
    href: '/products/naukarimitra',
    year: '2026',
  },
  {
    id: 'sarkarimitra',
    name: 'SarkariMitra',
    description:
      'AI-powered citizen assistance platform helping people discover government schemes, benefits, public services, eligibility criteria, required documents and application guidance through conversational AI.',
    status: 'in-progress',
    category: 'Gov-Tech Platform (In Dev)',
    tags: ['Next.js', 'OpenAI', 'Government', 'Citizen Services'],
    href: '/products/sarkarimitra',
    year: '2026',
  },
  {
    id: 'dhruvaos',
    name: 'DhruvaOS',
    description:
      'AI-powered social media automation platform helping creators, startups and businesses automate content publishing, workflow management and digital growth.',
    status: 'in-progress',
    category: 'Marketing SaaS (In Dev)',
    tags: ['React', 'AI', 'Social Media', 'Automation'],
    href: '/products/dhruvaos',
    year: '2026',
  },
  {
    id: 'lifeasia',
    name: 'LifeAsia Website',
    description:
      'Corporate website for a pharmaceutical company. The company develops, brands, markets and distributes pharmaceutical and healthcare products while partnering with certified third-party pharmaceutical manufacturers for product development and manufacturing.',
    status: 'in-progress',
    category: 'Corporate Website (Launching Soon)',
    tags: ['Next.js', 'Tailwind CSS', 'Healthcare', 'CMS'],
    href: '/contact',
    year: '2026',
  },
  {
    id: 'school-management-system',
    name: 'School Management System',
    description:
      'Custom software platform for school administration, operations and management.',
    status: 'in-progress',
    category: 'Custom Software (In Dev)',
    tags: ['Next.js', 'PostgreSQL', 'Education', 'Management'],
    href: '/contact',
    year: '2026',
  },
  {
    id: 'bookstore-management-system',
    name: 'Book Store Management System',
    description:
      'Custom software platform for educational book stores and institutional book distribution management.',
    status: 'in-progress',
    category: 'Custom Software (In Dev)',
    tags: ['React', 'Node.js', 'Inventory', 'Retail'],
    href: '/contact',
    year: '2026',
  },
]


export default function PortfolioPage() {
  const liveProducts = PORTFOLIO_PROJECTS.filter((p) => p.status === 'live')
  const devProducts = PORTFOLIO_PROJECTS.filter((p) => p.id === 'naukarimitra' || p.id === 'sarkarimitra' || p.id === 'dhruvaos')
  const clientProjects = PORTFOLIO_PROJECTS.filter((p) => p.id === 'lifeasia' || p.id === 'school-management-system' || p.id === 'bookstore-management-system')

  const getGridClass = (count: number) => {
    if (count === 1) return 'grid grid-cols-1 gap-5 md:max-w-2xl'
    if (count === 2) return 'grid grid-cols-1 gap-5 sm:grid-cols-2 md:max-w-4xl'
    return 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'
  }

  return (
    <MarketingLayout>
      <PageHero
        badge="Our work"
        title="Software We Are Proud Of"
        description="From proprietary products to custom client engagements — here is a selection of the software we have designed, built, and shipped."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]}
      />

      <section className="py-16" aria-labelledby="portfolio-heading">
        <Container>
          {/* Live products */}
          <div className="mb-16">
            <h2
              id="portfolio-heading"
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8"
            >
              Live Products
            </h2>
            <div className={getGridClass(liveProducts.length)}>
              {liveProducts.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Products in dev */}
          <div className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
              Products In Development
            </h2>
            <div className={getGridClass(devProducts.length)}>
              {devProducts.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Client Projects */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
              Client Projects
            </h2>
            <div className={getGridClass(clientProjects.length)}>
              {clientProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Want to be our next success story?"
        description="We love working on challenging problems. Tell us about your project and let's see if we are a good fit."
        primaryLabel="Start a Project"
        primaryHref="/request-quote"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
      />
    </MarketingLayout>
  )
}
