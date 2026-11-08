import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Tým" };

export default function TeamPage() {
  return (
    <main id="main-content">
      <section className="team-page" aria-labelledby="team-title">
        <div className="team-heading">
          <p className="section-label"><span>TÝM</span><i aria-hidden="true" /></p>
          <h1 id="team-title"><span>OVER</span><span>ENGINEERED</span></h1>
          <p className="team-location">CTU PRAGUE</p>
          <div className="team-copy">
            <p>Náš tým aktuálně tvoří osm studentů programu Kybernetika a robotika na Fakultě elektrotechnické ČVUT v Praze.</p>
            <p>Aktivně hledáme nové členy. Pokud se chcete něco naučit, pracovat na skutečném robotu a stát se součástí týmu, napište nám.</p>
            <p>Zapojit se můžete do návrhu elektroniky, mechanické konstrukce, vývoje řídicích algoritmů, autonomního řízení nebo stavby vlastního battlebota.</p>
            <a href="mailto:sponeond@fel.cvut.cz">sponeond@fel.cvut.cz</a>
          </div>
        </div>
        <div className="team-photo">
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/team.webp`} alt="Členové týmu Overengineered na veřejné akci" fill sizes="(max-width: 960px) 100vw, 45vw" />
          <i className="object-cross object-cross-top" aria-hidden="true" />
          <i className="object-cross object-cross-bottom" aria-hidden="true" />
        </div>
      </section>
    </main>
  );
}
