import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'

function escapeHtml(str: string | null | undefined): string {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
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
    const ip = req.headers.get('cf-connecting-ip') || 
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
          }
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

    // 5. Generate sanitized HTML template email bodies based on form types
    let subject = ''
    let htmlContent = ''

    const cleanName = escapeHtml(name)
    const cleanEmail = escapeHtml(email)

    if (type === 'general') {
      const cleanService = escapeHtml(body.service) || 'General Inquiries'
      const cleanCompany = escapeHtml(body.company) || 'Not specified'
      const cleanMessage = escapeHtml(body.message)

      subject = `NeelStack Contact: General Inquiry from ${cleanName}`
      htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="border-bottom: 1px solid #eaeaea; padding-bottom: 10px; color: #000;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${cleanName}</p>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p><strong>Company:</strong> ${cleanCompany}</p>
          <p><strong>Interested Service:</strong> ${cleanService}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 15px;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 5px 0 0 0; white-space: pre-wrap; line-height: 1.5;">${cleanMessage}</p>
          </div>
        </div>
      `
    } else if (type === 'quote') {
      const cleanProjectType = escapeHtml(body.projectType) || 'Not specified'
      const cleanBudget = escapeHtml(body.budget) || 'Not specified'
      const cleanTimeline = escapeHtml(body.timeline) || 'Not specified'
      const cleanDescription = escapeHtml(body.description)
      const cleanCompany = escapeHtml(body.company) || 'Not specified'
      const cleanPhone = escapeHtml(body.phone) || 'Not specified'

      subject = `NeelStack RFQ: Quote Request from ${cleanName}`
      htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="border-bottom: 1px solid #eaeaea; padding-bottom: 10px; color: #000;">New Request for Quote</h2>
          <p><strong>Name:</strong> ${cleanName}</p>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p><strong>Company:</strong> ${cleanCompany}</p>
          <p><strong>Phone:</strong> ${cleanPhone}</p>
          <p><strong>Project Type:</strong> ${cleanProjectType}</p>
          <p><strong>Budget Range:</strong> ${cleanBudget}</p>
          <p><strong>Timeline:</strong> ${cleanTimeline}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 15px;">
            <p style="margin: 0;"><strong>Project Scope:</strong></p>
            <p style="margin: 5px 0 0 0; white-space: pre-wrap; line-height: 1.5;">${cleanDescription}</p>
          </div>
        </div>
      `
    } else if (type === 'consultation') {
      const cleanTopic = escapeHtml(body.topic)
      subject = `NeelStack Consultation: Call Request from ${cleanName}`
      htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="border-bottom: 1px solid #eaeaea; padding-bottom: 10px; color: #000;">New Consultation Request</h2>
          <p><strong>Name:</strong> ${cleanName}</p>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 15px;">
            <p style="margin: 0;"><strong>Inquiry Topic:</strong></p>
            <p style="margin: 5px 0 0 0; white-space: pre-wrap; line-height: 1.5;">${cleanTopic}</p>
          </div>
          <p style="font-size: 12px; color: #666; margin-top: 20px;">
            Reminder: Confirm time slot (Mon – Sat, 9 AM – 7 PM IST) within 1 business day.
          </p>
        </div>
      `
    } else {
      return NextResponse.json({ error: 'Invalid form type specified' }, { status: 400 })
    }

    // 6. Dispatch email via Resend
    await resend.emails.send({
      from: process.env.CONTACT_SENDER_EMAIL || 'NeelStack Forms <onboarding@resend.dev>',
      to: process.env.CONTACT_RECEIVER_EMAIL || 'contact@neelstack.com',
      subject: subject,
      html: htmlContent,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Resend submission error: ', error)
    return NextResponse.json({ error: 'Failed to process email dispatch' }, { status: 500 })
  }
}
