import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-operations.jpg";

const quickPoints = [
  "Manpower and security",
  "Facility and site services",
  "HR recruitment support",
  "Water tank and solar panel cleaning",
  "ESG and sustainability reporting",
];

export function Hero() {
  return (
    <section className="relative bg-navy-deep text-white">
      <img
        src={heroImg}
        alt="WISDOM site supervisor and workers in branded uniforms inside an Indian manufacturing plant"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover object-right opacity-40 md:opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/30" />

      <div className="wrap relative py-20 md:py-28 lg:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
          Indian B2B services company
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          Think Wisdom.
          <span className="mt-1 block text-orange">Service You Can Trust.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          Reliable people, secure sites and practical business support, backed by specialist ESG
          expertise.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn btn-primary">
            Get a Quote
          </Link>
          <Link to="/services" className="btn btn-ghost-light">
            Explore Services
          </Link>
        </div>

        <ul className="mt-12 grid max-w-3xl gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/80 sm:grid-cols-2 lg:grid-cols-3">
          {quickPoints.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-orange" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
