"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <header className="relative z-50 px-6 pt-6 md:px-12 lg:px-16">
      <nav className="liquid-glass relative flex items-center justify-between rounded-xl px-4 py-2">
        <Link
          href="/"
          onClick={closeMenu}
          className="cursor-pointer text-lg font-semibold tracking-tight sm:text-xl md:text-2xl"
        >
          Protonix Estate
        </Link>
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="cursor-pointer text-sm transition-colors hover:text-gray-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden cursor-pointer rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100 md:inline-flex"
          >
            Start a Chat
          </Link>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border border-white/20 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>
      {open && (
        <div className="liquid-glass mt-3 rounded-xl border border-white/20 p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block cursor-pointer rounded-lg px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-3 block cursor-pointer rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-black transition-colors hover:bg-gray-100"
          >
            Start a Chat
          </Link>
        </div>
      )}
    </header>
  );
}
