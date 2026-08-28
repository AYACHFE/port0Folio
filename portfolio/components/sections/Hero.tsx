"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const root = useRef<HTMLElement>(null);

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
          <span>01</span> / Introduction
        </p>
        <p className="hero__status">
          <span className="pulse" />
          System online
        </p>

        <h1 className="hero__name">
          <span className="hero__clip">
            <span>{profile.firstName}</span>
          </span>
          <span className="hero__clip">
            <span>{profile.lastName}</span>
          </span>
        </h1>

        <p className="hero__title">{profile.title}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <MagneticButton href="#contact">Contact</MagneticButton>
          {/* <MagneticButton href="/Aymane_Achfennar_CV.pdf" variant="ghost" download>
            Download CV
          </MagneticButton> */}
          <MagneticButton href={profile.github} variant="line" external>
            GitHub
          </MagneticButton>
        </div>
      </div>

      <div className="hero__hud">
        <div>
          <span>Lat</span>
          {profile.coords.lat}
        </div>
        <div>
          <span>Lng</span>
          {profile.coords.lng}
        </div>
        <div>
          <span>Node</span>
          {profile.location}
        </div>
        <a href="#about" className="hero__scroll" data-cursor="hover">
          <span>Scroll</span>
          <i />
        </a>
      </div>
    </section>
  );
}
