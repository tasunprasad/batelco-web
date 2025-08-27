import Link from 'next/link'

interface BreadcrumbProps {
  items: Array<{
    label: string
    href?: string
  }>
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-gray-500 mb-6 md:mb-8" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-1 md:space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-1 md:mx-2 text-gray-400">/</span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-red-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

