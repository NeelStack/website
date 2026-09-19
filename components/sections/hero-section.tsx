'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  School,
  Cpu,
  Database,
  Code2,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { HeroSpotlight } from '@/components/ui/hero-spotlight'

export interface HeroSlide {
  id: string
  number: string
  badgeText: string
  badgeIcon: React.ElementType
  badgeStyle: string
  titlePrefix: string
  highlightText: string
  subtitleLine1: string
  subtitleLine2: string
  accentGradient: string
  mediaPreview?: string
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'core-engineering',
    number: '01',
    badgeText: 'SOFTWARE ENGINEERING & AI SYSTEMS',
    badgeIcon: Code2,
    badgeStyle:
      'border-blue-500/40 bg-blue-500/10 text-blue-600 dark:border-cyan-400/50 dark:bg-cyan-950/60 dark:text-cyan-300 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_rgba(6,182,212,0.6)]',
    titlePrefix: 'Software Engineering',
    highlightText: 'for Modern Businesses',
    subtitleLine1:
      'We architect, build, and modernize custom business software, scalable cloud applications, and AI systems.',
    subtitleLine2:
      'Delivering reliable, production-grade digital platforms from concept to deployment.',
    accentGradient:
      'from-blue-700 via-indigo-600 to-violet-700 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-300',
  },
  {
    id: 'ai-agents',
    number: '02',
    badgeText: 'AI SYSTEMS & AUTONOMOUS AGENTS',
    badgeIcon: Sparkles,
    badgeStyle:
      'border-indigo-500/40 bg-indigo-500/10 text-indigo-600 dark:border-indigo-400/50 dark:bg-indigo-950/60 dark:text-indigo-300 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_rgba(99,102,241,0.6)]',
    titlePrefix: 'AI-Led Innovation',
    highlightText: '& Autonomous Agent Systems',
    subtitleLine1:
      'Deploy deterministic multi-agent swarms, enterprise knowledge RAG pipelines,',
    subtitleLine2:
      'and intelligent workflow automation built for production-grade reliability.',
    accentGradient:
      'from-blue-700 via-indigo-600 to-purple-700 dark:from-cyan-300 dark:via-blue-400 dark:to-violet-300',
  },
  {
    id: 'dhruvaos',
    number: '03',
    badgeText: 'FLAGSHIP SCHOOL OPERATING SYSTEM',
    badgeIcon: School,
    badgeStyle:
      'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/50 dark:bg-emerald-950/60 dark:text-emerald-300 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_rgba(16,185,129,0.6)]',
    titlePrefix: 'DhruvaOS — Next-Gen',
    highlightText: 'Education Operating System',
    subtitleLine1:
      'Unifying admissions, smart fee collections, and biometric campus attendance',
    subtitleLine2:
      'with AI lesson planning and real-time parent mobile apps across modern schools.',
    accentGradient:
      'from-emerald-700 via-teal-700 to-emerald-700 dark:from-emerald-300 dark:via-teal-300 dark:to-cyan-300',
  },
  {
    id: 'saas-platforms',
    number: '04',
    badgeText: 'ENTERPRISE PLATFORM ENGINEERING',
    badgeIcon: Cpu,
    badgeStyle:
      'border-violet-500/40 bg-violet-500/10 text-violet-600 dark:border-violet-400/50 dark:bg-violet-950/60 dark:text-violet-300 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_rgba(139,92,246,0.6)]',
    titlePrefix: 'Multi-Tenant SaaS &',
    highlightText: 'High-Throughput Platforms',
    subtitleLine1:
      'Engineered for sub-100ms response times and strict PostgreSQL Row-Level Security',
    subtitleLine2:
      'with high-throughput microservices architecture built for enterprise scale.',
    accentGradient:
      'from-violet-700 via-purple-700 to-indigo-700 dark:from-violet-300 dark:via-purple-300 dark:to-indigo-300',
  },
  {
    id: 'modernization',
    number: '05',
    badgeText: 'ZERO-DOWNTIME TRANSFORMATION',
    badgeIcon: Database,
    badgeStyle:
      'border-amber-500/40 bg-amber-500/10 text-amber-600 dark:border-amber-400/50 dark:bg-amber-950/60 dark:text-amber-300 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_rgba(245,158,11,0.6)]',
    titlePrefix: 'Legacy Modernization &',
    highlightText: 'Cloud Architecture',
    subtitleLine1:
      'Transform legacy desktop ERPs, monolithic codebases, and fragmented data tables',
    subtitleLine2:
      'into modern, high-security cloud-native systems with zero business downtime.',
    accentGradient:
      'from-amber-700 via-orange-600 to-rose-700 dark:from-amber-300 dark:via-orange-300 dark:to-yellow-300',
  },
]

