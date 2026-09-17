'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import {
  Building2,
  FileCheck2,
  Rocket,
  ShieldCheck,
  Check,
  Copy,
  ExternalLink,
  Mail,
  Scale,
  Award,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/site'

const GOVERNANCE_REGISTRATIONS = [
  {
    id: 'cin',
    label: 'Corporate Identity Number (CIN)',
    value: SITE_CONFIG.accreditations.cin,
    desc: 'Ministry of Corporate Affairs (MCA), Government of India',
    icon: Building2,
    accent: 'text-blue-500 dark:text-cyan-400',
  },
  {
    id: 'gstin',
    label: 'Goods & Services Tax (GSTIN)',
    value: SITE_CONFIG.accreditations.gstin,
    desc: 'State Jurisdiction: Uttar Pradesh (Code 09)',
    icon: FileCheck2,
    accent: 'text-violet-500 dark:text-violet-400',
  },
  {
    id: 'startupIndia',
    label: 'Startup India DPIIT Recognition',
    value: 'DIPP278202',
    desc: 'Department for Promotion of Industry and Internal Trade',
    icon: Rocket,
    accent: 'text-emerald-500 dark:text-emerald-400',
  },
  {
    id: 'msme',
    label: 'MSME Registered Enterprise',
    value: SITE_CONFIG.accreditations.msme,
    desc: 'Ministry of Micro, Small and Medium Enterprises',
    icon: ShieldCheck,
    accent: 'text-amber-500 dark:text-amber-400',
  },
]

const LEADERSHIP = [
  {
    name: 'Shyam Chaurasiya',
    role: 'Founder & Legal CEO',
    desc: 'Full-stack software architect, systems engineering, and product vision.',
  },
  {
    name: 'Neelam Chaurasiya',
    role: 'Co-founder & Business Operations',
    desc: 'Operational governance, financial oversight, and business logistics.',
  },
  {
    name: 'NeelStack AI CEO',
    role: 'Strategic AI Operating Partner',
    desc: 'Frontier multi-agent intelligence layer coordinating continuous telemetry and strategy synthesis.',
  },
]

export function CorporateGovernanceCard() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = (id: string, text: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    }
  }

  return (
    <section id="corporate-governance" className="py-8 sm:py-10 md:py-12 relative overflow-hidden bg-transparent border-t border-border/60">
      <Container className="space-y-6 sm:space-y-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/25"
          >
            <Scale className="h-3.5 w-3.5" />
            [STATUTORY CORPORATE GOVERNANCE &amp; TRANSPARENCY]
          </motion.div>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            100% Verifiable Legal &amp; Corporate Identity
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            NeelStack Solutions Private Limited operates with total corporate transparency, statutory compliance, and rigorous engineering ethics.
          </motion.p>

          <motion.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] } },
            }}
            style={{ originX: 0.5 }}
            className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mt-2"
          />
        </motion.div>

        {/* Corporate Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Statutory Registration Badges (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-card/80 dark:bg-[#0c1222]/90 backdrop-blur-xl p-6 sm:p-8 tactile-card-3d space-y-6">
            <div className="space-y-2 border-b border-border/50 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Government of India Registrations
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground">
                NeelStack Solutions Private Limited
              </h3>
              <p className="text-xs font-mono text-muted-foreground">
                Incorporated: 31 August 2026 &bull; Status: Active &amp; Verified
              </p>
            </div>

            {/* Registration list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {GOVERNANCE_REGISTRATIONS.map((item) => {
                const Icon = item.icon
                const isCopied = copiedId === item.id

                return (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl border border-border/80 bg-background/60 dark:bg-card/40 hover:border-primary/40 transition-colors flex flex-col justify-between space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-muted/60 ${item.accent}`}>
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <button
                        onClick={() => handleCopy(item.id, item.value)}
                        className="text-[10px] font-mono text-muted-foreground hover:text-foreground flex items-center gap-1 bg-muted px-2 py-0.5 rounded border border-border transition-colors cursor-pointer"
                        title="Copy Registration Number"
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-500" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" /> Copy
                          </>
                        )}
                      </button>
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold text-muted-foreground block">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs font-bold text-foreground tracking-tight select-all break-all">
                        {item.value}
                      </span>
                      <p className="text-[10px] text-muted-foreground/80 mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Direct Official Contact */}
            <div className="pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>Direct Verification Contact:</span>
                <a href="mailto:contact@neelstack.com" className="font-mono font-bold text-foreground hover:underline">
                  contact@neelstack.com
                </a>
              </div>
              <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                100% Verifiable Records
              </span>
            </div>
          </div>

          {/* Leadership & Operating Philosophy (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-card/80 dark:bg-[#0e162b]/90 backdrop-blur-xl p-6 sm:p-8 tactile-card-3d space-y-6">
            <div className="space-y-2 border-b border-border/50 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-500 dark:text-violet-400">
                Leadership Architecture
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Founders &amp; AI Operating Partner
              </h3>
              <p className="text-xs text-muted-foreground">
                High-accountability governance uniting human domain mastery with AI agent coordination.
              </p>
            </div>

            <div className="space-y-3">
              {LEADERSHIP.map((leader) => (
                <div key={leader.name} className="p-3 rounded-2xl bg-muted/30 dark:bg-card/30 border border-border/60 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-foreground">
                      {leader.name}
                    </h4>
                    <span className="text-[10px] font-mono font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                      {leader.role}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    {leader.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border/50 flex items-center justify-between">
              <Link
                href="/about#leadership"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                View Full Leadership Team →
              </Link>
              <Link
                href="/whitepapers/ai-company-operating-system"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline"
              >
                AI OS Whitepaper <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
