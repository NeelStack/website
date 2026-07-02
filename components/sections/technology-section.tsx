import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { TechCategoryBlock } from '@/components/ui/tech-badge'

const TECH_STACK = [
  {
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Flutter'],
  },
  {
    title: 'Backend',
    technologies: ['Node.js', 'Python', 'Go', 'Java', 'NestJS', 'FastAPI', 'Django'],
  },
  {
    title: 'Databases',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase', 'Firebase'],
  },
  {
    title: 'Cloud & DevOps',
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    title: 'AI & Machine Learning',
    technologies: ['OpenAI', 'LangChain', 'HuggingFace', 'TensorFlow', 'PyTorch', 'Vertex AI'],
  },
  {
    title: 'Tools & Platforms',
    technologies: ['Vercel', 'Stripe', 'Twilio', 'Supabase', 'Figma', 'Linear', 'Sentry'],
  },
]

export function TechnologySection() {
  return (
    <Section id="technologies">
      <Container>
        <SectionHeader
          badge="Our tech stack"
          title="Modern Technology, Proven Reliability"
          description="We use best-in-class tools and frameworks to build performant, scalable, and maintainable software that stands the test of time."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map((category) => (
            <TechCategoryBlock
              key={category.title}
              title={category.title}
              technologies={category.technologies}
              className="rounded-2xl border border-border bg-card p-6"
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
