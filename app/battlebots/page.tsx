import type { Metadata } from "next";
import Image from "next/image";
import { TransitionLink } from "@/components/page-transition";
import { robots } from "@/lib/robots";

export const metadata: Metadata = { title: "Battlebots" };

export default function BattlebotsGalleryPage() {
  return (
    <main id="main-content" className="battlebots-gallery-page">
      <header className="gallery-heading">
        <p className="section-label"><span>BATTLEBOTS</span><i aria-hidden="true" /></p>
        <h1>NAŠI BATTLEBOTS</h1>
      </header>
      <div className="specimen-grid" aria-label="Naši bojoví roboti">
        {robots.map((robot) => (
          <TransitionLink className="specimen-tile" href={`/battlebots/${robot.slug}`} key={robot.slug}>
            <span className="specimen-tile-image">
              {robot.image.src ? <Image src={robot.image.src} alt={robot.image.alt} fill sizes="(max-width: 720px) calc(100vw - 2.3rem), (max-width: 1100px) 45vw, 30vw" /> : null}
            </span>
            <span className="specimen-tile-meta"><span>{robot.name}</span><span>{robot.classification}</span></span>
            <svg className="specimen-tile-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.4" /></svg>
            <i className="registration registration-top" aria-hidden="true" />
            <i className="registration registration-bottom" aria-hidden="true" />
          </TransitionLink>
        ))}
        <div className="specimen-tile specimen-tile-tba" aria-label="Další robot bude oznámen později">
          <span className="specimen-tba-text">TBA</span>
          <i className="registration registration-top" aria-hidden="true" />
          <i className="registration registration-bottom" aria-hidden="true" />
        </div>
      </div>
    </main>
  );
}
