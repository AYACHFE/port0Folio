import { profile } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner">
        <Reveal>
          <SectionLabel index="02" label="About" />
        </Reveal>

        <div className="about__layout">
          <Reveal>
            <h2 className="about__heading">
              Backend-minded.
              <br />
              Product-aware.
              <br />
              <em>Systems first.</em>
            </h2>
          </Reveal>

          <div className="about__copy">
            <Reveal delay={0.08}>
              <p>{profile.summary}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="about__aside">
                Now based in Paris at 42, after two years building production
                platforms at Koolskools — from modernizing legacy Django
                monoliths and AWS infrastructure to shipping applied AI across
                web and mobile.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <dl className="about__facts">
                <div>
                  <dt>Focus</dt>
                  <dd>Full-Stack · Mobile · Applied AI</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>Django · React · React Native · AWS</dd>
                </div>
                <div>
                  <dt>Based</dt>
                  <dd>{profile.location}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
