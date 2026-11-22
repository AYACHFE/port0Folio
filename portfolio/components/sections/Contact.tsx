"use client";

import { FormEvent, useState } from "react";
import { sharedProfile } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

type SubmitState = "idle" | "submitting" | "sent" | "fallback";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<SubmitState>("idle");
  const [fallbackHref, setFallbackHref] = useState<string>(
    `mailto:${sharedProfile.email}`,
  );

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const website = String(data.get("website") || "").trim();

    const mailtoUrl = `mailto:${sharedProfile.email}?subject=${encodeURIComponent(
      `Portfolio — ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    setFallbackHref(mailtoUrl);
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }

      setStatus("fallback");
    } catch {
      setStatus("fallback");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="section__inner">
        <Reveal>
          <SectionLabel index="07" label={t.contact.label} />
          <h2 className="section__title">{t.contact.title}</h2>
        </Reveal>

        <div className="contact__layout">
          <Reveal>
            <ul className="contact__channels">
              <li>
                <span>{t.contact.channels.email}</span>
                <a href={`mailto:${sharedProfile.email}`} data-cursor="hover">
                  {sharedProfile.email}
                </a>
              </li>
              <li>
                <span>{t.contact.channels.linkedin}</span>
                <a
                  href={sharedProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                >
                  {t.contact.channels.linkedinCta}
                </a>
              </li>
              <li>
                <span>{t.contact.channels.github}</span>
                <a
                  href={sharedProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                >
                  {t.contact.channels.githubCta}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="contact__form" onSubmit={onSubmit}>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="contact__hp"
                aria-hidden="true"
              />
              <label>
                {t.contact.form.nameLabel}
                <input
                  name="name"
                  type="text"
                  placeholder={t.contact.form.namePlaceholder}
                  required
                />
              </label>
              <label>
                {t.contact.form.emailLabel}
                <input
                  name="email"
                  type="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  required
                />
              </label>
              <label>
                {t.contact.form.messageLabel}
                <textarea
                  name="message"
                  rows={5}
                  placeholder={t.contact.form.messagePlaceholder}
                  required
                />
              </label>
              <button
                type="submit"
                className="btn btn--solid"
                disabled={status === "submitting"}
                data-cursor="hover"
              >
                {status === "submitting"
                  ? t.contact.form.submitting
                  : t.contact.form.submit}
              </button>
              {status === "sent" && (
                <p className="contact__note contact__note--success" role="status">
                  {t.contact.form.success}
                </p>
              )}
              {status === "fallback" && (
                <p className="contact__note" role="status">
                  {t.contact.form.errorFallback}{" "}
                  <a href={fallbackHref}>{t.contact.form.mailtoCta}</a>
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
