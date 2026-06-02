'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Toon pas na 3 seconden — niet meteen op de hero
    const t = setTimeout(() => setVisible(true), 3000)

    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      // Verberg dichtbij het contactformulier (onderaan)
      setVisible(pct < 0.88)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll) }
  }, [])

  if (!visible) return null

  return (
    <motion.div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="flex gap-2 px-4 py-3 border-t border-[#1a1a1a]"
        style={{ background: 'rgba(8,8,8,0.96)', backdropFilter: 'blur(20px)' }}
      >
        <Link
          href="/boeken"
          className="flex-1 bg-coral-500 hover:bg-coral-600 text-white font-bold py-3 rounded-xl text-sm text-center transition-colors"
        >
          🚗 Plan proefles — €60
        </Link>
        <a
          href="https://wa.me/31644626777?text=Hallo%2C%20ik%20wil%20een%20proefles%20plannen"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-3 rounded-xl text-sm transition-colors"
          aria-label="WhatsApp"
        >
          💬
        </a>
      </div>
    </motion.div>
  )
}
