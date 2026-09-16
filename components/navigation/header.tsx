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
  GraduationCap,
  Wrench,
  FileText,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { MAIN_NAV } from '@/constants/navigation'
import type { NavMenu } from '@/types'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { NeelStackLogo } from '@/components/ui/logo'

// ─── Header Color Theme Configuration ─────────────────────────────────────────

const UNIFIED_THEME = {
  active: 'text-foreground font-semibold',
  hoverText: 'group-hover:text-primary',
  hoverBg: 'hover:bg-muted/70',
  border: 'border-transparent',
  activeDot: 'bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:shadow-[0_0_8px_rgba(6,182,212,0.5)]',
  iconBg: 'bg-primary/10 text-primary',
  iconText: 'text-primary',
  text: 'text-primary',
  accent: 'text-primary',
}

const HEADER_THEMES: Record<string, typeof UNIFIED_THEME> = {
  Services: UNIFIED_THEME,
  Products: UNIFIED_THEME,
  Company: UNIFIED_THEME,
}

// ─── Desktop Dropdown Nav Item ───────────────────────────────────────────────

interface NavDropdownProps {
  menu: NavMenu
  isOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onToggle: () => void
  onClose: () => void
}

const ITEM_BADGES: Record<string, string> = {
  'DhruvaOS (School OS)': 'Oct 2026',
  'ToolVines (Live Platform)': '320+ WASM',
  'AI Company OS': 'Multi-Agent',
  'Strategic Whitepaper': 'v1.0',
  'Careers (Talent Registry)': 'Hiring',
  'AI Engineering & Agents': 'MCP & RAG',
}

const SPOTLIGHT_CARDS: Record<
  string,
  {
    href: string
    icon: typeof Sparkles
    iconColor: string
    iconBg: string
    iconBorder: string
    title: string
    desc: string
    badge?: string
    accentBorder: string
    accentBg: string
  }
> = {
  Services: {
    href: '/book-consultation',
    icon: Sparkles,
    iconColor: 'text-cyan-500 dark:text-cyan-400',
    iconBg: 'bg-cyan-500/15',
    iconBorder: 'border-cyan-500/30',
    title: 'Custom AI Architecture',
    desc: 'Autonomous agent swarms & sub-second search pipelines.',
    badge: 'Enterprise',
    accentBorder: 'border-cyan-500/30 hover:border-cyan-400/60',
    accentBg: 'bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent hover:from-cyan-500/15',
  },
  Products: {
    href: '/products/dhruvaos',
    icon: Zap,
    iconColor: 'text-amber-500 dark:text-amber-400',
    iconBg: 'bg-amber-500/15',
    iconBorder: 'border-amber-500/30',
    title: 'DhruvaOS • Launching 2 Oct 2026',
    desc: 'Unified school operating system for institutions.',
    badge: 'Flagship',
    accentBorder: 'border-amber-500/30 hover:border-amber-400/60',
    accentBg: 'bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-transparent hover:from-amber-500/15',
  },
  Company: {
    href: '/whitepapers/ai-company-operating-system',
    icon: FileText,
    iconColor: 'text-violet-500 dark:text-violet-400',
    iconBg: 'bg-violet-500/15',
    iconBorder: 'border-violet-500/30',
    title: 'Strategic Whitepaper v1.0',
    desc: 'The AI Company Operating System architectural thesis.',
    badge: 'Published',
    accentBorder: 'border-violet-500/30 hover:border-violet-400/60',
    accentBg: 'bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-transparent hover:from-violet-500/15',
  },
}

const MENU_FOOTERS: Record<
  string,
  {
    trust: string
    trustDot: string
    ctaText: string
    ctaHref: string
  }
