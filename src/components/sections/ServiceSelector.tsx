import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { services, type ServiceId } from "@/data/services";

const options: { id: ServiceId; label: string }[] = [
  { id: "manpower", label: "Manpower" },
  { id: "security", label: "Security" },
  { id: "recruitment", label: "Recruitment" },
  { id: "facility", label: "Facility" },
  { id: "water-tank", label: "Water Tank Cleaning" },
  { id: "solar", label: "Solar Panel Cleaning" },
  { id: "esg", label: "ESG" },
];

export function ServiceSelector() {
  const [active, setActive] = useState<ServiceId>("manpower");
  const service = services.find((s) => s.id === active)!;

  return (
    <section className="section bg-navy text-white">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">
            Start here
          </p>
          <h2 className="mt-3 text-3xl text-white md:text-4xl">What can we help you with?</h2>
          <p className="mt-4 text-white/70">
            Pick the requirement closest to yours and we will show you what WISDOM actually does in
            that area.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[300px_1fr]">
          <div role="tablist" aria-label="Service selector" className="flex flex-wrap gap-2 lg:flex-col">
            {options.map((option) => {
              const selected = option.id === active;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(option.id)}
                  className={`min-h-[48px] border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    selected
                      ? "border-orange bg-orange text-white"
                      : "border-white/20 text-white/80 hover:border-white/50 hover:text-white"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <div className="border border-white/15 bg-navy-deep p-6 md:p-9">
            <h3 className="font-display text-2xl text-white">{service.name}</h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/75">{service.description}</p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange">
                  Services included
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="border-b border-white/10 pb-2">
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange">
                  What we can support
                </p>
                <ul className="mt-3 space-y-3 text-sm leading-relaxed text-white/80">
                  {service.support.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
              <Link to="/services" hash={service.id} className="btn btn-ghost-light">
                Read the full service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
