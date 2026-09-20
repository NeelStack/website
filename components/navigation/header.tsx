'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Bot,
  Cpu,
  Zap,
  Shield,
  ExternalLink,
  Wrench,
  FileText,
  Globe,
  Palette,
  Cloud,
  RefreshCw,
  Users,
  Briefcase,
  Info,
  Rocket,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { NeelStackLogo } from '@/components/ui/logo'

// ─── Dropdown Data Definition ──────────────────────────────────────────────────

interface NavItem {
  title: string
  href: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
  iconBg: string
  badge?: string
}

const SERVICES_MENU: {
  label: string
  column1: NavItem[]
  column2: NavItem[]
  footer: { text: string; ctaText: string; ctaHref: string }
} = {
  label: 'Services',
  column1: [
    {
      title: 'AI Engineering & Agents',
      href: '/services/ai-development',
      description: 'Autonomous multi-agent workflows, Model Context Protocol (MCP) & RAG search.',
      icon: Bot,
      iconColor: 'text-violet-500 dark:text-violet-400',
      iconBg: 'bg-violet-500/10 border-violet-500/20',
      badge: 'GenAI',
    },
    {
      title: 'Custom Software & ERP',
      href: '/services/custom-software',
      description: 'Tailored enterprise software, workflow engines, B2B portals & backend systems.',
      icon: Cpu,
      iconColor: 'text-blue-500 dark:text-cyan-400',
      iconBg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'Web & Mobile Applications',
      href: '/services/web-applications',
      description: 'High-speed Next.js web applications, responsive SaaS dashboards & mobile apps.',
      icon: Globe,
      iconColor: 'text-emerald-500 dark:text-emerald-400',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    },
  ],
  column2: [
    {
      title: 'Cloud Architecture & DevOps',
      href: '/services/devops-cloud',
      description: 'AWS/GCP infrastructure, Docker containerization, Kubernetes & CI/CD pipelines.',
      icon: Cloud,
      iconColor: 'text-amber-500 dark:text-amber-400',
      iconBg: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      title: 'UI/UX & Product Design',
      href: '/services/ui-ux-design',
      description: 'Design systems, accessibility compliance & high-fidelity interactive prototypes.',
      icon: Palette,
      iconColor: 'text-rose-500 dark:text-rose-400',
      iconBg: 'bg-rose-500/10 border-rose-500/20',
    },
    {
      title: 'Legacy Modernization',
      href: '/services',
      description: 'Monolith deconstruction, microservices refactoring & zero-downtime data migration.',
      icon: RefreshCw,
      iconColor: 'text-indigo-500 dark:text-indigo-400',
      iconBg: 'bg-indigo-500/10 border-indigo-500/20',
    },
  ],
  footer: {
    text: 'Need a custom engineering solution for your business?',
    ctaText: 'Explore All 6 Services',
    ctaHref: '/services',
  },
}

const PRODUCTS_MENU = {
  label: 'Products',
  flagships: [
    {
      title: 'DhruvaOS',
      tag: 'Flagship Platform',
      badge: 'Launching 2 Oct 2026',
      badgeColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      description:
        'Unified AI-powered school operating system. Admissions, fees, exams, attendance & campus AI.',
      href: '/products/dhruvaos',
      icon: Zap,
      iconColor: 'text-violet-500 dark:text-violet-400',
      iconBg: 'bg-violet-500/10 border-violet-500/30',
      cardBg: 'bg-gradient-to-br from-violet-500/5 via-violet-500/[0.02] to-transparent hover:border-violet-500/40',
    },
    {
      title: 'ToolVines',
      tag: 'Developer Tools',
      badge: 'Free & Live',
      badgeColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      description:
        '320+ private, client-side WebAssembly developer formatters, encoders, and network utilities.',
      href: 'https://toolvines.com',
      isExternal: true,
      icon: Wrench,
      iconColor: 'text-emerald-500 dark:text-emerald-400',
      iconBg: 'bg-emerald-500/10 border-emerald-500/30',
      cardBg: 'bg-gradient-to-br from-emerald-500/5 via-emerald-500/[0.02] to-transparent hover:border-emerald-500/40',
    },
  ],
  secondary: [
    {
      title: 'AI Company OS',
      description: 'Autonomous multi-agent enterprise workforce platform & operating system.',
      href: '/products/ai-company-os',
      icon: Bot,
    },
    {
      title: 'Strategic Whitepaper v1.0',
      description: 'Architectural thesis on the AI company operating system & agent swarms.',
      href: '/whitepapers/ai-company-operating-system',
      icon: FileText,
    },
    {
      title: 'Product Roadmap & Pipeline',
      description: 'Explore upcoming platforms including NaukariMitra & SarkariMitra.',
      href: '/roadmap',
      icon: Rocket,
    },
  ],
  footer: {
    text: 'All platforms engineered & maintained by NeelStack',
    ctaText: 'View Complete Portfolio',
    ctaHref: '/products',
  },
}

