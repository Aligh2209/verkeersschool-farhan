import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Inschrijven',
  description: 'Schrijf je in bij Verkeersschool Farhan in Assen of Amersfoort. Claim jouw plek — beperkt aantal per maand. Plan direct een proefles voor €60.',
  openGraph: {
    title: 'Contact & Inschrijven | Verkeersschool Farhan',
    description: 'Claim jouw rijlesplek in Assen of Amersfoort. Proefles €60, geen verplichtingen.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
