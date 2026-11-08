import { TransitionLink } from "@/components/page-transition";

const destinations = [
  { href: "/battlebots", title: "BATTLEBOTS", description: "Podívejte se, na čem pracujeme." },
  { href: "/akce", title: "AKCE", description: "Kde nás potkáte." },
  { href: "/tym", title: "TÝM", description: "Přidejte se i vy." },
];

export function HomeDestinations() {
  return (
    <section className="home-destinations" aria-label="Prozkoumejte web">
      <div className="destination-list">
        {destinations.map((destination) => (
          <TransitionLink className="destination-link" href={destination.href} key={destination.href}>
            <span className="destination-title">{destination.title}</span>
            <span className="destination-description">{destination.description}</span>
            <svg className="destination-arrow" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M5 16h21m-9-9 9 9-9 9" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </TransitionLink>
        ))}
      </div>
    </section>
  );
}
