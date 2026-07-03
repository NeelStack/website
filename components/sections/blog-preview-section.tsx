import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { BlogCard } from '@/components/ui/blog-card'
import { BLOG_POSTS } from '@/constants/blog'

export function BlogPreviewSection() {
  const previewPosts = BLOG_POSTS.slice(0, 3)

  return (
    <Section id="blog">
      <Container>
        <SectionHeader
          badge="From our blog"
          title="Insights from Our Engineers"
          description="Deep dives into architecture, product development, AI, and the lessons we learn building software at scale."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {previewPosts.map((post) => (
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