const AUTOPLAY_INTERVAL = 5500 // 5.5 seconds per slide

// 3D Kinetic Slide Animation Variants
const slide3DVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 22 : -22,
    rotateX: direction > 0 ? 14 : -14,
    scale: 0.96,
    filter: 'blur(6px)',
  }),
  center: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.42,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -22 : 22,
    rotateX: direction > 0 ? -14 : 14,
    scale: 0.96,
    filter: 'blur(6px)',
    transition: {
      duration: 0.34,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
}

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<number>(1)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartXRef = useRef<number | null>(null)

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  const goToPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  // Auto-rotation timer that cleanly resets and pauses on hover
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      goToNext()
    }, AUTOPLAY_INTERVAL)

    return () => clearInterval(timer)
  }, [isPaused, goToNext, currentIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'ArrowLeft') goToPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrev])

  // Mobile Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartXRef.current - touchEndX

    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }
    touchStartXRef.current = null
  }

  const currentSlide = HERO_SLIDES[currentIndex]
  const BadgeIcon = currentSlide.badgeIcon

  return (
    <HeroSpotlight
      className="relative overflow-hidden pt-20 pb-6 sm:pt-24 sm:pb-8 md:pt-26 md:pb-8 lg:pt-26 lg:pb-10 xl:pt-28 xl:pb-14"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.04] dark:opacity-[0.12] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Ambient mesh glow */}
      <div
        className="absolute inset-0 ambient-mesh-glow opacity-15 dark:opacity-30 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 
        PREV & NEXT ARROWS (Desktop / Tablet):
        Clean, elegant arrow glyphs on desktop with 3D tactile button pop on hover.
      */}
      <div className="hidden sm:flex absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none z-30 w-full max-w-[94rem] mx-auto px-4 md:px-6 lg:px-14 items-center justify-between">
        {/* Prev Arrow / 3D Tactile on Hover */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous capability slide"
          className="pointer-events-auto cursor-pointer flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border-2 border-transparent text-muted-foreground/80 hover:text-foreground dark:hover:text-cyan-300 hover:border-slate-900 dark:hover:border-cyan-400/90 hover:bg-amber-400 dark:hover:bg-[#070d1d]/95 hover:shadow-[4px_4px_0px_#0f172a] dark:hover:shadow-[4px_4px_0px_rgba(6,182,212,0.9)] hover:-translate-y-0.5 active:translate-x-[2.5px] active:translate-y-[2.5px] active:shadow-[1px_1px_0px_#0f172a] active:dark:shadow-[1px_1px_0px_rgba(6,182,212,0.9)] backdrop-blur-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7 stroke-[2.2] transition-transform hover:scale-110" />
        </button>

        {/* Next Arrow / 3D Tactile on Hover */}
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next capability slide"
          className="pointer-events-auto cursor-pointer flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border-2 border-transparent text-muted-foreground/80 hover:text-foreground dark:hover:text-cyan-300 hover:border-slate-900 dark:hover:border-cyan-400/90 hover:bg-amber-400 dark:hover:bg-[#070d1d]/95 hover:shadow-[4px_4px_0px_#0f172a] dark:hover:shadow-[4px_4px_0px_rgba(6,182,212,0.9)] hover:-translate-y-0.5 active:translate-x-[2.5px] active:translate-y-[2.5px] active:shadow-[1px_1px_0px_#0f172a] active:dark:shadow-[1px_1px_0px_rgba(6,182,212,0.9)] backdrop-blur-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 stroke-[2.2] transition-transform hover:scale-110" />
        </button>
      </div>

      <Container className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12">
        <div className="flex flex-col gap-5 sm:gap-6 text-center items-center">

          {/* Snug Responsive 3D Kinetic Dynamic Headline Area */}
          <div
            className="w-full min-h-[220px] sm:min-h-[240px] md:min-h-[255px] flex flex-col justify-center items-center px-1 sm:px-8"
            style={{ perspective: 1200 }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide.id}
                custom={direction}
                variants={slide3DVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{ transformStyle: 'preserve-3d' }}
                className="flex flex-col items-center gap-3 sm:gap-4 max-w-4xl"
              >
                {/* Dynamic Category Badge */}
                <div
                  className={`inline-flex items-center gap-2 rounded-full border-2 px-3.5 sm:px-4 py-1.5 text-xs font-mono font-bold backdrop-blur-md transition-all cursor-default max-w-full ${currentSlide.badgeStyle}`}
                >
                  <BadgeIcon className="h-3.5 w-3.5 shrink-0 animate-pulse" />
                  <span className="tracking-tight text-center truncate sm:whitespace-normal">
                    {currentSlide.badgeText}
                  </span>
                </div>

                {/* Main Dynamic 3D Headline */}
                <h1 className="font-heading text-[2.2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-slate-950 dark:text-white leading-[1.12] sm:leading-[1.1] text-3d-headline flex flex-col items-center select-none text-balance">
                  <span className="block">{currentSlide.titlePrefix}</span>
                  <span
                    className={`block bg-gradient-to-r ${currentSlide.accentGradient} bg-clip-text text-transparent pb-0.5`}
                  >
                    {currentSlide.highlightText}
                  </span>
                </h1>

                {/* Main Dynamic Subtitle */}
                <p className="max-w-3xl text-[15.5px] sm:text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 font-sans font-medium text-center text-balance px-1 sm:px-2 select-none">
                  <span className="sm:block">{currentSlide.subtitleLine1} </span>
                  <span className="sm:block">{currentSlide.subtitleLine2}</span>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Pagination Dots for Mobile (With Generous Touch Target) */}
          <div className="flex items-center justify-center gap-1 select-none sm:hidden my-1">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1)
                    setCurrentIndex(idx)
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="p-2 cursor-pointer flex items-center justify-center focus-visible:outline-none"
                >
                  <span
                    className={`h-2 rounded-full transition-all duration-300 block ${isActive
                        ? 'w-6 bg-primary shadow-xs'
                        : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                      }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Rock-Solid Stationary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-1 sm:mt-2 w-full sm:w-auto max-w-sm sm:max-w-none"
          >
            <div className="w-full sm:w-auto">
              <Button
                asChild
                variant="3d-yellow"
                size="lg"
                className="w-full sm:w-auto h-12.5 sm:h-13 px-7 sm:px-8 text-[15px] sm:text-base rounded-xl flex items-center justify-center gap-2 font-bold shadow-md"
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Start a Project</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="w-full sm:w-auto">
              <Button
                asChild
                variant="3d-secondary"
                size="lg"
                className="w-full sm:w-auto h-12.5 sm:h-13 px-7 sm:px-8 text-[15px] sm:text-base rounded-xl flex items-center justify-center gap-2 font-bold"
              >
                <Link href="/services" className="flex items-center justify-center gap-2">
                  <span>Explore Services</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Clean Tactile Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2 sm:pt-2 text-xs font-semibold text-slate-700 dark:text-slate-300 max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xs shadow-2xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              100% Client Code &amp; IP Ownership
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xs shadow-2xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              Direct Senior Engineer Access
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xs shadow-2xs">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-500 shrink-0" />
              Enterprise-Grade SLA &amp; Security
            </span>
          </motion.div>

          {/* Subtle Mobile Scroll Cue to Bridge Viewport Void */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center justify-center pt-2 sm:pt-4 select-none"
          >
            <a
              href="#trust-strip"
              className="group flex flex-col items-center gap-1 text-xs font-mono font-medium tracking-wider uppercase text-slate-400/80 hover:text-slate-600 dark:text-slate-500 dark:hover:text-cyan-400 transition-colors cursor-pointer"
              aria-label="Scroll to explore ecosystem"
            >
              <span>Explore Ecosystem</span>
              <ChevronDown className="h-3.5 w-3.5 animate-bounce text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors" />
            </a>
          </motion.div>

        </div>
      </Container>
    </HeroSpotlight>
  )
}
