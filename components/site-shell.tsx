"use client";

import { usePathname } from "next/navigation";
import { CuttingMat } from "@/components/cutting-mat";
import { Intro } from "@/components/intro";
import { Navigation } from "@/components/navigation";
import { PageTransitionProvider } from "@/components/page-transition";

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const matTheme = pathname.startsWith("/education")
    ? "mat-theme-education"
    : pathname.startsWith("/team")
      ? "mat-theme-team"
      : "mat-theme-competitive";

  return (
    <div className={`site-shell ${matTheme}`}>
      <PageTransitionProvider>
        <CuttingMat />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        <div className="page-layer">{children}</div>
        <Intro />
      </PageTransitionProvider>
    </div>
  );
}
