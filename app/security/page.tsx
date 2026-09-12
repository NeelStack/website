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
  title: 'Security & Compliance Posture | NeelStack India',
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
      'All data in transit is encrypted using TLS 1.3. Persistent database layers use AES-256 Fernet encryption at rest. Backups are encrypted and mirrored to AWS S3 Object Lock with WORM immutability.',
  },
  {
    icon: Key,
    title: 'Identity & Access Control',
    description:
      'Dynamic Zitadel OIDC/SAML JWKS verification, FIDO2 WebAuthn passkey support, granular Role-Based Access Control (RBAC), Multi-Factor Authentication (MFA), and session token revocation protocols.',
  },
  {
    icon: Server,
    title: 'Multi-Tenant Data Isolation',
    description:
      'PostgreSQL 16 schema-per-tenant isolation ensures no institutional data crosses boundaries. Row-Level Security (RLS) policies enforce strict IDOR prevention across all API endpoints.',
  },
  {
    icon: Eye,
    title: 'Audit Logging & Monitoring',
    description:
      'Write-Once-Read-Many (WORM) compliant immutable audit trails with dual-mirroring. Real-time anomaly detection, centralized logging, and automated dependency vulnerability scanning.',
  },
  {
    icon: FileCheck,
    title: 'Code Security & Static Analysis',
    description:
      'Pre-commit static code analysis, automated SAST scans in CI/CD pipelines, Gitleaks secret scanning, and zero-trust parameter validation across all microservices.',
  },
  {
    icon: ShieldAlert,
    title: 'Vulnerability Disclosure Policy',
    description:
      'Responsible disclosure program allowing security researchers to report vulnerabilities directly to security@neelstack.com. Redis sliding-window rate limiting mitigates brute force attacks.',
  },
]

const COMPLIANCE_ROADMAP = [
  { name: 'SOC 2 Type II Compliance', status: 'In Preparation Roadmap', desc: 'Targeting formal SOC 2 Type II audit readiness for core SaaS products.' },
  { name: 'ISO/IEC 27001 Alignment', status: 'Policy Aligned', desc: 'Internal security procedures designed in alignment with ISO 27001 frameworks.' },
  { name: 'India DPDPA 2023 (Section 9)', status: 'Compliant', desc: 'Full adherence to data minimization, consent logging, privacy rights, and local data residency under the Digital Personal Data Protection Act 2023.' },
  { name: 'EU GDPR Article 28 & FERPA/COPPA', status: 'Compliant', desc: 'Data sovereignty controls, Right to Erasure, data portability, and strict child data protection for education platforms.' },
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
