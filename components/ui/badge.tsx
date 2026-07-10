import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'secondary'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const base =
    'inline-flex items-center gap-1 font-ui text-xs font-semibold uppercase tracking-wider ' +
    'px-3 py-1 border-2 border-ink whitespace-nowrap'

  const variants = {
    default: 'bg-ink text-bg',
    accent: 'bg-accent text-ink',
    secondary: 'bg-secondary text-bg',
  }

  return <span className={cn(base, variants[variant], className)}>{children}</span>
}
