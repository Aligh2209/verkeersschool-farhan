'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── SVG icons ─────────────────────────────────────────── */
function IconSteering() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
      <line x1="12" y1="2" x2="12" y2="9"/>
      <line x1="4.9" y1="16.5" x2="10.2" y2="13.2"/>
      <line x1="19.1" y1="16.5" x2="13.8" y2="13.2"/>
    </svg>
  )
}
function IconClipboard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M9 11l3 3L22 4"/>
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
    </svg>
  )
}
function IconCar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h14l4 4v4a2 2 0 01-2 2h-2"/>
      <circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
      <path d="M5 9l2-4h8l2 4"/>
    </svg>
  )
}
function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  )
}
function IconAward() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      <path d="M9.5 8l2 2 3.5-3.5"/>
    </svg>
  )
}

const ICONS = [IconSteering, IconClipboard, IconCar, IconChart, IconAward]

const steps = [
  {
    nr: 1,
    titel: 'Proefles boeken',
    subtitel: 'Leer ons kennen — geen verplichtingen',
    tekst: 'Schrijf je in voor een vrijblijvende proefles. Farhan rijdt met je mee, beoordeelt je niveau en geeft direct eerlijke feedback.',
    punten: ['Geen verplichtingen', 'Direct persoonlijk contact', 'Eerlijk beeld van jouw niveau'],
  },
  {
    nr: 2,
    titel: 'Persoonlijk rijplan',
    subtitel: 'Route op maat naar jouw rijbewijs',
    tekst: 'Op basis van de proefles stellen we samen een plan op: hoeveel lessen, welk pakket, en wanneer je realistisch examen kunt doen.',
    punten: ['Pakket afgestemd op jou', 'Realistische examenplanning', 'Transparante kosten vooraf'],
  },
  {
    nr: 3,
    titel: 'Rijlessen volgen',
    subtitel: 'Stap voor stap meer zelfvertrouwen',
    tekst: 'Elke les bouwt voort op de vorige. Farhan past het tempo aan op jou — nooit te snel, nooit te langzaam. Altijd opbouwend.',
    punten: ['1-op-1 begeleiding', 'Tempo op jouw niveau', 'Moderne auto met dubbele bediening'],
  },
  {
    nr: 4,
    titel: 'Voortgang bewaken',
    subtitel: 'Samen op koers naar het examen',
    tekst: 'Na elke les bespreken we hoe het gaat. Jij weet altijd waar je staat en wat er nog nodig is. Geen verrassingen.',
    punten: ['Tussentijdse toets (TTT)', 'Duidelijke voortgangsgesprekken', 'Examen alleen als je er klaar voor bent'],
  },
  {
    nr: 5,
    titel: 'Rijexamen & geslaagd',
    subtitel: 'Met vertrouwen de finishlijn over',
    tekst: 'Je rijdt het examen met vertrouwen. Farhan bereidt je volledig voor. En als je zakt? We gaan gewoon door.',
    punten: ['Examen inbegrepen in pakket', 'Voorbereiding op CBR-routes', 'Na zak: direct herstart'],
  },
]

