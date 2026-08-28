import { projects } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section__inner">
        <Reveal>
          <SectionLabel index="04" label="Selected work" />
          <h2 className="section__title">
            Systems that had to survive contact with production.
          </h2>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
