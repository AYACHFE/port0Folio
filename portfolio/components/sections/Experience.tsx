import { experience } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__inner">
        <Reveal>
          <SectionLabel index="03" label="Experience" />
          <h2 className="section__title">Where the work happened.</h2>
        </Reveal>

        <ol className="timeline">
          {experience.map((job, i) => (
            <li key={job.id} className="timeline__item">
              <Reveal delay={i * 0.08}>
                <div className="timeline__card">
                  <div className="timeline__when">
                    <span className={job.current ? "is-live" : ""}>
                      {job.period}
                    </span>
                    {job.current && <em>Current</em>}
                  </div>
                  <h3>
                    {job.role}
                    <span> — {job.company}</span>
                  </h3>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
