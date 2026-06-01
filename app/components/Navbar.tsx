'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Logo from './Logo'

const overOnsItems = [
  { href: '/over-ons#waarom',      icon: '🏆', label: 'Waarom Farhan',        desc: 'Wat maakt ons anders',      group: 'over' },
  { href: '/over-ons#instructeur', icon: '👨‍🏫', label: 'De instructeur',       desc: 'Wie is Farhan?',            group: 'over' },
  { href: '/over-ons#aanpak',      icon: '🎯', label: 'Onze aanpak',           desc: 'Hoe werken wij?',           group: 'over' },
  { href: '/over-ons#locaties',    icon: '📍', label: 'Locaties',              desc: 'Assen & Amersfoort',        group: 'over' },
  { href: '/over-ons#faq',         icon: '❓', label: 'Veelgestelde vragen',   desc: 'Eerlijke antwoorden',       group: 'over' },
  { href: '/werken-bij',           icon: '💼', label: 'Werken bij ons',        desc: 'Openstaande vacatures',     group: 'werk' },
  { href: '/contact',              icon: '📋', label: 'Contact & Inschrijven', desc: 'Plan een proefles — €60',   group: 'cta'  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOverOns, setMobileOverOns] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-[#1a1a1a] shadow-lg'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Logo href="/" size="md" />

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">

          <li>
            <Link href="/" className="text-slate-300 hover:text-coral-400 font-medium transition-colors text-sm">
              Home
            </Link>
          </li>

          <li>
            <Link href="/pakketten" className="text-slate-300 hover:text-coral-400 font-medium transition-colors text-sm">
              Pakketten & Prijzen
            </Link>
          </li>

          {/* Over Ons with dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(o => !o)}
              className={`flex items-center gap-1.5 font-medium transition-colors text-sm ${
                dropdownOpen ? 'text-coral-400' : 'text-slate-300 hover:text-coral-400'
              }`}
            >
              Over Ons
              <svg
                width="14" height="14" viewBox="0 0 14 14" fill="none"
                className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dropdown panel */}
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 md:-translate-x-1/4 mt-3 w-[calc(100vw-2rem)] max-w-[420px] rounded-2xl border border-[#222] shadow-2xl overflow-hidden z-50"
                style={{ background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(24px)' }}
              >
                {/* Over ons groep */}
                <div className="p-2 pb-0">
                  <p className="text-[9px] text-slate-700 uppercase tracking-[0.25em] font-bold px-3 pt-2 pb-1.5">Over ons</p>
                  {overOnsItems.filter(i => i.group === 'over').map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#141414] transition-colors group"
                    >
                      <span className="text-lg w-7 text-center shrink-0">{item.icon}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-white text-sm font-semibold group-hover:text-coral-400 transition-colors leading-tight">{item.label}</p>
                        <p className="text-slate-600 text-xs">{item.desc}</p>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto text-[#333] group-hover:text-coral-400 transition-colors shrink-0">
                        <path d="M4.5 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  ))}
                </div>

                {/* Werken bij */}
                <div className="px-2 py-2 border-t border-[#161616] mt-1">
                  <p className="text-[9px] text-slate-700 uppercase tracking-[0.25em] font-bold px-3 pb-1.5">Werken bij ons</p>
                  {overOnsItems.filter(i => i.group === 'werk').map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#141414] transition-colors group"
                    >
                      <span className="text-lg w-7 text-center shrink-0">{item.icon}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-white text-sm font-semibold group-hover:text-coral-400 transition-colors leading-tight">{item.label}</p>
                        <p className="text-slate-600 text-xs">{item.desc}</p>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto text-[#333] group-hover:text-coral-400 transition-colors shrink-0">
                        <path d="M4.5 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  ))}
                </div>

                {/* CTA footer */}
                <div className="p-2 border-t border-[#161616]">
                  {overOnsItems.filter(i => i.group === 'cta').map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl bg-coral-500/10 hover:bg-coral-500/20 border border-coral-500/20 transition-colors group"
                    >
                      <span className="text-lg w-7 text-center shrink-0">{item.icon}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-coral-400 text-sm font-bold leading-tight">{item.label}</p>
                        <p className="text-slate-600 text-xs">{item.desc}</p>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto text-coral-500 shrink-0">
                        <path d="M4.5 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link href="/contact" className="text-slate-300 hover:text-coral-400 font-medium transition-colors text-sm">
              Contact
            </Link>
          </li>

        </ul>

        {/* Desktop: phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+31644626777"
            className="flex items-center gap-1.5 text-slate-400 hover:text-coral-400 transition-colors text-sm font-medium">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.02 8.81a19.79 19.79 0 01-3.07-8.59A2 2 0 012.88 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +31 6 44626777
          </a>
          <Link href="/boeken"
            className="bg-coral-500 hover:bg-coral-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors text-sm whitespace-nowrap">
            🚗 Proefles boeken
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu openen"
        >
          {mobileOpen ? (
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-[#1a1a1a] px-4 pb-4"
          style={{ background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(20px)' }}
        >
          <ul className="flex flex-col pt-3 gap-1">
            <li>
              <Link href="/" className="block text-slate-300 hover:text-coral-400 font-medium py-2.5 px-2 transition-colors text-sm" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/pakketten" className="block text-slate-300 hover:text-coral-400 font-medium py-2.5 px-2 transition-colors text-sm" onClick={() => setMobileOpen(false)}>
                Pakketten & Prijzen
              </Link>
            </li>

            {/* Over Ons accordion */}
            <li>
              <button
                onClick={() => setMobileOverOns(o => !o)}
                className="flex items-center justify-between w-full text-slate-300 font-medium py-2.5 px-2 text-sm"
              >
                Over Ons
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className={`transition-transform ${mobileOverOns ? 'rotate-180' : ''}`}>
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileOverOns && (
                <div className="ml-4 mt-1 mb-2 border-l border-[#2a2a2a] pl-3 flex flex-col gap-0.5">
                  {overOnsItems.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => { setMobileOpen(false); setMobileOverOns(false) }}
                      className="flex items-center gap-2.5 py-2.5 text-slate-400 hover:text-coral-400 transition-colors text-sm"
                    >
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link href="/contact" className="block text-slate-300 hover:text-coral-400 font-medium py-2.5 px-2 transition-colors text-sm" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </li>

            <li className="pt-2">
              <Link
                href="/contact"
                className="block bg-coral-500 hover:bg-coral-600 text-white font-semibold px-5 py-3 rounded-xl text-center transition-colors text-sm"
                onClick={() => setMobileOpen(false)}
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
