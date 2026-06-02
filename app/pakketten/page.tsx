'use client'

import Link from 'next/link'
import { useState } from 'react'

// ── Prijsstructuur ────────────────────────────────────────
const LOS_PRIJS         = 60    // losse les
const PAKKET_LES_PRIJS  = 58    // €2 korting per les bij pakket
const EXAMEN_NORMAAL    = 350   // normaal examenprijs
const EXAMEN_KORTING    = 50    // €50 korting bij pakket
const EXAMEN_PAKKET     = EXAMEN_NORMAAL - EXAMEN_KORTING  // €300

const COMPLEET_LESSEN   = 40
const INTENSIEF_LESSEN  = 50

const COMPLEET_BASIS    = COMPLEET_LESSEN * PAKKET_LES_PRIJS + EXAMEN_PAKKET   // €2.620
const INTENSIEF_BASIS   = INTENSIEF_LESSEN * PAKKET_LES_PRIJS + EXAMEN_PAKKET * 2  // €3.500

const TERMIJN_OPSLAG = { 1: 0, 2: 50, 4: 100 } as const

function PakketCalc({ naam, basis, lessen, populair }: {
  naam: string; basis: number; lessen: number; populair?: boolean
}) {
  const [termijnen, setTermijnen] = useState<1|2|4>(1)
  const totaal = basis + TERMIJN_OPSLAG[termijnen]
  const perTermijn = Math.ceil(totaal / termijnen)

  return (
    <div className={`rounded-2xl border flex flex-col h-full transition-all ${
      populair
        ? 'bg-[#130800] border-coral-500/70 shadow-2xl shadow-coral-500/10 md:-mt-4'
        : 'bg-[#111] border-[#1a1a1a] hover:border-[#2a2a2a]'
    }`}>
      {populair && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
          ⭐ Meest gekozen
        </div>
      )}

      <div className="p-7 flex flex-col h-full relative">
        <h2 className="text-xl font-extrabold text-white mb-1">{naam}</h2>
        <p className="text-slate-500 text-xs mb-5">
          {lessen} lessen · TTT · {naam === 'Intensief' ? '2 examens' : '1 examen'} inbegrepen
        </p>

        {/* Prijs detail */}
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-4 mb-5 space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-500">{lessen} lessen × €{PAKKET_LES_PRIJS}</span>
            <span className="text-white font-medium">€{(lessen * PAKKET_LES_PRIJS).toLocaleString('nl')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">
              {naam === 'Intensief' ? '2× ' : ''}Examen
              <span className="text-green-400 ml-1">(−€{EXAMEN_KORTING} korting)</span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-600 line-through">€{naam === 'Intensief' ? (EXAMEN_NORMAAL * 2).toLocaleString('nl') : EXAMEN_NORMAAL}</span>
              <span className="text-white font-medium">€{naam === 'Intensief' ? (EXAMEN_PAKKET * 2).toLocaleString('nl') : EXAMEN_PAKKET}</span>
            </div>
          </div>
          {termijnen > 1 && (
            <div className="flex justify-between text-amber-400">
              <span>{termijnen} termijnen toeslag</span>
              <span>+€{TERMIJN_OPSLAG[termijnen]}</span>
            </div>
          )}
          <div className="flex justify-between border-t border-[#1a1a1a] pt-2 mt-1">
            <span className="text-white font-bold">Totaal</span>
            <span className={`font-extrabold text-lg ${populair ? 'text-coral-400' : 'text-white'}`}>
              €{totaal.toLocaleString('nl')}
            </span>
          </div>
        </div>

        {/* Termijnen kiezer */}
        <div className="mb-5">
          <p className="text-slate-400 text-xs font-medium mb-2">Betaalplan</p>
          <div className="grid grid-cols-3 gap-2">
            {([1, 2, 4] as const).map(t => (
              <button key={t} onClick={() => setTermijnen(t)}
                className={`py-2 rounded-xl border text-xs font-bold transition-all ${
                  termijnen === t
                    ? 'bg-coral-500 border-coral-500 text-white'
                    : 'bg-[#1a1a1a] border-[#2a2a2a] text-slate-400 hover:border-coral-500/40'
                }`}>
                {t === 1 ? 'In 1×' : `${t} termijnen`}
                {t > 1 && <span className="block text-[9px] opacity-75">+€{TERMIJN_OPSLAG[t]}</span>}
              </button>
            ))}
          </div>
          {termijnen > 1 && (
            <p className="text-slate-500 text-[11px] mt-2 text-center">
              {termijnen}× <span className="text-white font-bold">€{perTermijn.toLocaleString('nl')}</span> per termijn
            </p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6 flex-1 text-sm">
          {[
            `${lessen} rijlessen van 60 min (€${PAKKET_LES_PRIJS}/les)`,
            'Theoriebegeleiding inbegrepen',
            'Tussentijdse toets (TTT)',
            `${naam === 'Intensief' ? '2× ' : ''}Examen (€${EXAMEN_PAKKET} i.p.v. €${EXAMEN_NORMAAL})`,
            naam === 'Intensief' ? 'Spoedplanning prioriteit' : 'Voortgangsgesprekken',
            'Assen & Amersfoort',
          ].map(f => (
            <li key={f} className="flex items-start gap-2 text-slate-300">
              <span className={`text-xs shrink-0 mt-0.5 ${populair ? 'text-coral-400' : 'text-slate-600'}`}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        <Link href="/boeken"
          className={`block text-center font-bold py-3.5 rounded-xl transition-all text-sm hover:-translate-y-0.5 ${
            populair
              ? 'bg-coral-500 hover:bg-coral-600 text-white shadow-lg shadow-coral-500/20'
              : 'bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] text-white'
          }`}>
          Pakket kiezen
        </Link>
      </div>
    </div>
  )
}

export default function PakkettenPage() {
  return (
    <div className="min-h-screen bg-[#080808] py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Transparante prijzen</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Pakketten &amp; Prijzen
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            Duidelijke kortingen, flexibele betaalplannen. Geen verborgen kosten.
          </p>
        </div>

        {/* Korting uitleg */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-coral-500/8 border border-coral-500/20 rounded-2xl p-5">
            <p className="text-coral-400 text-xs font-bold uppercase tracking-wider mb-4">Zo werkt de korting</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-coral-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-coral-400 font-extrabold text-sm">−€2</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">€2 per les goedkoper</p>
                  <p className="text-slate-500 text-xs">Normaal €60 → <span className="text-white font-bold">€58/les</span> bij pakket</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-coral-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-coral-400 font-extrabold text-sm">−€50</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">€50 examenkorting</p>
                  <p className="text-slate-500 text-xs">Examen €350 → <span className="text-white font-bold">€300</span> bij pakket</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Losse les + pakketten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 relative">

          {/* Losse les */}
          <div className="bg-[#111] border border-[#1a1a1a] hover:border-[#2a2a2a] rounded-2xl p-7 flex flex-col">
            <h2 className="text-xl font-extrabold text-white mb-1">Losse lessen</h2>
            <p className="text-slate-500 text-xs mb-5">Flexibel, geen verplichtingen.</p>
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-4 mb-5">
              <span className="text-3xl font-extrabold text-white">€{LOS_PRIJS}</span>
              <span className="text-slate-500 text-sm ml-2">per les</span>
              <p className="text-slate-600 text-xs mt-1">Examen apart: €{EXAMEN_NORMAAL}</p>
            </div>
            <ul className="space-y-2 mb-6 flex-1 text-sm">
              {['60 minuten per les', 'Geen minimum', 'Assen & Amersfoort', 'Voortgangsgesprek op verzoek'].map(f => (
                <li key={f} className="flex items-center gap-2 text-slate-300">
                  <span className="text-slate-600 text-xs">✓</span>{f}
                </li>
              ))}
            </ul>
            <Link href="/boeken" className="block text-center font-bold py-3.5 rounded-xl bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] text-white text-sm transition-all hover:-translate-y-0.5">
              Plan een les
            </Link>
          </div>

          {/* Compleet */}
          <div className="relative">
            <PakketCalc naam="Compleet" basis={COMPLEET_BASIS} lessen={COMPLEET_LESSEN} populair />
          </div>

          {/* Intensief */}
          <div className="relative">
            <PakketCalc naam="Intensief" basis={INTENSIEF_BASIS} lessen={INTENSIEF_LESSEN} />
          </div>
        </div>

        {/* Betaalplannen uitleg */}
        <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-7 mb-10">
          <h2 className="text-white font-bold text-lg mb-5">Betaalplannen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'In 1 keer', toeslag: 0, desc: 'Eénmalige betaling — geen toeslag', kleur: 'text-green-400' },
              { label: '2 termijnen', toeslag: 50, desc: '2× betalen — €50 extra', kleur: 'text-amber-400' },
              { label: '4 termijnen', toeslag: 100, desc: '4× betalen — €100 extra', kleur: 'text-amber-400' },
            ].map(plan => (
              <div key={plan.label} className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-bold text-sm">{plan.label}</p>
                  <span className={`text-sm font-extrabold ${plan.kleur}`}>
                    {plan.toeslag === 0 ? 'Gratis' : `+€${plan.toeslag}`}
                  </span>
                </div>
                <p className="text-slate-500 text-xs">{plan.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-xs mt-4">
            💡 Kies je betaalplan in de pakketkaart hierboven — de prijs past zich automatisch aan.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-500 text-sm mb-4">Begin met een vrijblijvende proefles voor €60</p>
          <Link href="/boeken"
            className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-coral-500/20 hover:-translate-y-0.5 inline-block">
            🚗 Plan een proefles
          </Link>
        </div>

      </div>
    </div>
  )
}
