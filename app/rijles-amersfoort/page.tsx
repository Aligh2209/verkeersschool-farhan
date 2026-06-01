import type { Metadata } from 'next'
import StadPagina from '../components/StadPagina'

export const metadata: Metadata = {
  title: 'Rijles Amersfoort | Verkeersschool Farhan',
  description: 'Rijles in Amersfoort volgen? Verkeersschool Farhan geeft professionele rijlessen in Amersfoort met 92% slagingspercentage. Schrijf je vandaag nog in.',
}

const reviews = [
  { naam: 'Sven J.', sterren: 5, tekst: 'Farhan rijdt alle examenwegen in Amersfoort met je door. Dat geeft zo veel vertrouwen op de examendag zelf.' },
  { naam: 'Fatima O.', sterren: 5, tekst: 'Ik woon in Amersfoort en had moeite een goede rijschool te vinden. Verkeersschool Farhan was de beste keuze.' },
  { naam: 'Bas T.', sterren: 5, tekst: 'Twee vrienden van mij reden ook bij Farhan en allebei in één keer geslaagd in Amersfoort. Nu ik ook!' },
  { naam: 'Layla N.', sterren: 5, tekst: 'Goed bereikbaar in Amersfoort, fijne auto en een instructeur die echt de tijd neemt voor je.' },
]

const faq = [
  {
    vraag: 'Waar worden lessen in Amersfoort gegeven?',
    antwoord: 'Rijlessen vinden plaats in Amersfoort en omgeving. We rijden ook de officiële CBR-examenwegen, zodat je alles al kent op de examendag.',
  },
  {
    vraag: 'Waar is het CBR-examen in de regio Amersfoort?',
    antwoord: 'Het rijexamen wordt afgenomen bij het CBR in Amersfoort. We bereiden je specifiek voor op de routes in en rondom deze locatie.',
  },
  {
    vraag: 'Hoe snel kan ik rijles krijgen in Amersfoort?',
    antwoord: 'Vaak al binnen een week. Neem contact op via WhatsApp of telefoon en we plannen de eerste les zo snel mogelijk in.',
  },
  {
    vraag: 'Is Verkeersschool Farhan ook actief buiten Amersfoort?',
    antwoord: 'Ja, we rijden ook in Assen. Kom je soms in Drenthe? Dan is dat ook mogelijk. Overleg dit bij de inschrijving.',
  },
]

export default function RijlesAmersfoortPage() {
  return (
    <StadPagina
      stad="Amersfoort"
      provincie="Utrecht"
      slug="amersfoort"
      beschrijving="Verkeersschool Farhan geeft rijlessen in Amersfoort en omgeving. Persoonlijk, betrouwbaar en met een bewezen hoog slagingspercentage. Schrijf je vandaag in."
      buurten={['Amersfoort-Centrum', 'Vathorst', 'Nieuwland', 'Randenbroek', 'Kruiskamp', 'De Koppel', 'Soest', 'Baarn', 'Leusden', 'Hoevelaken', 'Bunschoten']}
      reviews={reviews}
      faq={faq}
    />
  )
}
