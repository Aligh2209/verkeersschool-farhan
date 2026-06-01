'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import dynamic from 'next/dynamic'

const ProcessScene = dynamic(() => import('./ProcessScene'), { ssr: false })

/* ── SVG icons ──────────────────────────────────────────── */

const Icons = {
  proefles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="9" />
      <line x1="4.9" y1="16.5" x2="10.2" y2="13.2" />
      <line x1="19.1" y1="16.5" x2="13.8" y2="13.2" />
    </svg>
  ),
  plan: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  ),
  rijlessen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="2" y="9" width="20" height="10" rx="2" />
      <path d="M6 9V7a2 2 0 012-2h8a2 2 0 012 2v2" />
      <circle cx="7" cy="19" r="1" fill="currentColor" />
      <circle cx="17" cy="19" r="1" fill="currentColor" />
      <path d="M12 12v3" />
      <path d="M10 13.5h4" />
    </svg>
  ),
  voortgang: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  geslaagd: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      <path d="M9.5 8l2 2 3.5-3.5" />
    </svg>
  ),
}

/* ── Step data ──────────────────────────────────────────── */

const steps = [
  {
    nr: 1,
    key: 'proefles' as keyof typeof Icons,
    titel: 'Proefles boeken',
    subtitel: 'Leer ons kennen zonder verplichtingen',
    tekst: 'Schrijf je in voor een vrijblijvende proefles. Farhan rijdt met je mee, beoordeelt jouw niveau en geeft je direct eerlijke feedback.',
    punten: ['Geen verplichtingen', 'Direct persoonlijk contact', 'Eerlijk beeld van jouw niveau'],
    animVariant: { rotate: [0, 360] },
  },
  {
    nr: 2,
    key: 'plan' as keyof typeof Icons,
    titel: 'Persoonlijk rijplan',
    subtitel: 'Route op maat naar jouw rijbewijs',
    tekst: 'Op basis van de proefles stellen we samen een plan op. Hoeveel lessen, welk pakket, en wanneer je realistisch examen kunt doen.',
    punten: ['Pakket afgestemd op jou', 'Realistische examenplanning', 'Transparante kosten vooraf'],
    animVariant: { scale: [0.5, 1.2, 1], opacity: [0, 1, 1] },
  },
  {
    nr: 3,
    key: 'rijlessen' as keyof typeof Icons,
    titel: 'Rijlessen volgen',
    subtitel: 'Stap voor stap meer zelfvertrouwen',
    tekst: 'Elke les bouwt voort op de vorige. Farhan past het tempo aan op jou — nooit te snel, nooit te langzaam. Altijd opbouwend.',
    punten: ['1-op-1 begeleiding', 'Tempo op jouw niveau', 'Moderne auto met dubbele bediening'],
    animVariant: { x: [-20, 0], opacity: [0, 1] },
  },
  {
    nr: 4,
    key: 'voortgang' as keyof typeof Icons,
    titel: 'Voortgang bewaken',
    subtitel: 'Samen op koers naar het examen',
    tekst: 'Na elke les bespreken we hoe het gaat. Jij weet altijd waar je staat en wat er nog nodig is. Geen verrassingen.',
    punten: ['Tussentijdse toets (TTT)', 'Duidelijke voortgangsgesprekken', 'Examen alleen als je er klaar voor bent'],
    animVariant: { pathLength: [0, 1] },
  },
  {
    nr: 5,
    key: 'geslaagd' as keyof typeof Icons,
    titel: 'Rijexamen & geslaagd',
    subtitel: 'Met vertrouwen de finishlijn over',
    tekst: 'Je rijdt het examen met vertrouwen. Farhan bereidt je volledig voor en staat klaar op de dag zelf. En als je zakt? We gaan gewoon door.',
    punten: ['Examen inbegrepen in pakket', 'Voorbereiding op CBR-routes', 'Na zak: direct herstart'],
    animVariant: { scale: [0.8, 1.1, 1], rotate: [0, 10, 0] },
  },
]

/* ── Wolfofwashington sidebar ───────────────────────────── */

