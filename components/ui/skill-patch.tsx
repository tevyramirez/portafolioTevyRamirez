'use client'

import { cn } from '@/lib/utils'
import { useAudioInteraction } from '@/hooks/useAudioInteraction'
import { useCallback, useRef } from 'react'

interface SkillPatchProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function SkillPatch({ children, className, onClick }: SkillPatchProps) {
  const { playHover, playClick } = useAudioInteraction()
  const hoverRef = useRef(false)

  const handleMouseEnter = useCallback(() => {
    if (!hoverRef.current) {
      hoverRef.current = true
      playHover(550)
    }
  }, [playHover])

  const handleMouseLeave = useCallback(() => {
    hoverRef.current = false
  }, [])

  const handleClick = useCallback(() => {
    playClick(550)
    onClick?.()
  }, [playClick, onClick])

  return (
    <button
      type="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={cn(
        'inline-flex items-center gap-2 bg-accent border-3 border-ink shadow-brutal-sm ' +
        'font-ui font-semibold text-sm px-4 py-2 cursor-pointer select-none ' +
        'transition-all duration-fast ease-brutal ' +
        'hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal ' +
        'active:translate-x-1 active:translate-y-1 active:shadow-none',
        className
      )}
    >
      {children}
    </button>
  )
}
