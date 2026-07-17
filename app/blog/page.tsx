import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { BlogCard } from '@/components/ui/blog-card'
import { Container } from '@/components/ui/container'
import { BLOG_POSTS } from '@/constants/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Engineering insights, product updates, and technology deep dives from the NeelStack team.',
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
