import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Ons | Verkeersschool Farhan — Assen & Amersfoort',
  description: 'Waarom kiezen voor Verkeersschool Farhan? Persoonlijke rijlessen, 92% slagingspercentage, €58/les bij pakket. Assen & Amersfoort.',
}

const voordelen = [
  { icon: '🎯', titel: 'Altijd dezelfde instructeur',    tekst: 'Van dag 1 tot examen met Farhan. Geen wisselingen.' },
  { icon: '⏱️', titel: '60 minuten per les',            tekst: 'Elke les precies 60 min. Nooit ingekort.' },
  { icon: '💰', titel: '€58/les bij pakket',            tekst: '€2 goedkoper dan los. Transparant, geen toeslagen.' },
  { icon: '🏆', titel: '92% slagingspercentage',        tekst: 'Gemeten over honderden leerlingen — geen belofte.' },
  { icon: '🔄', titel: 'Na zak: gewoon door',           tekst: 'We bespreken wat misging en plannen direct herexamen.' },
  { icon: '🚗', titel: 'Moderne lesauto',               tekst: 'Goed onderhouden auto met dubbele bediening.' },
  { icon: '📚', titel: 'Theoriebegeleiding',            tekst: 'In Compleet & Intensief inbegrepen.' },
  { icon: '📍', titel: '2 locaties',                   tekst: 'Actief in Assen én Amersfoort.' },
  { icon: '⚡', titel: 'Snel starten',                 tekst: 'Vaak al binnen een week beginnen.' },
  { icon: '🌍', titel: '4 talen',                       tekst: 'Nederlands · Engels · Arabisch · Koerdisch — les in jouw taal.' },
  { icon: '📅', titel: 'Flexibele tijden',             tekst: 'Ochtend, middag én avond — ook zaterdag.' },
  { icon: '🛡️', titel: 'WRM gecertificeerd',          tekst: 'Professioneel gecertificeerde rijinstructeur.' },
]

