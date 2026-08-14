import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RegionProvider } from "@/lib/region";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const description =
  "Vitamines, minéraux et compléments alimentaires expliqués simplement : effets, mythes, dosages et carences, pour tout le monde.";

export const metadata: Metadata = {
  metadataBase: new URL("https://docsup.org"),
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Vérification de propriété du site pour Impact.com (programme d'affiliation Vitamin Shoppe) */}
        <meta name="impact-site-verification" {...{ value: "8b3cf82d-9f4d-4f6a-8332-2aaf0de4a164" }} />
      </head>
      <body className="grain flex min-h-full flex-col bg-(--bg) font-sans text-(--ink)">
        <RegionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </RegionProvider>
      </body>
    </html>
  );
}
