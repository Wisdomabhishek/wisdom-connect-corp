import { createFileRoute } from "@tanstack/react-router";

import { CAREER_EMAIL, EMAIL, PageShell, Reveal } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | WISDOM" },
      {
        name: "description",
        content:
          "How WISDOM collects, uses and protects the information you share through enquiry and job application forms on this website.",
      },
      { property: "og:title", content: "Privacy Policy | WISDOM" },
      {
        property: "og:description",
        content: "How WISDOM handles the information shared through this website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell>
      <section className="page-head">
        <Reveal>
          <div className="section-head">
            <div className="kicker">Legal</div>
            <h1 className="section-title">Privacy Policy</h1>
          </div>
          <div className="prose">
            <h3>Information we collect</h3>
            <p>
              We collect only the details you enter in the enquiry form or the job application form
              on this website. This may include your name, company name, phone number, email
              address, location, the service you are interested in, the role you are applying for
              and any message you write.
            </p>

            <h3>How we use it</h3>
            <p>
              Business enquiries are used to respond to your requirement and to discuss a possible
              service arrangement. Job applications are used to assess your suitability for current
              or future openings. We do not sell or rent your information to anyone.
            </p>

            <h3>Where it goes</h3>
            <p>
              Enquiries are delivered to {EMAIL} and job applications are delivered to{" "}
              {CAREER_EMAIL}. Form delivery is handled by a third party form service that passes
              the message to our email inbox.
            </p>

            <h3>Retention</h3>
            <p>
              We keep enquiry and application records only as long as needed for the purpose above
              or as required by law.
            </p>

            <h3>Your choices</h3>
            <p>
              You can ask us to correct or delete the details you have shared by writing to {EMAIL}.
            </p>

            <h3>Cookies</h3>
            <p>
              This website does not use advertising or tracking cookies.
            </p>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
