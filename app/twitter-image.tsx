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
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 35%, #f5f3ff 70%, #eff6ff 100%)',
          fontFamily: 'Inter',
          position: 'relative',
          padding: '48px',
        }}
      >
        {/* Soft Multi-Color Radial Mesh Lighting */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.22) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.18) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.10) 0%, transparent 60%)',
          }}
        />

        {/* Subtle grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Outer Glowing Border Frame Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            border: '1px solid rgba(203, 213, 225, 0.6)',
            borderRadius: '24px',
            boxShadow: '0 20px 60px -15px rgba(15, 23, 42, 0.05)',
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
              backgroundColor: 'rgba(6, 182, 212, 0.10)',
              border: '1px solid rgba(6, 182, 212, 0.35)',
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
                backgroundColor: '#0284c7',
                boxShadow: '0 0 10px rgba(2, 132, 199, 0.7)',
              }}
            />
            <div
              style={{
                color: '#0284c7',
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
                <linearGradient id="tw-unified-light" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
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
                stroke="url(#tw-unified-light)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Logo Text: Neel in Dark Slate, Stack in Cyan */}
            <div style={{ display: 'flex', fontSize: '80px', fontWeight: '900', letterSpacing: '-0.04em' }}>
              <span style={{ color: '#0F172A' }}>Neel</span>
              <span style={{ color: '#0284c7' }}>Stack</span>
            </div>
          </div>

          {/* Main Headline Tagline */}
          <div
            style={{
              display: 'flex',
              fontSize: '34px',
              fontWeight: '800',
              color: '#0F172A',
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
              color: '#475569',
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
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(203, 213, 225, 0.8)',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                  borderRadius: '9999px',
                  padding: '8px 20px',
                  color: '#1E293B',
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
            background: 'linear-gradient(90deg, #06b6d4 0%, #2563eb 50%, #7c3aed 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
