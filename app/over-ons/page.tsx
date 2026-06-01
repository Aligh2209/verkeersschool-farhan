import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Ons | Verkeersschool Farhan — Assen & Amersfoort',
  description: 'Waarom kiezen voor Verkeersschool Farhan? Leer ons kennen: onze aanpak, voordelen, locaties en waarom 500+ leerlingen al voor ons kozen.',
}

const voordelen = [
  {
    icon: '🎯',
    titel: 'Altijd dezelfde instructeur',
    tekst: 'Je rijdt van dag één tot je examen met Farhan. Geen wisselingen, geen opnieuw uitleggen.',
  },
  {
    icon: '⏱️',
    titel: '60 minuten per les',
    tekst: 'Elke les duurt precies 60 minuten. Geen kortere sessies om meer lessen te verkopen.',
  },
  {
    icon: '💰',
    titel: '€60 per losse les',
    tekst: 'Vaste prijs, geen toeslagen, geen verborgen kosten. Wat je ziet is wat je betaalt.',
  },
  {
    icon: '🏆',
    titel: '92% slagingspercentage',
    tekst: 'Geen marketingpraatje — een gemeten resultaat over honderden leerlingen.',
  },
  {
    icon: '🔄',
    titel: 'Na zak: gewoon door',
    tekst: 'Zakken is niet het einde. We bespreken wat er misging en plannen direct het herexamen.',
  },
  {
    icon: '🚗',
    titel: 'Moderne auto',
    tekst: 'Rijles in een goed onderhouden auto met dubbele bediening — veilig en comfortabel.',
  },
  {
    icon: '📚',
    titel: 'Theoriebegeleiding',
    tekst: 'In het Compleet- en Intensief-pakket helpen we je ook met de theorie zodat je sneller slaagt.',
  },
  {
    icon: '📍',
    titel: '2 locaties',
    tekst: 'Actief in Assen (Drenthe) én Amersfoort (Utrecht). Altijd een locatie dicht bij jou.',
  },
  {
    icon: '⚡',
    titel: 'Snel starten',
    tekst: 'Vaak kun je al binnen een week beginnen. Stuur een WhatsApp en we kijken direct.',
  },
  {
    icon: '🌍',
    titel: 'Nederlands of Engels',
    tekst: 'Les in jouw taal. Farhan geeft les in het Nederlands én het Engels.',
  },
  {
    icon: '📅',
    titel: 'Flexibele lestijden',
    tekst: 'Lessen in ochtend, middag én avond — ook op zaterdag. Afgestemd op jouw agenda.',
  },
  {
    icon: '🛡️',
    titel: 'WRM gecertificeerd',
    tekst: 'Farhan is gecertificeerd rijinstructeur. Jij bent in goede handen.',
  },
]

