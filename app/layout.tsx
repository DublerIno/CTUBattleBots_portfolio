import type { Metadata } from "next";
import { Big_Shoulders, IBM_Plex_Mono } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

const technical = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-technical",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Overengineered",
    template: "%s — Overengineered",
  },
  description: "Bojoví roboti a studentské inženýrství na Fakultě elektrotechnické ČVUT v Praze.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" data-scroll-behavior="smooth" className={`${display.variable} ${technical.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
