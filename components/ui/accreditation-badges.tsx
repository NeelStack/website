import { ShieldCheck, FileCheck2, Building2, Rocket, Globe, DollarSign, Clock, Lock } from 'lucide-react'
import { SITE_CONFIG } from '@/constants/site'

const GLOBAL_DELIVERY_PILLARS = [
  {
    icon: Globe,
    title: 'Serving Worldwide',
    detail: 'Clients in US, UK, UAE, EU & India',
    badge: 'EST · GMT · GST · IST',
  },
  {
    icon: DollarSign,
    title: 'Multi-Currency Contracts',
    detail: 'USD ($), EUR (€), GBP (£), AED, INR (₹)',
    badge: 'Direct Wire & Stripe',
  },
  {
    icon: Clock,
    title: 'Timezone Aligned',
    detail: 'Dedicated overlap & daily standups',
    badge: '1-Day Response SLA',
  },
  {
    icon: Lock,
    title: 'International IP Protection',
    detail: 'Full IP assignment & strict NDAs',
    badge: 'Common Law Contracts',
  },
] as const

const BADGES = [
  {
    icon: Rocket,
    label: 'Startup India Recognized',
    detail: SITE_CONFIG.accreditations.startupIndia,
  },
  {
    icon: Building2,
    label: 'MCA Registered Entity',
    detail: `CIN: ${SITE_CONFIG.accreditations.cin}`,
  },
  {
    icon: FileCheck2,
    label: 'GST Verified Corporate',
    detail: `GSTIN: ${SITE_CONFIG.accreditations.gstin}`,
  },
  {
    icon: ShieldCheck,
    label: 'MSME Registered Enterprise',
    detail: SITE_CONFIG.accreditations.msme,
  },
] as const

export function AccreditationBadges() {
  return (
    <section className="py-8 sm:py-12 border-y border-border/40 bg-card/20 backdrop-blur-sm relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Row 1: Global Delivery Capabilities */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-5 text-center sm:text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Global Enterprise Delivery
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Engineered in India &bull; Deployed Globally
              </h3>
            </div>
            <span className="text-xs text-muted-foreground bg-muted/80 px-3 py-1 rounded-full font-mono border border-border/60">
              Active across 4 Global Timezones
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GLOBAL_DELIVERY_PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-border/70 bg-card dark:bg-[#0b1329] p-4 transition-all duration-200 hover:border-primary/40 hover:shadow-md flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[9px] font-mono font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground">{pillar.title}</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">{pillar.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border/40" />

        {/* Row 2: Statutory Accreditations */}
        <div>
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70 mb-4">
            Statutory Corporate Governance &amp; Registrations
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {BADGES.map((badge) => {
              const Icon = badge.icon
              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-muted/30 dark:bg-white/[0.02] p-3 transition-colors hover:border-blue-500/30"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-400">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-foreground truncate">
                      {badge.label}
                    </p>
                    <p className="text-[9px] text-muted-foreground truncate font-mono">
                      {badge.detail}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
