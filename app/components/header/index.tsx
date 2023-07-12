import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-header'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'contact',
    href: '#contact',
  },
]

export const Header = () => {
  return (
    <header className="  h-28 flex items-center justify-center ">
      <div className="container flex items-center justify-between scroll-smooth ">
        <Link href="#home">
          <Image
            width={100}
            height={100}
            src="/images/logorj.png"
            alt="Logo"
            className="w-20 h-200 rounded-full"
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10 scroll-s">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}
