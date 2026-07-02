import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { type, name, email } = body

    // 1. Validate required attributes
    if (!type || !name || !email) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 })
    }

    // 2. Fetch API key and handle fallback mocked response if empty
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn('RESEND_API_KEY is not defined. Email notification mocked in development.')
      return NextResponse.json({ success: true, mocked: true })
    }

    const resend = new Resend(apiKey)

    // 3. Generate HTML template email bodies based on form types
    let subject = ''
    let htmlContent = ''

    if (type === 'general') {
      const { service, message, company } = body
      subject = `NeelStack Contact: General Inquiry from ${name}`
      htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="border-bottom: 1px solid #eaeaea; padding-bottom: 10px; color: #000;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not specified'}</p>
          <p><strong>Interested Service:</strong> ${service || 'General Inquiries'}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 15px;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 5px 0 0 0; white-space: pre-wrap; line-height: 1.5;">${message}</p>
          </div>
        </div>
      `
    } else if (type === 'quote') {
      const { projectType, budget, timeline, description, company, phone } = body
      subject = `NeelStack RFQ: Quote Request from ${name}`
      htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="border-bottom: 1px solid #eaeaea; padding-bottom: 10px; color: #000;">New Request for Quote</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not specified'}</p>
          <p><strong>Phone:</strong> ${phone || 'Not specified'}</p>
          <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
          <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 15px;">
            <p style="margin: 0;"><strong>Project Scope:</strong></p>
            <p style="margin: 5px 0 0 0; white-space: pre-wrap; line-height: 1.5;">${description}</p>
          </div>
        </div>
      `
    } else if (type === 'consultation') {
      const { topic } = body
      subject = `NeelStack Consultation: Call Request from ${name}`
      htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="border-bottom: 1px solid #eaeaea; padding-bottom: 10px; color: #000;">New Consultation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 15px;">
            <p style="margin: 0;"><strong>Inquiry Topic:</strong></p>
            <p style="margin: 5px 0 0 0; white-space: pre-wrap; line-height: 1.5;">${topic}</p>
          </div>
          <p style="font-size: 12px; color: #666; margin-top: 20px;">
            Reminder: Confirm time slot (Mon – Sat, 9 AM – 7 PM IST) within 1 business day.
          </p>
        </div>
      `
    } else {
      return NextResponse.json({ error: 'Invalid form type specified' }, { status: 400 })
    }

    // 4. Dispatch email via Resend
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
