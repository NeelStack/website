import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // In production, sync with Resend / Mailchimp / DB table
    console.log(`[Newsletter Subscription Log] Email registered: ${email}`)

    return NextResponse.json({ success: true, message: 'Subscribed successfully' })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
