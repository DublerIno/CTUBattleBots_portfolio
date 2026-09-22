import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
};

const events = [
  { name: "NOC VĚDY", date: "25. 9. 2026", dateTime: "2026-09-25" },
  { name: "MAKER FAIRE BRNO", date: "17.–18. 10. 2026", dateTime: "2026-10-17" },
];

export default function EventsPage() {
  return (
    <main id="main-content">
      <section className="events-page" aria-labelledby="events-title">
        <div className="events-copy">
          <p className="section-label">
            <span>EVENTS</span>
            <i aria-hidden="true" />
          </p>
          <h1 id="events-title">EVENTS</h1>
          <p className="events-intro">
            Pro návštěvníky akcí připravujeme malé roboty kategorie Antweight, se kterými si mohou sami
            vyzkoušet souboj.
          </p>
        </div>

        <div className="events-schedule" aria-label="Připravované akce">
          {events.map((event, index) => (
            <article className="event-row" key={event.name}>
              <span className="event-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{event.name}</h2>
              <time dateTime={event.dateTime}>{event.date}</time>
            </article>
          ))}
        </div>

        <div className="events-object" aria-hidden="true">
          <span className="object-cross object-cross-top" />
          <span className="object-cross object-cross-bottom" />
        </div>
      </section>
    </main>
  );
}
