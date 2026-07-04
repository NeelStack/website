import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PRODUCTS } from '@/constants/products'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CTASection } from '@/components/ui/cta-section'
import { StatusBadge } from '@/components/ui/status-badge'
import { CheckCircle2, Globe, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: `${product.name} | Details & Roadmap`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }))
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id)
  
  if (!product) {
    notFound()
  }

  const Icon = product.icon

  return (
    <MarketingLayout>
      <PageHero
        badge={product.category}
        title={product.name}
        description={product.tagline}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: product.name },
        ]}
      />

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Product Info */}
              <div className="md:col-span-2 space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 mb-4">
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                
                <div className="flex items-center gap-3">
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Project Specifications
                  </h2>
                  <StatusBadge status={product.status} />
                </div>
                
                <p className="text-base text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {product.disclaimer && (
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-500/80 leading-relaxed font-sans">
                    {product.disclaimer}
                  </div>
                )}
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We build our proprietary software utilizing modern frontend stacks and highly optimized databases. Each feature is designed to address quantifiable workflows, avoiding bloated features or unnecessary dependencies.
                </p>

                {product.status === 'live' && (
                  <div className="pt-4">
                    <Button asChild className="gap-2">
                      <Link href={product.href} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4" />
                        Visit Live Platform
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>

              {/* Features list */}
              <div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                    Target Capabilities
                  </h3>
                  <ul className="space-y-3" aria-label="Product features highlights">
                    {product.features.map((feature) => (
                      <li key={feature.label} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feature.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Interested in custom features?"
        description="We also engineer custom features and modules based on our proprietary tech stacks for enterprise partners."
        primaryLabel="Request a Quote"
        primaryHref="/request-quote"
      />
    </MarketingLayout>
  )
}
