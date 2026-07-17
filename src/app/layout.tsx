import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RegionProvider } from "@/lib/region";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Docsup — Le dictionnaire des compléments alimentaires",
  description:
    "Vitamines, minéraux et compléments alimentaires expliqués simplement : effets, mythes, dosages et carences, pour tout le monde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-black">
        <RegionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </RegionProvider>
      </body>
    </html>
  );
}
