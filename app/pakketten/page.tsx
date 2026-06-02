import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pakketten & Prijzen | Verkeersschool Farhan',
  description: 'Rijlespakketten Verkeersschool Farhan. €60 per losse les. Met pakket: €58/les + €50 examenkorting. Assen & Amersfoort.',
}

// ── Prijsstructuur ────────────────────────────────────────
const LOS_PRIJS        = 60   // losse les
const PAKKET_LES_PRIJS = 58   // €2 korting per les bij pakket
const EXAMEN_NORMAAL   = 110  // normaal examenprijs
const EXAMEN_KORTING   = 50   // €50 korting bij pakket
const EXAMEN_PAKKET    = EXAMEN_NORMAAL - EXAMEN_KORTING  // €60

// Compleet: 40 lessen + TTT + 1 examen
const COMPLEET_LESSEN  = 40
const COMPLEET_TOTAAL  = COMPLEET_LESSEN * PAKKET_LES_PRIJS + EXAMEN_PAKKET
// 40 × €58 + €60 = €2.380

// Intensief: 50 lessen + TTT + 2 examens
const INTENSIEF_LESSEN = 50
const INTENSIEF_TOTAAL = INTENSIEF_LESSEN * PAKKET_LES_PRIJS + EXAMEN_PAKKET * 2
// 50 × €58 + €120 = €3.020

