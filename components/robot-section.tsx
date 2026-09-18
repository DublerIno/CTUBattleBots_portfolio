"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TechnicalSpec } from "@/components/technical-spec";
import type { Robot } from "@/lib/robots";

gsap.registerPlugin(ScrollTrigger);

export function RobotSection({ robot, index }: { robot: Robot; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-robot=name] > span", {
          yPercent: 115,
          stagger: 0.08,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 68%", once: true },
        });
        gsap.from("[data-robot=specs] .spec-row, [data-robot=description]", {
          opacity: 0,
          y: 18,
          stagger: 0.07,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 58%", once: true },
        });
        gsap.from("[data-robot=render]", {
          clipPath: "inset(0 100% 0 0)",
          duration: 0.95,
          ease: "power3.inOut",
          scrollTrigger: { trigger: section, start: "top 72%", once: true },
        });
        gsap.fromTo(
          "[data-robot=render-inner]",
          { yPercent: 3, scale: 0.985 },
          {
            yPercent: -3,
            scale: 1.015,
            ease: "none",
            scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 0.7 },
          },
        );
      });
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={robot.slug}
      className={`robot-section${index % 2 ? " is-alternate" : ""}`}
      aria-labelledby={`${robot.slug}-title`}
    >
      <div className="robot-stage">
        <div className="robot-info">
          <div className="robot-name-clip">
            <h2 id={`${robot.slug}-title`} className="robot-name" data-robot="name">
              <span>MELTY /</span>
              <span>{robot.unit}</span>
            </h2>
          </div>
          <TechnicalSpec specs={robot.specs} />
          <p className="robot-description" data-robot="description">
            {robot.description}
          </p>
        </div>

        <div className="robot-render" data-robot="render">
          <div
            className={`robot-render-inner${robot.image.src ? " has-image" : ""}`}
            data-robot="render-inner"
            role={robot.image.src ? undefined : "img"}
            aria-label={robot.image.src ? undefined : robot.image.alt}
          >
            {robot.image.src ? (
              <Image
                className="robot-image"
                src={robot.image.src}
                alt={robot.image.alt}
                fill
                sizes="(max-width: 960px) calc(100vw - 2.3rem), 63vw"
              />
            ) : (
              <span className="render-label">ROBOT RENDER PLACEHOLDER</span>
            )}
            <i className="registration registration-top" />
            <i className="registration registration-right" />
            <i className="registration registration-bottom" />
            <i className="registration registration-left" />
          </div>
          <div className="render-meta" aria-hidden="true">
            <span>UNIT&nbsp;&nbsp;/&nbsp;&nbsp;{robot.unit}</span>
            <span>REV&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;{robot.revision}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
