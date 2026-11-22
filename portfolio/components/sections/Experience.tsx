import { experience, platforms } from "@/lib/data";
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
                    <span className="timeline__loc">{job.location}</span>
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

        <Reveal delay={0.16}>
          <div className="platforms">
            <div className="platforms__header">
              <p className="platforms__kicker">Shipped Platforms</p>
              <p className="platforms__sub">
                Live on the web, with native iOS &amp; Android apps available
                under the same names.
              </p>
            </div>
            <div className="platforms__grid">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-card"
                  data-cursor="hover"
                >
                  <div className="platform-card__top">
                    <span className="platform-card__name">{platform.name}</span>
                    <span className="platform-card__url">
                      {platform.domain} ↗
                    </span>
                  </div>
                  <p className="platform-card__desc">{platform.description}</p>
                  <p className="platform-card__mobile">{platform.mobile}</p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
