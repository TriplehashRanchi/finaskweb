export const personalInsuranceSections = [
  {
    title: "Health & Life",
    items: [
      { label: "Health Insurance", slug: "health-insurance" },
      { label: "Health Super Top-up", slug: "health-super-top-up" },
      {
        label: "Critical Illness Insurance",
        slug: "critical-illness-insurance",
      },
      {
        label: "Personal Accident Insurance",
        slug: "personal-accident-insurance",
      },
      { label: "Term Insurance", slug: "term-insurance" },
      { label: "Term - ROP", slug: "term---rop" },
      {
        label: "Unit Link Insurance Plan",
        slug: "unit-link-insurance-plan",
      },
      {
        label: "Traditional Life Insurance Plans",
        slug: "traditional-life-insurance-plans",
      },
    ],
  },
  {
    title: "Motor, Travel & More",
    items: [
      { label: "Motor Insurance", slug: "motor-insurance" },
      { label: "Taxi Insurance", slug: "taxi-insurance" },
      { label: "Travel Insurance", slug: "travel-insurance" },
      { label: "Home Insurance", slug: "home-insurance" },
      { label: "Pet Insurance", slug: "pet-insurance" },
      { label: "Cycle Insurance", slug: "cycle-insurance" },
      {
        label: "Personal Cyber Insurance",
        slug: "personal-cyber-insurance",
      },
      { label: "Roadside Assistance", slug: "roadside-assistance" },
    ],
  },
];

export const businessInsuranceSections = [
  {
    title: "Marine & Property",
    items: [
      { label: "Marine & Cargo Insurance", slug: "marine-cargo-insurance" },
      { label: "Fire & Burglary Insurance", slug: "fire-burglary-insurance" },
      { label: "Office Package Policy", slug: "office-package-policy" },
      { label: "Shop Owner Insurance", slug: "shop-owner-insurance" },
    ],
  },
  {
    title: "General Business",
    items: [
      { label: "Surety Bond Insurance", slug: "surety-bond-insurance" },
      { label: "Trade Credit Insurance", slug: "trade-credit-insurance" },
      { label: "Errors and Omissions", slug: "errors-and-omissions" },
      {
        label: "Commercial Vehicle Insurance",
        slug: "commercial-vehicle-insurance",
      },
      { label: "Fleet Insurance", slug: "fleet-insurance" },
    ],
  },
  {
    title: "Engineering",
    items: [
      { label: "Contractor All Risk", slug: "contractor-all-risk" },
      { label: "Erection All Risk", slug: "erection-all-risk" },
      {
        label: "Contractor Plant & Machinery",
        slug: "contractor-plant-machinery",
      },
    ],
  },
  {
    title: "Liability",
    items: [
      { label: "Prof. Indemnity for Doctors", slug: "prof-indemnity-for-doctors" },
      { label: "Professional Indemnity", slug: "professional-indemnity" },
      { label: "Workmen Compensation", slug: "workmen-compensation" },
      {
        label: "General Liability Insurance",
        slug: "general-liability-insurance",
      },
      { label: "Corporate Cyber Insurance", slug: "corporate-cyber-insurance" },
      {
        label: "Director & Officer's Liability",
        slug: "director-officers-liability",
      },
    ],
  },
  {
    title: "Employee Benefits",
    items: [
      { label: "Group Personal Accident", slug: "group-personal-accident" },
      { label: "Group Health Insurance", slug: "group-health-insurance" },
      { label: "Group Term Life", slug: "group-term-life" },
    ],
  },
];

export const allInsuranceMenuItems = [
  ...personalInsuranceSections.flatMap((section) => section.items),
  ...businessInsuranceSections.flatMap((section) => section.items),
].map((item) => ({
  ...item,
  href: `/services/${item.slug}`,
}));
