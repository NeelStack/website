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
        {/* 6-Sided Hexagon Monogram in 2 Symmetrical Halves */}
        <svg
          width="130"
          height="130"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logo-brand-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path
            d="M15.36,70 L15.36,30 L50,10 L84.64,30"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="5.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M84.64,30 L84.64,70 L50,90 L15.36,70"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="5.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M38,67 V33 L62,67 V33"
            fill="none"
            stroke="url(#logo-brand-grad)"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeLinecap="butt"
          />
        </svg>

        {/* Symmetrical Wordmark: N (Blue) + ee (Violet Core) + l (Blue) + Stack (White) */}
        <div style={{ display: 'flex', fontSize: '96px', fontWeight: '900', letterSpacing: '-0.04em' }}>
          <span style={{ color: '#3B82F6' }}>N</span>
          <span style={{ color: '#8B5CF6' }}>ee</span>
          <span style={{ color: '#3B82F6' }}>l</span>
          <span style={{ color: '#FFFFFF', marginLeft: '2px' }}>Stack</span>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  )
}
