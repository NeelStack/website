'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Bot, Cpu, Zap, Shield, Layers } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MAIN_NAV } from '@/constants/navigation'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { CurrencySelector } from '@/components/ui/currency-selector'

// ─── Logo ─────────────────────────────────────────────────────────────────────

function NeelStackLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2.5 group', className)}
      aria-label="NeelStack — Home"
    >
      {/* Gradient N mark with glow */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="hdr-bg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#46A6FC" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <filter id="hdr-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#7C3AED" floodOpacity="0.45" />
          </filter>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#hdr-bg)" filter="url(#hdr-glow)" />
        <path
          d="M8 24V8h3.2L19.2 19.6V8H22.8V24h-3.2L11.6 12.4V24H8Z"
          fill="white"
        />
      </svg>
      {/* Split wordmark: Neel (gradient) + Stack (white) */}
      <span className="font-heading font-bold text-lg tracking-tight leading-none">
        <span className="text-gradient-brand">Neel</span>
        <span className="text-foreground">Stack</span>
      </span>
    </Link>
  )
}

// ─── Dropdown ─────────────────────────────────────────────────────────────────

function NavDropdown({
  menu,
  isOpen,
  onToggle,
  onClose,
}: {
  menu: (typeof MAIN_NAV)[0]
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const allItems = menu.items ?? menu.groups?.flatMap((g) => g.items) ?? []
  const isActive = allItems.some((item) => pathname.startsWith(item.href) && item.href !== '/')

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
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className={cn(
          'relative flex cursor-pointer items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
          isOpen
            ? 'text-foreground bg-muted'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {menu.label}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200', isOpen && 'rotate-180')}
          aria-hidden="true"
        />
        {isActive && !isOpen && (
          <span className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-primary opacity-70" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className={cn(
              'absolute top-full mt-3 z-50 rounded-2xl border border-border/80 bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden',
              hasGroups ? 'w-[860px] -translate-x-1/4' : 'w-72 left-0'
            )}
          >
            {hasGroups ? (
              <div className="grid grid-cols-3 gap-2 p-5 bg-gradient-to-b from-card to-background/50">
                {menu.groups!.map((group) => (
                  <div key={group.label} className="p-2 flex flex-col justify-start">
                    <p className="px-2 mb-2.5 text-xs font-black tracking-wider text-primary uppercase border-b border-border/40 pb-2 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
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
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
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
              <div className="p-2 space-y-1 bg-gradient-to-b from-card to-background/50">
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
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
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

// ─── AI Exploration Drawer (Techugo Outperform Feature) ────────────────────────

function AiExplorationDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-live="polite">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose} aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-full max-w-xl bg-card border-l border-border p-6 sm:p-8 overflow-y-auto shadow-2xl flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/25 uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5 animate-spin" />
              AI Innovations Lab
            </span>
            <button
              onClick={onClose}
              className="cursor-pointer rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
              Discover <span className="text-gradient-brand">AI-Driven Solutions</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Explore how custom AI agents, LLM RAG document search, and predictive workflows can automate your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="rounded-xl border border-blue-500/25 bg-muted/30 p-4 space-y-2">
              <Bot className="h-6 w-6 text-blue-500" />
              <h3 className="font-heading text-sm font-bold text-foreground">Autonomous AI Agents</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Multi-agent decision systems for automated customer service and data workflows.</p>
            </div>
            <div className="rounded-xl border border-violet-500/25 bg-muted/30 p-4 space-y-2">
              <Cpu className="h-6 w-6 text-violet-500" />
              <h3 className="font-heading text-sm font-bold text-foreground">Vector RAG Engines</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Semantic document search across millions of private company records.</p>
            </div>
            <div className="rounded-xl border border-rose-500/25 bg-muted/30 p-4 space-y-2">
              <Zap className="h-6 w-6 text-rose-500" />
              <h3 className="font-heading text-sm font-bold text-foreground">Custom AI Copilots</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Tailored AI assistants embedded directly into your web &amp; mobile apps.</p>
            </div>
            <div className="rounded-xl border border-emerald-500/25 bg-muted/30 p-4 space-y-2">
              <Shield className="h-6 w-6 text-emerald-500" />
              <h3 className="font-heading text-sm font-bold text-foreground">Enterprise Security</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">SOC2-ready, self-hosted LLM models with zero external data leaks.</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border mt-6 space-y-3">
          <Button asChild variant="gradient" className="w-full gap-2 glow-cta text-sm">
            <Link href="/book-consultation" onClick={onClose}>
              Talk To Our AI Engineers <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full text-xs" onClick={onClose}>
            <Link href="/services/ai-development">Explore All AI Services →</Link>
          </Button>
        </div>
      </div>
    </div>
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
          <NeelStackLogo />
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
        className="w-full flex items-center justify-between py-2 px-3 text-sm font-semibold text-foreground rounded-lg hover:bg-muted transition-colors"
      >
        <span>{label}</span>
        <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="pl-4 space-y-1 py-1">
          {items.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              onClick={onClose}
              className="block py-1.5 px-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleToggle = (label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label))
  }

  const handleClose = () => setOpenMenu(null)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-30 transition-all duration-300',
          scrolled
            ? 'border-b border-border/60 bg-background/85 backdrop-blur-2xl shadow-sm'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <NeelStackLogo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {MAIN_NAV.map((menu) => (
              <NavDropdown
                key={menu.label}
                menu={menu}
                isOpen={openMenu === menu.label}
                onToggle={() => handleToggle(menu.label)}
                onClose={handleClose}
              />
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Techugo-Outperform AI Trigger Button */}
            <button
              onClick={() => setAiDrawerOpen(true)}
              className="group inline-flex items-center gap-1.5 rounded-full border border-cyan-500/35 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-extrabold text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-cyan-500" />
              <span>✦ LET&apos;S TALK AI</span>
            </button>

            <ThemeToggle />
            <Button asChild variant="gradient" size="sm" className="glow-cta">
              <Link href="/request-quote">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setAiDrawerOpen(true)}
              className="inline-flex items-center gap-1 rounded-full border border-cyan-500/35 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-bold text-cyan-500"
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
