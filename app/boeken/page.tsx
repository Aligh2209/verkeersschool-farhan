'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

const CalComEmbed = dynamic(() => import('../components/CalComEmbed'), { ssr: false })

// ════════════════════════════════════════════════════════════
//  STAP 1: Ga naar cal.com → gratis account aanmaken
//  STAP 2: Maak event type "Proefles" (60 min, prijs €60)
//  STAP 3: Koppel je Stripe account (voor iDEAL betaling)
//  STAP 4: Vervang "verkeersschoolfarhan/proefles" hieronder
//          met jouw eigen Cal.com gebruikersnaam/event-naam
// ════════════════════════════════════════════════════════════
const CAL_LINK = 'verkeersschoolfarhan/proefles'

export default function BoekenPage() {
  return (
    <div className="min-h-screen bg-[#080808]">

      {/* Hero */}
      <section className="py-14 px-6 bg-[#0f0f0f] border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-coral-500/10 text-coral-400 text-xs font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full border border-coral-500/20 mb-5">
            Online boeken
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Boek & betaal je proefles direct.
          </h1>
          <p className="text-slate-400 text-lg max-w-lg mx-auto mb-6">
            Kies een datum, betaal €60 via iDEAL of creditcard — klaar. Farhan bevestigt automatisch.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><span className="text-coral-400">✓</span> Betaal veilig via iDEAL</span>
            <span className="flex items-center gap-1.5"><span className="text-coral-400">✓</span> Vrijblijvend — geen vervolg verplicht</span>
            <span className="flex items-center gap-1.5"><span className="text-coral-400">✓</span> Assen & Amersfoort</span>
          </div>
        </div>
      </section>

      {/* Cal.com + sidebar */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Cal.com embed */}
          <div className="lg:col-span-2">
            <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-[#1a1a1a] flex items-center justify-between">
                <div>
                  <p className="text-white font-bold">Proefles inplannen</p>
                  <p className="text-slate-500 text-xs">Kies datum → betaal → bevestigd</p>
                </div>
                <div className="text-right">
                  <p className="text-coral-400 font-extrabold text-lg leading-none">€60</p>
                  <p className="text-slate-600 text-xs">60 minuten</p>
                </div>
              </div>
              <CalComEmbed calLink={CAL_LINK} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">

            {/* How it works */}
            <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4 text-sm">Hoe werkt het?</h3>
              <ol className="space-y-3 text-sm text-slate-400">
                {[
                  { nr: '1', text: 'Kies een beschikbare datum en tijd' },
                  { nr: '2', text: 'Vul je naam en e-mailadres in' },
                  { nr: '3', text: 'Betaal €60 via iDEAL of creditcard' },
                  { nr: '4', text: 'Je ontvangt direct een bevestiging' },
                  { nr: '5', text: 'Farhan staat klaar op de afgesproken tijd' },
                ].map(step => (
                  <li key={step.nr} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-coral-500/20 text-coral-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {step.nr}
                    </span>
                    <span>{step.text}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Betaalmethoden */}
            <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-5">
              <p className="text-white font-semibold mb-3 text-sm">Betaalmethoden</p>
              <div className="flex flex-wrap gap-2">
                {['iDEAL', 'Creditcard', 'Maestro'].map(m => (
                  <span key={m} className="text-xs text-slate-300 bg-[#1a1a1a] border border-[#2a2a2a] px-3 py-1.5 rounded-lg font-medium">
                    {m}
                  </span>
                ))}
              </div>
              <p className="text-slate-600 text-xs mt-3">Betaling verloopt veilig via Stripe</p>
            </div>

            {/* Liever bellen? */}
            <div className="bg-coral-500/8 border border-coral-500/20 rounded-2xl p-5">
              <p className="text-white font-semibold mb-1 text-sm">Liever bellen of WhatsAppen?</p>
              <p className="text-slate-500 text-xs mb-4">Dat kan ook — altijd welkom.</p>
              <div className="space-y-2">
                <a href="https://wa.me/31644626777?text=Hallo%2C%20ik%20wil%20een%20proefles%20plannen"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-700/20 hover:bg-green-700/30 border border-green-700/40 text-green-300 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors">
                  💬 WhatsApp sturen
                </a>
                <a href="tel:+31644626777"
                  className="flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors">
                  📞 +31 6 44626777
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="pb-10 text-center">
        <Link href="/" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">
          ← Terug naar home
        </Link>
      </div>

    </div>
  )
}
