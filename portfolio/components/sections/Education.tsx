import { education } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Education() {
  return (
    <section id="education" className="section education">
      <div className="section__inner">
        <Reveal>
          <SectionLabel index="05" label="Education" />
        </Reveal>

        <Reveal delay={0.08}>
          <article className="edu-card">
            <div className="edu-card__top">
              <p className="edu-card__period">{education.period}</p>
              <p className="edu-card__field">{education.field}</p>
            </div>
            <h2>
              {education.school}
              <span> {education.campus}</span>
            </h2>
            <p>{education.note}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
