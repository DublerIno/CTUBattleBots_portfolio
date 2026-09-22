import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <main id="main-content">
      <section className="team-page" aria-labelledby="team-title">
        <div className="team-heading">
          <p className="section-label">
            <span>TEAM</span>
            <i aria-hidden="true" />
          </p>
          <h1 id="team-title">
            CTU
            <br />
            BATTLEBOTS
          </h1>
          <p className="team-location">PRAGUE</p>
        </div>

        <div className="team-photo" role="img" aria-label="Prostor pro připravovanou fotografii týmu">
          <span>FOTOGRAFIE TÝMU</span>
          <i className="object-cross object-cross-top" aria-hidden="true" />
          <i className="object-cross object-cross-bottom" aria-hidden="true" />
        </div>

        <div className="team-copy">
          <p>Náš tým aktuálně tvoří osm studentů programu Kybernetika a robotika na Fakultě elektrotechnické ČVUT v Praze.</p>
          <p>
            Aktivně hledáme nové členy. Pokud se chcete něco naučit, pracovat na skutečném robotu a stát se
            součástí týmu, napište nám.
          </p>
          <p>
            Zapojit se můžete do návrhu elektroniky, mechanické konstrukce, vývoje řídicích algoritmů,
            autonomního řízení nebo stavby vlastního battlebota.
          </p>
          <a href="mailto:sponeond@fel.cvut.cz">sponeond@fel.cvut.cz</a>
        </div>
      </section>
    </main>
  );
}
