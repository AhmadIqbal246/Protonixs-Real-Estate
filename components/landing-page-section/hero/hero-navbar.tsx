"use client";

const navLinks = ["Story", "Investing", "Building", "Advisory"];

export function HeroNavbar() {
  return (
    <header className="relative z-10 px-6 pt-6 md:px-12 lg:px-16">
      <nav className="liquid-glass relative flex items-center justify-between rounded-xl px-4 py-2">
        <span className="text-xl font-semibold tracking-tight md:text-2xl">Protonix Estate</span>
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="cursor-pointer text-sm transition-colors hover:text-gray-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="cursor-pointer rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100"
        >
          Start a Chat
        </button>
      </nav>
    </header>
  );
}
