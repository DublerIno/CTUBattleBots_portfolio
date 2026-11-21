"use client";

import Image from "next/image";
import { useState } from "react";
import { ctuUrl, felUrl } from "@/lib/site-links";

const videoId = "9jV3kjrHPvQ";

export function BattlebotsHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section className="battlebots-hero" aria-labelledby="battlebots-title">
      <a className="hero-ctu-mark" href={ctuUrl} target="_blank" rel="noopener noreferrer" aria-label="Web ČVUT (otevře se v nové kartě)">
        <Image src={`${assetBasePath}/ctu-logo-white.svg`} alt="Znak ČVUT" width={160} height={160} priority />
      </a>
      <div className="battlebots-hero-copy">
        <h1 id="battlebots-title" className="battlebots-title">
          <span>OVER</span>
          <span>ENGINEERED</span>
        </h1>
        <p className="battlebots-lead">
          Jsme nový tým studentů Fakulty elektrotechnické ČVUT v Praze. Pracujeme na bojových robotech
          určených pro soutěže BattleBots a Českou ligu bojových robotů.
        </p>
        <div className="hero-institution-links" aria-label="Institucionální odkazy">
          <a href={ctuUrl} target="_blank" rel="noopener noreferrer">ČVUT</a>
          <a href={felUrl} target="_blank" rel="noopener noreferrer">FEL ČVUT</a>
        </div>
      </div>

      <div className="battlebots-video">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Meet Melty! Antweight Battlebot — Overengineered CTU FEE"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            className="battlebots-video-poster"
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Přehrát video týmu Overengineered na YouTube"
          >
            <Image
              src={`${assetBasePath}/melty-youtube-thumbnail.jpg`}
              alt="Původní náhled videa Meet Melty! z YouTube kanálu Overengineered"
              fill
              priority
              sizes="(max-width: 960px) 100vw, 47vw"
            />
            <span className="video-play-icon" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none"><path d="m25 18 23 14-23 14V18Z" fill="currentColor" /></svg></span>
          </button>
        )}
        {!isPlaying && <span className="battlebots-video-label" aria-hidden="true">VIDEO / 01</span>}
        <i className="registration registration-top" aria-hidden="true" />
        <i className="registration registration-bottom" aria-hidden="true" />
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span className="scroll-measurements">−20&nbsp;&nbsp;−10&nbsp;&nbsp;0&nbsp;&nbsp;10&nbsp;&nbsp;20</span>
        <span className="scroll-rule" />
        <span className="scroll-label">SCROLL</span>
      </div>
    </section>
  );
}
