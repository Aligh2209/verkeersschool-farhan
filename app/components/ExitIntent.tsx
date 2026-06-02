'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function ExitIntent() {
  const [open, setOpen] = useState(false)
  const [fired, setFired] = useState(false)

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem('exit-shown')) return

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !fired) {
        setFired(true)
        setOpen(true)
        sessionStorage.setItem('exit-shown', '1')
      }
    }

    // Wacht 45 seconden EN alleen op desktop (niet op mobiel)
    if (window.innerWidth < 768) return
    const t = setTimeout(() => {
      document.addEventListener('mouseleave', onMouseLeave)
    }, 45000)

    return () => {
      clearTimeout(t)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [fired])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[70] bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[71] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="w-full max-w-md rounded-2xl border border-[#2a2a2a] overflow-hidden shadow-2xl"
              style={{ background: '#0f0f0f' }}
            >
              {/* Header */}
              <div className="relative px-7 pt-7 pb-5 text-center">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-slate-600 hover:text-white transition-colors text-lg"
                >
                  ✕
                </button>
                <div className="text-4xl mb-3">🚗</div>
                <h2 className="text-2xl font-extrabold text-white mb-2">
                  Wacht even!
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Je rijbewijs begint met één stap. Een proefles is vrijblijvend en kost maar <span className="text-coral-400 font-bold">€60</span>.
                </p>
              </div>

              {/* Stats */}
              <div className="flex border-y border-[#1a1a1a] divide-x divide-[#1a1a1a]">
                {[
                  { nr: '92%', label: 'Slaagkans' },
                  { nr: '500+', label: 'Leerlingen' },
                  { nr: '€60', label: 'Proefles' },
                ].map(s => (
                  <div key={s.label} className="flex-1 py-3 text-center">
                    <div className="text-coral-400 font-extrabold text-lg leading-none">{s.nr}</div>
                    <div className="text-slate-600 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="p-5 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full bg-coral-500 hover:bg-coral-600 text-white font-bold py-3.5 rounded-xl text-center transition-colors shadow-lg shadow-coral-500/20"
                >
                  🚗 Plan mijn proefles
                </Link>
                <a
                  href="https://wa.me/31644626777?text=Hallo%2C%20ik%20wil%20meer%20informatie%20over%20een%20proefles"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block w-full bg-green-700/20 hover:bg-green-700/30 border border-green-700/40 text-green-300 font-bold py-3 rounded-xl text-center transition-colors text-sm"
                >
                  💬 Stel eerst een vraag via WhatsApp
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="block w-full text-slate-600 hover:text-slate-400 text-xs py-1 transition-colors text-center"
                >
                  Nee bedankt, ik kijk later wel
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
