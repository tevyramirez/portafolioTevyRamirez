'use client'

import { cn } from '@/lib/utils'

interface CardVinylProps {
  title: string
  tech: string[]
  trackNumber: number
  onClick?: () => void
  className?: string
  children?: React.ReactNode
}

export function CardVinyl({ title, tech, trackNumber, onClick, className, children }: CardVinylProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      }}
      className={cn(
        'relative bg-secondary border-6 border-ink shadow-brutal-lg ' +
        'transition-all duration-base ease-brutal cursor-pointer ' +
        'hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal',
        className
      )}
      aria-label={`Ver detalles de ${title}`}
    >
      {children}

      <div className="p-4">
        <h3 className="font-display text-display-md text-bg leading-none mb-2">
          {title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {tech.slice(0, 3).map((t) => (
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
    </div>
  )
}
