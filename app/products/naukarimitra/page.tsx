import type { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Redirecting to Products | NeelStack Solutions',
  robots: { index: false, follow: false },
  alternates: { canonical: null },
}

export default function NaukariMitraPage() {
  permanentRedirect('/products')
}
