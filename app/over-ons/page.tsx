const waarden = [
  { icon: '🎯', titel: 'Gericht op resultaat', tekst: 'Wij werken doelgericht naar een geslaagd rijexamen, zonder onnodige vertragingen.' },
  { icon: '🤝', titel: 'Persoonlijk contact', tekst: 'Je hebt altijd direct contact met je instructeur, geen callcenters of tussenpersonen.' },
  { icon: '🛡️', titel: 'Veiligheid voorop', tekst: 'Veilig rijgedrag staat centraal in elke les. Dat nemen wij heel serieus.' },
  { icon: '🌍', titel: 'Meertalig', tekst: 'Lessen mogelijk in het Nederlands, Engels en andere talen op aanvraag.' },
]

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-navy-950 py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-coral-400 font-semibold text-sm uppercase tracking-wider mb-2">Over ons</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Verkeersschool Farhan
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Leer ons kennen — wie we zijn, wat we doen en waarom we het doen.
          </p>
        </div>

        {/* Introductie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Welkom bij Verkeersschool Farhan
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Verkeersschool Farhan is opgericht met één doel: jou zo goed mogelijk voorbereiden op het rijexamen en het verkeer in het echt. Wij geloven dat goed rijonderwijs verder gaat dan alleen rijlessen — het gaat om vertrouwen opbouwen, inzicht geven en veilig gedrag aanleren.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Met vestigingen in <strong className="text-white">Assen</strong> en <strong className="text-white">Amersfoort</strong> zijn we bereikbaar voor cursisten in heel Noord-Nederland en de Randstad.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Of je nu net begint of al wat ervaring hebt — wij passen ons aan op jouw niveau en tempo.
            </p>
          </div>
          <div className="bg-navy-800 border border-navy-600 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-4">🚗</div>
            <div className="text-5xl font-extrabold text-white mb-1">500+</div>
            <div className="text-coral-400 font-medium mb-6">Tevreden leerlingen</div>
            <div className="text-4xl font-extrabold text-white mb-1">92%</div>
            <div className="text-coral-400 font-medium mb-6">Slagingspercentage</div>
            <div className="text-4xl font-extrabold text-white mb-1">2</div>
            <div className="text-coral-400 font-medium">Locaties in Nederland</div>
          </div>
        </div>

        {/* De instructeur */}
        <div className="bg-navy-800 border border-navy-600 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Onze instructeur</h2>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="bg-coral-500 rounded-full w-20 h-20 flex items-center justify-center text-4xl shrink-0">
              👨‍🏫
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Farhan</h3>
              <p className="text-coral-400 text-sm mb-3">Gecertificeerd rijinstructeur • WRM gecertificeerd</p>
              <p className="text-slate-400 leading-relaxed">
                Farhan heeft jarenlange ervaring als rijinstructeur en kent de exameneisen als zijn broekzak. Hij is geduldig, duidelijk en motiveert leerlingen om het beste uit zichzelf te halen. Zijn aanpak is opbouwend en positief — zelfs als het even tegenzit.
              </p>
              <p className="text-slate-400 leading-relaxed mt-3">
                Hij geeft les in zowel Assen als Amersfoort en is ook bereikbaar voor vragen buiten lestijden.
              </p>
            </div>
          </div>
        </div>

        {/* Waarden */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Onze kernwaarden</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {waarden.map((w) => (
              <div key={w.titel} className="bg-navy-800 border border-navy-600 rounded-2xl p-6 hover:border-coral-500/50 transition-colors">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="text-white font-semibold mb-2">{w.titel}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{w.tekst}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Locaties */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { stad: 'Assen', provincie: 'Drenthe', info: 'Onze vestiging in Assen bedient leerlingen uit de hele provincie Drenthe. Lessen vinden plaats in en rondom Assen, inclusief examenroutes.' },
            { stad: 'Amersfoort', provincie: 'Utrecht', info: 'In Amersfoort bedienen we leerlingen uit de regio Utrecht en omstreken. We rijden ook op examenwegen rondom het CBR in Amersfoort.' },
          ].map((loc) => (
            <div key={loc.stad} className="bg-navy-800 border border-coral-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="text-white font-bold text-lg">{loc.stad}</h3>
                  <p className="text-coral-400 text-sm">{loc.provincie}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{loc.info}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
