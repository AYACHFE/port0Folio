"use client";

import { useRef, type MouseEvent } from "react";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const shine = useRef<HTMLSpanElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -9;
    const ry = (px - 0.5) * 11;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    if (shine.current) {
      shine.current.style.opacity = "1";
      shine.current.style.background = `radial-gradient(420px circle at ${px * 100}% ${py * 100}%, rgba(0,229,255,0.14), transparent 42%)`;
    }
  };

  const onLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    }
    if (shine.current) shine.current.style.opacity = "0";
  };

  return (
    <article
      ref={ref}
      className="project-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor="hover"
    >
      <span ref={shine} className="project-card__shine" aria-hidden="true" />
      <div className="project-card__meta">
        <span className="project-card__id">{project.id}</span>
        <span className="project-card__mark" aria-hidden="true">
          ↗
        </span>
      </div>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>
      <ul className="project-card__tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
