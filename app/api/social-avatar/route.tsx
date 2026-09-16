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
              'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.25) 0%, transparent 65%), radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.25) 0%, transparent 65%)',
          }}
        />

        {/* 6-Sided Hexagon in 2 Symmetrical Halves & Dual-Tone N Synapse */}
        <svg
          width="360"
          height="360"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="avatar-brand-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          {/* Top Half (3 edges: Royal Blue) */}
          <path
            d="M15.36,70 L15.36,30 L50,10 L84.64,30"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="5.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Bottom Half (3 edges: Rich Violet) */}
          <path
            d="M84.64,30 L84.64,70 L50,90 L15.36,70"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="5.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Inner Geometric N — Centered at (50,50) */}
          <path
            d="M38,67 V33 L62,67 V33"
            fill="none"
            stroke="url(#avatar-brand-grad)"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeLinecap="butt"
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
