import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for NeelStack Technologies — how we collect, use, and protect your personal information.',
}

const LAST_UPDATED = 'July 3, 2026'

export default function PrivacyPolicyPage() {
  return (
    <MarketingLayout>
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        description={`Last updated: ${LAST_UPDATED}`}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
      />

      <section className="py-16" aria-labelledby="privacy-content">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10 text-muted-foreground leading-relaxed">

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>
                NeelStack Technologies Pvt. Ltd. (&quot;NeelStack&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights when you visit{' '}
                <a href={SITE_CONFIG.url} className="text-primary hover:underline">{SITE_CONFIG.url}</a> or interact with our services.
              </p>
              <p className="mt-3">
                By using our website or services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p>We may collect the following categories of personal information:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">Contact information</strong> — name, email address, and company name when you fill out our contact, quote, or consultation forms.</li>
                <li><strong className="text-foreground">Usage data</strong> — pages visited, time spent on pages, browser type, and referring URLs, collected via analytics tools.</li>
                <li><strong className="text-foreground">Communication data</strong> — messages you send us via email or contact forms.</li>
                <li><strong className="text-foreground">Technical data</strong> — IP address, browser version, device type, and operating system.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Respond to your inquiries, project requests, and consultation bookings.</li>
                <li>Provide, maintain, and improve our services.</li>
                <li>Send you relevant updates or offers (only with your explicit consent).</li>
                <li>Analyze website usage to improve user experience.</li>
                <li>Comply with applicable legal obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers (such as analytics platforms or email services) who assist us in operating our website, subject to confidentiality agreements.
              </p>
              <p className="mt-3">
                We may disclose your information if required by law, court order, or government authority.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience and analyze traffic. You can control cookie preferences through your browser settings. Disabling cookies may limit some website functionality.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. Data Retention</h2>
              <p>
                We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable law. When data is no longer needed, we securely delete or anonymize it.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data.</li>
                <li>Withdraw consent at any time (where processing is consent-based).</li>
                <li>Lodge a complaint with a relevant data protection authority.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{' '}
                <a href={`mailto:${SITE_CONFIG.email.general}`} className="text-primary hover:underline">
                  {SITE_CONFIG.email.general}
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">8. Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision. We encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
