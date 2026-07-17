import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for NeelStack — the rules and conditions governing use of our website and services.',
}

const LAST_UPDATED = 'July 3, 2026'

export default function TermsOfServicePage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Legal"
        title="Terms of Service"
        description={`Last updated: ${LAST_UPDATED}`}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}
      />

      <section className="py-16" aria-labelledby="terms-content">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10 text-muted-foreground leading-relaxed">

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website at{' '}
                <a href={SITE_CONFIG.url} className="text-primary hover:underline">{SITE_CONFIG.url}</a>{' '}
                or any services offered by NeelStack Technologies Private Limited (&quot;NeelStack&quot;, &quot;we&quot;, &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. Services</h2>
              <p>
                NeelStack provides custom software development, AI solutions, SaaS products, ERP systems, cloud engineering, and related technology services (&quot;Services&quot;). The specific scope, deliverables, and terms for any engagement are defined in separate written agreements, project proposals, or statements of work (&quot;SOW&quot;) between NeelStack and the client.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and code, is the property of NeelStack and is protected by applicable intellectual property laws.
              </p>
              <p className="mt-3">
                For client engagements, intellectual property ownership is governed by the specific agreement or SOW. Unless otherwise agreed in writing, source code and deliverables created for a client are transferred to the client upon full payment.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. Prohibited Use</h2>
              <p>You agree not to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Use the website for any unlawful purpose or in violation of applicable regulations.</li>
                <li>Attempt to gain unauthorized access to any portion of the website or its related systems.</li>
                <li>Reproduce, duplicate, or exploit any part of the website without prior written permission.</li>
                <li>Transmit harmful, offensive, or disruptive content through any contact or form submission.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Disclaimer of Warranties</h2>
              <p>
                This website and its content are provided &quot;as is&quot; without any warranties, express or implied. NeelStack does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, NeelStack shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website or our services, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. These links are provided for convenience only. NeelStack has no control over the content of those sites and accepts no responsibility for them.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">8. Privacy</h2>
              <p>
                Your use of our website is also governed by our{' '}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>,
                which is incorporated into these Terms by reference.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">9. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Gorakhpur, Uttar Pradesh, India.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">10. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after any changes constitutes your acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <address className="mt-3 not-italic space-y-1 text-sm">
                <p className="font-medium text-foreground">{SITE_CONFIG.address.line1}</p>
                <p>{SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}, {SITE_CONFIG.address.country}</p>
                <p className="mt-2">
                  Email:{' '}
                  <a href={`mailto:${SITE_CONFIG.email.general}`} className="text-primary hover:underline">
                    {SITE_CONFIG.email.general}
                  </a>
                </p>
              </address>
            </div>

          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
