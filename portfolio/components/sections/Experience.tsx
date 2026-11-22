"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section experience">
      <div className="section__inner">
        <Reveal>
          <SectionLabel index="03" label={t.experience.label} />
          <h2 className="section__title">{t.experience.title}</h2>
        </Reveal>

        <ol className="timeline">
          {t.experience.jobs.map((job, i) => (
            <li key={job.id} className="timeline__item">
              <Reveal delay={i * 0.08}>
                <div className="timeline__card">
                  <div className="timeline__when">
                    <span className={job.current ? "is-live" : ""}>
                      {job.period}
                    </span>
                    <span className="timeline__loc">{job.location}</span>
                    {job.current && <em>{t.experience.currentBadge}</em>}
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
              <p className="platforms__kicker">{t.experience.platformsKicker}</p>
              <p className="platforms__sub">{t.experience.platformsSub}</p>
            </div>
            <div className="platforms__grid">
              {t.experience.platforms.map((platform) => (
                <article key={platform.name} className="platform-card">
                  <div className="platform-card__top">
                    <span className="platform-card__name">{platform.name}</span>
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="platform-card__url"
                      data-cursor="hover"
                    >
                      {platform.domain} ↗
                    </a>
                  </div>
                  <p className="platform-card__desc">{platform.description}</p>
                  <p className="platform-card__mobile">{platform.mobileNote}</p>
                  <div className="platform-card__links">
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="platform-pill"
                      data-cursor="hover"
                    >
                      {t.experience.platformLinksLabel.web} ↗
                    </a>
                    {platform.iosUrl && (
                      <a
                        href={platform.iosUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="platform-pill"
                        data-cursor="hover"
                      >
                        {t.experience.platformLinksLabel.ios} ↗
                      </a>
                    )}
                    {platform.androidUrl && (
                      <a
                        href={platform.androidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="platform-pill"
                        data-cursor="hover"
                      >
                        {t.experience.platformLinksLabel.android} ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
