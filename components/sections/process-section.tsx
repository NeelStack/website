'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Code2, FileSearch, Lightbulb, Rocket, Users } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import type { ProcessStep } from '@/types'

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Requirements',
    description:
      'We start by deeply understanding your business goals, technical constraints, and user needs. Detailed scoping ensures we build exactly what you need.',
    icon: FileSearch,
  },
  {
    step: 2,
    title: 'Strategy & Architecture',
    description:
      'Our architects design a scalable, secure system architecture. We choose the right technology stack, define APIs, and plan for future growth.',
    icon: Lightbulb,
  },
  {
    step: 3,
    title: 'UI/UX & Design System',
    description:
      'We create wireframes, interactive prototypes, and pixel-perfect design systems in Figma that are intuitive, accessible, and aligned with your brand.',
    icon: Users,
  },
  {
    step: 4,
    title: 'Agile Engineering',
    description:
      'Our senior engineers build in sprints using Next.js, FastAPI, and Docker — delivering working software incrementally with continuous integration.',
    icon: Code2,
  },
  {
    step: 5,
    title: 'QA & Automated Testing',
    description:
      'Every release undergoes unit, integration, security, and accessibility (WCAG AA) testing to maintain rock-solid software quality.',
    icon: CheckCircle,
  },
  {
    step: 6,
    title: 'Deployment & Support',
    description:
      'We deploy to production using zero-downtime edge strategies, configure telemetry monitoring, and provide 24/7 SLA maintenance.',
    icon: Rocket,
  },
]

export function ProcessSection() {
  return (
    <Section id="process" className="bg-transparent relative overflow-hidden py-24">
      {/* Ambient top glow (tightened by 1/3) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[460px] h-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124,58,237,0.07), transparent)' }}
        aria-hidden="true"
      />
      <Container className="space-y-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="inline-block text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/25"
          >
            Engineering Methodology
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            Our 6-Step Product Process
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
            className="text-sm sm:text-base text-muted-foreground"
          >
            A structured engineering pipeline that delivers predictable, world-class digital products on time and on scope.
          </motion.p>
          <motion.div
            variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7, delay: 0.2, ease: [0.22,1,0.36,1] } } }}
            style={{ originX: 0.5 }}
            className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"
          />
        </motion.div>

        {/* Cards grid — larger gaps for breathing room */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 relative"
        >
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
                className="group relative flex flex-col justify-between gap-6 rounded-3xl p-9 border border-border/80 bg-black/10 backdrop-blur-md card-hover hover:border-primary/40 overflow-hidden shadow-md"
              >
                {/* Large background step number */}
                <span
                  className="absolute top-3 right-5 font-heading font-black text-7xl text-primary/8 select-none leading-none group-hover:text-primary/15 group-hover:scale-110 transition-all duration-300"
                  aria-hidden="true"
                >
                  0{step.step}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 border border-primary/25 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_24px_rgba(70,166,252,0.4)] transition-all duration-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest bg-muted px-2.5 py-1 rounded-full border border-border">
                      Phase 0{step.step}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between text-[11px] font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>Deliverable ready</span>
                  <span className="text-primary font-mono">Step 0{step.step}/06</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}

