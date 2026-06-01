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

const reviews = [
  { naam: 'Sara M.', tekst: 'In één keer geslaagd. Farhan is rustig, duidelijk en gelooft in je — ook als je dat zelf even niet doet.', locatie: 'Assen' },
  { naam: 'Mohammed K.', tekst: 'Na twee mislukkingen elders: bij Farhan in 6 weken geslaagd. Andere aanpak, beter resultaat.', locatie: 'Amersfoort' },
  { naam: 'Lisa V.', tekst: 'Alles klopte: de auto, de timing, de begeleiding. Nooit het gevoel dat ik achter liep.', locatie: 'Assen' },
  { naam: 'Yusuf A.', tekst: 'Transparante prijzen, nul gedoe. Je betaalt voor wat je krijgt — en dat is veel.', locatie: 'Amersfoort' },
]

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

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-extrabold text-white leading-[0.92] tracking-tight mb-8">
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
            className="text-slate-400 text-base md:text-lg mb-10 max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            Verkeersschool Farhan. 92% slagingspercentage. Van aanmelding tot rijbewijs — zonder gedoe.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <Link
              href="/contact"
              className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-9 py-4 rounded-xl transition-all shadow-xl shadow-coral-500/25 hover:shadow-coral-500/40 hover:-translate-y-0.5 text-base"
            >
              Direct inschrijven
            </Link>
            <a
              href="https://wa.me/31612345678?text=Hallo%2C%20ik%20wil%20meer%20informatie"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/15 hover:border-white/30 text-white font-bold px-9 py-4 rounded-xl transition-all hover:-translate-y-0.5 text-base"
              style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)' }}
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
          DIFFERENTIATORS
      ════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-navy-950 border-t border-navy-800">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Waarom Farhan</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-md">
              Niet de goedkoopste.<br />Wel de beste keuze.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { nr: '92%', label: 'Slagingspercentage', tekst: 'Niet een belofte, maar een gemeten resultaat over honderden leerlingen in Assen en Amersfoort.' },
              { nr: '1:1', label: 'Altijd persoonlijk', tekst: 'Geen schaalmodel. Jij hebt één instructeur, één lijn, één aanpak — van begin tot examen.' },
              { nr: '0',   label: 'Verborgen kosten',  tekst: 'Pakketten staan volledig open. Je weet op dag één wat je betaalt, inclusief examen.' },
            ].map((d, i) => (
              <Reveal key={d.label} delay={i * 0.12}>
                <TiltCard className="h-full bg-navy-900 border border-navy-700 rounded-2xl p-8 hover:border-coral-500/40 transition-colors">
                  <div className="text-5xl md:text-6xl font-extrabold text-coral-400 mb-4 leading-none">{d.nr}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{d.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{d.tekst}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
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
      <section className="py-24 px-6 bg-navy-950">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-14 text-center">
            <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Pakketten</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Alles inbegrepen.<br />Geen verrassingen.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { naam: 'Starter',  prijs: '€ 35', per: '/ les', sub: 'Ideaal als je al enige rijervaring hebt.',             items: ['10 rijlessen van 60 min', 'Voortgangsgesprek', 'Alle locaties'], top: false },
              { naam: 'Compleet', prijs: '€ 1.199', per: '',   sub: 'Van nul tot rijbewijs — ons meest gekozen pakket.',   items: ['40 rijlessen van 60 min', 'Theoriebegeleiding', 'TTT inbegrepen', 'Eerste examen inbegrepen'], top: true },
              { naam: 'Intensief', prijs: '€ 1.599', per: '',  sub: 'Snel je rijbewijs — spoedplanning mogelijk.',          items: ['50 rijlessen van 60 min', 'Theoriebegeleiding', 'TTT inbegrepen', 'Twee examens inbegrepen'], top: false },
            ].map((p, i) => (
              <Reveal key={p.naam} delay={i * 0.1}>
                <TiltCard className={`relative h-full rounded-2xl p-8 flex flex-col border transition-colors ${p.top ? 'bg-navy-800 border-coral-500/70 shadow-xl shadow-coral-500/10' : 'bg-navy-900 border-navy-700 hover:border-navy-500'}`}>
                  {p.top && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Meest gekozen</span>}
                  <h3 className="text-xl font-bold text-white mb-1">{p.naam}</h3>
                  <p className="text-slate-500 text-sm mb-5">{p.sub}</p>
                  <div className="mb-6">
                    <span className={`text-4xl font-extrabold ${p.top ? 'text-coral-400' : 'text-white'}`}>{p.prijs}</span>
                    {p.per && <span className="text-slate-500 text-sm ml-1">{p.per}</span>}
                  </div>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <span className="text-coral-400 text-xs">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`block text-center font-semibold py-3 rounded-xl transition-colors ${p.top ? 'bg-coral-500 hover:bg-coral-600 text-white' : 'bg-navy-700 hover:bg-navy-600 border border-navy-600 text-white'}`}>
                    Inschrijven
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-8">
            <Link href="/pakketten" className="text-slate-500 hover:text-coral-400 text-sm transition-colors underline underline-offset-4">
              Alle losse tarieven bekijken
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          REVIEWS
      ════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-navy-900 border-t border-navy-700">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-14">
            <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Reviews</p>
            <h2 className="text-4xl font-extrabold text-white">Wat ze zeggen.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews.map((r, i) => (
              <Reveal key={r.naam} delay={i * 0.1} from={i % 2 === 0 ? 'left' : 'right'}>
                <TiltCard className="h-full bg-navy-800 border border-navy-700 hover:border-coral-500/30 rounded-2xl p-7 transition-colors">
                  <div className="text-amber-400 text-sm mb-3">{'★★★★★'}</div>
                  <p className="text-white text-base leading-relaxed mb-5 font-medium">&ldquo;{r.tekst}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-coral-500 rounded-full w-9 h-9 flex items-center justify-center text-white text-sm font-bold shrink-0">{r.naam[0]}</div>
                    <div>
                      <p className="text-white text-sm font-semibold">{r.naam}</p>
                      <p className="text-slate-500 text-xs">{r.locatie}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
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
            <a href="https://wa.me/31612345678" target="_blank" rel="noopener noreferrer"
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
