'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MAIN_NAV } from '@/constants/navigation'
import { Button } from '@/components/ui/button'

// ─── Logo ─────────────────────────────────────────────────────────────────────

function NeelStackLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2.5 group', className)}
      aria-label="NeelStack Technologies — Home"
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
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="hdr-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#3b82f6" floodOpacity="0.55" />
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
          'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
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
      </button>

      {isOpen && (
        <div
          role="menu"
          className={cn(
            'absolute top-full mt-2 z-50 rounded-2xl border border-border bg-popover shadow-2xl',
            'animate-in fade-in-0 slide-in-from-top-2 duration-200',
            hasGroups ? 'w-[640px] -translate-x-1/4' : 'w-56 left-0'
          )}
        >
          {hasGroups ? (
            <div className="grid grid-cols-2 gap-0 p-4">
              {menu.groups!.map((group) => (
                <div key={group.label} className="p-2">
                  <p className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.label}
                  </p>
                  <div className="space-y-0.5">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        onClick={onClose}
                        className="flex flex-col rounded-lg px-2 py-2.5 hover:bg-muted transition-colors"
                      >
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                        {item.description && (
                          <span className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-2">
              {menu.items!.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-muted transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname()

  const prevPathname = useRef(pathname)

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      onClose()
      prevPathname.current = pathname
    }
  }, [pathname, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-40 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-card border-l border-border overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <NeelStackLogo />
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
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
          <Button asChild className="w-full">
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          className={cn('h-4 w-4 text-muted-foreground transition-transform duration-200', isOpen && 'rotate-180')}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div className="ml-3 mt-1 space-y-0.5 border-l border-border pl-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex flex-col rounded-lg px-2 py-2 hover:bg-muted transition-colors"
            >
              <span className="text-sm text-foreground">{item.label}</span>
              {item.description && (
                <span className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                  {item.description}
                </span>
              )}
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
            ? 'border-b border-border bg-background/80 backdrop-blur-xl shadow-sm'
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
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Button asChild size="sm">
              <Link href="/request-quote">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
