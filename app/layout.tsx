import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verkeersschool Farhan | Rijlessen in Assen & Amersfoort",
  description: "Verkeersschool Farhan biedt professionele rijlessen in Assen en Amersfoort. Schrijf je nu in voor een pakket dat bij jou past.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" data-scroll-behavior="smooth" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-navy-950 text-slate-100 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
