import type { Metadata } from "next";
import { BattlebotsHero } from "@/components/battlebots-hero";
import { HomeDestinations } from "@/components/home-destinations";

export const metadata: Metadata = {
  title: "Overengineered",
};

export default function HomePage() {
  return (
    <main id="main-content">
      <BattlebotsHero />
      <HomeDestinations />
    </main>
  );
}