function StepSidebar({ activeStep }: { activeStep: number }) {
  return (
    <div className="absolute left-5 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">
          {i > 0 && (
            <motion.div
              style={{ width: 2, height: 36 }}
              animate={{ backgroundColor: i <= activeStep ? '#f97316' : '#212121' }}
              transition={{ duration: 0.6 }}
            />
          )}

          <div className="relative flex items-center">
            {/* Pulse ring */}
            {i === activeStep && (
              <motion.div
                className="absolute rounded-full border-2 border-orange-400"
                style={{ width: 54, height: 54, top: -5, left: -5 }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            )}

            {/* Main circle */}
            <motion.div
              className="relative z-10 rounded-full flex items-center justify-center"
              style={{
                width: 44, height: 44,
                border: `1.5px solid ${
                  i === activeStep ? 'rgba(251,146,60,0.9)'
                  : i < activeStep ? 'rgba(249,115,22,0.35)'
                  : 'rgba(33,33,33,0.9)'
                }`,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
              animate={{
                backgroundColor:
                  i === activeStep ? '#f97316'
                  : i < activeStep ? 'rgba(249,115,22,0.1)'
                  : 'rgba(15,15,15,0.7)',
                scale: i === activeStep ? 1.1 : 1,
                boxShadow: i === activeStep
                  ? '0 0 18px rgba(249,115,22,0.6), 0 0 36px rgba(249,115,22,0.2)'
                  : 'none',
              }}
              transition={{ duration: 0.4 }}
            >
              {i < activeStep ? (
                /* Checkmark for completed */
                <motion.svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.path
                    d="M3 8.5l3.5 3.5L13 4"
                    stroke="#f97316" strokeWidth="2.2"
                    strokeLinecap="round" strokeLinejoin="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.svg>
              ) : (
                /* Icon */
                <div
                  className="p-2.5"
                  style={{
                    color: i === activeStep ? 'white' : '#383838',
                    width: 44, height: 44,
                  }}
                >
                  {Icons[step.key]}
                </div>
              )}
            </motion.div>

            {/* Active label */}
            <AnimatePresence>
              {i === activeStep && (
                <motion.div
                  className="absolute left-14"
                  initial={{ opacity: 0, x: -14, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -8, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="rounded-xl px-3 py-1.5 border border-orange-500/25 whitespace-nowrap"
                    style={{
                      background: 'rgba(10,10,10,0.8)',
                      backdropFilter: 'blur(14px)',
                      WebkitBackdropFilter: 'blur(14px)',
                    }}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400">
                      {step.titel}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Right panel: animated step card ───────────────────── */

function StepCard({ step }: { step: typeof steps[0] }) {
  return (
    <motion.div
      key={step.nr}
      initial={{ opacity: 0, x: 40, filter: 'blur(6px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: -28, filter: 'blur(6px)' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {/* Large animated icon */}
      <motion.div
        className="mb-8 relative"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative w-20 h-20">
          {/* Glow ring behind icon */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Icon container */}
          <motion.div
            className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ background: 'rgba(249,115,22,0.12)', border: '1.5px solid rgba(249,115,22,0.3)' }}
            animate={step.key === 'proefles' ? { rotate: [0, 5, -5, 0] } : {}}
            transition={step.key === 'proefles' ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : {}}
          >
            <div className="w-10 h-10 text-orange-400">
              {Icons[step.key]}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Step label */}
      <motion.p
        className="text-orange-400 text-xs font-bold uppercase tracking-[0.22em] mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        Stap {step.nr} van {steps.length}
      </motion.p>

      {/* Title */}
      <motion.h3
        className="text-5xl font-extrabold text-white leading-tight mb-2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {step.titel}
      </motion.h3>

      {/* Subtitle */}
      <motion.p
        className="text-orange-300/70 text-sm font-medium mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        {step.subtitel}
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-slate-400 text-base leading-relaxed mb-6 max-w-xs"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {step.tekst}
      </motion.p>

      {/* Bullet points */}
      <ul className="space-y-2">
        {step.punten.map((punt, i) => (
          <motion.li
            key={punt}
            className="flex items-center gap-3 text-sm text-slate-300"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.38 + i * 0.08 }}
          >
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold"
              style={{ background: 'rgba(249,115,22,0.2)', color: '#fb923c', border: '1px solid rgba(249,115,22,0.3)' }}
            >
              ✓
            </span>
            {punt}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ── Section ─────────────────────────────────────────────── */

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActiveStep(Math.min(4, Math.floor(v * 5.15)))
  })

  return (
    <section ref={sectionRef} className="relative bg-[#080808]" style={{ height: '480vh' }}>
      <div className="sticky top-0 h-screen flex overflow-hidden">

        {/* ─── Left: 3D scene + sidebar ───────────────────── */}
        <div className="relative w-full md:w-1/2 h-full bg-[#080808]">
          <ProcessScene activeStep={activeStep} />
          <StepSidebar activeStep={activeStep} />

          {/* Ghost number */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeStep}
                className="font-black select-none leading-none"
                style={{ fontSize: 'clamp(140px, 22vw, 240px)', color: 'rgba(255,255,255,0.018)' }}
                initial={{ opacity: 0, scale: 0.7, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.3, filter: 'blur(8px)' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {activeStep + 1}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* ─── Right: step content (desktop) ──────────────── */}
        <div className="hidden md:flex w-1/2 h-full flex-col justify-center bg-[#0f0f0f] border-l border-[#1a1a1a] px-14 overflow-hidden">
          <AnimatePresence mode="wait">
            <StepCard key={activeStep} step={steps[activeStep]} />
          </AnimatePresence>
          <p className="absolute bottom-8 left-14 text-[#2c2c2c] text-xs uppercase tracking-widest">
            Scroll om verder te gaan
          </p>
        </div>

        {/* ─── Mobile step card ───────────────────────────── */}
        <div className="md:hidden absolute bottom-14 left-4 right-4 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="rounded-2xl p-5 border border-[#1a1a1a]"
              style={{ background: 'rgba(15,15,15,0.92)', backdropFilter: 'blur(16px)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-orange-400"
                  style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.25)' }}>
                  <div className="w-5 h-5">{Icons[steps[activeStep].key]}</div>
                </div>
                <p className="text-orange-400 text-xs font-bold uppercase tracking-widest">
                  Stap {steps[activeStep].nr} van 5
                </p>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">{steps[activeStep].titel}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{steps[activeStep].tekst}</p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
