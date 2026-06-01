'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import dynamic from 'next/dynamic'

const ProcessScene = dynamic(() => import('./ProcessScene'), { ssr: false })

const steps = [
  { nr: 1, titel: 'Aanmelding',        icon: '✎', tekst: 'Vul het contactformulier in, stuur een WhatsApp of bel direct. We reageren snel en bespreken meteen jouw situatie en doel.' },
  { nr: 2, titel: 'Kennismaking',      icon: '◎', tekst: 'We beoordelen je huidige rijervaring en -niveau. Zo bepalen we hoeveel lessen je nodig hebt en welk pakket het beste aansluit.' },
  { nr: 3, titel: 'Rijlessen',         icon: '◈', tekst: 'Elke les is op jouw tempo en niveau. Farhan geeft directe, opbouwende feedback zodat je continu verbetert — zonder druk.' },
  { nr: 4, titel: 'Tussentijdse toets',icon: '◉', tekst: 'Een officieel proefexamen bij het CBR. Dit geeft een eerlijk beeld van je niveau en laat zien wat er nog verbeterd moet worden.' },
  { nr: 5, titel: 'Rijexamen',         icon: '★', tekst: 'Je rijdt het examen met vertrouwen. Farhan begeleidt je volledig — en als je zakt, staan we direct klaar voor de herstart.' },
]

/* ── Wolfofwashington-style vertical step sidebar ────────── */
function StepSidebar({ activeStep }: { activeStep: number }) {
  return (
    <div className="absolute left-5 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center select-none">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">

          {/* Connecting line — above each step except first */}
          {i > 0 && (
            <motion.div
              style={{ width: 2, height: 40 }}
              animate={{ backgroundColor: i <= activeStep ? '#f43f5e' : '#162035' }}
              transition={{ duration: 0.5 }}
            />
          )}

          {/* Circle + label row */}
          <div className="relative flex items-center">

            {/* Outer pulse ring — active only */}
            {i === activeStep && (
              <motion.div
                className="absolute rounded-full border-2 border-coral-400"
                style={{ width: 52, height: 52, top: -4, left: -4 }}
                animate={{ scale: [1, 1.35, 1], opacity: [0.55, 0, 0.55] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}

            {/* Main circle */}
            <motion.div
              className="relative z-10 flex items-center justify-center rounded-full cursor-default"
              style={{
                width: 44,
                height: 44,
                border: `1.5px solid ${
                  i === activeStep ? 'rgba(251,113,133,0.9)'
                  : i < activeStep ? 'rgba(244,63,94,0.35)'
                  : 'rgba(30,45,66,0.9)'
                }`,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
              animate={{
                backgroundColor:
                  i === activeStep ? '#f43f5e'
                  : i < activeStep ? 'rgba(244,63,94,0.12)'
                  : 'rgba(13,21,38,0.7)',
                boxShadow:
                  i === activeStep
                    ? '0 0 18px rgba(244,63,94,0.55), 0 0 36px rgba(244,63,94,0.18)'
                    : '0 0 0 rgba(0,0,0,0)',
                scale: i === activeStep ? 1.08 : 1,
              }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
            >
              {i < activeStep ? (
                /* Checkmark for completed */
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5l3.5 3.5L13 4" stroke="#f43f5e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <span
                  className="font-extrabold leading-none"
                  style={{
                    fontSize: 13,
                    color: i === activeStep ? '#fff' : '#3a4a5f',
                  }}
                >
                  {step.nr}
                </span>
              )}
            </motion.div>

            {/* Label — appears only for active step */}
            <AnimatePresence>
              {i === activeStep && (
                <motion.div
                  className="absolute left-14 flex items-center"
                  initial={{ opacity: 0, x: -14, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -8, filter: 'blur(4px)' }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="rounded-xl px-3 py-1.5 border border-coral-500/25 whitespace-nowrap"
                    style={{
                      background: 'rgba(13,21,38,0.75)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                    }}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-coral-400">
                      {step.titel}
                    </span>
                  </div>
                  {/* Arrow pointing left toward circle */}
                  <div
                    className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-0 h-0"
                    style={{
                      borderTop: '5px solid transparent',
                      borderBottom: '5px solid transparent',
                      borderRight: '6px solid rgba(244,63,94,0.25)',
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
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
    <section ref={sectionRef} className="relative bg-navy-950" style={{ height: '480vh' }}>
      <div className="sticky top-0 h-screen flex overflow-hidden">

        {/* ─── Left: 3D scene + sidebar ───────────────────── */}
        <div className="relative w-full md:w-1/2 h-full bg-navy-950">
          <ProcessScene activeStep={activeStep} />

          {/* Wolfofwashington vertical sidebar */}
          <StepSidebar activeStep={activeStep} />

          {/* Ghost step number */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeStep}
                className="font-black select-none leading-none"
                style={{ fontSize: 'clamp(140px, 22vw, 240px)', color: 'rgba(255,255,255,0.02)' }}
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

        {/* ─── Right: step text (desktop) ─────────────────── */}
        <div className="hidden md:flex w-1/2 h-full flex-col justify-center bg-navy-900 border-l border-navy-700 px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 32, filter: 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -24, filter: 'blur(4px)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.22em] mb-4">
                Stap {steps[activeStep].nr} van {steps.length}
              </p>
              <h3 className="text-5xl font-extrabold text-white leading-tight mb-6">
                {steps[activeStep].titel}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xs">
                {steps[activeStep].tekst}
              </p>
            </motion.div>
          </AnimatePresence>

          <p className="absolute bottom-8 left-16 text-slate-700 text-xs uppercase tracking-widest">
            Scroll om verder te gaan
          </p>
        </div>

        {/* ─── Mobile step card ───────────────────────────── */}
        <div className="md:hidden absolute bottom-16 left-4 right-4 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="bg-navy-900/90 backdrop-blur-md rounded-2xl p-5 border border-navy-700"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-coral-400 text-xs font-bold uppercase tracking-widest mb-1">
                Stap {steps[activeStep].nr} van 5
              </p>
              <h3 className="text-xl font-extrabold text-white mb-2">{steps[activeStep].titel}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{steps[activeStep].tekst}</p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
