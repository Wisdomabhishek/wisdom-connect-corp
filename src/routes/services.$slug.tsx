import { createFileRoute, notFound } from "@tanstack/react-router";

import { PageShell, Reveal, WHATSAPP } from "@/components/site";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found | WISDOM" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <PageShell>
      <section className="page-head">
        <Reveal>
          <div className="section-head">
            <div className="kicker">
              {service.group === "people" ? "People & Security" : "Facility & Site Services"}
            </div>
            <h1 className="section-title">{service.title}</h1>
            <p className="section-desc">{service.intro}</p>
          </div>

          {service.photo && (
            <img
              className="service-photo"
              src={service.photo}
              alt={service.alt ?? service.name}
              loading="lazy"
            />
          )}

          <div className="detail-grid">
            <div>
              <div className="footer-title">Who this is for</div>
              <ul>
                {service.who.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-title">What WISDOM provides</div>
              <ul>
                {service.provides.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hr-flow-block">
            <div className="footer-title">How it works</div>
            <div className="hr-flow">
              {service.process.map((step, i) => (
                <span key={step}>
                  {step}
                  {i < service.process.length - 1 ? <i aria-hidden="true">&rsaquo;</i> : null}
                </span>
              ))}
            </div>
          </div>

          <div className="actions" style={{ marginTop: 26 }}>
            <a className="btn primary" href="/#contact">
              Request a Quote
            </a>
            <a className="btn outline" href={WHATSAPP} target="_blank" rel="noopener">
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
