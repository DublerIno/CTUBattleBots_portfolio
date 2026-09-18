import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <main id="main-content">
      <PlaceholderPage
        label="TEAM"
        title={<>CTU<br />BATTLEBOTS</>}
        subtitle="PRAGUE"
        status="TEAM PAGE COMING SOON"
        variant="team"
      />
    </main>
  );
}
