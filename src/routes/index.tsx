import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

import logo from "@/assets/wisdom-logo.jpg";
import heroPhoto from "@/assets/hero-operations.webp";
import supervisorPhoto from "@/assets/supervisor-briefing.webp";
import securityPhoto from "@/assets/security-gate.webp";
import facilityPhoto from "@/assets/facility-housekeeping.webp";
import recruitmentPhoto from "@/assets/hr-interview.webp";
import waterTankPhoto from "@/assets/water-tank-cleaning.webp";
import solarPhoto from "@/assets/solar-cleaning.webp";
import skilledPhoto from "@/assets/skilled-manpower.webp";

const PHONE = "+91 91224 47110";
const PHONE_DIAL = "+919122447110";
const WHATSAPP = "https://wa.me/919122447110";
const EMAIL = "wisdomutilities@gmail.com";
const CAREER_EMAIL = "wisdomrecruitmentdesk@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WISDOM | Manpower, Security & Facility Services in Jamshedpur" },
      {
        name: "description",
        content:
          "WISDOM provides manpower, security, HR recruitment support, facility management, water tank cleaning and solar panel cleaning for businesses in Jamshedpur, Jharkhand and across India.",
      },
      {
        property: "og:title",
        content: "WISDOM | Manpower, Security & Facility Services in Jamshedpur",
      },
      {
        property: "og:description",
        content:
          "Reliable people, secure sites and practical business support for Indian businesses. Based in Jamshedpur, Jharkhand.",
      },
    ],
  }),
  component: HomePage,
});

/* ------------------------------------------------------------------ */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, className: visible ? "wrap reveal visible" : "wrap reveal" };
}

