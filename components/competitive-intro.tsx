export function CompetitiveIntro() {
  return (
    <section className="competitive-intro" aria-label="O projektu CTU BattleBots">
      <div className="competitive-intro-copy">
        <p className="competitive-intro-index">COMPETITIVE / PRAGUE</p>
        <p className="competitive-intro-lead">
          Jsme nový tým studentů Fakulty elektrotechnické ČVUT v Praze. Pracujeme na bojových robotech
          určených pro soutěže BattleBots a Českou ligu bojových robotů.
        </p>
        <p className="competitive-intro-body">
          Aktuálně vyvíjíme roboty pro hmotnostní kategorie Antweight do 150 g a Beetleweight do 1,5 kg.
          Zaměřujeme se především na konstrukci typu melty brain — robota, jehož celé rotující šasi funguje
          zároveň jako zbraň.
        </p>
      </div>
      <div className="competitive-video" role="img" aria-label="Prostor pro připravované video týmu a robota">
        <span>VIDEO / 01</span>
        <i className="registration registration-top" aria-hidden="true" />
        <i className="registration registration-bottom" aria-hidden="true" />
      </div>
    </section>
  );
}
