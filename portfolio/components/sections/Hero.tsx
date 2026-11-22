"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { sharedProfile } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.45 });
      tl.from(".hero__kicker, .hero__status", {
        y: 16,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      })
        .from(
          ".hero__name span",
          {
            yPercent: 110,
            duration: 1.05,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .from(
          ".hero__title, .hero__tagline, .hero__actions, .hero__hud",
          {
            y: 24,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.55",
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="hero">
      <div className="hero__grid">
        <p className="hero__kicker">
          <span>01</span> / {t.hero.kicker}
        </p>
        <p className="hero__status">
          <span className="pulse" />
          {t.hero.status}
        </p>

        <h1 className="hero__name">
          <span className="hero__clip">
            <span>{sharedProfile.firstName}</span>
          </span>
          <span className="hero__clip">
            <span>{sharedProfile.lastName}</span>
          </span>
        </h1>

        <p className="hero__title">{t.hero.title}</p>
        <p className="hero__tagline">{t.hero.tagline}</p>

        <div className="hero__actions">
          <MagneticButton href="#contact">{t.hero.contactCta}</MagneticButton>
          <MagneticButton
            href={sharedProfile.cvHref}
            variant="ghost"
            download
          >
            {t.hero.cvCta}
          </MagneticButton>
          <MagneticButton href={sharedProfile.github} variant="line" external>
            {t.hero.githubCta}
          </MagneticButton>
        </div>
      </div>

      <div className="hero__hud">
        <div>
          <span>Lat</span>
          {sharedProfile.coords.lat}
        </div>
        <div>
          <span>Lng</span>
          {sharedProfile.coords.lng}
        </div>
        <div>
          <span>{t.hero.hudNodeLabel}</span>
          {t.hero.location}
        </div>
        <a href="#about" className="hero__scroll" data-cursor="hover">
          <span>{t.hero.scroll}</span>
          <i />
        </a>
      </div>
    </section>
  );
}