const COMPANY_MENU: {
  label: string
  column1: NavItem[]
  column2: NavItem[]
  footer: { text: string; ctaText: string; ctaHref: string }
} = {
  label: 'Company',
  column1: [
    {
      title: 'About NeelStack',
      href: '/about',
      description: 'Our mission, statutory credentials, engineering philosophy, and quality standards.',
      icon: Info,
      iconColor: 'text-blue-500 dark:text-cyan-400',
      iconBg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'Leadership & Team',
      href: '/about#leadership',
      description: 'Meet the founders, software architects, and AI executive operating partner.',
      icon: Users,
      iconColor: 'text-emerald-500 dark:text-emerald-400',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Careers & Talent Lab',
      href: '/careers',
      description: 'Join our engineering studio building high-performance systems and AI platforms.',
      icon: Rocket,
      iconColor: 'text-amber-500 dark:text-amber-400',
      iconBg: 'bg-amber-500/10 border-amber-500/20',
      badge: 'Hiring',
    },
  ],
  column2: [
    {
      title: 'Strategic Whitepaper',
      href: '/whitepapers/ai-company-operating-system',
      description: 'The AI Company Operating System — Version 1.0 architectural publication.',
      icon: FileText,
      iconColor: 'text-violet-500 dark:text-violet-400',
      iconBg: 'bg-violet-500/10 border-violet-500/20',
    },
    {
      title: 'Architecture Case Studies',
      href: '/case-studies',
      description: 'Deep dives into our system topology, database schemas, and performance benchmarks.',
      icon: Briefcase,
      iconColor: 'text-cyan-500 dark:text-cyan-400',
      iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      title: 'Engineering Blog',
      href: '/blog',
      description: 'Technical articles, agent architectures, and lessons from high-scale deployments.',
      icon: FileText,
      iconColor: 'text-rose-500 dark:text-rose-400',
      iconBg: 'bg-rose-500/10 border-rose-500/20',
    },
  ],
  footer: {
    text: 'CIN: U62011UP2026PTC250857 · DPIIT Recognized Startup',
    ctaText: 'Read Whitepaper',
    ctaHref: '/whitepapers/ai-company-operating-system',
  },
}

// ─── Desktop Mega Menu Components ─────────────────────────────────────────────

