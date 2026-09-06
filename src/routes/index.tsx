import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import heroPhoto from "@/assets/hero-operations.webp";
import indiaMapPhoto from "@/assets/india-map.webp";
import {
  CAREER_EMAIL,
  EMAIL,
  Footer,
  Header,
  LINKEDIN,
  MobileBar,
  PHONE,
  PHONE_DIAL,
  Reveal,
  WHATSAPP,
} from "@/components/site";
import { services } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WISDOM | Manpower, Security, HR & Facility Services in India" },
      {
        name: "description",
        content:
          "WISDOM provides manpower, security, end-to-end HR support, facility management, water tank cleaning and solar panel cleaning for businesses in Jamshedpur and across India.",
      },
      {
        property: "og:title",
        content: "WISDOM | Manpower, Security, HR & Facility Services in India",
      },
      {
        property: "og:description",
        content:
          "Reliable manpower, security, HR and facility services for businesses across India. Based in Jamshedpur, Jharkhand.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

/* ------------------------------- hero ------------------------------- */

function Hero() {
  return (
    <section className="hero" id="top">
      <img
        className="hero-photo"
        src={heroPhoto}
        alt="WISDOM supervisor and site team at work inside an Indian industrial facility"
        width={1600}
        height={900}
        fetchPriority="high"
      />
      <div className="hero-veil" />
      <div className="hero-inner">
        <div className="wrap">
          <p className="eyebrow">Business Services | Jamshedpur, Jharkhand</p>
          <h1>
            Think Wisdom.
            <br />
            <em>Service You Can Trust.</em>
          </h1>
          <p className="hero-copy">
            Reliable manpower, security, HR and facility services for businesses across India.
          </p>
          <div className="actions">
            <a className="btn primary" href="#contact">
              Request a Quote
            </a>
            <a className="btn outline" href={WHATSAPP} target="_blank" rel="noopener">
              WhatsApp Us
            </a>
          </div>
          <p className="hero-trust">
            Supporting industrial, commercial and operational requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- what we do ---------------------------- */

const sectors = [
  "Industrial & Manufacturing",
  "Warehousing & Logistics",
  "Corporate & Commercial",
  "Retail & Malls",
  "Institutions & Communities",
  "Project & Site Operations",
];

function WhatWeDo() {
  return (
    <section id="services">
      <Reveal>
        <div className="section-head">
          <div className="kicker">What We Do</div>
          <h2 className="section-title">Six services. One trusted team.</h2>
          <p className="section-desc">
            Whatever your business needs, WISDOM provides the right people and practical support
            to complete the work properly.
          </p>
        </div>

        <div className="service-card-grid">
          {services.map((service) => (
            <article className="service-card" key={service.slug}>
              {service.photo && (
                <Link
                  className={`service-card-photo${service.slug === "facility-management" ? " facility-photo-frame" : ""}`}
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  aria-label={`View ${service.name}`}
                >
                  <img src={service.photo} alt={service.alt ?? service.name} loading="lazy" />
                </Link>
              )}
              <div className="service-card-body">
                <h3>
                  <Link to="/services/$slug" params={{ slug: service.slug }}>
                    {service.name}
                  </Link>
                </h3>
                <p>{service.short}</p>
                <Link
                  className="service-card-link"
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  aria-label={`View details for ${service.name}`}
                >
                  View service <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="sector-line">
          WISDOM supports requirements across:
          {sectors.map((sector) => (
            <span className="sector" key={sector}>
              {sector}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}

/* ------------------------------ why wisdom --------------------------- */

const whyPoints = [
  ["Reliable People", "People who turn up and do the work properly."],
  ["Practical Service", "Clear scope, sensible planning, no overselling."],
  ["Site Supervision", "On-site checks keep work and attendance on track."],
  ["Workforce Coordination", "Straightforward coordination day to day."],
  ["One Point of Contact", "One team for people, security and site services."],
];

const howWeWork = [
  ["01", "Understand", "We understand your requirement."],
  ["02", "Plan", "We identify the people, skills and service structure required."],
  ["03", "Deploy", "Suitable people and services are deployed."],
  ["04", "Support", "We coordinate with the client for ongoing requirements."],
];

function Why() {
  return (
    <section id="why">
      <Reveal>
        <div className="section-head">
          <div className="kicker">Why WISDOM</div>
          <h2 className="section-title">Experienced people. Clear accountability.</h2>
          <p className="section-desc">
            Practical support for day-to-day operations, backed by clear communication and site
            supervision.
          </p>
        </div>

        <div className="why-grid">
          {whyPoints.map(([title, copy]) => (
            <div className="why-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>

        <div className="how-head">How We Work</div>
        <div className="approach-grid">
          {howWeWork.map(([num, title, copy]) => (
            <div className="step" key={num}>
              <div className="num">{num}</div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* --------------------------- reach + experience ---------------------- */

const MAP_MARKS = [
  { n: "Mathura, Uttar Pradesh", x: 33.26, y: 31.38 },
  { n: "Patna, Bihar", x: 57.46, y: 37.3 },
  { n: "Jamshedpur, Jharkhand", x: 60.83, y: 45.98 },
  { n: "Angul, Odisha", x: 57.33, y: 52.09 },
  { n: "Pune, Maharashtra", x: 20.92, y: 59.31 },
];

const clients = [
  ["Ecopack Services Private Limited", "Packaging and industrial operations"],
  ["Vacmet India Limited", "Manufacturing and industrial site"],
  ["Unite Mall, Jamshedpur", "Commercial and retail facility"],
];

function Reach() {
  return (
    <section className="footprint" id="reach">
      <Reveal>
        <div className="section-head">
          <div className="kicker">Our Reach</div>
          <h2 className="section-title">Current Service Footprint</h2>
        </div>
        <div className="reach-grid">
          <div className="map-holder">
            <div className="map-figure">
              <img
                className="india-map-img"
                src={indiaMapPhoto}
                alt="Map of India marking the locations where WISDOM currently provides services"
                width={354}
                height={412}
                loading="lazy"
              />
              {MAP_MARKS.map((mark) => (
                <span
                  key={mark.n}
                  className="map-mark"
                  style={{ left: `${mark.x}%`, top: `${mark.y}%` }}
                  title={mark.n}
                />
              ))}
            </div>
            <div className="reach-note">
              <h3>Growing Across India</h3>
              <p>
                WISDOM is building its operational presence across industrial and commercial
                locations in India.
              </p>
              <p className="reach-states">
                Currently serving selected locations across:
                <b>Uttar Pradesh | Odisha | Jharkhand | Bihar | Maharashtra</b>
              </p>
            </div>
          </div>

          <div className="footprint-side">
            <div className="footer-title">Experience</div>
            <div className="client-list">
              {clients.map(([name]) => (
                <div className="client" key={name}>
                  <b>{name}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------------- leadership + careers --------------------- */

const careerRoles = [
  "Security Guard",
  "Security Supervisor",
  "Facility Supervisor",
  "Technical / Skilled Roles",
  "Skilled Technician / Operator",
  "Unsolicited Application",
];

function LeadershipCareers() {
  const [status, setStatus] = useState<{ text: string; ok: boolean } | null>(null);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("_honey")) return;

    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    if (!name || !phone || !email || !fd.get("role")) {
      setStatus({
        text: "Please add your name, phone number, email and the role you are applying for.",
        ok: false,
      });
      return;
    }
    if (!/^[+\d][\d\s-]{7,17}$/.test(phone)) {
      setStatus({ text: "Please enter a valid phone number.", ok: false });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus({ text: "Please enter a valid email address.", ok: false });
      return;
    }

    setSending(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CAREER_EMAIL}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) throw new Error("Delivery failed");
      setStatus({
        text: "Thank you. Your details have been sent to the WISDOM recruitment desk.",
        ok: true,
      });
      form.reset();
    } catch {
      const body = [...fd.entries()]
        .filter(([k]) => !k.startsWith("_"))
        .map(([k, v]) => `${k}: ${String(v)}`)
        .join("\n");
      window.location.href = `mailto:${CAREER_EMAIL}?subject=${encodeURIComponent(
        "Job application from WISDOM website",
      )}&body=${encodeURIComponent(body)}`;
      setStatus({
        text: "We could not confirm direct delivery, so your email app is opening as a backup. Please send that email so your application reaches us.",
        ok: false,
      });
    }
    setSending(false);
  };

  return (
    <section id="careers" className="careers">
      <Reveal>
        <div className="section-head">
          <div className="kicker">Leadership</div>
          <h2 className="section-title">People behind WISDOM.</h2>
        </div>
        <div className="founders">
          <article className="founder">
            <div className="founder-head">
              <div className="initials" aria-hidden="true">
                MS
              </div>
              <div>
                <h3>Manoj Kumar Singh</h3>
                <div className="role">Co-Founder | Security &amp; Field Operations</div>
              </div>
            </div>
            <p>
              Manoj brings experience in security and field operations, with a background in the
              Central Reserve Police Force followed by industrial security. He looks after manpower
              deployment, site discipline and day-to-day operations.
            </p>
          </article>
          <article className="founder">
            <div className="founder-head">
              <div className="initials" aria-hidden="true">
                AK
              </div>
              <div>
                <h3>Abhishek Kumar</h3>
                <div className="role">Co-Founder | Business Development &amp; Facility Operations</div>
              </div>
            </div>
            <p>
              Abhishek looks after client requirements, business development and facility
              operations, and works on building practical service plans for each site.
            </p>
          </article>
        </div>

        <div className="section-head careers-head">
          <div className="kicker">Careers</div>
          <h2 className="section-title">Work With WISDOM</h2>
          <p className="section-desc">
            Looking for your next opportunity? Tell us about your experience and the kind of role
            you are looking for.
          </p>
        </div>

        <form className="form careers-form" onSubmit={onSubmit} noValidate>
          <input type="hidden" name="_subject" value="Job application from WISDOM website" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="_honey"
            style={{ position: "absolute", left: "-9999px" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="form-row">
            <div className="field">
              <label htmlFor="c-name">Full Name *</label>
              <input id="c-name" name="name" maxLength={100} required />
            </div>
            <div className="field">
              <label htmlFor="c-phone">Phone *</label>
              <input id="c-phone" name="phone" type="tel" inputMode="tel" maxLength={20} required />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="c-email">Email *</label>
              <input id="c-email" name="email" type="email" maxLength={160} required />
            </div>
            <div className="field">
              <label htmlFor="c-city">City / Location</label>
              <input id="c-city" name="city" maxLength={80} />
            </div>
          </div>
          <div className="form-row">
            <div className="field full">
              <label htmlFor="c-role">Role Applying For *</label>
              <select id="c-role" name="role" required defaultValue="">
                <option value="" disabled>
                  Select a role
                </option>
                {careerRoles.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="field full">
              <label htmlFor="c-message">Experience (brief)</label>
              <textarea
                id="c-message"
                name="experience"
                maxLength={800}
                placeholder="Where you have worked and for how long"
              />
            </div>
          </div>
          <button className="submit" type="submit" disabled={sending}>
            {sending ? "Sending..." : "Apply Now"}
          </button>
          <p className="note">
            Applications are sent to <a href={`mailto:${CAREER_EMAIL}`}>{CAREER_EMAIL}</a>.
          </p>
          {status && (
            <p className={status.ok ? "status ok" : "status error"} role="status">
              {status.text}
            </p>
          )}
        </form>
      </Reveal>
    </section>
  );
}

/* ------------------------------- contact ----------------------------- */

const serviceOptions = [
  "Manpower",
  "Security",
  "End-to-End HR Support",
  "Facility Management",
  "Water Tank Cleaning",
  "Solar Panel Cleaning",
  "Other",
];

function Contact() {
  const [service, setService] = useState("");
  const [status, setStatus] = useState<{ text: string; ok: boolean } | null>(null);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("_honey")) return;

    const name = String(fd.get("name") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    if (!name || !company || !phone || !email || !fd.get("service")) {
      setStatus({
        text: "Please fill in your name, company, phone, email and select a service.",
        ok: false,
      });
      return;
    }
    if (!/^[+\d][\d\s-]{7,17}$/.test(phone)) {
      setStatus({ text: "Please enter a valid phone number.", ok: false });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus({ text: "Please enter a valid email address.", ok: false });
      return;
    }

    setSending(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) throw new Error("Delivery failed");
      setStatus({
        text: "Thank you. Your enquiry has been sent to WISDOM and we will get back to you.",
        ok: true,
      });
      form.reset();
      setService("");
    } catch {
      const body = [...fd.entries()]
        .filter(([k]) => !k.startsWith("_"))
        .map(([k, v]) => `${k}: ${String(v)}`)
        .join("\n");
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        "Enquiry from WISDOM website",
      )}&body=${encodeURIComponent(body)}`;
      setStatus({
        text: "We could not confirm direct delivery, so your email app is opening as a backup. Please send that email so your enquiry reaches us.",
        ok: false,
      });
    }
    setSending(false);
  };

  return (
    <section className="contact" id="contact">
      <Reveal>
        <div className="section-head">
          <div className="kicker">Have a Requirement?</div>
          <h2 className="section-title">
            Let us discuss how WISDOM can support your people, security or site requirements.
          </h2>
          <p className="section-desc">
            Tell us what you need. Our team will review your requirement and get in touch to
            discuss the next steps.
          </p>
        </div>
        <div className="contact-grid">
          <form className="form" onSubmit={onSubmit} noValidate>
            <input type="hidden" name="_subject" value="New enquiry from WISDOM website" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="text"
              name="_honey"
              style={{ position: "absolute", left: "-9999px" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-name">Name *</label>
                <input id="f-name" name="name" maxLength={100} required />
              </div>
              <div className="field">
                <label htmlFor="f-company">Company *</label>
                <input id="f-company" name="company" maxLength={120} required />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-phone">Phone *</label>
                <input id="f-phone" name="phone" type="tel" inputMode="tel" maxLength={20} required />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email *</label>
                <input id="f-email" name="email" type="email" maxLength={160} required />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-location">Location</label>
                <input id="f-location" name="location" maxLength={100} />
              </div>
              <div className="field">
                <label htmlFor="service">Service Required *</label>
                <select
                  id="service"
                  name="service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="field full">
                <label htmlFor="f-message">Message</label>
                <textarea
                  id="f-message"
                  name="message"
                  maxLength={1000}
                  placeholder="Tell us a little about what you need"
                />
              </div>
            </div>
            <button className="submit" type="submit" disabled={sending}>
              {sending ? "Sending..." : "Request a Quote"}
            </button>
            {status && (
              <p className={status.ok ? "status ok" : "status error"} role="status">
                {status.text}
              </p>
            )}
          </form>

          <div className="contact-info">
            <h3>Reach WISDOM directly.</h3>
            <a className="contact-link" href={`tel:${PHONE_DIAL}`}>
              Call {PHONE}
            </a>
            <a className="contact-link" href={WHATSAPP} target="_blank" rel="noopener">
              WhatsApp Us
            </a>
            <a className="contact-link" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a className="contact-link" href={`mailto:${CAREER_EMAIL}`}>
              {CAREER_EMAIL}
            </a>
            <a className="contact-link" href={LINKEDIN} target="_blank" rel="noopener">
              WISDOM on LinkedIn
            </a>

            <div className="address">
              <b>Head / Registered Office</b>
              <br />
              House No. 15, Road No. 2B, Chhota Govindpur
              <br />
              Jamshedpur, East Singhbhum, Jharkhand - 831004
              <br />
              <br />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------------------- faq -------------------------------- */

const faqs = [
  [
    "What kind of manpower do you provide?",
    "Skilled, semi-skilled and general workers, deployed with proper supervision and attendance tracking.",
  ],
  [
    "Do you provide security for industrial and commercial sites?",
    "Yes. We deploy trained guards and supervisors for industrial sites, commercial buildings, offices and malls.",
  ],
  [
    "Can you support hiring from sourcing to onboarding?",
    "Yes. We support requirements, candidate sourcing, screening, interview coordination, documentation, joining and onboarding.",
  ],
  [
    "Can you provide facility and site cleaning services?",
    "Yes. We provide floor cleaning, machine based cleaning, housekeeping support, site upkeep and workplace hygiene services.",
  ],
];

function Faq() {
  return (
    <section className="faq" id="faq">
      <Reveal>
        <div className="section-head">
          <div className="kicker">FAQ</div>
          <h2 className="section-title">Common questions.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WISDOM",
  description:
    "Manpower, security, end-to-end HR support, facility management, water tank cleaning and solar panel cleaning for businesses in Jamshedpur, Jharkhand and across India.",
  telephone: PHONE_DIAL,
  email: EMAIL,
  sameAs: [LINKEDIN],
  address: {
    "@type": "PostalAddress",
    streetAddress: "House No. 15, Road No. 2B, Chhota Govindpur",
    addressLocality: "Jamshedpur",
    addressRegion: "Jharkhand",
    postalCode: "831004",
    addressCountry: "IN",
  },
  areaServed: "IN",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};


function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <WhatWeDo />
        <Why />
        <Reach />
        <LeadershipCareers />
        <Faq />
        <Contact />

      </main>
      <MobileBar />
      <Footer />
    </>
  );
}
