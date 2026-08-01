import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Clock, Mail, CheckCircle2, ArrowRight } from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/ui/cta-section'

export const metadata: Metadata = {
  title: 'Technical Whitepapers & Architecture Guides (Coming Soon) — NeelStack',
  description:
    'Deep-dive technical whitepapers, system architecture blueprints, and AI readiness guides produced by NeelStack software architects.',
  alternates: {
    canonical: '/whitepapers',
  },
}

const UPCOMING_WHITEPAPERS = [
  {
    id: 'enterprise-ai-architecture-2026',
    title: 'Building LLM-Powered Enterprise Applications: Architecture Guide 2026',
    category: 'AI & Systems Architecture',
    status: 'Publishing Soon',
    description:
      'A comprehensive technical guide detailing RAG vector pipelines, agentic orchestration loops, prompt isolation security, and PostgreSQL + PgVector optimization strategies.',
    topics: ['RAG vs Fine-tuning', 'Vector Index Optimization', 'LLM Security & RBAC', 'Subsecond Latency Pipelines'],
  },
  {
    id: 'ai-native-school-management-dhruvaos',
    title: 'AI-Native Educational Systems: Transforming Institutional Operations',
    category: 'EdTech & Automation',
    status: 'In Editorial Review',
    description:
      'How DhruvaOS digitizes administrative workflows, reduces teacher administrative overhead, and introduces predictive student performance analytics.',
    topics: ['EdOS Architecture Blueprint', 'Automated Attendance Logs', 'AI Lesson Generation', 'Parent Portal UX'],
  },
  {
    id: 'cloud-native-nextjs-fastapi-scaling',
    title: 'High-Throughput Full-Stack Patterns: Next.js 16 + FastAPI',
    category: 'Full-Stack Engineering',
    status: 'In Final Review',
    description:
      'Lessons learned from deploying serverless Next.js frontends connected to asynchronous Python FastAPI backend clusters on edge networks.',
    topics: ['Serverless Edge Handlers', 'Async PostgreSQL Pools', 'Redis Cache Invalidation', 'Zero-Downtime CI/CD'],
  },
]

export default function WhitepapersPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Thought Leadership — Publishing Soon"
        title="Engineering Whitepapers & Guides"
        description="In-depth architectural guides, benchmark reports, and system design patterns authored by NeelStack software architects. Downloads will be available soon."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Whitepapers' }]}
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/25 bg-primary/[0.03] p-8 md:p-10 text-center space-y-5 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Clock className="h-3.5 w-3.5" />
              <span>Downloads Opening Soon</span>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Get Advance Technical Drafts
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Our engineering team is finalizing our initial batch of architectural whitepapers. CTOs and engineering leads can request early draft access via email.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  <Mail className="h-4 w-4" />
                  Request Advance Copy via Email
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Read Engineering Blog Posts</Link>
              </Button>
            </div>
          </div>

          <SectionHeader
            badge="Upcoming Publications"
            title="Technical Whitepapers In Drafting"
            description="Deep technical analysis and practical blueprints for engineering decision-makers."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {UPCOMING_WHITEPAPERS.map((paper) => (
              <div
                key={paper.id}
                className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                      {paper.category}
                    </span>
                    <span className="text-[11px] font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
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

                <div className="pt-6 border-t border-border/40">
                  <Button asChild variant="outline" className="w-full gap-2 text-xs">
                    <Link href="/contact">
                      <Mail className="h-3.5 w-3.5 text-primary" />
                      Get Notified on Release
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
        description="Our architecture team designs custom enterprise system blueprints and AI roadmaps."
        primaryLabel="Schedule Architecture Review"
        primaryHref="/contact"
      />
    </MarketingLayout>
  )
}
