export type ServiceId =
  | "manpower"
  | "security"
  | "recruitment"
  | "facility"
  | "water-tank"
  | "solar"
  | "esg";

export type Service = {
  id: ServiceId;
  name: string;
  pillar: "people" | "facility" | "esg";
  short: string;
  description: string;
  capabilities: string[];
  support: string[];
};

export const services: Service[] = [
  {
    id: "manpower",
    name: "Manpower Services",
    pillar: "people",
    short: "Skilled, semi-skilled and unskilled manpower with supervision.",
    description:
      "We deploy manpower against your actual site requirement and keep a supervisory line in place so attendance, shift cover and day-to-day coordination do not become your problem.",
    capabilities: [
      "Skilled manpower",
      "Semi-skilled manpower",
      "Unskilled manpower",
      "Site support",
      "Workforce coordination",
      "Supervisory support",
    ],
    support: [
      "Working out shift-wise and skill-wise manpower requirements",
      "Deployment at plant, warehouse and commercial sites",
      "Attendance monitoring and replacement on short notice",
      "A supervisor who is accountable for the deployment",
    ],
  },
  {
    id: "security",
    name: "Security Services",
    pillar: "people",
    short: "Guards and supervisors for industrial and corporate sites.",
    description:
      "Security work depends on discipline, not on paperwork. Our field team comes from a security background and runs deployments the way sites actually need them run.",
    capabilities: [
      "Security guards",
      "Security supervisors",
      "Industrial security",
      "Corporate security",
      "Site supervision",
      "Personnel deployment",
    ],
    support: [
      "Gate control, visitor and vehicle register discipline",
      "Round-the-clock shift deployment with relief planning",
      "Supervisory checks and reporting lines",
      "Coordination with your admin and plant team",
    ],
  },
  {
    id: "recruitment",
    name: "HR Recruitment Support",
    pillar: "people",
    short: "Practical hiring support for plant, site and office roles.",
    description:
      "This is hands-on recruitment support, not a software platform. We understand the requirement, source candidates, do the first level of screening and coordinate the interviews.",
    capabilities: [
      "Candidate sourcing",
      "Recruitment coordination",
      "Screening support",
      "Workforce requirements",
      "Interview coordination",
      "Recruitment administration",
    ],
    support: [
      "Writing down the requirement properly before sourcing starts",
      "Sourcing candidates for plant, site, admin and support roles",
      "First level screening and availability checks",
      "Interview scheduling and follow-up with candidates",
    ],
  },
  {
    id: "facility",
    name: "Facility Management",
    pillar: "facility",
    short: "Housekeeping and site upkeep on a fixed schedule.",
    description:
      "Housekeeping and facility support run on a written schedule with a supervisor checking the work, so standards do not drop after the first month.",
    capabilities: [
      "Housekeeping",
      "Facility support",
      "Site upkeep",
      "Cleaning services",
      "Supervisory support",
    ],
    support: [
      "Daily housekeeping for offices, plants and common areas",
      "Periodic deep cleaning as part of the schedule",
      "Consumables and equipment planning",
      "Supervisor checks and a simple reporting format",
    ],
  },
  {
    id: "water-tank",
    name: "Water Tank Cleaning",
    pillar: "facility",
    short: "Overhead tanks, underground tanks and sumps.",
    description:
      "Complete mechanical cleaning of overhead tanks, underground tanks and sumps, including sludge removal, scrubbing and disinfection, with the tank handed back ready for use.",
    capabilities: [
      "Overhead tank cleaning",
      "Underground tank cleaning",
      "Sump cleaning",
      "Sludge removal",
      "Scrubbing",
      "Disinfection",
    ],
    support: [
      "Site inspection and cleaning plan before the work starts",
      "Draining, sludge removal and scrubbing of all surfaces",
      "Disinfection and refilling",
      "Scheduled repeat cleaning for plants, offices and housing societies",
    ],
  },
  {
    id: "solar",
    name: "Solar Panel Cleaning",
    pillar: "facility",
    short: "Routine cleaning for rooftop and ground-mounted arrays.",
    description:
      "Dust, bird droppings and site debris settle on panels continuously in Indian conditions. We handle routine cleaning of rooftop and ground-mounted installations with trained staff and proper safety practice.",
    capabilities: [
      "Solar panel surface cleaning",
      "Dust and dirt removal",
      "Routine cleaning schedules",
      "Site-level cleaning support",
      "Maintenance cleaning",
    ],
    support: [
      "Site survey covering access, water supply and safety",
      "Cleaning with soft brushes and appropriate equipment",
      "Visual check of panel surface and mounting condition",
      "A fixed cleaning schedule agreed with your site team",
    ],
  },
  {
    id: "esg",
    name: "ESG and Sustainability",
    pillar: "esg",
    short: "ESG advisory, BRSR, GHG, CBAM and reporting support.",
    description:
      "Specialist support for sustainability and climate reporting requirements, delivered by people with corporate experience across Indian and European markets.",
    capabilities: [
      "ESG Advisory",
      "BRSR",
      "GHG",
      "CBAM",
      "Carbon Markets",
      "Sustainability Reporting Support",
    ],
    support: [
      "Understanding which requirements actually apply to your business",
      "Setting up data collection that your own teams can maintain",
      "Preparing BRSR and GHG inventory workings",
      "Working through CBAM data requests from European buyers",
    ],
  },
];

export const getService = (id: ServiceId) => services.find((s) => s.id === id)!;

export const pillars = [
  {
    id: "people" as const,
    title: "People & Security",
    intro: "The right people, properly deployed and supervised.",
    ids: ["manpower", "security", "recruitment"] as ServiceId[],
  },
  {
    id: "facility" as const,
    title: "Facility & Site Services",
    intro: "Keeping the workplace clean, maintained and operational.",
    ids: ["facility", "water-tank", "solar"] as ServiceId[],
  },
  {
    id: "esg" as const,
    title: "ESG & Sustainability",
    intro: "Specialist support for a changing sustainability landscape.",
    ids: ["esg"] as ServiceId[],
  },
];
