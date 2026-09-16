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
          backgroundColor: '#070B14',
          fontFamily: 'Inter, system-ui, sans-serif',
          position: 'relative',
          padding: '40px',
        }}
      >
        {/* Background Multi-Aurora Glow Mesh */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 15% 15%, rgba(59, 130, 246, 0.35) 0%, transparent 55%), radial-gradient(circle at 85% 85%, rgba(139, 92, 246, 0.35) 0%, transparent 55%), radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.20) 0%, transparent 50%)',
          }}
        />

        {/* Blueprint Grid Lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.7,
          }}
        />

        {/* Outer Frosted Glassmorphism Card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(11, 18, 32, 0.88)',
            border: '1px solid rgba(99, 102, 241, 0.40)',
            borderRadius: '28px',
            boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(139, 92, 246, 0.15)',
            padding: '40px 48px',
            position: 'relative',
          }}
        >
          {/* Top Row: AI-Native Badge & Legal Anchor */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {/* AI-Native Pill Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.35)',
                borderRadius: '9999px',
                padding: '8px 20px',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: '#8B5CF6',
                  boxShadow: '0 0 12px #8B5CF6',
                }}
              />
              <div
                style={{
                  color: '#C4B5FD',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.14em',
                }}
              >
                AI-NATIVE PRODUCT ENGINEERING
              </div>
            </div>

            {/* DPIIT Recognized / Enterprise Authority */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(59, 130, 246, 0.12)',
                border: '1px solid rgba(59, 130, 246, 0.30)',
                borderRadius: '9999px',
                padding: '8px 18px',
                color: '#93C5FD',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.08em',
              }}
            >
              <span>✦</span>
              <span>DPIIT RECOGNIZED · STARTUP INDIA</span>
            </div>
          </div>

          {/* Center Brand & Core Messaging */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              width: '100%',
            }}
          >
            {/* Logo Mark + Wordmark */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              {/* 6-Sided Hexagon Monogram */}
              <svg
                width="92"
                height="92"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="tw-brand-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>

                {/* Top Half: Royal Blue */}
                <path
                  d="M15.36,70 L15.36,30 L50,10 L84.64,30"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="5.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* Bottom Half: Rich Violet */}
                <path
                  d="M84.64,30 L84.64,70 L50,90 L15.36,70"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="5.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* Geometric N Synapse */}
                <path
                  d="M38,67 V33 L62,67 V33"
                  fill="none"
                  stroke="url(#tw-brand-grad)"
                  strokeWidth="7"
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Symmetrical Dual-Tone Wordmark */}
              <div
                style={{
                  display: 'flex',
                  fontSize: '84px',
                  fontWeight: '900',
                  letterSpacing: '-0.04em',
                }}
              >
                <span style={{ color: '#3B82F6' }}>N</span>
                <span style={{ color: '#8B5CF6' }}>ee</span>
                <span style={{ color: '#3B82F6' }}>l</span>
                <span style={{ color: '#FFFFFF', marginLeft: '3px' }}>Stack</span>
              </div>
            </div>

            {/* Headline */}
            <div
              style={{
                display: 'flex',
                fontSize: '40px',
                fontWeight: '800',
                color: '#FFFFFF',
                letterSpacing: '-0.025em',
                textAlign: 'center',
              }}
            >
              Engineering Autonomous AI &amp; Enterprise Cloud Systems
            </div>

            {/* Sub-Headline */}
            <div
              style={{
                display: 'flex',
                fontSize: '19px',
                fontWeight: '500',
                color: '#94A3B8',
                textAlign: 'center',
              }}
            >
              Scaling Intelligent SaaS Platforms · Multi-Agent Workflows · High-Performance Architecture
            </div>
          </div>

          {/* Bottom Row: Three Engines Matrix + HTTPS URL */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingTop: '8px',
            }}
          >
            {/* The Three Engines Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '1px solid rgba(59, 130, 246, 0.40)',
                  borderRadius: '10px',
                  padding: '7px 14px',
                  color: '#93C5FD',
                  fontSize: '13px',
                  fontWeight: '700',
                }}
              >
                ⚡ NeelStack Services
              </div>
              <div
                style={{
                  backgroundColor: 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.40)',
                  borderRadius: '10px',
                  padding: '7px 14px',
                  color: '#C4B5FD',
                  fontSize: '13px',
                  fontWeight: '700',
                }}
              >
                🎓 DhruvaOS
              </div>
              <div
                style={{
                  backgroundColor: 'rgba(6, 182, 212, 0.15)',
                  border: '1px solid rgba(6, 182, 212, 0.40)',
                  borderRadius: '10px',
                  padding: '7px 14px',
                  color: '#67E8F9',
                  fontSize: '13px',
                  fontWeight: '700',
                }}
              >
                🛠️ ToolVines
              </div>
            </div>

            {/* URL Footer Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#E2E8F0',
                fontSize: '14px',
                fontWeight: '800',
                letterSpacing: '0.1em',
                fontFamily: 'monospace',
              }}
            >
              <span style={{ color: '#8B5CF6' }}>https://</span>
              <span>neelstack.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Accent Chromatic Line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
