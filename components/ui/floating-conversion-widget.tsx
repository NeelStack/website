'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Zap, X, PhoneCall, Sparkles, ArrowRight, Bot } from 'lucide-react'

const ACTIONS = [
  {
    id: 'consult',
    icon: Sparkles,
    label: 'Ask AI Copilot & Architecture Team',
    subtitle: 'Get instant system scoping & tech stack advisory',
    href: '/book-consultation',
    external: false,
    color: 'cyan',
    borderClass: 'border-cyan-500/40 dark:border-cyan-400/40',
    bgClass: 'bg-cyan-500/10 hover:bg-cyan-500/20',
    textClass: 'text-cyan-600 dark:text-cyan-300',
    iconBg: 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300',
  },
  {
    id: 'discovery',
    icon: PhoneCall,
    label: 'Book 20-Min Architecture Discovery',
    subtitle: 'Free — 1-on-1 strategy with engineering leadership',
    href: '/book-consultation',
    external: false,
    color: 'emerald',
    borderClass: 'border-emerald-500/40 dark:border-emerald-400/40',
    bgClass: 'bg-emerald-500/10 hover:bg-emerald-500/20',
    textClass: 'text-emerald-600 dark:text-emerald-300',
    iconBg: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300',
  },
  {
    id: 'scope',
    icon: Zap,
    label: 'Request Project Scope & NDA',
    subtitle: 'Fixed-price milestone proposal & SLA breakdown',
    href: '/request-quote',
    external: false,
    color: 'violet',
    borderClass: 'border-violet-500/40 dark:border-violet-400/40',
    bgClass: 'bg-violet-500/10 hover:bg-violet-500/20',
    textClass: 'text-violet-600 dark:text-violet-300',
    iconBg: 'bg-violet-500/20 text-violet-600 dark:text-violet-300',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Direct Engineering Desk',
    subtitle: 'Response in <24h with NDA confidentiality',
    href: 'mailto:contact@neelstack.com?subject=Enterprise%20AI%20and%20Software%20Inquiry',
    external: true,
    color: 'blue',
    borderClass: 'border-blue-500/40 dark:border-blue-400/40',
    bgClass: 'bg-blue-500/10 hover:bg-blue-500/20',
    textClass: 'text-blue-600 dark:text-blue-300',
    iconBg: 'bg-blue-500/20 text-blue-600 dark:text-blue-300',
  },
]

export function FloatingConversionWidget() {
  const [isOpen, setIsOpen] = useState(false)
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
      {/* Expanded 3D Tactile Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            className="w-[calc(100vw-2rem)] sm:w-[360px] max-w-[360px] max-h-[85dvh] flex flex-col rounded-2xl tactile-card-3d bg-card/95 dark:bg-slate-950/95 backdrop-blur-2xl overflow-hidden"
          >
            {/* 3D Header with Live AI Status */}
            <div className="shrink-0 px-5 pt-4 pb-3 border-b-2 border-border/80 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-cyan-500/40 bg-cyan-500/15 text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                    </span>
                    <span>AI COPILOT ONLINE</span>
                  </div>
                  <h3 className="text-sm font-extrabold text-foreground font-heading">
                    NeelStack Architecture Desk
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer flex h-7 w-7 items-center justify-center rounded-lg border border-border/70 text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all -mt-0.5 -mr-1 tactile-card-3d"
                  aria-label="Close copilot desk"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions List with 3D Tactile Cards */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-3 space-y-2 custom-scrollbar">
              {ACTIONS.map((action, idx) => {
                const Icon = action.icon
                const label = action.label

                const content = (
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + idx * 0.05, duration: 0.25 }}
                    className={`group flex items-center gap-3 p-3 rounded-xl border-2 ${action.borderClass} ${action.bgClass} transition-all duration-150 cursor-pointer tactile-card-3d`}
                  >
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${action.iconBg} shadow-sm group-hover:scale-105 transition-transform`}>
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
                    <ArrowRight className={`h-3.5 w-3.5 shrink-0 ${action.textClass} opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-150`} />
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
            <div className="shrink-0 px-5 py-2.5 border-t-2 border-border/70 bg-muted/30">
              <p className="text-[10px] text-muted-foreground text-center font-mono">
                <span className="font-semibold text-foreground/80">contact@neelstack.com</span>
                {' · '}Direct Engineer SLA
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Floating Copilot Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 cursor-pointer items-center justify-center rounded-2xl tactile-copilot-3d text-white select-none outline-none shadow-lg"
        aria-label="Open AI Copilot and Engineering desk"
        aria-expanded={isOpen}
      >
        {/* Live Radar Pulse Indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-cyan-500 border-2 border-black" />
        </span>

        {/* Morphing Icon */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="copilot-icon"
              initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center"
            >
              <Bot className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-200" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}
