'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Logo from './Logo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pakketten', label: 'Pakketten & Prijzen' },
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-md border-navy-600 shadow-lg'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Logo href="/" size="md" />

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-slate-300 hover:text-coral-400 font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:block bg-coral-500 hover:bg-coral-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Inschrijven
        </Link>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu openen"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navy-900/95 backdrop-blur-md border-t border-navy-600 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-slate-300 hover:text-coral-400 font-medium py-1 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="block bg-coral-500 hover:bg-coral-600 text-white font-semibold px-5 py-2 rounded-lg text-center transition-colors mt-2"
                onClick={() => setOpen(false)}
              >
                Inschrijven
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
