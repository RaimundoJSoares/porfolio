'use client'

import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathName = usePathname()

  const isActive = pathName === href
  return (
    <Link
      href={href}
      className={cn(
        'text-gray-800 flex items-center gap-2 font-mono font-medium ',
        isActive && 'text-blue-600 text font-bold',
      )}
    >
      <span className="text-emerald-700">#</span>
      {label}
    </Link>
  )
}
