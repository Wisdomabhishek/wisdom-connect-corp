import securityPhotoAsset from "@/assets/wisdom-security-team.webp.asset.json";
import facilityPhotoAsset from "@/assets/wisdom-facility-cleaning.webp.asset.json";
import solarPhotoAsset from "@/assets/wisdom-solar-cleaning.webp.asset.json";
import waterTankPhotoAsset from "@/assets/wisdom-water-tank-cleaning.png.asset.json";
import hrSupportPhotoAsset from "@/assets/wisdom-hr-support-team.png.asset.json";
import skilledPhoto from "@/assets/skilled-manpower.webp";
import hrActionPhoto from "@/assets/hr-support.webp";

export const securityPhoto = securityPhotoAsset.url;
export const facilityPhoto = facilityPhotoAsset.url;
export const solarPhoto = solarPhotoAsset.url;
export const waterTankPhoto = waterTankPhotoAsset.url;
export { hrActionPhoto };

export type Service = {
  slug: string;
  name: string;
  group: "people" | "facility";
  short: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  who: string[];
  provides: string[];
  process: string[];
  photo?: string;
  alt?: string;
};

export const services: Service[] = [
  {
    slug: "manpower-services",
    name: "Manpower Services",
    group: "people",
    short: "Skilled, semi-skilled and general manpower for daily operations and site work.",
    title: "Manpower Services in India",
    metaTitle: "Manpower Services in India | WISDOM",
    metaDescription:
      "WISDOM provides skilled, semi-skilled and general manpower with shift deployment and site supervision for businesses in Jamshedpur and across India.",
    intro:
      "WISDOM supplies people for day-to-day operations, site requirements and project work, with supervision that keeps attendance and output on track.",
    who: [
      "Factories and industrial plants",
      "Warehouses and logistics operations",
      "Project and site teams",
    ],
    provides: [
      "Skilled, semi-skilled and general manpower",
      "Technical manpower and site support",
      "Shift wise deployment and replacement support",
      "Workforce coordination and supervisory support",
    ],
    process: ["Requirement", "Sourcing", "Deployment", "Supervision", "Review"],
    photo: skilledPhoto,
    alt: "WISDOM technicians working on an electrical panel and a lathe machine in an Indian factory",
  },
  {
    slug: "security-services",
    name: "Security Services",
    group: "people",
    short: "Trained security personnel and supervisors for industrial and commercial sites.",
    title: "Security Services for Businesses",
    metaTitle: "Security Services for Businesses | WISDOM",
    metaDescription:
      "Trained security guards and supervisors for gate management, access control, visitor management and patrolling at industrial and commercial sites in India.",
    intro:
      "WISDOM deploys uniformed security personnel with a clear supervisory line so gate discipline, access control and patrolling are handled consistently.",
    who: [
      "Industrial and manufacturing sites",
      "Commercial buildings and malls",
      "Residential communities and institutions",
    ],
    provides: [
      "Gate management and access control",
      "Visitor and material movement records",
      "Patrolling and shift deployment",
      "Security supervisors and site checks",
    ],
    process: ["Site visit", "Deployment plan", "Posting", "Supervision", "Reporting"],
    photo: securityPhoto,
    alt: "WISDOM security supervisor briefing a line of uniformed WISDOM security guards at an industrial gate",
  },
  {
    slug: "end-to-end-hr-support",
    name: "End-to-End HR Support",
    group: "people",
    short:
      "From sourcing the right candidates to onboarding, WISDOM supports your complete hiring journey.",
    title: "End-to-End HR Support",
    metaTitle: "End-to-End HR Support | WISDOM",
    metaDescription:
      "WISDOM supports the complete hiring journey: requirement, sourcing, screening, interview coordination, documentation, joining and onboarding.",
    intro:
      "From understanding your requirement and sourcing candidates to screening, interview coordination, documentation, joining and onboarding, WISDOM supports the complete hiring process.",
    who: [
      "Companies hiring for plant and site roles",
      "Growing businesses without a large HR team",
      "Employers hiring in volume across shifts",
    ],
    provides: [
      "Requirement understanding and role definition",
      "Candidate sourcing, screening and shortlisting",
      "Interview coordination and selection support",
      "Documentation, joining and onboarding support",
    ],
    process: ["Requirement", "Sourcing", "Screening", "Selection", "Joining", "Onboarding"],
    photo: hrSupportPhotoAsset.url,
    alt: "Two WISDOM professionals discussing candidate documents during an HR support meeting",
  },
  {
    slug: "facility-management",
    name: "Facility Management",
    group: "facility",
    short: "Cleaning operations and site upkeep for clean, well-run workplaces.",
    title: "Facility Management Services",
    metaTitle: "Facility Management Services | WISDOM",
    metaDescription:
      "Facility support, cleaning operations and site upkeep with trained staff, machine based floor cleaning and supervisory checks.",
    intro:
      "WISDOM keeps workplaces clean and orderly with trained staff, the right equipment and supervisory checks after each shift.",
    who: [
      "Offices and corporate buildings",
      "Malls and retail facilities",
      "Plants, warehouses and institutions",
    ],
    provides: [
      "Machine based floor cleaning",
      "Daily cleaning operations",
      "Site upkeep and facility support",
      "Supervision and reporting",
    ],
    process: ["Site scope", "Staffing", "Schedule", "Execution", "Checks"],
    photo: facilityPhoto,
    alt: "WISDOM facility staff cleaning a marble floor with a mop and a floor scrubbing machine",
  },
  {
    slug: "water-tank-cleaning",
    name: "Water Tank Cleaning",
    group: "facility",
    short: "Cleaning of overhead tanks, underground tanks and sumps.",
    title: "Water Tank Cleaning Services",
    metaTitle: "Water Tank Cleaning Services | WISDOM",
    metaDescription:
      "Professional cleaning of overhead tanks, underground tanks and sumps, including sludge removal, scrubbing, cleaning and disinfection.",
    intro:
      "Trained teams with proper equipment clean overhead tanks, underground tanks and sumps, with the work planned around your water supply.",
    who: [
      "Factories and industrial premises",
      "Apartment complexes and institutions",
      "Commercial buildings and hotels",
    ],
    provides: [
      "Overhead and underground tank cleaning",
      "Sump cleaning and sludge removal",
      "Scrubbing, cleaning and disinfection",
      "Completion check with the site team",
    ],
    process: ["Inspection", "Draining", "Sludge removal", "Cleaning", "Disinfection"],
    photo: waterTankPhoto,
    alt: "WISDOM workers in helmets and safety gear washing the inside of a large concrete water tank",
  },
  {
    slug: "solar-panel-cleaning",
    name: "Solar Panel Cleaning",
    group: "facility",
    short: "Routine cleaning to keep solar installations clean and well maintained.",
    title: "Solar Panel Cleaning Services",
    metaTitle: "Solar Panel Cleaning Services | WISDOM",
    metaDescription:
      "Routine solar panel cleaning with trained staff and a set schedule, for rooftop and ground mounted installations in India.",
    intro:
      "WISDOM cleans rooftop and ground mounted solar installations on a set schedule, using the right brushes, water handling and safety practice.",
    who: [
      "Solar plants and ground mounted sites",
      "Rooftop installations on plants and offices",
      "Facility owners with maintenance schedules",
    ],
    provides: [
      "Surface cleaning of panels",
      "Visual check during cleaning",
      "Agreed cleaning schedule",
      "Trained staff with safety practice",
    ],
    process: ["Site check", "Schedule", "Cleaning", "Visual check"],
    photo: solarPhoto,
    alt: "Two WISDOM workers in branded workwear cleaning a row of solar panels with brushes",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
