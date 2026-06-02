import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pakketten & Prijzen | Verkeersschool Farhan',
  description: 'Bekijk de rijlespakketten van Verkeersschool Farhan. Losse les €60 · Compleet €1.199 (bespaar €1.201) · Intensief €1.599 (bespaar €1.401).',
}

const LOS_PRIJS = 60

const pakketten = [
  {
    naam: 'Losse lessen',
    totaal: null,
    aantalLessen: null,
    perLes: 60,
    besparing: 0,
    besparingPct: 0,
    sub: 'Flexibel — geen verplichtingen.',
    badge: null,
    functies: [
      '60 minuten per les',
      'Geen minimumafname',
      'Assen & Amersfoort',
      'Voortgangsgesprek op verzoek',
    ],
    cta: 'Plan een les',
    populair: false,
  },
  {
    naam: 'Compleet',
    totaal: 1199,
    aantalLessen: 40,
    perLes: Math.round(1199 / 40),
    besparing: 40 * 60 - 1199,
    besparingPct: Math.round(((40 * 60 - 1199) / (40 * 60)) * 100),
    sub: 'Van nul tot rijbewijs — alles inbegrepen.',
    badge: 'Meest gekozen',
    functies: [
      '40 rijlessen van 60 min',
      'Theoriebegeleiding inbegrepen',
      'Tussentijdse toets (TTT)',
      'Eerste examen inbegrepen',
      'Voortgangsgesprekken',
      'Assen & Amersfoort',
    ],
    cta: 'Inschrijven',
    populair: true,
  },
  {
    naam: 'Intensief',
    totaal: 1599,
    aantalLessen: 50,
    perLes: Math.round(1599 / 50),
    besparing: 50 * 60 - 1599,
    besparingPct: Math.round(((50 * 60 - 1599) / (50 * 60)) * 100),
    sub: 'Snel rijbewijs — spoedplanning mogelijk.',
    badge: null,
    functies: [
      '50 rijlessen van 60 min',
      'Theoriebegeleiding inbegrepen',
      'Tussentijdse toets (TTT)',
      '2 examens inbegrepen',
      'Spoedplanning prioriteit',
      'Assen & Amersfoort',
    ],
    cta: 'Inschrijven',
    populair: false,
  },
]

const extras = [
  { naam: 'Losse rijles (60 min)', prijs: '€60' },
  { naam: 'Tussentijdse toets (TTT)', prijs: '€75' },
  { naam: 'Rijexamen (CBR aanvraag)', prijs: '€110' },
  { naam: 'Faalangstbegeleiding', prijs: '€150' },
]

