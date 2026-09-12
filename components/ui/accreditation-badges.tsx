import { ShieldCheck, FileCheck2, Building2, Rocket } from 'lucide-react'
import { SITE_CONFIG } from '@/constants/site'

const BADGES = [
  {
    icon: Rocket,
    label: 'Startup India',
    detail: SITE_CONFIG.accreditations.startupIndia,
  },
  {
    icon: ShieldCheck,
    label: 'MSME Registered',
    detail: SITE_CONFIG.accreditations.msme,
  },
  {
    icon: FileCheck2,
    label: 'GST Verified',
    detail: `GSTIN: ${SITE_CONFIG.accreditations.gstin}`,
  },
  {
    icon: Building2,
    label: 'MCA Registered',
    detail: SITE_CONFIG.accreditations.mca,
  },
] as const

export function AccreditationBadges() {
  return (
    <section className="py-10 border-y border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70 mb-6">
          Verified Government of India Registrations
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {BADGES.map((badge) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.label}
                className="flex items-center gap-3 rounded-xl border border-border/70 bg-card/40 dark:bg-white/[0.02] p-3.5 transition-colors hover:border-blue-500/40 dark:hover:border-cyan-500/40"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-400">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-foreground">
                    {badge.label}
                  </p>
                  <p className="text-[10px] text-muted-foreground truncate">
                    {badge.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
