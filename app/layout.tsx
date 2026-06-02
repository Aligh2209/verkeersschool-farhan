import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import FomoToast from "./components/FomoToast";
import CookieBanner from "./components/CookieBanner";
import StickyMobileCTA from "./components/StickyMobileCTA";
import ExitIntent from "./components/ExitIntent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verkeersschool Farhan | Rijlessen in Assen & Amersfoort",
  description: "Verkeersschool Farhan biedt professionele rijlessen in Assen en Amersfoort. 92% slagingspercentage. Plan een proefles voor €60.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" data-scroll-behavior="smooth" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#080808] text-slate-100 antialiased">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />

        {/* Floating WhatsApp — desktop */}
        <a
          href="https://wa.me/31644626777?text=Hallo%2C%20ik%20wil%20meer%20informatie%20over%20rijlessen"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex fixed bottom-24 right-[4.5rem] z-50 w-12 h-12 bg-green-500 hover:bg-green-400 rounded-full items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110"
          aria-label="WhatsApp"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.122 1.528 5.855L.057 23.882a.5.5 0 00.61.61l6.083-1.46A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.877 0-3.65-.49-5.19-1.348l-.37-.213-3.838.921.939-3.76-.234-.389A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </a>

        {/* Sticky mobile CTA */}
        <StickyMobileCTA />

        {/* Cookie banner */}
        <CookieBanner />

        {/* FOMO notifications */}
        <FomoToast />

        {/* Exit intent popup */}
        <ExitIntent />

        {/* AI Chatbot */}
        <ChatBot />
      </body>
    </html>
  );
}
