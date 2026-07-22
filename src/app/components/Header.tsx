"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-xl font-bold text-ink"
          onClick={() => setIsOpen(false)}
        >
          Rukayat<span className="text-ink-soft">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-charcoal transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-charcoal text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-charcoal-dark transition-colors"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-ink"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden border-t border-line bg-white px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-ink-soft">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-charcoal transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 block text-center bg-charcoal text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-charcoal-dark transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  );
}