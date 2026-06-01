'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

// Calendly script runs client-side only
const CalendlyEmbed = dynamic(() => import('../components/CalendlyEmbed'), { ssr: false })

// ── Pas deze URL aan zodra Farhan een Calendly account heeft ──────────────────
// 1. Ga naar calendly.com → maak gratis account aan
// 2. Maak een event type "Proefles" (60 minuten)
// 3. Kopieer de link en vervang de URL hieronder
const CALENDLY_URL = 'https://calendly.com/verkeersschoolfarhan/proefles'
// ─────────────────────────────────────────────────────────────────────────────

export default function BoekenPage() {
  return (
    <div className="min-h-screen bg-[#080808]">

      {/* Hero */}
      <section className="py-16 px-6 bg-[#0f0f0f] border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-coral-500/10 text-coral-400 text-xs font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full border border-coral-500/20 mb-5">
            Direct inplannen
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Boek je proefles online.
          </h1>
          <p className="text-slate-400 text-lg max-w-lg mx-auto mb-6">
            Kies zelf een datum en tijd. Farhan bevestigt automatisch. Geen bellen nodig.
          </p>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="text-coral-400">✓</span> Vrijblijvend — geen verplichtingen
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-coral-400">✓</span> €60 voor 60 minuten
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-coral-400">✓</span> Assen & Amersfoort
            </span>
          </div>
        </div>
      </section>

      {/* Calendly + sidebar */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Calendly embed */}
          <div className="lg:col-span-2">
            <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-[#1a1a1a] flex items-center justify-between">
                <div>
                  <p className="text-white font-bold">Proefles boeken</p>
                  <p className="text-slate-500 text-xs">Kies een datum en tijd die jou uitkomt</p>
                </div>
                <span className="text-coral-400 font-bold text-sm">€60</span>
              </div>
              <CalendlyEmbed url={CALENDLY_URL} height={680} />
            </div>
          </div>

          {/* Sidebar info */}
          <div className="space-y-5">

            {/* What to expect */}
            <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Wat kun je verwachten?</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {[
                  { icon: '🚗', text: 'Je rijdt 60 minuten met Farhan in een moderne lesauto' },
                  { icon: '📊', text: 'Farhan beoordeelt eerlijk jouw huidige niveau' },
                  { icon: '📋', text: 'Samen bepalen we hoeveel lessen jij nodig hebt' },
                  { icon: '💬', text: 'Je krijgt direct eerlijk advies — geen verkoopgesprek' },
                  { icon: '✅', text: 'Geen verplichtingen na de proefles' },
                ].map(item => (
                  <li key={item.text} className="flex items-start gap-2.5">
                    <span className="shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Liever bellen? */}
            <div className="bg-coral-500/8 border border-coral-500/20 rounded-2xl p-5">
              <p className="text-white font-semibold mb-1 text-sm">Liever bellen of WhatsAppen?</p>
              <p className="text-slate-500 text-xs mb-4">Dat kan ook — wij reageren snel.</p>
              <div className="space-y-2">
                <a href="https://wa.me/31644626777?text=Hallo%2C%20ik%20wil%20een%20proefles%20plannen"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-700/20 hover:bg-green-700/30 border border-green-700/40 text-green-300 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors">
                  💬 WhatsApp sturen
                </a>
                <a href="tel:+31644626777"
                  className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors">
                  📞 +31 6 44626777
                </a>
              </div>
            </div>

            {/* Locaties */}
            <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-5">
              <p className="text-white font-semibold mb-3 text-sm">Locaties</p>
              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-coral-400">📍</span>
                  <div>
                    <p className="text-white font-medium">Assen</p>
                    <p>Drenthe</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-coral-400">📍</span>
                  <div>
                    <p className="text-white font-medium">Amersfoort</p>
                    <p>Utrecht</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="pb-12 text-center">
        <Link href="/" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">
          ← Terug naar home
        </Link>
      </div>

    </div>
  )
}
