"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Listings", href: "/listings" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  variant?: "default" | "cinematic";
}

export function Navbar({ variant = "default" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const isCinematic = variant === "cinematic";
  const shellClass = isCinematic ? "nav-cinematic" : "liquid-glass";
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[70] px-6 pt-5 md:px-12 lg:px-16">
      <div className="pointer-events-auto">
        <nav
          className={`${shellClass} relative flex items-center justify-between rounded-xl px-4 py-2`}
        >
          <Link
            href="/"
            onClick={closeMenu}
            className={`cursor-pointer tracking-tight sm:text-xl md:text-2xl ${
              isCinematic ? "font-display text-lg text-text" : "text-lg font-semibold text-text"
            }`}
          >
            Protonix Estate
          </Link>
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex lg:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`cursor-pointer text-sm transition-colors ${
                    isCinematic ? "text-muted hover:text-text" : "text-muted hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden cursor-pointer rounded-lg px-6 py-2 text-sm font-medium transition-colors lg:inline-flex ${
                isCinematic
                  ? "bg-accent text-ink hover:bg-jet"
                  : "bg-accent text-ink hover:bg-jet"
              }`}
            >
              Start a Chat
            </Link>
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border border-[color:var(--color-line)] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span
                className={`h-0.5 w-5 bg-text transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-5 bg-text transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-5 bg-text transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
        {open ? (
          <div className={`${shellClass} mt-3 rounded-xl p-4 lg:hidden`}>
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block cursor-pointer rounded-lg px-3 py-3 text-sm font-medium text-text transition-colors hover:bg-surface-raised"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-3 block cursor-pointer rounded-lg bg-accent px-4 py-3 text-center text-sm font-medium text-ink transition-colors hover:bg-jet"
            >
              Start a Chat
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
