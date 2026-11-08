import type { Metadata } from "next";
import { LegacyRouteRedirect } from "@/components/legacy-route-redirect";

export const metadata: Metadata = { title: "Akce" };

export default function EventsLegacyPage() {
  return <LegacyRouteRedirect destination="/akce" label="Akce" />;
}
