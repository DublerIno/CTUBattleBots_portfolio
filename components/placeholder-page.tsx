import type { ReactNode } from "react";

type PlaceholderPageProps = {
  label?: string;
  title: ReactNode;
  subtitle: string;
  status: string;
  variant: "education" | "team";
};

export function PlaceholderPage({ label, title, subtitle, status, variant }: PlaceholderPageProps) {
  return (
    <section className={`placeholder-page placeholder-${variant}`}>
      <div className="placeholder-copy">
        {label ? (
          <p className="placeholder-label">
            <span>{label}</span>
            <i aria-hidden="true" />
          </p>
        ) : null}
        <h1>{title}</h1>
        <p className="placeholder-subtitle">{subtitle}</p>
      </div>
      <div className="placeholder-object" aria-hidden="true">
        <span className="object-cross object-cross-top" />
        <span className="object-cross object-cross-bottom" />
      </div>
      <p className="placeholder-status">{status}</p>
    </section>
  );
}
