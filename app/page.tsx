import type { Metadata } from "next";
import { CompetitiveHero } from "@/components/competitive-hero";
import { RobotSection } from "@/components/robot-section";
import { robots } from "@/lib/robots";

export const metadata: Metadata = {
  title: "Competitive",
};

export default function CompetitivePage() {
  return (
    <main id="main-content">
      <CompetitiveHero />
      <div className="robot-sequence">
        {robots.map((robot, index) => (
          <RobotSection key={robot.slug} robot={robot} index={index} />
        ))}
      </div>
    </main>
  );
}
