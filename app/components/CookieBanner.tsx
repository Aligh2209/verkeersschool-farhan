'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Small delay so it doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'all')
    setVisible(false)
  }

  function minimal() {
    localStorage.setItem('cookie-consent', 'minimal')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="max-w-4xl mx-auto rounded-2xl border border-[#2a2a2a] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(20px)' }}
          >
            {/* Icon */}
            <span className="text-2xl shrink-0">🍪</span>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold mb-1">
                Wij gebruiken cookies
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                Verkeersschool Farhan gebruikt functionele cookies om de website goed te laten werken.
                Lees meer in onze{' '}
                <Link href="/privacy" className="text-coral-400 underline hover:text-coral-300">
                  privacyverklaring
                </Link>.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 shrink-0 w-full sm:w-auto">
              <button
                onClick={minimal}
                className="flex-1 sm:flex-none text-xs font-medium text-slate-400 hover:text-white border border-[#2a2a2a] hover:border-[#3a3a3a] bg-[#111] px-4 py-2.5 rounded-xl transition-colors"
              >
                Alleen noodzakelijk
              </button>
              <button
                onClick={accept}
                className="flex-1 sm:flex-none text-xs font-bold text-white bg-coral-500 hover:bg-coral-600 px-5 py-2.5 rounded-xl transition-colors"
              >
                Accepteren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