function Reveal({ children }: { children: ReactNode }) {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why WISDOM" },
  { href: "#leadership", label: "Leadership" },
  { href: "#insights", label: "Insights" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header>
      <div className="wrap">
        <nav aria-label="Primary">
          <a className="brand" href="#top">
            <img className="logo" src={logo} alt="WISDOM" width={48} height={48} />
            <span>WISDOM</span>
          </a>
          <div className="navlinks">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a className="cta" href="#contact">
              Get a Quote
            </a>
          </div>
          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </nav>
        <div id="mobile-menu" className={open ? "mobile open" : "mobile"}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={`tel:${PHONE_DIAL}`} onClick={() => setOpen(false)}>
            Call {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
}

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
            Reliable people, secure sites and practical business support for Indian businesses.
            Manpower, security, recruitment and facility services handled by a team that stays
            close to the work.
          </p>
          <div className="actions">
            <a className="btn primary" href="#contact">
              Get a Quote
            </a>
            <a className="btn outline" href="#services">
              View Services
            </a>
          </div>
          <div className="trustbar">
            <div className="trust">
              <b>Manpower &amp; Security</b>
              <span>Deployment with supervision</span>
            </div>
            <div className="trust">
              <b>Facility &amp; Site Services</b>
              <span>Housekeeping, tanks, solar</span>
            </div>
            <div className="trust">
              <b>Jamshedpur Based</b>
              <span>Serving businesses across India</span>
            </div>
            <div className="trust">
              <b>One Point of Contact</b>
              <span>Fewer vendors to manage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <Reveal>
        <div className="section-head">
          <div className="kicker">About WISDOM</div>
          <h2 className="section-title">A practical service partner, built around experienced people.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              WISDOM is an Indian business services company based in Jamshedpur, Jharkhand. We
              provide manpower, security, HR recruitment support and facility services to
              businesses that need the work done properly and without constant follow-up.
            </p>
            <p>
              The company was set up by people who have spent their working lives in commercial,
              security and field operations. That background shapes how we work. We look at the
              site, understand the requirement, put the right people in place and keep a
              supervisory line running so accountability is never unclear.
            </p>
            <p>
              We keep our commitments realistic. If a requirement is outside what we can support
              well, we say so. What we do take on is planned properly, supervised and reviewed.
            </p>
            <img
              className="about-photo"
              src={supervisorPhoto}
              alt="WISDOM supervisor briefing a site team before the start of a shift"
              width={1600}
              height={1000}
              loading="lazy"
            />
            <p className="figure-note">Shift briefing at a client site in Jharkhand.</p>
          </div>
          <div className="facts">
            <div className="fact">
              <b>Head office</b>
              <span>Jamshedpur, Jharkhand</span>
            </div>
            <div className="fact">
              <b>Coverage</b>
              <span>Jharkhand and across India</span>
            </div>
            <div className="fact">
              <b>Service areas</b>
              <span>People, security and facility services</span>
            </div>
            <div className="fact">
              <b>Working hours</b>
              <span>Mon to Sat, 9:00 AM to 6:00 PM IST</span>
            </div>
            <div className="fact">
              <b>Contact</b>
              <span>{PHONE}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------------------- services ---------------------------- */

const pillars = [
  {
    no: "01",
    photo: securityPhoto,
    focus: "50% 38%",
    alt: "WISDOM security guard maintaining the gate register at an industrial site entrance",
    title: "People & Security",
    copy: "Manpower, security personnel and recruitment support, deployed and supervised so day-to-day operations stay steady.",
    chips: [
      "Skilled manpower",
      "Semi-skilled manpower",
      "Unskilled manpower",
      "Security guards",
      "Security supervisors",
      "HR recruitment support",
    ],
    tab: "manpower",
  },
  {
    no: "02",
    photo: facilityPhoto,
    focus: "50% 22%",
    alt: "Housekeeping staff cleaning a corporate office floor in India",
    title: "Facility & Site Services",
    copy: "Housekeeping, site upkeep, water tank cleaning and solar panel cleaning, run on a schedule with supervisory checks.",
    chips: [
      "Housekeeping",
      "Site upkeep",
      "Water tank cleaning",
      "Sump cleaning",
      "Solar panel cleaning",
      "Supervisory support",
    ],
    tab: "facility",
  },
] as const;

type TabId = "manpower" | "security" | "recruitment" | "facility" | "water" | "solar";

const tabs: { id: TabId; label: string; title: string; copy: string; points: string[] }[] = [
  {
    id: "manpower",
    label: "Manpower",
    title: "Manpower support for your site",
    copy: "Skilled, semi-skilled and unskilled manpower, with deployment, attendance and supervisory support.",
    points: ["Shift-wise deployment", "Attendance tracking", "Replacement support", "Site supervision"],
  },
  {
    id: "security",
    label: "Security",
    title: "Security and site supervision",
    copy: "Security personnel, supervisors and practical field coordination for business and industrial sites.",
    points: ["Gate and visitor control", "Round the clock shifts", "Supervisory checks", "Industrial and corporate sites"],
  },
  {
    id: "recruitment",
    label: "Recruitment",
    title: "HR recruitment support",
    copy: "Candidate sourcing, screening and interview coordination to support your workforce requirements.",
    points: ["Requirement mapping", "Sourcing", "First level screening", "Interview coordination"],
  },
  {
    id: "facility",
    label: "Facility",
    title: "Facility management support",
    copy: "Housekeeping, facility support, site upkeep and supervisory coordination.",
    points: ["Daily housekeeping", "Periodic deep cleaning", "Consumables planning", "Supervisor reporting"],
  },
  {
    id: "water",
    label: "Water Tank",
    title: "Water tank cleaning",
    copy: "Overhead and underground tank cleaning, sump cleaning, sludge removal, scrubbing and disinfection.",
    points: ["Site inspection", "Sludge removal", "Scrubbing", "Disinfection and refill"],
  },
  {
    id: "solar",
    label: "Solar",
    title: "Solar panel cleaning",
    copy: "Routine surface cleaning and site-level support for rooftop and ground-mounted solar installations.",
    points: ["Access and safety survey", "Surface cleaning", "Visual check", "Cleaning schedule"],
  },
];

function Services({ onSelectService }: { onSelectService: (label: string) => void }) {
  const [active, setActive] = useState<TabId>("manpower");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="services">
      <Reveal>
        <div className="section-head">
          <div className="kicker">What We Do</div>
          <h2 className="section-title">Two service pillars. Six services businesses actually ask for.</h2>
          <p className="section-desc">
            Everything we provide sits under people and security, or facility and site services.
            No long service list, no areas we cannot supervise properly.
          </p>
        </div>

        <div className="pillars">
          {pillars.map((pillar) => (
            <article className="pillar" key={pillar.no}>
              <div className="pillar-top">
                <span className="pillar-no">{pillar.no}</span>
                <img
                  src={pillar.photo}
                  alt={pillar.alt}
                  width={1400}
                  height={900}
                  loading="lazy"
                  style={{ objectPosition: pillar.focus }}
                />
              </div>
              <div className="pillar-body">
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
                <div className="chips">
                  {pillar.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <button
                  className="pillar-link"
                  type="button"
                  onClick={() => setActive(pillar.tab as TabId)}
                >
                  See what this covers
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="selector">
          <h3>What do you need help with?</h3>
          <div className="tabs" role="tablist" aria-label="Services">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={tab.id === active ? "tab active" : "tab"}
                role="tab"
                type="button"
                id={`tab-${tab.id}`}
                aria-selected={tab.id === active}
                aria-controls="service-panel"
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="panel" id="service-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
            <b>{current.title}</b>
            <p>{current.copy}</p>
            <ul>
              {current.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="actions">
              <a
                className="btn primary"
                href="#contact"
                onClick={() => onSelectService(current.label)}
              >
                Enquire about {current.label.toLowerCase()}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function SiteServices() {
  return (
    <section className="visual">
      <Reveal>
        <div className="section-head">
          <div className="kicker">Site Services</div>
          <h2 className="section-title">Work that is visible. Standards that are practical.</h2>
        </div>
        <div className="visual-grid">
          <article className="visual-card">
            <img
              src={waterTankPhoto}
              alt="WISDOM workers cleaning an overhead water tank with protective gloves and boots"
              width={1400}
              height={1000}
              loading="lazy"
            />
            <div className="visual-content">
              <div className="tag">Water Tank Cleaning</div>
              <h3>Clean from inspection to completion.</h3>
              <p>
                Overhead tanks, underground tanks and sumps, with sludge removal, scrubbing and
                disinfection.
              </p>
              <div className="process">
                <span>Inspect</span>
                <span>Clean</span>
                <span>Remove sludge</span>
                <span>Disinfect</span>
              </div>
            </div>
          </article>
          <article className="visual-card">
            <img
              src={solarPhoto}
              alt="Worker cleaning rooftop solar panels at an Indian commercial site"
              width={1400}
              height={1000}
              loading="lazy"
            />
            <div className="visual-content">
              <div className="tag">Solar Panel Cleaning</div>
              <h3>Keep panels clean and ready for operation.</h3>
              <p>
                Routine surface cleaning and site-level support for rooftop and ground-mounted
                solar installations.
              </p>
              <div className="process">
                <span>Inspect</span>
                <span>Clean</span>
                <span>Check</span>
                <span>Schedule</span>
              </div>
            </div>
          </article>
        </div>
      </Reveal>
    </section>
  );
}

function Why() {
  const cards = [
    ["01", "Experienced Leadership", "Commercial, facility, security and field experience brought together under one team."],
    ["02", "Reliable Operations", "Clear deployment, supervision and practical day-to-day coordination."],
    ["03", "Workforce Coordination", "Attendance, deployment and supervision handled properly, so nothing falls through the gaps."],
    ["04", "One Point of Contact", "Connected services that reduce unnecessary vendor complexity."],
  ];
  return (
    <section id="why">
      <Reveal>
        <div className="section-head">
          <div className="kicker">Why WISDOM</div>
          <h2 className="section-title">Experienced people. Clear accountability.</h2>
          <p className="section-desc">
            Businesses do not need more promises. They need people who understand the requirement
            and stay close to the work.
          </p>
        </div>
        <div className="why-grid">
          {cards.map(([num, title, copy]) => (
            <div className="why-card" key={num}>
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

function Serve() {
  const tags = [
    "Manufacturing & Industrial",
    "Warehouses & Logistics",
    "Corporate Offices",
    "Commercial Facilities",
    "Residential Communities",
    "SMEs & Growing Businesses",
    "Educational & Institutional",
    "Industrial Sites",
  ];
  return (
    <section id="serve">
      <Reveal>
        <div className="section-head">
          <div className="kicker">Who We Serve</div>
          <h2 className="section-title">Built for businesses that need things done properly.</h2>
        </div>
        <div className="serve-grid">
          {tags.map((tag) => (
            <div className="serve-tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Approach() {
  const steps = [
    ["01", "Understand", "We understand the site, people and requirement."],
    ["02", "Plan", "We work out the right service and deployment structure."],
    ["03", "Deploy", "We put the right people and process in place."],
    ["04", "Supervise", "We stay close to the operation and keep accountability clear."],
    ["05", "Support", "We remain available and keep communication straightforward."],
  ];
  return (
    <section className="approach">
      <Reveal>
        <div className="section-head">
          <div className="kicker">Our Approach</div>
          <h2 className="section-title">A straightforward process.</h2>
        </div>
        <div className="approach-grid">
          {steps.map(([num, title, copy]) => (
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

function Leadership() {
  return (
    <section id="leadership">
      <Reveal>
        <div className="section-head">
          <div className="kicker">Leadership</div>
          <h2 className="section-title">People behind WISDOM.</h2>
          <p className="section-desc">
            Different backgrounds. Complementary strengths. One focus, which is doing the work
            properly.
          </p>
        </div>
        <div className="founders">
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
              Abhishek focuses on client relationships, business development and facility
              operations. His experience across commercial and operational responsibilities helps
              WISDOM understand client requirements, build practical service solutions and
              maintain long-term working relationships.
            </p>
            <div className="creds">
              <span className="cred">SALES</span>
              <span className="cred">BUSINESS DEVELOPMENT</span>
              <span className="cred">FACILITY MANAGEMENT</span>
              <span className="cred">CLIENT OPERATIONS</span>
            </div>
          </article>
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
              Manoj brings extensive experience in security and field operations, supported by his
              background with the Central Reserve Police Force and subsequent experience in
              industrial security. At WISDOM, his focus is on manpower deployment, personnel
              supervision, site discipline and reliable day-to-day operations.
            </p>
            <div className="creds">
              <span className="cred">SECURITY OPERATIONS</span>
              <span className="cred">FIELD OPERATIONS</span>
              <span className="cred">MANPOWER DEPLOYMENT</span>
              <span className="cred">SITE SUPERVISION</span>
            </div>
          </article>
        </div>
      </Reveal>
    </section>
  );
}

function Insights() {
  const items = [
    ["MANPOWER", "Choosing the Right Manpower Partner", "What to check before you sign on a staffing vendor."],
    ["SECURITY", "What to Look for in Industrial Security", "Practical points that matter more than a guard's uniform."],
    ["FACILITY", "Managing Facility Services Effectively", "Why supervision matters as much as the cleaning schedule."],
    ["SOLAR", "Solar Panel Cleaning and Routine Maintenance", "How often panels actually need attention, and why."],
  ];
  return (
    <section className="insights" id="insights">
      <Reveal>
        <div className="section-head">
          <div className="kicker">WISDOM Insights</div>
          <h2 className="section-title">Useful knowledge, without the jargon.</h2>
        </div>
        <div className="insight-grid">
          {items.map(([tag, title, copy]) => (
            <article className="insight" key={title}>
              <small>{tag}</small>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

const faqs = [
  [
    "What types of manpower does WISDOM provide?",
    "WISDOM can support skilled, semi-skilled and unskilled manpower requirements, along with site support and supervisory coordination.",
  ],
  [
    "Do you provide industrial security?",
    "Yes. WISDOM provides security personnel, supervisors and site-level security support for business and industrial environments.",
  ],
  [
    "Can WISDOM support recruitment requirements?",
    "Yes. Recruitment support can include understanding the requirement, sourcing, screening and coordinating the hiring process.",
  ],
  [
    "Do you provide water tank and solar panel cleaning?",
    "Yes. WISDOM provides water tank cleaning and routine solar panel cleaning support for relevant sites.",
  ],
  [
    "What facility management services do you provide?",
    "WISDOM supports housekeeping, general facility upkeep and site-level supervision, alongside water tank and solar panel cleaning.",
  ],
  [
    "Which areas do you work in?",
    "WISDOM is based in Jamshedpur, Jharkhand and works with businesses in the region and across India, depending on the requirement.",
  ],
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq">
      <Reveal>
        <div className="section-head">
          <div className="kicker">FAQ</div>
          <h2 className="section-title">Questions businesses usually ask.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div className="faq-item" key={q}>
                <button
                  className="faq-q"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {q}
                  <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="faq-a" id={`faq-a-${i}`}>
                    {a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------------------- contact ---------------------------- */

const serviceOptions = [
  "Manpower",
  "Security",
  "HR Recruitment Support",
  "Facility Management",
  "Water Tank Cleaning",
  "Solar Panel Cleaning",
  "Other",
];

function Contact({ service, setService }: { service: string; setService: (v: string) => void }) {
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
    if (!name || !phone || !email || !fd.get("service")) {
      setStatus({ text: "Please fill in your name, phone, email and select a service.", ok: false });
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
          <div className="kicker">Get In Touch</div>
          <h2 className="section-title">Let us talk about your requirement.</h2>
          <p className="section-desc">
            Tell us what you need. Our team will get back to you and discuss the requirement.
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
                <label htmlFor="f-name">Name</label>
                <input id="f-name" name="name" maxLength={100} required />
              </div>
              <div className="field">
                <label htmlFor="f-company">Company</label>
                <input id="f-company" name="company" maxLength={120} />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-designation">Designation</label>
                <input id="f-designation" name="designation" maxLength={80} />
              </div>
              <div className="field">
                <label htmlFor="f-phone">Phone</label>
                <input id="f-phone" name="phone" type="tel" inputMode="tel" maxLength={20} required />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-email">Email</label>
                <input id="f-email" name="email" type="email" maxLength={160} required />
              </div>
              <div className="field">
                <label htmlFor="f-city">City / Location</label>
                <input id="f-city" name="city" maxLength={80} />
              </div>
            </div>
            <div className="form-row">
              <div className="field full">
                <label htmlFor="service">Service Required</label>
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
                <label htmlFor="f-message">Brief Requirement</label>
                <textarea
                  id="f-message"
                  name="message"
                  maxLength={1000}
                  placeholder="Tell us a little about what you need"
                />
              </div>
            </div>
            <button className="submit" type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Enquiry"}
            </button>
            <p className="note">
              Submissions are sent directly to WISDOM. If that fails, your email app will open as a
              backup so the enquiry still reaches {EMAIL}.
            </p>
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
            <a className="contact-link" href={`mailto:${EMAIL}`}>
              Email {EMAIL}
            </a>
            <a className="contact-link" href={WHATSAPP} target="_blank" rel="noopener">
              WhatsApp {PHONE}
            </a>
            <div className="address">
              <b>Head / Registered Office</b>
              <br />
              House No. 15, Road No. 2B, Chhota Govindpur
              <br />
              Jamshedpur, East Singhbhum, Jharkhand - 831004
              <br />
              <br />
              <b>Business Hours</b>
              <br />
              Mon to Sat, 9:00 AM to 6:00 PM IST
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img className="logo" src={logo} alt="WISDOM" width={48} height={48} loading="lazy" />
              <span>WISDOM</span>
            </div>
            <p style={{ marginTop: 10 }}>Think Wisdom. Service You Can Trust.</p>
          </div>
          <div>
            <div className="footer-title">Services</div>
            <a href="#services">People &amp; Security</a>
            <a href="#services">Facility &amp; Site Services</a>
            <a href="#services">HR Recruitment Support</a>
          </div>
          <div>
            <div className="footer-title">Company</div>
            <a href="#about">About</a>
            <a href="#why">Why WISDOM</a>
            <a href="#leadership">Leadership</a>
            <a href="#insights">Insights</a>
          </div>
          <div>
            <div className="footer-title">Contact</div>
            <p>Jamshedpur, Jharkhand</p>
            <a href={`tel:${PHONE_DIAL}`}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
        <div className="bottom">
          <p>© {new Date().getFullYear()} WISDOM. All rights reserved.</p>
          <p>Jamshedpur, Jharkhand, India</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WISDOM",
  description:
    "Manpower, security, HR recruitment support, facility management, water tank cleaning and solar panel cleaning for businesses in Jamshedpur, Jharkhand and across India.",
  telephone: PHONE_DIAL,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "House No. 15, Road No. 2B, Chhota Govindpur",
    addressLocality: "Jamshedpur",
    addressRegion: "Jharkhand",
    postalCode: "831004",
    addressCountry: "IN",
  },
  areaServed: "IN",
  openingHours: "Mo-Sa 09:00-18:00",
};

function HomePage() {
  const [service, setService] = useState("");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services
          onSelectService={(label) => {
            const map: Record<string, string> = {
              Manpower: "Manpower",
              Security: "Security",
              Recruitment: "HR Recruitment Support",
              Facility: "Facility Management",
              "Water Tank": "Water Tank Cleaning",
              Solar: "Solar Panel Cleaning",
            };
            setService(map[label] ?? "");
          }}
        />
        <SiteServices />
        <Why />
        <Serve />
        <Approach />
        <Leadership />
        <Insights />
        <Faq />
        <Contact service={service} setService={setService} />
      </main>
      <div className="mobile-bar">
        <a href={`tel:${PHONE_DIAL}`}>Call</a>
        <a href={WHATSAPP} target="_blank" rel="noopener">
          WhatsApp
        </a>
        <a href="#contact">Get a Quote</a>
      </div>
      <Footer />
    </>
  );
}
