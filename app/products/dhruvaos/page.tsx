import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'
import { StatusBadge } from '@/components/ui/status-badge'
import { DhruvaDashboard } from './dhruva-dashboard'
import { GraduationCap, ShieldCheck, CheckCircle2, Search, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'DhruvaOS | AI-Powered Educational Operating System',
  description:
    'DhruvaOS is a comprehensive AI-driven student learning engine and educational operating system organizing notes, syllabi, study paths, and quizzes.',
}

export default function DhruvaOSPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Educational OS"
        title="DhruvaOS"
        description="AI-powered Operating System for Students & Educators"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'DhruvaOS' },
        ]}
      />

      {/* ─── Domain & Branding Pitch Section ─────────────────────────────────── */}
      <Section className="pb-8">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Branding Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-purple-500/5 border border-purple-500/10 rounded-3xl p-8">
              <div className="md:col-span-2 space-y-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                  Branding Analysis: What is &quot;DhruvaOS&quot;?
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In Sanskrit, <strong className="text-foreground">Dhruva</strong> represents the North Star (Polaris) — a permanent, unwavering guide that travelers relied on to navigate. PIVOTING this project into an EdTech solution makes the name highly resonant: it represents an academic compass that steers a student&apos;s learning lifecycle.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The <strong className="text-foreground">OS</strong> suffix elevates this platform beyond a basic learning tool. It highlights a centralized operating hub where students organize notes, syllabus progress, evaluations, and dynamic focus cycles in one workspace.
                </p>
              </div>

              {/* Domain Review Card */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 space-y-4">
                <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Search className="h-4 w-4 text-purple-400" />
                  Domain Analysis
                </h3>
                
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/60">
                    <div className="text-xs font-mono font-bold text-foreground flex items-center justify-between">
                      <span>dhruvaos.com</span>
                      <span className="text-[9px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded font-sans uppercase">Primary Choice</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
                      Global credibility. Essential for international students and SaaS growth.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-muted/40 border border-border/60">
                    <div className="text-xs font-mono font-bold text-foreground flex items-center justify-between">
                      <span>dhruvaos.in</span>
                      <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-sans uppercase">Ideal Alternate</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
                      Strong regional fit. Perfect for the Indian EdTech and institutional market.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                  The Student Workspace
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Modern education struggles with fragmented information. Students jump between PDF readers, scheduling apps, note-taking pads, and search engines. DhruvaOS integrates all modules inside a single context-aware window, where the AI knows your active syllabus and guides study progress.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-lg font-bold text-foreground flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-purple-400" />
                  Educator Coordination
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Educators can publish curricula, share study modules, and track class progress directly. By bridging student workspaces with teacher analytics dashboards, institutions can monitor cognitive retention levels and offer targeted support before exam periods.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* ─── The Interactive Preview Panel ──────────────────────────────────── */}
      <Section className="py-8 bg-muted/5">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Interactive OS Preview
              </h2>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                Test-drive the prototype interface below. Toggle between study widgets, interact with the AI Tutor, adjust course modules, or generate a mock quiz.
              </p>
            </div>

            <DhruvaDashboard />
          </div>
        </Container>
      </Section>

      {/* ─── Capabilities & Core Tech details ────────────────────────────────── */}
      <Section className="pt-12 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Product Specifications */}
              <div className="md:col-span-2 space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 mb-4">
                  <GraduationCap className="h-7 w-7 text-purple-400" aria-hidden="true" />
                </div>

                <div className="flex items-center gap-3">
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Project Specifications
                  </h2>
                  <StatusBadge status="in-development" />
                </div>

                <p className="text-base text-muted-foreground leading-relaxed">
                  DhruvaOS is constructed as a modern Next.js-powered workspace leveraging highly scalable vectors for textbook context processing and low-latency database queries. It enables students to easily upload PDFs or link syllabi, generating a comprehensive, personalized study system on the fly.
                </p>
              </div>

              {/* Target Capabilities list */}
              <div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                    Target Capabilities
                  </h3>
                  <ul className="space-y-3" aria-label="DhruvaOS target capabilities list">
                    {[
                      'AI Study Assistant & Tutor',
                      'Smart Syllabus & Progress Tracker',
                      'Adaptive Mock Evaluations',
                      'Collaborative Educator Hub',
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Interested in educational pilots?"
        description="We partner with academic institutions, colleges, and training academies to run early pilot testing programs."
        primaryLabel="Book Consultation"
        primaryHref="/book-consultation"
      />
    </MarketingLayout>
  )
}
