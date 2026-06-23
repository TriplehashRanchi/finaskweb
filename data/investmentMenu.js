export const investmentSections = [
  {
    title: "Core Investment Products",
    items: [
      { label: "Mutual Funds", slug: "mutual-funds" },
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
      { label: "Step-Up SIP", slug: "set-up-sip" },
      { label: "Bonds", slug: "bonds" },
      { label: "Corporate FDRs", slug: "corporate-fdrs" },
      { label: "E-Gold", slug: "e-gold" },
      { label: "National Pension System", slug: "nps" },
    ],
  },
  {
    title: "Equity & Market-Linked Investments",
    items: [
      { label: "Portfolio Management Services", slug: "pms" },

      { label: "Unlisted Equity", slug: "unlisted-equity" },
      { label: "Stock & Broking", slug: "stock-broking" },
    ],
  },
  {
    title: "Alternative Investments",
    items: [
      {
        label: "Alternative Fixed Income",
        slug: "alternative-fixed-income",
      },
      {
        label: "Specialized Investment Funds",
        slug: "specialised-investment-fund",
      },
      ,
      { label: "Alternative Investment Funds", slug: "aifs" },
      { label: "Peer-to-Peer Lending", slug: "p2p-lending" },
    ],
  },
  {
    title: "Real Estate & Infrastructure",
    items: [
      { label: "Real Estate Investment Trusts", slug: "reits" },
      { label: "Infrastructure Investment Trusts", slug: "invits" },
      {
        label: "Fractional Commercial Real Estate",
        slug: "fractional-commercial-real-estate",
      },
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
