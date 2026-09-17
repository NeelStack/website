import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Boxes,
  Building,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  GraduationCap,
  HeartPulse,
  Rocket,
  Zap,
} from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'
import { JsonLd } from '@/components/seo/json-ld'
import { getSiteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'Public Product Roadmap — Software & AI Platforms | NeelStack India',
  description:
    'Explore NeelStack’s active and upcoming product roadmap: ToolVines (live), DhruvaOS (beta), NaukariMitra, SarkariMitra, and enterprise AI automation platforms.',
  alternates: {
    canonical: '/roadmap',
  },
}

const ROADMAP_ITEMS = [
  {
    title: 'ToolVines',
    category: 'Productivity Platform',
    status: 'Live & Deployed',
    statusBadge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    icon: FileText,
    desc: 'Browser-based productivity platform providing fast PDF, image, document, and developer tools with zero server-side file retention and client-side WebAssembly compute.',
    features: ['320+ Client-side WebAssembly tools', 'Zero server-side file retention', '100% in-browser private compute'],
    link: 'https://toolvines.com',
    isExternal: true,
  },
  {
    title: 'DhruvaOS',
    category: 'School Operating System',
    status: 'Ready for Launch — Launching 2 October 2026',
    statusBadge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    icon: Zap,
    desc: "NeelStack's unified school operating system, ready for launch and currently onboarding early pilot institutions. Features school onboarding, admin setup, CMS, official website, mobile app, desktop app, school management, and intelligent AI workflows.",
    features: ['School onboarding & admin setup', 'CMS & official website builder', 'Cross-platform mobile & desktop apps', 'Planned AI-agent capabilities'],
    link: '/products/dhruvaos',
    isExternal: false,
  },
  {
    title: 'AI Workforce Platform / AI Company OS',
    category: 'Organizational AI Layer',
    status: 'Research & Product Direction',
    statusBadge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    icon: Boxes,
    desc: 'An AI-powered company operating layer exploring specialized autonomous agents (AI CEO, CTO, CFO, Operations, Sales) for organizational intelligence and workflow automation.',
    features: ['11 Specialized autonomous agent squads', 'Model Context Protocol (MCP) tooling', 'Hierarchical company memory & decision support'],
    link: '/products/ai-company-os',
    isExternal: false,
  },
  {
    title: 'NaukariMitra',
    category: 'Career & Exam Prep',
    status: 'Planned Product',
    statusBadge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    icon: GraduationCap,
    desc: 'Planned career exploration and competitive exam preparation platform with guided learning workflows and structured resources.',
    features: ['Exam syllabus breakdown', 'Structured mock practice', 'Personalized learning assistant'],
    link: '/products/naukarimitra',
    isExternal: false,
  },
  {
    title: 'SarakariMitra',
    category: 'Public Services Guidance',
    status: 'Planned Product',
    statusBadge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    icon: Building,
    desc: 'Planned public services and citizen guidance platform designed to help users discover and navigate government schemes and public documentation.',
    features: ['Scheme discovery assistant', 'Eligibility verification logic', 'Document requirement checklists'],
    link: '/products/sarkarimitra',
    isExternal: false,
  },
]

export default function RoadmapPage() {
  const siteUrl = getSiteUrl()

  return (
    <MarketingLayout>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'NeelStack Public Product Roadmap',
          description: 'Development stages, live platforms, and planned software products engineered by NeelStack Solutions.',
          url: `${siteUrl}/roadmap`,
          itemListElement: ROADMAP_ITEMS.map((item, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'SoftwareApplication',
              name: item.title,
              applicationCategory: item.category,
              description: item.desc,
              url: item.link.startsWith('http') ? item.link : `${siteUrl}${item.link}`,
            },
          })),
        }}
      />
      <PageHero
        badge="Building In Public"
        title="Public Product Roadmap"
        description="Transparent visibility into the proprietary software platforms we are designing, building, and deploying."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Roadmap' }]}
      />

      <Section>
        <Container>
          <SectionHeader
            badge="Pipeline Overview"
            title="Current Stage & Development Pipeline"
            description="Our product ecosystem spans productivity tools, education operating systems, citizen tech, and enterprise AI."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROADMAP_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border-2 border-border bg-card p-6 flex flex-col justify-between space-y-5 tactile-card-3d hover:border-primary/50"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${item.statusBadge}`}>
                        {item.status}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-foreground">{item.title}</h3>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>

                    <ul className="space-y-1.5 pt-2" aria-label={`Features for ${item.title}`}>
                      {item.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.link !== '#' && (
                    <div className="pt-4 border-t border-border/40">
                      {item.isExternal ? (
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                        >
                          Visit Live Product <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      ) : (
                        <Link
                          href={item.link}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                        >
                          View Product Details →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Interested in early beta access or partnership?"
        description="Reach out to our product development team to join beta waitlists or discuss early access."
        primaryLabel="Join Product Waitlist"
        primaryHref="/contact"
      />
    </MarketingLayout>
  )
}
