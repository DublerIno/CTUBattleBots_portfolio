import type { Metadata } from "next";
import { Big_Shoulders, IBM_Plex_Mono } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

const technical = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-technical",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CTU BattleBots",
    template: "%s — CTU BattleBots",
  },
  description: "Competitive robotics and engineering at CTU in Prague.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${technical.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
