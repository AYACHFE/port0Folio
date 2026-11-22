"use client";

import { sharedProfile } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="site-footer__row">
        <p className="site-footer__name">
          {sharedProfile.name}
          <span> / {t.footer.role}</span>
        </p>
        <p className="site-footer__copy">
          © {year} — {t.footer.copy}
        </p>
        <a href="#top" className="site-footer__top" data-cursor="hover">
          {t.footer.top}
        </a>
      </div>
    </footer>
  );
}
