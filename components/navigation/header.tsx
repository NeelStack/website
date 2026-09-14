'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Bot, Cpu, Zap, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MAIN_NAV } from '@/constants/navigation'
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
  accent: 'text-primary'
}

const HEADER_THEMES: Record<string, typeof UNIFIED_THEME> = {
  Services: UNIFIED_THEME,
  Products: UNIFIED_THEME,
  Industries: UNIFIED_THEME,
  Company: UNIFIED_THEME,
}

// ─── Desktop Nav Item Component ───────────────────────────────────────────────

interface NavDropdownProps {
  menu: (typeof MAIN_NAV)[0]
  isOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onToggle: () => void
  onClose: () => void
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
  const theme = HEADER_THEMES[menu.label] || HEADER_THEMES.Services

  const allItems = menu.items ?? menu.groups?.flatMap((g) => g.items) ?? []
  const isActive = allItems.some((item) => pathname.startsWith(item.href) && item.href !== '/')
  const hasGroups = !!menu.groups

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        onClick={onToggle}
        className={cn(
          'relative flex cursor-pointer items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13.5px] font-medium tracking-normal transition-all duration-200 select-none outline-none z-10',
          isOpen
            ? 'text-foreground bg-foreground/[0.06] dark:bg-foreground/[0.1]'
            : isActive
              ? 'text-foreground font-semibold'
              : 'text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] dark:hover:bg-foreground/[0.06]'
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{menu.label}</span>
        <ChevronDown
          className={cn('h-3.5 w-3.5 opacity-60 transition-transform duration-200', isOpen && 'rotate-180 opacity-100 text-primary')}
          aria-hidden="true"
        />

        {/* Active Route Glow Point */}
        {isActive && !isOpen && (
          <span className={cn('absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full', theme.activeDot)} />
        )}
      </button>

      {/* Mega Dropdown Menu with Generous Hover Bridge */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'absolute top-full mt-2.5 z-50 rounded-2xl border border-border/60 bg-card/98 backdrop-blur-2xl shadow-xl shadow-black/10 dark:shadow-black/30 overflow-hidden',
              // Invisible hover bridge that connects the button to the menu so cursor never falls out
              'before:absolute before:-top-4 before:inset-x-0 before:h-5 before:bg-transparent before:content-[\'\']',
              hasGroups ? 'w-[640px] -translate-x-1/4' : 'w-80 left-0'
            )}
          >
            {hasGroups ? (
              <div className="grid grid-cols-2 divide-x divide-border/30 bg-card">
                {menu.groups!.map((group) => (
                  <div key={group.label} className="p-4 flex flex-col justify-start">
                    <p className="px-3 mb-2 text-[10px] font-bold tracking-[0.14em] uppercase text-muted-foreground/80 flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-primary/70" />
                      {group.label}
                    </p>
                    <div className="space-y-0.5">
                      {group.items.map((item) => {
                        const ItemIcon = item.icon
                        return (
                          <Link
                            key={item.href + item.label}
                            href={item.href}
                            role="menuitem"
                            onClick={onClose}
                            className="group flex items-start gap-3 rounded-xl px-3 py-2 transition-all duration-150 hover:bg-muted/70"
                          >
                            {ItemIcon && (
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white group-hover:shadow-sm">
                                <ItemIcon className="h-4 w-4" />
                              </div>
                            )}
                            <div className="flex flex-col">
                              <span className="text-[13px] font-medium text-foreground transition-colors group-hover:text-primary leading-tight">
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="text-[11px] text-muted-foreground mt-0.5 leading-snug line-clamp-2">
                                  {item.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-2 space-y-0.5 bg-card">
                {menu.items!.map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                      role="menuitem"
                      onClick={onClose}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2 transition-all duration-150 hover:bg-muted/70"
                    >
                      {ItemIcon && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white group-hover:shadow-sm">
                          <ItemIcon className="h-4 w-4" />
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-[13px] font-medium text-foreground transition-colors group-hover:text-primary leading-tight">
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="text-[11px] text-muted-foreground mt-0.5">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Centered Talk AI Capability Modal ───────────────────────────────────────

function AiExplorationDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
          <Button asChild variant="gradient" size="sm" onClick={onClose} className="w-full sm:w-auto glow-cta">
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

  // Close on route change
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

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
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 py-4 space-y-4 custom-scrollbar">
          {/* Interactive Talk AI Card */}
          <button
            type="button"
            onClick={onOpenAiDrawer}
            className="w-full text-left p-3.5 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent hover:border-cyan-400/50 hover:from-cyan-500/15 transition-all group relative overflow-hidden cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                    ✦ Talk AI Architecture
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400">Modal</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground">Explore autonomous agents, RAG &amp; models</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-cyan-500 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </button>

          {/* Main Navigation Accordions */}
          <nav className="space-y-2">
            {MAIN_NAV.map((menu, idx) => (
              <MobileNavGroup
                key={menu.label}
                menu={menu}
                onClose={onClose}
                defaultOpen={idx === 0}
              />
            ))}
          </nav>

          {/* Direct Shortcuts Grid */}
          <div className="pt-2 border-t border-border/50">
            <p className="px-2 mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Direct Shortcuts
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/blog"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/70 text-xs font-medium text-foreground transition-colors flex items-center justify-between"
              >
                <span>Engineering Blog</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </Link>
              <Link
                href="/roadmap"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/70 text-xs font-medium text-foreground transition-colors flex items-center justify-between"
              >
                <span>Product Roadmap</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </Link>
              <Link
                href="/case-studies"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/70 text-xs font-medium text-foreground transition-colors flex items-center justify-between"
              >
                <span>Case Studies</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </Link>
              <Link
                href="/whitepapers"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/70 text-xs font-medium text-foreground transition-colors flex items-center justify-between"
              >
                <span>Whitepapers</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </Link>
            </div>
          </div>

          {/* Trust strip */}
          <div className="p-3 rounded-xl border border-border/40 bg-card/40 text-center">
            <p className="text-[10px] text-muted-foreground font-mono">
              DPIIT Recognized • MCA Verified • 100% Privacy by Design
            </p>
          </div>
        </div>

        {/* 3. STICKY BOTTOM ACTION FOOTER */}
        <div className="shrink-0 px-5 py-4 border-t border-border/60 bg-card/90 dark:bg-card/95 backdrop-blur-md space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <Button asChild variant="outline" className="w-full rounded-xl h-10 text-xs font-semibold">
              <Link href="/contact" onClick={onClose}>Contact Us</Link>
            </Button>
            <Button asChild variant="gradient" className="w-full rounded-xl h-10 text-xs font-semibold shadow-lg shadow-blue-500/20">
              <Link href="/request-quote" onClick={onClose}>Get Started</Link>
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
  menu: (typeof MAIN_NAV)[0]
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
      {MAIN_NAV.map((menu, idx) => (
        <div
          key={menu.label}
          className="relative"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                layoutId="nav-hover-pill-bg"
                className={cn("absolute inset-0 rounded-full z-0 pointer-events-none", pillClass)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10">
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
          </div>
        </div>
      ))}
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
      setScrolled(window.scrollY > 20)
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

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-30 transition-all duration-300',
          scrolled
            ? 'bg-background/90 dark:bg-card/90 backdrop-blur-xl border-b border-border/50 shadow-sm py-2.5'
            : 'bg-background/40 dark:bg-card/40 backdrop-blur-md border-b border-transparent py-3.5'
        )}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Brand Logo - Fixed size for zero layout jump */}
          <NeelStackLogo size="md" />

          {/* Desktop Navigation — Seamless Floating Navigation */}
          <DesktopNavbar
            openMenu={openMenu}
            onOpenMenu={(label) => setOpenMenu(label)}
            onCloseMenu={() => setOpenMenu(null)}
          />

          {/* Desktop Right Action Cluster */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Talk AI Trigger Badge */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAiDrawerOpen(true)}
              className="group inline-flex items-center gap-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 hover:bg-cyan-500/20 px-3.5 py-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:border-cyan-400/50 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-500 group-hover:rotate-12 transition-transform duration-200" />
              <span>✦ TALK AI</span>
            </motion.button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Primary CTA */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }}>
              <Button asChild variant="gradient" size="sm" className="rounded-full px-5 text-xs font-semibold shadow-md shadow-blue-500/15 hover:shadow-blue-500/25 transition-shadow">
                <Link href="/request-quote">Get Started</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setAiDrawerOpen(true)}
              className="inline-flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-600 dark:text-cyan-400"
            >
              <Sparkles className="h-3 w-3 animate-pulse text-cyan-400" />
              AI
            </motion.button>
            <ThemeToggle />
            <button
              className="cursor-pointer rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
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
            onClose={() => setMobileOpen(false)}
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
