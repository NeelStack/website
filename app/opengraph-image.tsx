import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'NeelStack - AI-Native Product Engineering'
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
          background: 'linear-gradient(135deg, #070b14 0%, #0b1220 50%, #04070d 100%)',
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
              'radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.2) 0%, transparent 50%)',
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
            backgroundColor: 'rgba(11, 18, 32, 0.85)',
            border: '1px solid rgba(37, 99, 235, 0.35)',
            borderRadius: '24px',
            boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.6)',
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
              backgroundColor: 'rgba(37, 99, 235, 0.12)',
              border: '1px solid rgba(37, 99, 235, 0.3)',
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
                backgroundColor: '#2563EB',
                boxShadow: '0 0 10px rgba(37, 99, 235, 0.8)',
              }}
            />
            <div
              style={{
                color: '#60A5FA',
                fontSize: '14px',
                fontWeight: '800',
                letterSpacing: '0.15em',
              }}
            >
              AI-NATIVE PRODUCT ENGINEERING
            </div>
          </div>

          {/* Logo Container */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '20px' }}>
            {/* Pure Architectural Geometric N Logo Mark */}
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="og-brand-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B72FE" />
                  <stop offset="100%" stopColor="#2EC7F2" />
                </linearGradient>
              </defs>

              {/* Outer Hexagon Outline */}
              <path
                d="M50,10 L84.64,30 V70 L50,90 L15.36,70 V30 Z"
                fill="none"
                stroke="url(#og-brand-grad)"
                strokeWidth="5.8"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {/* Inner Geometric N with Flat linecaps, Fluid Corner & Subliminal Slanted Cap */}
              <path
                d="M39,68 V32 L65.5,62 V31 L67,28.4"
                fill="none"
                stroke="url(#og-brand-grad)"
                strokeWidth="8"
                strokeLinecap="butt"
                strokeLinejoin="round"
              />
            </svg>

            {/* Logo Text: Neel in White, Stack in Cyan Gradient */}
            <div style={{ display: 'flex', fontSize: '80px', fontWeight: '900', letterSpacing: '-0.04em' }}>
              <span style={{ color: '#FFFFFF' }}>Neel</span>
              <span style={{ color: '#2EC7F2' }}>Stack</span>
            </div>
          </div>

          {/* Main Headline Tagline */}
          <div
            style={{
              display: 'flex',
              fontSize: '44px',
              fontWeight: '800',
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              textAlign: 'center',
              maxWidth: '880px',
              marginBottom: '12px',
            }}
          >
            AI-Native Product Engineering
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
            Scaling Intelligent SaaS Platforms, Cloud Systems &amp; Custom AI Agents
          </div>

          {/* Capability Badges Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {['AI Agents', 'Dev Tools', 'Cloud Architecture', 'Custom SaaS'].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(0, 212, 255, 0.4)',
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
            background: 'linear-gradient(90deg, #3B72FE 0%, #2EC7F2 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

