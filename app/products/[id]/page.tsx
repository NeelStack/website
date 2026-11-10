import type { Metadata } from 'next'
import { permanentRedirect, notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ id: string }>
}

const ALIAS_MAP: Record<string, string> = {
  'naukari-mitra': '/products',
  'naukarimitra': '/products',
  'sarakarimitra': '/products',
  'sarkari-mitra': '/products',
  'sarkarimitra': '/products',
  'ai-company-os': '/products',
  'toolvines': 'https://toolvines.com',
  'dhruvaos': '/products/dhruvaos',
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const target = ALIAS_MAP[id.toLowerCase()]
  if (!target) {
    return {
      title: 'Product Not Found',
      robots: { index: false },
      alternates: {
        canonical: null,
      },
    }
  }

  return {
    title: 'Redirecting to Product Specification | NeelStack India',
    robots: { index: false },
    alternates: {
      canonical: null,
    },
  }
}

export async function generateStaticParams() {
  return [
    { id: 'naukari-mitra' },
    { id: 'sarakarimitra' },
    { id: 'sarkari-mitra' },
  ]
}

export default async function ProductAliasPage({ params }: PageProps) {
  const { id } = await params
  const target = ALIAS_MAP[id.toLowerCase()]

  if (target) {
    permanentRedirect(target)
  }

  notFound()
}
