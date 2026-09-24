import { createFileRoute } from "@tanstack/react-router";

import { PageShell, Reveal } from "@/components/site";

export const Route = createFileRoute("/insights")({
  head: () => ({
  meta: [
    {
      title: "Insights | Workforce & Operational Support | WISDOM",
    },
    {
      name: "description",
      content:
        "Practical insights from WISDOM on manpower planning, security operations, HR support, facility management and workforce services.",
    },
    {
      property: "og:title",
      content: "Insights | Workforce & Operational Support | WISDOM",
    },
    {
      property: "og:description",
      content:
        "Practical observations on workforce, security, HR and facility operations from WISDOM.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [{ rel: "canonical", href: "/insights" }],
}),
  component: InsightsPage,
});

const notes = [
  {
    tag: "Manpower",
    title: "Planning manpower around shifts, not just headcount",
    body:
      "Operational requirements can change by shift, season and production plan. Planning workforce requirements around actual operating patterns, with appropriate replacement support, can help organisations maintain continuity.",
  },
  {
    tag: "Security",
    title: "What good gate discipline looks like",
    body:
      "Effective site security depends on more than the number of guards deployed. Clear visitor and material movement records, defined duty responsibilities, uniform discipline and regular supervisory checks all contribute to consistent gate operations.",
  },
  {
    tag: "HR Support",
    title: "Where hiring usually slows down",
    body:
      "Hiring delays can occur between sourcing, screening, interview coordination, documentation and joining. Clear ownership of each step and separate tracking of selection and joining can make the process easier to manage.",
  },
  {
    tag: "Facility",
    title: "Why cleaning schedules should follow site usage",
    body:
      "Different areas experience different levels of activity. Aligning cleaning schedules with actual usage and applying appropriate cleaning methods can help organisations maintain workplace hygiene while using resources effectively.",
  },
];

function InsightsPage() {
  return (
    <PageShell>
      <section className="page-head">
        <Reveal>
          <div className="kicker">Insights</div>
<h1 className="section-title">
  Practical thinking for better workforce and operations.
</h1>
<p className="section-desc">
  Short, practical observations on manpower, security, HR and facility
  operations from the work WISDOM supports across different sites and
  organisations.
</p>
          </div>
          <div className="insight-grid">
            {notes.map((note) => (
              <article className="insight" key={note.title}>
                <small>{note.tag}</small>
                <h2>{note.title}</h2>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
