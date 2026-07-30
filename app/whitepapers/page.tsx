import type { Metadata } from 'next'
import {
  FileText,
  Download,
  BookOpen,
  CheckCircle2,
  Lock,
  Sparkles,
  Bot,
  ShieldCheck,
} from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/ui/cta-section'

export const metadata: Metadata = {
  title: 'Technical Whitepapers & Architecture Guides — NeelStack',
  description:
    'Download technical whitepapers, system architecture blueprints, and AI readiness guides produced by NeelStack software architects.',
  alternates: {
    canonical: '/whitepapers',
  },
}

const WHITEPAPERS = [
  {
    id: 'enterprise-ai-architecture-2026',
    title: 'Building LLM-Powered Enterprise Applications: Architecture Guide 2026',
    category: 'AI & Systems Architecture',
    pages: '24 Pages',
    date: 'July 2026',
    description:
      'A comprehensive technical guide detailing RAG vector pipelines, agentic orchestration loops, prompt isolation security, and PostgreSQL + PgVector optimization strategies.',
    topics: ['RAG vs Fine-tuning', 'Vector Index Optimization', 'LLM Security & RBAC', 'Subsecond Latency Pipelines'],
  },
  {
    id: 'ai-native-school-management-dhruvaos',
    title: 'AI-Native Educational Systems: Transforming Institutional Operations',
    category: 'EdTech & Automation',
    pages: '18 Pages',
    date: 'June 2026',
    description:
      'How DhruvaOS digitizes administrative workflows, reduces teacher administrative overhead by 60%, and introduces predictive student performance analytics.',
    topics: ['EdOS Architecture Blueprint', 'Automated Attendance Logs', 'AI Lesson Generation', 'Parent Portal UX'],
  },
  {
    id: 'cloud-native-nextjs-fastapi-scaling',
    title: 'High-Throughput Full-Stack Patterns: Next.js 16 + FastAPI',
    category: 'Full-Stack Engineering',
    pages: '20 Pages',
    date: 'May 2026',
    description:
      'Lessons learned from deploying serverless Next.js frontends connected to asynchronous Python FastAPI backend clusters on edge networks.',
    topics: ['Serverless Edge Handlers', 'Async PostgreSQL Pools', 'Redis Cache Invalidation', 'Zero-Downtime CI/CD'],
  },
]

export default function WhitepapersPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Thought Leadership & Technical Blueprints"
        title="Engineering Whitepapers & Guides"
        description="In-depth architectural guides, benchmark reports, and system design patterns published by NeelStack software architects."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Whitepapers' }]}
      />

      <Section>
        <Container>
          <SectionHeader
            badge="Available Downloads"
            title="Technical Whitepapers & System Blueprints"
            description="Deep technical analysis and practical blueprints for engineering decision-makers."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {WHITEPAPERS.map((paper) => (
              <div
                key={paper.id}
                className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between space-y-6 card-hover"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                      {paper.category}
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {paper.pages}
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
                      Key Topics
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
                  <Button asChild className="w-full gap-2">
                    <a href={`/api/whitepapers/download?id=${paper.id}`}>
                      <Download className="h-4 w-4" />
                      Download Whitepaper PDF
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Need a custom technical blueprint for your organization?"
        description="Our architecture team designs custom enterprise system blueprints and AI roadmaps."
        primaryLabel="Request Architecture Review"
        primaryHref="/contact"
      />
    </MarketingLayout>
  )
}
