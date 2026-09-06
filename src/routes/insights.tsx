import { createFileRoute } from "@tanstack/react-router";

import { PageShell, Reveal } from "@/components/site";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | Practical Notes on Manpower & Facility Services | WISDOM" },
      {
        name: "description",
        content:
          "Practical notes from WISDOM on manpower planning, site security, HR support and facility upkeep for Indian businesses.",
      },
      { property: "og:title", content: "WISDOM Insights" },
      {
        property: "og:description",
        content:
          "Practical notes on manpower planning, site security, HR support and facility upkeep for Indian businesses.",
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
    title: "Planning manpower around shifts, not headcount",
    body: "Most shortfalls on site are not caused by a lack of people but by planning against a single headcount number. Requirements change by shift, by season and by production plan. Setting the requirement shift by shift, with a small replacement buffer, keeps output steady and avoids last minute hiring.",
  },
  {
    tag: "Security",
    title: "What good gate discipline looks like",
    body: "Gate management is the part of security a visitor actually sees. Clear visitor and material movement records, a posted duty chart, uniform discipline and a supervisor who checks the post during the shift make more difference than adding extra guards.",
  },
  {
    tag: "HR Support",
    title: "Where hiring usually slows down",
    body: "Sourcing is rarely the bottleneck. Delays build up in screening, interview coordination and documentation. Fixing responsibility for each of those steps, and tracking joining separately from selection, shortens the time between an approved requirement and a person on the floor.",
  },
  {
    tag: "Facility",
    title: "Why cleaning schedules should follow footfall",
    body: "A fixed daily schedule treats a busy entrance the same as a quiet corridor. Mapping the schedule to actual footfall, and using machine based cleaning where the area justifies it, gives a better result with the same staff strength.",
  },
];

function InsightsPage() {
  return (
    <PageShell>
      <section className="page-head">
        <Reveal>
          <div className="section-head">
            <div className="kicker">Insights</div>
            <h1 className="section-title">Practical notes from our work on site.</h1>
            <p className="section-desc">
              Short, practical observations from running manpower, security and facility teams for
              Indian businesses.
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
