import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
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
          backgroundColor: '#0a0f0a',
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(57, 255, 20, 0.08) 0%, transparent 50%)',
          fontFamily: 'monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: '14px',
              color: '#39ff14',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}
          >
            Desarrollador Fullstack
          </div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: '#e8e8e8',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Sebastian Ramirez
          </div>
          <div
            style={{
              fontSize: '18px',
              color: '#888',
              marginTop: '8px',
              maxWidth: '600px',
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            Vue 3 / React / TypeScript / Node.js / Python / Docker
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
