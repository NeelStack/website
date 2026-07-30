import type { Metadata } from 'next'
import {
  ShieldCheck,
  Lock,
  Server,
  FileCheck,
  Eye,
  Key,
  ShieldAlert,
  CheckCircle2,
} from 'lucide-react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'

export const metadata: Metadata = {
  title: 'Security & Compliance Posture — NeelStack',
  description:
    'NeelStack security architecture, encryption standards, data privacy commitments, role-based access control policies, and compliance roadmap.',
  alternates: {
    canonical: '/security',
  },
}

const SECURITY_PILLARS = [
  {
    icon: Lock,
    title: 'Data Encryption',
    description:
      'All data in transit is encrypted using TLS 1.3. Persistent database layers and backups use AES-256 encryption at rest.',
  },
  {
    icon: Key,
    title: 'Identity & Access Control',
    description:
      'Granular Role-Based Access Control (RBAC) matrices, Multi-Factor Authentication (MFA), and session token revocation protocols.',
  },
  {
    icon: Server,
    title: 'Cloud & Infrastructure Security',
    description:
      'Hosted on edge networks with automated DDoS protection, isolated VPC subnets, and container environment hardening.',
  },
  {
    icon: Eye,
    title: 'Audit Logging & Monitoring',
    description:
      'Real-time anomaly detection, centralized audit logging, automated dependency vulnerability alerts via Dependabot & Sentry.',
  },
  {
    icon: FileCheck,
    title: 'Code Security & Static Analysis',
    description:
      'Pre-commit static code analysis, automated SAST scans in CI/CD pipelines, and zero-trust parameter validation.',
  },
  {
    icon: ShieldAlert,
    title: 'Vulnerability Disclosure Policy',
    description:
      'Responsible disclosure program allowing security researchers to report vulnerabilities directly to security@neelstack.com.',
  },
]

const COMPLIANCE_ROADMAP = [
  { name: 'SOC 2 Type II Compliance', status: 'In Preparation Roadmap', desc: 'Targeting formal SOC 2 Type II audit readiness for core SaaS products.' },
  { name: 'ISO/IEC 27001 Alignment', status: 'Policy Aligned', desc: 'Internal security procedures designed in alignment with ISO 27001 frameworks.' },
  { name: 'India DPDPA 2023 & GDPR Compliance', status: 'Compliant', desc: 'Full adherence to data minimization, privacy rights, and local data residency guidelines.' },
]

export default function SecurityPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Enterprise Trust & Protection"
        title="Security & Compliance Posture"
        description="Security is built directly into our software engineering life cycle — protecting client code, user data, and system availability from day one."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Security' }]}
      />

      {/* Pillars Section */}
      <Section>
        <Container>
          <SectionHeader
            badge="Security Controls"
            title="Comprehensive Security Protections"
            description="Our multi-layered security controls protect applications from the code layer to the edge deployment network."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-border bg-card p-6 space-y-3 card-hover"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground">{pillar.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Compliance Roadmap */}
      <Section className="bg-card/50 border-t border-border/40">
        <Container>
          <SectionHeader
            badge="Regulatory Alignment"
            title="Compliance Standards & Roadmap"
            description="How we align with international regulatory frameworks and privacy legislation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPLIANCE_ROADMAP.map((item) => (
              <div key={item.name} className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold text-primary bg-primary/10 border border-primary/20">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  {item.status}
                </span>
                <h3 className="font-heading text-base font-bold text-foreground">{item.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Need a custom security audit or RFP evaluation?"
        description="Our security team is ready to complete vendor assessment questionnaires and system architecture reviews."
        primaryLabel="Contact Security Team"
        primaryHref="/contact"
      />
    </MarketingLayout>
  )
}
