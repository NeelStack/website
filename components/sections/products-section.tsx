import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { ProductCard } from '@/components/ui/product-card'
import { PRODUCTS, LIVE_PRODUCTS, UPCOMING_PRODUCTS } from '@/constants/products'

interface ProductsSectionProps {
  showUpcoming?: boolean
  showViewAll?: boolean
  liveLimit?: number
  upcomingLimit?: number
}

export function ProductsSection({
  showUpcoming = true,
  showViewAll = true,
  liveLimit = 4,
  upcomingLimit = 4,
}: ProductsSectionProps) {
  const isGrouped = LIVE_PRODUCTS.length < 3

  const displayProducts = isGrouped
    ? [...PRODUCTS].sort((a, b) => {
        const priority: Record<string, number> = { 'live': 0, 'beta': 1, 'in-development': 2, 'coming-soon': 3 }
        return (priority[a.status] ?? 99) - (priority[b.status] ?? 99)
      })
    : LIVE_PRODUCTS.slice(0, liveLimit)

  const upcomingProducts = UPCOMING_PRODUCTS.slice(0, upcomingLimit)

  return (
    <Section id="products" className="bg-card">
      <Container>
        <SectionHeader
          badge="Our products"
          title="Proprietary Products Built for Scale"
          description="We don't just build software for clients — we build our own products to solve real-world problems and prove our technology in production."
        />

        {isGrouped ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <>
            {/* Live Products */}
            <div className="mb-12">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                Live Products
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {displayProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* Upcoming Products */}
            {showUpcoming && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                  In Development
                </h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {upcomingProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {showViewAll && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
              aria-label="View all products"
            >
              View all products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </Container>
    </Section>
  )
}
