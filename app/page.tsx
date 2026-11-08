import type { Metadata } from "next";
import { BattlebotsHero } from "@/components/battlebots-hero";
import { HomeDestinations } from "@/components/home-destinations";
import { HomePhotoStrip } from "@/components/home-photo-strip";

export const metadata: Metadata = {
  title: "Overengineered",
};

export default function HomePage() {
  return (
    <main id="main-content">
      <BattlebotsHero />
      <HomePhotoStrip />
      <HomeDestinations />
    </main>
  );
}
