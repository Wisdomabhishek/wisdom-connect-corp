import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  heading: string;
  body: string;
  points: string[];
};

const tabs: Tab[] = [
  {
    id: "esg",
    label: "ESG",
    heading: "What ESG actually asks of a business",
    body: "ESG covers how a company manages its environmental impact, its people and its governance, and how honestly it reports on all three. For most Indian companies the pressure comes from three directions: listing requirements, lenders, and buyers who now ask supply chain questions.",
    points: [
      "Environmental: energy, emissions, water, waste",
      "Social: workforce, safety, community, human rights in the supply chain",
      "Governance: board oversight, ethics, disclosure quality",
      "The work is mostly data collection and internal ownership, not documentation",
    ],
  },
  {
    id: "brsr",
    label: "BRSR",
    heading: "Business Responsibility and Sustainability Report",
    body: "BRSR is the disclosure format prescribed by SEBI for listed companies in India. It is organised around nine principles and asks for a mix of essential and leadership indicators. Companies in the supply chain of a listed entity are increasingly asked for the same data even when they do not file themselves.",
    points: [
      "Section A: general disclosures about the entity",
      "Section B: management and process disclosures",
      "Section C: principle-wise performance data",
      "Most of the effort goes into getting plant-level data in a consistent format",
    ],
  },
  {
    id: "ghg",
    label: "GHG",
    heading: "Greenhouse gas accounting in three scopes",
    body: "A GHG inventory follows the GHG Protocol and separates emissions into three scopes. Getting Scope 1 and 2 right is a data exercise your own finance and plant teams can own once the boundaries and factors are fixed.",
    points: [
      "Scope 1: direct emissions from fuel burnt on site and company vehicles",
      "Scope 2: indirect emissions from purchased electricity",
      "Scope 3: value chain emissions, including purchased goods, transport and travel",
      "The first year is about boundaries, activity data and choosing emission factors",
    ],
  },
  {
    id: "cbam",
    label: "CBAM",
    heading: "Carbon Border Adjustment Mechanism",
    body: "CBAM is a European Union measure that puts a carbon cost on certain imported goods, including iron and steel, aluminium, cement, fertilisers, electricity and hydrogen. The reporting obligation sits with the EU importer, but the emissions data has to come from the Indian producer.",
    points: [
      "Check whether your product code falls in a covered category",
      "Embedded emissions are calculated per tonne of goods produced",
      "Production route, fuel mix and precursors all affect the number",
      "Buyers usually ask for data in the EU communication template",
    ],
  },
  {
    id: "carbon-markets",
    label: "Carbon Markets",
    heading: "Compliance and voluntary carbon markets",
    body: "India is moving towards a domestic compliance carbon market under the Carbon Credit Trading Scheme, alongside the existing voluntary market for credits. The two work differently and are worth keeping separate in any business case.",
    points: [
      "Compliance market: intensity targets set for notified sectors",
      "Voluntary market: credits issued against approved methodologies",
      "Credit quality, additionality and verification decide realisable value",
      "Any project case should be built on conservative assumptions",
    ],
  },
];

export function EsgKnowledge() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((tab) => tab.id === active)!;

  return (
    <section className="section bg-muted">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">ESG knowledge</p>
          <h2 className="mt-3 text-3xl md:text-4xl">The subjects our clients ask about</h2>
          <p className="prose-body mt-4">
            Short, plain explanations of the requirements that come up most often in Indian
            businesses.
          </p>
        </div>

        <div className="mt-10 border border-border bg-card">
          <div role="tablist" aria-label="ESG topics" className="flex flex-wrap border-b border-border">
            {tabs.map((tab) => {
              const selected = tab.id === active;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(tab.id)}
                  className={`min-h-[48px] border-b-2 px-5 py-3 font-display text-sm font-semibold transition-colors ${
                    selected
                      ? "border-esg text-navy"
                      : "border-transparent text-muted-foreground hover:text-navy"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-9">
            <div>
              <h3 className="font-display text-2xl text-navy">{current.heading}</h3>
              <p className="prose-body mt-4">{current.body}</p>
            </div>
            <ul className="space-y-3 border-l-2 border-esg pl-6">
              {current.points.map((point) => (
                <li key={point} className="text-sm leading-relaxed text-navy/85">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
