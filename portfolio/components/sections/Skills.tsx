"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section skills">
      <div className="section__inner">
        <Reveal>
          <SectionLabel index="06" label={t.skills.label} />
          <h2 className="section__title">{t.skills.title}</h2>
        </Reveal>

        <div className="skills__grid">
          {t.skills.groups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.07}>
              <div className="skill-group">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