export default function PakkettenPage() {
  return (
    <div className="min-h-screen bg-[#080808] py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Transparante prijzen</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Pakketten &amp; Prijzen
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            Hoe meer lessen je boekt, hoe goedkoper per les. Geen verstopte kosten — wat je ziet is wat je betaalt.
          </p>
        </div>

        {/* Korting tabel */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 text-xs font-bold uppercase tracking-wider text-slate-600 border-b border-[#1a1a1a] px-5 py-3">
              <span>Pakket</span>
              <span className="text-center">Prijs/les</span>
              <span className="text-center">Korting/les</span>
              <span className="text-right">Totale besparing</span>
            </div>
            {pakketten.map(p => (
              <div key={p.naam} className={`grid grid-cols-4 items-center px-5 py-3.5 border-b border-[#111] last:border-0 ${p.populair ? 'bg-coral-500/5' : ''}`}>
                <span className={`text-sm font-semibold ${p.populair ? 'text-coral-400' : 'text-white'}`}>
                  {p.naam}
                </span>
                <span className="text-center text-sm font-bold text-white">
                  €{p.perLes}
                </span>
                <span className="text-center text-sm font-bold text-green-400">
                  {p.besparing > 0 ? `−€${LOS_PRIJS - p.perLes}/les` : '—'}
                </span>
                <span className="text-right text-sm font-extrabold">
                  {p.besparing > 0
                    ? <span className="text-green-400">€{p.besparing.toLocaleString('nl')}</span>
                    : <span className="text-slate-600">€0</span>}
                </span>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-xs text-center mt-2">
            * Besparing berekend ten opzichte van {LOS_PRIJS} losse lessen à €{LOS_PRIJS}
          </p>
        </div>

        {/* Pakket kaarten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pakketten.map((p) => (
            <div key={p.naam} className={`relative rounded-2xl flex flex-col border transition-all ${
              p.populair
                ? 'bg-[#130800] border-coral-500/70 shadow-2xl shadow-coral-500/10 md:-mt-4'
                : 'bg-[#111] border-[#222] hover:border-[#333]'
            }`}>

              {p.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                  ⭐ {p.badge}
                </div>
              )}

              <div className="p-7 flex flex-col h-full">
                {/* Naam + sub */}
                <h2 className="text-xl font-extrabold text-white mb-1">{p.naam}</h2>
                <p className="text-slate-500 text-xs mb-5">{p.sub}</p>

                {/* Prijs blok */}
                {p.totaal ? (
                  <div className="bg-[#0f0f0f] rounded-xl p-4 mb-5 border border-[#1a1a1a]">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className={`text-4xl font-extrabold leading-none ${p.populair ? 'text-coral-400' : 'text-white'}`}>
                          €{p.totaal.toLocaleString('nl')}
                        </span>
                        <span className="text-slate-500 text-xs ml-2">totaal</span>
                      </div>
                      {p.besparing > 0 && (
                        <span className="bg-green-500/15 border border-green-500/30 text-green-400 text-[11px] font-bold px-2 py-1 rounded-lg whitespace-nowrap">
                          −{p.besparingPct}%
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">
                        <span className="text-white font-bold">€{p.perLes}</span> per les
                        <span className="text-slate-600 ml-1">(i.p.v. €{LOS_PRIJS})</span>
                      </span>
                    </div>
                    {p.besparing > 0 && (
                      <div className="mt-3 pt-3 border-t border-[#1a1a1a] flex items-center justify-between">
                        <span className="text-slate-500 text-xs">{p.aantalLessen} × €{LOS_PRIJS} los =</span>
                        <div className="text-right">
                          <span className="text-slate-500 text-xs line-through">€{(p.aantalLessen! * LOS_PRIJS).toLocaleString('nl')}</span>
                          <span className="text-green-400 font-extrabold text-sm ml-2">Je bespaart €{p.besparing.toLocaleString('nl')}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="mb-5">
                    <span className="text-4xl font-extrabold text-white">€{p.perLes}</span>
                    <span className="text-slate-500 text-sm ml-2">per les</span>
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {p.functies.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className={`text-xs shrink-0 ${p.populair ? 'text-coral-400' : 'text-slate-500'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/boeken"
                  className={`block text-center font-bold py-3.5 rounded-xl transition-all text-sm ${
                    p.populair
                      ? 'bg-coral-500 hover:bg-coral-600 text-white shadow-lg shadow-coral-500/20'
                      : 'bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] text-white'
                  }`}>
                  {p.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Besparingsgrafiek */}
        <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-7 mb-12">
          <h2 className="text-white font-extrabold text-xl mb-6">Wat kost het je écht?</h2>
          <div className="space-y-4">
            {[
              { label: '40 losse lessen', bedrag: 40 * LOS_PRIJS, highlight: false },
              { label: 'Compleet pakket (40 lessen)', bedrag: 1199, highlight: true, besparing: 40 * LOS_PRIJS - 1199 },
              { label: '50 losse lessen', bedrag: 50 * LOS_PRIJS, highlight: false },
              { label: 'Intensief pakket (50 lessen)', bedrag: 1599, highlight: true, besparing: 50 * LOS_PRIJS - 1599 },
            ].map(row => (
              <div key={row.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-sm ${row.highlight ? 'text-white font-semibold' : 'text-slate-500'}`}>
                    {row.label}
                  </span>
                  <div className="flex items-center gap-3">
                    {row.besparing && (
                      <span className="text-green-400 text-xs font-bold">
                        bespaar €{row.besparing.toLocaleString('nl')}
                      </span>
                    )}
                    <span className={`text-sm font-bold ${row.highlight ? 'text-coral-400' : 'text-slate-500'}`}>
                      €{row.bedrag.toLocaleString('nl')}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${row.highlight ? 'bg-coral-500' : 'bg-[#2a2a2a]'}`}
                    style={{ width: `${(row.bedrag / (50 * LOS_PRIJS)) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-xs mt-5">
            * Pakketten inclusief theoriebegeleiding, TTT en examen — bij losse lessen betaal je dit apart
          </p>
        </div>

        {/* Losse tarieven */}
        <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-7 mb-10">
          <h2 className="text-white font-bold text-lg mb-5">Losse tarieven</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {extras.map(e => (
              <div key={e.naam} className="flex justify-between items-center bg-[#1a1a1a] rounded-xl px-5 py-3 border border-[#222]">
                <span className="text-slate-300 text-sm">{e.naam}</span>
                <span className="text-coral-400 font-bold">{e.prijs}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-xs mt-4">* Inclusief btw. CBR-examengeld (rijexamen) niet inbegrepen bij losse lessen.</p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-500 mb-4 text-sm">Weet je niet welk pakket bij jou past?</p>
          <Link href="/boeken"
            className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-8 py-4 rounded-xl transition-colors inline-block shadow-lg shadow-coral-500/20 hover:-translate-y-0.5">
            🚗 Begin met een proefles — €60
          </Link>
        </div>
      </div>
    </div>
  )
}