/* ── Vertical sidebar ──────────────────────────────────── */
function Sidebar({ active }: { active: number }) {
  return (
    <div className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center">
      {steps.map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          {i > 0 && (
            <motion.div
              style={{ width: 2, height: 32 }}
              animate={{ backgroundColor: i <= active ? '#f97316' : '#222' }}
              transition={{ duration: 0.5 }}
            />
          )}
          <div className="relative">
            {i === active && (
              <motion.div
                className="absolute rounded-full border-2 border-orange-400"
                style={{ width: 50, height: 50, top: -3, left: -3 }}
                animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            )}
            <motion.div
              className="relative z-10 rounded-full flex items-center justify-center"
              style={{
                width: 44, height: 44,
                border: `1.5px solid ${i === active ? 'rgba(251,146,60,0.9)' : i < active ? 'rgba(249,115,22,0.3)' : '#222'}`,
              }}
              animate={{
                backgroundColor: i === active ? '#f97316' : i < active ? 'rgba(249,115,22,0.08)' : '#111',
                scale: i === active ? 1.1 : 1,
                boxShadow: i === active ? '0 0 18px rgba(249,115,22,0.5)' : 'none',
              }}
              transition={{ duration: 0.35 }}
            >
              {i < active ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7.5l3 3L11.5 3.5" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <div className="w-5 h-5" style={{ color: i === active ? 'white' : '#444' }}>
                  {(() => { const Icon = ICONS[i]; return <Icon /> })()}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Step content ──────────────────────────────────────── */
function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const Icon = ICONS[index]
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center px-4 md:px-8"
    >
      {/* Icon */}
      <motion.div
        className="relative mb-6"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.08 }}
      >
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <div
          className="relative z-10 w-20 h-20 rounded-3xl flex items-center justify-center"
          style={{ background: 'rgba(249,115,22,0.12)', border: '1.5px solid rgba(249,115,22,0.3)' }}
        >
          <div className="w-10 h-10 text-orange-400"><Icon /></div>
        </div>
      </motion.div>

      {/* Step label */}
      <motion.p className="text-orange-400 text-xs font-bold uppercase tracking-[0.25em] mb-3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
        Stap {step.nr} van {steps.length}
      </motion.p>

      {/* Title */}
      <motion.h3
        className="font-extrabold text-white leading-tight mb-2"
        style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      >
        {step.titel}
      </motion.h3>

      {/* Subtitle */}
      <motion.p className="text-orange-300/60 text-sm mb-5"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        {step.subtitel}
      </motion.p>

      {/* Description */}
      <motion.p className="text-slate-400 text-base leading-relaxed mb-7 max-w-sm"
        initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        {step.tekst}
      </motion.p>

      {/* Bullets */}
      <div className="flex flex-wrap justify-center gap-2">
        {step.punten.map((punt, i) => (
          <motion.span key={punt}
            className="flex items-center gap-1.5 text-xs text-slate-300 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)' }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.38 + i * 0.08 }}
          >
            <span className="text-orange-400 text-xs">✓</span> {punt}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

/* ── Bottom step indicator ─────────────────────────────── */
function StepDots({ active }: { active: number }) {
  return (
    <div className="flex items-center gap-2">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-2">
          <motion.div
            className="rounded-full flex items-center justify-center text-[10px] font-bold"
            style={{ width: i === active ? 28 : 8, height: 8 }}
            animate={{
              width: i === active ? 28 : 8,
              backgroundColor: i === active ? '#f97316' : i < active ? '#7c2d12' : '#222',
            }}
            transition={{ duration: 0.3 }}
          >
            {i === active && <span className="text-white text-[9px] font-black">{s.nr}</span>}
          </motion.div>
        </div>
      ))}
    </div>
  )
}

/* ── Section ────────────────────────────────────────────── */
export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    // Get absolute document-top position of the section
    const getSectionTop = () => {
      let top = 0
      let el: HTMLElement | null = sectionRef.current
      while (el) {
        top += el.offsetTop
        el = el.offsetParent as HTMLElement | null
      }
      return top
    }

    const calc = () => {
      const el = sectionRef.current
      if (!el) return

      const scrollTop =
        window.pageYOffset ??
        document.documentElement.scrollTop ??
        document.body.scrollTop

      const sectionTop = getSectionTop()
      const scrollable = el.offsetHeight - window.innerHeight
      if (scrollable <= 0) return

      const scrolled = scrollTop - sectionTop
      const progress = Math.max(0, Math.min(1, scrolled / scrollable))
      const step = Math.min(steps.length - 1, Math.floor(progress * steps.length + 0.05))
      setActive(step)
    }

    // Listen on both window AND document to cover all browser cases
    window.addEventListener('scroll', calc, { passive: true })
    document.addEventListener('scroll', calc, { passive: true })
    calc()

    return () => {
      window.removeEventListener('scroll', calc)
      document.removeEventListener('scroll', calc)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-[#080808]" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

        {/* Top progress bar */}
        <div className="w-full h-0.5 bg-[#111]">
          <motion.div
            className="h-full bg-coral-500"
            animate={{ width: `${((active + 1) / 5) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Sidebar */}
        <Sidebar active={active} />

        {/* Ghost number */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.span
              key={active}
              className="font-black select-none leading-none"
              style={{ fontSize: 'clamp(80px, 20vw, 260px)', color: 'rgba(255,255,255,0.018)' }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.3 }}
              transition={{ duration: 0.5 }}
            >
              {active + 1}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Centered content */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="w-full max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              <StepCard key={active} step={steps[active]} index={active} />
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom: dots + scroll hint */}
        <div className="relative z-10 flex flex-col items-center gap-3 pb-6">
          <StepDots active={active} />
          <p className="text-[#2a2a2a] text-[10px] uppercase tracking-widest">
            Scroll om verder te gaan
          </p>
        </div>

      </div>
    </section>
  )
}
