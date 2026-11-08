"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const photos = [
  { src: "workbench.webp", width: 1600, height: 1067, alt: "Sestavování robota na pracovním stole" },
  { src: "electronics.webp", width: 1600, height: 900, alt: "Pájení elektroniky bojového robota" },
  { src: "sketching.webp", width: 1600, height: 900, alt: "Návrh robota u pracovního stolu" },
  { src: "arena-01.webp", width: 1600, height: 900, alt: "Boj robotů v aréně" },
  { src: "arena-02.webp", width: 1600, height: 900, alt: "Robot v aréně během soutěže" },
  { src: "event.webp", width: 1600, height: 900, alt: "Diváci sledují soutěž bojových robotů" },
  { src: "spinning-robot.webp", width: 1600, height: 900, alt: "Rotující robot během ukázky" },
] as const;

export function HomePhotoStrip() {
  const railRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const updatePosition = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const maxScroll = rail.scrollWidth - rail.clientWidth;
    setCanScroll(maxScroll > 1);
    setPosition(maxScroll > 0 ? rail.scrollLeft / maxScroll : 0);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const observer = new ResizeObserver(updatePosition);
    observer.observe(rail);
    for (const child of rail.children) observer.observe(child);
    updatePosition();
    return () => observer.disconnect();
  }, [updatePosition]);

  function scroll(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    const photoWidth = rail.querySelector<HTMLElement>(".home-photo")?.offsetWidth ?? rail.clientWidth;
    rail.scrollBy({ left: direction * (photoWidth + 12), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <section className="home-photo-strip" aria-label="Fotografie z dílny a soutěží">
      <div className="home-photo-rail" ref={railRef} onScroll={updatePosition} tabIndex={0} aria-label="Fotogalerie, posuňte vodorovně">
        {photos.map((photo) => (
          <figure className="home-photo" key={photo.src}>
            <Image
              src={`${assetBasePath}/gallery/${photo.src}`}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 560px) 78vw, (max-width: 960px) 62vw, 48vw"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
      <div className="home-photo-controls" aria-label="Ovládání fotogalerie">
        <button type="button" onClick={() => scroll(-1)} aria-label="Předchozí fotografie" disabled={!canScroll || position < 0.005}>
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M27 16H5m9-9-9 9 9 9" stroke="currentColor" strokeWidth="1.3" /></svg>
        </button>
        <div className="home-photo-progress" aria-hidden="true"><span style={{ left: `${position * 82}%` }} /></div>
        <button type="button" onClick={() => scroll(1)} aria-label="Další fotografie" disabled={!canScroll || position > 0.995}>
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M5 16h22m-9-9 9 9-9 9" stroke="currentColor" strokeWidth="1.3" /></svg>
        </button>
      </div>
    </section>
  );
}
