import { useState } from "react";
import { Link } from "@tanstack/react-router";
import beforeImg from "@/assets/tank-before.jpg";
import afterImg from "@/assets/tank-after.jpg";

const steps = [
  ["01", "Inspect", "Check the tank condition, access and water level before quoting."],
  ["02", "Clean", "Drain the tank and clear loose deposits from walls and floor."],
  ["03", "Remove Sludge", "Lift out settled sludge and silt from the base."],
  ["04", "Scrub", "Mechanical scrubbing of walls, floor and corners."],
  ["05", "Disinfect", "Disinfect the cleaned surfaces before refilling."],
  ["06", "Complete", "Refill, hand over the tank and fix the next cleaning date."],
];

export function WaterTank() {
  const [position, setPosition] = useState(50);

  return (
    <section id="water-tank" className="section scroll-mt-24 bg-muted">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Facility & Site Services</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Water Tank Cleaning</h2>
            <p className="prose-body mt-4">
              Overhead tanks, underground tanks and sumps for factories, offices, warehouses and
              residential societies. Sludge is removed, surfaces are scrubbed and the tank is
              disinfected before it goes back into use.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                "Overhead tank cleaning",
                "Underground tank cleaning",
                "Sump cleaning",
                "Sludge removal",
                "Scrubbing",
                "Disinfection",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-orange" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>

          <figure>
            <div className="relative aspect-[7/5] w-full select-none overflow-hidden border border-border">
              <img
                src={afterImg}
                alt="Underground water tank after cleaning, with clean concrete surfaces"
                loading="lazy"
                width={1408}
                height={1008}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${position}%` }}
                aria-hidden="true"
              >
                <img
                  src={beforeImg}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ width: `${(100 / Math.max(position, 1)) * 100}%`, maxWidth: "none" }}
                />
              </div>
              <div
                className="pointer-events-none absolute inset-y-0 w-0.5 bg-orange"
                style={{ left: `${position}%` }}
              />
              <span className="pointer-events-none absolute left-3 top-3 bg-navy-deep/85 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                Before
              </span>
              <span className="pointer-events-none absolute right-3 top-3 bg-navy-deep/85 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                After
              </span>
              <input
                type="range"
                min={0}
                max={100}
                value={position}
                onChange={(event) => setPosition(Number(event.target.value))}
                aria-label="Compare the tank before and after cleaning"
                className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
              />
            </div>
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Drag the slider to compare a tank before and after cleaning. Condition varies from
              site to site.
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([no, title, text]) => (
            <div key={no} className="bg-card p-6">
              <span className="font-display text-xs font-bold text-orange">{no}</span>
              <h3 className="mt-2 font-display text-base text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
