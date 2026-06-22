import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialIcons";
import { site } from "@/data/site";
import { footerNav } from "@/data/navigation";
import logo from "@/assets/logo/logo-transparent.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-border">
      <Container>
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="PurePressa" className="h-12 w-auto" />
            <p className="text-sm leading-relaxed text-body max-w-xs">
              {site.tagline}. Fresh, cold-pressed juices made locally in
              Calgary.
            </p>
            <SocialLinks socials={site.socials} />
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-ink mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerNav.shop.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-sm text-body hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-ink mb-4">Company</h4>
            <ul className="space-y-2">
              {footerNav.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-sm text-body hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-ink mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-body">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-2 text-sm text-body">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>
                  {site.address}
                  <br />
                  {site.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-border text-center text-sm text-muted">
          <p>
            © {currentYear} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
