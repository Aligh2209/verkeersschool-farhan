import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacyverklaring | Verkeersschool Farhan',
  description: 'Privacyverklaring van Verkeersschool Farhan. Lees hoe wij omgaan met uw persoonsgegevens.',
}

const sections = [
  {
    titel: '1. Wie zijn wij?',
    inhoud: `Verkeersschool Farhan is een rijschool actief in Assen (Drenthe) en Amersfoort (Utrecht). Wij zijn verantwoordelijk voor de verwerking van uw persoonsgegevens zoals beschreven in deze privacyverklaring.

Contactgegevens:
Verkeersschool Farhan
E-mail: info@verkeersschoolfarhan.nl
Telefoon/WhatsApp: +31 6 44626777`,
  },
  {
    titel: '2. Welke gegevens verwerken wij?',
    inhoud: `Wij verwerken de volgende persoonsgegevens wanneer u contact met ons opneemt of zich inschrijft:

• Naam
• E-mailadres
• Telefoonnummer
• Locatiekeuze (Assen of Amersfoort)
• Pakketinteresse
• Berichten die u ons stuurt via het contactformulier of WhatsApp`,
  },
  {
    titel: '3. Waarom verwerken wij uw gegevens?',
    inhoud: `Wij gebruiken uw gegevens uitsluitend voor de volgende doeleinden:

• Het beantwoorden van uw vragen en verzoeken
• Het plannen en bevestigen van rijlessen
• Het opstellen van een persoonlijk rijplan
• Administratie van uw rijlestraject
• Het sturen van relevante informatie over uw rijlessen

Wij verwerken uw gegevens op basis van uw toestemming (door het invullen van het contactformulier) en op basis van de overeenkomst die wij met u sluiten.`,
  },
  {
    titel: '4. Hoe lang bewaren wij uw gegevens?',
    inhoud: `Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld:

• Contactformuliergegevens: maximaal 1 jaar na laatste contact
• Rijlesadministratie: maximaal 2 jaar na afronding van het rijlestraject
• Financiële gegevens (facturen): 7 jaar op grond van de Belastingdienstverplichting`,
  },
  {
    titel: '5. Delen wij uw gegevens met derden?',
    inhoud: `Wij verkopen uw gegevens nooit aan derden. Wij delen uw gegevens alleen indien:

• Dit wettelijk verplicht is (bijv. op verzoek van de overheid)
• Dit noodzakelijk is voor de uitvoering van onze diensten (bijv. CBR voor exameninschrijving)

In dat laatste geval sluiten wij een verwerkersovereenkomst om te zorgen dat uw gegevens goed beschermd zijn.`,
  },
  {
    titel: '6. Beveiliging van uw gegevens',
    inhoud: `Wij nemen de bescherming van uw gegevens serieus. Wij treffen passende technische en organisatorische maatregelen om misbruik, verlies, onbevoegde toegang en ongewenste openbaarmaking te voorkomen.

Communicatie via WhatsApp en e-mail verloopt via versleutelde verbindingen.`,
  },
  {
    titel: '7. Cookies',
    inhoud: `Onze website maakt gebruik van functionele cookies die noodzakelijk zijn voor het functioneren van de website. Wij gebruiken geen tracking- of advertentiecookies zonder uw toestemming.

Voor meer informatie over cookies verwijzen wij u naar onze cookieverklaring onderaan deze pagina.`,
  },
  {
    titel: '8. Uw rechten',
    inhoud: `Op grond van de Algemene Verordening Gegevensbescherming (AVG) heeft u de volgende rechten:

• Recht op inzage: u kunt opvragen welke gegevens wij van u hebben
• Recht op correctie: u kunt onjuiste gegevens laten corrigeren
• Recht op verwijdering: u kunt verzoeken uw gegevens te laten verwijderen
• Recht op beperking: u kunt vragen de verwerking te beperken
• Recht op bezwaar: u kunt bezwaar maken tegen de verwerking
• Recht op dataportabiliteit: u kunt uw gegevens in een standaard formaat opvragen

Om gebruik te maken van uw rechten kunt u contact opnemen via info@verkeersschoolfarhan.nl of +31 6 44626777.

Wij reageren binnen 30 dagen op uw verzoek.`,
  },
  {
    titel: '9. Klachten',
    inhoud: `Heeft u een klacht over de verwerking van uw persoonsgegevens? Neem dan eerst contact met ons op via info@verkeersschoolfarhan.nl.

U heeft ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP):
Website: www.autoriteitpersoonsgegevens.nl
Telefoon: 088 - 1805 250`,
  },
  {
    titel: '10. Wijzigingen',
    inhoud: `Wij behouden het recht deze privacyverklaring te wijzigen. De meest actuele versie is altijd te vinden op deze pagina. Wij adviseren u deze pagina regelmatig te raadplegen.

Laatste update: juni 2026`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080808] py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-coral-400 text-sm hover:text-coral-300 transition-colors mb-6 block">
            ← Terug naar home
          </Link>
          <h1 className="text-4xl font-extrabold text-white mb-3">Privacyverklaring</h1>
          <p className="text-slate-500">Verkeersschool Farhan · Laatste update: juni 2026</p>
        </div>

        {/* Intro */}
        <div className="bg-[#111] border border-coral-500/20 rounded-2xl p-6 mb-8">
          <p className="text-slate-300 text-sm leading-relaxed">
            Verkeersschool Farhan hecht veel waarde aan de bescherming van uw persoonsgegevens. In deze privacyverklaring leggen wij uit welke gegevens wij verzamelen, waarom wij dat doen en hoe wij ermee omgaan. Wij handelen in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map(section => (
            <div key={section.titel} className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-7">
              <h2 className="text-white font-bold text-lg mb-4">{section.titel}</h2>
              <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                {section.inhoud}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-10 bg-coral-500/10 border border-coral-500/20 rounded-2xl p-6 text-center">
          <p className="text-white font-semibold mb-2">Vragen over uw privacy?</p>
          <p className="text-slate-400 text-sm mb-4">Neem contact op — wij helpen u graag.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:info@verkeersschoolfarhan.nl"
              className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors">
              ✉️ info@verkeersschoolfarhan.nl
            </a>
            <a href="tel:+31644626777"
              className="bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors">
              📞 +31 6 44626777
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
