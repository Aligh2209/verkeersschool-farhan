import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rijles Amersfoort — Verkeersschool Farhan',
  description: 'Rijles in Amersfoort? Verkeersschool Farhan biedt professionele rijlessen in Amersfoort en omgeving. 92% slagingspercentage. Plan een proefles voor €60.',
  openGraph: {
    title: 'Rijles Amersfoort | Verkeersschool Farhan',
    description: '92% slagingspercentage · €58/les bij pakket · Les in 4 talen. Plan een proefles in Amersfoort.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
