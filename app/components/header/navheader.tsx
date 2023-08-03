'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NavHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`z-10 scroll-smooth text-lg font-semibold w-full bg-gray-300 flex items-center justify-between h-10 sm:h-24 ${
        scrolled
          ? ' z-10 md:scroll-auto scroll-smooth sm:fixed  font-semibold w-full bg-gray-300 bg-opacity-70 mt-0 -ml-0.5 flex items-center justify-between h-24 backdrop-blur-sm shadow-xl shadow-gray-400 round-xl'
          : ''
      }`}
    >
      <div className="nav-header-logo ml-4 sm:ml-10 flex justify-start">
        <Link href="/">
          <Image
            alt=""
            src="/images/logo.svg"
            width={58}
            height={50}
            className="flex space-x-4 mr-5 sm:mr-10 gap-3 sm:gap-5 mb:10"
          />
        </Link>
      </div>
      <nav className="flex justify-end ">
        <ul className="flex space-x-4 mr-5 sm:mr-10 gap-3 sm:gap-5 mb:10 ">
          <li className="hover:text-gray-600 ">
            <Link href="/#home">Home</Link>
          </li>
          <li className="hover:text-gray-600 ">
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="hover:text-gray-600 ">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}