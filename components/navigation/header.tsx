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

// ─── Nav Dropdown Component ───────────────────────────────────────────────────

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
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    onOpen()
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      onClose()
    }, 180)
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
          'relative flex cursor-pointer items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-300 select-none outline-none z-10',
          isOpen
            ? 'text-primary bg-primary/10 border border-primary/30 shadow-[0_0_20px_rgba(56,189,248,0.2)]'
            : isActive
              ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-500/10'
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{menu.label}</span>
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-300', isOpen && 'rotate-180 text-primary')}
          aria-hidden="true"
        />

        {/* Active Route Glow Point */}
        {isActive && !isOpen && (
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
        )}
      </button>

      {/* Mega Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 450, damping: 28 }}
            className={cn(
              'absolute top-full mt-2.5 z-50 rounded-2xl border border-border/80 bg-card/95 backdrop-blur-2xl shadow-2xl shadow-black/30 overflow-hidden before:absolute before:-top-6 before:inset-x-0 before:h-8 before:content-[\'\']',
              hasGroups ? 'w-[640px] -translate-x-1/4' : 'w-76 left-0'
            )}
          >
            {hasGroups ? (
              <div className="grid grid-cols-2 gap-4 p-5 bg-gradient-to-b from-card via-card to-background/60">
                {menu.groups!.map((group) => (
                  <div key={group.label} className="p-2 flex flex-col justify-start">
                    <p className="px-2 mb-3 text-[11px] font-black tracking-wider text-cyan-600 dark:text-cyan-400 uppercase border-b border-border/40 pb-2 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
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
                            className="group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all duration-200"
                          >
                            {ItemIcon && (
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-200 shadow-sm">
                                <ItemIcon className="h-4 w-4" />
                              </div>
                            )}
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
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
              <div className="p-3 space-y-1 bg-gradient-to-b from-card to-background/60">
                {menu.items!.map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                      role="menuitem"
                      onClick={onClose}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all duration-200"
                    >
                      {ItemIcon && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-200">
                          <ItemIcon className="h-4 w-4" />
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="text-[10px] text-muted-foreground mt-0.5">
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
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Centered Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-cyan-500/30 bg-card/95 p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/50 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <Sparkles className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-black text-foreground">NeelStack AI Architecture</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Explore our enterprise artificial intelligence capabilities</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
            <div className="p-4 rounded-2xl border border-border/60 bg-muted/30 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <Bot className="h-5 w-5 text-cyan-500 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-foreground">Autonomous AI Agents</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Self-reasoning agentic workflows that automate complex multi-step operations &amp; enterprise tasks.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-border/60 bg-muted/30 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="h-5 w-5 text-violet-500 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-foreground">Vector RAG Search</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Sub-second semantic knowledge search over millions of internal enterprise documents.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-border/60 bg-muted/30 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-foreground">Custom Fine-Tuned LLMs</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Domain-adapted open-source models trained on your proprietary data with strict privacy guarantees.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-border/60 bg-muted/30 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-5 w-5 text-emerald-500 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-foreground">Zero Data Leak Guarantee</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Private cloud hosting with SOC2 &amp; HIPAA readiness — your corporate data never leaves your VPC.
              </p>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/50 pt-5">
            <span className="text-xs text-muted-foreground">Ready to integrate AI into your enterprise products?</span>
            <Button asChild variant="gradient" size="sm" onClick={onClose} className="w-full sm:w-auto glow-cta">
              <Link href="/book-consultation">
                Book AI Consultation
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

// ─── Mobile Drawer Menu ───────────────────────────────────────────────────────

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-card p-6 shadow-2xl border-l border-border flex flex-col justify-between"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <NeelStackLogo size="sm" />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button onClick={onClose} className="p-2 text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <nav className="space-y-2">
            {MAIN_NAV.map((menu) => (
              <MobileNavGroup key={menu.label} label={menu.label} items={menu.items ?? menu.groups?.flatMap((g) => g.items) ?? []} onClose={onClose} />
            ))}
          </nav>
        </div>

        <div className="border-t border-border pt-4 space-y-3">
          <Button asChild variant="outline" className="w-full">
            <Link href="/contact" onClick={onClose}>Contact Us</Link>
          </Button>
          <Button asChild variant="gradient" className="w-full glow-cta">
            <Link href="/request-quote" onClick={onClose}>Get Started</Link>
          </Button>
        </div>
      </motion.div>
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
        className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-bold text-foreground rounded-xl hover:bg-muted transition-colors"
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

// ─── Header Container Component ───────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false)
  const pathname = usePathname()
  const scrollStartRef = useRef<number | null>(null)

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  const openMenuRef = useRef<string | null>(null)
  openMenuRef.current = openMenu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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
  }, [])

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
            ? 'bg-background/85 dark:bg-card/90 backdrop-blur-2xl border-b border-border/60 shadow-xl shadow-black/10 py-3'
            : 'bg-background/40 dark:bg-card/40 backdrop-blur-md border-b border-border/20 py-4'
        )}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Brand Logo - Fixed size for zero layout jump */}
          <NeelStackLogo size="md" />

          {/* Desktop Navigation — Floating Glass Control Island */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border/60 bg-slate-500/5 dark:bg-slate-400/10 backdrop-blur-md px-2.5 py-1 shadow-inner" aria-label="Main navigation">
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
          <div className="hidden lg:flex items-center gap-3">
            {/* Talk AI Trigger Badge */}
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
              <Button asChild variant="gradient" size="sm" className="glow-cta rounded-full px-5 text-xs font-extrabold">
                <Link href="/request-quote">Get Started</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setAiDrawerOpen(true)}
              className="inline-flex items-center gap-1 rounded-full border border-cyan-500/35 bg-cyan-500/10 px-3 py-1 text-[11px] font-extrabold text-cyan-600 dark:text-cyan-400"
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

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <AiExplorationDrawer isOpen={aiDrawerOpen} onClose={() => setAiDrawerOpen(false)} />
    </>
  )
}
