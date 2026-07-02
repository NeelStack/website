import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { ServiceCard } from '@/components/ui/service-card'
import { SERVICES } from '@/constants/services'

interface ServicesSectionProps {
  limit?: number
  showViewAll?: boolean
}

export function ServicesSection({ limit = 6, showViewAll = true }: ServicesSectionProps) {
  const displayedServices = SERVICES.slice(0, limit)

  return (
    <Section id="services">
      <Container>
        <SectionHeader
          badge="What we do"
          title="End-to-End Technology Services"
          description="From strategy to deployment, we offer a full spectrum of technology services to help your organization build, scale, and modernize."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {showViewAll && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
              aria-label="View all services"
            >
              View all {SERVICES.length} services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </Container>
    </Section>
  )
}
