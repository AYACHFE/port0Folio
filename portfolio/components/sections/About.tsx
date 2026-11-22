"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about">
      <div className="section__inner">
        <Reveal>
          <SectionLabel index="02" label={t.about.label} />
        </Reveal>

        <div className="about__layout">
          <Reveal>
            <h2 className="about__heading">
              {t.about.headingLines[0]}
              <br />
              {t.about.headingLines[1]}
              <br />
              <em>{t.about.headingLines[2]}</em>
            </h2>
          </Reveal>

          <div className="about__copy">
            <Reveal delay={0.08}>
              <p>{t.about.summary}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="about__aside">{t.about.aside}</p>
            </Reveal>
            <Reveal delay={0.22}>
              <dl className="about__facts">
                <div>
                  <dt>{t.about.facts.focusLabel}</dt>
                  <dd>{t.about.facts.focusValue}</dd>
                </div>
                <div>
                  <dt>{t.about.facts.stackLabel}</dt>
                  <dd>{t.about.facts.stackValue}</dd>
                </div>
                <div>
                  <dt>{t.about.facts.basedLabel}</dt>
                  <dd>{t.about.facts.basedValue}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
