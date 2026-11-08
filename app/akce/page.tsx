import type { Metadata } from "next";

export const metadata: Metadata = { title: "Akce" };

const upcoming = [{ name: "MAKER FAIRE PRAGUE", date: "22. 5. 2027", dateTime: "2027-05-22" }];
const past = [
  { name: "NOC VĚDY", date: "25. 9. 2026", dateTime: "2026-09-25" },
  { name: "MAKER FAIRE BRNO", date: "17.–18. 10. 2026", dateTime: "2026-10-17" },
];

function EventGroup({ title, events, start }: { title: string; events: typeof upcoming; start: number }) {
  return (
    <section className="event-group" aria-label={title}>
      <h2 className="event-group-title">{title}</h2>
      <div className="events-schedule">
        {events.map((event, index) => (
          <article className="event-row" key={event.name}>
            <span className="event-number" aria-hidden="true">{String(index + start).padStart(2, "0")}</span>
            <h3>{event.name}</h3>
            <time dateTime={event.dateTime}>{event.date}</time>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function EventsPage() {
  return (
    <main id="main-content">
      <section className="events-page" aria-labelledby="events-title">
        <div className="events-copy">
          <p className="section-label"><span>AKCE</span><i aria-hidden="true" /></p>
          <h1 id="events-title">AKCE</h1>
          <p className="events-intro">Pro návštěvníky akcí připravujeme malé roboty kategorie Antweight, se kterými si mohou sami vyzkoušet souboj.</p>
        </div>
        <div className="event-groups">
          <EventGroup title="NADCHÁZEJÍCÍ" events={upcoming} start={1} />
          <EventGroup title="PROBĚHLÉ" events={past} start={2} />
        </div>
        <div className="events-object" aria-hidden="true">
          <span className="object-cross object-cross-top" />
          <span className="object-cross object-cross-bottom" />
        </div>
      </section>
    </main>
  );
}
