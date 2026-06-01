import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-500 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Logo href="/" size="md" className="mb-4" />
          <p className="text-slate-400 text-sm">
            Professionele rijlessen in Assen en Amersfoort. Wij helpen jou veilig en zelfverzekerd het verkeer in.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Navigatie</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/" className="hover:text-coral-400 transition-colors">Home</Link></li>
            <li><Link href="/pakketten" className="hover:text-coral-400 transition-colors">Pakketten &amp; Prijzen</Link></li>
            <li><Link href="/over-ons" className="hover:text-coral-400 transition-colors">Over Ons</Link></li>
            <li><Link href="/contact" className="hover:text-coral-400 transition-colors">Contact &amp; Inschrijven</Link></li>
            <li><Link href="/rijles-assen" className="hover:text-coral-400 transition-colors">Rijles Assen</Link></li>
            <li><Link href="/rijles-amersfoort" className="hover:text-coral-400 transition-colors">Rijles Amersfoort</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Locaties</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-coral-400 mt-0.5">📍</span>
              <span>Assen, Drenthe</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral-400 mt-0.5">📍</span>
              <span>Amersfoort, Utrecht</span>
            </li>
          </ul>
          <div className="mt-4 space-y-1 text-sm text-slate-400">
            <p>📞 <a href="tel:+31612345678" className="hover:text-coral-400 transition-colors">+31 6 12 34 56 78</a></p>
            <p>✉️ <a href="mailto:info@Verkeersschoolfarhan.nl" className="hover:text-coral-400 transition-colors">info@Verkeersschoolfarhan.nl</a></p>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-600 text-center py-4 text-slate-500 text-sm">
        © {new Date().getFullYear()} Verkeersschool Farhan. Alle rechten voorbehouden.
      </div>
    </footer>
  )
}
