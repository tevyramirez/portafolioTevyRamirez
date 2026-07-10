'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[ErrorBoundary]', error)
    }
  }, [error])

  return (
    <main
      id="main-content"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-bg noise-bg"
    >
      <div className="max-w-lg border-6 border-ink shadow-brutal-2xl p-10 md:p-14 bg-bg">
        <p className="font-mono text-xs text-error uppercase tracking-widest mb-4">
          500 // overload
        </p>
        <h1 className="font-display text-display-xl text-ink leading-none mb-4">
          Sobrecarga del mezclador
        </h1>
        <p className="font-body text-base text-ink-70 leading-relaxed mb-8">
          Algo se desconectó en el estudio. El equipo técnico ya fue notificado.
          Vuelve en unos minutos.
        </p>
        {error.digest && (
          <p className="font-mono text-[10px] text-ink-30 mb-6">
            digest: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-ink border-3 border-ink font-ui font-semibold text-base no-underline shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all duration-fast ease-brutal cursor-pointer"
          >
            Reintentar
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-ink border-3 border-ink font-ui font-semibold text-base no-underline shadow-brutal hover:bg-ink hover:text-bg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all duration-fast ease-brutal"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
