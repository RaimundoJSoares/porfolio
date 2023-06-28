import Link from 'next/link'

type NavItemProps = {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <Link
      href={href}
      className="text-gray-800 flex items-center gap-2 font-mono font-medium"
    >
      <span className="text-emerald-700">#</span>
      {label}
    </Link>
  )
}