> = {
  Services: {
    trust: 'Sub-Second Edge SSR • WASM Powered',
    trustDot: 'bg-emerald-500',
    ctaText: 'Book AI Consultation',
    ctaHref: '/book-consultation',
  },
  Products: {
    trust: '3 Flagship Platforms • 320+ Live Utilities',
    trustDot: 'bg-cyan-500',
    ctaText: 'Explore All Products',
    ctaHref: '/products',
  },
  Company: {
    trust: 'Startup India (DIPP278202) • MCA Verified',
    trustDot: 'bg-amber-500',
    ctaText: 'Meet Leadership Team',
    ctaHref: '/about#leadership',
  },
}

function DropdownItem({
  item,
  pathname,
  onClose,
}: {
  item: {
    label: string
    href: string
    description?: string
    icon?: any
    isExternal?: boolean
  }
  pathname: string
  onClose: () => void
}) {
  const ItemIcon = item.icon
  const isItemActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/')
  const isExternal = !!item.isExternal
  const badge = ITEM_BADGES[item.label]

  const linkContent = (
    <>
      {ItemIcon && (
        <div
          className={cn(
            'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 mt-0.5',
            isItemActive
              ? 'bg-primary text-white border-primary shadow-sm'
              : 'bg-primary/10 border-primary/20 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] group-hover:scale-105'
          )}
        >
          <ItemIcon className="h-3.5 w-3.5" />
        </div>
      )}
      <div className="flex flex-col min-w-0 flex-1">
        <div className="flex items-center justify-between gap-1">
          <span className="text-[12px] font-bold text-foreground transition-colors group-hover:text-primary leading-tight truncate">
            {item.label}
          </span>
          {badge && (
            <span className="font-mono text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 shrink-0">
              {badge}
            </span>
          )}
          {isExternal ? (
            <ExternalLink className="h-2.5 w-2.5 text-muted-foreground opacity-60 group-hover:opacity-100 shrink-0" />
          ) : (
            <ArrowRight className="h-3 w-3 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 shrink-0" />
          )}
        </div>
        {item.description && (
          <span className="text-[10px] text-muted-foreground mt-0.5 leading-snug line-clamp-1 group-hover:text-foreground/80 transition-colors">
            {item.description}
          </span>
        )}
      </div>
    </>
  )

  if (isExternal) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        role="menuitem"
        onClick={onClose}
        className="group flex items-start gap-2.5 rounded-xl px-2.5 py-1.5 border border-transparent hover:border-border/60 hover:bg-muted/70 hover:shadow-sm transition-all duration-150"
      >
        {linkContent}
      </a>
    )
  }

  return (
    <Link
      href={item.href}
      role="menuitem"
      onClick={onClose}
      className={cn(
        'group flex items-start gap-2.5 rounded-xl px-2.5 py-1.5 border transition-all duration-150',
        isItemActive
          ? 'bg-primary/10 border-primary/30 text-primary font-semibold'
          : 'border-transparent hover:border-border/60 hover:bg-muted/70 hover:shadow-sm'
      )}
    >
      {linkContent}
    </Link>
  )
}

