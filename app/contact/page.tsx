'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const SPOTS = { assen: 2, amersfoort: 1 }
const TOTAL_SPOTS = 5

function SpotBar({ used, total }: { used: number; total: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full ${i < used ? 'bg-coral-500' : 'bg-[#2a2a2a]'}`}
        />
      ))}
    </div>
  )
}

function Countdown() {
  const [days, setDays] = useState(0)

  useEffect(() => {
    const now = new Date()
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1)
    const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    setDays(diff)
  }, [])

  return (
    <span className="text-coral-400 font-bold">{days} dagen</span>
  )
}

export default function ContactPage() {
  const [verstuurd, setVerstuurd] = useState(false)
  const [form, setForm] = useState({
    naam: '', email: '', telefoon: '', locatie: '', pakket: '', bericht: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setVerstuurd(true)
  }

  const selectedSpots = form.locatie ? SPOTS[form.locatie as keyof typeof SPOTS] : null
  const usedSpots = form.locatie ? (TOTAL_SPOTS - SPOTS[form.locatie as keyof typeof SPOTS]) : 3

  return (
    <div className="min-h-screen bg-[#080808]">

      {/* ── FOMO top banner ─────────────────────────── */}
      <motion.div
        className="bg-coral-500 py-3 px-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-medium text-white text-center">
          <span className="flex items-center gap-2">
            🔥 <strong>Juni sluit bijna</strong> — nog <Countdown /> te gaan
          </span>
          <span className="hidden sm:block opacity-50">|</span>
          <span>📍 Assen: nog <strong>2 plekken</strong></span>
          <span className="hidden sm:block opacity-50">|</span>
          <span>📍 Amersfoort: nog <strong>1 plek</strong></span>
        </div>
      </motion.div>

      <div className="py-14 px-4">
        <div className="max-w-5xl mx-auto">

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-coral-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Schrijf je in</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Claim jouw plek.
            </h1>
            <p className="text-slate-400 max-w-md mx-auto">
              Beperkt aantal leerlingen per maand — zo geeft Farhan iedereen de aandacht die ze verdienen.
            </p>
          </motion.div>

          {/* ── 3 kanalen ──────────────────────────────── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="https://wa.me/31644626777?text=Hallo,%20ik%20wil%20een%20plek%20claimen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-colors group border border-green-700/40 bg-green-700/10 hover:bg-green-700/20"
            >
              <span className="text-3xl">💬</span>
              <div>
                <p className="text-white font-bold">WhatsApp</p>
                <p className="text-slate-400 text-xs mt-1">Snelste reactie · vaak binnen het uur</p>
              </div>
              <span className="text-green-400 text-xs mt-auto">Stuur bericht →</span>
            </a>

            <a
              href="tel:+31644626777"
              className="flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-colors group border border-coral-500/30 bg-coral-500/8 hover:bg-coral-500/15"
            >
              <span className="text-3xl">📞</span>
              <div>
                <p className="text-white font-bold">Bel direct</p>
                <p className="text-slate-400 text-xs mt-1">Ma–Za 08:00–20:00</p>
              </div>
              <span className="text-coral-400 text-xs mt-auto">+31 6 44 62 67 77</span>
            </a>

            <a
              href="#formulier"
              className="flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-colors group border border-[#222] bg-[#111] hover:bg-[#161616]"
            >
              <span className="text-3xl">📋</span>
              <div>
                <p className="text-white font-bold">Formulier</p>
                <p className="text-slate-400 text-xs mt-1">Wij bellen jou terug</p>
              </div>
              <span className="text-slate-500 text-xs mt-auto group-hover:text-white transition-colors">Scroll omlaag ↓</span>
            </a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10" id="formulier">

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-4">

              {/* Availability card */}
              <motion.div
                className="rounded-2xl p-5 border border-coral-500/30 bg-coral-500/5"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-coral-400 text-xs font-bold uppercase tracking-wider mb-3">Beschikbaarheid juni</p>
                <div className="space-y-3">
                  {[
                    { stad: 'Assen', spots: SPOTS.assen, total: TOTAL_SPOTS },
                    { stad: 'Amersfoort', spots: SPOTS.amersfoort, total: TOTAL_SPOTS },
                  ].map(loc => (
                    <div key={loc.stad}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-white text-sm font-medium">📍 {loc.stad}</span>
                        <span className={`text-xs font-bold ${loc.spots <= 1 ? 'text-red-400' : 'text-coral-400'}`}>
                          {loc.spots === 1 ? '⚠️ Laatste plek!' : `Nog ${loc.spots} plekken`}
                        </span>
                      </div>
                      <SpotBar used={loc.total - loc.spots} total={loc.total} />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Trust */}
              <motion.div
                className="rounded-2xl p-5 border border-[#1a1a1a] bg-[#111]"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Waarom nu?</p>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {[
                    '✓ Proefles zonder verplichtingen — €60',
                    '✓ Wij reageren dezelfde dag',
                    '✓ 92% van onze leerlingen slaagt',
                    '✓ Na zak gaan we gewoon door',
                    '✓ Transparante prijs vanaf dag 1',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-coral-400 shrink-0">{item.slice(0, 1)}</span>
                      <span>{item.slice(2)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Countdown */}
              <motion.div
                className="rounded-2xl p-4 border border-[#222] bg-[#0f0f0f] text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-slate-500 text-xs mb-1">Huidige prijzen geldig nog</p>
                <p className="text-white font-extrabold text-xl"><Countdown /></p>
                <p className="text-slate-600 text-xs mt-1">Schrijf je in vóór het einde van juni</p>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {verstuurd ? (
                  <motion.div
                    className="rounded-2xl p-10 text-center border border-green-700/40 bg-green-900/10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="text-2xl font-extrabold text-white mb-2">Plek gereserveerd!</h3>
                    <p className="text-green-300 mb-3">
                      Goed gedaan, <strong>{form.naam}</strong>. Wij nemen vandaag nog contact met je op.
                    </p>
                    <p className="text-slate-500 text-sm">
                      Sneller? Stuur een{' '}
                      <a href="https://wa.me/31644626777" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">
                        WhatsApp-bericht
                      </a>.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="rounded-2xl p-7 border border-[#1a1a1a] bg-[#111]"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    {/* Form header with urgency */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-white font-extrabold text-xl">Inschrijfformulier</h2>
                        <p className="text-slate-500 text-sm mt-0.5">Wij bellen jou terug om alles te bespreken.</p>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <div className="text-[10px] text-coral-400 font-bold uppercase tracking-wider">Nog beschikbaar</div>
                        <div className="text-white font-extrabold text-lg leading-tight">
                          {selectedSpots !== null ? selectedSpots : '3'} plekken
                        </div>
                      </div>
                    </div>

                    {/* Spot bar in form */}
                    <div className="mb-6">
                      <SpotBar
                        used={selectedSpots !== null ? TOTAL_SPOTS - selectedSpots : usedSpots}
                        total={TOTAL_SPOTS}
                      />
                      <p className="text-slate-600 text-[11px] mt-1.5">
                        {selectedSpots === 1
                          ? '⚠️ Laatste plek in dit gebied — schrijf je nu in'
                          : selectedSpots !== null
                          ? `Nog ${selectedSpots} van de ${TOTAL_SPOTS} plekken vrij in ${form.locatie.charAt(0).toUpperCase() + form.locatie.slice(1)}`
                          : `${usedSpots} van de ${TOTAL_SPOTS} plekken zijn al bezet`}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-400 text-xs mb-1.5 font-medium">Volledige naam *</label>
                          <input name="naam" required value={form.naam} onChange={handleChange}
                            placeholder="Jouw naam"
                            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-coral-500/50 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm" />
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs mb-1.5 font-medium">Telefoonnummer *</label>
                          <input name="telefoon" required type="tel" value={form.telefoon} onChange={handleChange}
                            placeholder="+31 6 ..."
                            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-coral-500/50 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-400 text-xs mb-1.5 font-medium">E-mailadres *</label>
                        <input name="email" required type="email" value={form.email} onChange={handleChange}
                          placeholder="jouw@email.nl"
                          className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-coral-500/50 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-400 text-xs mb-1.5 font-medium">Locatie *</label>
                          <select name="locatie" required value={form.locatie} onChange={handleChange}
                            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-coral-500/50 rounded-xl px-4 py-2.5 text-white focus:outline-none transition-colors text-sm">
                            <option value="">Kies locatie</option>
                            <option value="assen">Assen (nog 2 plekken)</option>
                            <option value="amersfoort">Amersfoort (nog 1 plek ⚠️)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs mb-1.5 font-medium">Pakket</label>
                          <select name="pakket" value={form.pakket} onChange={handleChange}
                            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-coral-500/50 rounded-xl px-4 py-2.5 text-white focus:outline-none transition-colors text-sm">
                            <option value="">Eerst proefles</option>
                            <option value="proefles">Proefles — €60</option>
                            <option value="compleet">Compleet — €1.199 ⭐</option>
                            <option value="intensief">Intensief — €1.599</option>
                            <option value="los">Losse lessen — €60/les</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-400 text-xs mb-1.5 font-medium">Bericht (optioneel)</label>
                        <textarea name="bericht" rows={3} value={form.bericht} onChange={handleChange}
                          placeholder="Bijv. al eerder gereden, gewenste lestijden..."
                          className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-coral-500/50 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none transition-colors resize-none text-sm" />
                      </div>
                    </div>

                    {/* FOMO CTA block */}
                    <div className="mt-6 space-y-3">
                      <motion.button
                        type="submit"
                        className="w-full bg-coral-500 hover:bg-coral-600 text-white font-extrabold py-4 rounded-xl transition-all text-base shadow-xl shadow-coral-500/20 hover:-translate-y-0.5"
                        whileTap={{ scale: 0.98 }}
                      >
                        🚗 Claim mijn plek →
                      </motion.button>

                      {/* Urgency strip */}
                      <div className="flex items-center justify-center gap-4 text-[11px] text-slate-600">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                          Wij reageren vandaag
                        </span>
                        <span>·</span>
                        <span>Geen verplichtingen</span>
                        <span>·</span>
                        <span className="text-coral-500 font-medium">
                          {selectedSpots !== null ? `Nog ${selectedSpots} plekken` : 'Snel vol'}
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-[#1a1a1a]" />
                        <span className="text-slate-600 text-xs">of direct via</span>
                        <div className="h-px flex-1 bg-[#1a1a1a]" />
                      </div>

                      <a
                        href="https://wa.me/31644626777?text=Hallo,%20ik%20wil%20een%20plek%20claimen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-green-700/20 hover:bg-green-700/30 border border-green-700/40 text-green-300 font-bold py-3 rounded-xl transition-colors text-sm"
                      >
                        💬 WhatsApp — snelste reactie
                      </a>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
