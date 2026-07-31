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
          background: '#ffffff',
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
            <linearGradient id="logo-png-grad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          {/* Main Solid Geometric N Silhouette */}
          <path
            d="M 6 6 H 15.5 L 28.5 24.5 V 6 H 34 V 34 H 24.5 L 11.5 15.5 V 34 H 6 V 6 Z"
            fill="#0F172A"
          />

          {/* Embedded Continuous Accent Signal Channel */}
          <path
            d="M 9.5 31.5 V 9.5 L 30.5 30.5 V 8.5"
            stroke="url(#logo-png-grad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Logo Text: Neel in Dark Slate, Stack in Cyan */}
        <div style={{ display: 'flex', fontSize: '96px', fontWeight: '900', letterSpacing: '-0.04em' }}>
          <span style={{ color: '#0F172A' }}>Neel</span>
          <span style={{ color: '#0284c7' }}>Stack</span>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  )
}
