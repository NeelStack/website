import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') || 'general'

  // Return a structured JSON response or redirect for whitepaper requests
  return NextResponse.json({
    status: 'success',
    whitepaperId: id,
    message: `Thank you for your interest in NeelStack's technical whitepaper (${id}).`,
    downloadUrl: `https://neelstack.com/resources/whitepapers/${id}.pdf`,
  })
}
