import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proefles Boeken | Verkeersschool Farhan',
  description: 'Boek direct online een vrijblijvende proefles bij Verkeersschool Farhan in Assen of Amersfoort. Kies zelf een datum en tijd.',
}

export default function BoekenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
