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
    desc: 'Browser-based productivity suite providing PDF, image, video, annotation, and document utilities designed for individuals and business teams.',
    features: ['PDF annotation & merge tools', 'Image format converter engine', 'AI document assistant'],
    link: 'https://toolvines.com',
    isExternal: true,
  },
  {
    title: 'DhruvaOS',
    category: 'Education Operating System',
    status: 'Demo Launch — September 30',
    statusBadge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    icon: Zap,
    desc: 'Unified AI-powered operating platform for schools, colleges, and universities covering admissions, academics, fee invoices, and parent communication.',
    features: ['AI lesson & homework planner', 'Automated fee collection ledger', 'Parent & student mobile portals'],
    link: '/products/dhruvaos',
    isExternal: false,
  },
  {
    title: 'NaukariMitra',
    category: 'Ed-Tech Exam Companion',
    status: 'In Active Development',
    statusBadge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    icon: GraduationCap,
    desc: 'AI-powered government exam preparation companion providing personalized guidance, mock tests, previous papers, and study progression analytics.',
    features: ['AI exam syllabus breakdown', 'Adaptive mock testing engine', 'Previous paper solution assistant'],
    link: '/products/naukarimitra',
    isExternal: false,
  },
  {
    title: 'SarkariMitra',
    category: 'Gov-Tech Citizen Assistance',
    status: 'In Active Development',
    statusBadge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    icon: Building,
    desc: 'Conversational AI platform helping citizens discover public welfare schemes, verify eligibility criteria, and review required document checklists.',
    features: ['Conversational scheme search', 'Eligibility verification logic', 'Document requirement guide'],
    link: '/products/sarkarimitra',
    isExternal: false,
  },
  {
    title: 'HealthOS',
    category: 'Healthcare Operations',
    status: 'Research & Planning',
    statusBadge: 'bg-muted text-muted-foreground border-border',
    icon: HeartPulse,
    desc: 'Clinical workflow automation, electronic patient records, appointment scheduling, and pharmacy inventory synchronization.',
    features: ['Clinical EHR management', 'Pharmacy inventory integration', 'Patient engagement SMS/WhatsApp'],
    link: '/contact',
    isExternal: false,
  },
  {
    title: 'Enterprise AI Agent Platform',
    category: 'Workflow Automation',
    status: 'Concept Architecture',
    statusBadge: 'bg-muted text-muted-foreground border-border',
    icon: Boxes,
    desc: 'Custom multi-agent orchestration engine for enterprises, triggering database actions, parsing compliance contracts, and automating ticket resolution.',
    features: ['Multi-agent workflow triggers', 'Semantic vector indexing', 'Enterprise compliance logs'],
    link: '/contact',
    isExternal: false,
  },
]

export default function RoadmapPage() {
  return (
    <MarketingLayout>
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
                  className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between space-y-5 card-hover"
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
