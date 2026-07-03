import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, ChevronRight } from 'lucide-react'

import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Container } from '@/components/ui/container'
import { Tag } from '@/components/ui/status-badge'
import { BlogCard } from '@/components/ui/blog-card'
import { BlogShare } from '@/components/ui/blog-share'
import { CTASection } from '@/components/ui/cta-section'
import { BLOG_POSTS } from '@/constants/blog'
import { getSiteUrl } from '@/lib/site-url'

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─────────────────────────────────────────────
// Dynamic SEO Metadata Generation
// ─────────────────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Article Not Found | NeelStack Technologies',
      robots: { index: false },
    }
  }

  return {
    title: `${post.title} | NeelStack Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

// ─────────────────────────────────────────────
// Static Params for Pre-building Routes
// ─────────────────────────────────────────────
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

// ─────────────────────────────────────────────
// Helper components for custom parsing
// ─────────────────────────────────────────────
function parseInlineFormatting(text: string) {
  // Split inline bold (**bold**) and inline code (`code`)
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-bold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={index}
          className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs font-semibold text-primary border border-border/20"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    return part
  })
}

function MarkdownRenderer({ content }: { content: string }) {
  // Split content by code blocks and paragraph segments
  const blocks = content.split(/(\`\`\`[a-z]*\n[\s\S]*?\n\`\`\`)/g)

  return (
    <div className="space-y-6">
      {blocks.map((block, idx) => {
        const trimmed = block.trim()
        if (!trimmed) return null

        // Render code blocks
        if (trimmed.startsWith('```')) {
          const lines = trimmed.split('\n')
          const firstLine = lines[0]
          const language = firstLine.slice(3) || 'code'
          const codeContent = lines.slice(1, -1).join('\n')

          return (
            <div
              key={idx}
              className="my-8 overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-md"
            >
              <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2 text-xs font-mono text-muted-foreground">
                <span>{language.toUpperCase()}</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground/40">
                  Read-Only Code Segment
                </span>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-left text-foreground bg-black/10">
                <code>{codeContent}</code>
              </pre>
            </div>
          )
        }

        // Render standard paragraph and sub-elements
        const subParts = trimmed.split('\n\n')
        return subParts.map((sub, sIdx) => {
          const subTrimmed = sub.trim()
          if (!subTrimmed) return null

          // H3 Heading
          if (subTrimmed.startsWith('### ')) {
            return (
              <h3
                key={`${idx}-${sIdx}`}
                className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-4 tracking-tight"
              >
                {parseInlineFormatting(subTrimmed.slice(4))}
              </h3>
            )
          }

          // H2 Heading
          if (subTrimmed.startsWith('## ')) {
            return (
              <h2
                key={`${idx}-${sIdx}`}
                className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mt-12 mb-6 tracking-tight border-b border-border pb-2 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
              >
                {parseInlineFormatting(subTrimmed.slice(3))}
              </h2>
            )
          }

          // Divider
          if (subTrimmed === '---') {
            return <hr key={`${idx}-${sIdx}`} className="my-8 border-border" />
          }

          // Blockquote
          if (subTrimmed.startsWith('> ')) {
            const blockquoteText = subTrimmed
              .split('\n')
              .map((l) => l.replace(/^>\s?/, ''))
              .join('\n')
            return (
              <blockquote
                key={`${idx}-${sIdx}`}
                className="my-6 border-l-4 border-primary bg-muted/10 rounded-r-xl px-5 py-4 italic text-muted-foreground leading-relaxed"
              >
                {parseInlineFormatting(blockquoteText)}
              </blockquote>
            )
          }

          // Bullet lists
          if (subTrimmed.startsWith('- ') || subTrimmed.startsWith('* ')) {
            const listItems = subTrimmed.split('\n')
            return (
              <ul key={`${idx}-${sIdx}`} className="my-6 space-y-3 pl-1">
                {listItems.map((item, iIdx) => {
                  const cleanedItem = item.replace(/^[-*]\s?/, '')
                  return (
                    <li
                      key={iIdx}
                      className="flex items-start gap-3 text-muted-foreground text-[15px] md:text-base leading-relaxed"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{parseInlineFormatting(cleanedItem)}</span>
                    </li>
                  )
                })}
              </ul>
            )
          }

          // Numbered lists
          if (/^\d+\.\s/.test(subTrimmed)) {
            const listItems = subTrimmed.split('\n')
            return (
              <ol key={`${idx}-${sIdx}`} className="my-6 space-y-3 pl-1">
                {listItems.map((item, iIdx) => {
                  const cleanedItem = item.replace(/^\d+\.\s?/, '')
                  return (
                    <li
                      key={iIdx}
                      className="flex items-start gap-3 text-muted-foreground text-[15px] md:text-base leading-relaxed"
                    >
                      <span className="font-mono text-xs font-bold text-primary mt-1">
                        {iIdx + 1}.
                      </span>
                      <span>{parseInlineFormatting(cleanedItem)}</span>
                    </li>
                  )
                })}
              </ol>
            )
          }

          // Default paragraph text
          return (
            <p
              key={`${idx}-${sIdx}`}
              className="text-[15px] md:text-[17px] leading-relaxed text-muted-foreground/90 mb-5 text-pretty"
            >
              {parseInlineFormatting(subTrimmed)}
            </p>
          )
        })
      })}
    </div>
  )
}

// ─────────────────────────────────────────────
// Main Page Page component
// ─────────────────────────────────────────────
export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Get related posts (exclude current post, limit to 2)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <MarketingLayout className="pt-24 pb-16">
      {/* Article Container */}
      <Container size="md" className="max-w-4xl">
        {/* Breadcrumb Navigation */}
        <nav
          className="mb-8 flex items-center gap-2 text-xs font-medium text-muted-foreground"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="truncate text-foreground max-w-[200px] sm:max-w-xs md:max-w-md">
            {post.title}
          </span>
        </nav>

        {/* Back Link */}
        <Link
          href="/blog"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to all articles
        </Link>

        {/* Article Meta Header */}
        <header className="mb-10">
          <div className="mb-4">
            <Tag variant="primary">{post.category}</Tag>
          </div>

          <h1 className="font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight text-pretty">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-border/50 pb-8">
            {/* Author info */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 font-heading text-sm font-bold text-foreground">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            {/* Read specs */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {post.publishedAt}
              </span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Article body content */}
        <article className="min-w-0" aria-label="Blog post content">
          {post.content ? (
            <MarkdownRenderer content={post.content} />
          ) : (
            <p className="text-lg text-muted-foreground italic">No content available for this post.</p>
          )}
        </article>

        {/* Social Share Buttons */}
        <BlogShare title={post.title} slug={post.slug} />
      </Container>

      {/* Recommended Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border mt-20 py-16" aria-labelledby="read-next-heading">
          <Container size="md" className="max-w-4xl">
            <h2
              id="read-next-heading"
              className="font-heading text-2xl font-bold text-foreground mb-8 text-center sm:text-left"
            >
              Recommended Articles
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.id} post={rPost} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Corporate Call To Action */}
      <CTASection />
    </MarketingLayout>
  )
}
