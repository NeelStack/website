import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BookOpen,
  CheckCircle2,
  Code2,
  GraduationCap,
  Laptop,
  Layers,
  Sparkles,
  Users,
} from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/ui/cta-section'

export const metadata: Metadata = {
  title: 'Training & Internship Programs — NeelStack',
  description:
    'Industrial training, corporate workshops, faculty development programs, and hands-on engineering internships in AI, web architecture, and cloud systems.',
  alternates: {
    canonical: '/training',
  },
}

const PROGRAMS = [
  {
    icon: Code2,
    title: 'Industrial Student Internships',
    badge: 'Hands-on Learning',
    description:
      'Comprehensive 6-week to 6-month hands-on programs for computer science and engineering students. Work on production-grade codebases, Next.js applications, Python backend APIs, and deployment pipelines.',
    features: [
      'Live project contributions & PR reviews',
      'Mentorship from senior software engineers',
      'System architecture & Git workflow training',
      'Performance certification & job referral support',
    ],
  },
  {
    icon: Laptop,
    title: 'Corporate Engineering Upskilling',
    badge: 'Enterprise Teams',
    description:
      'Tailored technical workshops designed to transition engineering teams into AI-native architectures. Master LLM integrations, RAG pipelines, modern React patterns, and cloud-native serverless setups.',
    features: [
      'Customized curriculum based on team tech stack',
      'Hands-on lab modules & code walk-throughs',
      'AI integration security & prompt architecture',
      'Post-training support & architecture advisory',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Faculty Development Programs (FDP)',
    badge: 'Academic Excellence',
    description:
      'Empowering educators and computer science faculty with contemporary industry knowledge. Bridge the academic-industry gap by bringing real-world software engineering practices into the classroom.',
    features: [
      'Modern web & cloud framework overviews',
      'Curriculum modernization guidance',
      'Industry case study repositories',
      'Institutional partnership certifications',
    ],
  },
]

const TECH_TRACKS = [
  { name: 'AI & Agentic Systems', desc: 'LLMs, LangChain, RAG pipelines, Vector Databases' },
  { name: 'Full-Stack Web Architecture', desc: 'Next.js 16, React, TypeScript, Tailwind CSS' },
  { name: 'Backend & API Engineering', desc: 'Python, FastAPI, Node.js, PostgreSQL, Redis' },
  { name: 'Cloud Infrastructure & DevOps', desc: 'Docker, Kubernetes, AWS, Vercel, CI/CD' },
]

export default function TrainingPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Education & Workforce Development"
        title="Training, Workshops & Internship Programs"
        description="NeelStack trains the next generation of high-agency engineers while empowering institutional faculty and corporate engineering teams with modern AI-native practices."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Training & Internships' }]}
      />

      {/* Programs Section */}
      <Section>
        <Container>
          <SectionHeader
            badge="Our Tracks"
            title="Structured Programs for Students, Faculty & Enterprise"
            description="Whether you are an aspiring engineer seeking production experience or an institution looking to modernize technical capabilities."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PROGRAMS.map((prog) => {
              const Icon = prog.icon
              return (
                <div
                  key={prog.title}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 md:p-8 card-hover"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                        {prog.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {prog.description}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2.5" aria-label={`Highlights for ${prog.title}`}>
                        {prog.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border/40">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/contact?inquiry=training">Inquire About {prog.title}</Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Technology Tracks */}
      <Section className="bg-card/50 border-t border-border/40">
        <Container>
          <SectionHeader
            badge="Curriculum Core"
            title="Industry Technologies Covered"
            description="Our training tracks reflect the exact technology stack used in production at NeelStack and modern software labs worldwide."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_TRACKS.map((track) => (
              <div
                key={track.name}
                className="rounded-2xl border border-border bg-card p-6 space-y-2 card-hover"
              >
                <div className="h-2 w-10 rounded-full bg-primary/60 mb-3" />
                <h3 className="font-heading text-base font-bold text-foreground">{track.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Looking to partner for training or internships?"
        description="We collaborate with universities, academic trusts, and enterprises to deliver hands-on technical excellence."
        primaryLabel="Contact Training Team"
        primaryHref="/contact"
      />
    </MarketingLayout>
  )
}
