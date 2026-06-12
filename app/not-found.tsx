import Link from "next/link"

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background noise-bg"
    >
      <div className="relative z-10 max-w-xl space-y-8">
        <p className="font-mono text-xs text-primary tracking-[0.4em] uppercase">
          404 // signal lost
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance">
          Esta ruta no existe
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto text-pretty">
          La página que buscas se ha desconectado del constructo. Vuelve al inicio para
          continuar la navegación.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
          >
            Volver al inicio
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border/60 text-foreground font-medium rounded-lg transition-all duration-200 hover:bg-secondary/50 active:scale-[0.98]"
          >
            Contactar
          </Link>
        </div>
      </div>
    </main>
  )
}
