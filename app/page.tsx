import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { HeroSection } from '@/components/sections/hero-section'
import { StatsSection } from '@/components/sections/stats-section'
import { ServicesSection } from '@/components/sections/services-section'
import { ProductsSection } from '@/components/sections/products-section'
import { IndustriesSection } from '@/components/sections/industries-section'
import { ProcessSection } from '@/components/sections/process-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { TechnologySection } from '@/components/sections/technology-section'
import { BlogPreviewSection } from '@/components/sections/blog-preview-section'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/ui/cta-section'

export default function HomePage() {
  return (
    <MarketingLayout>
      <HeroSection />
      <StatsSection />
      <ServicesSection limit={6} showViewAll={true} />
      <ProductsSection liveLimit={4} upcomingLimit={4} />
      <IndustriesSection limit={6} />
      <ProcessSection />
      <TestimonialsSection />
      <TechnologySection />
      <BlogPreviewSection />
      <FAQSection />
      <CTASection />
    </MarketingLayout>
  )
}
