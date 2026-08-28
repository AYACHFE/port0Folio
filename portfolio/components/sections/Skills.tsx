import { skills } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__inner">
        <Reveal>
          <SectionLabel index="06" label="Capabilities" />
          <h2 className="section__title">The toolkit, grouped by job to be done.</h2>
        </Reveal>

        <div className="skills__grid">
          {skills.map((group, i) => (
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
