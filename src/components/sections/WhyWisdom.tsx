import { Link } from "@tanstack/react-router";
import briefingImg from "@/assets/supervisor-briefing.jpg";

const reasons = [
  {
    title: "Experienced Leadership",
    text: "Commercial, facility and field experience under one team.",
  },
  {
    title: "Reliable Operations",
    text: "Clear supervision and practical day-to-day management.",
  },
  {
    title: "Specialist Expertise",
    text: "Relevant ESG capability with Indian and European corporate experience.",
  },
  {
    title: "One Point of Contact",
    text: "Multiple connected services without unnecessary vendor complexity.",
  },
];

export function WhyWisdom({ withImage = true }: { withImage?: boolean }) {
  return (
    <section className="section bg-navy text-white">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">
            Why WISDOM
          </p>
          <h2 className="mt-3 text-3xl text-white md:text-4xl">
            We understand what businesses need from a service partner
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-white/75">
            Reliable people, clear supervision and someone who answers when there is a problem.
          </p>

          <div className="mt-10 grid gap-px bg-white/15 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="bg-navy p-6">
                <h3 className="font-display text-lg text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{reason.text}</p>
              </div>
            ))}
          </div>

          <Link to="/contact" className="btn btn-primary mt-8">
            Talk to our team
          </Link>
        </div>

        {withImage ? (
          <img
            src={briefingImg}
            alt="WISDOM supervisor briefing housekeeping and security staff at an Indian factory compound"
            loading="lazy"
            width={1600}
            height={1008}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>
    </section>
  );
}
