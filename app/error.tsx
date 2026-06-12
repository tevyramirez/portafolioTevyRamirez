"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error("[ErrorBoundary]", error)
    }
  }, [error])

  return (
    <main
      id="main-content"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background noise-bg"
    >
      <div className="relative z-10 max-w-xl space-y-8">
        <p className="font-mono text-xs text-destructive tracking-[0.4em] uppercase">
          system error // abnormal termination
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground text-balance">
          Algo se ha desconectado
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto text-pretty">
          La aplicación ha encontrado una condición inesperada. Puedes reintentar la
          operación o volver al inicio.
        </p>
        {error.digest && (
          <p className="font-mono text-[10px] text-muted-foreground/60">
            digest: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
          >
            Reintentar
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border/60 text-foreground font-medium rounded-lg transition-all duration-200 hover:bg-secondary/50 active:scale-[0.98]"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
