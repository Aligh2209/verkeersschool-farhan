'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Msg { role: 'user' | 'assistant'; content: string }

const QUICK = [
  '🚗 Wat kost een proefles?',
  '⚡ Hoe snel kan ik starten?',
  '❓ Wat als ik zak voor het examen?',
  '💰 Wat is het goedkoopste pakket?',
  '📍 Zijn jullie in Amersfoort?',
]

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'assistant', content: 'Hoi! 👋 Ik ben de assistent van Verkeersschool Farhan. Stel gerust je vraag over rijlessen, prijzen of planning — of klik op een van de knoppen hieronder.' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [unread, setUnread] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setUnread(false)
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    else if (msgs.length > 1) setUnread(true)
  }, [msgs, open])

  async function send(text: string) {
    const t = text.trim()
    if (!t || loading) return
    const next: Msg[] = [...msgs, { role: 'user', content: t }]
    setMsgs(next)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.map(m => ({ role: m.role, content: m.content })) }),
      })
      const data = await res.json()
      setMsgs(prev => [...prev, { role: 'assistant', content: data.content }])
    } catch {
      setMsgs(prev => [...prev, {
        role: 'assistant',
        content: 'Er ging iets mis. Stuur ons een WhatsApp: +31 6 44 62 67 77 🙂',
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{ background: open ? '#1a1a1a' : '#f97316', boxShadow: open ? 'none' : '0 0 24px rgba(249,115,22,0.4)' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.25 }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
            <path d="M14.95 5.05a1 1 0 00-1.414 0L10 8.586 6.464 5.05A1 1 0 005.05 6.464L8.586 10l-3.536 3.536a1 1 0 001.414 1.414L10 11.414l3.536 3.536a1 1 0 001.414-1.414L11.414 10l3.536-3.536a1 1 0 000-1.414z"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
        )}
        {unread && !open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center text-[9px] font-black text-orange-500">
            !
          </span>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-[380px] rounded-2xl overflow-hidden shadow-2xl border border-[#2a2a2a]"
            style={{ background: '#0f0f0f' }}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="px-4 py-3 flex items-center gap-3 border-b border-[#1a1a1a]"
              style={{ background: 'linear-gradient(135deg, #1a0800, #111)' }}>
              <div className="w-9 h-9 rounded-full bg-coral-500 flex items-center justify-center text-white font-extrabold text-sm shrink-0">
                F
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-tight">Farhan Assistent</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <span className="text-slate-500 text-xs">Online — antwoordt direct</span>
                </div>
              </div>
              <a
                href="https://wa.me/31644626777"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-green-400 border border-green-500/30 px-2 py-1 rounded-full hover:bg-green-500/10 transition-colors whitespace-nowrap"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {m.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-full bg-coral-500 flex items-center justify-center text-white text-[10px] font-bold mr-2 mt-0.5 shrink-0">F</div>
                  )}
                  <div
                    className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-coral-500 text-white rounded-br-sm'
                        : 'bg-[#1a1a1a] text-slate-300 border border-[#252525] rounded-bl-sm'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {/* Loading dots */}
              {loading && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-coral-500 flex items-center justify-center text-white text-[10px] font-bold shrink-0">F</div>
                  <div className="bg-[#1a1a1a] border border-[#252525] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
                    {[0, 150, 300].map(d => (
                      <motion.span
                        key={d}
                        className="w-1.5 h-1.5 bg-slate-500 rounded-full block"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: d / 1000 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick questions — only at start */}
            {msgs.length <= 1 && (
              <div className="px-3 py-2 border-t border-[#1a1a1a] flex gap-1.5 overflow-x-auto">
                {QUICK.map(q => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-[11px] text-coral-400 border border-coral-500/25 rounded-full px-3 py-1.5 whitespace-nowrap hover:bg-coral-500/10 transition-colors shrink-0"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-3 pb-3 pt-2 border-t border-[#1a1a1a] flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send(input)}
                placeholder="Stel een vraag..."
                className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-coral-500/40 rounded-xl px-3.5 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors"
              />
              <button
                onClick={() => send(input)}
                disabled={loading || !input.trim()}
                className="bg-coral-500 hover:bg-coral-600 disabled:opacity-30 text-white w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