function NavDropdown({
  menu,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onToggle,
  onClose,
}: NavDropdownProps) {
  const pathname = usePathname()
  const theme = HEADER_THEMES[menu.label] || UNIFIED_THEME

  const allItems = menu.items ?? menu.groups?.flatMap((g) => g.items) ?? []
  const isActive = allItems.some((item) => pathname.startsWith(item.href) && item.href !== '/')

  // Balanced 2-column Mega Menu alignment
  const dropdownAlignment =
    menu.label === 'Company'
      ? 'right-0'
      : menu.label === 'Products'
        ? 'left-0 xl:-left-16'
        : 'left-0'
  const dropdownWidth = 'w-[560px] sm:w-[580px]'

  const spotlight = SPOTLIGHT_CARDS[menu.label]
  const footerInfo = MENU_FOOTERS[menu.label]

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        onClick={onToggle}
        className={cn(
          'relative flex cursor-pointer items-center gap-1.5 px-3 py-1.5 rounded-full text-[13.5px] font-medium tracking-normal transition-all duration-200 select-none outline-none z-10 whitespace-nowrap',
          isOpen
            ? 'text-primary font-bold bg-primary/10 border border-primary/25 shadow-sm'
            : isActive
              ? 'text-foreground font-semibold'
              : 'text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] dark:hover:bg-foreground/[0.06]'
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{menu.label}</span>
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 opacity-60 transition-transform duration-200',
            isOpen && 'rotate-180 opacity-100 text-primary'
          )}
          aria-hidden="true"
        />

        {/* Active Route Glow Point */}
        {isActive && !isOpen && (
          <span
            className={cn(
              'absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full',
              theme.activeDot
            )}
          />
        )}
      </button>

      {/* Sleek 2-Column Mega-Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'absolute top-full mt-2 z-50 rounded-2xl border-2 border-border/80 dark:border-cyan-500/30 bg-card/98 dark:bg-[#090e1a]/98 backdrop-blur-2xl shadow-[0_16px_48px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_25px_rgba(6,182,212,0.18)] overflow-hidden max-h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar',
              'before:absolute before:-top-3 before:inset-x-0 before:h-4 before:bg-transparent before:content-[\'\']',
              dropdownAlignment,
              dropdownWidth
            )}
          >
            {menu.groups && menu.groups.length >= 2 ? (
              <div className="grid grid-cols-2 gap-3 p-3 sm:p-3.5">
                {/* Column 1: Primary Group */}
                <div className="space-y-1">
                  <p className="px-2 pb-1 text-[10px] font-mono font-bold tracking-wider uppercase text-muted-foreground/80 flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {menu.groups[0].label}
                  </p>
                  <div className="space-y-0.5">
                    {menu.groups[0].items.map((item) => (
                      <DropdownItem
                        key={item.href + item.label}
                        item={item}
                        pathname={pathname}
                        onClose={onClose}
                      />
                    ))}
                  </div>
                </div>

                {/* Column 2: Secondary Group + Spotlight Banner */}
                <div className="space-y-1 flex flex-col justify-between">
                  <div>
                    <p className="px-2 pb-1 text-[10px] font-mono font-bold tracking-wider uppercase text-muted-foreground/80 flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-cyan-500" />
                      {menu.groups[1].label}
                    </p>
                    <div className="space-y-0.5">
                      {menu.groups[1].items.map((item) => (
                        <DropdownItem
                          key={item.href + item.label}
                          item={item}
                          pathname={pathname}
                          onClose={onClose}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Spotlight Quick Action Card */}
                  {spotlight && (
                    <Link
                      href={spotlight.href}
                      onClick={onClose}
                      className={cn(
                        'group flex items-center justify-between p-2.5 rounded-xl border transition-all duration-200 mt-2',
                        spotlight.accentBorder,
                        spotlight.accentBg
                      )}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div
                          className={cn(
                            'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                            spotlight.iconBg,
                            spotlight.iconBorder,
                            spotlight.iconColor
                          )}
                        >
                          <spotlight.icon className="h-3.5 w-3.5 animate-pulse" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11.5px] font-bold text-foreground group-hover:text-primary transition-colors leading-tight truncate flex items-center gap-1">
                            {spotlight.title}
                          </p>
                          <p className="text-[10px] text-muted-foreground leading-tight truncate mt-0.5">
                            {spotlight.desc}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-primary group-hover:translate-x-1 transition-transform shrink-0 ml-1" />
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-3 space-y-0.5">
                {allItems.map((item) => (
                  <DropdownItem
                    key={item.href + item.label}
                    item={item}
                    pathname={pathname}
                    onClose={onClose}
                  />
                ))}
              </div>
            )}

            {/* Bottom Continuity Footer */}
            {footerInfo && (
              <div className="px-4 py-2 bg-muted/40 dark:bg-card/60 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="text-[11px] text-muted-foreground flex items-center gap-1.5 font-medium">
                  <span className={cn('h-1.5 w-1.5 rounded-full', footerInfo.trustDot)} />
                  {footerInfo.trust}
                </span>
                <Link
                  href={footerInfo.ctaHref}
                  onClick={onClose}
                  className="font-bold text-primary hover:underline flex items-center gap-1 text-[11px] transition-colors"
                >
                  {footerInfo.ctaText} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Desktop Primary Direct Link Item ─────────────────────────────────────────

function NavDirectLink({
  menu,
  onHover,
  onLeave,
}: {
  menu: NavMenu
  onHover: () => void
  onLeave: () => void
}) {
  const pathname = usePathname()
  const isExternal = !!menu.isExternal
  const href = menu.href || '/'
  const isActive = !isExternal && (pathname === href || (pathname.startsWith(href) && href !== '/'))

  const linkContent = (
    <span
      className={cn(
        'relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13.5px] font-medium tracking-normal transition-all duration-200 select-none outline-none z-10',
        isActive
          ? 'text-foreground font-semibold'
          : 'text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] dark:hover:bg-foreground/[0.06]'
      )}
    >
      <span>{menu.label}</span>

      {/* Monospace Badge */}
      {menu.badge && (
        <span className="font-mono text-[9px] font-bold text-primary dark:text-cyan-400 bg-primary/10 dark:bg-cyan-500/10 px-1.5 py-0.5 rounded border border-primary/20 dark:border-cyan-500/25 ml-0.5 tracking-tight">
          {menu.badge}
        </span>
      )}

      {isExternal && (
        <ExternalLink className="h-3 w-3 text-muted-foreground opacity-70" aria-hidden="true" />
      )}

      {/* Active Route Glow Point */}
      {isActive && (
        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
      )}
    </span>
  )

  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave} className="relative">
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          {linkContent}
        </a>
      ) : (
        <Link href={href} className="inline-block">
          {linkContent}
        </Link>
      )}
    </div>
  )
}

