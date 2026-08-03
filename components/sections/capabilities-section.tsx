'use client'

import Link from 'next/link'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Bot, Cloud, Laptop, Sliders, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

const CAPABILITIES = [
  {
    id: 'enterprise-software',
    title: 'Enterprise Software & ERP',
    icon: Sparkles,
    desc: 'Scalable custom ERPs, CRM portals, supply chain operations, and complex multi-tenant enterprise architectures.',
    href: '/services/custom-software',
    color: 'text-violet-500 dark:text-violet-400',
    bgColor: 'bg-violet-500/10 border-violet-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',
    tags: ['Multi-Tenant RBAC', 'PostgreSQL', 'High Throughput'],
  },
  {
    id: 'ai-development',
    title: 'AI Development & Agents',
    icon: Bot,
    desc: 'Autonomous multi-agent workflows, vector RAG search engines, custom LLMs, and cognitive operational bots.',
    href: '/services/ai-development',
    color: 'text-rose-500 dark:text-rose-400',
    bgColor: 'bg-rose-500/10 border-rose-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]',
    tags: ['Vector RAG', 'Frontier LLMs & RAG', 'LangChain'],
  },
  {
    id: 'web-apps',
    title: 'High-Speed Web Apps',
    icon: Laptop,
    desc: 'Sub-second Next.js web applications, corporate web portals, and conversion-focused digital platforms.',
    href: '/services/web-applications',
    color: 'text-blue-500 dark:text-blue-400',
    bgColor: 'bg-blue-500/10 border-blue-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
    tags: ['Next.js 16 SSR', 'Sub-Second Load', 'OKLCH Design'],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps (iOS & Android)',
    icon: Smartphone,
    desc: 'Native iOS & Android apps and cross-platform React Native & Flutter solutions with 60 FPS performance.',
    href: '/services/mobile-development',
    color: 'text-cyan-500 dark:text-cyan-400',
    bgColor: 'bg-cyan-500/10 border-cyan-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
    tags: ['60 FPS Motion', 'React Native', 'Offline-First'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Architecture',
    icon: Cloud,
    desc: 'AWS & Vercel edge deployment, Docker/K8s containerization, automated CI/CD, and zero-downtime scaling.',
    href: '/services/devops-cloud',
    color: 'text-amber-500 dark:text-amber-400',
    bgColor: 'bg-amber-500/10 border-amber-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]',
    tags: ['Docker & K8s', 'AWS Edge', 'Terraform IaC'],
  },
  {
    id: 'product-design',
    title: 'UI/UX & Product Design',
    icon: Sliders,
    desc: 'Design systems in Figma, micro-animations in Framer Motion, accessibility WCAG AA, and editorial luxury UX.',
    href: '/services/ui-ux-design',
    color: 'text-emerald-500 dark:text-emerald-400',
    bgColor: 'bg-emerald-500/10 border-emerald-500/25',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
    tags: ['Figma Systems', 'WCAG AA 95+', 'Micro-Interactions'],
  },
]

function CapabilityCard({ item, index }: { item: (typeof CAPABILITIES)[0]; index: number }) {
  const Icon = item.icon

  // Mouse tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 22 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 22 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group rounded-3xl border border-border/80 bg-black/10 backdrop-blur-md p-7 md:p-8 flex flex-col justify-between space-y-6 card-hover card-ai-hover relative overflow-hidden transition-all duration-300 ${item.glowColor}`}
    >
      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-6 w-6" />
          </div>
          <span className="text-[10px] font-bold font-mono text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-emerald-500" /> Battle-Tested
          </span>
        </div>

        <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {item.desc}
        </p>

        {/* Feature Tags Row */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {item.tags.map((tag) => (
            <span key={tag} className="text-[11px] font-semibold text-muted-foreground bg-black/20 px-2.5 py-1 rounded-lg border border-border/60">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={item.href}
        className={`inline-flex items-center gap-1.5 text-xs font-bold ${item.color} hover:gap-2.5 transition-all relative z-10 pt-2 border-t border-border/40`}
      >
        Explore capability <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </motion.div>
  )
}

export function CapabilitiesSection() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[130px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-violet-500/5 blur-[130px] pointer-events-none" aria-hidden="true" />

      <Container className="space-y-12 relative z-10">
        {/* Section header — staggered entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="inline-block text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/25"
          >
            Core Engineering &amp; AI Capabilities
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            We Solve Complex Problems<br className="hidden sm:block" /> Through Design &amp; Code
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="text-sm sm:text-base text-muted-foreground"
          >
            From initial architectural blueprint to production scaling, our capabilities span the entire digital product lifecycle.
          </motion.p>

          {/* Gradient divider */}
          <motion.div
            variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7, delay: 0.2, ease: [0.22,1,0.36,1] } } }}
            style={{ originX: 0.5 }}
            className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-primary/60 to-transparent mt-2"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((item, idx) => (
            <CapabilityCard key={item.id} item={item} index={idx} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Button asChild variant="outline" size="lg">
            <Link href="/services" className="gap-2">
              Explore All Services &amp; Capabilities <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}

