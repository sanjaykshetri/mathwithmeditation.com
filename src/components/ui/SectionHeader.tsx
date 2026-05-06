interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ label, title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center mb-12' : 'mb-12'}>
      {label && (
        <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
