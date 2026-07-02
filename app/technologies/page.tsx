import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { TechCategoryBlock } from '@/components/ui/tech-badge'
import { CTASection } from '@/components/ui/cta-section'

export const metadata: Metadata = {
  title: 'Technologies',
  description:
    'Explore the modern technology stack NeelStack uses to build enterprise software, AI solutions, SaaS products, and mobile applications.',
}

const TECH_STACK_FULL = [
  {
    title: 'Frontend',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Radix UI',
      'shadcn/ui',
    ],
  },
  {
    title: 'Mobile',
    technologies: ['React Native', 'Flutter', 'Expo', 'Swift', 'Kotlin'],
  },
  {
    title: 'Backend',
    technologies: ['Node.js', 'NestJS', 'Python', 'FastAPI', 'Django', 'Go', 'Java', 'Spring Boot'],
  },
  {
    title: 'Databases',
    technologies: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Elasticsearch',
      'Supabase',
      'Firebase',
      'PlanetScale',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Vercel', 'Cloudflare', 'DigitalOcean'],
  },
  {
    title: 'DevOps & CI/CD',
    technologies: [
      'Docker',
      'Kubernetes',
      'Terraform',
      'GitHub Actions',
      'GitLab CI',
      'ArgoCD',
      'Helm',
    ],
  },
  {
    title: 'AI & Machine Learning',
    technologies: [
      'OpenAI API',
      'LangChain',
      'LlamaIndex',
      'HuggingFace',
      'TensorFlow',
      'PyTorch',
      'Vertex AI',
      'Amazon Bedrock',
    ],
  },
  {
    title: 'Testing & QA',
    technologies: [
      'Jest',
      'Vitest',
      'Playwright',
      'Cypress',
      'Pytest',
      'k6',
      'Storybook',
    ],
  },
  {
    title: 'Observability & Monitoring',
    technologies: ['Sentry', 'Datadog', 'Grafana', 'Prometheus', 'OpenTelemetry', 'Logfire'],
  },
  {
    title: 'Security',
    technologies: [
      'Auth.js',
      'Keycloak',
      'AWS IAM',
      'Vault',
      'OWASP ZAP',
      'Snyk',
      'SonarQube',
    ],
  },
  {
    title: 'Integrations & APIs',
    technologies: ['Stripe', 'Twilio', 'SendGrid', 'Razorpay', 'Slack API', 'WhatsApp Business API'],
  },
  {
    title: 'Design & Collaboration',
    technologies: ['Figma', 'FigJam', 'Linear', 'Notion', 'Loom', 'GitHub'],
  },
]

export default function TechnologiesPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Our stack"
        title="Modern Technology, Proven at Scale"
        description="We choose our tools deliberately. Every technology in our stack is battle-tested, actively maintained, and selected for long-term reliability."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Technologies' }]}
      />

      <section className="py-16" aria-labelledby="tech-stack-heading">
        <Container>
          <h2 id="tech-stack-heading" className="sr-only">Technology stack</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACK_FULL.map((category) => (
              <TechCategoryBlock
                key={category.title}
                title={category.title}
                technologies={category.technologies}
                className="rounded-2xl border border-border bg-card p-6"
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want to know if we support your preferred stack?"
        description="We are framework agnostic and happy to work with your existing technology investments. Get in touch to discuss your requirements."
        primaryLabel="Contact Our Team"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </MarketingLayout>
  )
}
