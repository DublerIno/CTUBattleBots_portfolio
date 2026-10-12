"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TechnicalSpec } from "@/components/technical-spec";
import type { Robot } from "@/lib/robots";

gsap.registerPlugin(ScrollTrigger);

export function RobotSection({ robot, index }: { robot: Robot; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const renderRef = useRef<HTMLDivElement>(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationFailed, setAnimationFailed] = useState(false);

  useEffect(() => {
    const render = renderRef.current;
    if (!render || !robot.image.animationSrc || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let startTimer: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if ((entries[0]?.intersectionRatio ?? 0) >= 0.45) {
          startTimer ??= window.setTimeout(() => {
            setAnimationStarted(true);
            observer.disconnect();
          }, 700);
        } else if (startTimer !== undefined) {
          window.clearTimeout(startTimer);
          startTimer = undefined;
        }
      },
      { threshold: 0.45 },
    );
    observer.observe(render);
    return () => {
      observer.disconnect();
      window.clearTimeout(startTimer);
    };
  }, [robot.image.animationSrc]);

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
        gsap.from("[data-robot=specs] .spec-row, [data-robot=description] > *, [data-robot=details] > *", {
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
          <p className="robot-classification">{robot.classification} MELTY BRAIN</p>
          <div className="robot-name-clip">
            <h2 id={`${robot.slug}-title`} className="robot-name" data-robot="name">
              <span>MELTY /</span>
              <span>{robot.unit}</span>
            </h2>
          </div>
          <TechnicalSpec specs={robot.specs} />
          <div className="robot-description" data-robot="description">
            {robot.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div ref={renderRef} className="robot-render" data-robot="render">
          <div
            className={`robot-render-inner${robot.image.src ? " has-image" : ""}${robot.image.animationSrc ? " has-animation" : ""}`}
            data-robot="render-inner"
            role={robot.image.src ? undefined : "img"}
            aria-label={robot.image.src ? undefined : robot.image.alt}
          >
            {robot.image.src ? (
              <Image
                className="robot-image"
                src={animationStarted && !animationFailed ? robot.image.animationSrc ?? robot.image.src : robot.image.src}
                alt={animationStarted && !animationFailed ? robot.image.animationAlt ?? robot.image.alt : robot.image.alt}
                fill
                sizes="(max-width: 960px) calc(100vw - 2.3rem), 63vw"
                loading={robot.image.animationSrc ? "eager" : "lazy"}
                unoptimized={Boolean(robot.image.animationSrc)}
                onError={() => setAnimationFailed(true)}
              />
            ) : (
              <span className="render-label render-label-tba">TBA</span>
            )}
            <i className="registration registration-top" />
            <i className="registration registration-right" />
            <i className="registration registration-bottom" />
            <i className="registration registration-left" />
          </div>
          <div className="render-meta" aria-hidden="true">
            <span>UNIT&nbsp;&nbsp;/&nbsp;&nbsp;{robot.unit}</span>
            <span>CLASS&nbsp;/&nbsp;&nbsp;{robot.classification}</span>
          </div>
        </div>
      </div>
      {robot.details ? (
        <div className="robot-details" data-robot="details">
          <div className="robot-details-heading">
            <p>{robot.details.title}</p>
            <span>UNIT / {robot.unit}</span>
          </div>
          <div className="robot-details-copy">
            {robot.details.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
