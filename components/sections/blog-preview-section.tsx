import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { BlogCard } from '@/components/ui/blog-card'
import type { BlogPost } from '@/types'

const SAMPLE_POSTS: BlogPost[] = [
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
]

export function BlogPreviewSection() {
  return (
    <Section id="blog">
      <Container>
        <SectionHeader
          badge="From our blog"
          title="Insights from Our Engineers"
          description="Deep dives into architecture, product development, AI, and the lessons we learn building software at scale."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SAMPLE_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
          >
            Read all articles
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
