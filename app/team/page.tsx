import type { Metadata } from "next";
import { LegacyRouteRedirect } from "@/components/legacy-route-redirect";

export const metadata: Metadata = { title: "Tým" };

export default function TeamLegacyPage() {
  return <LegacyRouteRedirect destination="/tym" label="Tým" />;
}
