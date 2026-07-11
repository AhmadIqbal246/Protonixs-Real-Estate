import Link from "next/link";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import { contactInfo } from "@/lib/data/contact-info";

const footerLinks = [
  { label: "Properties", href: "#featured-properties" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/20 bg-black/25 px-6 py-12 backdrop-blur-sm md:px-12 lg:px-16">
      <ScrollReveal variant="fade-up">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-white drop-shadow-md">Protonix Estate</p>
            <p className="mt-3 max-w-xs text-sm text-white/90 drop-shadow-sm">
              Premium real estate advisory for buyers, sellers, and investors who move with purpose.
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/75 drop-shadow-sm">
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
                    className="cursor-pointer text-sm font-medium text-white drop-shadow-sm transition-colors hover:text-white/75"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-sm text-white drop-shadow-sm">
            <a
              href={`mailto:${contactInfo.email}`}
              className="cursor-pointer transition-colors hover:text-white/75"
            >
              {contactInfo.email}
            </a>
            <p className="mt-1">
              <a
                href={`tel:${contactInfo.phone}`}
                className="cursor-pointer transition-colors hover:text-white/75"
              >
                {contactInfo.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 text-white/75">{contactInfo.office}</p>
            <p className="mt-1 text-white/75">{contactInfo.hours}</p>
          </div>
        </div>
        <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/80 drop-shadow-sm">
          &copy; {new Date().getFullYear()} Protonix Estate. All rights reserved.
        </p>
      </ScrollReveal>
    </footer>
  );
}
