"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function LegacyRouteRedirect({ destination, label }: { destination: string; label: string }) {
  const router = useRouter();
  useEffect(() => { router.replace(destination); }, [destination, router]);
  return (
    <main id="main-content" className="legacy-redirect">
      <p>Stránka se přesunula.</p>
      <Link href={destination}>Přejít na {label}</Link>
    </main>
  );
}
