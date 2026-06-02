'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import TiltCard from './components/TiltCard'
import ProcessSection from './components/ProcessSection'

/* ══════════════════════════════════════════════════════════
   HERO BACKGROUND — fast-scrolling text streams
══════════════════════════════════════════════════════════ */

const STREAM_ROWS = [
  { words: ['GESLAAGD', '92%', 'RIJBEWIJS', 'EXAMEN', 'ASSEN', 'CBR', '500+', 'TTT'], dir: 'left',  speed: '14s', top: '6%' },
  { words: ['AMERSFOORT', 'LESSEN', 'VEILIG', '4.9★', 'FARHAN', 'RIJLES', 'B-RIJBEWIJS'], dir: 'right', speed: '18s', top: '15%' },
  { words: ['GESLAAGD', 'VERTROUWEN', 'RESULTAAT', '1 OP 1', 'EXAMEN', 'RIJBEWIJS', 'WRM'], dir: 'left',  speed: '11s', top: '24%' },
  { words: ['500+', 'TTT', 'CBR', 'ASSEN', 'RIJLES', '92%', 'GESLAAGD', 'FARHAN'], dir: 'right', speed: '16s', top: '33%' },
  { words: ['RIJBEWIJS', 'VEILIG', 'AMERSFOORT', 'EXAMEN', 'LESSEN', 'BETROUWBAAR'], dir: 'left',  speed: '9s',  top: '43%' },
  { words: ['4.9★', 'GESLAAGD', '92%', 'RIJLES', 'CBR', 'TTT', 'AMERSFOORT', '500+'], dir: 'right', speed: '20s', top: '52%' },
  { words: ['EXAMEN', 'ASSEN', 'RIJBEWIJS', 'FARHAN', 'VEILIG', 'GESLAAGD', '1 OP 1'], dir: 'left',  speed: '13s', top: '61%' },
  { words: ['LESSEN', 'WRM', 'BETROUWBAAR', 'CBR', 'AMERSFOORT', '4.9★', 'EXAMEN'], dir: 'right', speed: '10s', top: '70%' },
  { words: ['92%', 'RIJBEWIJS', 'TTT', 'ASSEN', 'GESLAAGD', 'RIJLES', '500+'], dir: 'left',  speed: '15s', top: '79%' },
  { words: ['FARHAN', 'VEILIG', 'EXAMEN', 'AMERSFOORT', 'CBR', 'RESULTAAT', 'GESLAAGD'], dir: 'right', speed: '12s', top: '88%' },
]

