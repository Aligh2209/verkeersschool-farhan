import type { Metadata } from 'next'
import StadPagina from '../components/StadPagina'

export const metadata: Metadata = {
  title: 'Rijles Assen | Verkeersschool Farhan',
  description: 'Op zoek naar rijles in Assen? Verkeersschool Farhan biedt professionele rijlessen in Assen met een slagingspercentage van 92%. Schrijf je nu in.',
}

const reviews = [
  { naam: 'Nadia B.', sterren: 5, tekst: 'Farhan is een geweldige instructeur. In Assen zijn de rijroutes goed geoefend en ik voelde me super zeker op het examen.' },
  { naam: 'Thomas R.', sterren: 5, tekst: 'In één keer geslaagd in Assen! De lessen waren praktisch en geen tijdverspilling. Top rijschool.' },
  { naam: 'Amira H.', sterren: 5, tekst: 'Ik was echt bang voor het rijexamen, maar Farhan heeft me zo goed voorbereid. Assen is nu geen enkel probleem meer.' },
  { naam: 'Kevin D.', sterren: 5, tekst: 'Flexibele tijden, rustige instructeur en een goede auto. Precies wat ik nodig had in Assen.' },
]

const faq = [
  {
    vraag: 'Waar worden lessen in Assen gegeven?',
    antwoord: 'Lessen worden gegeven in Assen en omgeving. We rijden ook de CBR-examenwegen in en rondom Assen, zodat je op het examen weet waar je rijdt.',
  },
  {
    vraag: 'Waar is het CBR-examenlocatie bij Assen?',
    antwoord: 'Het rijexamen in de regio Assen wordt afgenomen bij het CBR in Assen. Wij zorgen dat je deze routes vóór het examen goed kent.',
  },
  {
    vraag: 'Hoe snel kan ik starten met rijles in Assen?',
    antwoord: 'Vaak al binnen een week. Stuur een WhatsApp-bericht of bel ons en we kijken direct naar beschikbaarheid in Assen.',
  },
  {
    vraag: 'Geeft Verkeersschool Farhan ook les buiten Assen?',
    antwoord: 'Ja, we zijn ook actief in Amersfoort. Als je soms in Assen en soms elders bent, overleg dat dan bij de inschrijving.',
  },
]

export default function RijlesAssenPage() {
  return (
    <StadPagina
      stad="Assen"
      provincie="Drenthe"
      slug="assen"
      beschrijving="Verkeersschool Farhan biedt professionele rijlessen in Assen en omgeving. Met een slagingspercentage van 92% helpen we jou snel en zelfverzekerd naar je rijbewijs."
      buurten={['Assen-Centrum', 'Assen-Noord', 'Assen-Zuid', 'Assen-Oost', 'Peelo', 'Kloosterveen', 'Marsdijk', 'Pittelo', 'Rolde', 'Beilen', 'Hoogeveen']}
      reviews={reviews}
      faq={faq}
    />
  )
}
