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
          borderRadius: '110px',
          border: '4px solid rgba(139, 92, 246, 0.35)',
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
              'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.25) 0%, transparent 65%), radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.20) 0%, transparent 65%)',
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
            <linearGradient id="avatar-bv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          {/* Main Solid Geometric N Silhouette */}
          <path
            d="M 6 6 H 14.5 L 27 25 V 6 H 34.5 V 34 H 26 L 13.5 15 V 34 H 6 V 6 Z"
            fill="url(#avatar-bv-grad)"
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

