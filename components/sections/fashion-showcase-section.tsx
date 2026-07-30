'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Shirt, Sparkles, ShoppingBag, Eye, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

const fashionFeatures = [
  {
    title: 'High-Speed Custom Storefronts',
    desc: 'Sub-second page loads built on Next.js 16 and Tailwind CSS. Converting social media traffic into instant sales.',
    icon: ShoppingBag,
    color: 'text-rose-600 dark:text-rose-400',
    bgColor: 'bg-rose-500/10 border-rose-500/25',
  },
  {
    title: 'AI Virtual Try-On & Sizing',
    desc: 'Intelligent size recommendation engines helping clothing brands minimize sizing returns and increase checkout conversion.',
    icon: Sparkles,
    color: 'text-violet-600 dark:text-violet-400',
    bgColor: 'bg-violet-500/10 border-violet-500/25',
  },
  {
    title: 'Interactive 3D Lookbooks',
    desc: 'Immersive fashion collection showcases with instant shop-the-look tags and high-res zoom preview.',
    icon: Eye,
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-500/10 border-amber-500/25',
  },
  {
    title: 'Instagram & TikTok Commerce Sync',
    desc: 'Automated inventory, order fulfillment, and multi-channel social shop sync pipelines.',
    icon: Zap,
    color: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-500/10 border-cyan-500/25',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 260, damping: 20 } },
}

export function FashionShowcaseSection() {
  return (
    <Section className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-surface to-background">
      {/* Ambient gradient glow backdrop */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-40 dark:opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(225, 29, 72, 0.25) 0%, rgba(192, 38, 211, 0.2) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 bg-rose-500/10 px-3.5 py-1.5 rounded-full border border-rose-500/25">
            <Shirt className="h-3.5 w-3.5" />
            D2C Fashion &amp; Apparel Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight leading-tight">
            Elevating <span className="text-gradient-fashion">Clothing &amp; Fashion Brands</span> for Digital Commerce
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            We build high-converting ecommerce platforms, AI try-on tools, and viral social commerce integrations for modern apparel, luxury design, and apparel brands.
          </p>
        </div>

        {/* Staggered Framer Motion Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {fashionFeatures.map((feat) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between space-y-4 card-hover relative overflow-hidden"
              >
                <div className="space-y-3 relative">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${feat.bgColor} ${feat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground group-hover:text-rose-500 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 pt-2 border-t border-border/40">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>D2C Ready Architecture</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Fashion Lead CTA Banner */}
        <div className="rounded-3xl border border-rose-500/30 bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-violet-500/10 p-8 text-center space-y-5 max-w-4xl mx-auto shadow-lg backdrop-blur-sm">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
            Building a Fashion or Clothing Brand?
          </h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Get an interactive 3D storefront prototype and custom AI size engine audit built specifically for your apparel catalog.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button asChild variant="gradient" size="lg" className="glow-cta gap-2 px-8">
              <Link href="/request-quote?industry=fashion-d2c">
                Consult Fashion Engineers
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
