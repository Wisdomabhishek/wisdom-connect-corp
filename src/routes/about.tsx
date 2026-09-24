import { createFileRoute } from "@tanstack/react-router";

import { PageShell, Reveal } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WISDOM | Business Services Company in Jamshedpur" },
      {
        name: "description",
        content:
  "WISDOM is a Jamshedpur based business services company providing manpower, security, facility management, HR and operational support solutions across selected locations in India.",
      { property: "og:title", content: "About WISDOM | Business Services in Jamshedpur" },
      {
        property: "og:description",
        content:
  "Learn about WISDOM, our approach to workforce and operational support, the services we provide and the people behind the business.",
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
  Built on trust. Driven by people.
</h1>
          </div>
          <div className="prose">
            <p>
  WISDOM is a business services company based in Jamshedpur, Jharkhand.
  We provide manpower, security, facility management, HR support and
  operational services to industrial, commercial and institutional clients
  across selected locations in India.
</p>

<p>
  WISDOM was established by two working partners who remain closely involved
  in client requirements and day-to-day operations. This practical approach
  shapes how we work: we understand the requirement, plan the people and
  service structure needed, and stay involved after deployment.
</p>

<h3>Our Services</h3>

<p>
  Our services cover two connected areas. People and security includes
  manpower services, security services and end-to-end HR support. Facility
  and site services includes facility management, water tank cleaning and
  solar panel cleaning.
</p>

<p>
  Clients can use an individual service or combine multiple services through
  a single point of contact, depending on their operational requirements.
</p>

<h3>Our Approach</h3>

<p>
  We begin by understanding the requirement, site environment and operational
  priorities. We then identify the people, skills and service structure
  required, coordinate deployment and remain involved in ongoing service
  delivery.
</p>

<p>
  Workforce coordination, attendance checks, communication and site
  supervision form part of our approach to service delivery.
</p>

<h3>Our Vision</h3>

<p>
  To become a trusted partner for workforce and operational support across
  India.
</p>

<h3>Our Mission</h3>

<p>
  To make workforce and operational support simpler, more reliable and more
  accountable for our clients.
</p>

<h3>What We Stand For</h3>

<p>
  Reliable people, practical service and clear accountability. We focus on
  understanding the actual requirement, maintaining clear communication and
  building long-term working relationships with our clients.
</p>

<h3>Leadership</h3>

<p>
  <b>Manoj Kumar Singh</b>, Co-Founder, looks after security and field
  operations. He brings a background in the Central Reserve Police Force
  followed by industrial security, and focuses on manpower deployment and
  site discipline.
</p>

<p>
  <b>Abhishek Kumar</b>, Co-Founder, looks after client requirements,
  business development and facility operations, working on practical service
  plans for each site.
</p>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