function StreamRow({
  words,
  dir,
  speed,
  top,
}: {
  words: string[]
  dir: string
  speed: string
  top: string
}) {
  const text = words.map((w) => `${w} · `).join('')
  const doubled = text + text

  return (
    <div
      className="absolute left-0 right-0 overflow-hidden whitespace-nowrap"
      style={{ top, opacity: 0.055 }}
    >
      <span
        className="inline-block text-xs font-bold tracking-[0.18em] text-white uppercase"
        style={{
          animation: `${dir === 'left' ? 'streamLeft' : 'streamRight'} ${speed} linear infinite`,
          willChange: 'transform',
        }}
      >
        {doubled}
      </span>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════
   FLOATING STAT CARDS
══════════════════════════════════════════════════════════ */

function FloatCard({
  stat,
  label,
  style,
  anim,
  delay = 0,
}: {
  stat: string
  label: string
  style: React.CSSProperties
  anim: string
  delay?: number
}) {
  return (
    <div
      className="absolute z-10 hidden md:block"
      style={{
        ...style,
        animation: `${anim} 4s ease-in-out ${delay}s infinite`,
      }}
    >
      <div
        className="rounded-2xl px-5 py-4 border border-white/10 text-center min-w-[110px]"
        style={{
          background: 'rgba(10, 10, 10, 0.65)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
        }}
      >
        <p className="text-2xl font-extrabold text-white leading-none mb-0.5">{stat}</p>
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">{label}</p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════
   BOTTOM TICKER
══════════════════════════════════════════════════════════ */

const TICKER_TEXT =
  'ASSEN · AMERSFOORT · 92% SLAGINGSPERCENTAGE · 500+ LEERLINGEN GESLAAGD · ⭐ 4.9 / 5 · RIJBEWIJS OP MAAT · WRM GECERTIFICEERD · GEEN VERBORGEN KOSTEN · '

function Ticker() {
  const doubled = TICKER_TEXT + TICKER_TEXT
  return (
    <div className="overflow-hidden whitespace-nowrap bg-coral-500/10 border-t border-coral-500/20 py-3">
      <span
        className="inline-block text-[11px] font-bold tracking-[0.2em] text-coral-400 uppercase"
        style={{ animation: 'ticker 28s linear infinite', willChange: 'transform' }}
      >
        {doubled}
      </span>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════
   WORD REVEAL — slogan animation
══════════════════════════════════════════════════════════ */

function WordReveal({
  text,
  delay = 0,
  className = '',
}: {
  text: string
  delay?: number
  className?: string
}) {
  const words = text.split(' ')
  return (
    <span className={`inline ${className}`}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            delay: delay + i * 0.1,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  )
}

/* ══════════════════════════════════════════════════════════
   SHARED HELPERS
══════════════════════════════════════════════════════════ */

function Reveal({
  children,
  delay = 0,
  className = '',
  from = 'bottom',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  from?: 'bottom' | 'left' | 'right'
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: from === 'bottom' ? 36 : 0, x: from === 'left' ? -28 : from === 'right' ? 28 : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let n = 0
    const step = to / 48
    const t = setInterval(() => {
      n += step
      if (n >= to) { setVal(to); clearInterval(t) }
      else setVal(Math.floor(n))
    }, 28)
    return () => clearInterval(t)
  }, [inView, to])
  return <span ref={ref}>{val}{suffix}</span>
}

/* ══════════════════════════════════════════════════════════
   PAGE DATA
══════════════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden bg-[#080808] flex flex-col">

        {/* ── Aurora blobs ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[750px] h-[750px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 70%)',
              top: '-10%', left: '-5%',
              animation: 'blobA 16s cubic-bezier(0.45,0,0.55,1) infinite',
            }}
          />
          <div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(194,65,12,0.11) 0%, transparent 70%)',
              bottom: '-10%', right: '-5%',
              animation: 'blobB 22s cubic-bezier(0.45,0,0.55,1) infinite',
            }}
          />
          <div
            className="absolute w-[420px] h-[420px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)',
              bottom: '10%', left: '20%',
              animation: 'blobC 14s cubic-bezier(0.45,0,0.55,1) infinite',
            }}
          />
        </div>

        {/* ── Fast text streams ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {STREAM_ROWS.map((row, i) => (
            <StreamRow key={i} {...row} />
          ))}
        </div>

        {/* ── Floating stat cards ── */}
        <FloatCard stat="92%"  label="Slagingspercentage" style={{ top: '22%', left: '5%' }}  anim="floatA" delay={0} />
        <FloatCard stat="500+" label="Leerlingen"          style={{ top: '18%', right: '5%' }} anim="floatB" delay={1.2} />
        <FloatCard stat="4.9★" label="Gemiddelde score"    style={{ bottom: '24%', left: '6%' }} anim="floatC" delay={0.6} />
        <FloatCard stat="1:1"  label="Persoonlijk"         style={{ bottom: '20%', right: '5%' }} anim="floatA" delay={1.8} />

        {/* ── Center content ── */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            className="text-coral-400 text-xs font-bold uppercase tracking-[0.3em] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Rijschool · Assen &amp; Amersfoort
          </motion.p>

          <h1 className="text-[clamp(2.8rem,10vw,6rem)] font-extrabold text-white leading-[0.92] tracking-tight mb-6">
            <span className="block">
              <WordReveal text="Jij rijdt." delay={0.4} />
            </span>
            <span className="block text-coral-400">
              <WordReveal text="Wij zorgen" delay={0.7} />
            </span>
            <span className="block">
              <WordReveal text="daarvoor." delay={1.0} />
            </span>
          </h1>

          <motion.p
            className="text-slate-400 text-base md:text-lg mb-4 max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            Verkeersschool Farhan. 92% slagingspercentage. Van aanmelding tot rijbewijs — zonder gedoe.
          </motion.p>

          {/* Schaarste indicator */}
          <motion.div
            className="flex items-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.6 }}
          >
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`w-2 h-2 rounded-full ${i < 2 ? 'bg-[#333]' : 'bg-coral-500'}`} />
              ))}
            </span>
            <span className="text-xs text-slate-500">Nog <span className="text-coral-400 font-bold">3 plekken</span> in juni</span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
          >
            <Link
              href="/boeken"
              className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-7 py-4 rounded-xl transition-all shadow-xl shadow-coral-500/25 hover:-translate-y-0.5 text-base text-center"
            >
              🚗 Plan een proefles — €60
            </Link>
            <a
              href="https://wa.me/31644626777?text=Hallo%2C%20ik%20wil%20een%20proefles%20plannen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] hover:bg-[#222] border border-white/20 text-white font-bold px-7 py-4 rounded-xl transition-all hover:-translate-y-0.5 text-base text-center"
            >
              💬 WhatsApp
            </a>
          </motion.div>
        </div>

        {/* ── Ticker at bottom ── */}
        <div className="relative z-20">
          <Ticker />
        </div>
      </section>

      {/* ════════════════════════════════════════
          HOE HET WERKT — 3D scroll roadmap
      ════════════════════════════════════════ */}
      <div className="bg-navy-950 pt-20">
        <Reveal className="text-center px-6">
          <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Hoe het werkt</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Zo werkt het.
          </h2>
          <p className="text-slate-500 mt-4 text-sm max-w-xs mx-auto">
            Van proefles tot rijbewijs — scroll door de 5 stappen.
          </p>
        </Reveal>
      </div>
      <ProcessSection />

      {/* ════════════════════════════════════════
          WAAROM FARHAN
      ════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <Reveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Waarom Farhan</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Eerlijk, persoonlijk<br />en bewezen effectief.
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed md:text-right">
              Geen verborgen kosten, geen callcenters. Gewoon een goede instructeur die jou naar je rijbewijs brengt.
            </p>
          </Reveal>

          {/* Stat cards — 4 in een rij */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              {
                nr: '€60',
                sub: 'per les',
                label: '60 minuten, 1-op-1',
                tekst: 'Volle 60 minuten rijles voor een vaste prijs. Geen verkorte lessen, geen toeslagen.',
                highlight: true,
              },
              {
                nr: '92%',
                sub: 'slaagt',
                label: 'Slagingspercentage',
                tekst: 'Gemeten over honderden leerlingen in Assen en Amersfoort. Niet een belofte — een resultaat.',
                highlight: false,
              },
              {
                nr: '1:1',
                sub: 'begeleiding',
                label: 'Altijd persoonlijk',
                tekst: 'Eén instructeur, van proefles tot examen. Geen wisselende leerkrachten, geen gezichtsloze rijschool.',
                highlight: false,
              },
              {
                nr: '0',
                sub: 'verrassingen',
                label: 'Transparante kosten',
                tekst: 'Alle kosten vooraf duidelijk. Wat je ziet is wat je betaalt — inclusief examen in het pakket.',
                highlight: false,
              },
            ].map((d, i) => (
              <Reveal key={d.label} delay={i * 0.1}>
                <TiltCard
                  className={`h-full rounded-2xl p-6 flex flex-col transition-colors ${
                    d.highlight
                      ? 'bg-[#1a0d00] border border-coral-500/60 shadow-xl shadow-coral-500/10'
                      : 'bg-[#111111] border border-[#222222] hover:border-[#333333]'
                  }`}
                >
                  <div className="mb-4">
                    <span className={`text-4xl md:text-5xl font-extrabold leading-none ${d.highlight ? 'text-coral-400' : 'text-white'}`}>
                      {d.nr}
                    </span>
                    <span className="text-slate-500 text-sm ml-2">{d.sub}</span>
                  </div>
                  <h3 className={`font-bold text-sm mb-2 uppercase tracking-wide ${d.highlight ? 'text-coral-300' : 'text-slate-300'}`}>
                    {d.label}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">{d.tekst}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Feature strip */}
          <Reveal>
            <div className="flex flex-wrap gap-3 justify-start">
              {[
                '📍 Actief in Assen & Amersfoort',
                '🚗 Moderne auto met dubbele bediening',
                '🌍 Les in Nederlands of Engels',
                '📅 Flexibele lestijden — ook avond & weekend',
                '🔁 Na zak: direct doorgaan',
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm text-slate-400 px-4 py-2 rounded-full border border-[#222222] bg-[#111111]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS
      ════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-navy-900 border-y border-navy-700">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { to: 500, suffix: '+', label: 'Leerlingen' },
            { to: 92,  suffix: '%', label: 'Slagingspercentage' },
            { to: 2,   suffix: '',  label: 'Locaties' },
            { to: 4,   suffix: '.9 ★', label: 'Gemiddelde score' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div>
                <div className="text-4xl font-extrabold text-coral-400 mb-1">
                  <CountUp to={s.to} suffix={s.suffix} />
                </div>
                <div className="text-slate-500 text-sm">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          PAKKETTEN
      ════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <Reveal className="mb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Pakketten & Prijzen</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Alles inbegrepen.<br />Geen verrassingen.
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 md:text-right">
              <span className="text-coral-400">●</span>
              Elke les: 60 minuten · €60 per losse les
            </div>
          </Reveal>

          {/* Savings banner */}
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-coral-500/20 bg-coral-500/5 w-fit">
              <span className="text-coral-400 text-sm font-bold">💡</span>
              <span className="text-slate-400 text-sm">
                Met een pakket betaal je <span className="text-white font-semibold">~€30/les</span> — de helft van de losse prijs.
                Bespaar tot <span className="text-coral-400 font-bold">€1.401</span>.
              </span>
            </div>
          </Reveal>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              {
                naam: 'Losse lessen',
                prijs: '€60',
                per: '/ les',
                perLes: null,
                bespaar: null,
                sub: 'Flexibel, geen verplichtingen.',
                items: [
                  '60 minuten per les',
                  'Geen minimumafname',
                  'Assen of Amersfoort',
                  'Voortgangsgesprek op verzoek',
                ],
                top: false,
                cta: 'Plan een les',
              },
              {
                naam: 'Compleet',
                prijs: '€1.199',
                per: 'totaal',
                perLes: '~€30/les',
                bespaar: 'Bespaar €1.201',
                sub: 'Van nul tot rijbewijs, alles inbegrepen.',
                items: [
                  '40 rijlessen van 60 min',
                  'Theoriebegeleiding',
                  'Tussentijdse toets (TTT)',
                  'Eerste examen inbegrepen',
                  'Voortgangsgesprekken',
                  'Assen & Amersfoort',
                ],
                top: true,
                cta: 'Inschrijven',
              },
              {
                naam: 'Intensief',
                prijs: '€1.599',
                per: 'totaal',
                perLes: '~€32/les',
                bespaar: 'Bespaar €1.401',
                sub: 'Snel rijbewijs — spoedplanning mogelijk.',
                items: [
                  '50 rijlessen van 60 min',
                  'Theoriebegeleiding',
                  'Tussentijdse toets (TTT)',
                  '2 examens inbegrepen',
                  'Spoedplanning prioriteit',
                  'Assen & Amersfoort',
                ],
                top: false,
                cta: 'Inschrijven',
              },
            ].map((p, i) => (
              <Reveal key={p.naam} delay={i * 0.1}>
                <TiltCard
                  className={`relative h-full rounded-2xl flex flex-col transition-all ${
                    p.top
                      ? 'bg-[#130800] border-2 border-coral-500/80 shadow-2xl shadow-coral-500/15 md:-mt-4 md:mb-0'
                      : 'bg-[#111111] border border-[#222222] hover:border-[#333333]'
                  }`}
                >
                  {/* Badge */}
                  {p.top && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap shadow-lg">
                      ⭐ Meest gekozen
                    </div>
                  )}

                  <div className="p-7 flex flex-col h-full">
                    {/* Name + savings */}
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-white font-extrabold text-lg">{p.naam}</h3>
                      {p.bespaar && (
                        <span className="text-[10px] font-bold text-coral-400 bg-coral-500/10 border border-coral-500/25 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {p.bespaar}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-xs mb-5">{p.sub}</p>

                    {/* Price */}
                    <div className="mb-1">
                      <span className={`text-4xl font-extrabold ${p.top ? 'text-coral-400' : 'text-white'}`}>
                        {p.prijs}
                      </span>
                      <span className="text-slate-500 text-sm ml-2">{p.per}</span>
                    </div>
                    {p.perLes && (
                      <p className="text-slate-600 text-xs mb-6">
                        = <span className="text-slate-400 font-semibold">{p.perLes}</span> bij dit pakket
                      </p>
                    )}
                    {!p.perLes && <div className="mb-6" />}

                    {/* Features */}
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                          <span className={`text-xs shrink-0 ${p.top ? 'text-coral-400' : 'text-slate-500'}`}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className={`block text-center font-bold py-3.5 rounded-xl transition-all text-sm ${
                        p.top
                          ? 'bg-coral-500 hover:bg-coral-600 text-white shadow-lg shadow-coral-500/25 hover:-translate-y-0.5'
                          : 'bg-[#1a1a1a] hover:bg-[#222222] border border-[#2c2c2c] text-white hover:-translate-y-0.5'
                      }`}
                    >
                      {p.cta}
                    </Link>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Bottom note */}
          <Reveal className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1a1a1a]">
            <p className="text-slate-600 text-xs">
              * Alle bedragen inclusief btw. CBR-examengeld niet inbegrepen bij losse lessen.
            </p>
            <Link href="/pakketten" className="text-slate-500 hover:text-coral-400 text-sm transition-colors underline underline-offset-4 whitespace-nowrap">
              Volledige prijslijst →
            </Link>
          </Reveal>

        </div>
      </section>


      {/* ════════════════════════════════════════
          FAQ
      ════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Veelgestelde vragen</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Eerlijke antwoorden.</h2>
          </Reveal>
          <div className="space-y-3">
            {[
              { v: 'Kan ik eerst een proefles doen voor ik me vastleg?', a: 'Ja — en dat raden we zelfs aan. Voor €60 rijd je een uur met Farhan. Daarna weet je precies wat je nodig hebt en wat het kost. Geen verplichtingen.' },
              { v: 'Wat als ik zak voor mijn rijexamen?', a: 'Dan staan we klaar. We bespreken wat er misging, oefenen de zwakke punten extra en plannen het herexamen zo snel mogelijk in. Bij het Intensief-pakket is een tweede examen al inbegrepen.' },
              { v: 'Hoe snel kan ik beginnen met rijlessen?', a: 'Vaak al binnen een week — soms zelfs eerder. Stuur een WhatsApp en we kijken direct naar beschikbaarheid in Assen of Amersfoort.' },
              { v: 'Is theoriebegeleiding inbegrepen?', a: 'In het Compleet- en Intensief-pakket: ja. We helpen je met theoriemateriaal en kunnen je begeleiden zodat je theorie en praktijk tegelijk kunt doen.' },
              { v: 'Wat als ik al eerder gereden heb?', a: 'Dan starten we met een proefles om je niveau te beoordelen. Op basis daarvan adviseren we hoeveel lessen je nodig hebt — niet meer, niet minder.' },
              { v: 'Geven jullie ook les in het Engels?', a: 'Ja. Farhan geeft les in zowel het Nederlands als het Engels. Geef het aan bij de aanmelding.' },
            ].map((item, i) => (
              <motion.details
                key={item.v}
                className="group bg-[#111] border border-[#1a1a1a] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <summary className="flex justify-between items-center cursor-pointer px-6 py-4 text-white font-medium list-none hover:bg-[#161616] transition-colors text-sm md:text-base">
                  {item.v}
                  <span className="text-coral-400 text-xl group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-5 pt-3 text-slate-400 text-sm leading-relaxed border-t border-[#1a1a1a]">
                  {item.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════ */}
      <section className="relative py-28 px-6 bg-navy-950 overflow-hidden border-t border-navy-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -translate-y-1/2 translate-x-1/3"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full translate-y-1/3 -translate-x-1/4"
            style={{ background: 'radial-gradient(circle, rgba(194,65,12,0.1) 0%, transparent 70%)' }} />
        </div>
        <Reveal className="relative max-w-2xl mx-auto text-center">
          <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">Klaar?</p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Jouw rijbewijs<br />begint hier.
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-sm mx-auto">Schrijf je in, stuur een WhatsApp of bel direct. Geen wachtrijen.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-xl shadow-coral-500/20 hover:-translate-y-0.5 inline-block">
              Inschrijven
            </Link>
            <a href="https://wa.me/31644626777" target="_blank" rel="noopener noreferrer"
              className="border border-white/15 hover:border-white/30 text-white font-bold px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5 inline-block"
              style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)' }}>
              💬 WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}

