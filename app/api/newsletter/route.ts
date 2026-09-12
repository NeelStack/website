import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const audienceId = process.env.RESEND_AUDIENCE_ID

    if (!apiKey || !audienceId) {
      if (process.env.NODE_ENV === 'production') {
        console.error('CRITICAL: RESEND_API_KEY or RESEND_AUDIENCE_ID is missing in production.')
        return NextResponse.json({ error: 'Server misconfiguration.' }, { status: 500 })
      }
      console.warn('[Newsletter] Mocked email subscription for development:', email)
      return NextResponse.json({ success: true, message: 'Subscribed successfully (mocked)' })
    }

    const resend = new Resend(apiKey)
    await resend.contacts.create({
      email,
      audienceId,
    })

    return NextResponse.json({ success: true, message: 'Subscribed successfully' })
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
