import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vera-construction.example"),
  title: {
    default: "Ve.Ra Costruzioni Srl | Impresa Edile",
    template: "%s | Ve.Ra Costruzioni Srl",
  },
  description:
    "Ve.Ra Costruzioni Srl realizza ristrutturazioni, nuove costruzioni e interventi industriali con qualità, sicurezza e puntualità.",
  keywords: [
    "impresa edile",
    "ristrutturazioni",
    "nuove costruzioni",
    "cantieri",
    "Ve.Ra Costruzioni Srl",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-foreground)]">
        <div className="flex min-h-full flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
