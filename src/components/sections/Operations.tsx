const items = [
  { title: "People", note: "Right deployment" },
  { title: "Attendance", note: "Regular monitoring" },
  { title: "Security", note: "Supervision and discipline" },
  { title: "Facility", note: "Scheduled service" },
  { title: "Client", note: "Clear communication" },
  { title: "ESG", note: "Structured data and reporting" },
];

export function Operations() {
  return (
    <section className="section bg-background">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">Operating discipline</p>
          <h2 className="mt-3 text-3xl md:text-4xl">How we think about operations</h2>
          <p className="prose-body mt-4">
            Service quality is decided by a few basic things being done every day. These are the
            six we track on every deployment.
          </p>
        </div>

        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.title} className="bg-card p-7">
              <span className="font-display text-xs font-bold text-orange">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg text-navy">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
