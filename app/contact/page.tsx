'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [verstuurd, setVerstuurd] = useState(false)
  const [form, setForm] = useState({
    naam: '',
    email: '',
    telefoon: '',
    locatie: '',
    pakket: '',
    bericht: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setVerstuurd(true)
  }

  return (
    <div className="min-h-screen bg-navy-950 py-16 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-coral-400 font-semibold text-sm uppercase tracking-wider mb-2">Neem contact op</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact &amp; Inschrijven
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Kies de manier die jou het beste uitkomt. We reageren binnen 1 werkdag — WhatsApp vaak al binnen het uur.
          </p>
        </div>

        {/* ── DRIE CONVERSIEKANALEN ─────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <a
            href="https://wa.me/31612345678?text=Hallo,%20ik%20wil%20meer%20informatie%20over%20rijlessen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 bg-green-700/20 hover:bg-green-700/30 border border-green-700/50 rounded-2xl p-6 text-center transition-colors group"
          >
            <span className="text-4xl">💬</span>
            <div>
              <p className="text-white font-bold text-lg">WhatsApp</p>
              <p className="text-slate-400 text-sm">Snelste reactie — vaak binnen het uur</p>
            </div>
            <span className="mt-auto text-green-400 text-sm group-hover:text-green-300 transition-colors">Open WhatsApp →</span>
          </a>

          <a
            href="tel:+31612345678"
            className="flex flex-col items-center gap-3 bg-coral-500/10 hover:bg-coral-500/15 border border-coral-500/30 rounded-2xl p-6 text-center transition-colors group"
          >
            <span className="text-4xl">📞</span>
            <div>
              <p className="text-white font-bold text-lg">Direct bellen</p>
              <p className="text-slate-400 text-sm">Ma – Za: 08:00 – 20:00</p>
            </div>
            <span className="mt-auto text-coral-400 text-sm group-hover:text-coral-300 transition-colors">+31 6 12 34 56 78</span>
          </a>

          <a
            href="#formulier"
            className="flex flex-col items-center gap-3 bg-navy-800 hover:bg-navy-700 border border-navy-600 rounded-2xl p-6 text-center transition-colors group"
          >
            <span className="text-4xl">📋</span>
            <div>
              <p className="text-white font-bold text-lg">Online formulier</p>
              <p className="text-slate-400 text-sm">Wij bellen jou terug</p>
            </div>
            <span className="mt-auto text-slate-400 text-sm group-hover:text-white transition-colors">Scroll naar formulier ↓</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10" id="formulier">

          {/* Contactinfo */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-navy-800 border border-navy-600 rounded-2xl p-6">
              <h2 className="text-white font-bold text-lg mb-4">Contactgegevens</h2>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-coral-400 text-lg mt-0.5">📞</span>
                  <div>
                    <p className="text-white font-medium">Telefoon</p>
                    <a href="tel:+31612345678" className="hover:text-coral-400 transition-colors">+31 6 12 34 56 78</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-lg mt-0.5">💬</span>
                  <div>
                    <p className="text-white font-medium">WhatsApp</p>
                    <a
                      href="https://wa.me/31612345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition-colors"
                    >
                      Stuur een bericht
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral-400 text-lg mt-0.5">✉️</span>
                  <div>
                    <p className="text-white font-medium">E-mail</p>
                    <a href="mailto:info@verkeersschoolfarhan.nl" className="hover:text-coral-400 transition-colors break-all">
                      info@verkeersschoolfarhan.nl
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral-400 text-lg mt-0.5">⏰</span>
                  <div>
                    <p className="text-white font-medium">Bereikbaar</p>
                    <p>Ma – Za: 08:00 – 20:00</p>
                    <p>Zondag: op afspraak</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-navy-800 border border-navy-600 rounded-2xl p-6">
              <h2 className="text-white font-bold text-lg mb-4">Locaties</h2>
              <div className="space-y-4 text-sm">
                {[
                  { stad: 'Assen', sub: 'Drenthe, Nederland', href: '/rijles-assen' },
                  { stad: 'Amersfoort', sub: 'Utrecht, Nederland', href: '/rijles-amersfoort' },
                ].map((loc) => (
                  <a key={loc.stad} href={loc.href} className="flex items-start gap-3 group">
                    <span className="text-coral-400 text-lg mt-0.5">📍</span>
                    <div>
                      <p className="text-white font-medium group-hover:text-coral-400 transition-colors">{loc.stad}</p>
                      <p className="text-slate-400">{loc.sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-coral-500/10 border border-coral-500/30 rounded-2xl p-5 text-center">
              <p className="text-white font-semibold mb-1">Liever teruggebeld worden?</p>
              <p className="text-slate-400 text-sm mb-4">Vul je nummer in en wij bellen jou.</p>
              <a
                href="tel:+31612345678"
                className="block bg-coral-500 hover:bg-coral-600 text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
              >
                📞 +31 6 12 34 56 78
              </a>
            </div>
          </div>

          {/* Formulier */}
          <div className="lg:col-span-3">
            {verstuurd ? (
              <div className="bg-green-900/20 border border-green-700/50 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">Aanmelding ontvangen!</h3>
                <p className="text-green-300 mb-4">
                  Bedankt, <strong>{form.naam}</strong>. Wij nemen zo snel mogelijk contact met je op.
                </p>
                <p className="text-slate-400 text-sm">
                  Sneller antwoord? Stuur ook even een{' '}
                  <a
                    href="https://wa.me/31612345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 underline"
                  >
                    WhatsApp-berichtje
                  </a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-navy-800 border border-navy-600 rounded-2xl p-8 space-y-5"
              >
                <h2 className="text-white font-bold text-xl mb-1">Inschrijfformulier</h2>
                <p className="text-slate-500 text-sm">Wij bellen jou terug om alles te bespreken.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-sm mb-1.5">Volledige naam *</label>
                    <input
                      name="naam"
                      required
                      value={form.naam}
                      onChange={handleChange}
                      placeholder="Jouw naam"
                      className="w-full bg-navy-700 border border-navy-500 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-coral-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-1.5">Telefoonnummer *</label>
                    <input
                      name="telefoon"
                      required
                      type="tel"
                      value={form.telefoon}
                      onChange={handleChange}
                      placeholder="+31 6 ..."
                      className="w-full bg-navy-700 border border-navy-500 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-coral-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-1.5">E-mailadres *</label>
                  <input
                    name="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jouw@email.nl"
                    className="w-full bg-navy-700 border border-navy-500 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-coral-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-sm mb-1.5">Locatie *</label>
                    <select
                      name="locatie"
                      required
                      value={form.locatie}
                      onChange={handleChange}
                      className="w-full bg-navy-700 border border-navy-500 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-coral-500 transition-colors"
                    >
                      <option value="">Kies een locatie</option>
                      <option value="assen">Assen</option>
                      <option value="amersfoort">Amersfoort</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-1.5">Pakket interesse</label>
                    <select
                      name="pakket"
                      value={form.pakket}
                      onChange={handleChange}
                      className="w-full bg-navy-700 border border-navy-500 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-coral-500 transition-colors"
                    >
                      <option value="">Geen voorkeur</option>
                      <option value="starter">Starter</option>
                      <option value="compleet">Compleet (aanbevolen)</option>
                      <option value="intensief">Intensief</option>
                      <option value="losse-les">Losse lessen</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-1.5">Bericht (optioneel)</label>
                  <textarea
                    name="bericht"
                    rows={3}
                    value={form.bericht}
                    onChange={handleChange}
                    placeholder="Bijv. al eerder gereden, vragen over planning..."
                    className="w-full bg-navy-700 border border-navy-500 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-coral-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-coral-500 hover:bg-coral-600 text-white font-bold py-3.5 rounded-xl transition-colors text-lg shadow-lg shadow-coral-500/20"
                >
                  Verstuur — wij bellen jou terug
                </button>

                <div className="flex items-center gap-3 pt-1">
                  <div className="h-px flex-1 bg-navy-600" />
                  <span className="text-slate-600 text-xs">of neem direct contact op</span>
                  <div className="h-px flex-1 bg-navy-600" />
                </div>

                <a
                  href="https://wa.me/31612345678?text=Hallo,%20ik%20wil%20meer%20informatie%20over%20rijlessen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-700/30 hover:bg-green-700/50 border border-green-700/50 text-green-300 font-bold py-3 rounded-xl transition-colors"
                >
                  💬 Stuur een WhatsApp-bericht
                </a>

                <p className="text-slate-600 text-xs text-center">
                  Geen spam. Wij gebruiken je gegevens alleen om contact op te nemen.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
