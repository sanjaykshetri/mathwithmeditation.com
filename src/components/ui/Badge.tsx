import { clsx } from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'meditation' | 'success'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={clsx(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      {
        'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300': variant === 'default',
        'bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300': variant === 'primary',
        'bg-meditation-100 dark:bg-meditation-950 text-meditation-700 dark:text-meditation-300': variant === 'meditation',
        'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300': variant === 'success',
      },
      className
    )}>
      {children}
    </span>
  )
}
