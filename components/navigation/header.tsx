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

// ─── Nav Dropdown ─────────────────────────────────────────────────────────────

function NavDropdown({
  menu,
  isOpen,
  onOpen,
  onClose,
}: {
  menu: (typeof MAIN_NAV)[0]
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  const allItems = menu.items ?? menu.groups?.flatMap((g) => g.items) ?? []
  const isActive = allItems.some((item) => pathname.startsWith(item.href) && item.href !== '/')

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    onOpen()
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      onClose()
    }, 250)
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose])

  const hasGroups = !!menu.groups

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => (isOpen ? onClose() : onOpen())}
        className={cn(
          'relative flex cursor-pointer items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-200 select-none outline-none',
          isOpen
            ? 'text-foreground bg-primary/10 border border-primary/30 shadow-[0_0_15px_rgba(70,166,252,0.15)]'
            : isActive
            ? 'text-primary bg-primary/5 font-extrabold'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted/80'
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{menu.label}</span>
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-250', isOpen && 'rotate-180 text-primary')}
          aria-hidden="true"
        />

        {/* Active Route Dot Indicator */}
        {isActive && !isOpen && (
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 450, damping: 28 }}
            className={cn(
              'absolute top-full mt-2.5 z-50 rounded-2xl border border-border/80 bg-card/95 backdrop-blur-2xl shadow-2xl shadow-black/40 overflow-hidden before:absolute before:-top-4 before:inset-x-0 before:h-5 before:content-[\'\']',
              hasGroups ? 'w-[880px] -translate-x-1/4' : 'w-76 left-0'
            )}
          >
            {hasGroups ? (
              <div className="grid grid-cols-3 gap-2 p-5 bg-gradient-to-b from-card via-card to-background/60">
                {menu.groups!.map((group) => (
                  <div key={group.label} className="p-2 flex flex-col justify-start">
                    <p className="px-2 mb-2.5 text-[11px] font-extrabold tracking-wider text-primary uppercase border-b border-border/40 pb-2 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {group.label}
                    </p>
                    <div className="space-y-1">
                      {group.items.map((item) => {
                        const ItemIcon = item.icon
                        return (
                          <Link
                            key={item.href + item.label}
                            href={item.href}
                            role="menuitem"
                            onClick={onClose}
                            className="group flex items-start gap-2.5 rounded-xl px-2.5 py-2 hover:bg-primary/10 transition-all duration-200"
                          >
                            {ItemIcon && (
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                                <ItemIcon className="h-3.5 w-3.5" />
                              </div>
                            )}
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="text-[10px] text-muted-foreground mt-0.5 leading-snug line-clamp-2">
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
              <div className="p-2.5 space-y-1 bg-gradient-to-b from-card to-background/60">
                {menu.items!.map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={onClose}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-primary/10 transition-all duration-200"
                    >
                      {ItemIcon && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                          <ItemIcon className="h-4 w-4" />
                        </div>
                      )}
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="text-[10px] text-muted-foreground truncate">
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

// ─── AI Talk Modal ────────────────────────────────────────────────────────────

const AI_CAPABILITIES = [
  {
    icon: Bot,
    label: 'Autonomous Agents',
    desc: 'Custom multi-agent pipelines that automate support, data ops, and complex business workflows 24/7.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10 border-blue-500/20',
    glow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]',
  },
  {
    icon: Cpu,
    label: 'Vector RAG Engines',
    desc: 'Semantic search across your private documents and records — accurate, fast, and fully on your infra.',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10 border-violet-500/20',
    glow: 'group-hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]',
  },
  {
    icon: Zap,
    label: 'AI Copilots & Chat',
    desc: 'Frontier LLM assistants embedded natively into your web and mobile product — context-aware and on-brand.',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10 border-rose-500/20',
    glow: 'group-hover:shadow-[0_0_20px_rgba(244,63,94,0.25)]',
  },
  {
    icon: Shield,
    label: 'Private Deployment',
    desc: 'Self-hosted models on your own cloud with zero external data egress — enterprise-grade and compliant.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    glow: 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]',
  },
]

function AiExplorationDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          aria-modal="true"
          aria-label="AI services overview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/70 backdrop-blur-xl"
            onClick={onClose}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal panel */}
          <motion.div
            className="relative w-full max-w-2xl rounded-3xl border border-border/80 bg-card/95 backdrop-blur-2xl shadow-[0_32px_80px_rgba(0,0,0,0.4)] overflow-hidden"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          >
            {/* Header gradient accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-24 rounded-full bg-cyan-400/10 blur-[48px] pointer-events-none" />

            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-border/60">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_16px_rgba(6,182,212,0.5)]">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-foreground tracking-tight">NeelStack AI Lab</p>
                  <p className="text-[10px] text-muted-foreground">AI solutions built for your business</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="cursor-pointer rounded-xl p-2 text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                aria-label="Close"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <div className="px-6 py-5 space-y-5">
              {/* Headline */}
              <div className="space-y-1.5">
                <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-foreground leading-tight">
                  What can AI do for{' '}
                  <span className="text-gradient-brand">your business?</span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We build production-grade AI — not demos. Deployed fast, integrated deeply, priced for businesses of every size.
                </p>
              </div>

              {/* Capabilities 2×2 grid */}
              <div className="grid grid-cols-2 gap-3">
                {AI_CAPABILITIES.map((cap) => {
                  const Icon = cap.icon
                  return (
                    <div
                      key={cap.label}
                      className={`group rounded-2xl border bg-card/60 p-4 space-y-2 transition-all duration-300 hover:bg-card/90 ${cap.glow} ${cap.bg}`}
                    >
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${cap.bg} border`}>
                        <Icon className={`h-4 w-4 ${cap.color}`} />
                      </div>
                      <h3 className="text-xs font-extrabold text-foreground">{cap.label}</h3>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{cap.desc}</p>
                    </div>
                  )
                })}
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-3 gap-3 rounded-2xl border border-border/60 bg-muted/30 p-3.5">
                {[
                  { stat: '40+', label: 'AI Projects Delivered' },
                  { stat: '8×', label: 'Faster than in-house' },
                  { stat: '0 leaks', label: 'Data ever exposed' },
                ].map(({ stat, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-heading text-base font-extrabold text-foreground">{stat}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <Button asChild variant="gradient" className="flex-1 gap-2 glow-cta text-sm" size="lg">
                  <Link href="/book-consultation" onClick={onClose}>
                    Talk to Our AI Team
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1 text-xs" size="lg">
                  <Link href="/services/ai-development" onClick={onClose}>
                    Explore AI Services
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden overflow-hidden" aria-live="polite">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose} aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-card border-l border-border overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <NeelStackLogo size="sm" showTagline={false} onClick={onClose} />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              className="cursor-pointer rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {MAIN_NAV.map((menu) => (
            <div key={menu.label}>
              {menu.items ? (
                <MobileNavGroup label={menu.label} items={menu.items} onClose={onClose} />
              ) : (
                <MobileNavGroup
                  label={menu.label}
                  items={menu.groups?.flatMap((g) => g.items) ?? []}
                  onClose={onClose}
                />
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-border space-y-3">
          <Button asChild variant="outline" className="w-full">
            <Link href="/contact" onClick={onClose}>Contact Us</Link>
          </Button>
          <Button asChild variant="gradient" className="w-full">
            <Link href="/request-quote" onClick={onClose}>Get a Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function MobileNavGroup({
  label,
  items,
  onClose,
}: {
  label: string
  items: Array<{ label: string; href: string; description?: string }>
  onClose: () => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-bold text-foreground rounded-lg hover:bg-muted transition-colors"
      >
        <span>{label}</span>
        <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180 text-primary')} />
      </button>
      {open && (
        <div className="pl-4 space-y-1 py-1">
          {items.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              onClick={onClose}
              className="block py-1.5 px-3 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Header Container ─────────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false)
  const pathname = usePathname()
  const scrollStartRef = useRef<number | null>(null)

  // Auto-close open menu on route change
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  // Stable ref for openMenu — lets scroll handler read latest value without re-registering
  const openMenuRef = useRef<string | null>(null)
  openMenuRef.current = openMenu

  // Scroll & ESC — registered ONCE, reads refs so no dependency array churn
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      // Only close if user scrolled >100px from where the menu was opened
      if (scrollStartRef.current !== null && openMenuRef.current !== null) {
        if (Math.abs(window.scrollY - scrollStartRef.current) > 100) {
          setOpenMenu(null)
          scrollStartRef.current = null
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  // Empty deps: register once on mount, use refs to read latest state
  }, [])

  // Memoized with useCallback so NavDropdown's useEffect([isOpen, onClose])
  // does NOT re-fire on every parent render — eliminates listener thrash lag
  const handleOpen = useCallback((label: string) => {
    scrollStartRef.current = window.scrollY
    setOpenMenu(label)
  }, [])

  const handleClose = useCallback(() => {
    scrollStartRef.current = null
    setOpenMenu(null)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-30 transition-all duration-300',
          scrolled
            ? 'bg-background/80 dark:bg-card/85 backdrop-blur-xl border-b border-border/60 shadow-xl shadow-black/5 py-3'
            : 'bg-transparent border-b border-border/20 py-4.5'
        )}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Brand Logo - Fixed size for zero layout jump */}
          <NeelStackLogo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {MAIN_NAV.map((menu) => (
              <NavDropdown
                key={menu.label}
                menu={menu}
                isOpen={openMenu === menu.label}
                onOpen={() => handleOpen(menu.label)}
                onClose={handleClose}
              />
            ))}
          </nav>

          {/* Desktop Right Action Cluster */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Techugo-Outperform AI Trigger Badge */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setAiDrawerOpen(true)}
              className="group inline-flex items-center gap-1.5 rounded-full border border-cyan-500/35 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-extrabold text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-cyan-400" />
              <span>✦ TALK AI</span>
            </motion.button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Primary CTA */}
            <motion.div whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }}>
              <Button asChild variant="gradient" size="sm" className="glow-cta rounded-full px-4 text-xs font-bold">
                <Link href="/request-quote">Get Started</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setAiDrawerOpen(true)}
              className="inline-flex items-center gap-1 rounded-full border border-cyan-500/35 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-extrabold text-cyan-500"
            >
              <Sparkles className="h-3 w-3" />
              AI
            </button>
            <button
              className="cursor-pointer rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <AiExplorationDrawer isOpen={aiDrawerOpen} onClose={() => setAiDrawerOpen(false)} />
    </>
  )
}
