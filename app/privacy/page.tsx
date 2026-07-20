import type { Metadata } from 'next'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { PageHero } from '@/components/ui/page-hero'
import { Container } from '@/components/ui/container'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for NeelStack — how we collect, use, and protect your personal information.',
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
                NeelStack Solutions Private Limited (&quot;NeelStack&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights when you visit{' '}
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
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Cookies & Tracking Banners</h2>
              <p>
                We believe in keeping your browsing experience fast, clean, and private. <strong className="text-foreground">We do not use advertising tracking cookies</strong>, which is why you will not see an annoying cookie consent banner on our website.
              </p>
              <p className="mt-3">
                We use privacy-friendly web analytics tools (such as Vercel Analytics in a cookie-less configuration) to assess site performance and traffic patterns. We only use strictly necessary functional local storage or state to keep forms and settings working.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. AI Processing & Data Sovereignty</h2>
              <p>
                Our proprietary AI systems (such as NaukariMitra, SarkariMitra, and DhruvaOS) process user-provided materials, search queries, and notes. To protect your intellectual and private data:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">Zero-Training Guarantee:</strong> We coordinate all API connections using enterprise terms which guarantee that your query prompts, uploaded files, or custom datasets are never stored, shared, or utilized to train third-party public models.</li>
                <li><strong className="text-foreground">Regional Hosting:</strong> To comply with data localization requirements, all client database systems and sensitive student profiles are hosted on secure regional server nodes located within India.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">7. Data Retention</h2>
              <p>
                We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable law. When data is no longer needed, we securely delete or anonymize it.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">8. Your Rights (Including GDPR & CCPA)</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate or incomplete data.</li>
                <li>Request deletion of your data.</li>
                <li>Withdraw consent at any time (where processing is consent-based).</li>
                <li>Object to or restrict the processing of your data.</li>
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
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">9. India-Specific Rights (DPDP Act, 2023)</h2>
              <p>
                As a resident of India, under the Digital Personal Data Protection Act, 2023 (DPDP Act), you act as a &quot;Data Principal&quot; and we act as the &quot;Data Fiduciary&quot;. You possess the following statutory rights:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">Right to Information:</strong> Access a summary of your personal data being processed and the identities of third parties with whom it is shared.</li>
                <li><strong className="text-foreground">Right to Correction and Erasure:</strong> Request the correction, completion, or erasure of personal data that is no longer necessary for the purpose it was collected.</li>
                <li><strong className="text-foreground">Right to Grievance Redressal:</strong> Register grievances with our Grievance Officer regarding any performance or compliance issues.</li>
                <li><strong className="text-foreground">Right to Nominate:</strong> Nominate another individual to exercise your rights in the event of death or incapacity.</li>
              </ul>
              <p className="mt-3">
                If you wish to withdraw consent or exercise any of these rights, we will process your request within the statutory timeframe, provided there is no legal requirement to retain the data.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">10. Security</h2>
              <p>
                We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, loss, or alteration. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision. We encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">12. Contact Us & Grievance Redressal</h2>
              <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact our general support or our designated Grievance Officer:</p>
              <address className="mt-3 not-italic space-y-2 text-sm">
                <div>
                  <p className="font-medium text-foreground">General Support:</p>
                  <p>Email: <a href={`mailto:${SITE_CONFIG.email.general}`} className="text-primary hover:underline">{SITE_CONFIG.email.general}</a></p>
                </div>
                <div className="pt-2">
                  <p className="font-medium text-foreground">Grievance Officer (DPDP Act Compliance):</p>
                  <p>Attn: Privacy Compliance Officer</p>
                  <p>Email: <a href="mailto:contact@neelstack.com" className="text-primary hover:underline">contact@neelstack.com</a></p>
                  <p>Response Time: We aim to acknowledge and resolve all valid statutory grievances within 30 days of receipt.</p>
                </div>
                <div className="pt-2">
                  <p className="font-medium text-foreground">{SITE_CONFIG.name}</p>
                  <p>{SITE_CONFIG.address.line1}</p>
                  <p>{SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}, {SITE_CONFIG.address.country}</p>
                </div>
              </address>
            </div>

          </div>
        </Container>
      </section>
    </MarketingLayout>
  )
}
