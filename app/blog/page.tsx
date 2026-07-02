import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { BlogCard } from '@/components/ui/blog-card'
import { Container } from '@/components/ui/container'
import type { BlogPost } from '@/types'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Engineering insights, product updates, and technology deep dives from the NeelStack Technologies team.',
}

const ALL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Multi-Tenant SaaS Applications with Next.js and PostgreSQL',
    excerpt:
      'Learn how to architect a production-ready multi-tenant SaaS platform — row-level security, tenant isolation, and feature flagging.',
    category: 'Backend Engineering',
    tags: ['Next.js', 'SaaS', 'PostgreSQL'],
    author: { name: 'Shyam Chaurasiya', role: 'Founder & Engineering Lead' },
    publishedAt: 'July 2, 2026',
    readTime: '12 min read',
    href: '/blog',
    featured: true,
  },
  {
    id: '2',
    title: 'How AI is Transforming Government Information Access in India',
    excerpt:
      'An inside look at how SarkariMitra uses conversational LLM pipelines to simplify public schemes discovery.',
    category: 'Artificial Intelligence',
    tags: ['AI', 'Government', 'SarkariMitra'],
    author: { name: 'Shyam Chaurasiya', role: 'Founder & Engineering Lead' },
    publishedAt: 'June 28, 2026',
    readTime: '7 min read',
    href: '/blog',
  },
  {
    id: '3',
    title: 'ERP Architecture Decisions: Monolith vs Microservices for Enterprise Clients',
    excerpt:
      'When should you build an ERP as a monolith and when should you go microservices? We break down the trade-offs with real examples.',
    category: 'Architecture',
    tags: ['ERP', 'Architecture', 'Enterprise'],
    author: { name: 'Shyam Chaurasiya', role: 'Founder & Engineering Lead' },
    publishedAt: 'June 20, 2026',
    readTime: '9 min read',
    href: '/blog',
  },
  {
    id: '4',
    title: 'Standardizing Core Web Vitals: Building Software That Works for Everyone',
    excerpt:
      'Performance is not a feature — it is a fundamental requirement. Here is how we build performant frontends at NeelStack.',
    category: 'Engineering Best Practices',
    tags: ['Accessibility', 'UI/UX', 'WCAG'],
    author: { name: 'Shyam Chaurasiya', role: 'Founder & Engineering Lead' },
    publishedAt: 'June 15, 2026',
    readTime: '8 min read',
    href: '/blog',
  },
  {
    id: '5',
    title: 'Why We Chose Next.js App Router for All Our New Projects',
    excerpt:
      'After evaluating several frameworks, we standardized on Next.js App Router. Here is our reasoning, trade-offs, and lessons from production.',
    category: 'Next.js',
    tags: ['Next.js', 'React', 'Architecture'],
    author: { name: 'Shyam Chaurasiya', role: 'Founder & Engineering Lead' },
    publishedAt: 'June 10, 2026',
    readTime: '10 min read',
    href: '/blog',
  },
  {
    id: '6',
    title: 'The Hidden Costs of Custom Software Development (And How to Avoid Them)',
    excerpt:
      'Custom software projects often exceed budget not because of bad code — but because of unclear requirements and scope creep. We share our proven mitigation strategies.',
    category: 'Startup Journey',
    tags: ['Project Management', 'Budget', 'Strategy'],
    author: { name: 'Neelam Chaurasiya', role: 'Co-Founder' },
    publishedAt: 'June 5, 2026',
    readTime: '6 min read',
    href: '/blog',
  },
]

const CATEGORIES = [
  'All',
  'Artificial Intelligence',
  'Software Engineering',
  'System Design',
  'Architecture',
  'Developer Productivity',
  'Next.js',
  'React',
  'TypeScript',
  'Backend Engineering',
  'Startup Journey',
  'Technical Tutorials',
  'Product Development',
  'Engineering Best Practices',
]

export default function BlogPage() {
  const featuredPost = ALL_POSTS.find((p) => p.featured)
  const regularPosts = ALL_POSTS.filter((p) => !p.featured)

  return (
    <MarketingLayout>
      <PageHero
        badge="Blog"
        title="Insights from Our Team"
        description="Engineering deep dives, product stories, architecture lessons, and technology perspectives from the team building NeelStack."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section className="py-16" aria-labelledby="blog-posts-heading">
        <Container>
          <h2 id="blog-posts-heading" className="sr-only">Blog posts</h2>

          {/* Category filter */}
          <div
            className="mb-10 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter posts by category"
          >
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/80 cursor-pointer transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          {featuredPost && (
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Featured
              </p>
              <BlogCard post={featuredPost} variant="featured" />
            </div>
          )}

          {/* Regular posts grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
