'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
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

const mainLinks = [
  { href: '/', label: 'Home', nr: '01' },
  { href: '/boeken', label: 'Proefles boeken', nr: '02', highlight: true },
  { href: '/pakketten', label: 'Pakketten & Prijzen', nr: '03' },
  { href: '/over-ons', label: 'Over Ons', nr: '04' },
  { href: '/contact', label: 'Contact', nr: '05' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Sluit alles bij route-wijziging
  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll — ALLEEN op mobiel
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      document.body.style.overflow = mobileOpen ? 'hidden' : ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled || mobileOpen
            ? 'bg-[#080808]/95 backdrop-blur-md border-[#1a1a1a] shadow-lg'
            : 'bg-transparent border-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
          <Logo href="/" size="md" />

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7">
            <li><Link href="/" className="text-slate-300 hover:text-coral-400 font-medium transition-colors text-sm">Home</Link></li>
            <li><Link href="/pakketten" className="text-slate-300 hover:text-coral-400 font-medium transition-colors text-sm">Pakketten & Prijzen</Link></li>

            {/* Over Ons dropdown */}
            <li className="relative" onMouseLeave={() => setDropdownOpen(false)}>
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                onClick={() => setDropdownOpen(o => !o)}
                className={`flex items-center gap-1.5 font-medium transition-colors text-sm ${dropdownOpen ? 'text-coral-400' : 'text-slate-300 hover:text-coral-400'}`}
              >
                Over Ons
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 md:-translate-x-1/4 mt-3 w-[calc(100vw-2rem)] max-w-[420px] rounded-2xl border border-[#222] shadow-2xl overflow-hidden z-50"
                  style={{ background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(24px)' }}>
                  <div className="p-2 pb-0">
                    <p className="text-[9px] text-slate-700 uppercase tracking-[0.25em] font-bold px-3 pt-2 pb-1.5">Over ons</p>
                    {overOnsItems.filter(i => i.group === 'over').map(item => (
                      <Link key={item.href} href={item.href} onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#141414] transition-colors group">
                        <span className="text-lg w-7 text-center shrink-0">{item.icon}</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-white text-sm font-semibold group-hover:text-coral-400 transition-colors leading-tight">{item.label}</p>
                          <p className="text-slate-600 text-xs">{item.desc}</p>
                        </div>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#333] group-hover:text-coral-400 transition-colors shrink-0">
                          <path d="M4.5 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <div className="px-2 py-2 border-t border-[#161616] mt-1">
                    <p className="text-[9px] text-slate-700 uppercase tracking-[0.25em] font-bold px-3 pb-1.5">Werken bij ons</p>
                    {overOnsItems.filter(i => i.group === 'werk').map(item => (
                      <Link key={item.href} href={item.href} onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#141414] transition-colors group">
                        <span className="text-lg w-7 text-center shrink-0">{item.icon}</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-white text-sm font-semibold group-hover:text-coral-400 transition-colors leading-tight">{item.label}</p>
                          <p className="text-slate-600 text-xs">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="p-2 border-t border-[#161616]">
                    {overOnsItems.filter(i => i.group === 'cta').map(item => (
                      <Link key={item.href} href={item.href} onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl bg-coral-500/10 hover:bg-coral-500/20 border border-coral-500/20 transition-colors group">
                        <span className="text-lg w-7 text-center shrink-0">{item.icon}</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-coral-400 text-sm font-bold leading-tight">{item.label}</p>
                          <p className="text-slate-600 text-xs">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li><Link href="/contact" className="text-slate-300 hover:text-coral-400 font-medium transition-colors text-sm">Contact</Link></li>
          </ul>

          {/* Desktop: phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+31644626777" className="flex items-center gap-1.5 text-slate-400 hover:text-coral-400 transition-colors text-sm font-medium">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.02 8.81a19.79 19.79 0 01-3.07-8.59A2 2 0 012.88 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +31 6 44626777
            </a>
            <Link href="/boeken" className="bg-coral-500 hover:bg-coral-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors text-sm whitespace-nowrap">
              🚗 Proefles boeken
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Menu"
          >
            <motion.span
              className="block w-6 h-0.5 bg-white rounded-full origin-center"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-white rounded-full"
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-white rounded-full origin-center"
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </header>

      {/* ── FULL SCREEN MOBILE MENU ─────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ background: '#080808' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)' }} />

            <div className="flex-1 flex flex-col justify-center px-8 pt-20">
              {/* Main nav items */}
              <nav className="space-y-1">
                {mainLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ delay: i * 0.07, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-baseline gap-4 py-3 group border-b border-[#111] ${
                        link.highlight ? 'border-coral-500/20' : ''
                      }`}
                    >
                      <span className="text-[10px] text-slate-700 font-mono w-6 shrink-0">{link.nr}</span>
                      <span className={`text-3xl font-extrabold tracking-tight transition-colors ${
                        link.highlight
                          ? 'text-coral-400'
                          : 'text-white group-hover:text-coral-400'
                      }`}>
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom contact */}
              <motion.div
                className="mt-10 space-y-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <a href="https://wa.me/31644626777" target="_blank" rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 bg-green-700/15 border border-green-700/30 text-green-300 font-bold py-3.5 px-5 rounded-xl text-sm transition-colors">
                  💬 <span>WhatsApp sturen</span>
                </a>
                <a href="tel:+31644626777" onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 bg-[#111] border border-[#222] text-white font-bold py-3.5 px-5 rounded-xl text-sm transition-colors">
                  📞 <span>+31 6 44626777</span>
                </a>
              </motion.div>
            </div>

            {/* Footer */}
            <motion.div
              className="px-8 pb-8 text-slate-700 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Verkeersschool Farhan · Assen & Amersfoort
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
