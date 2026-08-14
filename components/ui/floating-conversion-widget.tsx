'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Zap, X, PhoneCall, Sparkles, ArrowRight, MessageSquareCode } from 'lucide-react'
import { useCurrency } from '@/components/providers/currency-provider'

export function FloatingConversionWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const { config } = useCurrency()

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* Expanded Quick Action Popover with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="w-80 rounded-2xl border border-border bg-card/95 dark:bg-card/95 p-5 shadow-2xl space-y-4 relative backdrop-blur-md"
          >
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wide">
                <Sparkles className="h-3.5 w-3.5" />
                Quick Connect &amp; Audit
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Close widget"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Need a subsecond website audit or technical architecture brief for your software project?
            </p>

            <div className="space-y-2">
              {/* Direct Email Consultation */}
              <a
                href="mailto:contact@neelstack.com?subject=Technical%20Consultation%20Inquiry"
                className="flex items-center justify-between p-3 rounded-xl border border-blue-500/40 dark:border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold text-xs transition-colors shadow-sm dark:shadow-none"
              >
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Senior Architect
                </span>
                <ArrowRight className="h-3.5 w-3.5 opacity-70" />
              </a>

              {/* Location-Synchronized Audit Trigger */}
              <Link
                href="/request-quote"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl border border-amber-500/40 dark:border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 font-semibold text-xs transition-colors shadow-sm dark:shadow-none"
              >
                <span className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  {config.auditPriceFormatted} Full Website Audit
                </span>
                <ArrowRight className="h-3.5 w-3.5 opacity-70" />
              </Link>

              {/* Free 20-Min Brief */}
              <Link
                href="/book-consultation"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl border border-emerald-500/40 dark:border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-xs transition-colors shadow-sm dark:shadow-none"
              >
                <span className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4" />
                  Book 20-Min Architecture Call
                </span>
                <ArrowRight className="h-3.5 w-3.5 opacity-70" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button with Framer Motion hover scale */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-13 w-13 cursor-pointer items-center justify-center rounded-full bg-gradient-button text-white shadow-2xl glow-cta transition-shadow duration-300"
        aria-label="Open quick connect menu"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
        </span>
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquareCode className="h-6 w-6 group-hover:rotate-12 transition-transform duration-200" />
        )}
      </motion.button>
    </div>
  )
}
