import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { ProductCard } from '@/components/ui/product-card'
import { Container } from '@/components/ui/container'
import { CTASection } from '@/components/ui/cta-section'
import { PRODUCTS, LIVE_PRODUCTS, UPCOMING_PRODUCTS } from '@/constants/products'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore NeelStack proprietary products — ToolVines (live) alongside NaukariMitra, SarkariMitra, and DhruvaOS in active development.',
}

export default function ProductsPage() {
  const isGrouped = LIVE_PRODUCTS.length < 3

  const displayProducts = isGrouped
    ? [...PRODUCTS].sort((a, b) => {
        const priority: Record<string, number> = { 'live': 0, 'beta': 1, 'in-development': 2, 'coming-soon': 3 }
        return (priority[a.status] ?? 99) - (priority[b.status] ?? 99)
      })
    : LIVE_PRODUCTS

  return (
    <MarketingLayout>
      <PageHero
        badge="Our products"
        title="Software We Build and Ship"
        description="We don't just build software for clients — we prove our own technology in production. Explore our live and upcoming products."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
      />

      <section className="py-16" aria-labelledby={isGrouped ? 'products-heading' : 'live-products-heading'}>
        <Container>
          {isGrouped ? (
            <div className="mb-16">
              <h2
                id="products-heading"
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8"
              >
                Active Product Portfolio
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {displayProducts.map((product) => (
                  <ProductCard key={product.id} product={product} variant="detailed" />
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Live Products */}
              <div className="mb-16">
                <h2
                  id="live-products-heading"
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8"
                >
                  Track 1: Shipped & Scaling
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {LIVE_PRODUCTS.map((product) => (
                    <ProductCard key={product.id} product={product} variant="detailed" />
                  ))}
                </div>
              </div>

              {/* Upcoming Products */}
              <div className="mb-16">
                <h2
                  id="upcoming-products-heading"
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8"
                >
                  Track 2: Active Development Pipeline
                </h2>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {UPCOMING_PRODUCTS.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Track 3: Research Frontiers (Future Vision) */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
              Track 3: Research Frontiers (Future Vision)
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Education Technology', desc: 'Custom portals, learning companions & mock guided testing algorithms.' },
                { title: 'Healthcare Solutions', desc: 'Patient records dashboards, clinic flows & pharmacy inventory software.' },
                { title: 'Government Technology', desc: 'Scheme discoverability portals, eligibility checkers & forms helper widgets.' },
                { title: 'Developer Tools', desc: 'TypeScript configurations, code audit scrapers & CLI modules.' },
                { title: 'Business Automation', desc: 'Custom triggers, API connectors & webhook data processing pipelines.' },
                { title: 'AI Platforms', desc: 'Custom LLM agents, dynamic chat panels & retrieval pipelines.' },
                { title: 'Enterprise Software', desc: 'Database index speed tools, migration modules & sync setups.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Need a custom product built for your business?"
        description="We don't just sell off-the-shelf software. Tell us your problem and we will engineer a solution specifically for your needs."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </MarketingLayout>
  )
}
