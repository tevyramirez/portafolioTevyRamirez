import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sebastián Ramírez - Desarrollador Fullstack',
    short_name: 'SR Dev',
    description: 'Portafolio de Sebastián Ramírez, Desarrollador Fullstack con experiencia en Vue 3, React, TypeScript, Node.js, Python y Docker.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f0a',
    theme_color: '#39ff14',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
