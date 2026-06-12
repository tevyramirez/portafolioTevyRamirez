import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LensCursor } from '@/components/lens-cursor'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f0d" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sebastianramirez.dev'),
  title: {
    default: 'Sebastián Ramírez | Desarrollador Fullstack',
    template: '%s | Sebastián Ramírez',
  },
  description: 'Desarrollador Fullstack con experiencia en Vue 3, React, TypeScript, Node.js, Python y Docker. Desarrollo de software a medida y plataformas SaaS en producción.',
  keywords: ['Fullstack Developer', 'Vue 3', 'React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'SaaS', 'DevOps', 'Desarrollador Chile'],
  authors: [{ name: 'Sebastián Ramírez' }],
  creator: 'Sebastián Ramírez',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://sebastianramirez.dev',
    siteName: 'Sebastián Ramírez | Portafolio',
    title: 'Sebastián Ramírez | Desarrollador Fullstack',
    description: 'Desarrollador Fullstack con experiencia en Vue 3, React, TypeScript, Node.js, Python y Docker.',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Sebastián Ramírez - Desarrollador Fullstack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebastián Ramírez | Desarrollador Fullstack',
    description: 'Desarrollador Fullstack con experiencia en Vue 3, React, TypeScript, Node.js, Python y Docker.',
    images: ['/og'],
    creator: '@tevyramirez',
  },
  alternates: {
    canonical: 'https://sebastianramirez.dev',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Sebastián Ramírez",
        "jobTitle": "Fullstack Engineer",
        "url": "https://sebastianramirez.dev",
        "description": "Desarrollador Fullstack con experiencia en Vue 3, React, TypeScript, Node.js, Python y Docker. Construcción de plataformas SaaS, arquitecturas seguras y software a medida.",
        "sameAs": [
          "https://github.com/tevyramirez",
          "https://www.linkedin.com/in/sebastian-ramirez-ramirez-b831b0244/"
        ],
        "knowsAbout": [
          "Software Engineering",
          "Vue 3",
          "React",
          "TypeScript",
          "Node.js",
          "Python",
          "Django",
          "Docker",
          "CI/CD Pipelines",
          "PostgreSQL"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Fullstack Engineer"
        },
        "worksFor": [
          { "@type": "Organization", "name": "ONE Consultores" },
          { "@type": "Organization", "name": "Avisodecobro" },
          { "@type": "Organization", "name": "DA5" },
          { "@type": "Organization", "name": "Icono Marketing" }
        ]
      },
      {
        "@type": "WebSite",
        "name": "Sebastián Ramírez",
        "url": "https://sebastianramirez.dev"
      }
    ]
  }

  return (
    <html lang="es-CL">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased noise-bg`}>
        {/* Skip Link para accesibilidad */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Saltar al contenido principal
        </a>
        <LensCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}