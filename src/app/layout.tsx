import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RegionProvider } from "@/lib/region";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

const description =
  "Vitamines, minéraux et compléments alimentaires expliqués simplement : effets, mythes, dosages et carences, pour tout le monde.";

export const metadata: Metadata = {
  metadataBase: new URL("https://docsup-eight.vercel.app"),
  title: {
    default: "Docsup — Le dictionnaire des compléments alimentaires",
    template: "%s — Docsup",
  },
  description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Docsup",
    title: "Docsup — Le dictionnaire des compléments alimentaires",
    description,
  },
  twitter: {
    card: "summary",
    title: "Docsup — Le dictionnaire des compléments alimentaires",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#0a0c10] font-sans text-zinc-100">
        <RegionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </RegionProvider>
      </body>
    </html>
  );
}
