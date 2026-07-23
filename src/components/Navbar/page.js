"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300  bg-[rgba(8,8,16,0.92)] backdrop-blur-xl border-b border-[var(--color-border)]
"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-xl font-bold tracking-tight"
        >
          rakib<span style={{ color: "var(--color-accent-cyan)" }}>4</span>kbd
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-text-primary)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-muted)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #00d4ff, #a855f7)",
            color: "#fff",
          }}
        >
          Hire Me
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              background: "var(--color-text-primary)",
              transform: menuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              background: "var(--color-text-primary)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              background: "var(--color-text-primary)",
              transform: menuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4"
          style={{
            background: "rgba(8, 8, 16, 0.98)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-center"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #a855f7)",
                  color: "#fff",
                }}
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
