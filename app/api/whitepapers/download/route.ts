import { NextResponse } from 'next/server'
import { getSiteUrl } from '@/lib/site-url'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') || 'general'

  // Return a structured JSON response or redirect for whitepaper requests
  return NextResponse.json({
    status: 'success',
    whitepaperId: id,
    message: `Thank you for your interest in NeelStack's technical whitepaper (${id}).`,
    downloadUrl: `${getSiteUrl()}/resources/whitepapers/${id}.pdf`,
  })
}
