export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-screen flex flex-col items-center justify-center bg-background noise-bg gap-6"
    >
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-primary tracking-[0.4em] uppercase">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          <span>loading construct</span>
        </div>
        <div
          className="h-px w-48 bg-gradient-to-r from-transparent via-primary to-transparent"
          aria-hidden="true"
        />
        <span className="sr-only">Cargando el portafolio</span>
      </div>
    </div>
  )
}
