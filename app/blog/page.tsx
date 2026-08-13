import type { Metadata } from 'next'
import { Suspense } from 'react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { BlogGrid } from '@/components/sections/blog-grid'
import { BLOG_POSTS } from '@/constants/blog'

export const metadata: Metadata = {
  title: 'Engineering Blog — NeelStack Insights',
  description:
    'Engineering insights, product updates, and technology deep dives from the NeelStack team.',
  openGraph: {
    title: 'Engineering Blog — NeelStack Insights',
    description: 'Engineering insights, product updates, and technology deep dives from the NeelStack team.',
    type: 'website',
  },
}

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
  const featuredPost = BLOG_POSTS.find((p) => p.featured)
  const regularPosts = BLOG_POSTS.filter((p) => !p.featured)

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

          <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Loading posts...</div>}>
            <BlogGrid posts={regularPosts} featuredPost={featuredPost} categories={CATEGORIES} />
          </Suspense>
        </Container>
      </section>
    </MarketingLayout>
  )
}
