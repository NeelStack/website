import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { IndustryCard } from '@/components/ui/industry-card'
import { INDUSTRIES } from '@/constants/industries'

interface IndustriesSectionProps {
  limit?: number
  showViewAll?: boolean
}

export function IndustriesSection({ limit = 6, showViewAll = true }: IndustriesSectionProps) {
  const industries = INDUSTRIES.slice(0, limit)

  return (
    <Section id="industries">
      <Container>
        <SectionHeader
          badge="Industries we serve"
          title="Built for Every Sector"
          description="From healthcare to government, retail to manufacturing — we bring deep domain expertise to deliver software that meets the unique demands of each industry."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>

        {showViewAll && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
              aria-label="View all industries"
            >
              View all industries
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </Container>
    </Section>
  )
}
