"use client";

import { useEffect, useState } from "react";
import { sharedProfile } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

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
    <>
      <a className="skip-link" href="#about">
        {t.skipLink}
      </a>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <a href="#top" className="nav__logo" data-cursor="hover">
          <span className="nav__mark" aria-hidden="true" />
          AA
        </a>

        <nav className="nav__links" aria-label="Primary">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} data-cursor="hover">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "fr" ? "is-active" : ""}
              aria-pressed={lang === "fr"}
              onClick={() => setLang("fr")}
              data-cursor="hover"
            >
              FR
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={lang === "en" ? "is-active" : ""}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
              data-cursor="hover"
            >
              EN
            </button>
          </div>

          <a
            className="nav__email"
            href={`mailto:${sharedProfile.email}`}
            data-cursor="hover"
          >
            {sharedProfile.email}
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
        </div>

        <div className={`nav__drawer ${open ? "is-open" : ""}`}>
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${sharedProfile.email}`}
            onClick={() => setOpen(false)}
          >
            {sharedProfile.email}
          </a>
        </div>
      </header>
    </>
  );
}
