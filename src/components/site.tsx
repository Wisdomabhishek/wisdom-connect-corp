import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import logo from "@/assets/wisdom-logo.jpg";

export const PHONE = "+91 91224 47110";
export const PHONE_DIAL = "+919122447110";
export const WHATSAPP = "https://wa.me/919122447110";
export const EMAIL = "hello@wisdomservices.co";
export const CAREER_EMAIL = "wisdomrecruitmentdesk@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/company/m-s-wisdom";

export function useReveal<T extends HTMLElement>() {
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

  return {
    ref,
    className: visible ? "wrap reveal visible" : "wrap reveal",
  };
}

export function Reveal({ children }: { children: ReactNode }) {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

const navItems = [
  { type: "route", to: "/", label: "Home" },
  { type: "route", to: "/about", label: "About" },
  { type: "route", to: "/services", label: "Services" },
  { type: "anchor", to: "/", hash: "why", label: "Why WISDOM" },
  { type: "route", to: "/insights", label: "Insights" },
  { type: "anchor", to: "/", hash: "careers", label: "Careers" },
  { type: "anchor", to: "/", hash: "contact", label: "Contact" },
] as const;

function NavLink({
  item,
  onClick,
}: {
  item: (typeof navItems)[number];
  onClick?: () => void;
}) {
  if (item.type === "route") {
    return (
      <Link to={item.to} onClick={onClick}>
        {item.label}
      </Link>
    );
  }

  const href = `/#${item.hash}`;

  return (
    <a href={href} onClick={onClick}>
      {item.label}
    </a>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const quoteHref = "/#contact";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header>
      <div className="wrap">
        <nav aria-label="Primary">
          <Link className="brand" to="/">
            <img
              className="logo"
              src={logo}
              alt="WISDOM"
              width={48}
              height={48}
            />
            <span>WISDOM</span>
          </Link>

          <div className="navlinks">
            {navItems.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}

           <a className="cta" href={quoteHref}>
  Discuss Your Requirement
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

        <div
          id="mobile-menu"
          className={open ? "mobile open" : "mobile"}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              onClick={() => setOpen(false)}
            />
          ))}

         <a
  href={quoteHref}
  onClick={() => setOpen(false)}
>
  Discuss Your Requirement
</a>

          <a
            href={`tel:${PHONE_DIAL}`}
            onClick={() => setOpen(false)}
          >
            Call {PHONE}
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">

          <div>
            <div className="footer-brand">
              <img
                className="logo"
                src={logo}
                alt="WISDOM"
                width={48}
                height={48}
                loading="lazy"
              />
              <span>WISDOM</span>
            </div>

            <p style={{ marginTop: 10 }}>
              Think Wisdom. Service You Can Trust.
            </p>
          </div>

          <div>
  <div className="footer-title">Services</div>

  <Link to="/services/$slug" params={{ slug: "manpower-services" }}>
    Manpower Services
  </Link>

  <Link to="/services/$slug" params={{ slug: "security-services" }}>
    Security Services
  </Link>

  <Link to="/services/$slug" params={{ slug: "end-to-end-hr-support" }}>
    End-to-End HR Support
  </Link>

  <Link to="/services/$slug" params={{ slug: "facility-management" }}>
    Facility Management
  </Link>

  <Link to="/services/$slug" params={{ slug: "water-tank-cleaning" }}>
    Water Tank Cleaning
  </Link>

  <Link to="/services/$slug" params={{ slug: "solar-panel-cleaning" }}>
    Solar Panel Cleaning
  </Link>
</div>

          <div>
  <div className="footer-title">Company</div>

  <Link to="/about">
    About
  </Link>

  <a href="/#why">
    Why WISDOM
  </a>

  <Link to="/insights">
    Insights
  </Link>

  <a href="/#careers">
    Careers
  </a>

  <a href="/#contact">
    Contact
  </a>
</div>
          <div>
            <div className="footer-title">Contact</div>

            <p>Jamshedpur, Jharkhand</p>

            <a href={`tel:${PHONE_DIAL}`}>
              {PHONE}
            </a>

            <a href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>

            <a href={`mailto:${CAREER_EMAIL}`}>
              {CAREER_EMAIL}
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </div>

        </div>

        <div className="bottom">
          <p>
            © {new Date().getFullYear()} WISDOM. All rights reserved.
          </p>

          <p className="legal-links">
            <Link to="/privacy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="mobile-bar">
      <a href={`tel:${PHONE_DIAL}`}>
        Call
      </a>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
      >
        WhatsApp
      </a>

<a href="/#contact">
  Discuss Your Requirement
</a>
    </div>
  );
}

export function PageShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        {children}
      </main>

      <MobileBar />

      <Footer />
    </>
  );
}