const stappen = [
  { nr: '01', titel: 'Proefles',    tekst: '€60 · eerlijk beeld · geen verplichtingen' },
  { nr: '02', titel: 'Rijplan',     tekst: 'Samen bepalen hoeveel lessen je nodig hebt' },
  { nr: '03', titel: 'Rijlessen',   tekst: '60 min per les · jouw tempo · directe feedback' },
  { nr: '04', titel: 'TTT',         tekst: 'Proefexamen bij CBR · je weet waar je staat' },
  { nr: '05', titel: 'Geslaagd',    tekst: 'Volledig voorbereid · bij zak: direct door' },
]

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-[#080808]">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#111]">
        <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.3em] mb-5">Over ons</p>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[0.9] tracking-tight mb-6">
              Persoonlijk.<br />
              <span className="text-coral-400">Bewezen.</span><br />
              Transparant.
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-8">
              Verkeersschool Farhan in Assen en Amersfoort. Geen callcenter, geen wisselende instructeurs — gewoon Farhan, van proefles tot rijbewijs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/boeken"
                className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-coral-500/20 hover:-translate-y-0.5">
                🚗 Plan een proefles
              </Link>
              <a href="https://wa.me/31644626777" target="_blank" rel="noopener noreferrer"
                className="bg-[#111] hover:bg-[#161616] border border-[#222] text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5">
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { nr: '500+', label: 'Leerlingen geslaagd', sub: 'Assen & Amersfoort' },
              { nr: '92%',  label: 'Slagingspercentage',  sub: 'Gemeten resultaat' },
              { nr: '€58',  label: 'Per les bij pakket',  sub: '€2 korting t.o.v. los' },
              { nr: '2',    label: 'Locaties',            sub: 'Assen · Amersfoort' },
            ].map(s => (
              <div key={s.label} className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 hover:border-coral-500/30 transition-colors">
                <div className="text-4xl font-extrabold text-coral-400 mb-1 leading-none">{s.nr}</div>
                <div className="text-white font-semibold text-sm mb-0.5">{s.label}</div>
                <div className="text-slate-600 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOORDELEN ──────────────────────────────────────── */}
      <section id="waarom" className="py-20 border-b border-[#111]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Waarom Farhan</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Dit krijg je bij ons.
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-xs lg:text-right">
              Geen beloften die we niet nakomen — alleen wat we echt bieden.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {voordelen.map((v) => (
              <div key={v.titel}
                className="group bg-[#0f0f0f] border border-[#1a1a1a] hover:border-coral-500/30 rounded-2xl p-5 transition-all hover:-translate-y-0.5">
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1.5 group-hover:text-coral-400 transition-colors leading-tight">
                  {v.titel}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{v.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTRUCTEUR ───────────────────────────────────── */}
      <section id="instructeur" className="py-20 border-b border-[#111]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left — info */}
            <div className="lg:col-span-3">
              <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">De instructeur</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                Jij rijdt<br />met Farhan.
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-4 max-w-lg">
                Farhan is een WRM-gecertificeerde rijinstructeur actief in Assen en Amersfoort. Geduldig, direct en resultaatgericht — van proefles tot examen.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
                Geen callcenter. Geen tussenpersonen. Je hebt altijd direct contact met Farhan — voor vragen, planning of gewoon een kort overleg.
              </p>
              <div className="flex flex-wrap gap-2">
                {['WRM gecertificeerd', 'NL · EN · AR · KU', 'Assen & Amersfoort', 'Direct bereikbaar'].map(tag => (
                  <span key={tag}
                    className="text-xs text-coral-400 border border-coral-500/25 bg-coral-500/8 px-3 py-1.5 rounded-full font-medium">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — achievement cards */}
            <div className="lg:col-span-2 grid grid-cols-1 gap-3">
              {[
                { icon: '👨‍🎓', nr: '500+', label: 'Leerlingen begeleid' },
                { icon: '🏆', nr: '92%',  label: 'Slaagt op eerste poging' },
                { icon: '📍', nr: '2',    label: 'Actieve locaties' },
                { icon: '⏱️', nr: '60 min', label: 'Per les — altijd volledig' },
              ].map(s => (
                <div key={s.label} className="flex items-center gap-4 bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl px-5 py-4">
                  <span className="text-2xl shrink-0">{s.icon}</span>
                  <div>
                    <div className="text-coral-400 font-extrabold text-xl leading-none">{s.nr}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── AANPAK ─────────────────────────────────────────── */}
      <section id="aanpak" className="py-20 border-b border-[#111]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Onze aanpak</p>
            <h2 className="text-4xl font-extrabold text-white">Van proefles tot rijbewijs.</h2>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:grid grid-cols-5 gap-4">
            {stappen.map((s, i) => (
              <div key={s.nr} className="relative">
                {i < stappen.length - 1 && (
                  <div className="absolute top-6 left-full w-4 h-px bg-coral-500/30 z-10" />
                )}
                <div className="bg-[#0f0f0f] border border-[#1a1a1a] hover:border-coral-500/30 rounded-2xl p-5 transition-colors h-full">
                  <div className="text-coral-400 text-xs font-extrabold mb-3 tracking-widest">{s.nr}</div>
                  <h3 className="text-white font-bold text-base mb-2">{s.titel}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="lg:hidden space-y-3">
            {stappen.map(s => (
              <div key={s.nr} className="flex items-start gap-4 bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-5">
                <span className="text-coral-400 text-xs font-extrabold shrink-0 mt-0.5">{s.nr}</span>
                <div>
                  <h3 className="text-white font-bold mb-1">{s.titel}</h3>
                  <p className="text-slate-500 text-xs">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIES ──────────────────────────────────────── */}
      <section id="locaties" className="py-20 border-b border-[#111]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Locaties</p>
            <h2 className="text-4xl font-extrabold text-white">Actief in 2 steden.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                stad: 'Assen', provincie: 'Drenthe',
                info: 'Rijlessen in Assen en omgeving, inclusief alle CBR-examenwegen. Farhan kent de routes als zijn broekzak.',
                gebieden: ['Assen-Centrum', 'Kloosterveen', 'Peelo', 'Marsdijk', 'Rolde', 'Beilen'],
                href: '/rijles-assen',
              },
              {
                stad: 'Amersfoort', provincie: 'Utrecht',
                info: 'Rijlessen in Amersfoort en regio Utrecht. Ruime kennis van de CBR-examenwegen rondom Amersfoort.',
                gebieden: ['Amersfoort-Centrum', 'Vathorst', 'Nieuwland', 'Soest', 'Baarn', 'Leusden'],
                href: '/rijles-amersfoort',
              },
            ].map(loc => (
              <div key={loc.stad}
                className="group bg-[#0f0f0f] border border-[#1a1a1a] hover:border-coral-500/30 rounded-2xl p-8 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-extrabold text-2xl group-hover:text-coral-400 transition-colors">
                      📍 {loc.stad}
                    </h3>
                    <p className="text-coral-400 text-sm font-medium">{loc.provincie}</p>
                  </div>
                  <Link href={loc.href}
                    className="text-xs text-coral-400 hover:text-coral-300 font-bold border border-coral-500/25 px-3 py-1.5 rounded-lg transition-colors">
                    Meer info →
                  </Link>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{loc.info}</p>
                <div className="flex flex-wrap gap-2">
                  {loc.gebieden.map(g => (
                    <span key={g} className="text-xs text-slate-500 bg-[#141414] border border-[#1e1e1e] px-3 py-1 rounded-full">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section id="faq" className="py-20 border-b border-[#111]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: title */}
            <div className="lg:col-span-1">
              <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">FAQ</p>
              <h2 className="text-3xl font-extrabold text-white mb-4">Veelgestelde vragen.</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Eerlijke antwoorden — geen verkoopverhaal.
              </p>
              <a href="https://wa.me/31644626777" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm text-coral-400 hover:text-coral-300 transition-colors font-medium">
                Vraag direct via WhatsApp →
              </a>
            </div>

            {/* Right: accordion */}
            <div className="lg:col-span-2 space-y-3">
              {[
                { v: 'Wat kost een proefles?', a: '€60 voor 60 minuten. Geen verplichtingen daarna.' },
                { v: 'Welk pakket past bij mij?', a: 'Begin altijd met een proefles. Farhan beoordeelt je niveau en adviseert het juiste pakket — zonder druk.' },
                { v: 'Wat als ik zak?', a: 'Dan gaan we direct door. We bespreken wat er misging, oefenen de zwakke punten en plannen het herexamen zo snel mogelijk.' },
                { v: 'Hoe snel kan ik starten?', a: 'Vaak al binnen een week. Stuur een WhatsApp en we kijken direct naar beschikbaarheid.' },
                { v: 'In welke talen geven jullie les?', a: 'Farhan geeft les in het Nederlands, Engels, Arabisch en Koerdisch. Geef je voorkeur aan bij de aanmelding — hij past zich aan.' },
                { v: 'Wat zit er in de pakketten?', a: 'Rijlessen, theoriebegeleiding, TTT (proefexamen) en het rijexamen — allemaal inbegrepen. Geen verborgen kosten.' },
              ].map(item => (
                <details key={item.v}
                  className="group bg-[#0f0f0f] border border-[#1a1a1a] hover:border-[#222] rounded-2xl overflow-hidden transition-colors">
                  <summary className="flex justify-between items-center cursor-pointer px-6 py-4 text-white font-medium list-none hover:bg-[#111] transition-colors text-sm">
                    {item.v}
                    <span className="text-coral-400 text-xl group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4">+</span>
                  </summary>
                  <div className="px-6 pb-5 pt-2 text-slate-400 text-sm leading-relaxed border-t border-[#141414]">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-6"
            style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 70%)' }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Klaar om te starten?
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Begin met een vrijblijvende proefles. €60 — geen verplichtingen daarna.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/boeken"
              className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-xl shadow-coral-500/20 hover:-translate-y-0.5">
              🚗 Plan een proefles
            </Link>
            <Link href="/pakketten"
              className="bg-[#111] hover:bg-[#161616] border border-[#222] text-white font-bold px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5">
              Bekijk pakketten
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
