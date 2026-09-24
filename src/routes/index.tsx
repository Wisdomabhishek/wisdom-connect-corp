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
      { title: "WISDOM | Manpower, Security, Facility & HR Solutions in India" },
      {
        name: "description",
        content:
          "WISDOM provides manpower, security, facility management and HR support solutions for organisations across education, healthcare, manufacturing, corporate, hospitality, retail and other sectors in India.",
      },
      {
        property: "og:title",
        content: "WISDOM | Manpower, Security, Facility & HR Solutions in India",
      },
      {
        property: "og:description",
        content:
          "Reliable people and operational support for organisations across India. WISDOM provides manpower, security, facility management and HR support solutions.",
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
         <p className="eyebrow">
  WORKFORCE • SECURITY • FACILITY • HR SOLUTIONS
</p>
          <h1>
            Think Wisdom.
            <br />
            <em>Service You Can Trust.</em>
          </h1>
          <p className="hero-copy">
  Reliable people, secure sites and practical operational support for
  organisations across India.
</p>
          <p className="hero-trust">
  People. Facilities. Operations. One Trusted Partner.
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


function WhatWeDo() {
  return (
    <section id="services">
      <Reveal>
        <div className="section-head">
          <div className="kicker">Our Services</div>

<h2 className="section-title">
  Supporting your people. Managing your operations.
</h2>

<p className="section-desc">
  WISDOM provides dependable manpower, security, facility management and HR
  support solutions designed around the everyday operational needs of our clients.
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

      </Reveal>
    </section>
  );
}
const sectorsWeServe = [
  {
    icon: "🎓",
    title: "Education & Universities",
    intro: "Supporting institutions that shape the future.",
    description:
      "Manpower and facility support for universities, colleges, schools, hostels and educational campuses.",
    support:
      "Lab Assistants • Clinical Tutors • Office Assistants • Hostel Staff • Housekeeping • Security • Campus Support",
  },
  {
    icon: "🏥",
    title: "Healthcare & Hospitals",
    intro: "Supporting safe, clean and well-managed healthcare environments.",
    description:
      "Workforce and facility support for hospitals, clinics and healthcare institutions, with a focus on dependable non-clinical operational manpower.",
    support:
      "Ward Attendants • Patient Care Assistants • Housekeeping • Office Support • Security • Facility Staff",
  },
  {
    icon: "🏭",
    title: "Manufacturing & Industrial",
    intro: "Keeping industrial operations supported and workforce-ready.",
    description:
      "Skilled, semi-skilled and general manpower, security, housekeeping and facility support for factories, plants, warehouses and industrial facilities.",
    support:
      "Skilled Manpower • General Manpower • Security • Housekeeping • Warehouse Support • Site Operations",
  },
  {
    icon: "🏢",
    title: "Corporate & Commercial",
    intro: "Creating efficient workplaces that work better.",
    description:
      "Office support, housekeeping, security, facility management and administrative manpower for corporate offices and commercial establishments.",
    support:
      "Office Support • Administration • Housekeeping • Security • Facility Support",
  },
  {
    icon: "🏨",
    title: "Hospitality",
    intro: "Supporting the people behind great guest experiences.",
    description:
      "Housekeeping, cleaning, security, facility and operational manpower solutions for hotels, resorts, guest houses and hospitality establishments.",
    support:
      "Housekeeping • Cleaning • Security • Facility Support • General Manpower",
  },
  {
    icon: "🛍️",
    title: "Retail & Shopping",
    intro: "Helping customer-facing environments run smoothly.",
    description:
      "Manpower, housekeeping, security and facility services for retail outlets, shopping centres, malls and commercial spaces.",
    support:
      "Security • Housekeeping • Facility Staff • General Support • Customer-facing Support",
  },
  {
    icon: "🏛️",
    title: "Government & Public Institutions",
    intro: "Supporting essential public-facing operations.",
    description:
      "Manpower, housekeeping, security, office support and facility services for public institutions and associated facilities.",
    support:
      "Security • Office Support • Housekeeping • Facility Staff • General Manpower",
  },
  {
    icon: "🏗️",
    title: "Infrastructure & Construction",
    intro: "Supporting projects from site operations to completion.",
    description:
      "General and skilled manpower, site support, housekeeping, security and operational assistance for infrastructure, construction and project sites.",
    support:
      "Site Manpower • Skilled Workers • Security • Housekeeping • Site Support",
  },
  {
    icon: "🏠",
    title: "Residential Communities",
    intro: "Helping communities stay safe, clean and well managed.",
    description:
      "Security, housekeeping, cleaning, facility and operational manpower for residential societies, apartments and managed communities.",
    support:
      "Security • Housekeeping • Cleaning • Facility Support • General Manpower",
  },
];

function SectorsWeServe() {
  return (
    <section className="sectors-section" id="sectors">
      <Reveal>
        <div className="section-head">
          <div className="kicker">Sectors We Serve</div>

          <h2 className="section-title">
            Reliable people and operational support for organisations across India.
          </h2>

          <p className="section-desc">
            WISDOM delivers flexible manpower, security, facility management and
            HR support solutions designed around the operational needs of
            different industries.
          </p>
        </div>

        <div className="sectors-grid">
          {sectorsWeServe.map((sector) => (
            <article className="sector-card" key={sector.title}>
              <div className="sector-icon" aria-hidden="true">
                {sector.icon}
              </div>

              <h3>{sector.title}</h3>

              <strong>{sector.intro}</strong>

              <p>{sector.description}</p>

              <div className="sector-support">
                <span>Typical support</span>
                <p>{sector.support}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------ why wisdom --------------------------- */

const whyPoints = [
  [
    "Sector Understanding",
    "Solutions shaped around the practical requirements of your industry and workplace.",
  ],
  [
    "Workforce Assurance",
    "Structured sourcing, screening and deployment to support dependable workforce operations.",
  ],
  [
    "Responsive Management",
    "Clear communication and responsive coordination for day-to-day requirements.",
  ],
  [
    "Integrated Solutions",
    "Manpower, security, facility and HR support through one coordinated partner.",
  ],
  [
    "Transparent Reporting",
    "Clear coordination, attendance visibility and operational communication.",
  ],
  [
    "Operational Continuity",
    "Reliable support designed to help organisations maintain smooth daily operations.",
  ],
];

const howWeWork = [
  ["01", "Understand", "We understand your requirement, site environment and operational priorities."],
  ["02", "Plan", "We define the people, skills, service structure and deployment requirements."],
  ["03", "Source & Screen", "We identify suitable personnel and complete the required screening and coordination."],
  ["04", "Deploy", "People and services are deployed according to the agreed scope and requirements."],
  ["05", "Manage", "Our team coordinates attendance, communication and ongoing operational requirements."],
  ["06", "Monitor & Improve", "We review service performance and work with clients to improve continuity and delivery."],
];

function Why() {
  return (
    <section id="why">
      <Reveal>
        <div className="section-head">
          <div className="kicker">The WISDOM Advantage</div>
          <h2 className="section-title">People, service and accountability working together.</h2>
          <p className="section-desc">
            WISDOM combines workforce support with practical operational coordination to help
            organisations manage their day-to-day requirements with greater confidence.
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

function SpecialisedSolutions() {
  const solutions = [
    {
      title: "WISDOM Campus Support",
      copy:
        "Flexible workforce and operational support for universities, colleges and educational campuses.",
      support:
        "Lab Assistants · Clinical Tutors · Office Assistants · Hostel Staff · Housekeeping · Security",
    },
    {
      title: "WISDOM Healthcare Support",
      copy:
        "Reliable support personnel for hospitals, healthcare facilities and clinical environments.",
      support:
        "Ward Attendants · Patient Care Assistants · Housekeeping · Office Support · Security · Facility Staff",
    },
    {
      title: "WISDOM Industrial Support",
      copy:
        "Workforce and site support designed for manufacturing, industrial and operational environments.",
      support:
        "Skilled Manpower · General Manpower · Warehouse Support · Security · Housekeeping · Site Operations",
    },
  ];

  return (
    <section className="specialised-section">
      <Reveal>
        <div className="section-head">
          <div className="kicker">Specialised Solutions</div>
          <h2 className="section-title">
            Workforce solutions built around your environment.
          </h2>
          <p className="section-desc">
            From campuses and healthcare facilities to industrial sites, WISDOM
            provides people and operational support aligned with the way your
            organisation works.
          </p>
        </div>

        <div className="why-grid">
          {solutions.map((solution) => (
            <div className="why-card" key={solution.title}>
              <h3>{solution.title}</h3>
              <p>{solution.copy}</p>
              <div className="sector-support">
                {solution.support}
              </div>
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
    <section>
      <Reveal>
        <div className="section-head">
          <div className="kicker">Our Footprint</div>
          <h2 className="section-title">Growing with organisations across India.</h2>
          <p className="section-desc">
            WISDOM is building a growing service network across key regions of
            India, supporting organisations with workforce, security, facility
            and HR solutions.
          </p>
        </div>

        <div className="reach-grid">
          <div className="map-wrap">
            <img
              src={indiaMap}
              alt="WISDOM service footprint across India"
              className="india-map"
            />

            <div className="map-dot dot-mathura">
              <span>Mathura</span>
            </div>

            <div className="map-dot dot-patna">
              <span>Patna</span>
            </div>

            <div className="map-dot dot-jamshedpur">
              <span>Jamshedpur</span>
            </div>

            <div className="map-dot dot-angul">
              <span>Angul</span>
            </div>

            <div className="map-dot dot-pune">
              <span>Pune</span>
            </div>
          </div>

          <div className="reach-copy">
            <div className="how-head">Current Service Regions</div>

            <p>
              Our current service footprint includes organisations and
              opportunities across:
            </p>

            <div className="region-list">
              <span>Uttar Pradesh</span>
              <span>Odisha</span>
              <span>Jharkhand</span>
              <span>Bihar</span>
              <span>Maharashtra</span>
            </div>

            <p>
              As our client network grows, WISDOM continues to expand its
              workforce and operational support capabilities across new
              locations.
            </p>
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
        <h2 className="section-title">Built on experience. Driven by people.</h2>
        <p className="section-desc">
          WISDOM is led by a team focused on dependable service, operational
          discipline and long-term client relationships.
        </p>
      </div>

      <div className="founders">
        <article className="founder">
          <div className="founder-head">
            <div className="initials" aria-hidden="true">
              MS
            </div>
            <div>
              <h3>Manoj Kumar Singh</h3>
              <div className="role">
                Co-Founder | Security &amp; Field Operations
              </div>
            </div>
          </div>

          <p>
            Manoj brings experience in security and field operations, with a
            background in the Central Reserve Police Force followed by
            industrial security. He focuses on manpower deployment, site
            discipline and day-to-day field operations.
          </p>
        </article>

        <article className="founder">
          <div className="founder-head">
            <div className="initials" aria-hidden="true">
              AK
            </div>
            <div>
              <h3>Abhishek Kumar</h3>
              <div className="role">
                Co-Founder | Business Development &amp; Facility Operations
              </div>
            </div>
          </div>

          <p>
            Abhishek focuses on client requirements, business development and
            facility operations, working with clients to develop practical
            service plans around their operational needs.
          </p>
        </article>
      </div>

      <div className="section-head careers-head">
        <div className="kicker">Careers</div>
        <h2 className="section-title">Build Your Future With WISDOM</h2>
        <p className="section-desc">
          Behind every successful service is a capable and committed team.
          Tell us about your experience and the kind of opportunity you are
          looking for.
        </p>
      </div>

      <form className="form careers-form" onSubmit={onSubmit} noValidate>
        <input
          type="hidden"
          name="_subject"
          value="Job application from WISDOM website"
        />
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
            <input
              id="c-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              maxLength={20}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label htmlFor="c-email">Email *</label>
            <input
              id="c-email"
              name="email"
              type="email"
              maxLength={160}
              required
            />
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
          Applications are sent to{" "}
          <a href={`mailto:${CAREER_EMAIL}`}>{CAREER_EMAIL}</a>.
        </p>

        {status && (
          <p
            className={status.ok ? "status ok" : "status error"}
            role="status"
          >
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
    "What services does WISDOM provide?",
    "WISDOM provides manpower services, security services, facility management, water tank cleaning, solar panel cleaning and end-to-end HR support for organisations.",
  ],
  [
    "Which sectors does WISDOM serve?",
    "WISDOM supports organisations across education, healthcare, manufacturing, corporate and commercial environments, hospitality, retail, government institutions, infrastructure and residential communities.",
  ],
  [
    "Can WISDOM provide manpower for specific roles?",
    "Yes. WISDOM can support organisations with skilled, semi-skilled and general manpower based on the operational requirements of the site. Requirements are assessed before deployment.",
  ],
  [
    "Does WISDOM provide security services?",
    "Yes. WISDOM provides security personnel and related site support for organisations requiring dependable security coverage and operational coordination.",
  ],
  [
    "Can WISDOM support universities and educational campuses?",
    "Yes. WISDOM can provide campus support personnel such as lab assistants, clinical tutors, office assistants, hostel staff, housekeeping personnel, security staff and other operational support roles.",
  ],
  [
    "Can WISDOM support hospitals and healthcare facilities?",
    "Yes. WISDOM can provide support personnel including ward attendants, patient care assistants, housekeeping staff, office support, security and facility personnel based on the facility's requirements.",
  ],
  [
    "Where does WISDOM currently operate?",
    "WISDOM currently has a growing service footprint across Uttar Pradesh, Odisha, Jharkhand, Bihar and Maharashtra, with plans to expand its service network as client requirements grow.",
  ],
  [
    "How can an organisation discuss a requirement with WISDOM?",
    "You can contact WISDOM through hello@wisdomservices.co or use the contact form on the website. Our team can discuss your requirement and the appropriate service structure.",
  ],
  [
    "How can I apply for a job with WISDOM?",
    "You can use the Careers section on this website to submit your details, select the role you are interested in and provide a brief summary of your experience.",
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
<SectorsWeServe />
<Why />
<SpecialisedSolutions />
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
