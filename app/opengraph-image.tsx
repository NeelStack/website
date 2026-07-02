import { ImageResponse } from 'next/og'

export const alt = 'NeelStack Technologies — Enterprise Software & AI Solutions'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

/**
 * Next.js Dynamic OpenGraph Image generator.
 * Produces a premium branded 1200×630 social preview with:
 * - Deep navy background matching the design system
 * - Blue→Teal gradient logo mark + wordmark
 * - Dot-grid pattern background texture
 * - Gradient headline accent bar
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#070b14',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '72px 80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot-grid background texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.07) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Blue radial glow top-left */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-60px',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Teal radial glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-60px',
            width: '500px',
            height: '350px',
            background: 'radial-gradient(ellipse, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '48px',
            position: 'relative',
          }}
        >
          {/* Gradient logo mark */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '76px',
              height: '76px',
              borderRadius: '18px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.15)',
              color: 'white',
              fontSize: '42px',
              fontWeight: '900',
              letterSpacing: '-0.03em',
            }}
          >
            N
          </div>

          {/* Wordmark */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span
              style={{
                fontSize: '44px',
                fontWeight: '800',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                background: 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Neel<span style={{ color: 'white' }}>Stack</span>
            </span>
            <span
              style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.35)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: '500',
              }}
            >
              Technologies
            </span>
          </div>
        </div>

        {/* Gradient accent bar */}
        <div
          style={{
            width: '56px',
            height: '4px',
            borderRadius: '2px',
            background: 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)',
            marginBottom: '24px',
            position: 'relative',
          }}
        />

        {/* Main headline */}
        <h1
          style={{
            fontSize: '58px',
            fontWeight: '800',
            color: 'white',
            lineHeight: 1.18,
            margin: '0 0 24px 0',
            maxWidth: '860px',
            letterSpacing: '-0.025em',
            position: 'relative',
          }}
        >
          Building the Future of{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Enterprise Software & AI
          </span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: '24px',
            color: 'rgba(255, 255, 255, 0.5)',
            margin: 0,
            fontWeight: '400',
            lineHeight: 1.5,
            position: 'relative',
          }}
        >
          Custom SaaS • AI Solutions • ERP Systems • Mobile & Web Apps
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, transparent 100%)',
          }}
        />

        {/* Domain watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            right: '80px',
            color: 'rgba(255, 255, 255, 0.25)',
            fontSize: '18px',
            letterSpacing: '0.05em',
          }}
        >
          neelstack.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
