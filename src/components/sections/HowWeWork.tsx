import { useState } from "react";

const stages = [
  {
    no: "01",
    title: "Understand",
    text: "We understand the site, people and requirement.",
    detail:
      "A visit or a detailed conversation first. Shift pattern, site conditions, reporting lines and what has not worked for you earlier.",
  },
  {
    no: "02",
    title: "Plan",
    text: "We work out the right service and deployment structure.",
    detail:
      "Numbers, skill levels, supervision and cost are agreed in writing before anyone is deployed, so there are no surprises in month two.",
  },
  {
    no: "03",
    title: "Deploy",
    text: "We put the right people and processes in place.",
    detail:
      "Staff are briefed, documented and put on site with uniforms, attendance format and a named supervisor from day one.",
  },
  {
    no: "04",
    title: "Supervise",
    text: "We stay close to the operation and keep accountability clear.",
    detail:
      "Regular supervisory checks, attendance monitoring and quick replacement when someone is absent.",
  },
  {
    no: "05",
    title: "Support",
    text: "We remain available and keep communication straightforward.",
    detail:
      "One point of contact who knows your site, answers the phone and follows an issue through to closure.",
  },
];

export function HowWeWork() {
  const [active, setActive] = useState(0);

  return (
    <section className="section bg-muted">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">Our approach</p>
          <h2 className="mt-3 text-3xl md:text-4xl">How we work</h2>
          <p className="prose-body mt-4">
            The same five stages, whether it is two housekeeping staff or a full security
            deployment.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <ol className="relative border-l-2 border-border pl-0">
            {stages.map((stage, index) => {
              const selected = index === active;
              return (
                <li key={stage.no} className="relative">
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-expanded={selected}
                    className={`w-full border-l-2 py-5 pl-6 pr-4 text-left transition-colors ${
                      selected ? "-ml-0.5 border-orange bg-card" : "-ml-0.5 border-transparent"
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`font-display text-sm font-bold ${selected ? "text-orange" : "text-muted-foreground"}`}
                      >
                        {stage.no}
                      </span>
                      <span className="font-display text-lg font-semibold text-navy">
                        {stage.title}
                      </span>
                    </div>
                    <p className="mt-1 pl-9 text-sm text-muted-foreground">{stage.text}</p>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="card-flat rule-top self-start p-7 md:p-9">
            <p className="font-display text-5xl font-bold text-muted">{stages[active].no}</p>
            <h3 className="mt-2 font-display text-2xl text-navy">{stages[active].title}</h3>
            <p className="mt-4 text-base leading-relaxed text-navy/80">{stages[active].text}</p>
            <p className="prose-body mt-4 border-t border-border pt-4">{stages[active].detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
