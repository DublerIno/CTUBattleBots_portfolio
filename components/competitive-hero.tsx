export function CompetitiveHero() {
  return (
    <section className="competitive-hero" aria-labelledby="competitive-title">
      <div className="hero-copy">
        <h1 id="competitive-title" className="hero-title">
          <span className="hero-ctu">CTU</span>
          <span>BATTLEBOTS</span>
        </h1>
        <div className="hero-meta">
          <span>COMPETITIVE ROBOTICS</span>
          <span>PRAGUE</span>
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        <span className="scroll-measurements">−20&nbsp;&nbsp;−10&nbsp;&nbsp;0&nbsp;&nbsp;10&nbsp;&nbsp;20</span>
        <span className="scroll-rule" />
        <span className="scroll-label">SCROLL</span>
      </div>
    </section>
  );
}
