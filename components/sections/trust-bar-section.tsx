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
    badge: 'AI First',
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
    badge: 'Secure by Design',
  },
  {
    title: 'Product Craftsmanship',
    subtitle: 'Modern UX Standards',
    desc: 'Tailored Figma & Motion UX',
    icon: Sparkles,
    color: 'text-rose-500 dark:text-rose-400',
    bgColor: 'bg-rose-500/10 border-rose-500/25',
    glowColor: 'hover:border-rose-500/40 hover:shadow-[0_0_28px_rgba(244,63,94,0.2)]',
    badge: 'Design System',
  },
]

export function TrustBarSection() {
  return (
    <section className="relative overflow-hidden py-14 border-b border-border/60">
      {/* Gradient blend connector from hero above */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, var(--background), transparent)',
        }}
        aria-hidden="true"
      />

      {/* Subtle section background */}
      <div className="absolute inset-0 bg-card/40 backdrop-blur-sm" aria-hidden="true" />

      {/* Faint horizontal shimmer line at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <span className="text-[10px] font-bold text-muted-foreground/70 uppercase tracking-[0.2em]">
            Engineering Architecture
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col gap-3.5 p-5 rounded-2xl bg-surface/50 border border-border/60 transition-all duration-300 cursor-default ${item.glowColor} relative overflow-hidden`}
              >
                {/* Card inner ambient glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.03), transparent 70%)' }}
                />

                <div className="flex items-center justify-between">
                  <motion.div
                    whileInView={{ scale: [0.7, 1.12, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.09 + 0.2, ease: 'easeOut' }}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border ${item.bgColor} ${item.color}`}>
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className={`text-xs font-semibold mt-0.5 ${item.color}`}>
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>

      {/* Gradient blend connector to section below */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--background), transparent)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
