export const personalInsuranceSections = [
  {
    title: "Health Insurance",
    items: [
      {
        label: "Critical Illness Cover",
        slug: "critical-illness-insurance",
      },
      { label: "Health Insurance", slug: "health-insurance" },
      { label: "Health Super Top-Up", slug: "health-super-top-up" },
      
      {
        label: "Personal Accident Cover",
        slug: "personal-accident-insurance",
      },
    ],
  },
  {
    title: "Term Insurance",
    items: [
      { label: "Term Insurance", slug: "term-insurance" },
      { label: "Term - ROP", slug: "term---rop" },
      {
        label: "Traditional Life Insurance Plans",
        slug: "traditional-life-insurance-plans",
      },
      {
        label: "Unit Link Insurance Plan",
        slug: "unit-link-insurance-plan",
      },
      
    ],
  },
  {
    title: "Motor",
    items: [
       {
        label: "Commercial Vehicle Insurance",
        slug: "commercial-vehicle-insurance",
      },
      { label: "Motor Insurance", slug: "motor-insurance" },
      { label: "Taxi Insurance", slug: "taxi-insurance" },
     
    ],
  },
  {
    title: "Other Personal Insurance",
    items: [
      { label: "Cycle Insurance", slug: "cycle-insurance" },
      { label: "Home Insurance", slug: "home-insurance" },
      {
        label: "Personal Cyber Insurance",
        slug: "personal-cyber-insurance",
      },
      { label: "Pet Insurance", slug: "pet-insurance" },
      
      { label: "Travel Insurance", slug: "travel-insurance" },
      
    ],
  },
];

export const businessInsuranceSections = [
  {
    title: "Marine & Property Insurance",
    items: [
       { label: "Fire & Burglary Insurance", slug: "fire-burglary-insurance" },
      { label: "Marine & Cargo Insurance", slug: "marine-cargo-insurance" },
      { label: "Office Package Policy", slug: "office-package-policy" },
      { label: "Shop Owner Insurance", slug: "shop-owner-insurance" },
    ],
  },

  {
    title: "Engineering",
    items: [
      { label: "Contractor's All Risk", slug: "contractor-all-risk" },
      {
        label: "Contractor's Plant & Machinery",
        slug: "contractor-plant-machinery",
      },
      { label: "Erection All Risk", slug: "erection-all-risk" },
      
    ],
  },
  {
    title: "Liability",
    items: [
       { label: "Corporate Cyber Insurance", slug: "corporate-cyber-insurance" },
       {
        label: "Directors' & Officers' Liability",
        slug: "director-officers-liability",
      },
       {
        label: "General Liability Insurance",
        slug: "general-liability-insurance",
      },
      { label: "Professional Indemnity", slug: "professional-indemnity" },
      {
        label: "Professional Indemnity For Doctors",
        slug: "prof-indemnity-for-doctors",
      },
      
      { label: "Workmen Compensation", slug: "workmen-compensation" },
     
     
      
    ],
  },
  {
    title: "Employee",
    items: [
      { label: "Group Health Insurance", slug: "group-health-insurance" },
      { label: "Group Personal Accident Insurance", slug: "group-personal-accident" },
      { label: "Group Term Life Insurance", slug: "group-term-life" },
    ],
  },
  {
    title: "Other Business Insurance",
    items: [
      { label: "Errors and Omissions", slug: "errors-and-omissions" },
      { label: "Fleet Insurance", slug: "fleet-insurance" },
      { label: "Surety Bond Insurance", slug: "surety-bond-insurance" },
      { label: "Trade Credit Insurance", slug: "trade-credit-insurance" },
   
      
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
