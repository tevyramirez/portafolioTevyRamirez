import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFDD0" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
}

export const metadata: Metadata = {
  metadataBase: new URL('https://tevyramirez.dev'),
  title: {
    default: 'Tevy Ramírez — Creative Developer & Sound Architect',
    template: '%s | Tevy Ramírez',
  },
  description: 'Desarrollo de software a medida de alto rendimiento y diseño de interfaces acústicas interactivas. Portafolio de Tevy Ramírez desde Talca, Región del Maule, Chile.',
  keywords: ['Creative Developer', 'Sound Architect', 'React', 'Web Audio API', 'Frontend', 'Portafolio', 'Desarrollador Chile', 'Talca', 'Neo-Brutalism', 'Interactive Design'],
  authors: [{ name: 'Tevy Ramírez' }],
  creator: 'Tevy Ramírez',
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
    locale: 'es_CL',
    url: 'https://tevyramirez.dev',
    siteName: 'Tevy Ramírez | Creative Developer & Sound Architect',
    title: 'Tevy Ramírez — Creative Developer & Sound Architect',
    description: 'Desarrollo de software a medida de alto rendimiento y diseño de interfaces acústicas interactivas desde Talca, Chile.',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Tevy Ramírez — Creative Developer & Sound Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tevy Ramírez — Creative Developer & Sound Architect',
    description: 'Desarrollo de software a medida de alto rendimiento y diseño de interfaces acústicas interactivas desde Talca, Chile.',
    images: ['/og'],
    creator: '@tevyramirez',
  },
  alternates: {
    canonical: 'https://tevyramirez.dev',
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
        "name": "Tevy Ramírez",
        "jobTitle": "Creative Developer & Sound Architect",
        "url": "https://tevyramirez.dev",
        "description": "Desarrollador de software a medida de alto rendimiento y diseño de interfaces acústicas interactivas. Interactive Sound Architect desde Talca, Región del Maule, Chile.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Talca",
          "addressRegion": "Región del Maule",
          "addressCountry": "CL"
        },
        "sameAs": [
          "https://github.com/tevyramirez",
          "https://www.linkedin.com/in/sebastian-ramirez-ramirez-b831b0244/"
        ],
        "knowsAbout": [
          "Web Development",
          "Web Audio API",
          "React",
          "TypeScript",
          "Node.js",
          "Python",
          "PostgreSQL",
          "Docker",
          "Neo-Brutalism Design",
          "Sound Design"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Creative Developer & Sound Architect"
        }
      },
      {
        "@type": "WebSite",
        "name": "Tevy Ramírez",
        "url": "https://tevyramirez.dev"
      }
    ]
  }

  return (
    <html lang="es-CL" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Sora:wght@400;600;700&family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="noise-bg">
        <a
          href="#main-content"
          className="skip-link"
        >
          Saltar al contenido principal
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
