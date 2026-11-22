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

        <div className="edu-list">
          {education.map((item, i) => (
            <Reveal key={item.id} delay={0.08 * (i + 1)}>
              <article className="edu-card">
                <div className="edu-card__top">
                  <div className="edu-card__meta">
                    <p
                      className={`edu-card__period ${item.current ? "is-live" : ""}`}
                    >
                      {item.period}
                    </p>
                    {item.current && (
                      <em className="edu-card__badge">Current</em>
                    )}
                  </div>
                  <p className="edu-card__field">{item.field}</p>
                </div>
                <h2>
                  {item.school}
                  {!item.school.includes(item.campus) && (
                    <span> ({item.campus})</span>
                  )}
                </h2>
                <p>{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
