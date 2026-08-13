'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Globe, Smartphone, Bot, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { AiNetworkBg } from '@/components/ui/ai-network-bg'

const services = [
  { icon: Globe, label: 'Websites' },
  { icon: Smartphone, label: 'Mobile Apps' },
  { icon: Bot, label: 'AI Agents' },
  { icon: Wrench, label: 'Custom Software' },
]


export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Cursor Spotlight coordinates
  const mouseSectionX = useMotionValue(0)
  const mouseSectionY = useMotionValue(0)
  const spotlightX = useSpring(mouseSectionX, { stiffness: 100, damping: 25 })
  const spotlightY = useSpring(mouseSectionY, { stiffness: 100, damping: 25 })
  const spotlightGradient = useMotionTemplate`radial-gradient(circle 450px at ${spotlightX}px ${spotlightY}px, rgba(59, 114, 254, 0.16) 0%, transparent 80%)`

  function handleSectionMouseMove(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    mouseSectionX.set(event.clientX - rect.left)
    mouseSectionY.set(event.clientY - rect.top)
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 lg:min-h-[88vh] flex flex-col justify-center bg-background"
      aria-label="Hero section"
    >
      {/* AI Network Background Layer */}
      <AiNetworkBg />

      {/* Dynamic Cursor Spotlight Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-65 z-0"
        style={{ background: spotlightGradient }}
        aria-hidden="true"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] dark:opacity-[0.35] pointer-events-none z-0" aria-hidden="true" />

      {/* Static ambient mesh */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-40 dark:opacity-60 pointer-events-none z-0" aria-hidden="true" />

      <Container className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Main Centered Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 text-center items-center"
        >
          {/* Pre-heading badge */}
          <motion.span
            variants={itemVariants}
            className="relative inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-cyan-500/8 px-4 py-1.5 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 shadow-[0_0_22px_rgba(6,182,212,0.15)] hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </span>
            AI-Native Product Engineering · Senior Engineers Only
          </motion.span>

          {/* Main Title — Single clean gradient */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-extrabold tracking-tighter text-foreground text-balance leading-[1.08] lg:leading-[1.05]"
          >
            We Build{' '}
            <span className="text-gradient-brand">Websites, Apps,</span>
            <br />
            <span className="text-gradient-brand">AI Agents</span>{' '}
            <span className="text-foreground">&amp; Custom Software</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground text-balance font-sans mt-2"
          >
            We engineer high-performance digital platforms for clients — and ship{' '}
            <span className="text-foreground font-semibold">our own AI-powered SaaS products</span>.
            From intelligent{' '}
            <span className="text-foreground font-semibold">AI agents</span> to{' '}
            <span className="text-foreground font-semibold">cloud architectures</span>, we deliver with premium speed.
          </motion.p>

          {/* Service Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 mt-4"
          >
            {services.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/40 shadow-sm backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-foreground/80 tracking-wide hover:border-primary/35 transition-colors duration-200"
              >
                <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="w-full sm:w-auto"
            >
              <Button asChild size="lg" className="w-full sm:w-auto h-13 px-8 text-sm sm:text-base font-bold bg-gradient-to-r from-primary to-violet-600 hover:from-primary/95 hover:to-violet-600/95 text-white rounded-xl shadow-lg shadow-primary/20 border-0 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 btn-shimmer">
                <Link href="/book-consultation" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="w-full sm:w-auto"
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-13 px-8 text-sm sm:text-base font-bold border-2 border-border hover:border-primary/50 hover:bg-primary/5 text-foreground/80 hover:text-foreground rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <Link href="/portfolio" className="flex items-center gap-2">
                  View Our Work
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>


      </Container>
    </section>
  )
}
