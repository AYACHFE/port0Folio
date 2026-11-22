"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section projects">
      <div className="section__inner">
        <Reveal>
          <SectionLabel index="04" label={t.projects.label} />
          <h2 className="section__title">{t.projects.title}</h2>
        </Reveal>

        <div className="projects__grid">
          {t.projects.items.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