const pakketten = [
  {
    naam: 'Losse lessen',
    prijs: LOS_PRIJS,
    perLesDisplay: `€${LOS_PRIJS}`,
    totaal: null,
    korting: null,
    examenKorting: false,
    sub: 'Flexibel, geen verplichtingen — start wanneer je wilt.',
    badge: null,
    functies: [
      '60 minuten per les',
      'Geen minimumafname',
      'Assen & Amersfoort',
      'Voortgangsgesprek op verzoek',
    ],
    populair: false,
  },
  {
    naam: 'Compleet',
    prijs: PAKKET_LES_PRIJS,
    perLesDisplay: `€${PAKKET_LES_PRIJS}`,
    totaal: COMPLEET_TOTAAL,
    korting: LOS_PRIJS - PAKKET_LES_PRIJS,
    examenKorting: true,
    sub: 'Van nul tot rijbewijs — alles inbegrepen.',
    badge: 'Meest gekozen',
    functies: [
      `${COMPLEET_LESSEN} rijlessen van 60 min`,
      'Theoriebegeleiding inbegrepen',
      'Tussentijdse toets (TTT)',
      `Examen inbegrepen (€${EXAMEN_KORTING} korting)`,
      'Voortgangsgesprekken',
      'Assen & Amersfoort',
    ],
    populair: true,
  },
  {
    naam: 'Intensief',
    prijs: PAKKET_LES_PRIJS,
    perLesDisplay: `€${PAKKET_LES_PRIJS}`,
    totaal: INTENSIEF_TOTAAL,
    korting: LOS_PRIJS - PAKKET_LES_PRIJS,
    examenKorting: true,
    sub: 'Snel rijbewijs — spoedplanning mogelijk.',
    badge: null,
    functies: [
      `${INTENSIEF_LESSEN} rijlessen van 60 min`,
      'Theoriebegeleiding inbegrepen',
      'Tussentijdse toets (TTT)',
      `2 examens inbegrepen (2× €${EXAMEN_KORTING} korting)`,
      'Spoedplanning prioriteit',
      'Assen & Amersfoort',
    ],
    populair: false,
  },
]

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
            Hoe meer lessen je boekt, hoe meer je bespaart. Geen verstopte kosten.
          </p>
        </div>

        {/* Korting uitleg banner */}
        <div className="max-w-2xl mx-auto mb-10 bg-coral-500/8 border border-coral-500/20 rounded-2xl p-5">
          <p className="text-coral-400 text-xs font-bold uppercase tracking-wider mb-4">Zo werkt de korting</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-coral-500/20 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-coral-400 text-sm font-extrabold">−€2</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">€2 korting per les</p>
                <p className="text-slate-500 text-xs">€60 → <strong className="text-white">€58</strong> per les bij elk pakket</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-coral-500/20 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-coral-400 text-sm font-extrabold">−€50</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">€50 examenkorting</p>
                <p className="text-slate-500 text-xs">€110 → <strong className="text-white">€60</strong> per examen bij pakket</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pakketkaarten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pakketten.map(p => (
            <div key={p.naam} className={`relative rounded-2xl flex flex-col border transition-all ${
              p.populair
                ? 'bg-[#130800] border-coral-500/70 shadow-2xl shadow-coral-500/10 md:-mt-4'
                : 'bg-[#111] border-[#1a1a1a] hover:border-[#2a2a2a]'
            }`}>

              {p.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                  ⭐ {p.badge}
                </div>
              )}

              <div className="p-7 flex flex-col h-full">
                <h2 className="text-xl font-extrabold text-white mb-1">{p.naam}</h2>
                <p className="text-slate-500 text-xs mb-5">{p.sub}</p>

                {/* Prijs display */}
                <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-4 mb-5">
                  {p.totaal ? (
                    <>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className={`text-3xl font-extrabold ${p.populair ? 'text-coral-400' : 'text-white'}`}>
                            €{p.totaal.toLocaleString('nl')}
                          </span>
                          <span className="text-slate-500 text-xs ml-2">totaal</span>
                        </div>
                      </div>
                      {/* Per les vergelijking */}
                      <div className="space-y-1.5 text-xs border-t border-[#1a1a1a] pt-3">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Prijs per les</span>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-600 line-through">€{LOS_PRIJS}</span>
                            <span className="text-white font-bold">€{p.prijs}</span>
                            <span className="bg-green-500/15 text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded">
                              −€{p.korting}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Examen</span>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-600 line-through">€{EXAMEN_NORMAAL}</span>
                            <span className="text-white font-bold">€{EXAMEN_PAKKET}</span>
                            <span className="bg-green-500/15 text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded">
                              −€{EXAMEN_KORTING}
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div>
                      <span className="text-3xl font-extrabold text-white">€{p.prijs}</span>
                      <span className="text-slate-500 text-sm ml-2">per les</span>
                      <p className="text-slate-600 text-xs mt-1">Geen pakket — volledige prijs per les</p>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {p.functies.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className={`text-xs shrink-0 mt-0.5 ${p.populair ? 'text-coral-400' : 'text-slate-600'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/boeken"
                  className={`block text-center font-bold py-3.5 rounded-xl transition-all text-sm hover:-translate-y-0.5 ${
                    p.populair
                      ? 'bg-coral-500 hover:bg-coral-600 text-white shadow-lg shadow-coral-500/20'
                      : 'bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] text-white'
                  }`}>
                  {p.totaal ? 'Pakket kiezen' : 'Plan een les'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Snel overzicht */}
        <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl overflow-hidden mb-12">
          <div className="px-6 py-4 border-b border-[#1a1a1a]">
            <h2 className="text-white font-bold">Prijsoverzicht</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1a1a1a] text-slate-600 text-xs uppercase tracking-wider">
                  <th className="text-left px-6 py-3 font-medium">Pakket</th>
                  <th className="text-center px-4 py-3 font-medium">Lessen</th>
                  <th className="text-center px-4 py-3 font-medium">Per les</th>
                  <th className="text-center px-4 py-3 font-medium">Examen</th>
                  <th className="text-right px-6 py-3 font-medium">Totaal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#111]">
                <tr className="hover:bg-[#0f0f0f] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">Losse lessen</td>
                  <td className="px-4 py-4 text-center text-slate-400">Naar behoefte</td>
                  <td className="px-4 py-4 text-center font-bold text-white">€60</td>
                  <td className="px-4 py-4 text-center text-slate-400">€110 apart</td>
                  <td className="px-6 py-4 text-right text-slate-400">Variabel</td>
                </tr>
                <tr className="bg-coral-500/5 hover:bg-coral-500/8 transition-colors">
                  <td className="px-6 py-4 font-bold text-coral-400">Compleet ⭐</td>
                  <td className="px-4 py-4 text-center text-white">{COMPLEET_LESSEN} lessen</td>
                  <td className="px-4 py-4 text-center">
                    <span className="text-slate-500 line-through text-xs mr-1">€60</span>
                    <span className="font-extrabold text-white">€{PAKKET_LES_PRIJS}</span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="text-slate-500 line-through text-xs mr-1">€{EXAMEN_NORMAAL}</span>
                    <span className="font-extrabold text-white">€{EXAMEN_PAKKET}</span>
                  </td>
                  <td className="px-6 py-4 text-right font-extrabold text-coral-400">
                    €{COMPLEET_TOTAAL.toLocaleString('nl')}
                  </td>
                </tr>
                <tr className="hover:bg-[#0f0f0f] transition-colors">
                  <td className="px-6 py-4 font-bold text-white">Intensief</td>
                  <td className="px-4 py-4 text-center text-white">{INTENSIEF_LESSEN} lessen</td>
                  <td className="px-4 py-4 text-center">
                    <span className="text-slate-500 line-through text-xs mr-1">€60</span>
                    <span className="font-extrabold text-white">€{PAKKET_LES_PRIJS}</span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="text-slate-500 line-through text-xs mr-1">€{EXAMEN_NORMAAL}</span>
                    <span className="font-extrabold text-white">€{EXAMEN_PAKKET}</span> ×2
                  </td>
                  <td className="px-6 py-4 text-right font-extrabold text-white">
                    €{INTENSIEF_TOTAAL.toLocaleString('nl')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 border-t border-[#1a1a1a] text-slate-600 text-xs">
            * Alle prijzen inclusief btw. TTT (tussentijdse toets) inbegrepen in Compleet & Intensief.
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-500 text-sm mb-4">Begin met een vrijblijvende proefles</p>
          <Link href="/boeken"
            className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-coral-500/20 hover:-translate-y-0.5 inline-block">
            🚗 Plan een proefles — €60
          </Link>
        </div>

      </div>
    </div>
  )
}
