import { createFileRoute } from "@tanstack/react-router";

import { EMAIL, PageShell, Reveal } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | WISDOM" },
      {
        name: "description",
        content:
          "Terms that apply to the use of the WISDOM website, including the scope of information published and how enquiries are handled.",
      },
      { property: "og:title", content: "Terms of Use | WISDOM" },
      {
        property: "og:description",
        content: "Terms that apply to the use of the WISDOM website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell>
      <section className="page-head">
        <Reveal>
          <div className="section-head">
            <div className="kicker">Legal</div>
            <h1 className="section-title">Terms of Use</h1>
          </div>
          <div className="prose">
            <h3>About this website</h3>
            <p>
              This website is published by WISDOM, a business services company based in Jamshedpur,
              Jharkhand. It describes the services we offer and provides a way to contact us.
            </p>

            <h3>Information on this site</h3>
            <p>
              We keep the information here accurate and current. Service descriptions are general
              and the actual scope, staffing and commercial terms for any assignment are agreed in
              writing with the client.
            </p>

            <h3>Enquiries and applications</h3>
            <p>
              Submitting an enquiry or a job application does not create a contract or an offer of
              employment. We respond to enquiries and applications as capacity allows.
            </p>

            <h3>Content and brand</h3>
            <p>
              The WISDOM name, logo, text and photographs on this site belong to WISDOM and may not
              be copied or reused without written permission.
            </p>

            <h3>External links</h3>
            <p>
              Links to third party platforms, such as WhatsApp and LinkedIn, are provided for
              convenience. We are not responsible for the content of those platforms.
            </p>

            <h3>Contact</h3>
            <p>Questions about these terms can be sent to {EMAIL}.</p>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
