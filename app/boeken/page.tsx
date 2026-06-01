'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const TIJDEN = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

function getMinDate() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
}

function StepDot({ nr, active, done }: { nr: number; active: boolean; done: boolean }) {
  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
      done ? 'bg-coral-500 text-white' : active ? 'bg-coral-500 text-white ring-4 ring-coral-500/20' : 'bg-[#1a1a1a] text-slate-600 border border-[#2a2a2a]'
    }`}>
      {done ? '✓' : nr}
    </div>
  )
}

export default function BoekenPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [locatie, setLocatie] = useState('')
  const [datum, setDatum] = useState('')
  const [tijd, setTijd] = useState('')
  const [naam, setNaam] = useState('')
  const [email, setEmail] = useState('')
  const [telefoon, setTelefoon] = useState('')
  const [opmerking, setOpmerking] = useState('')

  async function handleBetaal() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ naam, email, telefoon, locatie, datum, tijd, opmerking }),
      })
      const data = await res.json()
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl
      } else {
        setError(data.error || 'Er ging iets mis. Probeer het opnieuw of bel ons.')
      }
    } catch {
      setError('Verbindingsfout. Controleer je internet en probeer opnieuw.')
    } finally {
      setLoading(false)
    }
  }

  const step1Valid = locatie && datum && tijd
  const step2Valid = naam && email && telefoon

  return (
    <div className="min-h-screen bg-[#080808] py-10 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="text-slate-600 hover:text-slate-400 text-xs transition-colors mb-4 block">
            ← Terug naar home
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Proefles boeken
          </h1>
          <p className="text-slate-500 text-sm">Betaal direct €60 via iDEAL — geen verplichtingen daarna.</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {[1, 2, 3].map((n, i) => (
            <div key={n} className="flex items-center">
              <StepDot nr={n} active={step === n} done={step > n} />
              {i < 2 && (
                <div className={`w-16 h-0.5 mx-1 transition-colors ${step > n ? 'bg-coral-500' : 'bg-[#1a1a1a]'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1"
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.35 }}>

              <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-7 space-y-7">
                <div>
                  <p className="text-coral-400 text-xs font-bold uppercase tracking-widest mb-1">Stap 1 van 3</p>
                  <h2 className="text-xl font-extrabold text-white">Kies locatie, datum & tijd</h2>
                </div>

                {/* Locatie */}
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-3">Locatie *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Assen', 'Amersfoort'].map(l => (
                      <button key={l} onClick={() => setLocatie(l)}
                        className={`py-4 rounded-xl border font-semibold text-sm transition-all ${
                          locatie === l
                            ? 'bg-coral-500/15 border-coral-500 text-coral-400'
                            : 'bg-[#1a1a1a] border-[#2a2a2a] text-slate-400 hover:border-[#3a3a3a]'
                        }`}>
                        📍 {l}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Datum */}
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Datum *</label>
                  <input type="date" min={getMinDate()} value={datum} onChange={e => { setDatum(e.target.value); setTijd('') }}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-coral-500/50 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors text-sm" />
                </div>

                {/* Tijdslot */}
                {datum && (
                  <div>
                    <label className="block text-slate-400 text-sm font-medium mb-3">Tijdstip *</label>
                    <div className="grid grid-cols-4 gap-2">
                      {TIJDEN.map(t => (
                        <button key={t} onClick={() => setTijd(t)}
                          className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${
                            tijd === t
                              ? 'bg-coral-500 border-coral-500 text-white'
                              : 'bg-[#1a1a1a] border-[#2a2a2a] text-slate-400 hover:border-coral-500/40 hover:text-white'
                          }`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button onClick={() => setStep(2)} disabled={!step1Valid}
                  className="w-full bg-coral-500 hover:bg-coral-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors">
                  Volgende stap →
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2"
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.35 }}>

              <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-7 space-y-5">
                <div>
                  <p className="text-coral-400 text-xs font-bold uppercase tracking-widest mb-1">Stap 2 van 3</p>
                  <h2 className="text-xl font-extrabold text-white">Jouw gegevens</h2>
                </div>

                {/* Samenvatting */}
                <div className="bg-coral-500/8 border border-coral-500/20 rounded-xl px-4 py-3 text-sm text-slate-300 flex flex-wrap gap-x-4 gap-y-1">
                  <span>📍 {locatie}</span>
                  <span>📅 {datum}</span>
                  <span>⏰ {tijd}</span>
                  <span className="text-coral-400 font-bold">€60</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">Volledige naam *</label>
                    <input value={naam} onChange={e => setNaam(e.target.value)} placeholder="Jouw naam"
                      className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-coral-500/50 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">E-mailadres *</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="jouw@email.nl"
                      className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-coral-500/50 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">Telefoonnummer *</label>
                    <input type="tel" value={telefoon} onChange={e => setTelefoon(e.target.value)} placeholder="+31 6 ..."
                      className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-coral-500/50 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">Opmerking (optioneel)</label>
                    <textarea value={opmerking} onChange={e => setOpmerking(e.target.value)} rows={2}
                      placeholder="Bijv. al eerder gereden, specifieke wens..."
                      className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-coral-500/50 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none transition-colors resize-none text-sm" />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(1)}
                    className="px-5 py-3 border border-[#2a2a2a] bg-[#1a1a1a] hover:bg-[#222] text-white font-medium rounded-xl text-sm transition-colors">
                    ← Terug
                  </button>
                  <button onClick={() => setStep(3)} disabled={!step2Valid}
                    className="flex-1 bg-coral-500 hover:bg-coral-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors text-sm">
                    Controleer boeking →
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3"
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.35 }}>

              <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-7 space-y-6">
                <div>
                  <p className="text-coral-400 text-xs font-bold uppercase tracking-widest mb-1">Stap 3 van 3</p>
                  <h2 className="text-xl font-extrabold text-white">Controleer & betaal</h2>
                </div>

                {/* Overzicht */}
                <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl divide-y divide-[#1a1a1a]">
                  {[
                    { label: 'Les', value: 'Proefles (60 minuten)' },
                    { label: 'Locatie', value: locatie },
                    { label: 'Datum', value: datum },
                    { label: 'Tijdstip', value: tijd },
                    { label: 'Naam', value: naam },
                    { label: 'E-mail', value: email },
                    { label: 'Telefoon', value: telefoon },
                  ].map(row => (
                    <div key={row.label} className="flex justify-between items-center px-4 py-3 text-sm">
                      <span className="text-slate-500">{row.label}</span>
                      <span className="text-white font-medium text-right max-w-[60%]">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center px-4 py-3">
                    <span className="text-white font-bold">Totaal</span>
                    <span className="text-coral-400 font-extrabold text-xl">€60,00</span>
                  </div>
                </div>

                {/* iDEAL badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-slate-600 text-xs">Betalen via:</span>
                  {['iDEAL', 'Creditcard', 'Maestro'].map(m => (
                    <span key={m} className="text-xs text-slate-400 bg-[#1a1a1a] border border-[#2a2a2a] px-2.5 py-1 rounded-lg">{m}</span>
                  ))}
                </div>

                {error && (
                  <div className="bg-red-900/20 border border-red-700/40 rounded-xl px-4 py-3 text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <div className="flex gap-3">
                  <button onClick={() => setStep(2)}
                    className="px-5 py-3 border border-[#2a2a2a] bg-[#1a1a1a] hover:bg-[#222] text-white font-medium rounded-xl text-sm transition-colors">
                    ← Terug
                  </button>
                  <button onClick={handleBetaal} disabled={loading}
                    className="flex-1 bg-coral-500 hover:bg-coral-600 disabled:opacity-60 text-white font-extrabold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                          <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Betaling aanmaken...
                      </>
                    ) : (
                      '🏦 Betaal €60 via iDEAL'
                    )}
                  </button>
                </div>

                <p className="text-slate-600 text-xs text-center">
                  Veilige betaling via Mollie · Je wordt doorgestuurd naar jouw bank
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
