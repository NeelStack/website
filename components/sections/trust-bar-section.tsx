'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Bot, Cloud, ShieldCheck, Sparkles } from 'lucide-react'

const PILLARS = [
  {
    title: 'AI-Native Engine',
    subtitle: 'Agents & Vector RAG',
    desc: 'Autonomous workflows & LLMs',
    icon: Bot,
    color: 'text-cyan-500 dark:text-cyan-400',
    bgColor: 'bg-cyan-500/10 border-cyan-500/25',
    glowColor: 'hover:border-cyan-500/40 hover:shadow-[0_0_28px_rgba(6,182,212,0.2)]',
    badge: 'Low Latency',
  },
  {
    title: 'Cloud-Native Scale',
    subtitle: 'Serverless Architecture',
    desc: 'Serverless & Docker microservices',
    icon: Cloud,
    color: 'text-violet-500 dark:text-violet-400',
    bgColor: 'bg-violet-500/10 border-violet-500/25',
    glowColor: 'hover:border-violet-500/40 hover:shadow-[0_0_28px_rgba(139,92,246,0.2)]',
    badge: 'Auto-Scaling',
  },
  {
    title: 'Enterprise Security',
    subtitle: 'Auth & Encryption',
    desc: 'Role-based auth & data encryption',
    icon: ShieldCheck,
    color: 'text-emerald-500 dark:text-emerald-400',
    bgColor: 'bg-emerald-500/10 border-emerald-500/25',
    glowColor: 'hover:border-emerald-500/40 hover:shadow-[0_0_28px_rgba(16,185,129,0.2)]',
    badge: 'Encrypted by default',
  },
  {
    title: 'Product Craftsmanship',
    subtitle: 'Modern UX Standards',
    desc: 'Tailored Figma & Motion UX',
    icon: Sparkles,
    color: 'text-rose-500 dark:text-rose-400',
    bgColor: 'bg-rose-500/10 border-rose-500/25',
    glowColor: 'hover:border-rose-500/40 hover:shadow-[0_0_28px_rgba(244,63,94,0.2)]',
    badge: 'WCAG AA',
  },
]

export function TrustBarSection() {
  return (
    <section className="relative overflow-hidden py-4 sm:py-5 border-y border-border/60 bg-card/40 backdrop-blur-sm">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col gap-2.5 p-4 rounded-2xl bg-card border border-border/70 transition-all duration-200 cursor-default ${item.glowColor} relative overflow-hidden`}
              >
                {/* Card inner ambient glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.03), transparent 70%)' }}
                />

                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border ${item.bgColor} ${item.color} group-hover:scale-105 transition-transform duration-200`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className={`text-[9.5px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border ${item.bgColor} ${item.color}`}>
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xs sm:text-sm font-bold text-foreground leading-tight">
                    {item.title}
                  </h3>
                  <p className={`text-[11px] font-semibold mt-0.5 ${item.color}`}>
                    {item.subtitle}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
