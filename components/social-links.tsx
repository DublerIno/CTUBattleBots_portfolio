import { socialLinks } from "@/lib/site-links";

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["name"] }) {
  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.6" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`social-links ${className}`} aria-label="Sociální sítě">
      {socialLinks.map(({ name, href }) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Overengineered na ${name} (otevře se v nové kartě)`}>
          <SocialIcon name={name} />
          <span>{name}</span>
        </a>
      ))}
    </div>
  );
}
