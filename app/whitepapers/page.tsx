import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Clock, Mail, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/ui/cta-section'
import { getSiteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'Technical Whitepapers & Architecture Guides | NeelStack India',
  description:
    'Deep-dive technical whitepapers, system architecture blueprints, and AI readiness guides produced by NeelStack software architects in India.',
  alternates: {
    canonical: '/whitepapers',
  },
  openGraph: {
    title: 'Technical Whitepapers & Architecture Guides | NeelStack India',
    description:
      'Deep-dive technical whitepapers, system architecture blueprints, and AI readiness guides produced by NeelStack software architects in India.',
    type: 'website',
  },
}

const WHITEPAPERS = [
  {
    id: 'enterprise-ai-architecture-2026',
    title: 'Building LLM-Powered Enterprise Applications: Architecture Guide 2026',
    category: 'AI & Systems Architecture',
    status: 'Available Online',
    readUrl: '/blog/autonomous-ai-agents-enterprise-software-beyond-rag',
    description:
      'A comprehensive technical guide detailing RAG vector pipelines, agentic orchestration loops, prompt isolation security, and PostgreSQL + PgVector optimization strategies.',
    topics: ['RAG vs Fine-tuning', 'Vector Index Optimization', 'LLM Security & RBAC', 'Subsecond Latency Pipelines'],
  },
  {
    id: 'ai-native-school-management-dhruvaos',
    title: 'AI-Native Educational Systems: Transforming Institutional Operations',
    category: 'EdTech & Automation',
    status: 'Available Online',
    readUrl: '/blog/architecting-dhruvaos-foundation-schema-per-tenant-postgresql',
    description:
      'How DhruvaOS digitizes administrative workflows, eliminates database row locks with schema-per-tenant isolation, and introduces predictive analytics ahead of the Sept 30 Demo Launch.',
    topics: ['EdOS Architecture Blueprint', 'PostgreSQL Schema Isolation', 'AI RAG Gateway', 'GST e-Invoicing Adapter'],
  },
  {
    id: 'cloud-native-nextjs-fastapi-scaling',
    title: 'High-Throughput Full-Stack Patterns: Next.js 16 + FastAPI',
    category: 'Full-Stack Engineering',
    status: 'Available Online',
    readUrl: '/blog/achieving-sub-50ms-api-latency-fastapi-redis-async-python',
    description:
      'Lessons learned from deploying serverless Next.js frontends connected to asynchronous Python FastAPI backend clusters on edge networks with sub-50ms latency.',
    topics: ['Serverless Edge Handlers', 'Async PostgreSQL Pools', 'Redis Cache Invalidation', 'Zero-Downtime CI/CD'],
  },
]

export default function WhitepapersPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Thought Leadership"
        title="Engineering Whitepapers & Guides"
        description="In-depth architectural guides, benchmark reports, and system design patterns authored by NeelStack software architects. Read technical briefings online or request full PDF editions."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Whitepapers' }]}
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-primary/25 bg-card/60 backdrop-blur-xl p-8 md:p-10 text-center space-y-5 mb-16 shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Technical Briefings Live &amp; Published</span>
            </div>

            <h2 className="font-heading text-2xl font-extrabold text-foreground md:text-3xl">
              Architectural Blueprints for Engineering Leaders
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Our engineering team regularly publishes core architecture patterns, benchmark data, and compliance models. Read our online technical briefings or request enterprise copies for your engineering organization.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2 glow-cta">
                <Link href="/contact">
                  <Mail className="h-4 w-4" />
                  Request Full PDF Edition
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Browse All 12 Engineering Articles</Link>
              </Button>
            </div>
          </div>

          <SectionHeader
            badge="Technical Publications"
            title="Published Whitepapers & Architecture Guides"
            description="Deep technical analysis and practical blueprints for CTOs, VPs of Engineering, and software leaders."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {WHITEPAPERS.map((paper) => (
              <div
                key={paper.id}
                className="rounded-3xl border border-border/80 bg-card/80 dark:bg-card/40 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between space-y-6 card-hover shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                      {paper.category}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      {paper.status}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {paper.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {paper.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      Featured Topics
                    </h4>
                    <ul className="space-y-1.5" aria-label={`Topics for ${paper.title}`}>
                      {paper.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50 flex flex-col gap-2.5">
                  <Button asChild variant="gradient" size="sm" className="w-full gap-2 text-xs glow-cta">
                    <Link href={paper.readUrl}>
                      <BookOpen className="h-3.5 w-3.5" />
                      Read Architecture Briefing
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full gap-2 text-xs">
                    <Link href="/contact">
                      <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                      Request PDF Whitepaper
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Need a custom technical architecture review?"
        description="Our architecture team designs custom enterprise system blueprints, multi-tenant databases, and AI roadmaps."
        primaryLabel="Schedule Architecture Review"
        primaryHref="/book-consultation"
      />
    </MarketingLayout>
  )
}