const stappen = [
  { nr: '01', titel: 'Proefles', tekst: '€60 — eerlijk beeld van jouw niveau, geen verplichtingen.' },
  { nr: '02', titel: 'Rijplan', tekst: 'Samen bepalen we hoeveel lessen je nodig hebt.' },
  { nr: '03', titel: 'Rijlessen', tekst: '60 min per les, jouw tempo, directe feedback.' },
  { nr: '04', titel: 'TTT', tekst: 'Proefexamen bij CBR. Zo weet je waar je staat.' },
  { nr: '05', titel: 'Examen', tekst: 'Volledig voorbereid. En bij zak: direct door.' },
]

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-[#080808]">

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 px-6 bg-[#080808]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full -top-32 -left-20 opacity-10"
            style={{ background: 'radial-gradient(circle, #f97316, transparent)' }} />
          <div className="absolute w-[400px] h-[400px] rounded-full -bottom-20 right-0 opacity-8"
            style={{ background: 'radial-gradient(circle, #c2410c, transparent)' }} />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block bg-coral-500/10 text-coral-400 text-xs font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full border border-coral-500/20 mb-6">
            Over ons
          </span>
          <h1 className="text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold text-white leading-[0.92] mb-6">
            Waarom kiezen voor<br />
            <span className="text-coral-400">Verkeersschool Farhan?</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Persoonlijk, transparant en bewezen effectief. Al 500+ leerlingen gingen je voor in Assen en Amersfoort.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-coral-500/20 hover:-translate-y-0.5">
              🚗 Plan een proefles — €60
            </Link>
            <a href="https://wa.me/31644626777" target="_blank" rel="noopener noreferrer"
              className="border border-white/15 hover:border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.05)' }}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────── */}
      <div className="border-y border-[#1a1a1a] bg-[#0f0f0f] py-6 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { nr: '500+', label: 'Leerlingen geslaagd' },
            { nr: '92%', label: 'Slagingspercentage' },
            { nr: '2', label: 'Locaties' },
            { nr: '€60', label: 'Per les · 60 min' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-coral-400 mb-1">{s.nr}</div>
              <div className="text-slate-500 text-xs uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 12 VOORDELEN GRID ─────────────────────────── */}
      <section id="waarom" className="py-20 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Dit krijg je bij ons.
            </h2>
            <p className="text-slate-500 max-w-md mx-auto">
              Geen beloften die we niet nakomen — alleen wat we echt bieden.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {voordelen.map((v, i) => (
              <div
                key={v.titel}
                className="group bg-[#111] border border-[#1a1a1a] hover:border-coral-500/40 rounded-2xl p-6 transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-coral-400 transition-colors">
                  {v.titel}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DE INSTRUCTEUR ────────────────────────────── */}
      <section id="instructeur" className="py-20 px-6 bg-[#0f0f0f] border-y border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">De instructeur</span>
            <h2 className="text-4xl font-extrabold text-white mb-5 leading-tight">
              Jij rijdt met<br />Farhan.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Farhan is een WRM-gecertificeerde rijinstructeur met jarenlange ervaring in Assen en Amersfoort. Hij is geduldig, duidelijk en motiveert leerlingen om het beste uit zichzelf te halen — ook als het even tegenzit.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Geen callcenter, geen onbekende instructeur. Jij hebt altijd direct contact met Farhan — voor vragen, planning of gewoon als je iets wil overleggen.
            </p>
            <div className="flex flex-wrap gap-3">
              {['WRM gecertificeerd', 'Nederlands & Engels', 'Assen & Amersfoort'].map(tag => (
                <span key={tag}
                  className="text-xs text-coral-400 border border-coral-500/25 bg-coral-500/8 px-3 py-1.5 rounded-full font-medium">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-8 space-y-6">
            {[
              { nr: '500+', label: 'Leerlingen begeleid', icon: '👨‍🎓' },
              { nr: '92%', label: 'Geslaagd op eerste poging', icon: '🏆' },
              { nr: '2', label: 'Locaties actief', icon: '📍' },
              { nr: '60 min', label: 'Per les — altijd vol', icon: '⏱️' },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-4">
                <span className="text-2xl w-10 shrink-0">{s.icon}</span>
                <div>
                  <div className="text-white font-extrabold text-xl leading-tight">{s.nr}</div>
                  <div className="text-slate-500 text-xs">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOE HET WERKT ─────────────────────────────── */}
      <section id="aanpak" className="py-20 px-6 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-white mb-3">Zo werkt het.</h2>
            <p className="text-slate-500">Van eerste contact tot rijbewijs — 5 stappen.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {stappen.map((s, i) => (
              <div key={s.nr} className="relative">
                {/* Connector */}
                {i < stappen.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%+8px)] w-4 h-0.5 bg-coral-500/30 z-10" />
                )}
                <div className="bg-[#111] border border-[#1a1a1a] hover:border-coral-500/40 rounded-2xl p-5 text-center transition-colors h-full">
                  <div className="text-coral-400 text-xs font-extrabold mb-3 tracking-widest">{s.nr}</div>
                  <h3 className="text-white font-bold mb-2">{s.titel}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIES ──────────────────────────────────── */}
      <section id="locaties" className="py-20 px-6 bg-[#0f0f0f] border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-3">Onze locaties.</h2>
            <p className="text-slate-500">Rijlessen in Assen én Amersfoort.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                stad: 'Assen',
                provincie: 'Drenthe',
                beschrijving: 'Rijlessen in en rondom Assen, inclusief alle CBR-examenwegen. Farhan kent de routes als zijn broekzak.',
                gebieden: ['Assen-Centrum', 'Kloosterveen', 'Peelo', 'Marsdijk', 'Rolde', 'Beilen'],
                href: '/rijles-assen',
              },
              {
                stad: 'Amersfoort',
                provincie: 'Utrecht',
                beschrijving: 'Rijlessen in Amersfoort en omgeving. Ruime kennis van de CBR-examenwegen in de regio.',
                gebieden: ['Amersfoort-Centrum', 'Vathorst', 'Nieuwland', 'Soest', 'Baarn', 'Leusden'],
                href: '/rijles-amersfoort',
              },
            ].map(loc => (
              <div key={loc.stad}
                className="bg-[#111] border border-coral-500/20 rounded-2xl p-7 hover:border-coral-500/50 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="text-white font-extrabold text-xl group-hover:text-coral-400 transition-colors">{loc.stad}</h3>
                    <p className="text-coral-400 text-xs font-medium">{loc.provincie}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{loc.beschrijving}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {loc.gebieden.map(g => (
                    <span key={g} className="text-xs text-slate-400 bg-[#1a1a1a] border border-[#2a2a2a] px-3 py-1 rounded-full">
                      {g}
                    </span>
                  ))}
                </div>
                <Link href={loc.href}
                  className="text-coral-400 text-sm font-bold hover:text-coral-300 transition-colors">
                  Meer over rijles {loc.stad} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section id="faq" className="py-20 px-6 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-3">Veelgestelde vragen.</h2>
            <p className="text-slate-500">Eerlijke antwoorden op de meest gestelde vragen.</p>
          </div>
          <div className="space-y-3">
            {[
              { v: 'Wat kost een proefles?', a: '€60 voor 60 minuten. Geen verplichtingen daarna — Farhan geeft je gewoon een eerlijk beeld van je niveau.' },
              { v: 'Welk pakket is het beste voor mij?', a: 'Dat hangt af van je niveau. Begin altijd met een proefles (€60). Daarna weet Farhan precies wat je nodig hebt en wat het kost.' },
              { v: 'Wat als ik zak voor het rijexamen?', a: 'Dan gaan we gewoon door. We bespreken wat er misging, oefenen de zwakke punten, en plannen het herexamen zo snel mogelijk. Bij het Intensief-pakket zit een tweede examen al inbegrepen.' },
              { v: 'Hoe snel kan ik starten?', a: 'Vaak al binnen een week — soms sneller. Stuur een WhatsApp naar +31 6 44626777 en we kijken direct naar beschikbaarheid.' },
              { v: 'Geven jullie les in het Engels?', a: 'Ja. Farhan geeft les in zowel het Nederlands als het Engels. Geef dit aan bij de aanmelding.' },
              { v: 'Moet ik eerst theorie hebben?', a: 'Nee. Je kunt theorie en rijlessen tegelijk doen. In het Compleet- en Intensief-pakket zit theoriebegeleiding inbegrepen.' },
            ].map(item => (
              <details key={item.v} className="group bg-[#111] border border-[#1a1a1a] rounded-2xl overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer px-6 py-4 text-white font-medium list-none hover:bg-[#161616] transition-colors text-sm md:text-base">
                  {item.v}
                  <span className="text-coral-400 text-xl group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-5 pt-3 text-slate-400 text-sm leading-relaxed border-t border-[#1a1a1a]">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#080808] border-t border-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full -bottom-20 left-1/2 -translate-x-1/2 opacity-8"
            style={{ background: 'radial-gradient(circle, #f97316, transparent)' }} />
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Klaar om te starten?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Begin met een proefles voor €60. Geen verplichtingen, wel een eerlijk beeld.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-xl shadow-coral-500/20 hover:-translate-y-0.5">
              🚗 Plan een proefles
            </Link>
            <Link href="/pakketten"
              className="border border-[#2a2a2a] hover:border-[#3a3a3a] bg-[#111] text-white font-bold px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5">
              Bekijk pakketten
            </Link>
          </div>
          <p className="text-slate-600 text-sm mt-5">
            Of bel/WhatsApp direct: <a href="tel:+31644626777" className="text-coral-400 hover:text-coral-300">+31 6 44626777</a>
          </p>
        </div>
      </section>

    </div>
  )
}
