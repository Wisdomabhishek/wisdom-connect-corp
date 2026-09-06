import { createFileRoute } from "@tanstack/react-router";

import { PageShell, Reveal } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WISDOM | Business Services Company in Jamshedpur" },
      {
        name: "description",
        content:
          "WISDOM is a Jamshedpur based business services company providing manpower, security, HR support and facility services to industrial and commercial clients across India.",
      },
      { property: "og:title", content: "About WISDOM | Business Services in Jamshedpur" },
      {
        property: "og:description",
        content:
          "Who we are, how we work and the people behind WISDOM, a business services company based in Jamshedpur, Jharkhand.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="page-head">
        <Reveal>
          <div className="section-head">
            <div className="kicker">About WISDOM</div>
            <h1 className="section-title">
              A Jamshedpur based service company built on reliable people.
            </h1>
          </div>
          <div className="prose">
            <p>
              WISDOM is a business services company based in Jamshedpur, Jharkhand. We provide
              manpower, security personnel, HR support and facility services to industrial,
              commercial and institutional clients, and we work in selected locations across India.
            </p>
            <p>
              The company was set up by two working partners who spend their time on sites rather
              than behind a desk. That shapes how we operate. We look at the requirement, plan the
              people and supervision needed, and stay involved once the team is deployed.
            </p>

            <h3>What we do</h3>
            <p>
              Our work covers two areas. People and security includes manpower, security personnel
              and end-to-end HR support. Facility and site services includes facility management,
              water tank cleaning and solar panel cleaning. Clients can use one service or combine
              several under a single point of contact.
            </p>

            <h3>How we work</h3>
            <p>
              We start by understanding the requirement, then identify the people, skills and
              service structure needed. Suitable people are deployed, and we coordinate with the
              client for ongoing requirements. Site supervision and attendance checks are part of
              the service, not an add-on.
            </p>

            <h3>What we stand for</h3>
            <p>
              Reliable people, practical service and clear accountability. We do not promise more
              than we can deliver, and we prefer long working relationships to one-off contracts.
            </p>

            <h3>Leadership</h3>
            <p>
              <b>Manoj Kumar Singh</b>, Co-Founder, looks after security and field operations. He
              brings a background in the Central Reserve Police Force followed by industrial
              security, and handles manpower deployment and site discipline.
            </p>
            <p>
              <b>Abhishek Kumar</b>, Co-Founder, looks after client requirements, business
              development and facility operations, and builds the service plan for each site.
            </p>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
