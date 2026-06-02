'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface Toast {
  id: number
  icon: string
  tekst: string
  cta?: { label: string; href: string }
}

// Slechts 1 melding — bij 65% scroll, één keer per sessie
const TRIGGER = {
  pct: 0.65,
  icon: '🔥',
  tekst: 'Nog 1 plek vrij in Amersfoort — schrijf je in vóór het einde van de maand.',
  cta: { label: 'Nu inschrijven', href: '/boeken' },
}

let idCounter = 0

export default function FomoToast() {
  const [toast, setToast] = useState<Toast | null>(null)
  const [fired, setFired] = useState(false)

  const show = useCallback((t: Omit<Toast, 'id'>) => {
    const id = ++idCounter
    setToast({ ...t, id })
    setTimeout(() => setToast(null), 6000)
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('fomo-shown')) return

    const onScroll = () => {
      if (fired) return
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      if (pct >= TRIGGER.pct) {
        setFired(true)
        sessionStorage.setItem('fomo-shown', '1')
        show({ icon: TRIGGER.icon, tekst: TRIGGER.tekst, cta: TRIGGER.cta })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [fired, show])

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          className="fixed bottom-24 left-5 z-50 max-w-[270px]"
          initial={{ opacity: 0, x: -24, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-2xl border border-[#2a2a2a] shadow-xl overflow-hidden"
            style={{ background: 'rgba(13,13,13,0.97)', backdropFilter: 'blur(20px)' }}>
            <div className="flex items-start gap-3 px-4 pt-3 pb-2.5">
              <span className="text-lg shrink-0 mt-0.5">{toast.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-medium leading-relaxed">{toast.tekst}</p>
                <p className="text-slate-600 text-[10px] mt-0.5">Zojuist</p>
              </div>
              <button onClick={() => setToast(null)}
                className="text-slate-700 hover:text-slate-400 transition-colors text-xs shrink-0">
                ✕
              </button>
            </div>
            {toast.cta && (
              <Link href={toast.cta.href} onClick={() => setToast(null)}
                className="block w-full text-center text-xs font-bold text-coral-400 bg-coral-500/10 hover:bg-coral-500/20 border-t border-[#1a1a1a] py-2 transition-colors">
                {toast.cta.label} →
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
