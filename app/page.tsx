import type { Metadata } from "next";
import { BattlebotsHero } from "@/components/battlebots-hero";
import { RobotSection } from "@/components/robot-section";
import { robots } from "@/lib/robots";

export const metadata: Metadata = {
  title: "Battlebots",
};

export default function BattlebotsPage() {
  return (
    <main id="main-content">
      <BattlebotsHero />
      <div className="robot-sequence">
        {robots.map((robot, index) => (
          <RobotSection key={robot.slug} robot={robot} index={index} />
        ))}
      </div>
    </main>
  );
}
