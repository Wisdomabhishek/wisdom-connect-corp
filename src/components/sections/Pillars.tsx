import { Link } from "@tanstack/react-router";
import { getService, pillars } from "@/data/services";
import securityImg from "@/assets/security-gate.jpg";
import facilityImg from "@/assets/facility-housekeeping.jpg";
import esgImg from "@/assets/esg-meeting.jpg";

const pillarImages: Record<string, { src: string; alt: string }> = {
  people: {
    src: securityImg,
    alt: "WISDOM security guard checking the visitor register at an Indian factory gate",
  },
  facility: {
    src: facilityImg,
    alt: "WISDOM housekeeping staff cleaning an Indian corporate office lobby",
  },
  esg: {
    src: esgImg,
    alt: "ESG reporting working session in an Indian corporate office",
  },
};

export function Pillars() {
  return (
    <section className="section bg-background">
      <div className="wrap">
        <div className="max-w-3xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Three connected areas of work</h2>
          <p className="prose-body mt-4">
            Most of our clients start with one requirement and add others over time. The services
            are run by one team, so you are not managing a different vendor for every site
            activity.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const image = pillarImages[pillar.id];
            return (
              <article key={pillar.id} className="card-flat group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col rule-top p-6">
                  <h3 className="font-display text-xl text-navy">{pillar.title}</h3>
                  <p className="mt-2 text-sm font-medium text-orange-deep">{pillar.intro}</p>
                  <ul className="mt-5 flex-1 space-y-3 border-t border-border pt-5">
                    {pillar.ids.map((id) => {
                      const service = getService(id);
                      return (
                        <li key={id}>
                          <Link
                            to="/services"
                            hash={id}
                            className="block text-sm font-semibold text-navy hover:text-orange-deep"
                          >
                            {service.name}
                          </Link>
                          <p className="mt-1 text-sm text-muted-foreground">{service.short}</p>
                        </li>
                      );
                    })}
                  </ul>
                  <Link
                    to="/services"
                    hash={pillar.ids[0]}
                    className="mt-6 inline-flex text-sm font-semibold text-navy link-underline"
                  >
                    Learn more
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
