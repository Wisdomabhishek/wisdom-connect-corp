import { Link } from "@tanstack/react-router";
import solarImg from "@/assets/solar-cleaning.jpg";

const steps = [
  ["Inspect", "Survey the array, access route, water availability and safety requirements."],
  ["Clean", "Surface cleaning with soft brushes and suitable equipment for the installation."],
  ["Check", "Visual check of panel surfaces, frames and mounting after cleaning."],
  ["Schedule", "Agree a repeat cleaning interval that suits your site and dust conditions."],
];

export function Solar() {
  return (
    <section id="solar" className="relative scroll-mt-24 bg-navy-deep text-white">
      <div className="grid lg:grid-cols-2">
        <img
          src={solarImg}
          alt="WISDOM workers in branded workwear and safety helmets cleaning a solar panel array in India"
          loading="lazy"
          width={1600}
          height={1008}
          className="h-64 w-full object-cover sm:h-80 lg:h-full"
        />
        <div className="px-5 py-14 md:px-12 md:py-20 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">
            Facility & Site Services
          </p>
          <h2 className="mt-3 text-3xl text-white md:text-4xl">Solar Panel Cleaning</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-white/75">
            Dust, bird droppings and site debris settle on panels continuously in Indian
            conditions. We clean rooftop and ground-mounted installations on a routine schedule,
            with trained staff, proper equipment and appropriate safety practice.
          </p>

          <ol className="mt-10 grid gap-px bg-white/15 sm:grid-cols-2">
            {steps.map(([title, text], index) => (
              <li key={title} className="bg-navy-deep p-5">
                <span className="font-display text-xs font-bold text-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-base text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-xl text-sm text-white/55">
            We do not quote a fixed percentage improvement in generation. Output depends on your
            site, dust levels and cleaning frequency, and we will discuss that honestly during the
            site survey.
          </p>

          <Link to="/contact" className="btn btn-primary mt-8">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
