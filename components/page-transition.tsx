"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useRef, useState } from "react";
import gsap from "gsap";

type TransitionContextValue = {
  navigate: (href: string) => void;
  transitioning: boolean;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function PageTransitionProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const [transitioning, setTransitioning] = useState(false);

  const navigate = useCallback(
    (href: string) => {
      if (transitioning) return;
      if (href === pathname) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const overlay = overlayRef.current;
      if (reducedMotion || !overlay) {
        router.push(href);
        return;
      }

      setTransitioning(true);
      gsap
        .timeline({
          defaults: { ease: "power3.inOut" },
          onComplete: () => setTransitioning(false),
        })
        .set(overlay, { clipPath: "inset(100% 0 0 0)", visibility: "visible" })
        .to(overlay, { clipPath: "inset(0% 0 0 0)", duration: 0.34 })
        .call(() => router.push(href))
        .to(overlay, { clipPath: "inset(0 0 100% 0)", duration: 0.4, delay: 0.08 })
        .set(overlay, { visibility: "hidden" });
    },
    [pathname, router, transitioning],
  );

  return (
    <TransitionContext.Provider value={{ navigate, transitioning }}>
      {children}
      <div ref={overlayRef} className="route-transition" aria-hidden="true">
        <span />
      </div>
    </TransitionContext.Provider>
  );
}

type TransitionLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  Pick<LinkProps, "href" | "prefetch">;

export function TransitionLink({ href, onClick, children, ...props }: TransitionLinkProps) {
  const context = useContext(TransitionContext);
  const hrefString = typeof href === "string" ? href : href.pathname ?? "/";

  return (
    <Link
      href={href}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }
        event.preventDefault();
        context?.navigate(hrefString);
      }}
    >
      {children}
    </Link>
  );
}
