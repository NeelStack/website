import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'NeelStack - Enterprise AI & Product Engineering Company'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #090d16 0%, #0c1329 50%, #060911 100%)',
          fontFamily: 'Inter',
          position: 'relative',
          padding: '48px',
        }}
      >
        {/* Ambient Glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.25) 0%, transparent 50%)',
          }}
        />

        {/* Outer Frame Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '24px',
            boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.5)',
            padding: '36px',
            position: 'relative',
          }}
        >
          {/* Top Pre-heading Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.35)',
              borderRadius: '9999px',
              padding: '8px 22px',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '9999px',
                backgroundColor: '#8B5CF6',
                boxShadow: '0 0 10px rgba(139, 92, 246, 0.8)',
              }}
            />
            <div
              style={{
                color: '#A78BFA',
                fontSize: '14px',
                fontWeight: '800',
                letterSpacing: '0.15em',
              }}
            >
              ENTERPRISE AI &amp; SOFTWARE PLATFORMS
            </div>
          </div>

          {/* Logo Container */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '20px' }}>
            {/* Pure Architectural Geometric N Logo Mark */}
            <svg
              width="100"
              height="100"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="og-bv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>

              {/* Main Solid Geometric N Silhouette */}
              <path
                d="M 6 6 H 14.5 L 27 25 V 6 H 34.5 V 34 H 26 L 13.5 15 V 34 H 6 V 6 Z"
                fill="url(#og-bv-grad)"
              />
            </svg>

            {/* Logo Text: Neel in White, Stack in Violet Gradient */}
            <div style={{ display: 'flex', fontSize: '80px', fontWeight: '900', letterSpacing: '-0.04em' }}>
              <span style={{ color: '#FFFFFF' }}>Neel</span>
              <span style={{ color: '#8B5CF6' }}>Stack</span>
            </div>
          </div>

          {/* Main Headline Tagline */}
          <div
            style={{
              display: 'flex',
              fontSize: '34px',
              fontWeight: '800',
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              textAlign: 'center',
              maxWidth: '880px',
              marginBottom: '12px',
            }}
          >
            AI-Native Enterprise Software &amp; Product Engineering
          </div>

          {/* Sub-Tagline */}
          <div
            style={{
              display: 'flex',
              fontSize: '20px',
              fontWeight: '500',
              color: '#94A3B8',
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            Scaling Intelligent SaaS Platforms, ERP Systems &amp; Custom AI Agents
          </div>

          {/* Capability Badges Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {['AI Agents', 'DhruvaOS Suite', 'Cloud Architecture', 'Custom SaaS'].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(139, 92, 246, 0.4)',
                  borderRadius: '9999px',
                  padding: '8px 20px',
                  color: '#E2E8F0',
                  fontSize: '14px',
                  fontWeight: '700',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom glowing accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

