import Link from "next/link";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import { contactInfo } from "@/lib/data/contact-info";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Listings", href: "/listings" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

interface FooterProps {
  variant?: "default" | "cinematic";
}

export function Footer({ variant = "default" }: FooterProps) {
  const isCinematic = variant === "cinematic";
  return (
    <footer
      className={`relative border-t px-6 py-12 md:px-12 lg:px-16 ${
        isCinematic
          ? "border-[color:var(--color-line)] bg-surface/90 backdrop-blur-sm"
          : "border-[color:var(--color-line)] bg-surface/80 backdrop-blur-sm"
      }`}
    >
      <ScrollReveal variant="fade-up">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p
              className={`tracking-tight ${
                isCinematic
                  ? "font-display text-2xl text-text"
                  : "font-display text-2xl text-text"
              }`}
            >
              Protonix Estate
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Premium real estate advisory for buyers, sellers, and investors who move with purpose.
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              From first-time purchases to portfolio growth, we guide every step with local expertise
              and transparent advice.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="cursor-pointer text-sm font-medium text-text transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-sm text-muted">
            <a
              href={`mailto:${contactInfo.email}`}
              className="cursor-pointer transition-colors hover:text-accent"
            >
              {contactInfo.email}
            </a>
            <p className="mt-1">
              <a
                href={`tel:${contactInfo.phone}`}
                className="cursor-pointer transition-colors hover:text-accent"
              >
                {contactInfo.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 text-muted">{contactInfo.office}</p>
            <p className="mt-1 text-muted">{contactInfo.hours}</p>
          </div>
        </div>
        <p className="mt-10 border-t border-[color:var(--color-line)] pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Protonix Estate. All rights reserved.
        </p>
      </ScrollReveal>
    </footer>
  );
}
