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
          background: '#070b14',
          gap: '28px',
          padding: '40px',
        }}
      >
        {/* Hexagon Monogram */}
        <svg
          width="130"
          height="130"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logo-brand-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B72FE" />
              <stop offset="100%" stopColor="#2EC7F2" />
            </linearGradient>
          </defs>
          <path
            d="M50,10 L84.64,30 V70 L50,90 L15.36,70 V30 Z"
            fill="none"
            stroke="url(#logo-brand-grad)"
            strokeWidth="5.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M39,68 V32 L65.5,62 V31 L67,28.4"
            fill="none"
            stroke="url(#logo-brand-grad)"
            strokeWidth="8"
            strokeLinejoin="round"
            strokeLinecap="butt"
          />
        </svg>

        {/* Logo Text: Neel in White, Stack in Brand Cyan/Blue */}
        <div style={{ display: 'flex', fontSize: '96px', fontWeight: '800', letterSpacing: '-0.04em' }}>
          <span style={{ color: '#FFFFFF' }}>Neel</span>
          <span style={{ color: '#2EC7F2' }}>Stack</span>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  )
}

