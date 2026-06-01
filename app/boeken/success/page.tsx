'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Suspense } from 'react'

function SuccessContent() {
  const params = useSearchParams()
  const naam = params.get('naam') || 'je'
  const datum = params.get('datum') || ''
  const tijd = params.get('tijd') || ''
  const locatie = params.get('locatie') || ''

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
      <motion.div
        className="max-w-md w-full text-center"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Checkmark animation */}
        <motion.div
          className="w-20 h-20 bg-green-500/15 border-2 border-green-500/40 rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
        >
          <motion.svg width="36" height="36" viewBox="0 0 36 36" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}>
            <motion.path d="M8 18l7 7L28 11" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }} />
          </motion.svg>
        </motion.div>

        <h1 className="text-3xl font-extrabold text-white mb-2">
          Betaling ontvangen! 🎉
        </h1>
        <p className="text-slate-400 mb-8">
          Goed gedaan, <strong className="text-white">{naam}</strong>! Je proefles is bevestigd.
        </p>

        {/* Boeking details */}
        {datum && (
          <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 mb-6 text-left">
            <p className="text-coral-400 text-xs font-bold uppercase tracking-widest mb-4">Jouw boeking</p>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Les</span>
                <span className="text-white font-medium">Proefles (60 min)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Locatie</span>
                <span className="text-white font-medium">{locatie}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Datum</span>
                <span className="text-white font-medium">{datum}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Tijdstip</span>
                <span className="text-white font-medium">{tijd}</span>
              </div>
              <div className="flex justify-between border-t border-[#1a1a1a] pt-2.5 mt-1">
                <span className="text-white font-bold">Betaald</span>
                <span className="text-green-400 font-extrabold">€60,00 ✓</span>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-2.5 text-sm text-slate-400 bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl px-4 py-3">
            <span className="text-green-400 mt-0.5 shrink-0">✓</span>
            <span>Je ontvangt een bevestiging op je e-mailadres</span>
          </div>
          <div className="flex items-start gap-2.5 text-sm text-slate-400 bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl px-4 py-3">
            <span className="text-green-400 mt-0.5 shrink-0">✓</span>
            <span>Farhan staat op de afgesproken tijd klaar</span>
          </div>
          <div className="flex items-start gap-2.5 text-sm text-slate-400 bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl px-4 py-3">
            <span className="text-coral-400 mt-0.5 shrink-0">💬</span>
            <span>Vragen? WhatsApp <a href="https://wa.me/31644626777" className="text-coral-400 underline">+31 6 44626777</a></span>
          </div>
        </div>

        <Link href="/"
          className="block bg-coral-500 hover:bg-coral-600 text-white font-bold py-3.5 rounded-xl transition-colors">
          Terug naar home
        </Link>
      </motion.div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080808]" />}>
      <SuccessContent />
    </Suspense>
  )
}
