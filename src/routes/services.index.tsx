import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell, Reveal } from "@/components/site";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Manpower, Security, HR & Facility | WISDOM" },
      {
        name: "description",
        content:
          "WISDOM services: manpower, security personnel, end-to-end HR support, facility management, water tank cleaning and solar panel cleaning across India.",
      },
      { property: "og:title", content: "WISDOM Services" },
      {
        property: "og:description",
        content:
          "Manpower, security, end-to-end HR support, facility management, water tank cleaning and solar panel cleaning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <section className="page-head">
        <Reveal>
          <div className="section-head">
            <div className="kicker">Our Services</div>
            <h1 className="section-title">
              People, facilities and operational support.
            </h1>
            <p className="section-desc">
              WISDOM provides dependable manpower, security, facility management,
              cleaning and HR support solutions designed around the operational
              needs of our clients.
            </p>
          </div>

          <div className="pillars">
            {[
              [
                "People & Security",
                services.filter((s) => s.group === "people"),
              ],
              [
                "Facility & Site Services",
                services.filter((s) => s.group === "facility"),
              ],
            ].map(([title, list]) => (
              <article className="pillar" key={title as string}>
                <div className="pillar-body">
                  <h3>{title as string}</h3>

                  <ul className="svc-list">
                    {(list as typeof services).map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                        >
                          {s.name}
                        </Link>
                        <span>{s.short}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="section-head" style={{ marginTop: 56 }}>
            <div className="kicker">Built Around Your Requirement</div>
            <h2 className="section-title">
              Flexible support for different operational environments.
            </h2>
            <p className="section-desc">
              Whether you need workforce support, site services or ongoing
              operational coordination, WISDOM works with you to understand
              the requirement and structure the appropriate service.
            </p>
          </div>

          <p className="sector-line" style={{ marginTop: 28 }}>
            <a className="btn primary" href="/#contact">
              Discuss Your Requirement
            </a>
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
