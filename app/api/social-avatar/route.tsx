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
          background: '#0b1220',
          borderRadius: '110px',
          border: '4px solid rgba(37, 99, 235, 0.35)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Subtle Ambient Radial Lighting */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 30% 30%, rgba(37, 99, 235, 0.25) 0%, transparent 65%), radial-gradient(circle at 70% 70%, rgba(0, 212, 255, 0.20) 0%, transparent 65%)',
          }}
        />

        {/* Pure Architectural Geometric Hexagonal N Monogram */}
        <svg
          width="360"
          height="360"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="avatar-brand-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B72FE" />
              <stop offset="100%" stopColor="#2EC7F2" />
            </linearGradient>
          </defs>

          {/* Outer Hexagon Outline */}
          <path
            d="M50,10 L84.64,30 V70 L50,90 L15.36,70 V30 Z"
            fill="none"
            stroke="url(#avatar-brand-grad)"
            strokeWidth="5.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Inner Geometric N with Flat linecaps, Fluid Corner & Subliminal Slanted Cap */}
          <path
            d="M39,68 V32 L65.5,62 V31 L67,28.4"
            fill="none"
            stroke="url(#avatar-brand-grad)"
            strokeWidth="8"
            strokeLinecap="butt"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      width: 512,
      height: 512,
    }
  )
}

