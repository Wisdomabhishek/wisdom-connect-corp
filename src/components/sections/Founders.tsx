const founders = [
  {
    name: "Abhishek Kumar",
    role: "Co-Founder | Business Development and Facility Operations",
    initials: "AK",
    bio: "Abhishek focuses on client relationships, business development and facility operations. His experience across commercial and operational responsibilities helps WISDOM understand client requirements, build practical service solutions and maintain long-term working relationships.",
    focus: ["Client relationships", "Business development", "Facility operations"],
  },
  {
    name: "Manoj Kumar Singh",
    role: "Co-Founder | Security and Field Operations",
    initials: "MS",
    bio: "Manoj brings extensive experience in security and field operations, supported by his background with the Central Reserve Police Force and subsequent experience in private security. At WISDOM, his focus is on manpower deployment, personnel supervision, site discipline and reliable day-to-day operations.",
    focus: ["Manpower deployment", "Personnel supervision", "Site discipline"],
  },
];

export function Founders() {
  return (
    <section className="section bg-muted">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">Leadership</p>
          <h2 className="mt-3 text-3xl md:text-4xl">People behind WISDOM</h2>
          <p className="prose-body mt-4">
            Different backgrounds. Complementary strengths. One focus - doing the work properly.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {founders.map((founder) => (
            <article key={founder.name} className="card-flat rule-top p-7 md:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center bg-navy font-display text-lg font-bold text-white">
                  {founder.initials}
                </div>
                <div>
                  <h3 className="font-display text-xl text-navy">{founder.name}</h3>
                  <p className="text-sm text-orange-deep">{founder.role}</p>
                </div>
              </div>
              <p className="prose-body mt-6 border-t border-border pt-6">{founder.bio}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {founder.focus.map((item) => (
                  <li
                    key={item}
                    className="border border-border bg-muted px-3 py-1.5 text-xs font-semibold text-navy"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
