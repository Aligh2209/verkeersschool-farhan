import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] mt-auto">
      <div className="max-w-6xl mx-auto px-5 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="sm:col-span-2 md:col-span-1">
          <Logo href="/" size="md" className="mb-4" />
          <p className="text-slate-500 text-sm leading-relaxed">
            Professionele rijlessen in Assen en Amersfoort. Persoonlijk, transparant, bewezen effectief.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://wa.me/31644626777"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-2 rounded-lg hover:bg-green-500/20 transition-colors"
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+31644626777"
              className="flex items-center gap-2 text-xs font-medium text-coral-400 bg-coral-500/10 border border-coral-500/20 px-3 py-2 rounded-lg hover:bg-coral-500/20 transition-colors"
            >
              📞 Bellen
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Navigatie</h4>
          <ul className="space-y-2.5 text-sm text-slate-500">
            {[
              { href: '/', label: 'Home' },
              { href: '/pakketten', label: 'Pakketten & Prijzen' },
              { href: '/over-ons', label: 'Over Ons' },
              { href: '/werken-bij', label: 'Werken bij ons' },
              { href: '/rijles-assen', label: 'Rijles Assen' },
              { href: '/rijles-amersfoort', label: 'Rijles Amersfoort' },
              { href: '/contact', label: 'Contact & Inschrijven' },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-coral-400 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li className="flex items-start gap-2">
              <span className="text-coral-400 shrink-0">📍</span>
              <div>
                <p className="text-white text-xs font-medium">Assen</p>
                <p>Drenthe, Nederland</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral-400 shrink-0">📍</span>
              <div>
                <p className="text-white text-xs font-medium">Amersfoort</p>
                <p>Utrecht, Nederland</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral-400 shrink-0">📞</span>
              <a href="tel:+31644626777" className="hover:text-coral-400 transition-colors">+31 6 44 62 67 77</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral-400 shrink-0">✉️</span>
              <a href="mailto:info@verkeersschoolfarhan.nl" className="hover:text-coral-400 transition-colors break-all">info@verkeersschoolfarhan.nl</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a] px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-600 text-xs">
        <span>© {new Date().getFullYear()} Verkeersschool Farhan. Alle rechten voorbehouden.</span>
        <Link href="/contact" className="text-coral-400 hover:text-coral-300 transition-colors font-medium">
          Plan een proefles →
        </Link>
      </div>
    </footer>
  )
}