function ServicesDropdown({ onClose }: { onClose: () => void }) {
  const pathname = usePathname()

  return (
    <div className="w-[560px] p-4">
      <div className="grid grid-cols-2 gap-3">
        {/* Column 1: Core Engineering */}
        <div className="space-y-1">
          <p className="px-2 pb-1 text-[10px] font-mono font-bold tracking-wider uppercase text-muted-foreground/70 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Core Engineering
          </p>
          <div className="space-y-1">
            {SERVICES_MENU.column1.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'group flex items-center justify-between gap-2.5 px-2.5 py-2 rounded-xl border transition-all duration-150',
                    isActive
                      ? 'bg-primary/10 border-primary/30 text-primary'
                      : 'border-transparent hover:border-slate-200/80 dark:hover:border-white/[0.08] hover:bg-slate-100/70 dark:hover:bg-white/[0.04]'
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={cn(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-transform group-hover:scale-105',
                        item.iconBg,
                        item.iconColor
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-tight truncate">
                      {item.title}
                    </span>
                  </div>
                  {item.badge && (
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 shrink-0">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Column 2: Cloud, Design & Scale */}
        <div className="space-y-1">
          <p className="px-2 pb-1 text-[10px] font-mono font-bold tracking-wider uppercase text-muted-foreground/70 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Cloud, UX & Scale
          </p>
          <div className="space-y-1">
            {SERVICES_MENU.column2.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'group flex items-center justify-between gap-2.5 px-2.5 py-2 rounded-xl border transition-all duration-150',
                    isActive
                      ? 'bg-primary/10 border-primary/30 text-primary'
                      : 'border-transparent hover:border-slate-200/80 dark:hover:border-white/[0.08] hover:bg-slate-100/70 dark:hover:bg-white/[0.04]'
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={cn(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-transform group-hover:scale-105',
                        item.iconBg,
                        item.iconColor
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-tight truncate">
                      {item.title}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Dropdown Footer */}
      <div className="mt-3 pt-2.5 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between text-xs">
        <span className="text-muted-foreground text-[11px] font-medium">
          {SERVICES_MENU.footer.text}
        </span>
        <Link
          href={SERVICES_MENU.footer.ctaHref}
          onClick={onClose}
          className="font-bold text-primary hover:underline flex items-center gap-1 text-[11px] transition-colors"
        >
          {SERVICES_MENU.footer.ctaText} <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}

function ProductsDropdown({ onClose }: { onClose: () => void }) {
  const pathname = usePathname()

  return (
    <div className="w-[540px] p-4">
      <div className="grid grid-cols-2 gap-3">
        {/* Column 1: Flagship Platforms */}
        <div className="space-y-1">
          <p className="px-2 pb-1 text-[10px] font-mono font-bold tracking-wider uppercase text-muted-foreground/70 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Flagship Platforms
          </p>

          <div className="space-y-1">
            {PRODUCTS_MENU.flagships.map((prod) => {
              const Icon = prod.icon
              const isExternal = !!prod.isExternal
              const isActive = pathname === prod.href

              const itemContent = (
                <div
                  className={cn(
                    'group flex items-center justify-between gap-2 px-2.5 py-2 rounded-xl border transition-all duration-150',
                    isActive
                      ? 'bg-primary/10 border-primary/30 text-primary'
                      : 'border-transparent hover:border-slate-200/80 dark:hover:border-white/[0.08] hover:bg-slate-100/70 dark:hover:bg-white/[0.04]'
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={cn(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-transform group-hover:scale-105',
                        prod.iconBg,
                        prod.iconColor
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-tight truncate">
                      {prod.title}
                    </span>
                  </div>

                  <span
                    className={cn(
                      'text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full border shrink-0',
                      prod.badgeColor
                    )}
                  >
                    {prod.badge}
                  </span>
                </div>
              )

              if (isExternal) {
                return (
                  <a
                    key={prod.title}
                    href={prod.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block"
                  >
                    {itemContent}
                  </a>
                )
              }

              return (
                <Link key={prod.title} href={prod.href} onClick={onClose} className="block">
                  {itemContent}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Column 2: Ecosystem & Roadmap */}
        <div className="space-y-1">
          <p className="px-2 pb-1 text-[10px] font-mono font-bold tracking-wider uppercase text-muted-foreground/70 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Ecosystem & Roadmap
          </p>

          <div className="space-y-1">
            {PRODUCTS_MENU.secondary.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'group flex items-center justify-between gap-2.5 px-2.5 py-2 rounded-xl border transition-all duration-150',
                    isActive
                      ? 'bg-primary/10 border-primary/30 text-primary'
                      : 'border-transparent hover:border-slate-200/80 dark:hover:border-white/[0.08] hover:bg-slate-100/70 dark:hover:bg-white/[0.04]'
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-tight truncate">
                      {item.title}
                    </span>
                  </div>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 text-primary transition-opacity shrink-0" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Dropdown Footer */}
      <div className="mt-3 pt-2.5 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between text-xs">
        <span className="text-muted-foreground text-[11px] font-medium">
          {PRODUCTS_MENU.footer.text}
        </span>
        <Link
          href={PRODUCTS_MENU.footer.ctaHref}
          onClick={onClose}
          className="font-bold text-primary hover:underline flex items-center gap-1 text-[11px] transition-colors"
        >
          {PRODUCTS_MENU.footer.ctaText} <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}

function CompanyDropdown({ onClose }: { onClose: () => void }) {
  const pathname = usePathname()

  return (
    <div className="w-[520px] p-4">
      <div className="grid grid-cols-2 gap-3">
        {/* Column 1: Identity & People */}
        <div className="space-y-1">
          <p className="px-2 pb-1 text-[10px] font-mono font-bold tracking-wider uppercase text-muted-foreground/70 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Identity & People
          </p>
          <div className="space-y-1">
            {COMPANY_MENU.column1.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'group flex items-center justify-between gap-2 px-2.5 py-2 rounded-xl border transition-all duration-150',
                    isActive
                      ? 'bg-primary/10 border-primary/30 text-primary'
                      : 'border-transparent hover:border-slate-200/80 dark:hover:border-white/[0.08] hover:bg-slate-100/70 dark:hover:bg-white/[0.04]'
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={cn(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-transform group-hover:scale-105',
                        item.iconBg,
                        item.iconColor
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-tight truncate">
                      {item.title}
                    </span>
                  </div>
                  {item.badge && (
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Column 2: Architecture & Research */}
        <div className="space-y-1">
          <p className="px-2 pb-1 text-[10px] font-mono font-bold tracking-wider uppercase text-muted-foreground/70 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Architecture & Research
          </p>
          <div className="space-y-1">
            {COMPANY_MENU.column2.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'group flex items-center justify-between gap-2.5 px-2.5 py-2 rounded-xl border transition-all duration-150',
                    isActive
                      ? 'bg-primary/10 border-primary/30 text-primary'
                      : 'border-transparent hover:border-slate-200/80 dark:hover:border-white/[0.08] hover:bg-slate-100/70 dark:hover:bg-white/[0.04]'
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={cn(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-transform group-hover:scale-105',
                        item.iconBg,
                        item.iconColor
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-tight truncate">
                      {item.title}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Dropdown Footer */}
      <div className="mt-3 pt-2.5 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between text-xs">
        <span className="text-muted-foreground text-[10.5px] font-mono">
          {COMPANY_MENU.footer.text}
        </span>
        <Link
          href={COMPANY_MENU.footer.ctaHref}
          onClick={onClose}
          className="font-bold text-primary hover:underline flex items-center gap-1 text-[11px] transition-colors"
        >
          {COMPANY_MENU.footer.ctaText} <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}

// ─── Desktop Navigation Bar ───────────────────────────────────────────────────

function DesktopNavbar() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }, [])

  const scheduleClose = useCallback(() => {
    cancelClose()
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null)
    }, 200)
  }, [cancelClose])

  const handleOpen = useCallback(
    (label: string) => {
      cancelClose()
      setOpenMenu(label)
    },
    [cancelClose]
  )

  const handleToggle = useCallback(
    (label: string) => {
      cancelClose()
      setOpenMenu((prev) => (prev === label ? null : label))
    },
    [cancelClose]
  )

  // Close when pathname changes
  useEffect(() => {
    setOpenMenu(null)
  }, [pathname])

  return (
    <nav
      className="hidden lg:flex items-center gap-1 relative"
      aria-label="Main Navigation"
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
    >
      {/* 1. Services Menu */}
      <div className="relative">
        <button
          onClick={() => handleToggle('Services')}
          onMouseEnter={() => handleOpen('Services')}
          className={cn(
            'flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-150 select-none cursor-pointer',
            openMenu === 'Services'
              ? 'text-primary font-bold bg-primary/10'
              : pathname.startsWith('/services')
                ? 'text-primary font-bold bg-primary/10 border border-primary/20 shadow-2xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-slate-100/80 dark:hover:bg-white/[0.06]'
          )}
          aria-expanded={openMenu === 'Services'}
        >
          <span>Services</span>
          <ChevronDown
            className={cn(
              'h-3.5 w-3.5 opacity-60 transition-transform duration-200',
              (openMenu === 'Services' || pathname.startsWith('/services')) && 'text-primary opacity-100',
              openMenu === 'Services' && 'rotate-180'
            )}
          />
        </button>

        <AnimatePresence>
          {openMenu === 'Services' && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-full mt-2.5 z-50 rounded-2xl border-2 border-slate-200/90 dark:border-white/10 bg-card/98 dark:bg-[#070b14]/98 backdrop-blur-xl shadow-2xl shadow-slate-900/15 dark:shadow-black/80 overflow-hidden"
            >
              <ServicesDropdown onClose={() => setOpenMenu(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. Products Menu */}
      <div className="relative">
        <button
          onClick={() => handleToggle('Products')}
          onMouseEnter={() => handleOpen('Products')}
          className={cn(
            'flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-150 select-none cursor-pointer',
            openMenu === 'Products'
              ? 'text-primary font-bold bg-primary/10'
              : pathname.startsWith('/products')
                ? 'text-primary font-bold bg-primary/10 border border-primary/20 shadow-2xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-slate-100/80 dark:hover:bg-white/[0.06]'
          )}
          aria-expanded={openMenu === 'Products'}
        >
          <span>Products</span>
          <ChevronDown
            className={cn(
              'h-3.5 w-3.5 opacity-60 transition-transform duration-200',
              (openMenu === 'Products' || pathname.startsWith('/products')) && 'text-primary opacity-100',
              openMenu === 'Products' && 'rotate-180'
            )}
          />
        </button>

        <AnimatePresence>
          {openMenu === 'Products' && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 xl:-left-10 top-full mt-2.5 z-50 rounded-2xl border-2 border-slate-200/90 dark:border-white/10 bg-card/98 dark:bg-[#070b14]/98 backdrop-blur-xl shadow-2xl shadow-slate-900/15 dark:shadow-black/80 overflow-hidden"
            >
              <ProductsDropdown onClose={() => setOpenMenu(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. Company Menu */}
      <div className="relative">
        <button
          onClick={() => handleToggle('Company')}
          onMouseEnter={() => handleOpen('Company')}
          className={cn(
            'flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-150 select-none cursor-pointer',
            openMenu === 'Company'
              ? 'text-primary font-bold bg-primary/10'
              : pathname === '/about' || pathname === '/careers' || pathname.startsWith('/case-studies') || pathname.startsWith('/blog') || pathname.startsWith('/whitepapers')
                ? 'text-primary font-bold bg-primary/10 border border-primary/20 shadow-2xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-slate-100/80 dark:hover:bg-white/[0.06]'
          )}
          aria-expanded={openMenu === 'Company'}
        >
          <span>Company</span>
          <ChevronDown
            className={cn(
              'h-3.5 w-3.5 opacity-60 transition-transform duration-200',
              (openMenu === 'Company' || pathname === '/about' || pathname === '/careers' || pathname.startsWith('/case-studies') || pathname.startsWith('/blog') || pathname.startsWith('/whitepapers')) && 'text-primary opacity-100',
              openMenu === 'Company' && 'rotate-180'
            )}
          />
        </button>

        <AnimatePresence>
          {openMenu === 'Company' && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-full mt-2.5 z-50 rounded-2xl border-2 border-slate-200/90 dark:border-white/10 bg-card/98 dark:bg-[#070b14]/98 backdrop-blur-xl shadow-2xl shadow-slate-900/15 dark:shadow-black/80 overflow-hidden"
            >
              <CompanyDropdown onClose={() => setOpenMenu(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. Pricing Direct Link */}
      <Link
        href="/pricing"
        className={cn(
          'px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-150',
          pathname === '/pricing'
            ? 'text-primary font-bold bg-primary/10 border border-primary/20 shadow-2xs'
            : 'text-muted-foreground hover:text-foreground hover:bg-slate-100/80 dark:hover:bg-white/[0.06]'
        )}
      >
        Pricing
      </Link>

      {/* 5. Contact Direct Link */}
      <Link
        href="/contact"
        className={cn(
          'px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-150',
          pathname === '/contact'
            ? 'text-primary font-bold bg-primary/10 border border-primary/20 shadow-2xs'
            : 'text-muted-foreground hover:text-foreground hover:bg-slate-100/80 dark:hover:bg-white/[0.06]'
        )}
      >
        Contact
      </Link>
    </nav>
  )
}

// ─── AI Modal Dialog ─────────────────────────────────────────────────────────

function AiExplorationDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedTopic, setSelectedTopic] = useState<string>('agents')

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleKeyDown)
      const prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = prevOverflow
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const TOPICS = [
    {
      id: 'agents',
      title: 'Autonomous AI Agents',
      tag: 'MCP & Multi-Agent Swarms',
      desc: 'Task-executing multi-agent swarms connected to enterprise APIs, tool registries, and database pipelines with human-in-the-loop governance.',
      icon: Bot,
      iconColor: 'text-violet-500 dark:text-violet-400',
      iconBg: 'bg-violet-500/10 border-violet-500/25',
      tags: ['Model Context Protocol (MCP)', 'Subagents & Tool Calling', 'LangGraph / AutoGen'],
    },
    {
      id: 'rag',
      title: 'Enterprise Vector RAG',
      tag: 'Semantic Search & Knowledge Graphs',
      desc: 'Sub-second hybrid retrieval over corporate documentation, PDF repositories, and transactional databases with zero hallucinations.',
      icon: Cpu,
      iconColor: 'text-cyan-500 dark:text-cyan-400',
      iconBg: 'bg-cyan-500/10 border-cyan-500/25',
      tags: ['pgvector & Pinecone', 'Hybrid BM25 + Dense Search', 'Cross-Encoder Reranking'],
    },
    {
      id: 'finetuning',
      title: 'Domain Model Fine-Tuning',
      tag: 'Private & Specialized Weights',
      desc: 'Domain-adapted LLMs fine-tuned on proprietary business data with LoRA/QLoRA, deployed privately on isolated infrastructure.',
      icon: Zap,
      iconColor: 'text-amber-500 dark:text-amber-400',
      iconBg: 'bg-amber-500/10 border-amber-500/25',
      tags: ['Llama 3.3 / Mistral / DeepSeek', 'vLLM Fast Inference', 'Custom Prompt Caching'],
    },
    {
      id: 'privacy',
      title: 'Zero-Retention Enterprise VPC',
      tag: 'Security & Compliance',
      desc: 'Strict client-side encryption, private VPC execution, zero data retention agreements, and complete IP ownership for your business.',
      icon: Shield,
      iconColor: 'text-emerald-500 dark:text-emerald-400',
      iconBg: 'bg-emerald-500/10 border-emerald-500/25',
      tags: ['Air-Gapped Private Cloud', 'HIPAA / GDPR Ready', '100% Client Code & IP'],
    },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-hidden">
      {/* Blurred Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 18 }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
        className="relative w-full max-w-2xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col rounded-3xl border-2 border-slate-200/90 dark:border-cyan-500/30 bg-card/98 dark:bg-[#090e1a]/98 shadow-2xl backdrop-blur-2xl z-10 overflow-hidden"
      >
        {/* Top Header (Anchored) */}
        <div className="shrink-0 p-4 sm:p-6 border-b border-border/60 flex items-start justify-between bg-card/95 dark:bg-[#090e1a]/95 backdrop-blur-xl">
          <div className="space-y-1 sm:space-y-1.5 pr-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-cyan-500/40 bg-cyan-500/15 text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span>AI ARCHITECT COPILOT ONLINE</span>
            </div>
            <h3 className="text-base sm:text-xl font-heading font-extrabold text-foreground tracking-tight">
              NeelStack AI Architecture Advisory
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Explore multi-agent workflows, enterprise RAG search, and private cloud deployment models.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close AI Modal"
            className="rounded-full p-2 text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors cursor-pointer shrink-0 -mt-1 -mr-1"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable 4 Architecture Pillars Grid */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-4 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {TOPICS.map((topic) => {
              const Icon = topic.icon
              const isSelected = selectedTopic === topic.id
              return (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={cn(
                    'p-4 rounded-2xl border-2 transition-all duration-150 cursor-pointer relative overflow-hidden',
                    isSelected
                      ? 'border-cyan-500/50 dark:border-cyan-400/60 bg-cyan-500/5 dark:bg-cyan-500/10 shadow-sm'
                      : 'border-slate-200/80 dark:border-white/[0.08] bg-muted/20 hover:border-slate-300 dark:hover:border-white/20 hover:bg-muted/40'
                  )}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-xl border shrink-0',
                        topic.iconBg,
                        topic.iconColor
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground leading-tight">{topic.title}</h4>
                      <span className="text-[10px] font-mono text-muted-foreground">{topic.tag}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2 mb-2.5">
                    {topic.desc}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {topic.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-muted/80 text-foreground/80 border border-border/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Action Footer (Anchored) */}
        <div className="shrink-0 p-4 sm:p-5 border-t border-border/60 bg-muted/20 dark:bg-[#060a12] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Ready to scope your AI system? <span className="text-foreground font-semibold">Talk directly with our software architects.</span>
          </p>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end shrink-0">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 sm:flex-initial rounded-xl text-xs font-bold border-slate-300 dark:border-white/20"
              onClick={onClose}
            >
              <Link href="/request-quote">Request Scope</Link>
            </Button>
            <Button
              asChild
              variant="3d-yellow"
              size="sm"
              className="flex-1 sm:flex-initial rounded-xl text-xs font-extrabold"
              onClick={onClose}
            >
              <Link href="/book-consultation" className="gap-1.5 flex items-center justify-center">
                Book AI Discovery <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ─── Mobile Menu Drawer ───────────────────────────────────────────────────────

function MobileMenu({
  isOpen,
  onClose,
  onOpenAi,
}: {
  isOpen: boolean
  onClose: () => void
  onOpenAi: () => void
}) {
  const pathname = usePathname()
  const [openSection, setOpenSection] = useState<string | null>('Services')

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Blurred overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-md"
      />

      {/* Drawer panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 32, stiffness: 350 }}
        className="fixed inset-y-0 right-0 w-full max-w-[340px] sm:max-w-[380px] h-[100dvh] max-h-[100dvh] bg-background/98 dark:bg-[#070b14]/98 backdrop-blur-2xl border-l-2 border-slate-200/90 dark:border-white/[0.08] shadow-2xl flex flex-col justify-between overflow-hidden z-10"
      >
        {/* Top Header */}
        <div className="shrink-0 px-5 py-3.5 border-b border-border/60 flex items-center justify-between bg-muted/20">
          <NeelStackLogo size="sm" />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="h-8 w-8 flex items-center justify-center rounded-xl bg-muted/80 text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-3 custom-scrollbar pb-6">
          {/* Talk AI Banner */}
          <button
            type="button"
            onClick={onOpenAi}
            className="w-full text-left p-3.5 rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 hover:from-cyan-500/15 hover:to-violet-500/15 transition-all flex items-center justify-between cursor-pointer group shadow-sm"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 group-hover:scale-105 transition-transform">
                <Sparkles className="h-4 w-4 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-bold text-foreground">Talk AI Architect</p>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-bold border border-cyan-500/30">
                    Live
                  </span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-0.5">Explore agents, RAG &amp; custom LLM models</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Accordion 1: Services */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-white/[0.08] overflow-hidden bg-card/40">
            <button
              onClick={() => setOpenSection((prev) => (prev === 'Services' ? null : 'Services'))}
              className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-foreground bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Services
              </span>
              <ChevronDown
                className={cn('h-4 w-4 transition-transform text-muted-foreground', openSection === 'Services' && 'rotate-180 text-primary')}
              />
            </button>
            {openSection === 'Services' && (
              <div className="p-2 space-y-1 bg-card/80 border-t border-border/40">
                {[...SERVICES_MENU.column1, ...SERVICES_MENU.column2].map((s) => {
                  const Icon = s.icon
                  const isActive = pathname === s.href
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={onClose}
                      className={cn(
                        'flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold transition-colors',
                        isActive
                          ? 'bg-primary/10 text-primary font-bold'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                      )}
                    >
                      <div className={cn('flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border', s.iconBg, s.iconColor)}>
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <span className="flex-1 truncate">{s.title}</span>
                      <ArrowRight className="h-3 w-3 opacity-40 shrink-0" />
                    </Link>
                  )
                })}
                <Link
                  href="/services"
                  onClick={onClose}
                  className="flex items-center justify-between p-2 rounded-xl text-xs font-bold text-primary hover:bg-primary/10 transition-colors pt-2 border-t border-border/40"
                >
                  <span>View All 6 Services</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}
          </div>

          {/* Accordion 2: Products */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-white/[0.08] overflow-hidden bg-card/40">
            <button
              onClick={() => setOpenSection((prev) => (prev === 'Products' ? null : 'Products'))}
              className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-foreground bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                Products &amp; Platforms
              </span>
              <ChevronDown
                className={cn('h-4 w-4 transition-transform text-muted-foreground', openSection === 'Products' && 'rotate-180 text-primary')}
              />
            </button>
            {openSection === 'Products' && (
              <div className="p-2 space-y-1 bg-card/80 border-t border-border/40">
                <Link
                  href="/products/dhruvaos"
                  onClick={onClose}
                  className="flex items-center justify-between p-2.5 rounded-xl text-xs font-bold text-violet-600 dark:text-violet-400 bg-violet-500/5 hover:bg-violet-500/10 border border-violet-500/20 transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Zap className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">DhruvaOS (School OS)</span>
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-violet-500/10 font-bold border border-violet-500/20 shrink-0">
                    2 Oct 2026
                  </span>
                </Link>

                <a
                  href="https://toolvines.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center justify-between p-2.5 rounded-xl text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/20 transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Wrench className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">ToolVines (Developer Utilities)</span>
                  </div>
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </a>

                {PRODUCTS_MENU.secondary.map((prod) => {
                  const Icon = prod.icon
                  return (
                    <Link
                      key={prod.href}
                      href={prod.href}
                      onClick={onClose}
                      className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/40 text-muted-foreground">
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <span className="flex-1 truncate">{prod.title}</span>
                      <ArrowRight className="h-3 w-3 opacity-40 shrink-0" />
                    </Link>
                  )
                })}

                <Link
                  href="/products"
                  onClick={onClose}
                  className="flex items-center justify-between p-2 rounded-xl text-xs font-bold text-primary hover:bg-primary/10 transition-colors pt-2 border-t border-border/40"
                >
                  <span>View Complete Portfolio</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}
          </div>

          {/* Accordion 3: Company */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-white/[0.08] overflow-hidden bg-card/40">
            <button
              onClick={() => setOpenSection((prev) => (prev === 'Company' ? null : 'Company'))}
              className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-foreground bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                Company
              </span>
              <ChevronDown
                className={cn('h-4 w-4 transition-transform text-muted-foreground', openSection === 'Company' && 'rotate-180 text-primary')}
              />
            </button>
            {openSection === 'Company' && (
              <div className="p-2 space-y-1 bg-card/80 border-t border-border/40">
                {[...COMPANY_MENU.column1, ...COMPANY_MENU.column2].map((c) => {
                  const Icon = c.icon
                  const isActive = pathname === c.href
                  return (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={onClose}
                      className={cn(
                        'flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold transition-colors',
                        isActive
                          ? 'bg-primary/10 text-primary font-bold'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                      )}
                    >
                      <div className={cn('flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border', c.iconBg, c.iconColor)}>
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <span className="flex-1 truncate">{c.title}</span>
                      {c.badge && (
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {c.badge}
                        </span>
                      )}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          {/* Direct Navigation Links */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              href="/pricing"
              onClick={onClose}
              className={cn(
                'flex items-center justify-between p-3 rounded-2xl border text-xs font-bold transition-colors',
                pathname === '/pricing'
                  ? 'border-primary/40 bg-primary/10 text-primary'
                  : 'border-slate-200/80 dark:border-white/[0.08] text-foreground hover:bg-muted/60'
              )}
            >
              <span>Pricing</span>
              <ArrowRight className="h-3.5 w-3.5 opacity-50" />
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className={cn(
                'flex items-center justify-between p-3 rounded-2xl border text-xs font-bold transition-colors',
                pathname === '/contact'
                  ? 'border-primary/40 bg-primary/10 text-primary'
                  : 'border-slate-200/80 dark:border-white/[0.08] text-foreground hover:bg-muted/60'
              )}
            >
              <span>Contact</span>
              <ArrowRight className="h-3.5 w-3.5 opacity-50" />
            </Link>
          </div>
        </div>

        {/* Bottom CTA Area */}
        <div className="shrink-0 p-4 border-t border-border/60 space-y-2 bg-muted/20 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button asChild variant="3d-yellow" className="w-full h-11 rounded-xl font-bold">
            <Link href="/book-consultation" onClick={onClose} className="flex items-center justify-center gap-2">
              <span>Book Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <p className="text-center text-[10px] font-mono text-muted-foreground">
            contact@neelstack.com · Response &lt;24h
          </p>
        </div>
      </motion.div>
    </div>
  )
}

// ─── Main Exported Header ──────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aiModalOpen, setAiModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 h-16 transition-all duration-300 flex items-center',
          scrolled
            ? 'bg-background dark:bg-[#070b14] border-b-2 border-slate-200/90 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.85),0_1px_0_rgba(255,255,255,0.08)]'
            : 'bg-background/95 dark:bg-[#070b14]/95 backdrop-blur-md border-b border-border/40'
        )}
        role="banner"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <NeelStackLogo size="md" />
          </div>

          {/* Desktop Navigation */}
          <DesktopNavbar />

          {/* Desktop Right Action Strip */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Talk AI Pill */}
            <button
              onClick={() => setAiModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-500/40 dark:border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 hover:from-cyan-500/20 hover:to-violet-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-bold transition-all cursor-pointer shadow-2xs hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400 animate-pulse" />
              <span>Talk AI</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle className="shrink-0" />

            {/* Book Consultation Button */}
            <Button
              asChild
              variant="3d-yellow"
              size="sm"
              className="rounded-xl px-4 text-xs font-extrabold shadow-sm hover:-translate-y-0.5 active:translate-y-0"
            >
              <Link href="/book-consultation">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Right Action Strip */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            {/* Mobile Talk AI Quick Trigger */}
            <button
              onClick={() => setAiModalOpen(true)}
              aria-label="Open AI Copilot"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-cyan-500/30 dark:border-cyan-400/40 bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 text-xs font-bold transition-all cursor-pointer shadow-2xs hover:bg-cyan-500/20 active:scale-95"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400 animate-pulse" />
              <span className="hidden xs:inline text-[11px]">Talk AI</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="min-h-[38px] min-w-[38px] h-9 w-9 flex items-center justify-center rounded-xl border border-slate-200/80 dark:border-white/10 bg-muted/60 text-muted-foreground hover:text-foreground active:scale-95 cursor-pointer transition-all"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            isOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
            onOpenAi={() => {
              setMobileOpen(false)
              setAiModalOpen(true)
            }}
          />
        )}
      </AnimatePresence>

      {/* AI Exploration Modal */}
      <AnimatePresence>
        {aiModalOpen && (
          <AiExplorationDrawer isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}
