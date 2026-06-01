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

/* Scroll-triggered — fires ONCE op specifieke scroll-percentages */
const SCROLL_TRIGGERS = [
  {
    pct: 0.18,
    icon: '🔔',
    tekst: 'Iemand heeft zojuist een plek geclaimd — Assen: nog 2 plekken vrij.',
  },
  {
    pct: 0.40,
    icon: '⚠️',
    tekst: 'Amersfoort zit bijna vol. Nog maar 1 plek beschikbaar!',
    cta: { label: 'Claim plek', href: '/contact' },
  },
  {
    pct: 0.68,
    icon: '🔥',
    tekst: 'Nog 1 plek over — schrijf je in vóór het einde van de maand.',
    cta: { label: 'Nu inschrijven', href: '/contact' },
  },
]

/* Timed — herhaalt elke 35 seconden na 20 sec delay */
const TIMED = [
  { icon: '🔔', tekst: 'Iemand uit Assen heeft zojuist een proefles gepland.' },
  { icon: '📍', tekst: 'Locatie Amersfoort: nog 1 startplek vrij in juni.' },
  { icon: '🔔', tekst: 'Iemand schreef zich in voor het Compleet-pakket.' },
  { icon: '⚡', tekst: 'Proeflesaanbod geldig t/m einde van de maand.' },
]

let idCounter = 0
const nextId = () => ++idCounter

export default function FomoToast() {
  const [queue, setQueue] = useState<Toast[]>([])
  const [fired, setFired] = useState<Set<number>>(new Set())
  const [timedIdx, setTimedIdx] = useState(0)

  const show = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = nextId()
    setQueue(q => [...q.slice(-1), { ...toast, id }])
    setTimeout(() => setQueue(q => q.filter(t => t.id !== id)), 6000)
  }, [])

  /* Scroll triggers */
  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      SCROLL_TRIGGERS.forEach((trigger, i) => {
        if (pct >= trigger.pct && !fired.has(i)) {
          setFired(prev => new Set(prev).add(i))
          show({
            icon: trigger.icon,
            tekst: trigger.tekst,
            cta: trigger.cta,
          })
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [fired, show])

  /* Timed notifications */
  useEffect(() => {
    const first = setTimeout(() => {
      show(TIMED[0])
      setTimedIdx(1)
    }, 20000)

    return () => clearTimeout(first)
  }, [show])

  useEffect(() => {
    if (timedIdx === 0) return
    const t = setTimeout(() => {
      show(TIMED[timedIdx % TIMED.length])
      setTimedIdx(i => i + 1)
    }, 35000)
    return () => clearTimeout(t)
  }, [timedIdx, show])

  return (
    <div className="fixed bottom-24 left-5 z-50 flex flex-col gap-2 max-w-[270px]">
      <AnimatePresence>
        {queue.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: -28, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -16, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-2xl border border-[#2a2a2a] shadow-2xl overflow-hidden"
              style={{ background: 'rgba(13,13,13,0.97)', backdropFilter: 'blur(20px)' }}
            >
              <div className="flex items-start gap-3 px-4 pt-3 pb-2.5">
                <span className="text-lg shrink-0 mt-0.5">{toast.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-medium leading-relaxed">{toast.tekst}</p>
                  <p className="text-slate-600 text-[10px] mt-0.5">Zojuist</p>
                </div>
                <button
                  onClick={() => setQueue(q => q.filter(t => t.id !== toast.id))}
                  className="text-slate-700 hover:text-slate-400 transition-colors text-xs shrink-0"
                >
                  ✕
                </button>
              </div>
              {toast.cta && (
                <Link
                  href={toast.cta.href}
                  className="block w-full text-center text-xs font-bold text-coral-400 bg-coral-500/10 hover:bg-coral-500/20 border-t border-[#1a1a1a] py-2 transition-colors"
                >
                  {toast.cta.label} →
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
