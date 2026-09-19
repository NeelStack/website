import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'
import { getSiteUrl } from '@/lib/site-url'

function escapeHtml(str: string | null | undefined): string {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

interface TemplateField {
  label: string
  value: string
  isLink?: 'email' | 'tel'
  highlight?: boolean
}

function renderBrandedEmail({
  badge,
  badgeBg,
  badgeText,
  badgeBorder,
  headline,
  subheadline,
  fields,
  messageHeading,
  messageContent,
  replyEmail,
  replyName,
  subject,
  sourceIp,
}: {
  badge: string
  badgeBg: string
  badgeText: string
  badgeBorder: string
  headline: string
  subheadline: string
  fields: TemplateField[]
  messageHeading: string
  messageContent?: string
  replyEmail: string
  replyName: string
  subject: string
  sourceIp: string
}): string {
  const now = new Date()
  const formattedIst = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  })
  const siteUrl = getSiteUrl()
  const logoUrl = `${siteUrl}/logo-dark.png`

  const fieldsHtml = fields
    .map((f, i) => {
      let valHtml = escapeHtml(f.value)
      if (f.isLink === 'email') {
        valHtml = `<a href="mailto:${valHtml}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${valHtml}</a>`
      } else if (f.isLink === 'tel') {
        valHtml = `<a href="tel:${valHtml.replace(/\s+/g, '')}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${valHtml}</a>`
      } else if (f.highlight) {
        valHtml = `<span style="font-weight: 700; color: #0f172a;">${valHtml}</span>`
      }

      const bg = i % 2 === 0 ? '#ffffff' : '#f8fafc'
      return `
        <tr style="background-color: ${bg};">
          <td style="padding: 12px 16px; font-size: 12px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; width: 36%; border-bottom: 1px solid #f1f5f9;">${escapeHtml(f.label)}</td>
          <td style="padding: 12px 16px; font-size: 13.5px; color: #1e293b; border-bottom: 1px solid #f1f5f9; font-weight: 500;">${valHtml}</td>
        </tr>
      `
    })
    .join('')

  const replyMailto = `mailto:${replyEmail}?subject=${encodeURIComponent(`Re: ${subject}`)}`

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(headline)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 32px rgba(15, 23, 42, 0.09); border: 1px solid #e2e8f0;">
          
          <!-- 0. Vibrant Top Accent Bar -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #2563eb 0%, #38bdf8 50%, #8b5cf6 100%); line-height: 4px; font-size: 0;">&nbsp;</td>
          </tr>

          <!-- 1. Header Banner with Official Logo -->
          <tr>
            <td style="background-color: #070b14; padding: 28px 32px; text-align: left;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="vertical-align: middle;">
                          <a href="${siteUrl}" target="_blank" style="text-decoration: none; display: inline-block;">
                            <img src="${logoUrl}" alt="NeelStack" height="34" style="display: block; height: 34px; width: auto; max-height: 34px; border: 0; outline: none; text-decoration: none;" />
                          </a>
                        </td>
                        <td style="vertical-align: middle; padding-left: 12px;">
                          <span style="display: inline-block; font-size: 11px; font-weight: 700; color: #94a3b8; letter-spacing: 0.06em; text-transform: uppercase; border-left: 1px solid #334155; padding-left: 12px;">
                            Software Products &amp; AI Systems
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 20px;">
                    <span style="display: inline-block; background-color: ${badgeBg}; color: ${badgeText}; border: 1px solid ${badgeBorder}; padding: 5px 14px; border-radius: 9999px; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;">
                      ${escapeHtml(badge)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 12px;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 800; line-height: 1.3; letter-spacing: -0.02em;">
                      ${escapeHtml(headline)}
                    </h1>
                    <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 13px; line-height: 1.5;">
                      ${escapeHtml(subheadline)}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 2. Structured Data Table -->
          <tr>
            <td style="padding: 24px 32px 16px 32px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate; border-spacing: 0; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                ${fieldsHtml}
              </table>
            </td>
          </tr>

          ${
            messageContent
              ? `
          <!-- 3. Message / Project Scope Card -->
          <tr>
            <td style="padding: 0 32px 24px 32px;">
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #2563eb; border-radius: 8px; padding: 18px 20px;">
                <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: #64748b;">
                  ${escapeHtml(messageHeading)}
                </p>
                <div style="font-size: 14px; line-height: 1.65; color: #1e293b; white-space: pre-wrap; font-family: inherit;">${escapeHtml(messageContent)}</div>
              </div>
            </td>
          </tr>
          `
              : ''
          }

          <!-- 4. Quick Action Tactile Reply Button -->
          <tr>
            <td style="padding: 0 32px 28px 32px; text-align: left;">
              <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="border-radius: 8px; background-color: #2563eb; box-shadow: 3px 3px 0px #0f172a;">
                    <a href="${replyMailto}" target="_blank" style="display: inline-block; padding: 12px 26px; font-size: 13.5px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 8px; font-family: inherit; letter-spacing: 0.01em;">
                      Reply to ${escapeHtml(replyName)} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 5. Verification & Telemetry Strip -->
          <tr>
            <td style="padding: 16px 32px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-size: 11px; color: #64748b; line-height: 1.6;">
                    <strong>Submission Time:</strong> ${formattedIst} (IST)<br>
                    <strong>Source IP:</strong> ${escapeHtml(sourceIp)} &bull; <strong>SLA Commitment:</strong> Response within 1 Business Day
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 6. Legal & Entity Compliance Footer -->
          <tr>
            <td style="padding: 24px 32px; text-align: center; background-color: #ffffff;">
              <p style="margin: 0; font-size: 11.5px; font-weight: 800; color: #0f172a; letter-spacing: -0.01em;">
                NeelStack Solutions Private Limited
              </p>
              <p style="margin: 4px 0 0 0; font-size: 10.5px; color: #64748b; line-height: 1.55;">
                CIN: U62011UP2026PTC250857 &bull; GSTIN: 09AALCN9356Q1ZA &bull; DPIIT: DIPP278202 &bull; MSME: UDYAM-UP-32-0131171<br>
                Official Channel: <a href="mailto:contact@neelstack.com" style="color: #2563eb; text-decoration: underline; font-weight: 600;">contact@neelstack.com</a> &bull; Gorakhpur, UP, India
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

export async function POST(req: Request) {
  try {
    // 1. Guard against oversized payloads (16KB max)
    const contentLength = parseInt(req.headers.get('content-length') || '0', 10)
    if (contentLength > 16384) {
      return NextResponse.json(
        { error: 'Request body too large. Maximum allowed size is 16KB.' },
        { status: 413 }
      )
    }

    // 2. Extract IP address from headers
    const ip =
      req.headers.get('cf-connecting-ip') ||
      req.headers.get('x-forwarded-for')?.split(',')[0] ||
      '127.0.0.1'

    // Rate limit: Max 5 submissions per 60 seconds per IP
    const limiter = rateLimit(ip, { limit: 5, windowMs: 60 * 1000 })
    if (!limiter.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': limiter.limit.toString(),
            'X-RateLimit-Remaining': limiter.remaining.toString(),
          },
        }
      )
    }

    const body = await req.json()
    const { type, name, email } = body

    // 3. Validate required attributes
    if (!type || !name || !email) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 })
    }

    // 4. Fetch API key and handle fallback mocked response if empty
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      if (process.env.NODE_ENV === 'production') {
        console.error('CRITICAL: RESEND_API_KEY is missing in production. Form submissions will fail.')
        return NextResponse.json({ error: 'Server misconfiguration. Please try again later.' }, { status: 500 })
      }
      console.warn('RESEND_API_KEY is not defined. Email notification mocked in development.')
      return NextResponse.json({ success: true, mocked: true })
    }

    const resend = new Resend(apiKey)

    // 5. Generate high-fidelity branded email bodies based on form type
    let subject = ''
    let htmlContent = ''

    const cleanName = String(name).trim()
    const cleanEmail = String(email).trim()

    if (type === 'general') {
      const cleanService = body.service || 'General Software / AI Inquiry'
      const cleanCompany = body.company || 'Not specified'
      const cleanPhone = body.phone || 'Not provided'
      const cleanMessage = body.message || ''

      subject = `NeelStack Inquiry: ${cleanName} (${cleanCompany !== 'Not specified' ? cleanCompany : cleanService})`
      htmlContent = renderBrandedEmail({
        badge: 'General Software & AI Inquiry',
        badgeBg: 'rgba(59, 130, 246, 0.15)',
        badgeText: '#60a5fa',
        badgeBorder: 'rgba(59, 130, 246, 0.35)',
        headline: `New Inquiry from ${cleanName}`,
        subheadline: `Client inquiry received via neelstack.com/contact`,
        fields: [
          { label: 'Contact Name', value: cleanName, highlight: true },
          { label: 'Official Email', value: cleanEmail, isLink: 'email' },
          { label: 'Company / Org', value: cleanCompany },
          { label: 'Phone / WhatsApp', value: cleanPhone, isLink: cleanPhone !== 'Not provided' ? 'tel' : undefined },
          { label: 'Service / Requirement', value: cleanService, highlight: true },
        ],
        messageHeading: 'Client Inquiry Details',
        messageContent: cleanMessage,
        replyEmail: cleanEmail,
        replyName: cleanName,
        subject,
        sourceIp: ip,
      })
    } else if (type === 'quote') {
      const cleanProjectType = body.projectType || 'Custom Software Development'
      const cleanBudget = body.budget || 'Not specified'
      const cleanTimeline = body.timeline || 'Not specified'
      const cleanDescription = body.description || ''
      const cleanCompany = body.company || 'Not specified'
      const cleanPhone = body.phone || 'Not specified'

      subject = `NeelStack RFQ: ${cleanProjectType} — ${cleanName} (${cleanBudget})`
      htmlContent = renderBrandedEmail({
        badge: 'Custom Software & AI Estimate (RFQ)',
        badgeBg: 'rgba(139, 92, 246, 0.15)',
        badgeText: '#c084fc',
        badgeBorder: 'rgba(139, 92, 246, 0.35)',
        headline: `Quote Request: ${cleanProjectType}`,
        subheadline: `Project proposal request submitted via neelstack.com/request-quote`,
        fields: [
          { label: 'Lead Name', value: cleanName, highlight: true },
          { label: 'Email Address', value: cleanEmail, isLink: 'email' },
          { label: 'Company Name', value: cleanCompany },
          { label: 'Phone / WhatsApp', value: cleanPhone, isLink: cleanPhone !== 'Not specified' ? 'tel' : undefined },
          { label: 'Project Scope', value: cleanProjectType, highlight: true },
          { label: 'Budget Estimate', value: cleanBudget, highlight: true },
          { label: 'Target Timeline', value: cleanTimeline },
        ],
        messageHeading: 'Project Scope & Requirements Brief',
        messageContent: cleanDescription,
        replyEmail: cleanEmail,
        replyName: cleanName,
        subject,
        sourceIp: ip,
      })
    } else if (type === 'consultation') {
      const cleanTopic = body.topic || ''
      const cleanPhone = body.phone || 'Not provided'

      subject = `NeelStack Consultation: Call Request from ${cleanName}`
      htmlContent = renderBrandedEmail({
        badge: '100% Free Strategy Session',
        badgeBg: 'rgba(16, 185, 129, 0.15)',
        badgeText: '#34d399',
        badgeBorder: 'rgba(16, 185, 129, 0.35)',
        headline: `Strategy Session: ${cleanName}`,
        subheadline: `20-minute architecture discussion booked via neelstack.com/book-consultation`,
        fields: [
          { label: 'Full Name', value: cleanName, highlight: true },
          { label: 'Email Address', value: cleanEmail, isLink: 'email' },
          { label: 'Phone / WhatsApp', value: cleanPhone, isLink: cleanPhone !== 'Not provided' ? 'tel' : undefined },
          { label: 'Session Type', value: '20-Min Free Engineering Call (Google Meet / Zoom)' },
          { label: 'Time Window', value: 'Mon – Sat, 9 AM – 7 PM IST' },
        ],
        messageHeading: 'Discussion Topic / Architecture Question',
        messageContent: cleanTopic,
        replyEmail: cleanEmail,
        replyName: cleanName,
        subject,
        sourceIp: ip,
      })
    } else if (type === 'dhruvaos') {
      const cleanInstitution = body.institutionName || 'Educational Institution'
      const cleanRole = body.role || 'Institution Leader'
      const cleanInstitutionType = body.institutionType || 'K-12 School'
      const cleanCity = body.city || 'Not specified'
      const cleanPhone = body.phone || 'Not provided'
      const cleanMessage = body.message || ''

      subject = `DhruvaOS Pilot Lead: ${cleanInstitution} (${cleanName}, ${cleanRole})`
      htmlContent = renderBrandedEmail({
        badge: '✦ DhruvaOS Institutional Pilot Program',
        badgeBg: 'rgba(16, 185, 129, 0.15)',
        badgeText: '#34d399',
        badgeBorder: 'rgba(16, 185, 129, 0.35)',
        headline: `New Institutional Pilot Application`,
        subheadline: `School onboarding inquiry submitted for DhruvaOS`,
        fields: [
          { label: 'Institution Name', value: cleanInstitution, highlight: true },
          { label: 'Leader / Contact', value: `${cleanName} (${cleanRole})`, highlight: true },
          { label: 'Campus Location / City', value: cleanCity, highlight: true },
          { label: 'Official Email', value: cleanEmail, isLink: 'email' },
          { label: 'Phone / WhatsApp', value: cleanPhone, isLink: cleanPhone !== 'Not provided' ? 'tel' : undefined },
          { label: 'Institution Type / Board', value: cleanInstitutionType },
        ],
        messageHeading: 'Campus Setup, Software & Migration Requirements',
        messageContent: cleanMessage,
        replyEmail: cleanEmail,
        replyName: cleanName,
        subject,
        sourceIp: ip,
      })
    } else {
      return NextResponse.json({ error: 'Invalid form type specified' }, { status: 400 })
    }

    // 6. Dispatch email via Resend with crucial reply_to header
    try {
      const { error: sendError } = await resend.emails.send({
        from: process.env.CONTACT_SENDER_EMAIL || 'NeelStack Notifications <onboarding@resend.dev>',
        to: process.env.CONTACT_RECEIVER_EMAIL || 'contact@neelstack.com',
        reply_to: cleanEmail,
        subject: subject,
        html: htmlContent,
      })

      if (sendError) {
        console.error('[CRITICAL LEAD LOGGED] Resend returned error:', sendError, {
          type,
          name: cleanName,
          email: cleanEmail,
          subject,
          timestamp: new Date().toISOString(),
          ip,
        })
        if (process.env.NODE_ENV !== 'production') {
          return NextResponse.json({ success: true, mocked: true })
        }
      }

      return NextResponse.json({ success: true })
    } catch (sendEx: any) {
      console.error('[CRITICAL LEAD LOGGED] Exception during email dispatch:', sendEx, {
        type,
        name: cleanName,
        email: cleanEmail,
        subject,
        timestamp: new Date().toISOString(),
        ip,
      })
      if (process.env.NODE_ENV !== 'production') {
        return NextResponse.json({ success: true, mocked: true })
      }
      return NextResponse.json(
        { error: 'Failed to process email dispatch. Please email contact@neelstack.com directly.' },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('Contact API error: ', error)
    return NextResponse.json({ error: error?.message || 'Failed to process request' }, { status: 500 })
  }
}
