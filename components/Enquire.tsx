"use client";

import { useState } from "react";

const ENQUIRY_EMAIL = "captain@myhana.com";

type Fields = {
  name: string;
  email: string;
  dates: string;
  party: string;
  message: string;
};

const EMPTY: Fields = { name: "", email: "", dates: "", party: "", message: "" };

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export default function Enquire() {
  const [f, setF] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setF((prev) => ({ ...prev, [k]: e.target.value }));
      setErrors((prev) => ({ ...prev, [k]: undefined }));
    };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!f.name.trim()) next.name = "Please tell us your name.";
    if (!isEmail(f.email)) next.email = "Please enter a valid email.";
    if (!f.dates.trim()) next.dates = "Roughly when would you like to charter?";
    if (!f.party.trim()) next.party = "How many guests in your party?";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const body =
      `Name: ${f.name}\n` +
      `Email: ${f.email}\n` +
      `Preferred dates: ${f.dates}\n` +
      `Party size: ${f.party}\n\n` +
      `${f.message || "I would like to enquire about chartering HANA."}\n`;

    const href =
      `mailto:${ENQUIRY_EMAIL}` +
      "?subject=" +
      encodeURIComponent("HANA Charter Enquiry") +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = href;
    setSent(true);
  };

  return (
    <section className="enquire" id="enquire">
      <div className="wrap">
        <div className="glass reveal">
          <p className="availability">
            Now taking enquiries for the 2026 Mediterranean season
          </p>
          <p className="area">Mediterranean · Summer &amp; Winter seasons</p>

          {sent ? (
            <div className="enquire-thanks" role="status">
              <h3>Thank you</h3>
              <p>
                Your email client should have opened with your enquiry ready to
                send. If it didn&apos;t, write to us directly at{" "}
                <a href={`mailto:${ENQUIRY_EMAIL}`}>{ENQUIRY_EMAIL}</a>.
              </p>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  setF(EMPTY);
                  setSent(false);
                }}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="enquire-form" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="enq-name">Name</label>
                <input
                  id="enq-name"
                  type="text"
                  value={f.name}
                  onChange={set("name")}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "enq-name-err" : undefined}
                />
                {errors.name && (
                  <span className="err" id="enq-name-err">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="field">
                <label htmlFor="enq-email">Email</label>
                <input
                  id="enq-email"
                  type="email"
                  value={f.email}
                  onChange={set("email")}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "enq-email-err" : undefined}
                />
                {errors.email && (
                  <span className="err" id="enq-email-err">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="field">
                <label htmlFor="enq-dates">Preferred dates</label>
                <input
                  id="enq-dates"
                  type="text"
                  placeholder="e.g. first two weeks of July"
                  value={f.dates}
                  onChange={set("dates")}
                  aria-invalid={!!errors.dates}
                  aria-describedby={errors.dates ? "enq-dates-err" : undefined}
                />
                {errors.dates && (
                  <span className="err" id="enq-dates-err">
                    {errors.dates}
                  </span>
                )}
              </div>

              <div className="field">
                <label htmlFor="enq-party">Party size</label>
                <input
                  id="enq-party"
                  type="text"
                  placeholder="e.g. 8 guests, 2 children"
                  value={f.party}
                  onChange={set("party")}
                  aria-invalid={!!errors.party}
                  aria-describedby={errors.party ? "enq-party-err" : undefined}
                />
                {errors.party && (
                  <span className="err" id="enq-party-err">
                    {errors.party}
                  </span>
                )}
              </div>

              <div className="field field-wide">
                <label htmlFor="enq-message">Anything else (optional)</label>
                <textarea
                  id="enq-message"
                  rows={4}
                  value={f.message}
                  onChange={set("message")}
                />
              </div>

              <div className="enquire-actions">
                <button type="submit" className="btn">
                  Send enquiry
                </button>
                <a className="btn btn-ghost" href="/hana-brochure.pdf" download>
                  Download Brochure
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
