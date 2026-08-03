import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#090d16',
          gap: '24px',
          padding: '40px',
        }}
      >
        {/* Pure Architectural Geometric N Logo Mark */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logo-bv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          {/* Main Solid Geometric N Silhouette */}
          <path
            d="M 6 6 H 14.5 L 27 25 V 6 H 34.5 V 34 H 26 L 13.5 15 V 34 H 6 V 6 Z"
            fill="url(#logo-bv-grad)"
          />
        </svg>

        {/* Logo Text: Neel in White, Stack in Violet */}
        <div style={{ display: 'flex', fontSize: '96px', fontWeight: '900', letterSpacing: '-0.04em' }}>
          <span style={{ color: '#FFFFFF' }}>Neel</span>
          <span style={{ color: '#8B5CF6' }}>Stack</span>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  )
}

