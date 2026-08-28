"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#top" className="nav__logo" data-cursor="hover">
        <span className="nav__mark" aria-hidden="true" />
        AA
      </a>

      <nav className="nav__links" aria-label="Primary">
        {nav.map((item) => (
          <a key={item.href} href={item.href} data-cursor="hover">
            {item.label}
          </a>
        ))}
      </nav>

      <a
        className="nav__email"
        href={`mailto:${profile.email}`}
        data-cursor="hover"
      >
        {profile.email}
      </a>

      <button
        className={`nav__burger ${open ? "is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <div className={`nav__drawer ${open ? "is-open" : ""}`}>
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
          {profile.email}
        </a>
      </div>
    </header>
  );
}
