import Link from 'next/link'

type Review = { naam: string; tekst: string; sterren: number }

type Props = {
  stad: string
  provincie: string
  slug: string
  beschrijving: string
  buurten: string[]
  reviews: Review[]
  faq: { vraag: string; antwoord: string }[]
}

export default function StadPagina({ stad, provincie, slug, beschrijving, buurten, reviews, faq }: Props) {
  const waPhone = `https://wa.me/31644626777?text=Hallo,%20ik%20zoek%20rijles%20in%20${encodeURIComponent(stad)}`

  return (
    <div className="min-h-screen bg-navy-950">

      {/* Hero */}
      <section className="relative bg-navy-900 py-20 px-4 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-coral-500 opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-5">
            <span className="bg-navy-700 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-navy-500">
              📍 {stad}, {provincie}
            </span>
            <span className="bg-coral-500/10 text-coral-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-coral-500/30">
              ✅ 92% slagingspercentage
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Rijles in {stad}?{' '}
            <span className="text-coral-400">Verkeersschool Farhan</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">{beschrijving}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-coral-500/20"
            >
              📅 Direct inschrijven
            </Link>
            <a
              href={waPhone}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+31644626777"
              className="bg-navy-700 hover:bg-navy-600 text-white font-bold px-7 py-3.5 rounded-xl transition-colors border border-navy-500"
            >
              📞 Bellen
            </a>
          </div>
        </div>
      </section>

      {/* Bedieningsgebied */}
      <section className="py-12 px-4 bg-navy-800 border-b border-navy-600">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Rijlessen in en rondom {stad}</h2>
          <p className="text-slate-400 mb-5">
            Wij geven rijlessen in {stad} en de omliggende wijken en dorpen. Je rijexamen wordt afgelegd bij het CBR in de regio.
          </p>
          <div className="flex flex-wrap gap-2">
            {buurten.map((b) => (
              <span key={b} className="bg-navy-700 border border-navy-500 text-slate-300 text-sm px-3 py-1.5 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-14 px-4 bg-navy-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Wat leerlingen uit {stad} zeggen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reviews.map((r) => (
              <div key={r.naam} className="bg-navy-800 border border-navy-600 rounded-2xl p-5">
                <div className="text-amber-400 text-sm mb-2">{'★'.repeat(r.sterren)}</div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">&ldquo;{r.tekst}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="bg-coral-500 rounded-full w-8 h-8 flex items-center justify-center text-white text-xs font-bold">
                    {r.naam[0]}
                  </div>
                  <p className="text-white text-xs font-semibold">{r.naam}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prijzen snippet */}
      <section className="py-12 px-4 bg-navy-800 border-y border-navy-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Transparante prijzen in {stad}</h2>
          <p className="text-slate-400 mb-6">Geen verborgen kosten. Altijd vooraf duidelijk.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { naam: 'Starter', prijs: '€ 35 / les' },
              { naam: 'Compleet', prijs: '€ 1.199', aanbevolen: true },
              { naam: 'Intensief', prijs: '€ 1.599' },
            ].map((p) => (
              <div key={p.naam} className={`rounded-2xl px-6 py-5 border ${p.aanbevolen ? 'bg-coral-500/15 border-coral-500/50' : 'bg-navy-700 border-navy-500'}`}>
                {p.aanbevolen && <span className="text-xs bg-coral-500 text-white font-bold px-2 py-0.5 rounded-full mb-2 inline-block">Aanbevolen</span>}
                <p className="text-white font-bold">{p.naam}</p>
                <p className={`text-2xl font-extrabold ${p.aanbevolen ? 'text-coral-400' : 'text-white'}`}>{p.prijs}</p>
              </div>
            ))}
          </div>
          <Link href="/pakketten" className="text-coral-400 hover:text-coral-300 font-medium underline underline-offset-4">
            Alle pakketten bekijken →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-navy-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Veelgestelde vragen — rijles {stad}</h2>
          <div className="space-y-3">
            {faq.map((item) => (
              <details key={item.vraag} className="group bg-navy-800 border border-navy-600 rounded-2xl overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer px-6 py-4 text-white font-medium list-none hover:bg-navy-700 transition-colors">
                  {item.vraag}
                  <span className="text-coral-400 text-xl group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-navy-600 pt-4">
                  {item.antwoord}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Andere locatie */}
      <section className="py-10 px-4 bg-navy-800 border-t border-navy-600">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            Woon je niet in {stad}? Wij zijn ook actief in{' '}
            <Link
              href={slug === 'assen' ? '/rijles-amersfoort' : '/rijles-assen'}
              className="text-coral-400 hover:text-coral-300 underline"
            >
              {slug === 'assen' ? 'Amersfoort' : 'Assen'}
            </Link>.
          </p>
        </div>
      </section>

    </div>
  )
}
