'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  href?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', href, children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-ui font-semibold text-base ' +
      'px-6 py-3 cursor-pointer select-none no-underline ' +
      'transition-all duration-fast ease-brutal ' +
      'disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none'

    const variants = {
      primary:
        'bg-accent text-ink border-3 border-ink shadow-brutal ' +
        'hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm ' +
        'active:translate-x-1.5 active:translate-y-1.5 active:shadow-none',
      secondary:
        'bg-transparent text-ink border-3 border-ink shadow-brutal ' +
        'hover:bg-ink hover:text-bg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm ' +
        'active:translate-x-1.5 active:translate-y-1.5 active:shadow-none',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
