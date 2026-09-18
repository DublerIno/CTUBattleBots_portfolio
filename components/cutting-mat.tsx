"use client";

import { useEffect, useRef } from "react";

const topScale = ["00", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"];
const sideScale = ["00", "02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22", "24"];

export function CuttingMat() {
  const matRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mat = matRef.current;
    const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mat || !precisePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    let nextX = window.innerWidth * 0.5;
    let nextY = window.innerHeight * 0.5;

    const paint = () => {
      mat.style.setProperty("--pointer-x", `${nextX}px`);
      mat.style.setProperty("--pointer-y", `${nextY}px`);
      frame = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      nextX = event.clientX;
      nextY = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={matRef} className="cutting-mat" aria-hidden="true">
      <div className="mat-grain" />
      <div className="mat-light" />
      <div className="mat-ruler mat-ruler-top">
        {topScale.map((number, index) => (
          <span key={`${number}-${index}`}>{number}</span>
        ))}
      </div>
      <div className="mat-ruler mat-ruler-side">
        {sideScale.map((number, index) => (
          <span key={`${number}-${index}`}>{number}</span>
        ))}
      </div>
    </div>
  );
}
