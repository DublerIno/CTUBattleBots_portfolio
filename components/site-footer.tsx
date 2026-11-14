import { TransitionLink } from "@/components/page-transition";
import { SocialLinks } from "@/components/social-links";
import { ctuUrl, felUrl } from "@/lib/site-links";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-identity">
        <span className="footer-heading">OVERENGINEERED</span>
        <p>Studentský tým — aktivita ČVUT v Praze a Fakulty elektrotechnické.</p>
      </div>
      <div className="footer-contact">
        <span className="footer-heading">ODPOVĚDNÁ OSOBA ZA OBSAH</span>
        <span>Ondřej Šponer</span>
        <a href="mailto:sponeond@fel.cvut.cz">sponeond@fel.cvut.cz</a>
      </div>
      <div className="footer-links">
        <nav aria-label="Odkazy v zápatí">
          <TransitionLink href="/">ÚVOD</TransitionLink>
          <a href={ctuUrl} target="_blank" rel="noopener noreferrer">ČVUT</a>
          <a href={felUrl} target="_blank" rel="noopener noreferrer">FEL ČVUT</a>
        </nav>
        <SocialLinks className="footer-social-links" />
      </div>
    </footer>
  );
}
