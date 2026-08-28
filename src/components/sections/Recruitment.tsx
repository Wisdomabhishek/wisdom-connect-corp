import { Link } from "@tanstack/react-router";
import hrImg from "@/assets/hr-interview.jpg";

const steps = [
  ["Understand Requirement", "Role, skill level, location, shift pattern and salary range written down clearly."],
  ["Source Candidates", "Sourcing through our own network, local channels and applications on hand."],
  ["Screen", "First level screening on experience, availability, documents and expectations."],
  ["Coordinate Interviews", "Scheduling, reminders and follow-up so your team is not chasing candidates."],
  ["Support Hiring", "Help through offer, joining formalities and the first weeks on site."],
];

export function Recruitment() {
  return (
    <section id="recruitment" className="section scroll-mt-24 bg-background">
      <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="eyebrow">People & Security</p>
          <h2 className="mt-3 text-3xl md:text-4xl">HR Recruitment Support</h2>
          <p className="prose-body mt-4">
            Practical hiring support for plant, site, admin and support roles. We work the way an
            internal HR team works, taking the sourcing, screening and coordination load off your
            desk. We do not promise placements or guarantee candidate quality; we do the work
            properly and keep you informed.
          </p>

          <img
            src={hrImg}
            alt="WISDOM representative interviewing a candidate in an Indian office meeting room"
            loading="lazy"
            width={1408}
            height={1008}
            className="mt-8 w-full border border-border object-cover"
          />
        </div>

        <div>
          <ol className="border border-border bg-card">
            {steps.map(([title, text], index) => (
              <li
                key={title}
                className="flex gap-5 border-b border-border p-6 last:border-b-0"
              >
                <span className="font-display text-sm font-bold text-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg text-navy">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link to="/contact" className="btn btn-primary mt-8">
            Discuss a hiring requirement
          </Link>
        </div>
      </div>
    </section>
  );
}
