import estateImg from "@/assets/industrial-estate.jpg";

const sectors = [
  "Manufacturing",
  "Industrial Facilities",
  "Warehouses",
  "Logistics",
  "Corporate Offices",
  "Commercial Buildings",
  "Residential Communities",
  "SMEs",
  "Growing Businesses",
  "Export-oriented Businesses",
];

export function WhoWeServe() {
  return (
    <section className="section bg-background">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Who we serve</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Built for businesses that need things done properly
            </h2>
            <p className="prose-body mt-4">
              Our work sits in plants, warehouses, offices and residential campuses. The
              requirement changes from site to site, the way we run it does not.
            </p>
            <img
              src={estateImg}
              alt="Industrial estate in eastern India at dawn with trucks on the approach road"
              loading="lazy"
              width={1920}
              height={912}
              className="mt-8 hidden w-full object-cover lg:block"
            />
          </div>

          <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {sectors.map((sector, index) => (
              <li key={sector} className="flex items-center gap-4 bg-card px-5 py-5">
                <span className="font-display text-xs font-bold text-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base font-semibold text-navy">{sector}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
