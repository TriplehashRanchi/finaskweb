export const investmentSections = [
  {
    title: "Core Investment Products",
    items: [
      { label: "Bonds", slug: "bonds" },
      { label: "Corporate FDRs", slug: "corporate-fdrs" },
      { label: "E-Gold", slug: "e-gold" },
      { label: "Mutual Funds", slug: "mutual-funds" },
      { label: "National Pension System", slug: "nps" },
      { label: "Step-Up SIP", slug: "set-up-sip" },
      {
        label: "Systematic Investment Plan ",
        slug: "systematic-investment-plan",
      },
      {
        label: "Systematic Withdrawal Plan ",
        slug: "systematic-withdrawal-plan",
      },
      {
        label: "Systematic Transfer Plan ",
        slug: "systematic-transfer-plan",
      },
      
      
     
      
      
    ],
  },
  {
    title: "Equity & Market-Linked Investments",
    items: [
      { label: "Portfolio Management Services", slug: "pms" },
      { label: "Stock & Broking", slug: "stock-broking" },
      { label: "Unlisted Equity", slug: "unlisted-equity" },
    ],
  },
  {
    title: "Alternative Investments",
    items: [
      {
        label: "Alternative Fixed Income",
        slug: "alternative-fixed-income",
      },
      { label: "Alternative Investment Funds", slug: "aifs" },
      { label: "Peer-to-Peer Lending", slug: "p2p-lending" },
      {
        label: "Specialized Investment Funds",
        slug: "specialised-investment-fund",
      },
      
    
    ],
  },
  {
    title: "Real Estate & Infrastructure",
    items: [
      
       {
        label: "Fractional Commercial Real Estate",
        slug: "fractional-commercial-real-estate",
      },
      { label: "Infrastructure Investment Trusts", slug: "invits" },
      { label: "Real Estate Investment Trusts", slug: "reits" },
     
    ],
  },
  {
    title: "Structured & International Opportunities",
    items: [
      { label: "GIFT City", slug: "gift-city" },

      {
        label: "Loan Against Securities",
        slug: "loan-against-securities",
      },
    ],
  },
];

export const investmentItems = investmentSections
  .flatMap((section) => section.items)
  .map((item) => ({
    ...item,
    href: `/services/${item.slug}`,
  }));

export const allInvestmentMenuItems = investmentItems;
