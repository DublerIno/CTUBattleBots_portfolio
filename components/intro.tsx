"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const INTRO_KEY = "ctu-battlebots:intro-seen";

export function Intro() {
  const [finished, setFinished] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useLayoutEffect(() => {
    const intro = introRef.current;
    if (!intro) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = window.sessionStorage.getItem(INTRO_KEY) === "1";
    if (!startedRef.current && (reducedMotion || alreadySeen)) {
      return;
    }
    startedRef.current = true;
    intro.style.display = "grid";
    window.sessionStorage.setItem(INTRO_KEY, "1");
    const context = gsap.context(() => {
      gsap
        .timeline({ onComplete: () => setFinished(true) })
        .from("[data-intro=technical]", { opacity: 0, y: 8, duration: 0.25 })
        .from("[data-intro=line]", { scaleX: 0, transformOrigin: "left", duration: 0.35 }, "<")
        .from("[data-intro=title] > span", {
          yPercent: 115,
          stagger: 0.08,
          duration: 0.52,
          ease: "power3.out",
        })
        .to("[data-intro=sweep]", { xPercent: 190, duration: 0.6, ease: "power2.inOut" }, "-=0.25")
        .to(intro, { clipPath: "inset(0 0 100% 0)", duration: 0.5, ease: "power3.inOut" }, "+=0.1");
    }, intro);
    return () => context.revert();
  }, []);

  if (finished) return null;

  return (
    <div ref={introRef} className="site-intro" aria-hidden="true">
      <div className="intro-sweep" data-intro="sweep" />
      <div className="intro-technical" data-intro="technical">
        <span>COMPETITIVE ROBOTICS</span>
        <span>PRAGUE</span>
      </div>
      <div className="intro-line" data-intro="line" />
      <div className="intro-title" data-intro="title">
        <span>CTU</span>
        <span>BATTLEBOTS</span>
      </div>
    </div>
  );
}
