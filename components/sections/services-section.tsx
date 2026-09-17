import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { ServiceCard } from '@/components/ui/service-card'
import { SERVICES } from '@/constants/services'
import { Button } from '@/components/ui/button'

interface ServicesSectionProps {
  limit?: number
  showViewAll?: boolean
  variant?: 'default' | 'compact' | 'horizontal' | 'detailed'
}

export function ServicesSection({
  limit = 6,
  showViewAll = true,
  variant = 'detailed',
}: ServicesSectionProps) {
  const displayedServices = SERVICES.slice(0, limit)

  return (
    <Section id="services">
      <Container className="space-y-10">
        <SectionHeader
          badge="11 Core Disciplines"
          title="End-to-End Engineering & AI Services"
          description="From strategy to deployment, we offer a full spectrum of technology services engineered for high performance, zero downtime, and complete source code ownership."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant={variant} />
          ))}
        </div>

        {showViewAll && (
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="3d-primary" size="lg" className="rounded-xl font-bold">
              <Link href="/services" className="gap-2 flex items-center">
                Explore All {SERVICES.length} Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="3d-secondary" size="lg" className="rounded-xl font-bold">
              <Link href="/book-consultation" className="gap-2 flex items-center">
                Book Architecture Call <Sparkles className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </Container>
    </Section>
  )
}
