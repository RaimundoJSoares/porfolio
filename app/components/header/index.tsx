import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-header'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <Image width={58} height={49} src="/images/logo.svg" alt="Logo" />
        </Link>

        <nav className="flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}
