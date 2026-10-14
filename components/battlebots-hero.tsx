export function BattlebotsHero() {
  const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section className="battlebots-hero" aria-labelledby="battlebots-title">
      <div className="battlebots-hero-copy">
        <h1 id="battlebots-title" className="battlebots-title">
          <span>OVER</span>
          <span>ENGINEERED</span>
        </h1>
        <p className="battlebots-lead">
          Jsme nový tým studentů Fakulty elektrotechnické ČVUT v Praze. Pracujeme na bojových robotech
          určených pro soutěže BattleBots a Českou ligu bojových robotů.
        </p>
      </div>

      <div className="battlebots-video">
        <video
          controls
          playsInline
          preload="none"
          poster={`${assetBasePath}/melty-showcase-poster.webp`}
          aria-label="Ukázkové video týmu Overengineered a robota MELTY / 01"
        >
          <source src={`${assetBasePath}/melty-showcase.mp4`} type="video/mp4" />
          Váš prohlížeč nepodporuje přehrávání videa.
        </video>
        <span className="battlebots-video-label" aria-hidden="true">VIDEO / 01</span>
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
