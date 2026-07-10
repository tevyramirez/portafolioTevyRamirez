'use client'

import { cn } from '@/lib/utils'

interface CardVinylProps {
  title: string
  tech: string[]
  trackNumber: number
  sector?: string[]
  featured?: boolean
  onClick?: () => void
  className?: string
  children?: React.ReactNode
}

export function CardVinyl({ title, tech, trackNumber, sector, featured, onClick, className, children }: CardVinylProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative text-left bg-secondary border-6 border-ink shadow-brutal-lg ' +
        'transition-all duration-base ease-brutal cursor-pointer ' +
        'hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal',
        'w-full',
        className
      )}
      aria-label={`Ver detalles de ${title}`}
    >
      <div className={cn(featured ? 'h-48 md:h-56' : 'h-36')}>
        {children}
      </div>

      <div className={cn('border-t-6 border-ink', featured ? 'p-5' : 'p-4')}>
        <h3 className={cn(
          'font-display text-bg leading-none mb-2',
          featured ? 'text-display-md' : 'text-[1.1rem]'
        )}>
          {title}
        </h3>

        {sector && sector.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {sector.slice(0, 3).map((s) => (
              <span
                key={s}
                className="font-mono text-[9px] font-bold uppercase tracking-wider bg-ink text-accent px-1.5 py-0.5 border border-accent"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {tech.slice(0, featured ? 4 : 3).map((t) => (
            <span
              key={t}
              className="font-ui text-[10px] font-semibold uppercase tracking-wider bg-ink text-accent px-2 py-0.5 border-2 border-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-2 left-2 font-mono text-xs font-bold text-accent bg-ink px-2 py-0.5 border-2 border-accent">
        {String(trackNumber).padStart(2, '0')}
      </div>
    </button>
  )
}
