import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";
import { contact, telHref } from "@/config/site";

const primaryNav = [
  { label: "About", to: "/about" },
  { label: "ESG", to: "/esg" },
  { label: "Why WISDOM", to: "/why-wisdom" },
  { label: "Who We Serve", to: "/who-we-serve" },
  { label: "Insights", to: "/insights" },
  { label: "Leadership", to: "/leadership" },
  { label: "Contact", to: "/contact" },
];

const serviceGroups = [
  {
    title: "People & Security",
    items: [
      { label: "Manpower", hash: "manpower" },
      { label: "Security", hash: "security" },
      { label: "Recruitment", hash: "recruitment" },
    ],
  },
  {
    title: "Facility & Site Services",
    items: [
      { label: "Facility Management", hash: "facility" },
      { label: "Water Tank Cleaning", hash: "water-tank" },
      { label: "Solar Panel Cleaning", hash: "solar" },
    ],
  },
  {
    title: "ESG & Sustainability",
    items: [
      { label: "ESG Advisory", hash: "esg" },
      { label: "BRSR", hash: "esg" },
      { label: "GHG", hash: "esg" },
      { label: "CBAM", hash: "esg" },
      { label: "Carbon Markets", hash: "esg" },
    ],
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden border-b border-border bg-navy lg:block">
        <div className="wrap flex h-9 items-center justify-between text-xs text-white/70">
          <span>{contact.addressLines.join(", ")} | Manpower, Security, Facility and ESG services</span>
          <a href={telHref()} className="hover:text-white">
            {contact.phoneDisplay ? `Call ${contact.phoneDisplay}` : "Call us"}
          </a>
        </div>
      </div>

      <div className="wrap flex h-[68px] items-center justify-between gap-4">
        <Wordmark />

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className="py-2 text-sm font-medium text-navy hover:text-orange-deep"
              onClick={() => setServicesOpen(false)}
              aria-expanded={servicesOpen}
            >
              Services
            </Link>
            {servicesOpen ? (
              <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 border border-border bg-card p-6 shadow-lg">
                <div className="grid grid-cols-3 gap-6">
                  {serviceGroups.map((group) => (
                    <div key={group.title}>
                      <p className="mb-3 border-b border-border pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {group.title}
                      </p>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              to="/services"
                              hash={item.hash}
                              className="text-sm text-navy hover:text-orange-deep"
                              onClick={() => setServicesOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="py-2 text-sm font-medium text-navy hover:text-orange-deep"
              activeProps={{ className: "py-2 text-sm font-semibold text-orange-deep" }}
            >
              {item.label}
            </Link>
          ))}

          <Link to="/contact" className="btn btn-primary !min-h-[42px] !px-5 !text-sm">
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-navy transition-transform ${open ? "top-2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-navy transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-navy transition-transform ${open ? "top-2 -rotate-45" : "top-4"}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto border-t border-border bg-background pb-28 lg:hidden"
        >
          <nav className="wrap py-6" aria-label="Mobile">
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="block border-b border-border py-4 font-display text-lg font-semibold text-navy"
            >
              Services
            </Link>
            {serviceGroups.map((group) => (
              <div key={group.title} className="border-b border-border py-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.title}
                </p>
                <ul className="grid grid-cols-2 gap-y-3">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to="/services"
                        hash={item.hash}
                        onClick={() => setOpen(false)}
                        className="text-sm text-navy"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {primaryNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-4 font-display text-lg font-semibold text-navy"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-6 w-full"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
