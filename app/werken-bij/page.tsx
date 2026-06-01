import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Werken bij Verkeersschool Farhan | Vacatures',
  description: 'Kom werken bij Verkeersschool Farhan in Assen of Amersfoort. Bekijk onze openstaande vacatures voor rijinstructeurs.',
}

const voordelen = [
  { icon: '💰', titel: 'Goed salaris',        tekst: 'Marktconform loon met ruimte voor groei.' },
  { icon: '📅', titel: 'Flexibele tijden',    tekst: 'Jij bepaalt grotendeels je eigen rooster.' },
  { icon: '🚗', titel: 'Moderne auto',         tekst: 'Rij in een goed uitgeruste lesauto.' },
  { icon: '🤝', titel: 'Klein team',           tekst: 'Directe samenwerking, geen bureaucratie.' },
  { icon: '📍', titel: '2 locaties',           tekst: 'Werkzaam in Assen én Amersfoort.' },
  { icon: '📈', titel: 'Groeiruimte',          tekst: 'Meedenken over de groei van de school.' },
]

export default function WerkenBijPage() {
  return (
    <div className="min-h-screen bg-[#080808]">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full -top-20 right-0 opacity-10"
            style={{ background: 'radial-gradient(circle, #f97316, transparent)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block bg-coral-500/10 text-coral-400 text-xs font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full border border-coral-500/20 mb-6">
            Vacatures
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[0.92] mb-6">
            Kom werken bij<br />
            <span className="text-coral-400">Verkeersschool Farhan.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
            Ben jij een gecertificeerde rijinstructeur die graag werkt in een persoonlijke, groeiende rijschool? Dan zoeken wij jou.
          </p>
          <a href="#vacatures"
            className="inline-block bg-coral-500 hover:bg-coral-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-coral-500/20 hover:-translate-y-0.5">
            Bekijk vacatures ↓
          </a>
        </div>
      </section>

      {/* ── VOORDELEN ── */}
      <section className="py-20 px-6 bg-[#0f0f0f] border-y border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">Waarom bij ons werken?</h2>
            <p className="text-slate-500">Klein team, grote impact.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {voordelen.map(v => (
              <div key={v.titel} className="bg-[#111] border border-[#1a1a1a] hover:border-coral-500/30 rounded-2xl p-6 transition-colors group">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-coral-400 transition-colors">{v.titel}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VACATURES ── */}
      <section id="vacatures" className="py-20 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">Openstaande vacatures.</h2>
          </div>

          {/* Vacature card */}
          <div className="bg-[#111] border border-coral-500/40 rounded-2xl p-8 mb-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <span className="text-[10px] font-bold text-coral-400 uppercase tracking-widest bg-coral-500/10 border border-coral-500/20 px-3 py-1 rounded-full">
                  Openstaand
                </span>
                <h3 className="text-white font-extrabold text-2xl mt-3 mb-1">Rijinstructeur Auto (B)</h3>
                <p className="text-slate-500 text-sm">📍 Assen &amp; Amersfoort · Parttime of fulltime</p>
              </div>
              <a href="#solliciteren"
                className="shrink-0 bg-coral-500 hover:bg-coral-600 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm hover:-translate-y-0.5 self-start">
                Solliciteer nu
              </a>
            </div>

            <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
              <div>
                <p className="text-white font-semibold mb-2">Wat we zoeken:</p>
                <ul className="space-y-1.5">
                  {[
                    'WRM-gecertificeerde rijinstructeur (of bereid om certificering te halen)',
                    'Geduldig, communicatief en betrouwbaar',
                    'Woonachtig in of rond Assen of Amersfoort',
                    'Beschikbaar voor minimaal 2 lesdagen per week',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-coral-400 shrink-0">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">Wat wij bieden:</p>
                <ul className="space-y-1.5">
                  {[
                    'Marktconform loon',
                    'Moderne lesauto beschikbaar',
                    'Flexibel rooster in overleg',
                    'Directe samenwerking met Farhan',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-coral-400 shrink-0">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Geen vacature maar interesse */}
          <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-3xl">📩</div>
            <div className="flex-1">
              <p className="text-white font-bold mb-1">Geen passende vacature?</p>
              <p className="text-slate-500 text-sm">Stuur een open sollicitatie — we kijken altijd of er een mogelijkheid is.</p>
            </div>
            <a href="#solliciteren"
              className="shrink-0 border border-[#2a2a2a] hover:border-coral-500/40 bg-[#1a1a1a] text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all hover:-translate-y-0.5">
              Open sollicitatie
            </a>
          </div>
        </div>
      </section>

      {/* ── SOLLICITEREN ── */}
      <section id="solliciteren" className="py-20 px-6 bg-[#0f0f0f] border-t border-[#1a1a1a]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-3">Solliciteer direct.</h2>
            <p className="text-slate-500">Stuur je motivatie en CV via WhatsApp of e-mail — we reageren binnen 24 uur.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://wa.me/31644626777?text=Hoi%20Farhan%2C%20ik%20wil%20graag%20solliciteren%20als%20rijinstructeur"
              target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl p-7 text-center transition-all group border border-green-700/40 bg-green-700/10 hover:bg-green-700/20 hover:-translate-y-1">
              <span className="text-4xl">💬</span>
              <div>
                <p className="text-white font-extrabold text-lg">WhatsApp</p>
                <p className="text-slate-400 text-sm mt-1">+31 6 44626777</p>
                <p className="text-green-400 text-xs mt-2 font-medium">Snelste reactie →</p>
              </div>
            </a>

            <a href="mailto:info@verkeersschoolfarhan.nl?subject=Sollicitatie%20rijinstructeur"
              className="flex flex-col items-center gap-3 rounded-2xl p-7 text-center transition-all group border border-[#222] bg-[#111] hover:bg-[#161616] hover:border-coral-500/30 hover:-translate-y-1">
              <span className="text-4xl">✉️</span>
              <div>
                <p className="text-white font-extrabold text-lg">E-mail</p>
                <p className="text-slate-400 text-sm mt-1">info@verkeersschoolfarhan.nl</p>
                <p className="text-coral-400 text-xs mt-2 font-medium">Stuur je CV →</p>
              </div>
            </a>
          </div>

          <p className="text-center text-slate-600 text-xs mt-6">
            Voeg je motivatie + CV toe. We nemen contact op zodra we jouw bericht hebben.
          </p>
        </div>
      </section>

    </div>
  )
}
