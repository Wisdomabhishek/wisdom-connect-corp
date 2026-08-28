import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";
import { brand, contact, mailHref, telHref, waHref } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-orange bg-navy-deep text-white/75">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            An Indian B2B services company providing manpower, security, facility and site
            services, HR recruitment support and specialist ESG capability.
          </p>
          <p className="mt-4 text-sm font-medium text-white">{brand.location}</p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["Manpower Services", "manpower"],
              ["Security Services", "security"],
              ["HR Recruitment Support", "recruitment"],
              ["Facility Management", "facility"],
              ["Water Tank Cleaning", "water-tank"],
              ["Solar Panel Cleaning", "solar"],
              ["ESG and Sustainability", "esg"],
            ].map(([label, hash]) => (
              <li key={label}>
                <Link to="/services" hash={hash} className="hover:text-orange">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["About", "/about"],
              ["ESG and Sustainability", "/esg"],
              ["Why WISDOM", "/why-wisdom"],
              ["Who We Serve", "/who-we-serve"],
              ["Insights", "/insights"],
              ["Leadership", "/leadership"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-orange">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={telHref()} className="hover:text-orange">
                {contact.phoneDisplay || "Call our team"}
              </a>
            </li>
            <li>
              <a href={waHref()} className="hover:text-orange">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={mailHref()} className="hover:text-orange">
                {contact.email || "Email our team"}
              </a>
            </li>
            <li className="pt-2 text-white/60">{contact.addressLines.join(", ")}</li>
          </ul>
          <Link to="/contact" className="btn btn-primary mt-6 w-full">
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} WISDOM. All rights reserved.</p>
          <p>{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
