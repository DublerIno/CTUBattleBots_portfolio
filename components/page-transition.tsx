"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import gsap from "gsap";

type TransitionContextValue = {
  navigate: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function PageTransitionProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => () => {
    timelineRef.current?.kill();
  }, []);

  const navigate = useCallback(
    (href: string) => {
      const wasTransitioning = Boolean(timelineRef.current);
      timelineRef.current?.kill();
      timelineRef.current = null;
      if (href === pathname) {
        if (wasTransitioning && overlayRef.current) gsap.set(overlayRef.current, { visibility: "hidden" });
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const overlay = overlayRef.current;
      if (reducedMotion || !overlay) {
        router.push(href);
        return;
      }

      const timeline = gsap
        .timeline({
          defaults: { ease: "power3.inOut" },
          onComplete: () => {
            if (timelineRef.current === timeline) timelineRef.current = null;
          },
        })
        .set(overlay, { clipPath: "inset(100% 0 0 0)", visibility: "visible" })
        .to(overlay, { clipPath: "inset(0% 0 0 0)", duration: 0.34 })
        .call(() => router.push(href))
        .to(overlay, { clipPath: "inset(0 0 100% 0)", duration: 0.4, delay: 0.08 })
        .set(overlay, { visibility: "hidden" });
      timelineRef.current = timeline;
    },
    [pathname, router],
  );

  return (
    <TransitionContext.Provider value={{ navigate }}>
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
