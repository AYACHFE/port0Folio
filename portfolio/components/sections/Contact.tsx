"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="section__inner">
        <Reveal>
          <SectionLabel index="07" label="Contact" />
          <h2 className="section__title">
            Let’s talk systems, migrations, or the next product.
          </h2>
        </Reveal>

        <div className="contact__layout">
          <Reveal>
            <ul className="contact__channels">
              <li>
                <span>Email</span>
                <a href={`mailto:${profile.email}`} data-cursor="hover">
                  {profile.email}
                </a>
              </li>
              {/* <li>
                <span>Phone</span>
                <a href={profile.phoneHref} data-cursor="hover">
                  {profile.phone}
                </a>
              </li> */}
              <li>
                <span>LinkedIn</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                >
                  Connect
                </a>
              </li>
              <li>
                <span>GitHub</span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                >
                  View profile
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="contact__form" onSubmit={onSubmit}>
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="you@domain.com"
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="What are we building?"
                  required
                />
              </label>
              <button type="submit" className="btn btn--solid" data-cursor="hover">
                {sent ? "Queued — form is a preview" : "Send message"}
              </button>
              {sent && (
                <p className="contact__note">
                  This form is a visual placeholder. Reach me directly at{" "}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
