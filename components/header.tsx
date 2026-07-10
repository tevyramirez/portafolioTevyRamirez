'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useAudioInteraction } from '@/hooks/useAudioInteraction'
import { useDarkMode } from '@/hooks/useDarkMode'

const navItems = [
  { name: 'Proyectos', href: '#projects' },
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Contacto', href: '#contact' },
]

export function Header() {
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDark, toggle } = useDarkMode()
  const { playHover, playClick } = useAudioInteraction()
  const hoverThrottle = useRef(false)

  const throttledHover = useCallback(() => {
    if (hoverThrottle.current) return
    playHover(440)
    hoverThrottle.current = true
    setTimeout(() => { hoverThrottle.current = false }, 80)
  }, [playHover])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const sections = navItems.map((item) => item.href.slice(1))

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(section)
              }
            })
          },
          { rootMargin: '-50% 0px -50% 0px' }
        )
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-sticky bg-bg border-b-3 border-ink">
      <nav className="max-w-container mx-auto px-5 md:px-10 flex items-center justify-between h-16" aria-label="Navegación principal">
        <Link
          href="/"
          className="font-display text-2xl font-black text-ink no-underline leading-none"
          aria-label="Tevy Ramírez — Inicio"
        >
          TR
        </Link>

        <ul className="hidden md:flex items-center gap-10" role="list">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onMouseEnter={throttledHover}
                className={cn(
                  'relative font-ui font-semibold text-sm uppercase tracking-wider no-underline transition-colors duration-fast ease-brutal',
                  activeSection === item.href.slice(1)
                    ? 'text-ink'
                    : 'text-ink-50 hover:text-ink'
                )}
                aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-base ease-brutal" style={{ width: activeSection === item.href.slice(1) ? '100%' : '0%' }} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/tevyramirez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-50 hover:text-ink transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sebastian-ramirez-ramirez-b831b0244/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-50 hover:text-ink transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>

          <button
            onClick={toggle}
            onMouseEnter={() => playHover(660)}
            className="w-9 h-9 flex items-center justify-center border-2 border-ink font-mono text-sm font-bold bg-bg hover:bg-ink hover:text-bg transition-colors"
            aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
            aria-pressed={isDark}
          >
            {isDark ? '☀' : '☾'}
          </button>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center border-2 border-ink text-ink"
            onClick={() => { setMobileMenuOpen(!mobileMenuOpen); playClick() }}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t-3 border-ink bg-bg">
          <ul className="flex flex-col py-4 px-5 gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    'block py-3 px-4 font-ui font-semibold text-sm uppercase tracking-wider border-2 border-transparent transition-colors',
                    activeSection === item.href.slice(1)
                      ? 'text-ink bg-accent border-ink'
                      : 'text-ink hover:bg-ink-10 border-ink'
                  )}
                  aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
