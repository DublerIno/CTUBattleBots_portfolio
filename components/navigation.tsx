"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { TransitionLink } from "@/components/page-transition";

const items = [
  { href: "/", label: "BATTLEBOTS" },
  { href: "/events", label: "EVENTS" },
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
  const [hasFocus, setHasFocus] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const hiddenRef = useRef(false);
  const mobileMenuId = useId();
  const open = menuState.open && menuState.pathname === pathname;

  useEffect(() => {
    let previousY = window.scrollY;
    let direction = 0;
    let travel = 0;
    const updateVisibility = (hidden: boolean) => {
      if (hiddenRef.current === hidden) return;
      hiddenRef.current = hidden;
      setIsHidden(hidden);
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - previousY;
      previousY = currentY;

      if (currentY < 96 || open || hasFocus) {
        updateVisibility(false);
        travel = 0;
        return;
      }
      if (Math.abs(delta) < 2) return;

      const nextDirection = Math.sign(delta);
      travel = direction === nextDirection ? travel + Math.abs(delta) : Math.abs(delta);
      direction = nextDirection;
      if (travel >= 24) {
        updateVisibility(nextDirection > 0);
        travel = 0;
      }
    };

    updateVisibility(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasFocus, open, pathname]);

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
      <nav
        className={`site-nav site-nav-desktop${isHidden ? " is-hidden" : ""}`}
        aria-label="Hlavní navigace"
        onFocusCapture={(event) => setHasFocus(event.target.matches(":focus-visible"))}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
        }}
      >
        <div className="desktop-nav-unit">
          <div className="nav-list">
            <NavigationItems />
          </div>
          <CtuLogo />
        </div>
      </nav>

      <nav
        className={`site-nav site-nav-mobile${open ? " is-open" : ""}${isHidden ? " is-hidden" : ""}`}
        aria-label="Hlavní navigace"
        onFocusCapture={(event) => setHasFocus(event.target.matches(":focus-visible"))}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
        }}
      >
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
        </div>
      </nav>
    </>
  );
}
