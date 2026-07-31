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
          background: 'linear-gradient(135deg, #0c1329 0%, #070b14 100%)',
          borderRadius: '110px',
          border: '4px solid rgba(56, 189, 248, 0.35)',
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
              'radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.25) 0%, transparent 65%), radial-gradient(circle at 70% 70%, rgba(124, 58, 237, 0.20) 0%, transparent 65%)',
          }}
        />

        {/* Pure Architectural Geometric N Logo Mark */}
        <svg
          width="360"
          height="360"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="avatar-cyan-violet" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          {/* Main Solid Geometric N Silhouette */}
          <path
            d="M 6 6 H 15.5 L 28.5 24.5 V 6 H 34 V 34 H 24.5 L 11.5 15.5 V 34 H 6 V 6 Z"
            fill="#ffffff"
          />

          {/* Embedded Continuous Accent Signal Channel */}
          <path
            d="M 9.5 31.5 V 9.5 L 30.5 30.5 V 8.5"
            stroke="url(#avatar-cyan-violet)"
            strokeWidth="2.2"
            strokeLinecap="round"
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
