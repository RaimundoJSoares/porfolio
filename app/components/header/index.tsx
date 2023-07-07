import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-header'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <header className="absolute top-0 w-full  z-10  h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <div className="flex items-center justify-center gap-10">
          <Link
            href="https://www.linkedin.com/in/rjssoares001/"
            target="_blank"
          >
            <Image
              width={35}
              height={35}
              src="/images/linkedin.svg"
              alt="Linkedin"
            />
          </Link>
          <Link href="https://github.com/RaimundoJSoares" target="_blank">
            <Image
              width={35}
              height={35}
              src="/images/github.svg"
              alt="Github"
            />
          </Link>
          <a
            href="./Resume_RaimundoJuniorSoares.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image width={35} height={35} src="/images/pdf.svg" alt="Resume" />
          </a>
        </div>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}