// ─── Centered Talk AI Capability Modal ───────────────────────────────────────

function AiExplorationDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
      />

      {/* Centered Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
        className="relative w-full max-w-2xl max-h-[90dvh] overflow-hidden rounded-3xl border border-cyan-500/30 bg-card/98 p-5 sm:p-7 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl z-10 flex flex-col justify-between"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/50 pb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] shrink-0">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-black text-foreground">NeelStack AI Architecture</h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">Enterprise artificial intelligence systems &amp; multi-agent infrastructure</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close AI Architecture Modal"
            className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Capabilities Grid */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar py-4 my-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl border border-border/60 bg-muted/30 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-3 mb-1.5">
                <Bot className="h-5 w-5 text-cyan-500 group-hover:scale-110 transition-transform shrink-0" />
                <h4 className="text-sm font-bold text-foreground">Autonomous AI Agents</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Self-reasoning agentic workflows orchestrating complex multi-step operations via Model Context Protocol (MCP).
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-border/60 bg-muted/30 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-3 mb-1.5">
                <Cpu className="h-5 w-5 text-violet-500 group-hover:scale-110 transition-transform shrink-0" />
                <h4 className="text-sm font-bold text-foreground">Vector RAG Search</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Sub-second semantic knowledge search over millions of internal enterprise documents using pgvector &amp; hybrid indexing.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-border/60 bg-muted/30 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-3 mb-1.5">
                <Zap className="h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform shrink-0" />
                <h4 className="text-sm font-bold text-foreground">Custom Fine-Tuned LLMs</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Domain-adapted open-source models trained on your proprietary data with strict privacy guarantees.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-border/60 bg-muted/30 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-3 mb-1.5">
                <Shield className="h-5 w-5 text-emerald-500 group-hover:scale-110 transition-transform shrink-0" />
                <h4 className="text-sm font-bold text-foreground">Data Privacy by Design</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Client-side processing, encrypted pipelines, and strict tenant isolation — zero third-party telemetry leaks.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border/50 pt-4 shrink-0">
          <span className="text-xs text-muted-foreground text-center sm:text-left">Ready to integrate AI into your enterprise products?</span>
          <Button asChild variant="3d-yellow" size="sm" onClick={onClose} className="w-full sm:w-auto">
            <Link href="/book-consultation">
              Book AI Consultation
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

// ─── Mobile Drawer Menu ───────────────────────────────────────────────────────

function MobileMenu({
  isOpen,
  onClose,
  onOpenAiDrawer,
}: {
  isOpen: boolean
  onClose: () => void
  onOpenAiDrawer: () => void
}) {
  const pathname = usePathname()

  // Lock body scroll on mount/open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
      />

      {/* Sliding Drawer Container */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 32, stiffness: 350 }}
        className="fixed inset-y-0 right-0 w-full max-w-[360px] sm:max-w-[400px] h-[100dvh] max-h-[100dvh] bg-card/98 dark:bg-card/95 backdrop-blur-2xl border-l border-border/80 dark:border-border/60 shadow-2xl flex flex-col justify-between overflow-hidden z-10"
      >
        {/* 1. STICKY TOP HEADER */}
        <div className="shrink-0 px-5 py-4 border-b border-border/60 flex items-center justify-between bg-card/80 dark:bg-card/90 backdrop-blur-md">
          <NeelStackLogo size="sm" />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="h-9 w-9 flex items-center justify-center rounded-xl bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground active:scale-95 transition-all cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 2. SCROLLABLE MIDDLE NAVIGATION BODY */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 py-4 space-y-3 custom-scrollbar">
          {/* Interactive Talk AI Card — 3D Tactile */}
          <button
            type="button"
            onClick={onOpenAiDrawer}
            className="w-full text-left p-3.5 rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-transparent hover:border-cyan-400 hover:from-cyan-500/20 tactile-card-3d transition-all group relative overflow-hidden cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                    ✦ Talk AI Architecture
                    <span className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400">Modal</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground">Explore autonomous agents, RAG &amp; models</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-cyan-500 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </button>

          {/* Main Navigation Items (Direct Links + Accordions) */}
          <nav className="space-y-2">
            {MAIN_NAV.map((menu, idx) => {
              const hasSubItems = !!(menu.groups || menu.items)
              const isDirectLink = !hasSubItems && !!menu.href

              if (isDirectLink) {
                const isExternal = !!menu.isExternal
                const isActive = !isExternal && (pathname === menu.href || (pathname.startsWith(menu.href!) && menu.href !== '/'))

                const content = (
                  <div
                    className={cn(
                      'flex items-center justify-between p-3 rounded-2xl border-2 transition-all text-sm font-bold tactile-card-3d',
                      isActive
                        ? 'border-primary/60 bg-primary/10 text-primary'
                        : 'border-border/70 bg-card/60 text-foreground hover:bg-muted/70 hover:border-primary/40'
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span>{menu.label}</span>
                      {menu.badge && (
                        <span className="font-mono text-[9px] font-bold text-primary dark:text-cyan-400 bg-primary/10 dark:bg-cyan-500/10 px-1.5 py-0.5 rounded border border-primary/20 dark:border-cyan-500/25">
                          {menu.badge}
                        </span>
                      )}
                    </div>
                    {isExternal ? (
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                )

                return isExternal ? (
                  <a
                    key={menu.label}
                    href={menu.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    key={menu.label}
                    href={menu.href!}
                    onClick={onClose}
                    className="block"
                  >
                    {content}
                  </Link>
                )
              }

              return (
                <MobileNavGroup
                  key={menu.label}
                  menu={menu}
                  onClose={onClose}
                  defaultOpen={idx === 0}
                />
              )
            })}
          </nav>

          {/* Direct Shortcuts Grid */}
          <div className="pt-2 border-t border-border/50">
            <p className="px-2 mb-2 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
              Direct Shortcuts
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/blog"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-border/70 bg-muted/40 hover:bg-muted/80 text-xs font-bold text-foreground transition-colors flex items-center justify-between tactile-card-3d"
              >
                <span>Engineering Blog</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </Link>
              <Link
                href="/roadmap"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-border/70 bg-muted/40 hover:bg-muted/80 text-xs font-bold text-foreground transition-colors flex items-center justify-between tactile-card-3d"
              >
                <span>Product Roadmap</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </Link>
              <Link
                href="/case-studies"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-border/70 bg-muted/40 hover:bg-muted/80 text-xs font-bold text-foreground transition-colors flex items-center justify-between tactile-card-3d"
              >
                <span>Case Studies</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </Link>
              <Link
                href="/whitepapers"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-border/70 bg-muted/40 hover:bg-muted/80 text-xs font-bold text-foreground transition-colors flex items-center justify-between tactile-card-3d"
              >
                <span>Whitepapers</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </Link>
            </div>
          </div>

          {/* Trust strip */}
          <div className="p-3 rounded-xl border border-border/60 bg-card/60 text-center tactile-card-3d">
            <p className="text-[10px] text-muted-foreground font-mono">
              DPIIT Recognized • MCA Verified • 100% Privacy by Design
            </p>
          </div>
        </div>

        {/* 3. STICKY BOTTOM ACTION FOOTER */}
        <div className="shrink-0 px-5 py-4 border-t border-border/60 bg-card/90 dark:bg-card/95 backdrop-blur-md space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <Button asChild variant="3d-secondary" className="w-full rounded-xl h-10 text-xs font-bold">
              <Link href="/contact" onClick={onClose}>Contact Us</Link>
            </Button>
            <Button asChild variant="3d-yellow" className="w-full rounded-xl h-10 text-xs font-bold">
              <Link href="/book-consultation" onClick={onClose}>Book Consultation</Link>
            </Button>
          </div>
          <p className="text-center text-[11px] text-muted-foreground font-mono">
            <a href="mailto:contact@neelstack.com" className="hover:text-primary transition-colors">
              contact@neelstack.com
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

function MobileNavGroup({
  menu,
  onClose,
  defaultOpen = false,
}: {
  menu: NavMenu
  onClose: () => void
  defaultOpen?: boolean
}) {
  const pathname = usePathname()
  const allItems = menu.items ?? menu.groups?.flatMap((g) => g.items) ?? []
  const isCurrentSection = allItems.some((item) => pathname.startsWith(item.href) && item.href !== '/')
  const [open, setOpen] = useState(defaultOpen || isCurrentSection)

  return (
    <div className="rounded-2xl border border-border/50 bg-card/40 overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={cn(
          'w-full flex items-center justify-between py-2.5 px-3.5 text-sm font-semibold rounded-2xl transition-all duration-200 cursor-pointer',
          open ? 'bg-muted/70 text-foreground' : 'text-foreground hover:bg-muted/40',
          isCurrentSection && !open && 'text-primary'
        )}
      >
        <span className="flex items-center gap-2">
          <span>{menu.label}</span>
          {isCurrentSection && (
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          )}
        </span>
        <ChevronDown className={cn('h-4 w-4 transition-transform duration-200 text-muted-foreground', open && 'rotate-180 text-primary')} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-2 pb-2.5 pt-1 space-y-2">
              {menu.groups ? (
                menu.groups.map((group) => (
                  <div key={group.label} className="space-y-1">
                    <p className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      {group.label}
                    </p>
                    <div className="space-y-0.5">
                      {group.items.map((item) => {
                        const Icon = item.icon
                        const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/')
                        return (
                          <Link
                            key={item.href + item.label}
                            href={item.href}
                            onClick={onClose}
                            className={cn(
                              'flex items-start gap-2.5 p-2 rounded-xl text-xs transition-colors',
                              isActive
                                ? 'bg-primary/10 text-primary font-semibold border-l-2 border-primary'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                            )}
                          >
                            {Icon && (
                              <div className={cn(
                                'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg mt-0.5',
                                isActive ? 'bg-primary text-white' : 'bg-muted text-foreground'
                              )}>
                                <Icon className="h-3.5 w-3.5" />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className={cn('text-xs leading-tight', isActive ? 'text-primary font-bold' : 'text-foreground font-medium')}>
                                {item.label}
                              </p>
                              {item.description && (
                                <p className="text-[10px] text-muted-foreground truncate mt-0.5">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <div className="space-y-0.5">
                  {menu.items?.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/')
                    return (
                      <Link
                        key={item.href + item.label}
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          'flex items-start gap-2.5 p-2 rounded-xl text-xs transition-colors',
                          isActive
                            ? 'bg-primary/10 text-primary font-semibold border-l-2 border-primary'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                        )}
                      >
                        {Icon && (
                          <div className={cn(
                            'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg mt-0.5',
                            isActive ? 'bg-primary text-white' : 'bg-muted text-foreground'
                          )}>
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className={cn('text-xs leading-tight', isActive ? 'text-primary font-bold' : 'text-foreground font-medium')}>
                            {item.label}
                          </p>
                          {item.description && (
                            <p className="text-[10px] text-muted-foreground truncate mt-0.5">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Desktop Navbar Component with Unified Centralized Debounce ────────────────

function DesktopNavbar({
  openMenu,
  onOpenMenu,
  onCloseMenu,
}: {
  openMenu: string | null
  onOpenMenu: (label: string) => void
  onCloseMenu: () => void
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clear pending timeout safely
  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }, [])

  // Schedule close with safe 220ms grace buffer for mouse traversal
  const scheduleClose = useCallback(() => {
    cancelClose()
    closeTimeoutRef.current = setTimeout(() => {
      onCloseMenu()
      setHoveredIndex(null)
    }, 220)
  }, [cancelClose, onCloseMenu])

  const handleItemEnter = useCallback((label: string, idx: number) => {
    cancelClose()
    setHoveredIndex(idx)
    onOpenMenu(label)
  }, [cancelClose, onOpenMenu])

  const handleToggle = useCallback((label: string) => {
    cancelClose()
    if (openMenu === label) {
      onCloseMenu()
    } else {
      onOpenMenu(label)
    }
  }, [cancelClose, openMenu, onCloseMenu, onOpenMenu])

  // Subtle hover highlight pill
  const pillClass = 'bg-foreground/[0.05] dark:bg-foreground/[0.08]'

  return (
    <nav
      className="hidden lg:flex items-center gap-1 relative"
      aria-label="Main navigation"
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
    >
      {MAIN_NAV.map((menu, idx) => {
        const hasSubItems = !!(menu.groups || menu.items)
        const isDirectLink = !hasSubItems && !!menu.href

        return (
          <div key={menu.label} className="relative">
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="nav-hover-pill-bg"
                  className={cn('absolute inset-0 rounded-full z-0 pointer-events-none', pillClass)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
            </AnimatePresence>

            <div className="relative z-10">
              {isDirectLink ? (
                <NavDirectLink
                  menu={menu}
                  onHover={() => {
                    cancelClose()
                    setHoveredIndex(idx)
                    onCloseMenu()
                  }}
                  onLeave={scheduleClose}
                />
              ) : (
                <NavDropdown
                  menu={menu}
                  isOpen={openMenu === menu.label}
                  onMouseEnter={() => handleItemEnter(menu.label, idx)}
                  onMouseLeave={scheduleClose}
                  onToggle={() => handleToggle(menu.label)}
                  onClose={() => {
                    cancelClose()
                    onCloseMenu()
                  }}
                />
              )}
            </div>
          </div>
        )
      })}
    </nav>
  )
}

// ─── Header Container Component ───────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false)
  const pathname = usePathname()

  // Close menus on page route changes
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  // Track scroll position for header glassmorphic density
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
      if (isScrolled) {
        setOpenMenu(null)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
        setAiDrawerOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleCloseMobile = useCallback(() => {
    setMobileOpen(false)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 h-16 transition-all duration-300 border-b flex items-center',
          scrolled
            ? 'bg-background/95 dark:bg-[#070b14]/95 backdrop-blur-2xl border-border/80 shadow-md shadow-black/5 dark:shadow-cyan-950/20'
            : 'bg-background/85 dark:bg-[#070b14]/85 backdrop-blur-md border-border/30'
        )}
        role="banner"
      >
        {/* Subtle Ambient Bottom Accent Line */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 dark:via-cyan-500/30 to-transparent pointer-events-none" />

        <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Brand Logo - Fixed size for zero layout jump */}
          <div className="shrink-0">
            <NeelStackLogo size="md" />
          </div>

          {/* Desktop Navigation — Seamless Floating Navigation */}
          <DesktopNavbar
            openMenu={openMenu}
            onOpenMenu={(label) => setOpenMenu(label)}
            onCloseMenu={() => setOpenMenu(null)}
          />

          {/* Desktop Right Action Cluster */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
            {/* Talk AI Trigger Badge — Luxury 3D Tactile Capsule */}
            <motion.button
              whileHover={{ y: -2, x: -2 }}
              whileTap={{ y: 2, x: 2 }}
              onClick={() => setAiDrawerOpen(true)}
              className="group relative inline-flex items-center gap-1.5 rounded-full border-2 border-cyan-500/50 dark:border-cyan-400/50 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-violet-500/15 hover:from-cyan-500/25 hover:via-blue-500/25 hover:to-violet-500/25 px-3 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(6,182,212,0.6)] hover:shadow-[4px_4px_0px_0px_rgba(6,182,212,0.8)] active:shadow-[1px_1px_0px_0px_rgba(6,182,212,0.8)] backdrop-blur-md transition-all duration-150 cursor-pointer overflow-hidden shrink-0"
              title="Explore NeelStack AI Architecture & Multi-Agent Systems"
            >
              {/* Live AI Status Pulse */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>

              {/* Icon */}
              <Sparkles className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />

              {/* Gradient Text */}
              <span className="font-extrabold tracking-wide bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-300 dark:via-blue-300 dark:to-violet-300 bg-clip-text text-transparent font-heading">
                Talk AI
              </span>
            </motion.button>

            {/* Theme Toggle */}
            <ThemeToggle className="shrink-0" />

            {/* Primary CTA */}
            <Button asChild variant="3d-yellow" size="sm" className="rounded-full px-3.5 text-xs font-black shadow-sm shrink-0 whitespace-nowrap">
              <Link href="/book-consultation">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => setAiDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-cyan-500/50 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 px-3 py-1 text-xs font-bold text-cyan-600 dark:text-cyan-300 shadow-[2px_2px_0px_0px_rgba(6,182,212,0.6)]"
              title="Open NeelStack AI Systems"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" />
              </span>
              <Sparkles className="h-3 w-3 text-cyan-500 dark:text-cyan-400" />
              <span className="font-extrabold font-heading">AI</span>
            </motion.button>
            <ThemeToggle />
            <button
              className="h-9 w-9 flex items-center justify-center rounded-xl border border-border/80 bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground active:scale-95 transition-all cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            isOpen={mobileOpen}
            onClose={handleCloseMobile}
            onOpenAiDrawer={() => {
              setMobileOpen(false)
              setAiDrawerOpen(true)
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {aiDrawerOpen && (
          <AiExplorationDrawer
            isOpen={aiDrawerOpen}
            onClose={() => setAiDrawerOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
