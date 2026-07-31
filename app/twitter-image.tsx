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
          backgroundColor: '#020617',
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 65%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
          fontFamily: 'Inter',
          position: 'relative',
          padding: '48px',
        }}
      >
        {/* Subtle background grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Top Pre-heading Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '9999px',
            padding: '8px 20px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '9999px',
              backgroundColor: '#38BDF8',
              boxShadow: '0 0 10px #38BDF8',
            }}
          />
          <div
            style={{
              color: '#38BDF8',
              fontSize: '15px',
              fontWeight: '800',
              letterSpacing: '0.15em',
            }}
          >
            ENTERPRISE AI &amp; SOFTWARE PLATFORMS
          </div>
        </div>

        {/* Logo Container */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px', marginBottom: '24px' }}>
          {/* Code-Stack Logo Mark */}
          <svg
            width="110"
            height="110"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="7" y="6" width="7" height="28" rx="2.5" fill="#FFFFFF" />
            <rect x="26" y="6" width="7" height="28" rx="2.5" fill="#FFFFFF" />
            <path d="M 7 12 L 14 6 L 21 16 L 33 28 L 26 34 L 17 22 Z" fill="url(#code-stack-tw)" />
            <circle cx="10.5" cy="9.5" r="2" fill="#020617" />
            <circle cx="21" cy="16" r="1.5" fill="#38BDF8" />
            <circle cx="29.5" cy="30.5" r="2" fill="#020617" />
            <defs>
              <linearGradient id="code-stack-tw" x1="7" y1="6" x2="33" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#C084FC" />
              </linearGradient>
            </defs>
          </svg>

          {/* Logo Text */}
          <div style={{ display: 'flex', fontSize: '84px', fontWeight: '900', letterSpacing: '-0.04em' }}>
            <span style={{ color: '#FFFFFF' }}>Neel</span>
            <span style={{ color: '#38BDF8' }}>Stack</span>
          </div>
        </div>

        {/* Main Headline Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: '36px',
            fontWeight: '800',
            color: '#F8FAFC',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            maxWidth: '900px',
            marginBottom: '14px',
          }}
        >
          AI-Native Enterprise Software &amp; Product Engineering
        </div>

        {/* Sub-Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: '22px',
            fontWeight: '500',
            color: '#94A3B8',
            textAlign: 'center',
            marginBottom: '36px',
          }}
        >
          Scaling Intelligent SaaS Platforms, ERP Systems &amp; Custom AI Agents
        </div>

        {/* Capability Badges Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {['AI Agents', 'DhruvaOS Suite', 'Cloud Architecture', 'Custom SaaS'].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '9999px',
                padding: '8px 20px',
                color: '#E2E8F0',
                fontSize: '15px',
                fontWeight: '700',
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Bottom glowing accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #38BDF8 0%, #2563EB 50%, #7C3AED 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
