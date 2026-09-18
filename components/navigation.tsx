"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { TransitionLink } from "@/components/page-transition";

const items = [
  { href: "/", label: "COMPETITIVE" },
  { href: "/education", label: "EDUCATION KIT" },
  { href: "/team", label: "TEAM" },
];

const ctuLogoSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/ctu-logo-white.svg`;

function NavigationItems({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return items.map((item) => {
    const active = pathname === item.href;
    return (
      <TransitionLink
        key={item.href}
        href={item.href}
        className={`nav-link${active ? " is-active" : ""}`}
        aria-current={active ? "page" : undefined}
        onClick={onNavigate}
      >
        <span className="nav-indicator" aria-hidden="true" />
        <span>{item.label}</span>
      </TransitionLink>
    );
  });
}

function CtuLogo() {
  return (
    <div className="ctu-logo">
      <Image
        className="ctu-logo-image"
        src={ctuLogoSrc}
        width={142}
        height={142}
        alt="Czech Technical University in Prague"
        preload
      />
    </div>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [menuState, setMenuState] = useState({ open: false, pathname });
  const mobileMenuId = useId();
  const open = menuState.open && menuState.pathname === pathname;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuState({ open: false, pathname });
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, pathname]);

  return (
    <>
      <nav className="site-nav site-nav-desktop" aria-label="Primary navigation">
        <div className="desktop-nav-unit">
          <div className="nav-list">
            <NavigationItems />
          </div>
          <CtuLogo />
        </div>
        <a className="nav-email" href="mailto:sponeond@fel.cvut.cz">
          sponeond@fel.cvut.cz
        </a>
      </nav>

      <nav className={`site-nav site-nav-mobile${open ? " is-open" : ""}`} aria-label="Primary navigation">
        <div className="mobile-nav-bar">
          <CtuLogo />
          <button
            type="button"
            className="mobile-menu-button"
            aria-expanded={open}
            aria-controls={mobileMenuId}
            onClick={() => setMenuState({ open: !open, pathname })}
          >
            <span>MENU</span>
            <span className="menu-glyph" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
        <div id={mobileMenuId} className="mobile-nav-panel" hidden={!open}>
          <div className="nav-list">
            <NavigationItems onNavigate={() => setMenuState({ open: false, pathname })} />
          </div>
          <a className="nav-email" href="mailto:sponeond@fel.cvut.cz">
            sponeond@fel.cvut.cz
          </a>
        </div>
      </nav>
    </>
  );
}
