'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Zap, X, PhoneCall, Sparkles, ArrowRight, MessageSquareCode } from 'lucide-react'
import { useCurrency } from '@/components/providers/currency-provider'

const ACTIONS = [
  {
    id: 'email',
    icon: Mail,
    label: 'Email Our Engineering Team',
    subtitle: 'Direct response within 1 business day',
    href: 'mailto:contact@neelstack.com?subject=Technical%20Consultation%20Inquiry',
    external: true,
    color: 'blue',
    borderClass: 'border-blue-500/30',
    bgClass: 'bg-blue-500/8 hover:bg-blue-500/15',
    textClass: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-500/15',
  },
  {
    id: 'audit',
    icon: Zap,
    label: null, // set dynamically
    subtitle: 'Performance, SEO & architecture review',
    href: '/request-quote',
    external: false,
    color: 'amber',
    borderClass: 'border-amber-500/30',
    bgClass: 'bg-amber-500/8 hover:bg-amber-500/15',
    textClass: 'text-amber-600 dark:text-amber-400',
    iconBg: 'bg-amber-500/15',
  },
  {
    id: 'call',
    icon: PhoneCall,
    label: 'Book a 20-Min Architecture Call',
    subtitle: 'Free — no obligation, direct with engineers',
    href: '/book-consultation',
    external: false,
    color: 'emerald',
    borderClass: 'border-emerald-500/30',
    bgClass: 'bg-emerald-500/8 hover:bg-emerald-500/15',
    textClass: 'text-emerald-600 dark:text-emerald-400',
    iconBg: 'bg-emerald-500/15',
  },
]

export function FloatingConversionWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const { config } = useCurrency()
  const widgetRef = useRef<HTMLDivElement>(null)

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <div ref={widgetRef} className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* Expanded Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="w-[calc(100vw-2rem)] sm:w-[340px] max-w-[340px] rounded-2xl border border-border/80 bg-card/98 dark:bg-card/98 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 pt-5 pb-4 border-b border-border/60 bg-gradient-to-b from-primary/[0.04] to-transparent">
              <div className="flex items-start justify-between">
                <div className="space-y-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-primary uppercase tracking-[0.15em]">
                    <Sparkles className="h-3 w-3" />
                    Quick Connect
                  </span>
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    How can we help you?
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors -mt-0.5 -mr-1"
                  aria-label="Close quick connect menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="p-3 space-y-1.5">
              {ACTIONS.map((action, idx) => {
                const Icon = action.icon
                const label = action.id === 'audit'
                  ? `${config.auditPriceFormatted} Full Website Audit`
                  : action.label

                const content = (
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`group flex items-center gap-3 p-3 rounded-xl border ${action.borderClass} ${action.bgClass} transition-all duration-200 cursor-pointer`}
                  >
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${action.iconBg} ${action.textClass}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-bold ${action.textClass} leading-tight`}>
                        {label}
                      </p>
                      <p className="text-[10px] text-muted-foreground leading-snug mt-0.5">
                        {action.subtitle}
                      </p>
                    </div>
                    <ArrowRight className={`h-3.5 w-3.5 shrink-0 ${action.textClass} opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200`} />
                  </motion.div>
                )

                return action.external ? (
                  <a key={action.id} href={action.href!}>
                    {content}
                  </a>
                ) : (
                  <Link key={action.id} href={action.href!} onClick={() => setIsOpen(false)}>
                    {content}
                  </Link>
                )
              })}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-border/50 bg-muted/20">
              <p className="text-[10px] text-muted-foreground/70 text-center">
                <span className="font-mono font-semibold text-foreground/60">contact@neelstack.com</span>
                {' · '}Mon–Sat, 9 AM – 7 PM IST
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white shadow-2xl shadow-indigo-500/25 transition-shadow duration-300 hover:shadow-indigo-500/40"
        aria-label="Open quick connect menu"
        aria-expanded={isOpen}
      >
        {/* Pulse indicator */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-card" />
        </span>

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquareCode className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

