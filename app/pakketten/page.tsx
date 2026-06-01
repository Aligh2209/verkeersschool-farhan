import Link from 'next/link'

const pakketten = [
  {
    naam: 'Losse lessen',
    prijs: '€ 60',
    perLes: 'per les',
    omschrijving: 'Flexibel starten — geen verplichtingen, altijd 60 minuten.',
    functies: [
      '60 minuten per les',
      'Geen minimumafname',
      'Voortgangsgesprek op verzoek',
      'Assen & Amersfoort',
    ],
    populair: false,
  },
  {
    naam: 'Compleet',
    prijs: '€ 1.199',
    perLes: 'volledig pakket',
    omschrijving: 'Ons meest gekozen pakket. Van nul tot rijbewijs in één pakket.',
    functies: [
      '40 rijlessen van 60 min',
      'Theorie-begeleiding inbegrepen',
      'Tussentijdse toets (TTT)',
      'Examenbegeleiding',
      'Eerste examen inbegrepen',
      'Voortgangsgesprekken',
    ],
    populair: true,
  },
  {
    naam: 'Intensief',
    prijs: '€ 1.599',
    perLes: 'volledig pakket',
    omschrijving: 'Snel je rijbewijs in korte tijd. Ideaal voor snelle leerlingen.',
    functies: [
      '50 rijlessen van 60 min',
      'Theorie-begeleiding inbegrepen',
      'Tussentijdse toets (TTT)',
      'Examenbegeleiding',
      'Eerste examen inbegrepen',
      'Spoedplanning mogelijk',
      '2e examen inbegrepen',
    ],
    populair: false,
  },
]

const extras = [
  { naam: 'Losse rijles (60 min)', prijs: '€ 35' },
  { naam: 'Tussentijdse toets (TTT)', prijs: '€ 75' },
  { naam: 'Rijexamen (CBR)', prijs: '€ 110' },
  { naam: 'Faalangstcursus', prijs: '€ 150' },
]

export default function PakkettenPage() {
  return (
    <div className="min-h-screen bg-navy-950 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-coral-400 font-semibold text-sm uppercase tracking-wider mb-2">Transparante prijzen</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Pakketten &amp; Prijzen
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Kies het pakket dat bij jouw situatie past. Twijfel je? Wij helpen je graag de juiste keuze te maken.
          </p>
        </div>

        {/* Pakketten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pakketten.map((p) => (
            <div
              key={p.naam}
              className={`relative rounded-2xl p-8 flex flex-col border transition-all ${
                p.populair
                  ? 'bg-navy-800 border-coral-500 shadow-2xl shadow-coral-500/10 scale-105'
                  : 'bg-navy-800 border-navy-600 hover:border-coral-500/50'
              }`}
            >
              {p.populair && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  Meest gekozen
                </span>
              )}
              <h2 className="text-2xl font-bold text-white mb-1">{p.naam}</h2>
              <p className="text-sm text-slate-400 mb-4">{p.omschrijving}</p>
              <div className="mb-6">
                <span className={`text-4xl font-extrabold ${p.populair ? 'text-coral-400' : 'text-white'}`}>
                  {p.prijs}
                </span>
                <span className="text-sm text-slate-500 ml-2">{p.perLes}</span>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {p.functies.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="text-coral-400">✓</span>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                  p.populair
                    ? 'bg-coral-500 hover:bg-coral-600 text-white'
                    : 'bg-navy-700 hover:bg-navy-600 text-white border border-navy-500'
                }`}
              >
                Inschrijven
              </Link>
            </div>
          ))}
        </div>

        {/* Losse tarieven */}
        <div className="bg-navy-800 border border-navy-600 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Losse tarieven</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {extras.map((e) => (
              <div
                key={e.naam}
                className="flex justify-between items-center bg-navy-700 rounded-xl px-5 py-3 border border-navy-500"
              >
                <span className="text-slate-300">{e.naam}</span>
                <span className="text-coral-400 font-bold">{e.prijs}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-4">
            * Alle prijzen zijn inclusief btw. CBR-examengelden zijn niet inbegrepen tenzij anders vermeld.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Weet je niet welk pakket je moet kiezen?</p>
          <Link
            href="/contact"
            className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors inline-block shadow-lg shadow-coral-500/20"
          >
            Vraag gratis advies aan
          </Link>
        </div>
      </div>
    </div>
  )
}
