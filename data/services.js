import { p } from "framer-motion/client";

export const servicesData = [
  // --- INSURANCE ---
  {
    slug: "health-insurance",
    uspLayout: "horizontal-ribbon",
    category: "Insurance",
    title: "Health Insurance",
    tagline: "So Your Wellbeing Remains Untouched by Financial Anxiety",
    description:
      "Good health underpins every other joy from milestones celebrated to simple everyday contentment. Yet the rising intricacies and costs of medical care can quickly erode even the most robust fortunes if left unguarded. \n At Finask Value, we help you find discreet, sophisticated health coverage that stands silently by your side. Whether for your aging parents, a globe-trotting lifestyle or simply to insulate your wealth against life’s medical surprises we curate solutions that protect both your family’s wellbeing and your long-term aspirations. ",
    features: [
      {
        title: "Comprehensive Coverage",
        icon: "/insurance-icons/health-insurance-1.png",
        description:
          "Protection against hospitalization, critical illnesses, and modern treatments.",
      },
      {
        title: "Global Protection",
        icon: "/insurance-icons/health-insurance-3.png",
        description: "Plans that cover you wherever your lifestyle takes you.",
      },
      {
        title: "Family Floater",
        icon: "/insurance-icons/health-insurance-2.png",
        description: "One plan to secure the health of your entire family.",
      },
      {
        title: "Wellness Continuity",
        icon: "/insurance-icons/health-insurance-4.png",
        description:
          "Ensuring uninterrupted care through every stage of life.  ",
      },
    ],
    faq: [
      {
        question: "How does No Claim Bonus benefit me?",
        answer:
          "With every claim-free year, your coverage increases (as per policy terms). This means you get a larger financial cushion for future medical emergencies — without paying proportionately higher premiums. It’s a smart way to build protection year after year.",
      },
      {
        question: "Can I increase my coverage later?",
        answer: "Yes, you can enhance your sum insured at renewal.",
      },
      {
        question: "Does Health Insurance cover maternity expenses?",
        answer:
          "Yes, maternity coverage generally has a waiting period of 2–4 years. Planning in advance ensures you are covered when needed. You may also choose an add-on option with a 9-month, 12-month, or even no waiting period, depending on the policy.",
      },
      {
        question:
          "What is cashless settlement in Health Insurance and how does it work?",
        answer:
          " Cashless settlement enables you to receive treatment at a network hospital without paying the full bill upfront. The insurer directly settles the approved amount with the hospital and you only pay for non-covered charges, if any.",
      },
    ],
    bgImage: "/finask/health.jpg",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "  ",
      promoText: "  ",
      promoBadges1: "Get 0% GST now",
      promoBadges2: "24*7 claims assistance**",
      promoBadges3: "Relationship manager for every customer",
    },
  },
  {
    slug: "health-super-top-up",
    uspLayout: "floating-pills",
    category: "Insurance",
    title: "Health Super Top-Up",
    tagline: "Because the Unforeseen Often Exceeds Conventional Bounds",
    description:
    "Even substantial base health covers may falter before the staggering costs of advanced treatments or repeat hospitalizations. A Health Super Top-Up creates a prudent second layer activating precisely when your primary plan’s limits are surpassed. \n It’s an astute strategy to command expansive protection without exorbitant premiums, allowing your portfolio to remain dedicated to growth rather than unplanned liquidation. \n With rising medical inflation, it’s no longer optional it’s essential foresight. So, when life tests your resilience, your finances stand unshaken.",
     features: [
      {
        title: "High Leverage",
        icon: "/insurance-icons/health-super-top-up-1.png",
        description:
          "Unlocks a larger coverage pool for major medical needs.  ",
      },
      {
        title: "Aggregate Deductible",
        icon: "/insurance-icons/health-super-top-up-2.png",
        description:
          "Deductible applies to the total claims in a year, not per claim.",
      },
      {
        title: "Cost Efficiency",
        icon: "/insurance-icons/health-super-top-up-3.png",
        description:
          "Maximum benefits at a fraction of the cost of higher base plans.  ",
      },
      {
        title: "Future-Ready Protection",
        icon: "/insurance-icons/health-super-top-up-4.png",
        description: "Built to handle evolving healthcare costs.",
      },
    ],
    faq: [
      {
        question:
          "Do I need a Base Policy before buying a Health Super Top-Up?",
        answer:
          "Yes, it is recommended to have a base policy equal to or higher than the deductible amount for proper coverage.",
      },
      {
        question: "Can I cover my family members under the same plan?",
        answer:
          "Yes, most Health Super Top-Up plans allow you to cover your family members under the same policy through a Family Floater option.",
      },
      {
        question:
          "Does the Health Super Top-Up cover multiple hospitalizations in a year?",
        answer:
          "Yes, once the deductible is crossed (through single or multiple claims combined), the Health Super Top-Up covers eligible expenses for the rest of the policy.",
      },
      {
        question: "Is there a waiting period in Health Super Top-Up plans?",
        answer:
          "Yes, similar to base policies, Health Super Top-Up plans may have waiting periods for pre-existing diseases and specific treatments.",
      },
    ],
    bgImage: "/finask/super.webp",
    backgroundPosition: "center",
     faqSection: {
      promoTitle: " ",
      promoText: " ",
      promoBadges1: "60-minute claim support**",
      promoBadges2: "24*7 claims assistance**",
      promoBadges3: "Get 0% GST now",
    },
  },
  {
    slug: "personal-accident-insurance",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Personal Accident Insurance",
    tagline:
      "Because Life’s Minor Stumbles Should Not Disrupt Its Grander Designs.",
    description:
      "Accidents rarely seek permission. A brief mishap can momentarily pause income or, in more severe cases, permanently alter earning trajectories. Personal accident coverage ensures your household’s rhythm continues unbroken — supporting recoveries and sustaining ambitions with quiet financial reinforcement.\nIt’s more than a payout; it’s a promise that dreams remain intact, children’s plans stay on course, and daily comforts don’t give way to compromises.\nFrom covering medical costs to providing income replacement and long-term disability benefits, this shield steps in precisely when life feels most uncertain — so your future’s design stays undisturbed.",
    features: [
      {
        title: "Accidental Death Benefit",
        icon: "/insurance-icons/personal-accident-insurance-1.png",
        description:
          "Financial security for your family with a lump-sum payout in case of an unfortunate loss of life.",
      },
      {
        title: "Permanent Disability Cover",
        icon: "/insurance-icons/personal-accident-insurance-2.png",
        description:
          "Long-term financial support in case of total or partial disability impacting your earning ability.",
      },
      {
        title: "Total Disability Protection",
        icon: "/insurance-icons/personal-accident-insurance-3.png",
        description:
          "Lump-sum support only in case of complete permanent disability, helping secure your income and lifestyle.",
      },
      {
        title: "Future Security",
        icon: "/insurance-icons/personal-accident-insurance-4.png",
        description:
          "Protects long-term goals even in the face of life-altering events.",
      },
    ],
    faq: [
      {
        question: "Who should buy a Personal Accident Insurance?",
        answer:
          "Anyone who earns for their family, travels frequently, drives regularly, or works in physically demanding environments should consider this cover.",
      },
      {
        question: "Do I need a medical check-up to buy this policy?",
        answer:
          "In most cases, no medical check-up is required, making it easy to purchase.",
      },
      {
        question: "What is Permanent Total Disability (PTD)?",
        answer:
          "Permanent Total Disability refers to a condition where a person becomes completely and permanently unable to work due to an accident (for example, loss of both limbs or eyesight).",
      },
      {
        question: "What is Permanent Partial Disability (PPD)?",
        answer:
          "Permanent Partial Disability means partial loss of body function (such as loss of one limb or one eye). The claim amount is paid as per a predefined percentage mentioned in the policy.",
      },
    ],
    bgImage: "/finask/accident.webp",
    backgroundPosition: "top center",
    faqSection: {
      promoTitle: "Get 0% GST now",
      promoText: "24*7 claims assistance**",
      
    },
  },
  {
    slug: "critical-illness-insurance",
    uspLayout: "scroll-popup-modal",
    category: "Insurance",
    title: "  Critical Illness Insurance",
    tagline: "So That Healing Never Demands Dismantling Your Legacy.",
    description:
      "Confronting a serious diagnosis is challenging enough without the added strain of sourcing funds or restructuring investments. Critical illness insurance offers a dignified, immediate payout upon diagnosis, empowering you to secure superior care and protect your family’s accustomed lifestyle — all without distressing your long-horizon financial plans.\n\nIt ensures that while you focus on recovery, your ambitions, your children’s education, and your family’s day-to-day comfort continue undeterred.\nBecause true financial planning doesn’t just anticipate the best — it thoughtfully prepares for the unexpected.",
    features: [
      {
        title: "Second Medical Opinion",
        icon: "/insurance-icons/critical-illness-1.png",
        description:
          "Access expert opinions from leading specialists to make confident treatment decisions.",
      },
      {
        title: "Recovery Support",
        icon: "/insurance-icons/critical-illness-2.png",
        description:
          "Covers rehabilitation and post-treatment care for a smoother return to normal life.",
      },
      {
        title: "Customizable Plans",
        icon: "/insurance-icons/critical-illness-3.png",
        description:
          "Flexibility to choose coverage based on your health risks, lifestyle, and financial goals.",
      },
      {
        title: "Financial Cushion",
        icon: "/insurance-icons/critical-illness-4.png",
        description:
          "A strong buffer against the high cost of critical treatments.",
      },
    ],
    faq: [
      {
        question:
          "How is Critical Illness Insurance different from Health Insurance?",
        answer:
          "Health Insurance reimburses hospital bills, while Critical Illness Insurance pays a fixed lump-sum amount upon diagnosis, which you can use for treatment, recovery, income replacement or household expenses.",
      },
      {
        question:
          "What illnesses are covered under Critical Illness Insurance?",
        answer:
          "Coverage depends on the insurer, but most plans include major conditions like cancer, heart attack, stroke, organ transplant, paralysis, kidney failure, and major surgeries.",
      },
      {
        question: "What is a survival period?",
        answer:
          "A survival period is the minimum number of days (for example, 30 days) you must survive after diagnosis to receive the claim payout.",
      },
      {
        question: "Who should consider Critical Illness Insurance?",
        answer:
          "Anyone with financial responsibilities, family history of serious illnesses, high-stress lifestyle, or limited savings should strongly consider this cover.",
      },
    ],
    bgImage: "/finask/critical-illness-insurance.png",
    backgroundPosition: "top center",
    faqSection: {
      promoTitle: "Digital policy issuance",
      promoText: "Dedicated Relationship manager",
      promoBadges1: "60 minutes claim support**",
      promoBadges2: "10k + Happy Customers",
    },
  },
  // {
  //   slug: "life-insurance",
    // uspLayout: "bottom-sticky-blue",
  //   category: "Insurance",
  //   title: "Life Insurance",
  //   tagline: "Because true love ensures a future unmarred by uncertainty.",
  //   description:
  //     "Life’s journey, however beautifully put together, carries inherent unpredictability. A thoughtfully selected life insurance plan preserves your family’s standard of living, funds your children’s education and weddings, and safeguards your spouse’s peace of mind — all without ever forcing distress sales or uncomfortable compromises.\n\nWe select policies that seamlessly integrate with your estate plans, ensuring that even in your absence, your legacy is fulfilled with grace and dignity.",
  //   features: [
  //     {
  //       title: "Legacy Protection",
  //       description: "Ensures your wealth transfer plans remain intact.",
  //     },
  //     {
  //       title: "Lifestyle Continuity",
  //       description: "Funds to maintain your family's standard of living.",
  //     },
  //     {
  //       title: "Debt Protection",
  //       description: "Covers liabilities so your assets aren't liquidated.",
  //     },
  //   ],
  //   faq: [
  //     {
  //       question: "What is the right age to buy life insurance?",
  //       answer:
  //         "The younger you are, the lower the premiums. Buying early locks in a low rate for the entire term.",
  //     },
  //     {
  //       question: "What is the difference between Term and Endowment plans?",
  //       answer:
  //         "Term insurance offers high cover at low cost with no maturity benefit. Endowment plans offer a mix of insurance and savings with a maturity payout.",
  //     },
  //     {
  //       question: "Are the premiums tax-deductible?",
  //       answer:
  //         "Yes, premiums paid are eligible for tax deduction under Section 80C of the Income Tax Act.",
  //     },
  //   ],
  //   bgImage: "/finask/life.jpg",
  //   faqSection: {
  //     title: "General Question",
  //     description:
  //       "Answers to common questions about our services and how we can help you achieve your financial goals.",
  //     image: "/faq.webp",
  //     consultationTitle: "Connect with an Expert",
  //     consultationButton: "Get Started",
  //   },
  // },
  {
    slug: "term-insurance",
    uspLayout: "scroll-popup-modal",
    category: "Insurance",
    title: "Term Insurance",
    tagline: "Care That Never Fades",
    description:
      "Life’s certainties are few, but your family’s stability should never be one of them. Term Insurance creates a strong financial foundation, ensuring loved ones can continue their lives with dignity, education and independence even in your absence. At Finask Value, we help you choose thoughtfully structured cover that matches your responsibilities, future liabilities and income goals. Whether protecting young children, supporting a spouse or securing aging parents — we curate plans that preserve security when it matters most for generations ahead confidently.",
    features: [
      {
        title: "High Life Cover",
        icon: "/insurance-icons/term-insurance-1.png",
        description:
          "Large protection amounts at comparatively affordable premium costs.",
      },
      {
        title: "Financial Continuity",
        icon: "/insurance-icons/term-insurance-2.png",
        description:
          "Ensures your family’s expenses and goals continue without disruption.",
      },
      {
        title: "Liability Shield",
        icon: "/insurance-icons/term-insurance-3.png",
        description:
          "Protects your financial commitments like loans and EMIs with ease and stability.",
      },
      {
        title: "Smart Coverage",
        icon: "/insurance-icons/term-insurance-4.png",
        description:
          "Optimally structured protection aligned with your income and goals.",
      },
    ],
    faq: [
      {
        question: "What is the ideal Term Insurance cover I should have?",
        answer:
          "A general rule is 5-25 times your annual income based on your age, adjusted for liabilities, lifestyle expenses and future financial goals.",
      },
      {
        question: " Can I add riders to my Term Insurance policy?",
        answer:
          "Yes, you can enhance coverage with riders like Critical Illness Cover, Accidental Death Benefit or Waiver of Premium.",
      },
      {
        question: "When is the best time to buy Term Insurance?",
        answer:
          "The earlier you buy, the lower the premium. Starting young helps lock in affordable rates for long-term protection.",
      },
      {
        question:
          "What is the difference between Term Insurance & Life Insurance?",
        answer:
          "Term Insurance gives high cover at low cost and pays only on death, whereas Traditional Life Insurance combines cover with savings, costs more and offers lower cover.",
      },
    ],
    bgImage: "/finask/term.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: " ",
      promoText: "up to 10% discount ** ",
      promoBadges1: "Digital Policy Issuance",
      promoBadges2: "Now on GST (18% cheaper)",
    },
  },
  {
    slug: "unit-link-insurance-plan",
    uspLayout: "floating-pills",
    category: "Insurance",
    title: "Unit Link Insurance Plan ",
    tagline: "So Protection and Wealth Creation Can Grow Together",
    description:
      "For those who value protection alongside disciplined wealth creation, ULIP offers a refined dual advantage. It combines life cover with market-linked investing, allowing your money to participate in long-term growth while serving broader family goals. At Finask Value, we help you evaluate funds, risk appetite, policy horizons and charges with clarity, so every allocation supports both protection and performance. Whether planning children’s futures, retirement goals or legacy creation — we curate solutions designed to build wealth with purpose over time elegantly.",
    features: [
      {
        title: "Dual Advantage",
        icon: "/insurance-icons/unit-link-insurance-plan-1.png",
        description:
          "Combines life cover with market-linked investing for long-term wealth creation.",
      },
      {
        title: "Fund choice",
        icon: "/insurance-icons/unit-link-insurance-plan-2.png",
        description:
          "Allows you to choose equity or debt exposure based on your investment strategy today.",
      },
      {
        title: "Wealth Switching Flexibility",
        icon: "/insurance-icons/unit-link-insurance-plan-3.png",
        description:
          "Allows seamless switching between funds as your goals and market conditions evolve.",
      },
      {
        title: "Tax-Efficient Wealth Creation",
        icon: "/insurance-icons/unit-link-insurance-plan-4.png",
        description:
          "Helps optimize savings under applicable tax benefits.",
      },
    ],
    faq: [
      {
        question: "How transparent are ULIPs?",
        answer:
          "ULIPs offer high transparency with regular NAV (Net Asset Value) disclosures, fund performance tracking and charge breakdowns.",
      },
      {
        question: "What charges are applicable in ULIP?",
        answer:
          "ULIPs may include premium allocation charges, fund management charges, mortality charges and policy administration fees, depending on the plan.",
      },
      {
        question: "What is the lock-in period in ULIP?",
        answer:
          "ULIPs have a mandatory lock-in period of 5 years. Withdrawals are generally not allowed during this period.",
      },
      {
        question: "Can I partially withdraw from ULIP?",
        answer:
          "Yes, partial withdrawals are allowed after the 5-year lock-in period, subject to policy terms.",
      },
    ],
    bgImage: "/finask/ulip.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Expert help at no extra cost",
      promoText: "  ",
      promoBadges1: "Zero paperwork",
      promoBadges2: "100% online",
        promoBadges3: "In-built Life Cover*",
    },
  },
  {
    slug: "traditional-life-insurance-plans",
    uspLayout: "bottom-sticky-blue",
    category: "Insurance",
    title: "Traditional Life Insurance Plans",
    tagline: "Certainty That Quietly Supports Your Future Financial Milestones",
    description:
      "When predictability matters more than volatility, Traditional Life Insurance Plans offer reassuring financial certainty. They are designed for those who value steady accumulation, defined benefits and disciplined planning over market fluctuations. At Finask Value, we help you identify structures that align with education goals, retirement income, legacy intentions or planned milestones with confidence. Whether you seek assured payouts, capital preservation or dependable long-term savings — we curate solutions that bring stability, visibility and peace to your financial journey for years ahead.",
    features: [
      {
        title: "Guaranteed Returns",
        icon: "/insurance-icons/national-pension-system-1.png",
        description:
          "Offers defined benefits with low uncertainty and stability.",
      },
      {
        title: "Assured Payouts",
        icon: "/insurance-icons/national-pension-system-2.png",
        description:
          "Useful for milestone planning, education needs, or retirement income.",
      },
      {
        title: "Capital Preservation",
        icon: "/insurance-icons/national-pension-system-3.png",
        description:
          "Prioritizes steadiness while supporting disciplined long-term savings objectives for families.",
      },
    ],
    faq: [
      {
        question:
          "What is the difference between Participating and Non-Participating Traditional Life Insurance Plans?",
        answer:
          "Participating Traditional Life Insurance Plans offer bonuses based on company profits, while Non-Participating Traditional Life Insurance Plans provide fixed, guaranteed benefits without bonuses.",
      },
      {
        question: "How are these plans different from ULIPs or Mutual Funds?",
        answer:
          "Traditional Life Insurance Plans offer stable, guaranteed returns with low risk, while ULIPs and Mutual Funds are market-linked and subject to volatility.",
      },
      {
        question: "What are the types of Traditional Life Insurance Plans?",
        answer:
          "Common types include Endowment Plans, Whole Life Insurance, Money-Back Plans and Term Insurance with Return of Premium options.",
      },
      {
        question: "What happens if I stop paying premiums?",
        answer:
          "The policy may become paid-up or lapse, depending on the terms and number of premiums paid.",
      },
    ],
    bgImage: "/finask/traditional-guaranteed-saving.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Guaranteed Returns",
      promoText: "Traditional Life Insurance Plans",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "motor-insurance",
    uspLayout: "floating-pills",
    category: "Insurance",
    title: "Motor Insurance",
    tagline: "Drive with Confidence, Insured Every Mile",
    description:
      "Your vehicles — whether cherished classics or trusted everyday drives — are more than mere conveyances. They reflect taste, independence and a lifestyle carefully cultivated. \n Our Motor Insurance solutions go far beyond basic compliance. We find tailored covers that account for true market value, zero depreciation concerns and seamless repair or replacement — so every drive remains a pleasure, never a preoccupation. \n From accidental damages to theft and liability, we ensure you are shielded from life’s unforeseen detours. Because with the right protection, your journeys can stay focused on joy — not just risk.",
    features: [
      {
        title: "Zero depreciation",
        icon: "/insurance-icons/motor-insurance-1.png",
        description: "Full claim amount without deduction for depreciation.",
      },
      {
        title: "Roadside Assistance",
        icon: "/insurance-icons/motor-insurance-2.png",
        description: "24x7 support for breakdowns and emergencies.",
      },
      {
        title: "Engine Protection",
        icon: "/insurance-icons/motor-insurance-3.png",
        description:
          "Cover for engine damage due to water ingression or leakage.",
      },
      {
        title: "Peace of Mind",
        icon: "/insurance-icons/motor-insurance-4.png",
        description:
          "Enjoy every drive without worrying about uncertainties.",
      },
    ],
    faq: [
      {
        question: "Is Motor Insurance mandatory?",
        answer:
          "Yes, as per law, at least Third-Party Motor Insurance is mandatory for all vehicles on Indian roads.",
      },
      {
        question:
          "What is the difference between Third-Party Motor and Comprehensive Motor Insurance?",
        answer:
          "Third-Party Motor Insurance covers damage or injury caused to others, while Comprehensive Motor Insurance covers third-party liabilities plus damage to your own vehicle due to accident, theft, fire, natural calamities, etc.",
      },
      {
        question: "What is No Claim Bonus (NCB) in Motor Insurance?",
        answer:
          "No Claim Bonus (NCB) is a discount on your premium for every claim-free year. The longer you go without making a claim, the higher your discount at renewal.",
      },
      {
        question: "Can I transfer my Motor Insurance Policy?",
        answer:
          "Yes, Motor Insurance can be transferred to a new owner when the vehicle is sold, subject to insurer approval.",
      },
    ],
    bgImage: "/finask/motor-insurance.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Customize your Vehicle IDV & Addons",
      promoText: " ",
      promoBadges1: "Cashless Claims**",
      promoBadges2: "Digital Policy Issuance",
        promoBadges3: "24*7 Claims Support**",
    },
  },
  {
    slug: "travel-insurance",
    uspLayout: "scroll-popup-modal",
    category: "Insurance",
    title: "Travel Insurance",
    tagline: " Because Journeys Should Yield Memories, Not Misgivings",
    description:
      "Exploring the world — be it for business negotiations in London or leisurely summers in the Bahamas — brings unparalleled joy. Yet travel also carries the occasional turbulence: misplaced luggage, unexpected illness or sudden disruptions. \n With finely attuned global coverage, we ensure these inconveniences never escalate into financial or emotional burdens — so your plans proceed unhindered and your mind stays at ease. \n From emergency evacuations to hotel cancellations, we safeguard every leg of your itinerary. So, you can immerse fully in new cultures and experiences, knowing we are quietly managing the ‘what ifs.’ ",
    features: [
      {
        title: "Medical Emergencies",
        icon: "/insurance-icons/travel-insurance-1.png",
        description: "Coverage for hospitalization and treatment abroad.",
      },
      {
        title: "Trip Cancellation",
        icon: "/insurance-icons/travel-insurance-2.png",
        description: "Reimbursement for non-refundable bookings.",
      },
      {
        title: "Baggage Loss",
        icon: "/insurance-icons/travel-insurance-3.png",
        description: "Compensation for lost or delayed checked-in baggage.",
      },
      {
        title: "Emergency Travel Support",
        icon: "/insurance-icons/travel-insurance-4.png",
        description:
          "Immediate assistance during unforeseen travel emergencies.",
      },
    ],
    faq: [
      {
        question: "Is Travel Insurance mandatory?",
        answer:
          "Travel Insurance is mandatory for some countries like Schengen countries, while for others it is strongly recommended for financial protection.",
      },
      {
        question: "How is the claim settled in Travel Insurance?",
        answer:
          "Claims can be settled cashless at network hospitals abroad or through reimbursement after submitting required documents.",
      },
      {
        question: "Can senior citizens buy Travel Insurance?",
        answer:
          "Yes, many insurers offer travel insurance plans for senior citizens, though medical screening may apply.",
      },
      {
        question: "Does Travel Insurance cover pre-existing diseases?",
        answer:
          "Coverage for pre-existing conditions varies by policy. Some plans offer limited coverage for life-threatening emergencies and other pre-defined sum insured coverages arising from pre-existing illnesses.",
      },
    ],
    bgImage: "/finask/travel-insurance.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Affordable Premiums",
      promoText: "Dedicated Relationship Manager",
      promoBadges1: "Digital policy Issuance",
      promoBadges2: "Affordable Premiums",
    },
  },
  // {
  //   slug: "property-insurance",
    // uspLayout: "bottom-sticky-blue",
  //   category: "Insurance",
  //   title: "Property Insurance",
  //   tagline: "Because a structure’s worth often transcends bricks and mortar.",
  //   description:
  //     "Whether it’s the villa hosting annual family gatherings or commercial spaces anchoring your business empire, we ensure each property is thoughtfully safeguarded. Should calamities arise, recovery unfolds without undue financial strain or disruption to broader ambitions.\n\nBeyond mere compensation, it’s about honoring the memories, livelihoods, and futures those walls shelter.\nWith Finask Value, your property stands protected — so your life’s stories and successes continue uninterrupted, come what may.",
  //   features: [
  //     {
  //       title: "Comprehensive Cover",
  //       description: "Protection for residential and commercial properties.",
  //     },
  //     {
  //       title: "Reinstatement Value",
  //       description: "Claims settled based on cost of reconstruction.",
  //     },
  //   ],
  //   faq: [
  //     {
  //       question: "What does Property Insurance typically cover?",
  //       answer:
  //         "It can cover the building structure, interiors, furniture, fixtures, equipment, and sometimes valuable contents, depending on the policy selected.",
  //     },
  //     {
  //       question: "Does Property Insurance cover natural calamities?",
  //       answer:
  //         "Yes, most comprehensive property policies cover risks like flood, storm, earthquake (if opted), and other natural disasters as mentioned in the policy.",
  //     },
  //     {
  //       question: "How is the sum insured determined?",
  //       answer:
  //         "The sum insured is usually based on the reconstruction value of the property (for building), pre agreed value and the replacement value of contents.",
  //     },
  //     {
  //       question: "What is not covered under Property Insurance?",
  //       answer:
  //         "Common exclusions may include wear and tear, gradual deterioration, intentional damage, and losses not specifically listed in the policy.",
  //     },
  //   ],
  //   bgImage: "/finask/property-insurance.webp",
  //   faqSection: {
  //     title: "General Question",
  //     description:
  //       "Answers to common questions about our services and how we can help you achieve your financial goals.",
  //     image: "/faq.webp",
  //     consultationTitle: "Connect with an Expert",
  //     consultationButton: "Get Started",
  //   },
  // },
  {
    slug: "fire-burglary-insurance",
    uspLayout: "bottom-sticky-blue",
    category: "Insurance",
    title: "Fire & Burglary Insurance",
    tagline:
      "Because What You Have Meticulously Built Deserves Unwavering Guardianship",
    description:
      "Your homes, offices, factories — they embody years of aspirations and efforts. Unforeseen incidents like fires or intrusions should not possess the power to erase that legacy. We devise protections that enable swift restitution, preserving both your tangible assets and your family’s composure. \n It’s about more than rebuilding walls or replacing inventory — it’s about restoring normalcy without enduring financial distress. ",
    features: [
      {
        title: "Reliable Protection",
        icon: "/insurance-icons/fire-burglary-insurance-1.png",
        description:
          "A trusted and dependable approach ensuring your financial security at every stage.",
      },
      {
        title: "Smart Protection Planning",
        icon: "/insurance-icons/fire-burglary-insurance-2.png",
        description:
          "Provides comprehensive protection in a cost-efficient manner.",
      },
      {
        title: "Claim Settlement",
        icon: "/insurance-icons/fire-burglary-insurance-3.png",
        description:
          "Faster processing to restore normalcy quickly.",
      },
      {
        title: "Asset Protection",
        icon: "/insurance-icons/fire-burglary-insurance-4.png",
        description:
          "Safeguards your property and valuables against fire, theft, and unforeseen damage.",
      },
    ],
    faq: [
      {
        question: "What does Fire and Burglary Insurance typically covers?",
        answer:
          "Fire Insurance generally covers damage caused by fire, lightning, explosion, storm, flood, earthquake (if opted) and other specified perils, while Burglary Insurance covers loss or damage to property due to forced entry, theft or housebreaking, subject to policy conditions.",
      },
      {
        question: "Who should consider Fire & Burglary Insurance?",
        answer:
          "Homeowners, shop owners, warehouse operators, and business establishments should consider this policy to protect their assets and inventory.",
      },
      {
        question: "Does this policy cover both building and contents?",
        answer:
          "Yes, coverage can be taken for the building structure, stock, machinery, furniture, fixtures, and other contents depending on your requirement.",
      },
      {
        question: "What is not covered under Fire & Burglary Insurance?",
        answer:
          "Common exclusions may include intentional damage, war-related events, gradual wear and tear, or theft without forced entry (unless specifically covered).",
      },
    ],
    bgImage: "/finask/fire-and-urglary.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Tailor-Made Insurance Solutions for Every Business",
      promoText: "Fast & Reliable Claims Assistance",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "marine-cargo-insurance",
    uspLayout: "scroll-popup-modal",
    category: "Insurance",
    title: "Marine & Cargo Insurance",
    tagline: "In Business, Logistics Is More Than Movement It’s A Promise",
    description:
      "A single damaged, lost or delayed consignment can lead to revenue loss, supply chain disruptions or breached contracts—that’s where comprehensive coverage becomes critical. \n Our Marine & Cargo Insurance is tailored for businesses engaged in domestic and international trade. It provides protection against physical loss or damage to goods in transit, across all modes of transportation — air, sea, road or rail. Whether you are shipping raw materials, finished products or high-value equipment, our policies are structured to absorb the risk — not your balance sheet. \n With Finask Value, you protect not just your shipments, but your profitability, reliability and business continuity.",
    features: [
      {
        title: "Securing Your Supply Chain",
        icon: "/insurance-icons/marine-cargo-insurance-1.png",
        description:
          "Minimizing disruptions by protecting goods from origin to destination.",
      },
      {
        title: "Seamless Cross-Border Protection",
        icon: "/insurance-icons/marine-cargo-insurance-2.png",
        description:
          "Confidence to operate across borders with robust risk coverage in place.",
      },
      {
        title: "Business Growth Support",
        icon: "/insurance-icons/marine-cargo-insurance-3.png",
        description:
          "Expand your trade operations knowing every shipment is well protected.",
      },
      {
        title: "Multi-Mode Coverage",
        icon: "/insurance-icons/marine-cargo-insurance-4.png",
        description:
          "Protection across air, sea, road, and rail shipments.",
      },
    ],
    faq: [
      {
        question: "Can fragile goods be insured?",
        answer:
          "Yes, fragile items can be insured, but they may require special packaging and conditions.",
      },
      {
        question:
          "What is the difference between Marine Insurance and Cargo Insurance?",
        answer:
          "Marine Insurance broadly covers ships, vessels and goods in transit, while Cargo Insurance specifically covers the goods being transported.",
      },
      {
        question: "Does Marine Insurance cover pilferage (theft in parts)?",
        answer:
          "Yes, many policies cover partial theft or pilferage during transit, depending on policy conditions.",
      },
      {
        question: "What is an Open Policy in Marine Insurance?",
        answer:
          "An Open Policy provides continuous coverage for multiple shipments over a specified period, suitable for businesses with frequent consignments.",
      },
    ],
    bgImage: "/finask/marine-and-cargo-insurance.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Expert Guidance on Transit & Trade Risks",
      promoText: "Fast & Hassle-Free Claims Assistance",
      promoBadges1: "Digital policy issuance",
      promoBadges2: "Diverse coverage under INCO terms",
    },
  },
  // {
  //   slug: "corporate-insurance",
    // uspLayout: "horizontal-ribbon",
  //   category: "Insurance",
  //   title: "Corporate Insurance",
  //   tagline: "Because enterprises flourish on foresight and resilience.",
  //   description:
  //     "Businesses, especially those stewarded across generations, thrive when well insulated against unpredictability. From group health schemes nurturing employee well-being to directors’ liability and cyber safeguards, we construct layered protections. Each is calibrated to uphold operational continuity and safeguard stakeholder confidence, even amid unforeseen tests.\n\nIt’s more than risk transfer — it’s strategic assurance that empowers growth without hesitation.\nWith Finask Value, your enterprise gains a partner dedicated to shielding its ambitions, reputation, and hard-won legacy from vulnerabilities that could otherwise disrupt your vision.",
  //   features: [
  //     {
  //       title: "Group Health",
  //       description: "Comprehensive health benefits for employees.",
  //     },
  //     {
  //       title: "Liability Covers",
  //       description: "Directors & Officers, Public Liability, and more.",
  //     },
  //     {
  //       title: "Asset Protection",
  //       description: "All-risk policies for business assets.",
  //     },
  //   ],
  //   faq: [
  //     {
  //       question: "Can it be customized?",
  //       answer:
  //         "Yes, corporate plans are highly customizable based on company size, industry, and specific risk exposure.",
  //     },
  //     {
  //       question: "What is Directors & Officers (D&O) Liability?",
  //       answer:
  //         "It protects company directors and officers from personal losses if they are sued for alleged wrongful acts in managing the company.",
  //     },
  //     {
  //       question: "Is Group Health Insurance mandatory?",
  //       answer:
  //         "While not strictly mandatory for all, it is a standard employee benefit and often required for compliance in certain sectors post-COVID.",
  //     },
  //     {
  //       question: "Does it cover contract workers?",
  //       answer:
  //         "Yes, policies can be structured to cover contract workers and temporary staff.",
  //     },
  //   ],
  //   bgImage: "/finask/corporate.webp",
  //   faqSection: {
  //     title: "General Question",
  //     description:
  //       "Answers to common questions about our services and how we can help you achieve your financial goals.",
  //     image: "/faq.webp",
  //     consultationTitle: "Connect with an Expert",
  //     consultationButton: "Get Started",
  //   },
  // },
  // {
  //   slug: "cyber-insurance",
    // uspLayout: "floating-pills",
  //   category: "Insurance",
  //   title: "Cyber Insurance",
  //   tagline: "Because your data is an asset — and a vulnerability.",
  //   description:
  //     "In a world where a single click can compromise years of reputation and revenue, cyber insurance stands guard. It shields you from financial losses arising from hacks, data theft, ransomware, or even inadvertent breaches.\n So you can innovate, operate, and connect fearlessly — knowing that if the unexpected strikes, your business resilience is already insured.",
  //   features: [
  //     {
  //       title: "Data Breach Cover",
  //       description: "Costs for legal, forensic, and notification services.",
  //     },
  //     {
  //       title: "Cyber Extortion",
  //       description: "Coverage for ransomware payments and negotiation.",
  //     },
  //     {
  //       title: "Business Interruption",
  //       description: "Loss of income due to network downtime.",
  //     },
  //   ],
  //   faq: [
  //     {
  //       question: "Who should consider Cyber Insurance?",
  //       answer:
  //         "Any business that stores customer data, processes online payments, uses cloud systems, or relies on digital operations should consider cyber protection — regardless of size.",
  //     },
  //     {
  //       question: "What does Cyber Insurance typically cover?",
  //       answer:
  //         "It may cover data breach costs, ransomware payments, business interruption, legal expenses, regulatory penalties (where insurable), forensic investigation, and customer notification expenses.",
  //     },
  //     {
  //       question: "Does Cyber Insurance cover ransomware attacks?",
  //       answer:
  //         "Yes, most comprehensive cyber policies cover ransomware-related losses, including recovery costs and business interruption, subject to policy terms.",
  //     },
  //     {
  //       question: "Does Cyber Insurance cover third-party liabilities?",
  //       answer:
  //         "Yes, it can cover legal claims made by customers, vendors, or partners if their data is compromised due to a cyber incident.",
  //     },
  //     {
  //       question: "What is not covered under Cyber Insurance?",
  //       answer:
  //         "Common exclusions may include intentional acts, prior known incidents, inadequate security practices, or unreported breaches.",
  //     },
  //   ],
  //   bgImage: "/finask/cyber-insurance.png",
  //   faqSection: {
  //     title: "General Question",
  //     description:
  //       "Answers to common questions about our services and how we can help you achieve your financial goals.",
  //     image: "/faq.webp",
  //     consultationTitle: "Connect with an Expert",
  //     consultationButton: "Get Started",
  //   },
  // },
  {
    slug: "director-officers-liability",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: " Directors’ and Officers’ Liability Insurance ",
    tagline:
      "Because Leadership Carries Responsibilities That Outlive The Leader",
    description:
      "Directors’ and Officers’ Liability Insurance (D&O) is more than a personal safety net — it’s a strategic safeguard for businesses. It ensures that if the unthinkable happens, key obligations are met, debts are covered and shareholder or partner transitions remain smooth, protecting enterprise value. \n Because your vision should not falter, even if life takes an unforeseen turn. \n At Finask Value, we help founders, directors and key management personnel structure life cover not just for personal protection—but for business continuity. It is not just about preparing for loss—it’s about preserving leadership, legacy and long-term confidence. \n This coverage can support succession planning, stabilize cash flow, reinforce loan and credit obligations and signal preparedness to investors and stakeholders. \n It’s more than a policy—it’s a contingency plan for confidence. Leadership may be personal, but its impact is profoundly institutional. ",
    features: [
      {
        title: "Seamless Succession Planning",
        icon: "/insurance-icons/directors-officers-liability-1.png",
        description:
          "Ensures smooth transition of ownership and management without disrupting business operations.",
      },
      {
        title: "Enterprise Value Protection",
        icon: "/insurance-icons/directors-officers-liability-2.png",
        description:
          "Preserves overall business valuation and stakeholder interests.",
      },
      {
        title: "Debt & Liability Coverage",
        icon: "/insurance-icons/directors-officers-liability-3.png",
        description:
          "Helps settle business loans and financial obligations.",
      },
      {
        title: "Investor Confidence Support",
        icon: "/insurance-icons/directors-officers-liability-4.png",
        description:
          "Signals preparedness and strengthens trust among investors and partners.",
      },
    ],
    faq: [
      {
        question:
          "Can Directors’ and Officers’ Liability Insurance cover Startups?",
        answer:
          "Yes, Startups are strongly encouraged to take Directors’ and Officers’ Liability Insurance to protect founders and early-stage leadership from governance-related risks.",
      },
      {
        question:
          "What are common claims under Directors’ and Officers’ Liability Insurance?",
        answer:
          "Common claims include mismanagement, breach of fiduciary duty, regulatory violations, and shareholder disputes.",
      },
      {
        question:
          "Who pays the premium for Directors’ and Officers’ Liability Insurance?",
        answer:
          "Typically, the company pays the premium, as the policy is taken to protect business interests.",
      },
      {
        question:
          " Who receives the claim amount in Directors’ and Officers’ Liability Insurance?",
        answer:
          "In most cases, the company is the beneficiary and receives the payout to manage liabilities, stabilize operations, or compensate financial loss.",
      },
    ],
    bgImage: "/finask/directors-life-insurance.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest ₹10k/month & Get",
      promoText: "₹1 Crore*Tax-Free",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "group-personal-accident",
    uspLayout: "bottom-sticky-banner",
    category: "Corporate Insurance",
    title: "Group Personal Accident Insurance",
    tagline: "Financial Protection Against Accidental Risks",
    description:
      "Group Personal Accident Insurance (GPAI) is an insurance policy purchased by an employer to protect employees against financial losses caused by accidents. Under a single master policy, all employees are covered for accidental death, disability, and injury-related financial risks. Unlike health insurance, which covers medical treatment, Group Personal Accident Insurance provides direct financial compensation to employees or their families if an accident leads to death or disability. This makes GPAI an essential employee benefit for organizations across industries, especially where employees travel frequently or work in higher-risk environments.",
    features: [
      {
        title: "Accidental Death Cover",
        icon: "/insurance-icons/group-personal-accident-1.png",
        description:
          "If an employee dies due to an accident, the nominee receives the full sum insured as a lump-sum payout.",
      },
      {
        title: "Disability Protection",
        icon: "/insurance-icons/group-personal-accident-2.png",
        description:
          "Covers Permanent Total Disability (PTD), Permanent Partial Disability (PPD), and Temporary Total Disability (TTD) based on policy terms.",
      },
      {
        title: "Family Support",
        icon: "/insurance-icons/group-personal-accident-3.png",
        description:
          "Ensures dependents are financially protected during difficult times.",
      },
      {
        title: "Claim Settlement",
        icon: "/insurance-icons/group-personal-accident-4.png",
        description:
          "Ensures quick financial assistance to employees or nominees.",
      },
    ],
    faq: [
      {
        question:
          "Is there any waiting period under Group Personal Accident Insurance?",
        answer:
          "No, Group Personal Accident Insurance policies typically have no waiting period and coverage starts immediately after policy activation.",
      },
      {
        question:
          "How is Group Personal Accident Insurance different from Workmen Compensation Insurance?",
        answer:
          "Group Personal Accident Insurance provides fixed benefits regardless of salary, while Workmen Compensation is legally mandated and salary-based compensation.",
      },
      {
        question:
          "Is Group Personal Accident Insurance coverage limited to the workplace only?",
        answer:
          "No, Group Personal Accident Insurance coverage usually applies 24x7 worldwide, including accidents at work, during travel, commuting, or at home.",
      },
    ],
    bgImage: "/finask/group-personal-accident-insurance.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Zero Waiting Periods",
      promoText: " Dedicated Relationship Manager",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "group-term-life",
    uspLayout: "floating-pills",
    category: "Corporate Insurance",
    title: "Group Term Life Insurance",
    tagline: "Financial Protection for Your Employees’ Families",
    description:
      "Group Term Life Insurance (GTLI) is a life insurance policy purchased by an employer to provide financial protection to employees under a single master policy. In the unfortunate event of an employee’s death due to illness, accident, or natural causes, the nominee receives a lump-sum payout, ensuring financial security for the family. Unlike individual life insurance, group term life policies provide immediate coverage, usually without medical tests or lengthy documentation. This makes it one of the most valuable and affordable employee benefits for organizations.",
    features: [
      {
        title: "Death Cover",
        icon: "/insurance-icons/group-term-life-1.png",
        description:
          "Provides financial protection in case of death due to illness, natural causes, or accidents.",
      },
      {
        title: "Immediate Coverage",
        icon: "/insurance-icons/group-term-life-2.png",
        description:
          "Employees are usually covered from day one of employment without medical underwriting.",
      },
      {
        title: "Flexible Coverage Model",
        icon: "/insurance-icons/group-term-life-3.png",
        description:
          "Employers can choose fixed sum assured or salary-linked cover, along with optional riders like accidental death and critical illness.",
      },
      {
        title: "Risk-Free Enrolment",
        icon: "/insurance-icons/group-term-life-4.png",
        description:
          "Typically requires no medical underwriting for eligible employees.",
      },
    ],
    faq: [
      {
        question:
          "Can Group Term Life Insurance be customized for different employee levels?",
        answer:
          "Yes, employers can structure coverage based on designation, salary slabs or job roles.",
      },
      {
        question: "Is suicide covered under Group Term Life Insurance?",
        answer:
          "Coverage for suicide depends on policy terms, but many Group Term Life Insurance plans cover suicide after a specified waiting period, as per insurer rules.",
      },
      {
        question:
          "What are the most common coverage models in Group Term Life Insurance?",
        answer:
          "The two common models are Fixed Sum Assured, where all employees receive the same cover amount, and Salary-Linked Cover, where the cover is linked to annual CTC.",
      },
      {
        question: "Why do companies offer Group Term Life Insurance?",
        answer:
          "It helps organizations protect employees’ families financially, improve employee loyalty and retention, enhance employee benefits, and demonstrate commitment to workforce well-being.",
      },
    ],
    bgImage: "/finask/group-term-life-insurance.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: " ",
      promoText: " ",
      promoBadges1: "Coverage from Day 1*",
      promoBadges2: " Keep- Claim Support",
      promoBadges3: " 24*7 Support",
    },
  },
  {
    slug: "group-health-insurance",
    uspLayout: "scroll-popup-modal",
    category: "Corporate Insurance",
    title: "Group Health Insurance",
    tagline: "Protect Your Employees with Comprehensive Group Health Insurance",
    description:
      "Group Health Insurance is a health insurance policy purchased by an employer to provide medical coverage to employees and, in many cases, their family members. Instead of individual policies, a single master policy covers the entire workforce, offering affordable and comprehensive healthcare protection. For businesses, group health insurance is one of the most cost-effective employee benefits, helping attract talent, improve retention, and ensure financial protection against rising healthcare costs. \n Choosing the right Group Health Insurance requires understanding your workforce needs, coverage requirements and budget. \n At Finask Value, we help businesses compare and choose the most suitable Group Health Insurance plans from leading insurers with transparent guidance and customized solutions.",
    features: [
      {
        title: "Hospitalisation Coverage",
        icon: "/insurance-icons/group-health-1.png",
        description:
          "Covers room charges, doctor fees, medicines, and treatment costs.",
      },
      {
        title: "Family Protection",
        icon: "/insurance-icons/group-health-2.png",
        description:
          "Coverage can often be extended to spouse, children, and sometimes parents.",
      },
      {
        title: "Cashless & Day-One Benefits",
        icon: "/insurance-icons/group-health-3.png",
        description:
          "Most plans offer cashless hospitalisation and immediate coverage, often including pre-existing conditions from day one.",
      },
      {
        title: "Employee Health Security",
        icon: "/insurance-icons/group-health-4.png",
        description:
          "Comprehensive medical coverage that protects employees and strengthens workforce well-being.",
      },
    ],
    faq: [
      {
        question: "Is there a maximum age limit in Group Health Insurance?",
        answer:
          "Yes, eligibility and age limits depend on the insurer and employer’s group policy structure.",
      },
      {
        question: "What is a co-payment in Group Health Insurance?",
        answer:
          "Co-payment means the employee shares a fixed percentage of the medical bill with the insurer.",
      },
      {
        question: "Can employees choose any hospital for treatment?",
        answer:
          "Yes, employees can choose any hospital, but cashless benefits are available only at network hospitals.",
      },
      {
        question:
          "Are medical tests typically required before enrolling in Group Health Insurance?",
        answer:
          "Usually, medical tests are not required for employees enrolling under a Group Health Insurance policy, but this may vary based on the insurer and policy terms.",
      },
    ],
    bgImage: "/finask/group-health-insurance.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: " ",
      promoText: "Wide range Wellness Benefit",
      promoBadges1: "Dedicated Relationship Manager     ",
      promoBadges2: "24*7 Support",
    },
  },
  {
    slug: "health-assistance",
    uspLayout: "horizontal-ribbon",
    category: "Healthcare Assistance",
    title: "Health Assistance",
    tagline: "Access World-Class Healthcare Services at the Tap of a Button",
    description:
      "Your family’s health should never take a back seat due to a busy schedule or lack of access to medical services. Health Assistance enables you and your loved ones to access quality healthcare services from the comfort of your home. With a comprehensive range of digital healthcare solutions, you can consult doctors, schedule diagnostic tests, order medicines, and manage your health easily through a single platform. Stay proactive about your well-being and ensure your family always has access to reliable, convenient, and affordable healthcare services. \n Modern lifestyles often make it difficult to prioritize health. Health Assistance helps bridge that gap with quick and convenient access to healthcare professionals and services.",
    features: [
      {
        title: "Doctor Teleconsultation",
        icon: "/insurance-icons/health-assistance-1.png",
        description:
          "Consult experienced doctors remotely through secure video or phone consultations.",
      },
      {
        title: "Diagnostic & Pharmacy",
        icon: "/insurance-icons/health-assistance-2.png",
        description:
          "Book laboratory tests, MRI/X-ray scans, and order medicines for home delivery.",
      },
      {
        title: "Wellness & Home Care",
        icon: "/insurance-icons/health-assistance-3.png",
        description:
          "Access self-care plans, nursing care, live health interactions, and gym or yoga sessions.",
      },
      {
        title: "Paperless Experience",
        icon: "/insurance-icons/health-assistance-4.png",
        description:
          "Fully digital healthcare management system.",
      },
    ],
    faq: [
      {
        question: "Is Health Assistance affordable?",
        answer:
          "It is generally cost-effective, with options for subscription-based or pay-per-use services depending on the plan.",
      },
      {
        question: "What happens if I miss a scheduled consultation?",
        answer:
          "You can usually reschedule the appointment or book another available slot.",
      },
      {
        question: "How is patient data managed and protected?",
        answer:
          "Health Assistance platforms use secure encryption, access controls, and compliance-driven systems to protect sensitive health data.",
      },
      {
        question:
          "Does Health Assistance offer corporate wellness analytics support?",
        answer:
          "In enterprise setups, it can provide aggregated health insights to help organizations design better employee wellness programs.",
      },
    ],
    bgImage: "/finask/health-assistance.webp",
    backgroundPosition: "top center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "roadside-assistance",
    uspLayout: "floating-pills",
    category: "Motor Assistance",
    title: "Roadside Assistance",
    tagline: "24x7 Support When the Unexpected Happens on the Road",
    description:
      "Unexpected situations can occur anytime while you are on the road. Even with regular servicing and careful driving, disruptions can still interrupt your journey. \n Roadside Assistance (RSA) ensures that help is always available when you need it most. From minor fixes to emergency towing, it covers a wide range of situations. Whether you are stranded due to a mechanical issue, a flat tyre or misplaced car keys, it provides quick support and emergency services wherever you are, at any time. \n With 24x7 availability, you can drive with confidence knowing that professional help is just a call away. This service is designed to handle vehicle emergencies efficiently, minimizing inconvenience and getting you back on the road quickly. ",
    features: [
      {
        title: "24X7 Emergency support",
        icon: "/insurance-icons/roadside-assistance-1.png",
        description:
          "Round-the-clock assistance anytime, anywhere during breakdowns or emergencies.",
      },
      {
        title: "On- Road Service",
        icon: "/insurance-icons/roadside-assistance-2.png",
        description:
          "Includes flat tyre repair or replacement, battery jumpstart, lost key assistance, and towing support.",
      },
      {
        title: "Travel Convenience",
        icon: "/insurance-icons/roadside-assistance-3.png",
        description:
          "Provides additional support such as accommodation assistance if breakdown-related repairs take extended time.",
      },
      {
        title: "Nationwide Coverage",
        icon: "/insurance-icons/roadside-assistance-4.png",
        description:
          "Assistance available across locations as per service scope.",
      },
    ],
    faq: [
      {
        question: "Is there any limit on Roadside Assistance usage?",
        answer:
          "Yes, some plans may have limits on the number of services or towing distance per policy period.",
      },
      {
        question:
          "Is Roadside Assistance included in motor insurance policies?",
        answer:
          "Roadside Assistance is sometimes included as an add-on or bundled benefit with Comprehensive Motor Insurance, but it can also be purchased separately.",
      },
      {
        question:
          "What is the typical response time for Roadside Assistance services?",
        answer:
          "Response time varies by location, but assistance is usually dispatched within 30–60 minutes in urban areas, depending on traffic and availability.",
      },
      {
        question: "Is RSA available for electric vehicles (EVs)?",
        answer:
          "Yes, some RSA plans now include EV-specific services such as battery support, towing to charging stations, and specialized assistance.",
      },
    ],
    bgImage: "/finask/roadside-assistance.jpg",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "cycle-insurance",
    uspLayout: "bottom-sticky-blue",
    category: "Lifestyle Protection",
    title: "Cycle Protection",
    tagline: "Protect Your Ride and Ride with Peace of Mind",
    description:
      "Your bicycle is not just a ride it is an investment in your health, lifestyle and daily commute. Whether your bicycle is new or frequently used, insurance ensures long-term peace of mind. \n Cycle Protection (Bicycle Insurance) provides comprehensive coverage for your bicycle against unforeseen incidents such as theft, damage or loss. Whether you use your bicycle for fitness, commuting, adventure rides or professional cycling, this protection ensures that you can ride worry-free. It also encourages safer and more confident riding habits. \n With the right coverage, you can avoid sudden repair or replacement expenses and continue your cycling journey with confidence.",
    features: [
      {
        title: "Theft Protection",
        icon: "/insurance-icons/cycle-protection-1.png",
        description: "Coverage in case your bicycle is stolen.",
      },
      {
        title: "Accidental Damage Cover",
        icon: "/insurance-icons/cycle-protection-2.png",
        description:
          "Protection against damage caused by accidents or unforeseen incidents.",
      },
      {
        title: "Emergency Assistance",
        icon: "/insurance-icons/cycle-protection-3.png",
        description:
          "Includes support services such as health assistance, doctor referral, emergency message relay, police station locator, and ambulance referral.",
      },
      {
        title: "Worry-Free Riding",
        icon: "/insurance-icons/cycle-protection-4.png",
        description:
          "Enjoy every ride without concern over unexpected setbacks.",
      },
    ],
    faq: [
      {
        question: "Does Cycle Insurance cover natural disasters?",
        answer:
          "Yes, many policies include coverage for damage due to floods, storms, earthquakes, and other natural calamities.",
      },
      {
        question: "What types of cycles can be insured?",
        answer:
          "It typically covers standard bicycles, high-end cycles, electric cycles (e-bikes), and sports cycles.",
      },
      {
        question: "What is zero depreciation cover in Cycle Insurance?",
        answer:
          "This add-on ensures full claim settlement without deducting depreciation on parts, leading to higher claim payouts.",
      },
      {
        question: "Does Cycle Insurance cover third-party liability?",
        answer:
          "Some plans offer optional third-party liability cover for accidental injury or property damage caused while riding the cycle.",
      },
    ],
    bgImage: "/finask/cycle-protection.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: " ",
      promoText: "Secure Your Cycle On & Off the Road",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "pet-insurance",
    uspLayout: "horizontal-ribbon",
    category: "Pet Insurance",
    title: "Pet Insurance",
    tagline: "Because They Are Family",
    description:
      "Our pets are more than our companions — they are our family. They bring joy, comfort and unconditional love into our lives every single day. Just like any other family member, they deserve the best care and protection. \n Unexpected illnesses, accidents or medical emergencies can happen at any time and veterinary treatments can sometimes be expensive. Pet Insurance helps pet parents manage these unforeseen medical expenses, ensuring that their beloved dogs and cats receive the best possible treatment without financial stress. ",
    features: [
      {
        title: "Illness & Accident Cover",
        icon: "/insurance-icons/pet-insurance-1.png",
        description:
          "Provides protection against unexpected illnesses, accidents, and medical emergencies affecting your pet.",
      },
      {
        title: "Veterinary Expense Support",
        icon: "/insurance-icons/pet-insurance-2.png",
        description:
          "Offers financial assistance for veterinary treatments, consultations, and hospitalization expenses.",
      },
      {
        title: "Peace of Mind",
        icon: "/insurance-icons/pet-insurance-3.png",
        description:
          "Ensures timely medical care for your pets without the burden of sudden high expenses.",
      },
      {
        title: "Multi-Pet Coverage Options",
        icon: "/insurance-icons/pet-insurance-4.png",
        description:
          "Ability to insure more than one pet under a single policy.",
      },
    ],
    faq: [
      {
        question: "Does Pet Insurance cover routine checkups?",
        answer:
          "Routine checkups are usually not covered unless included as an add-on benefit.",
      },
      {
        question: "Is there a waiting period in Pet Insurance?",
        answer:
          "Yes, most policies include a waiting period for illnesses and specific conditions before coverage becomes active.",
      },
      {
        question: "Are pre-existing conditions covered in Pet Insurance?",
        answer:
          "No, pre-existing diseases are generally excluded, unless specifically mentioned under certain limited plans.",
      },
      {
        question: "Is there an age limit for insuring pets?",
        answer:
          "Yes, insurers usually define minimum and maximum age limits for enrolment, depending on pet type and breed.",
      },
    ],
    bgImage: "/finask/pet-insurance.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: " ",
      promoText: "  ",
      promoBadges1: "Dedicated Relationship Manager",
      promoBadges2: "Affordable Premiums",
      promoBadges3: "Expert Guidance",
    },
  },
  {
    slug: "workmen-compensation",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Workmen Compensation Insurance",
    tagline: "Protecting Your Workforce, Securing Your Business",
    description:
      "Workmen Compensation Insurance is a statutory policy that protects employers against financial liabilities arising from work-related injuries, disabilities, or death of employees, ensuring rightful compensation to workers or their dependents. It covers medical expenses, loss of income, disability benefits, and compensation in case of unfortunate incidents during employment, while ensuring compliance with the Employees’ Compensation Act. \n This policy not only safeguards businesses from legal and financial risks but also reflects a strong commitment towards employee well-being and workplace safety.",
    features: [
      {
        title: "Employee Protection",
        icon: "/insurance-icons/workmen-compensation-1.png",
        description:
          "Ensure financial support for employees in case of workplace injuries or accidents.",
      },
      {
        title: "Medical & Disability Benefits",
        icon: "/insurance-icons/workmen-compensation-2.png",
        description:
          "Cover medical expenses, disability compensation, and loss of income support.",
      },
      {
        title: "Industry-Wide Coverage",
        icon: "/insurance-icons/workmen-compensation-3.png",
        description:
          "Applicable across sectors, especially where operational risks are higher.",
      },
      {
        title: "Financial Safeguard",
        icon: "/insurance-icons/workmen-compensation-4.png",
        description:
          "Protect your business from unexpected compensation payouts and liabilities.",
      },
    ],
    faq: [
      {
        question: "Is Workmen Compensation Insurance mandatory?",
        answer:
          "Yes, it is mandatory under the Employees’ Compensation Act for employers to compensate employees for work-related injuries.",
      },
      {
        question: "Does it cover all employees?",
        answer:
          "It generally covers workers as defined by the contractor and included in the list submitted to the insurance company.",
      },
      {
        question: "Is there a waiting period for coverage?",
        answer:
          "No, coverage typically starts from the policy inception date unless otherwise specified.",
      },
      {
        question: "What is not covered under this policy?",
        answer:
          "Injuries caused due to intoxication, wilful disobedience, or accidents outside the scope of employment are typically not covered.",
      },
    ],
    bgImage: "/finask/workmen-compensation-insurance.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "prof-indemnity-for-doctors",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Professional Indemnity Insurance for Doctors",
    tagline: "Protecting Your Practice, Reputation and Peace of Mind",
    description:
      "Professional Indemnity Insurance for doctors provides protection against legal and financial liabilities arising from errors, omissions, or alleged negligence in medical practice. It ensures that a single claim does not impact your finances or professional standing. The policy covers risks such as misdiagnosis, incorrect treatment, and surgical errors, along with legal defence costs and compensation. This enables you to manage medico-legal challenges without disrupting your practice or cash flow. \n In today’s increasingly litigious environment, even minor allegations can lead to significant consequences. This coverage safeguards both your financial stability and professional reputation, allowing you to practice with confidence. It also offers continuity of protection through features like retroactive coverage, ensuring claims from past treatments are covered, subject to policy terms. The policy can be tailored to your specialization, experience, and risk exposure—whether you are an individual practitioner, part of a clinic, or associated with a hospital.",
    features: [
      {
        title: "Professional Credibility Protection",
        icon: "/insurance-icons/professional-indemnity-doctors-1.png",
        description:
          "Safeguard your professional credibility, patient relationships, and reputation.",
      },
      {
        title: "Comprehensive Coverage",
        icon: "/insurance-icons/professional-indemnity-doctors-2.png",
        description:
          "Get tailored protection based on your specialization and risk exposure.",
      },
      {
        title: "Medico-Legal Support",
        icon: "/insurance-icons/professional-indemnity-doctors-3.png",
        description:
          "Access expert legal assistance to handle complex medical claims efficiently.",
      },
      {
        title: "Long-Term Security",
        icon: "/insurance-icons/professional-indemnity-doctors-4.png",
        description:
          "Get coverage for claims arising even after treatment, as per policy terms.",
      },
    ],
    faq: [
      {
        question: "Can multiple claims be made in one policy period?",
        answer:
          "Yes, multiple claims are allowed subject to the overall sum insured limit.",
      },
      {
        question: "How is the sum insured decided?",
        answer:
          "It depends on factors such as doctor’s specialization, years of experience, and patient volume. Higher-risk specializations may require higher coverage.",
      },
      {
        question: "Does it cover both civil and criminal cases?",
        answer:
          "The policy primarily covers civil liabilities. Some policies may provide support for criminal defense costs, depending on terms and conditions.",
      },
      {
        question: "Is Telemedicine covered under this policy?",
        answer:
          "Yes, many policies now include teleconsultation services, subject to regulatory and policy terms.",
      },
    ],
    bgImage: "/finask/professional-indemnity-insurance-for-doctors.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "term---rop",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Term-ROP",
    tagline: "Life Cover with the Added Benefit of Premium Return",
    description:
      "Return of Premium (ROP) in Life Insurance is a feature where all the premiums you pay during the policy term are returned to you if you survive the tenure, while still providing full life cover throughout. Unlike Pure Term Insurance, which offers only risk protection, ROP plans combine protection with a maturity benefit, ensuring your money is not “lost” if no claim arises. While the premiums are higher compared to standard term plans, they offer a sense of savings discipline and capital protection. ROP plans are ideal for individuals who prefer guaranteed outcomes, want both insurance and return of funds, and are looking for a balanced approach between protection and financial reassurance without taking market-linked risks.",
    features: [
      {
        title: "Dual Benefit Plan",
        icon: "/insurance-icons/term-rop-1.png",
        description: "Insurance and savings combined in one smart solution.",
      },
      {
        title: "Money Back Assurance",
        icon: "/insurance-icons/term-rop-2.png",
        description:
          "Get back all premiums paid at maturity with life cover protection.",
      },
      {
        title: "Family Security Assured",
        icon: "/insurance-icons/term-rop-3.png",
        description:
          "Financial protection for your loved ones with added returns.",
      },
      {
        title: "Financial Discipline",
        icon: "/insurance-icons/term-rop-4.png",
        description: "Build a habit of saving while staying protected.",
      },
    ],
    faq: [
      {
        question: "Is ROP better than ULIP?",
        answer:
          "ROP offers guaranteed premium return with insurance, while ULIPs are market-linked with potential for higher but non-guaranteed returns.",
      },
      {
        question: "When will I receive the premium back?",
        answer:
          "The premium is returned at the end of the policy term, or maturity, if no claim has been made.",
      },
      {
        question: "Is medical check-up required for ROP plans?",
        answer:
          "Yes, depending on age, sum assured, and insurer underwriting guidelines.",
      },
      {
        question: "Are ROP returns inflation-adjusted?",
        answer:
          "No, ROP returns are up to the premium paid and do not account for inflation impact over time.",
      },
    ],
    bgImage: "/finask/term-rop.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Now on GST (18% cheaper)",
      promoText: "Save up to 5% online discount**",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "personal-cyber-insurance",
    uspLayout: "floating-pills",
    category: "Insurance",
    title: "Personal Cyber Insurance",
    tagline:
      "Because Your Digital Safety Is as Important as Your Financial Security",
    description:
      "In today’s digital world, risks like online fraud, hacking, phishing, and identity theft are increasing rapidly. Personal Cyber Insurance protects you against financial losses arising from unauthorized transactions, cyber scams, and data breaches. \n It also offers support for data restoration, cyber extortion, legal expenses, and reputation management—ensuring complete protection for you and your family in the digital space.",
    features: [
      {
        title: "Complete Digital Protection",
        icon: "/insurance-icons/personal-cyber-insurance-1.png",
        description: "Covers all major cyber risks under one solution.",
      },
      {
        title: "Claim Support",
        icon: "/insurance-icons/personal-cyber-insurance-2.png",
        description: "Assistance when you need it the most.",
      },
      {
        title: "Expert Guidance",
        icon: "/insurance-icons/personal-cyber-insurance-3.png",
        description: "Dedicated support to handle cyber incidents smoothly.",
      },
      {
        title: "Tailored Coverage",
        icon: "/insurance-icons/personal-cyber-insurance-4.png",
        description: "Plans designed as per your digital usage and lifestyle.",
      },
    ],
    faq: [
      {
        question: "Who should buy Personal Cyber Insurance?",
        answer:
          "Anyone using online banking, UPI, credit cards, social media, or e-commerce platforms should consider it.",
      },
      {
        question: "Can the policy cover multiple devices?",
        answer:
          "Yes, coverage may extend to multiple devices like smartphones, laptops, and tablets under one policy.",
      },
      {
        question: "What is not covered under this policy?",
        answer:
          "Common exclusions include negligence, sharing OTP/password, or delayed reporting of the incident.",
      },
      {
        question: "Is there a waiting period for coverage?",
        answer:
          "Some policies may have a short waiting period before coverage becomes active.",
      },
    ],
    bgImage: "/finask/personal-cyber-insurance.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Personalized Cyber Insurance Solutions for Individuals & Families",
      promoText: "IRDA Certified Advisors",
      promoBadges1: "Pocket Friendly plans",
      promoBadges2: "Digital Policy Issuance",
      promoBadges3:"24*7 Claims Support"
    },
  },
  {
    slug: "corporate-cyber-insurance",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Corporate Cyber Insurance",
    tagline:
      "Safeguarding Your Enterprise from Financial and Operational Cyber Risks",
    description:
      "With rising cyber threats like data breaches, ransomware, and hacking, businesses face serious financial and reputational risks. Corporate Cyber Insurance protects your organization against losses from cyber incidents, including data theft, business interruption, legal liabilities, and recovery costs. \n It also provides expert support for incident response, ensuring minimal disruption and faster recovery.",
    features: [
      {
        title: "Advanced Firewall Protection",
        icon: "/insurance-icons/corporate-cyber-insurance-1.png",
        description:
          "Strong defense against evolving cyberattacks and hacking attempts.",
      },
      {
        title: "Global Network Protection",
        icon: "/insurance-icons/corporate-cyber-insurance-2.png",
        description: "Protection across every connected system.",
      },
      {
        title: "Business Continuity Support",
        icon: "/insurance-icons/corporate-cyber-insurance-3.png",
        description:
          "Keeping your business running without interruption during cyber incidents.",
      },
      {
        title: "Data Breach Protection",
        icon: "/insurance-icons/corporate-cyber-insurance-4.png",
        description:
          "Safeguards sensitive business and customer data from breaches.",
      },
    ],
    faq: [
      {
        question: "Who should buy this policy?",
        answer:
          "Businesses of all sizes, especially those handling customer data, digital payments, online platforms, or sensitive information, should opt for Corporate Cyber Insurance to protect against cyber risks and financial losses.",
      },
      {
        question:
          "What is First-Party and Third-Party Corporate Cyber Insurance coverage?",
        answer:
          "First-party Corporate Cyber Insurance covers your own losses such as data recovery and business interruption, while third-party Corporate Cyber Insurance covers liabilities to customers due to data breaches.",
      },
      {
        question: "Does this policy cover regulatory penalties?",
        answer:
          "Some policies cover regulatory fines and penalties, subject to legal permissibility.",
      },
      {
        question: "What is not covered under this policy?",
        answer:
          "Common exclusions include intentional acts, poor security practices, or failure to follow compliance requirements.",
      },
    ],
    bgImage: "/finask/corporate-cyber-insurance.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "taxi-insurance",
    uspLayout: "bottom-sticky-blue",
    category: "Insurance",
    title: "Taxi Insurance",
    tagline: "Reliable Protection for Your Taxi and Your Livelihood",
    description:
      "Taxi Insurance is a specialized commercial vehicle policy designed for cabs and passenger transport vehicles, offering protection against accidents, theft, natural disasters, and third-party liabilities. As mandated by the Insurance Regulatory and Development Authority of India, third-party cover is compulsory, while comprehensive plans also safeguard your vehicle. With options like passenger cover, zero depreciation, and many more, Taxi Insurance ensures business continuity, financial security, and peace of mind for drivers and fleet owners.",
    features: [
      {
        title: "Mandatory Compliance",
        icon: "/insurance-icons/taxi-insurance-1.png",
        description: "Ensures legal coverage as per IRDAI norms.",
      },
      {
        title: "Driver Shield",
        icon: "/insurance-icons/taxi-insurance-2.png",
        description: "Provides safety and security for drivers on every trip.",
      },
      {
        title: "Quick Repairs",
        icon: "/insurance-icons/taxi-insurance-3.png",
        description: "Minimizes downtime with efficient claim support.",
      },
      {
        title: "Asset Protection",
        icon: "/insurance-icons/taxi-insurance-4.png",
        description:
          "Safeguards against financial loss due to unexpected damages.",
      },
    ],
    faq: [
      {
        question: "Is private car insurance valid for taxi use?",
        answer:
          "No, private car insurance is not valid for taxi or commercial use. Vehicles used for passenger transportation must have a Commercial Taxi Insurance policy.",
      },
      {
        question: "Does this policy cover passengers?",
        answer:
          "Yes, Personal Accident cover for passengers can be included as an add-on.",
      },
      {
        question: "How is the premium calculated?",
        answer:
          "Premium depends on vehicle type, usage, location, IDV, and claim history.",
      },
      {
        question: "Can I insure multiple taxis under one policy?",
        answer:
          "Yes, fleet owners can opt for fleet insurance policies covering multiple vehicles under a single plan.",
      },
    ],
    bgImage: "/finask/taxi.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: " ",
      promoText: "Keep- 50k+ policies sold",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "commercial-vehicle-insurance",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Commercial Vehicle Insurance",
    tagline:
      "Stay On The Road With Confidence and Complete Financial Protection",
    description:
      "Commercial Vehicle Insurance is designed to protect vehicles used for business purposes such as taxis, trucks, buses, and delivery vans against financial losses arising from accidents, theft, natural disasters, and third-party liabilities. As mandated by the Insurance Regulatory and Development Authority of India, third-party insurance is compulsory, while comprehensive policies provide broader coverage including damage to your own vehicle. With add-ons like zero depreciation, engine protection, and more, Commercial Vehicle Insurance ensures legal compliance, business continuity, and financial security for owners and operators.",
    features: [
      {
        title: "Legal Liability Cover",
        icon: "/insurance-icons/commercial-vehicle-insurance-1.png",
        description:
          "Protection against legal expenses arising from accidents.",
      },
      {
        title: "Trusted Regulation",
        icon: "/insurance-icons/commercial-vehicle-insurance-2.png",
        description: "Governed by guidelines of the IRDAI.",
      },
      {
        title: "Multi-Risk Protection",
        icon: "/insurance-icons/commercial-vehicle-insurance-3.png",
        description:
          "Coverage against accidents, fire, theft, and third-party liability.",
      },
      {
        title: "Add-On Benefits",
        icon: "/insurance-icons/commercial-vehicle-insurance-4.png",
        description:
          "Options like zero depreciation, engine protection, return to invoice, and more.",
      },
    ],
    faq: [
      {
        question: "What is IDV in Commercial Vehicle Insurance?",
        answer:
          "Insured Declared Value (IDV) is the current market value of the vehicle, used to determine claim payout in case of total loss.",
      },
      {
        question:
          "Can I transfer my insurance policy when selling the vehicle?",
        answer:
          "Yes, the policy can be transferred to the new owner, usually within 14 days of sale.",
      },
      {
        question: "Are drivers covered under the policy?",
        answer: "Yes, Personal Accident cover for drivers can be included.",
      },
      {
        question: "What is not covered under the policy?",
        answer:
          "It excludes wear and tear of the vehicle, mechanical breakdown, driving without a valid license, driving under the influence of alcohol, and use outside the permitted purpose.",
      },
    ],
    bgImage: "/finask/commercial-vehicle-insurance.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: " Fast Claim Support",
      promoText: "Keep- 20k+ policies sold",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "home-insurance",
    uspLayout: "horizontal-ribbon",
    category: "Insurance",
    title: "Home Insurance",
    tagline: "Security and Peace of Mind For Your Most Valuable Space",
    description:
      "Home Insurance provides financial protection for your home and personal assets against risks like fire, theft, natural disasters, and accidental damage. It covers both the structure of your house and its contents, ensuring that you are safeguarded from unexpected financial losses. With flexible coverage options and add-ons, Home Insurance helps you secure your most valuable asset while offering peace of mind and long-term financial stability.",
    features: [
      {
        title: "Building Protection",
        icon: "/insurance-icons/home-insurance-1.png",
        description:
          "Covers structural damage to your home from fire, disasters, and accidents.",
      },
      {
        title: "Valuable Items Cover",
        icon: "/insurance-icons/home-insurance-2.png",
        description:
          "Optional protection for jewellery and high-value possessions.",
      },
      {
        title: "Affordable Premiums",
        icon: "/insurance-icons/home-insurance-3.png",
        description: "Relatively low cost compared to potential losses.",
      },
      {
        title: "Reconstruction Support",
        icon: "/insurance-icons/home-insurance-4.png",
        description:
          "Covers the cost of rebuilding or repairing your home, or a pre-agreed insured value.",
      },
    ],
    faq: [
      {
        question: "How is the sum insured decided?",
        answer:
          "It is determined based on the reconstruction cost of the property and the value of its contents. Some policies also offer the option of pre-agreed values for added clarity and convenience.",
      },
      {
        question: "Can I insure only the contents of my home?",
        answer:
          "Yes, you can choose content-only cover if you do not want to insure the building.",
      },
      {
        question: "Can tenants buy Home Insurance?",
        answer:
          "Yes, tenants can also insure both contents of the rented house and the building, subject to liability conditions given in the policy.",
      },
      {
        question: "Does Home Insurance cover civil disturbances?",
        answer:
          "Yes, most policies cover riots, strikes, and vandalism subject to policy terms and conditions.",
      },
    ],
    bgImage: "/finask/property-insurance.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: " ",
      promoText: " ",
      promoBadges1: "Zero Documentation",
      promoBadges2: "60 mins Claim assistance",
      promoBadges3: "Expert Guidance at your Door Step",
    },
  },
  {
    slug: "general-liability-insurance",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "General Liability Insurance",
    tagline: "Coverage For Unforeseen Claims That Can Impact Your Business",
    description:
      "General Liability Insurance protects your business against financial losses arising from third-party claims of bodily injury, property damage, or legal liabilities. It covers expenses such as medical costs, legal fees, and compensation, ensuring that unexpected incidents do not impact your business operations or finances. This policy is essential for businesses of all sizes to safeguard their reputation and maintain long-term stability.",
    features: [
      {
        title: "Financial Protection",
        icon: "/insurance-icons/general-liability-insurance-1.png",
        description: "Prevents heavy losses from claims and lawsuits.",
      },
      {
        title: "Builds Credibility",
        icon: "/insurance-icons/general-liability-insurance-2.png",
        description: "Enhances trust with clients and partners.",
      },
      {
        title: "Customizable Plans",
        icon: "/insurance-icons/general-liability-insurance-3.png",
        description: "Coverage tailored to your business needs.",
      },
      {
        title: "Business Safety Net",
        icon: "/insurance-icons/general-liability-insurance-4.png",
        description: "Protects your operations from unexpected risks.",
      },
    ],
    faq: [
      {
        question: "Is it mandatory for businesses?",
        answer:
          "Not legally mandatory, but often required in contracts, tenders, and vendor agreements.",
      },
      {
        question: "Does it cover employee injuries?",
        answer:
          "No, employee-related injuries are covered under Employee Compensation Insurance.",
      },
      {
        question: "What is not covered under this policy?",
        answer:
          "Intentional acts, professional errors, and contractual liabilities not specified in the policy are excluded.",
      },
      {
        question: "How much coverage should I choose?",
        answer:
          "Coverage depends on business size and risk exposure, typically starting from ₹50 lakhs.",
      },
    ],
    bgImage: "/finask/general-liability-insurance.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "contractor-all-risk",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Contractor’s All Risk Insurance",
    tagline: "End-To-End Coverage For Materials, Works and On-Site Risks",
    description:
      "Contractor’s All Risk Insurance (CAR) provides comprehensive protection for construction projects against unforeseen risks during execution. It covers damage to the project site, materials, machinery, and third-party liabilities arising from accidents, natural disasters, fire, theft, or human errors. Whether it is a small construction job or a large infrastructure project, this policy ensures financial security by covering repair or replacement costs, helping contractors complete projects smoothly without major financial disruptions.",
    features: [
      {
        title: "Project Shield",
        icon: "/insurance-icons/contractor-all-risk-1.png",
        description: "Smart risk management for contractors and developers.",
      },
      {
        title: "Construction Cover",
        icon: "/insurance-icons/contractor-all-risk-2.png",
        description:
          "Covering unforeseen risks at every stage of construction.",
      },
      {
        title: "Financial Security",
        icon: "/insurance-icons/contractor-all-risk-3.png",
        description: "Prevents unexpected project losses.",
      },
      {
        title: "End-to-End Coverage",
        icon: "/insurance-icons/contractor-all-risk-4.png",
        description: "Covers development, testing, and commissioning phases.",
      },
    ],
    faq: [
      {
        question: "Is CAR Insurance mandatory in India?",
        answer:
          "It is not legally mandatory, but is often required by project contracts, banks and financial institutions, government bodies, and large infrastructure projects.",
      },
      {
        question: "How is the sum insured calculated?",
        answer:
          "It is based on the total contract value, including cost of materials, labour and construction costs, temporary structures, and site installations.",
      },
      {
        question: "Can the policy be extended?",
        answer:
          "Yes, it can be extended for project delays or to include maintenance period cover.",
      },
      {
        question: "What is not covered under CAR Insurance?",
        answer:
          "Wear and tear, mechanical breakdown, and intentional damage are usually excluded.",
      },
    ],
    bgImage: "/finask/contractors-all-risk-insurance.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "erection-all-risk",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Erection All Risk Insurance",
    tagline:
      "Financial Security For Machinery And Plant During Installation Phases",
    description:
      "Erection All Risk Insurance (EAR) provides comprehensive coverage for projects involving the installation and erection of plant, machinery, and equipment. It protects against unforeseen risks such as accidental damage, fire, natural disasters, and human errors during the erection, testing, and commissioning phases. Additionally, it includes third-party liability coverage for injury or property damage. This policy ensures financial security for contractors and project owners, helping them complete installation projects smoothly without unexpected financial setbacks.",
    features: [
      {
        title: "Installation Security",
        icon: "/insurance-icons/erection-all-risk-1.png",
        description: "Covers risks during assembly and setup.",
      },
      {
        title: "Workforce Safety Support",
        icon: "/insurance-icons/erection-all-risk-2.png",
        description: "Covers third-party risks involving workers.",
      },
      {
        title: "Industrial Project Essential",
        icon: "/insurance-icons/erection-all-risk-3.png",
        description: "Ideal for factories, plants, and heavy installations.",
      },
      {
        title: "Business Continuity",
        icon: "/insurance-icons/erection-all-risk-4.png",
        description: "Ensures projects stay on track financially.",
      },
    ],
    faq: [
      {
        question: "What is the duration of the policy?",
        answer:
          "Coverage starts from the unloading of equipment at the site and continues through erection, installation, and testing until project completion.",
      },
      {
        question: "What is Maintenance Period Cover?",
        answer:
          "It provides protection against losses arising after project completion during the maintenance phase, as per contract terms.",
      },
      {
        question: "Can EAR Insurance be taken for small projects?",
        answer:
          "Yes, it can be customized for both small-scale and large industrial projects.",
      },
      {
        question: "What is not covered under EAR Insurance?",
        answer:
          "Wear and tear, mechanical breakdown, and intentional damage are usually excluded.",
      },
    ],
    bgImage: "/finask/erection-all-risk.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "trade-credit-insurance",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Trade Credit Insurance",
    tagline: "Enabling Confident Business Growth With Credit Risk Protection",
    description:
      "Trade Credit Insurance protects businesses against the risk of non-payment by buyers due to insolvency, default, or delayed payments. It ensures that your cash flow remains stable by covering outstanding receivables, allowing you to confidently extend credit to customers and expand your business. This policy not only safeguards your balance sheet but also enhances your ability to access financing, making it a vital tool for companies dealing in domestic or international trade.",
    features: [
      {
        title: "Credit Risk Protection",
        icon: "/insurance-icons/trade-credit-insurance-1.png",
        description: "Covers losses arising from buyer default or non-payment.",
      },
      {
        title: "Network Shield",
        icon: "/insurance-icons/trade-credit-insurance-2.png",
        description: "Protecting your business across markets and borders.",
      },
      {
        title: "Trade Security",
        icon: "/insurance-icons/trade-credit-insurance-3.png",
        description: "Builds confidence in offering credit to customers.",
      },
      {
        title: "Cash Flow Stability",
        icon: "/insurance-icons/trade-credit-insurance-4.png",
        description:
          "Ensures smoother business cash flow despite payment delays.",
      },
    ],
    faq: [
      {
        question: "Does it cover partial payment defaults?",
        answer:
          "Yes, it can cover losses if a buyer pays only a part of the invoice amount.",
      },
      {
        question: "Is Export Business covered under this policy?",
        answer:
          "Yes, export trade can be covered, including risks like political instability or currency restrictions, subject to policy terms and conditions.",
      },
      {
        question: "What is not covered under this policy?",
        answer:
          "Disputed invoices, poor-quality goods, and pre-existing bad debts are usually excluded.",
      },
      {
        question: "Is there a minimum turnover required?",
        answer:
          "Some insurers may set a minimum turnover requirement depending on policy type.",
      },
    ],
    bgImage: "/finask/trade-credit-insurance.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "contractor-plant-machinery",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Contractor’s Plant & Machinery",
    tagline: "Keep Your Operations Running With Reliable Equipment Protection",
    description:
      "Contractor’s Plant & Machinery (CPM) provides coverage for construction equipment and machinery against sudden and unforeseen damages while at work or at rest. It protects assets such as excavators, cranes, loaders, and other heavy equipment from risks like accidents, fire, theft, natural disasters, and operational mishaps. This policy ensures that contractors and project owners are financially safeguarded against repair or replacement costs, minimizing downtime and helping projects continue without disruption.",
    features: [
      {
        title: "All-Risk Coverage",
        icon: "/insurance-icons/contractor-plant-machinery-1.png",
        description:
          "Protects against a wide range of unforeseen events like fire, theft, and natural calamities.",
      },
      {
        title: "Multiple Equipment Cover",
        icon: "/insurance-icons/contractor-plant-machinery-2.png",
        description:
          "Covers a range of construction machinery under one policy.",
      },
      {
        title: "Repair & Replacement",
        icon: "/insurance-icons/contractor-plant-machinery-3.png",
        description:
          "Covers the cost of fixing or replacing damaged equipment.",
      },
      {
        title: "Cost-Effective Protection",
        icon: "/insurance-icons/contractor-plant-machinery-4.png",
        description:
          "Affordable way to secure high-value construction equipment.",
      },
    ],
    faq: [
      {
        question: "Can old machinery be insured?",
        answer:
          "Yes, used or old machinery can be insured after inspection and valuation.",
      },
      {
        question: "Is routine maintenance covered?",
        answer: "No, routine maintenance and servicing costs are not covered.",
      },
      {
        question: "What happens if machinery is shifted to another site?",
        answer:
          "Coverage may lapse unless the insurer is informed and the policy is updated for the new location.",
      },
      {
        question: "What is not covered under this policy?",
        answer:
          "Normal wear and tear, mechanical or gradual deterioration of machinery, and intentional damage are usually excluded.",
      },
    ],
    bgImage: "/finask/contractors-plant-machinery.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "surety-bond-insurance",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Surety Bond Insurance",
    tagline: "Providing Confidence to Stakeholders Through Financial Backing",
    description:
      "Surety Bond Insurance is a financial guarantee that ensures a contractor or business fulfils its contractual obligations as agreed. It involves three parties—the principal, or contractor, the obligee, or project owner, and the surety, or insurer. In case the contractor fails to perform or breaches the contract, the surety compensates the obligee for the loss. This solution enhances credibility, reduces financial risk, and is widely used in infrastructure projects, government contracts, and large commercial agreements to ensure timely and reliable project completion.",
    features: [
      {
        title: "Performance Assurance",
        icon: "/insurance-icons/surety-bond-insurance-1.png",
        description: "Guarantees completion of contractual obligations.",
      },
      {
        title: "Project Completion Security",
        icon: "/insurance-icons/surety-bond-insurance-2.png",
        description: "Ensures timely and proper execution of projects.",
      },
      {
        title: "Multi-Project Support",
        icon: "/insurance-icons/surety-bond-insurance-3.png",
        description: "Allows coverage across multiple ongoing contracts.",
      },
      {
        title: "Credibility Booster",
        icon: "/insurance-icons/surety-bond-insurance-4.png",
        description: "Improves trust and eligibility for large contracts.",
      },
    ],
    faq: [
      {
        question: "How is a Surety Bond different from Traditional Insurance?",
        answer:
          "Unlike Traditional Insurance, a Surety Bond guarantees performance or payment, and the principal remains responsible for reimbursing the surety in case of a claim.",
      },
      {
        question:
          "What is the difference between Surety Bond and Bank Guarantee?",
        answer:
          "A Surety Bond is a guarantee with risk assessment by an insurer, while a bank guarantee involves blocking funds or credit limits in a bank.",
      },
      {
        question: "What types of Surety Bonds are available?",
        answer:
          "Common types include bid bonds, performance bonds, advance payment bonds, and maintenance bonds.",
      },
      {
        question: "Does a Surety Bond impact credit rating?",
        answer:
          "No, it generally does not impact credit utilization like bank guarantees, but financial assessment is still required.",
      },
    ],
    bgImage: "/finask/surety-bond-insurance.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "errors-and-omissions",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Errors & Omissions Insurance",
    tagline: "Financial Security Against Unforeseen Professional Risks",
    description:
      "Errors & Omissions Insurance (E&O) protects businesses and professionals against claims arising from negligence, mistakes, or failure to deliver promised services. It covers legal costs, settlements, and damages if a client suffers financial loss due to errors, omissions, or inadequate advice. This policy is essential for consultants, financial advisors, and service providers, ensuring financial protection while maintaining professional credibility and client trust.",
    features: [
      {
        title: "Professional Protection Cover",
        icon: "/insurance-icons/errors-and-omissions-1.png",
        description:
          "Covers risks arising from errors in services or professional advice.",
      },
      {
        title: "Legal Expense Cover",
        icon: "/insurance-icons/errors-and-omissions-2.png",
        description:
          "Pays for lawyer fees and court expenses in legal disputes.",
      },
      {
        title: "Industry-Specific Protection",
        icon: "/insurance-icons/errors-and-omissions-3.png",
        description:
          "Suitable for consultants, IT, legal, finance, and architects.",
      },
      {
        title: "Client Dispute Protection",
        icon: "/insurance-icons/errors-and-omissions-4.png",
        description: "Covers financial claims from dissatisfied clients.",
      },
    ],
    faq: [
      {
        question:
          "What is the difference between E&O and General Liability Insurance?",
        answer:
          "E&O Insurance covers professional mistakes or service errors, while General Liability Insurance covers physical injury or property damage.",
      },
      {
        question: "What is not covered under this policy?",
        answer:
          "Intentional wrongdoing, fraud, and criminal acts are typically excluded.",
      },
      {
        question: "Is E&O Insurance mandatory?",
        answer:
          "Not always mandatory, but it is often required in contracts or by regulatory bodies in certain professions.",
      },
      {
        question: "Does it cover past work?",
        answer:
          "Yes, if the policy includes retroactive coverage, it can cover past services.",
      },
    ],
    bgImage: "/finask/errors-and-omissions-insurance.png",
    backgroundPosition: "bottom center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "professional-indemnity",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Professional Indemnity Insurance",
    tagline: "Ensuring Confidence in Your Profession with Financial Protection",
    description:
      "Professional Indemnity Insurance protects professionals and service providers against claims arising from errors, negligence, or omissions in the services they deliver. It covers legal defense costs, settlements, and compensation if a client suffers financial loss due to incorrect advice or inadequate service. This policy is essential for professionals such as consultants, financial advisors, doctors, and architects, helping safeguard their reputation, maintain client trust, and ensure financial stability in case of unforeseen claims.",
    features: [
      {
        title: "Breach of Duty Cover",
        icon: "/insurance-icons/professional-indemnity-1.png",
        description:
          "Protects against failure to meet expected standards of care by professionals and service providers.",
      },
      {
        title: "Growth Enablement",
        icon: "/insurance-icons/professional-indemnity-2.png",
        description: "Helps you take bigger projects confidently.",
      },
      {
        title: "Risk Mitigation Tool",
        icon: "/insurance-icons/professional-indemnity-3.png",
        description:
          "Acts as a financial safety net for professional practice.",
      },
      {
        title: "Customizable Coverage",
        icon: "/insurance-icons/professional-indemnity-4.png",
        description: "Tailored limits based on profession.",
      },
    ],
    faq: [
      {
        question: "What is retroactive date in this policy?",
        answer:
          "It is the date from which your past work is covered, provided the policy is continuously renewed.",
      },
      {
        question: "What is the limit of indemnity?",
        answer:
          "It is the maximum amount the insurer will pay for claims during the policy period.",
      },
      {
        question: "Can one claim exhaust the entire policy limit?",
        answer:
          "Yes, a single large claim can utilize the full limit of indemnity.",
      },
      {
        question: "Does it cover reputational damage?",
        answer:
          "Some policies may cover costs related to reputation management, depending on extensions opted.",
      },
    ],
    bgImage: "/finask/professional-indemnity-insurance.png",
    backgroundPosition: "bottom center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "fleet-insurance",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Fleet Insurance",
    tagline: "Comprehensive Coverage For All Your Vehicles Under A Single Plan",
    description:
      "Fleet Insurance is a comprehensive insurance solution designed for businesses that own and operate multiple vehicles under a single policy. Instead of managing separate insurance policies for each vehicle, Fleet Insurance allows companies to cover all their vehicles—such as cars, trucks, vans, or commercial vehicles—under one streamlined plan. This not only simplifies administration and renewal processes but also helps in reducing overall premium costs through bulk coverage benefits. Fleet Insurance typically covers risks like accidents, third-party liabilities, theft, natural disasters, and damages, ensuring uninterrupted business operations. It is especially beneficial for logistics companies, transport operators, and businesses relying heavily on mobility, offering flexibility, cost efficiency, and centralized risk management.",
    features: [
      {
        title: "Single Policy Cover",
        icon: "/insurance-icons/fleet-insurance-1.png",
        description:
          "One plan to insure all your business vehicles effortlessly.",
      },
      {
        title: "Cost Efficiency",
        icon: "/insurance-icons/fleet-insurance-2.png",
        description: "Save more with bulk insurance and reduced premiums.",
      },
      {
        title: "Digital Fleet Management",
        icon: "/insurance-icons/fleet-insurance-3.png",
        description: "Centralized monitoring and policy control.",
      },
      {
        title: "Reduced Risk Exposure",
        icon: "/insurance-icons/fleet-insurance-4.png",
        description: "Minimizes financial losses across your entire fleet.",
      },
    ],
    faq: [
      {
        question: "How is the premium calculated?",
        answer:
          "Premium depends on various factors like the number and type of vehicles, usage, claims history of the fleet, geographical location, coverage opted, and add-ons.",
      },
      {
        question: "What is the minimum number of vehicles required?",
        answer:
          "Typically, insurers require at least 5 to 10 vehicles, but this may vary depending on the insurer.",
      },
      {
        question: "Can I add or remove vehicles from the policy?",
        answer:
          "Yes, Fleet Insurance policies offer flexibility to add or remove vehicles during the policy tenure.",
      },
      {
        question:
          "Is individual vehicle claim history considered in Fleet Insurance?",
        answer:
          "Yes, claims history of all individual vehicles and the overall fleet affects premium and renewal terms.",
      },
    ],
    bgImage: "/finask/fleet-insurance.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: " ",
      promoBadges2: " ",
    },
  },
  {
    slug: "shop-owner-insurance",
    uspLayout: "bottom-sticky-banner",
    category: "Insurance",
    title: "Shop Owner Insurance",
    tagline: "Your Shop’s Safety Net For Every Uncertainty",
    description:
      "Shop Owner Insurance is a comprehensive protection solution designed to safeguard small and medium-sized businesses against unforeseen risks. It provides coverage for your shop’s physical assets such as building, stock, furniture, and equipment against events like fire, theft, natural disasters, and accidental damage. In addition, it can include protection against business interruption, ensuring your income is not severely impacted due to temporary closures. Liability coverage is also a key component, protecting you against third-party claims arising from injuries or property damage at your premises. With customizable options tailored to your business needs, Shop Owner Insurance ensures peace of mind so you can focus on growing your business without worrying about unexpected financial setbacks.",
    features: [
      {
        title: "Cash & Asset Security",
        icon: "/insurance-icons/shop-owner-insurance-1.png",
        description: "Protection for cash, furniture, fixtures, and equipment.",
      },
      {
        title: "Customizable Plans",
        icon: "/insurance-icons/shop-owner-insurance-2.png",
        description: "Tailor coverage based on your shop’s unique needs.",
      },
      {
        title: "Contents Protection",
        icon: "/insurance-icons/shop-owner-insurance-3.png",
        description:
          "Covers furniture, fixtures, and equipment inside the shop.",
      },
      {
        title: "Secure Business Continuity",
        icon: "/insurance-icons/shop-owner-insurance-4.png",
        description: "Ensures stability even during disruptions.",
      },
    ],
    faq: [
      {
        question: "Is Shop Owner Insurance mandatory?",
        answer:
          "No, it is not mandatory, but it is highly recommended to safeguard your business from unexpected financial losses.",
      },
      {
        question: "Is shop building automatically covered?",
        answer:
          "Only if building cover is included in the policy; otherwise, it must be added separately.",
      },
      {
        question: "How is the premium calculated?",
        answer:
          "Premium depends on factors like shop location, size, type of goods, sum insured, and selected add-ons.",
      },
      {
        question: "Can I cover multiple shops under one policy?",
        answer:
          "Yes, many insurers allow coverage for multiple locations under a single policy, depending on their guidelines.",
      },
    ],
    bgImage: "/finask/shop-owner-insurance.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Affordable Coverage",
      promoText: "Dedicated Relationship Advisor",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "office-package-policy",
    uspLayout: "horizontal-ribbon",
    category: "Insurance",
    title: "Office Package Policy",
    tagline:
      "Protect Your Workplace, Power Your Productivity And Grow With Confidence",
    description:
      "Office Package Policy is a comprehensive insurance solution designed to protect businesses from a wide range of operational risks. It covers physical assets such as office premises, furniture, fixtures, electronic equipment, and important documents against events like fire, theft, accidental damage, and natural disasters. In addition, it offers liability protection against third-party claims and can be extended to include employee-related covers and business interruption losses. With flexible and customizable options, an Office Package Policy ensures that your workplace remains financially secure, allowing you to focus on productivity and growth without worrying about unforeseen disruptions.",
    features: [
      {
        title: "Trusted Risk Partner",
        icon: "/insurance-icons/office-package-policy-1.png",
        description: "Reliable protection for your growing business.",
      },
      {
        title: "Asset Replacement Support",
        icon: "/insurance-icons/office-package-policy-2.png",
        description: "Ensures quick repair or replacement of damaged items.",
      },
      {
        title: "Growth-Ready Protection",
        icon: "/insurance-icons/office-package-policy-3.png",
        description: "Designed to support scaling businesses.",
      },
      {
        title: "Transparent Terms",
        icon: "/insurance-icons/office-package-policy-4.png",
        description: "Clear coverage with no hidden conditions.",
      },
    ],
    faq: [
      {
        question: "Does it cover damage during office relocation?",
        answer:
          "Some policies may cover transit of office contents during relocation if specifically included.",
      },
      {
        question: "Does Office Package Policy cover vandalism?",
        answer:
          "Yes, damage due to riots, strikes, or malicious acts is typically covered subject to policy terms and conditions.",
      },
      {
        question: "How is the premium determined?",
        answer:
          "Premium depends on factors like location, office size, asset value, type of business, and coverage selected.",
      },
      {
        question: "Is depreciation considered in claims?",
        answer:
          "It depends on the policy type. Some offer replacement value, while others consider depreciation.",
      },
    ],
    bgImage: "/finask/office-package-policy.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: " ",
      promoText: " ",
      promoBadges1: "Instant & Digital Policy Issuance",
      promoBadges2: "365 Days Dedicated Claims Support",
      promoBadges3: " Expert Assistance from Policy Purchase to Claim Settlement",
    },
  },

  // --- INVESTMENTS ---

  {
    slug: "mutual-funds",
    uspLayout: "original",
    category: "Investments",
    title: "Mutual Funds",
    tagline: "Because Steady Compounding Is Built on Discipline, Not Impulse.",
    description:
      "Mutual funds offer a versatile way to participate in equity, debt, or hybrid markets — guided by robust research and diversified exposure. We curate fund baskets that match your life goals, tax needs, and comfort with volatility, so your investments compound meaningfully over the long term. With us, SIPs become more than monthly deductions; they become milestones toward your financial aspirations.",
    features: [
      {
        title: "Goal Based Investing",
        icon: "/insurance-icons/mutual-funds-1.png",
        description: "Funds selected to match specific financial goals.",
      },
      {
        title: "Risk Profiling",
        icon: "/insurance-icons/mutual-funds-2.png",
        description: "Portfolios tailored to your risk tolerance.",
      },
      {
        title: "Regular Monitoring",
        icon: "/insurance-icons/mutual-funds-3.png",
        description:
          "Periodic reviews to track performance and make informed adjustments.",
      },
      {
        title: "SIP Discipline",
        icon: "/insurance-icons/mutual-funds-4.png",
        description:
          "Encourages consistent investing habits to build long-term wealth through systematic contributions.",
      },
    ],
    faq: [
      {
        question:
          "What is the difference between active and passive mutual funds?",
        answer:
          "Active funds are managed by fund managers who actively select stocks, while passive funds track an index like Nifty or Sensex.",
      },
      {
        question: "What is SIP in Mutual Funds?",
        answer:
          "Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly, such as daily, monthly, or quarterly, promoting disciplined investing and rupee cost averaging.",
      },
      {
        question: "Are Mutual Fund Investments taxable?",
        answer:
          "Yes, Capital Gains Tax applies depending on the type of fund and holding period, as per prevailing tax laws.",
      },
      {
        question: "Can I withdraw money anytime?",
        answer:
          "Yes, most mutual funds are liquid, but some may have exit loads or lock-in periods, like ELSS funds.",
      },
    ],
    bgImage: "/finask/mutual-funds.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "systematic-investment-plan",
    uspLayout: "horizontal-ribbon",
    category: "Investments",
    title: "Systematic Investment Plan",
    tagline: "Build Wealth with Discipline, Not Timing",
    description:
      "A Systematic Investment Plan (SIP) is a disciplined way to invest in mutual funds by contributing a fixed amount regularly instead of a lump sum. It helps you stay invested consistently without worrying about market timing, making it ideal for long-term wealth creation. \n SIP works on the principle of compounding, where your returns generate further returns over time, creating steady and exponential growth. It also benefits from rupee cost averaging, as you buy more units when prices are low and fewer when prices are high, helping reduce the impact of market volatility. The advantage is that you can start with a small amount and gradually increase your investment as your income grows, making it suitable for individuals at every stage of their financial journey. \n Whether you are planning for retirement, your child’s education or overall wealth creation, SIP provides a structured and goal-oriented approach to investing.",
      features: [
        {
          title: "Compounding Growth",
          icon: "/insurance-icons/systematic-investment-plan-1.png",
          description:
            "Wealth builds over time as your earnings generate additional returns.",
        },
        {
          title: "Cost Averaging Benefit",
          icon: "/insurance-icons/systematic-investment-plan-2.png",
          description:
            "Reduces average investment cost by investing regularly in different market conditions.",
        },
        {
          title: "Disciplined Investing",
          icon: "/insurance-icons/systematic-investment-plan-3.png",
          description:
            "Builds strong financial habits through regular and structured investments.",
        },
        {
          title: "Goal-Based Planning",
          icon: "/insurance-icons/systematic-investment-plan-4.png",
          description:
            "Align your investments with life goals like retirement, education, and wealth creation.",
        },
      ],
    faq: [
      {
        question: "What is the ideal duration for SIP investment?",
        answer:
          "SIP works best over the long term, typically 7+ years or more, to benefit from compounding and market cycles.",
      },
      {
        question: "Can I increase my SIP amount later?",
        answer:
          "Yes, you can increase your SIP through a step-up option as your income grows or during the tenure of SIP.",
      },
      {
        question: "Are SIP returns guaranteed?",
        answer:
          "No, returns are market-linked as mutual funds invest in equity, debt, or other instruments. However, long-term investing improves the potential for stable returns.",
      },
      {
        question: "How do I choose the right SIP?",
        answer:
          "The best SIP for you depends on your goals, risk level, and investment horizon. Our expert advice helps you choose the right funds and stay on track.",
      },
    ],
    bgImage: "/finask/sip.png",
    backgroundPosition: "bottom",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "systematic-withdrawal-plan",
    uspLayout: "floating-pills",
    category: "Investments",
    title: "Systematic Withdrawal Plan in Mutual Funds",
    tagline: "Create a Regular Income from Your Investments",
    description:
      "A Systematic Withdrawal Plan (SWP) is a smart way to generate regular income from your investments while keeping the remaining corpus invested. It allows you to withdraw a fixed amount at chosen intervals—monthly, quarterly, or annually—ensuring steady cash flow without redeeming the entire investment at once. SWPs are particularly useful for retirees or investors seeking passive income, as they offer flexibility, tax efficiency, and the potential for continued capital growth. With the right strategy and fund selection, an SWP helps balance income needs with long-term wealth preservation.",
      features: [
        {
          title: "Regular Income Flow",
          icon: "/insurance-icons/systematic-withdrawal-plan-1.png",
          description:
            "Receive a steady payout at fixed intervals without redeeming your entire investment.",
        },
        {
          title: "Wealth Continuity",
          icon: "/insurance-icons/systematic-withdrawal-plan-2.png",
          description:
            "Keep your remaining funds invested to continue benefiting from market growth.",
        },
        {
          title: "Tax Efficiency",
          icon: "/insurance-icons/systematic-withdrawal-plan-3.png",
          description:
            "Withdraw smartly with potential tax advantages compared to traditional income options.",
        },
        {
          title: "Flexible Withdrawals",
          icon: "/insurance-icons/systematic-withdrawal-plan-4.png",
          description:
            "Choose your withdrawal amount and frequency as per your financial needs.",
        },
      ],
    faq: [
      {
        question: "Are there exit loads in SWP?",
        answer:
          "Yes, depending on the fund, exit load may apply on early withdrawals.",
      },
      {
        question: "Is SWP better than Fixed Deposits?",
        answer:
          "SWP may offer better inflation-adjusted returns but comes with market risk compared to Fixed Deposits.",
      },
      {
        question: "Can SWP be paused or stopped?",
        answer:
          "Yes, SWP is flexible and can be paused, modified, or stopped anytime without penalties.",
      },
      {
        question: "How is SWP different from SIP?",
        answer:
          "SIP is used to invest regularly and build wealth, while SWP is used to withdraw regularly and generate income from existing investments.",
      },
    ],
    bgImage: "/finask/swp.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "systematic-transfer-plan",
    uspLayout: "bottom-sticky-banner",
    category: "Investments",
    title: "Systematic Transfer Plan in Mutual Funds",
    tagline: "Transfer Smartly, Invest Strategically",
    description:
      "A Systematic Transfer Plan (STP) is a mutual fund facility that allows you to transfer a fixed amount from one fund to another at regular intervals, typically from a low-risk debt fund to a higher-growth equity fund. It helps you invest gradually instead of deploying a lump sum at once. \n STP reduces market timing risk by spreading investments over time, while your funds parked in safer options continue to earn returns. It brings discipline and consistency, ensuring a structured approach to investing. It allows you to choose the transfer amount and frequency based on your needs, making it ideal for managing large investments efficiently.",
      features: [
        {
          title: "Gradual Investment",
          icon: "/insurance-icons/systematic-transfer-plan-1.png",
          description:
            "Transfer funds systematically to reduce the risk of investing a lump sum at once.",
        },
        {
          title: "Risk Management",
          icon: "/insurance-icons/systematic-transfer-plan-2.png",
          description:
            "Gradually shifts investments from low-risk to high-growth funds to balance stability and returns, or vice versa.",
        },
        {
          title: "Flexibility of Amount",
          icon: "/insurance-icons/systematic-transfer-plan-3.png",
          description:
            "Allows customization of transfer value and frequency as per your investment needs.",
        },
        {
          title: "Strategic Allocation",
          icon: "/insurance-icons/systematic-transfer-plan-4.png",
          description:
            "Ensures efficient distribution of assets across fund categories for optimal portfolio growth.",
        },
      ],
    faq: [
      {
        question: "Which funds are used in STP?",
        answer:
          "Typically, Debt Funds act as source funds and Equity or Hybrid Funds as destination funds, or vice versa.",
      },
      {
        question: "How is STP different from SIP?",
        answer:
          "SIP involves investing fresh money regularly, whereas STP involves transferring money from one existing fund to another.",
      },
      {
        question: "Can STP be automated?",
        answer:
          "Yes, STP is fully automated with predefined amount, frequency, and duration.",
      },
      {
        question: "Does STP guarantee returns?",
        answer:
          "No, STP does not guarantee returns; it only improves investment discipline and entry timing efficiency.",
      },
    ],
    bgImage: "/finask/stp.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "specialised-investment-fund",
    uspLayout: "bottom-sticky-blue",
    category: "Investments",
    title: "Specialized Investment Funds",
    tagline: "Smarter Strategies For Smarter Capital",
    description:
      "Specialized Investment Funds (SIF) are advanced investment solutions designed for discerning investors seeking tailored strategies beyond traditional mutual funds. Built to cater to High-Net-Worth Individuals and Ultra High-Net-Worth Individuals, SIFs offer flexibility in asset allocation, enabling exposure across equities, fixed income, derivatives, and alternative instruments within a single structure. These funds are actively managed with a focused approach, allowing for dynamic risk management and the ability to capitalize on evolving market opportunities. With higher customization, transparency, and strategic diversification, they aim to deliver optimized risk-adjusted returns aligned with specific financial goals and sophisticated investment needs.",
    features: [
      {
        title: "Active Portfolio Monitoring",
        icon: "/insurance-icons/specialised-investment-fund-1.png",
        description: "Continuous review and rebalancing of investments.",
      },
      {
        title: "Goal-Oriented Structuring",
        icon: "/insurance-icons/specialised-investment-fund-2.png",
        description: "Designed to match specific investment objectives.",
      },
      {
        title: "Diversified Strategies",
        icon: "/insurance-icons/specialised-investment-fund-3.png",
        description: "Invests across multiple strategies.",
      },
      {
        title: "Sophisticated Investment Framework",
        icon: "/insurance-icons/specialised-investment-fund-4.png",
        description: "Built for complex and high-value portfolios.",
      },
    ],
    faq: [
      {
        question: "What is the minimum ticket size for investment in SIF?",
        answer:
          "The minimum investment ticket size for investment in SIF is ₹10 lakhs.",
      },
      {
        question: "How liquid are SIF investments?",
        answer:
          "Liquidity depends on the fund structure; some may have lock-in periods or limited redemption options.",
      },
      {
        question: "What are the risks involved in SIFs?",
        answer:
          "SIFs may carry market risk, liquidity risk, interest rate risk, and strategy-specific risks depending on the underlying investments.",
      },
      {
        question: "What is the investment horizon for SIFs?",
        answer:
          "They usually require a medium to long-term investment horizon for optimal results.",
      },
    ],
    bgImage: "/finask/sif.png",
    backgroundPosition: "top center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "bonds",
    uspLayout: "scroll-popup-modal",
    category: "Investments",
    title: "Bonds",
    tagline: "Building Calm Amidst the Clamor",
    description:
      "In a world that often rewards speed and speculation, some investors prefer the quiet dignity of certainty. Bonds offer precisely this—capital preservation paired with predictable income, creating a foundation upon which aspirations can securely rest.\nNavigating thousands of bond issuances—each with distinct ratings, coupon structures, and market dynamics—requires more than a glance at yield tables. We evaluate credit histories, macro-economic overlays, and your personal liquidity map to curate options that serve both immediate and intergenerational needs.\nOur advisory also manages demat allocations, monitors coupon flows, and assists with maturity reinvestment—turning fixed income into a quietly compounding ally.",
    features: [
      {
        title: "Capital Preservation",
        icon: "/insurance-icons/bonds-1.png",
        description: "Focus on safety of principal.",
      },
      {
        title: "Predictable Income",
        icon: "/insurance-icons/bonds-2.png",
        description: "Regular interest payouts.",
      },
      {
        title: "Diverse Options",
        icon: "/insurance-icons/bonds-3.png",
        description:
          "Government Bonds, Corporate Bonds, Tax-Free Bonds, RBI Bonds, Sovereign Gold Bonds, Municipal Bonds.",
      },
      {
        title: "Goal-Based Investing",
        icon: "/insurance-icons/bonds-4.png",
        description:
          "Suitable for retirement and income planning.",
      },
    ],
    faq: [
      {
        question: "Are Bond returns fixed?",
        answer:
          "Coupon payments are fixed, but overall returns may vary if the bond is sold before maturity or due to interest rate changes.",
      },
      {
        question: "Are Corporate Bonds risky?",
        answer:
          "Corporate Bonds carry credit risk depending on the financial strength of the issuing company. Higher returns often come with higher risk.",
      },
      {
        question: "How are Bonds different from Fixed Deposits?",
        answer:
          "Bonds may offer higher returns and can be traded before maturity, whereas Fixed Deposits are generally simpler and may be insured up to a limit.",
      },
      {
        question:
          "What is the difference between Government and Corporate Bonds?",
        answer:
          "Government Bonds are issued by the government and are low risk, while Corporate Bonds are issued by companies and may offer higher returns with higher risk.",
      },
    ],
    bgImage: "/finask/bond.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "pms",
    uspLayout: "original",
    category: "Investments",
    title: "Portfolio Management Services",
    tagline: "Because Your Success Story Deserves a Bespoke Strategy",
    description:
      "For larger portfolios, PMS goes beyond standard allocation to deliver personalized, high-conviction investing. We collaborate with top PMS providers to craft portfolios that align with your unique financial blueprint — considering your liquidity needs, legacy goals, and appetite for concentrated bets. It’s an approach where your wealth doesn’t just grow, it evolves intentionally, stewarded by seasoned experts.",
    features: [
      {
        title: "Focused Portfolio",
        icon: "/insurance-icons/portfolio-management-services-1.png",
        description: "High-conviction bets on specific themes or sectors.",
      },
      {
        title: "Active Management",
        icon: "/insurance-icons/portfolio-management-services-2.png",
        description: "Dynamic adjustments based on market conditions.",
      },
      {
        title: "Transparency",
        icon: "/insurance-icons/portfolio-management-services-3.png",
        description: "Direct ownership of securities in your name.",
      },
      {
        title: "Strategic Wealth Building",
        icon: "/insurance-icons/portfolio-management-services-4.png",
        description:
          "A refined approach to long-term wealth creation.",
      },
    ],
    faq: [
      {
        question: "How is PMS different from Mutual Funds?",
        answer:
          "In PMS, investments are held in your own demat account and are customized to your profile, whereas Mutual Funds pool money from multiple investors into a common portfolio.",
      },
      {
        question: "What is the minimum investment required for PMS?",
        answer:
          "As per regulatory guidelines, the minimum investment amount for PMS is ₹50 lakhs.",
      },
      {
        question: "Is PMS suitable for all investors?",
        answer:
          "PMS is generally suitable for High-Net-Worth Individuals (HNIs) who seek personalized portfolio management and are comfortable with market-linked investments.",
      },
      {
        question: "How are returns generated in PMS?",
        answer:
          "Returns depend on market performance and the portfolio manager’s strategy. Since investments are market-linked, returns are not guaranteed.",
      },
    ],
    bgImage: "/finask/pms.jpg",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "aifs",
    uspLayout: "horizontal-ribbon",
    category: "Investments",
    title: "Alternative Investment Funds",
    tagline:
      "Because True Diversification Ventures Where the Ordinary Does Not",
    description:
      "Alternative Investment Funds (AIFs)  open avenues into private equity, venture capital, real estate, and structured opportunities that traditional vehicles can’t reach. We help you navigate this sophisticated space with diligence and clarity — selecting category I, II, or III funds suited to your long-term ambitions. The result: a portfolio that not only mitigates mainstream market risks but also captures new-age growth stories with strategic foresight.",
    features: [
      {
        title: "Exclusive Access",
        icon: "/insurance-icons/alternative-investment-funds-1.png",
        description: "Participate in PE, VC, and private credit deals.",
      },
      {
        title: "Uncorrelated Returns",
        icon: "/insurance-icons/alternative-investment-funds-2.png",
        description: "Performance often independent of stock market moves.",
      },
      {
        title: "Sophisticated Strategies",
        icon: "/insurance-icons/alternative-investment-funds-3.png",
        description: "Long-short, arbitrage, and other hedge fund strategies.",
      },
      {
        title: "Strategic Wealth Positioning",
        icon: "/insurance-icons/alternative-investment-funds-4.png",
        description:
          "Builds long-term capital appreciation through curated opportunities.",
      },
    ],
    faq: [
      {
        question: "Who can invest in AIFs?",
        answer:
          "AIFs are typically designed for High Net-Worth Individuals (HNIs), Ultra-HNIs, family offices, and institutional investors who understand market risks and long-term investment horizons.",
      },
      {
        question: "What is the minimum investment required in AIF?",
        answer:
          "As per regulatory guidelines, the minimum investment amount in an AIF is generally ₹1 crore per investor (subject to specific category exceptions).",
      },
      {
        question: "What are the different categories of AIFs?",
        answer:
          "AIFs are broadly classified into:\nCategory I – Venture Capital, Startups, Infrastructure, Social Ventures\nCategory II – Private Equity, Debt Funds\nCategory III – Hedge Funds and complex trading strategies",
      },
      {
        question: "Why consider AIFs in a portfolio?",
        answer:
          "AIFs offer diversification beyond traditional investments, access to exclusive opportunities, and potential for higher returns, though with higher risk.",
      },
    ],
    bgImage: "/finask/alternative-investment-funds.webp",
    backgroundPosition: "top",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "unlisted-equity",
    uspLayout: "floating-pills",
    category: "Investments",
    title: "Unlisted Equity",
    tagline: "Investing Where Vision Meets Venture",
    description:
      "Some opportunities never appear on stock tickers. They live in boardrooms of high-growth companies still charting their scale-up journeys—fintech leaders yet to list, consumer brands preparing for IPO, or late-stage startups opening pre-IPO rounds.\nFinask Value, we bridge you to these curated unlisted plays—Because accessing these deals requires more than capital—it demands relationships, diligence, and precise timing. We assess financials, business models, and sector outlooks, structure your entry for optimal eventual liquidity, and align this exposure with your overall portfolio—so private equity remains a complement, not a risk amplifier.",
    features: [
      {
        title: "Pre- IPO Access",
        icon: "/insurance-icons/unlisted-equity-1.png",
        description: "Invest in companies before they list on exchanges.",
      },
      {
        title: "High Growth Potential",
        icon: "/insurance-icons/unlisted-equity-2.png",
        description: "Capture value creation during the private phase.",
      },
      {
        title: "Strategic Diversification",
        icon: "/insurance-icons/unlisted-equity-3.png",
        description: "Exposure to new-age sectors.",
      },
      {
        title: "Relationship-Driven Access",
        icon: "/insurance-icons/unlisted-equity-4.png",
        description:
          "Leverage networks and insights to unlock premium deals.",
      },
    ],
    faq: [
      {
        question: "Who should invest in Unlisted Equity?",
        answer:
          "Unlisted equity is generally suitable for informed investors or High-Net-Worth Individuals who have a higher risk appetite and a long-term investment horizon.",
      },
      {
        question: "Is Unlisted Equity risky?",
        answer:
          "Yes, Unlisted Investments carry higher risk due to limited liquidity, valuation uncertainty and lack of public market transparency.",
      },
      {
        question: "How is the price of Unlisted Shares determined?",
        answer:
          "Prices are based on private transactions, company performance, demand-supply factors, and expected future growth prospects.",
      },
      {
        question: "What happens if the company gets listed (IPO)?",
        answer:
          "If the company goes public, investors may benefit from listing gains, subject to market conditions and lock-in rules.",
      },
    ],
    bgImage: "/finask/unlisted-equity.webp",
    backgroundPosition: "top",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "reits",
    uspLayout: "bottom-sticky-banner",
    category: "Goal Planning",
    title: "Real Estate Investment Trusts ",
    tagline:
      "Because Real Estate Returns Should Not Require Real Estate Headaches",
    description:
      "Real Estate Investment Trusts (REITs)  offer a seamless way to invest in large-scale, income-generating real estate—such as malls, office parks, residential properties and logistics centers—without buying property outright. Traded like stocks, these trusts blend the tangibility of real estate with the convenience and liquidity of modern investing.\n Finask Value helps you integrate REITs into your portfolio as a stable, yield-generating asset class with long-term upside and regular payouts.\n Build your portfolio with concrete value—without laying a single brick.",
      features: [
        {
          title: "Corpus Calculation",
          icon: "/insurance-icons/reit-1.png",
          description: "Estimates the amount needed for your desired lifestyle.",
        },
        {
          title: "Income Strategy",
          icon: "/insurance-icons/reit-2.png",
          description: "Creates a reliable post-retirement income stream.",
        },
        {
          title: "Portfolio Balance",
          icon: "/insurance-icons/reit-3.png",
          description:
            "Complement equities and debt with yield-focused assets.",
        },
        {
          title: "Expert Advisory Support",
          icon: "/insurance-icons/reit-4.png",
          description: "Optimizes returns and manage risks effectively.",
        },
      ],
    faq: [
      {
        question: "Are REITs good during inflation?",
        answer:
          "Yes, often rent agreements may include escalation clauses, and property values tend to rise with inflation. So, REITs can act as a partial inflation hedge.",
      },
      {
        question: "How transparent are REIT investments?",
        answer:
          "REITs provide regular disclosures on financials, occupancy, lease terms, and portfolio performance.",
      },
      {
        question: "Are REIT distributions always stable?",
        answer:
          "No, distributions can fluctuate based on rental income, occupancy levels, and interest rate movements.",
      },
      {
        question: "Why invest in REITs?",
        answer:
          "They provide an efficient way to invest in real estate through managed portfolios, multiple asset exposure, better liquidity, and reduced capital requirements.",
      },
    ],
    bgImage: "/finask/reit.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "invits",
    uspLayout: "bottom-sticky-blue",
    category: "Investments",
    title: "Infrastructure Investment Trusts",
    tagline: "Because Progress Should Not Just Be Admired — It Should Be Owned",
    description:
      "Infrastructure Investment Trusts (InvITs) are a modern investment avenue that allow investors to participate in income-generating infrastructure assets such as roads, power transmission projects and renewable energy. It is designed to offer stable and predictable cash flows and distribute a significant portion of earnings to investors, making them an attractive option for those seeking regular income along with potential capital appreciation. They combine the benefits of infrastructure investing with the liquidity of market-linked instruments, providing transparency, diversification and professional management. For investors looking to add a steady income-generating asset class to their portfolio, InvITs can play a strategic role in long-term wealth creation. ",
      features: [
        {
          title: "Predictable Cash Flows",
          icon: "/insurance-icons/invits-1.png",
          description:
            "Earn stable income from operational infrastructure project.",
        },
        {
          title: "Long-Term Growth Potential",
          icon: "/insurance-icons/invits-2.png",
          description:
            "Benefit from India's expanding infrastructure ecosystem.",
        },
        {
          title: "Renewable & Future Assets",
          icon: "/insurance-icons/invits-3.png",
          description:
            "Gain exposure to sustainable energy and modern infrastructure.",
        },
        {
          title: "Regulated & Transparent",
          icon: "/insurance-icons/invits-4.png",
          description:
            "Invest in SEBI-governed structures with clear disclosures.",
        },
      ],
    faq: [
      {
        question: "What is the structure of an InvIT?",
        answer:
          "An InvIT typically has a trust structure with a sponsor, investment manager, project manager, and trustee overseeing operations and compliance.",
      },
      {
        question:
          "What is the difference between Public InvITs and Private InvITs?",
        answer:
          "Public InvITs are listed and available to retail investors, while Private InvITs are unlisted and typically accessible only to institutional or large investors.",
      },
      {
        question: "What is distribution payout frequency in InvITs?",
        answer:
          "Most InvITs provide quarterly or semi-annual distributions depending on cash flow generation.",
      },
      {
        question: "How are InvITs different from REITs?",
        answer:
          "InvITs invest in infrastructure projects, while REITs invest in real estate properties. Both provide regular income but from different asset classes.",
      },
    ],
    bgImage: "/finask/invi.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "fractional-commercial-real-estate",
    uspLayout: "scroll-popup-modal",
    category: "Goal Planning",
    title: "Fractional Commercial Real Estate",
    tagline: "Because Progress Should Not Require Owning the Whole Skyline",
    description:
      "It is an innovative investment solution that allows investors to own a share of high-quality, income-generating commercial properties such as office spaces, warehouses, and retail assets without the need for large capital outlays. By pooling funds with other investors, you gain access to premium real estate opportunities that were traditionally available only to large institutions or HNI investors. This asset class offers the potential for stable rental income, capital appreciation, and portfolio diversification. With professional management, transparency and lower entry barriers, fractional ownership makes commercial real estate more accessible, efficient and aligned with modern investment needs.",
      features: [
        {
          title: "Diversified Real Asset Exposure",
          icon: "/insurance-icons/fractional-commercial-real-estate-1.png",
          description:
            "Balance your portfolio with real estate and infrastructure investments.",
        },
        {
          title: "Curated Investment Opportunities",
          icon: "/insurance-icons/fractional-commercial-real-estate-2.png",
          description:
            "Handpicked deals backed by expert diligence and analysis.",
        },
        {
          title: "Capital Appreciation Potential",
          icon: "/insurance-icons/fractional-commercial-real-estate-3.png",
          description:
            "Benefit from long-term value growth of prime real assets.",
        },
        {
          title: "Own Premium Assets Fractionally",
          icon: "/insurance-icons/fractional-commercial-real-estate-4.png",
          description:
            "Invest in Grade-A commercial properties without full ownership.",
        },
      ],
    faq: [
      {
        question: "How does Fractional Ownership work?",
        answer:
          "Investors pool funds to purchase a commercial asset (like office spaces or warehouses) through a structured platform or SPV (Special Purpose Vehicle). Rental income and potential appreciation are shared proportionately.",
      },
      {
        question: "How liquid is fractional real estate?",
        answer:
          " It is less liquid than listed instruments, though some platforms offer secondary market exits or structured buyback options.",
      },
      {
        question: "What returns can I expect from Fractional Investment?",
        answer:
          "Returns generally come from two sources — regular rental income and capital appreciation over time. However, returns depend on property performance and market conditions.",
      },
      {
        question: "Is Fractional Ownership regulated?",
        answer:
          "Regulation varies by structure; some platforms operate under SEBI guidelines or alternative investment frameworks, while others function through private agreements.",
      },
    ],
    bgImage: "/finask/fractional.webp",
    backgroundPosition: "top center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "p2p-lending",
    uspLayout: "original",
    category: "Investments",
    title: "Peer-to-Peer Lending",
    tagline: "Elevating Fixed Income with Thoughtful Innovation",
    description:
      "Not every investor is drawn to the pulse of markets. Many seek stable, predictable returns—but wish to surpass traditional fixed deposit yields. Peer-to-Peer Lending, when curated and monitored diligently, offers such an elegant middle path. \n At Finask Value, we approach P2P Lending as a structured fixed income strategy—not a speculative tech fad. Whether you are a retiree desiring monthly income, a professional diversifying surplus or an HNI layering alternative fixed income alongside bonds and FDRs, P2P Lending can complement your strategy. \n We handle everything from platform selection and borrower diversification to ongoing risk monitoring, so your fixed income evolves with clarity and calm.",
      features: [
        {
          title: "Enhance Yields",
          icon: "/insurance-icons/peer-to-peer-lending-1.png",
          description: "Returns typically ranging from 10-12%.",
        },
        {
          title: "Diversification",
          icon: "/insurance-icons/peer-to-peer-lending-2.png",
          description: "Spread risk across hundreds of borrowers.",
        },
        {
          title: "Monthly Income",
          icon: "/insurance-icons/peer-to-peer-lending-3.png",
          description: "Options for regular monthly payouts.",
        },
        {
          title: "Transparent & Monitored Process",
          icon: "/insurance-icons/peer-to-peer-lending-4.png",
          description: "Track performance with clarity and ongoing oversight.",
        },
      ],
    faq: [
      {
        question: "How does P2P Lending work?",
        answer:
          "Investors lend money to verified borrowers through a regulated platform. Borrowers repay the loan with interest over a fixed tenure, and investors earn returns on the amount lent.",
      },
      {
        question: "Who regulates P2P Lending in India?",
        answer:
          "P2P platforms in India are regulated by the Reserve Bank of India (RBI) and operate as NBFC-P2P entities.",
      },
      {
        question: "What returns can I expect from P2P Lending?",
        answer:
          "Returns vary depending on borrower risk profiles and platform structure. Since it is a market-linked credit product, returns are not guaranteed.",
      },
      {
        question: "Is P2P Lending risky?",
        answer:
          "Yes, P2P Lending carries credit risk — borrowers may default on repayments. Diversifying across multiple borrowers helps reduce risk.",
      },
    ],
    bgImage: "/finask/p2p.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "alternative-fixed-income",
    uspLayout: "horizontal-ribbon",
    category: "Investments",
    title: "Alternative Fixed Income",
    tagline: "When Smart Innovation Meets Predictable Returns",
    description:
      "Fixed income doesn’t have to be monotonous. Beyond bonds and deposits lie avenues like Market-Linked Debentures, Invoice Discounting, and tech-driven supply chain finance—each crafted to generate 9%–14% returns while balancing varying degrees of liquidity and risk.\nFinask Value, we make this universe approachable. We vet platforms, examine issuer balance sheets, and design diversified allocations so you can benefit from structured income without undue exposure. Because true wealth stewardship means knowing how to weave traditional and alternative fabrics into a single, resilient financial tapestry.",
      features: [
        {
          title: "Capital Preservation",
          icon: "/insurance-icons/alternative-fixed-income-1.png",
          description:
            "Investment approach focused on protecting principal while generating stable returns.",
        },
        {
          title: "Invoice Discounting",
          icon: "/insurance-icons/alternative-fixed-income-2.png",
          description:
            "Short-term financing by unlocking liquidity against unpaid invoices to improve cash flow.",
        },
        {
          title: "Supply Chain Finance",
          icon: "/insurance-icons/alternative-fixed-income-3.png",
          description:
            "Funding structured vendor payment cycles to optimize corporate working capital.",
        },
        {
          title: "Structured Income Solutions",
          icon: "/insurance-icons/alternative-fixed-income-4.png",
          description:
            "Customized investment structures designed to deliver predictable, periodic cash flows.",
        },
      ],
    faq: [
      {
        question:
          "How are Alternative Fixed Income products different from Traditional Fixed Deposits?",
        answer:
          "Unlike Bank Fixed Deposits, these investments are market-linked or credit-linked and may offer higher potential returns, but they also carry higher risk.",
      },
      {
        question: "Are Alternative Fixed Income Investments safe?",
        answer:
          "They carry credit and liquidity risk. Proper due diligence, diversification, and understanding of the underlying structure are essential before investing.",
      },
      {
        question:
          "Why is portfolio allocation important in Alternative Fixed Income?",
        answer:
          "Because balancing risk, liquidity and yield across instruments helps optimize stable long-term returns.",
      },
      {
        question:
          "What is the typical investment tenure for Alternative Fixed Income?",
        answer:
          "Tenure can range from short-term (a few months) to medium or long-term, depending on the product structure.",
      },
    ],
    bgImage: "/finask/afi.webp",
    backgroundPosition: "top",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "corporate-fdrs",
    uspLayout: "floating-pills",
    category: "Investments",
    title: "Corporate Fixed Deposits",
    tagline: "Combining Familiar Stability with Enhanced Yield",
    description:
      "For many investors, fixed deposits have long signified financial prudence. Yet traditional bank FDs often underperform inflation. Corporate FDRs offer a refined alternative—delivering higher yields through reputable NBFCs and corporates, backed by rigorous credit ratings.\nFinask Value, we navigate this terrain carefully. Because with fixed income, it’s not just about rates—it’s about safeguarding stability with informed discretion.",
      features: [
        {
          title: "Higher Rates",
          icon: "/insurance-icons/corporate-fixed-deposits-1.png",
          description: "Better returns than traditional bank deposits.",
        },
        {
          title: "Rated Safety",
          icon: "/insurance-icons/corporate-fixed-deposits-2.png",
          description: "Focus on AAA/AA rated issuers.",
        },
        {
          title: "Flexible Tenure",
          icon: "/insurance-icons/corporate-fixed-deposits-3.png",
          description: "Options ranging from 1 to 5 years.",
        },
        {
          title: "Capital Stability",
          icon: "/insurance-icons/corporate-fixed-deposits-4.png",
          description:
            "Prioritise safety while enhancing fixed income returns.",
        },
      ],
    faq: [
      {
        question: "How are Corporate FDRs different from Bank FDs?",
        answer:
          " Corporate FDRs are issued by companies, not banks and may offer higher interest rates. However, they carry higher credit risk compared to Bank FDs.",
      },
      {
        question: "Are Corporate FDRs safe?",
        answer:
          "Safety depends on the financial strength and credit rating of the issuing company. Higher-rated companies generally offer lower risk compared to lower-rated issuers.",
      },
      {
        question: "Are Corporate FDRs secured?",
        answer:
          " Some Corporate FDRs are secured against company assets, while others may be unsecured. It is important to review the terms before investing.",
      },
      {
        question: "What is the minimum investment required in Corporate FDRs?",
        answer:
          " Minimum investment varies by issuer but usually starts from ₹10,000 or more, depending on the Corporate FD scheme.",
      },
    ],
    bgImage: "/finask/c-fdr.jpg",
    backgroundPosition: "top",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "gift-city",
    uspLayout: "bottom-sticky-banner",
    category: "Investments",
    title: "GIFT City",
    tagline: "Opening Global Doors, Seamlessly Within India",
    description:
      "It is India’s first operational International Financial Services Centre which designed to position the country as a global financial hub. It offers a world-class ecosystem for financial services, including offshore investments, banking, insurance and fund management, all within a highly regulated and tax-efficient environment with benefits such as tax incentives, ease of doing business and access to global markets in foreign currency.  \n It provides investors and institutions a unique opportunity to diversify internationally while operating from India. For forward-looking investors, it represents a gateway to global investing with enhanced efficiency, transparency and regulatory support.",
      features: [
        {
          title: "Tax Efficiency",
          icon: "/insurance-icons/gift-city-1.png",
          description: "Exemptions on certain capital gains and interest income.",
        },
        {
          title: "Dollar Assets",
          icon: "/insurance-icons/gift-city-2.png",
          description: "Invest in USD denominated assets.",
        },
        {
          title: "Ease of Access",
          icon: "/insurance-icons/gift-city-3.png",
          description: "No PIS hassles or complex foreign compliance.",
        },
        {
          title: "Global Financial Hub Ecosystem",
          icon: "/insurance-icons/gift-city-4.png",
          description:
            "Supports offshore investments, banking, insurance, and fund management.",
        },
      ],
    faq: [
      {
        question: "Who can invest in Gift City?",
        answer:
          "Both resident Indians (under LRS) and Non-Resident Indians (NRIs) can invest in GIFT City IFSC.",
      },
      {
        question: "Who can invest in Liberalised Remittance Scheme?",
        answer:
          "Liberalised Remittance Scheme (LRS) allows resident individuals to remit up to USD 250,000 per financial year for permissible transactions.",
      },
      {
        question: "Is investment in Gift City tax-free?",
        answer:
          " There are specific tax incentives, such as no Capital Gains Tax and No GST for Non-Residents Indians, but rules vary for residents Indians.",
      },
      {
        question: "Can I invest in US stocks?",
        answer:
          "Yes, GIFT City provides a platform to invest in global stocks (like US markets) through NSE IFSC.",
      },
    ],
    bgImage: "/finask/gift-city.png",
    backgroundPosition: "top",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "e-gold",
    uspLayout: "bottom-sticky-blue",
    category: "Investments",
    title: "E-Gold",
    tagline: "Because Modern Aspirations Still Treasure Timeless Wealth",
    description:
      "E-Gold lets you build your gold holdings digitally — no safes, no insurance worries, no purity concerns. Buy as little as a gram or as much as your milestones demand, all secured in vaulted assurance and ready for cash redemption or jewellery conversion when your heart desires.\n\nIt’s tradition, transformed for today, making sure your portfolio shines with both heritage and hassle-free liquidity.\n\nFinask Value, we help you integrate E-Gold seamlessly into your broader financial goals—whether it’s gifting with grace, saving for a future wedding, or simply balancing your asset mix with a timeless hedge. With 24K purity, full transparency, and the power of automation through SIPs, E-Gold becomes more than just a commodity—it becomes a modern heirloom in the making, one digital gram at a time.",
      features: [
        {
          title: "Safety & Purity",
          icon: "/insurance-icons/e-gold-1.png",
          description: "24K Gold stored in secure vaults.",
        },
        {
          title: "Liquidity",
          icon: "/insurance-icons/e-gold-2.png",
          description: "Easy to buy and sell digitally.",
        },
        {
          title: "SIP Option",
          icon: "/insurance-icons/e-gold-3.png",
          description: "Accumulate gold systematically.",
        },
        {
          title: "Digital Gold Ownership",
          icon: "/insurance-icons/e-gold-4.png",
          description:
            "Invest in 24K Gold without physical storage hassles.",
        },
      ],
    faq: [
      {
        question: "How is E-Gold different from physical gold?",
        answer:
          "E-Gold eliminates storage risk, making charges, and purity concerns. It can be bought and sold online easily, while physical gold involves storage, security, and resale challenges.",
      },
      {
        question: "What is the minimum investment required in E-Gold?",
        answer:
          "E-Gold can be started with a very small amount, often as low as ₹500.",
      },
      {
        question: "What drives the price of E-Gold?",
        answer:
          "Its price is directly linked to international gold prices and domestic demand-supply conditions.",
      },
      {
        question: "Can E-Gold be pledged or used as collateral?",
        answer:
          "Yes, some platforms allow E-Gold holdings to be pledged for loans, similar to physical gold collateralization.",
      },
    ],
    bgImage: "/finask/e-gold.webp",
    backgroundPosition: "top",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "nps",
    uspLayout: "scroll-popup-modal",
    category: "Investments",
    title: "National Pension System ",
    tagline: "Building a Retirement That Honours Your Efforts",
    description:
      "Retirement is not the conclusion of earning—it’s the moment your lifetime of discipline begins to work for you. It’s when the fruits of your labor, invested wisely over decades, transform into dignified security and freedom.\nThe National Pension System (NPS) is one of India’s most robust instruments to shape this chapter—Whether you’re a salaried executive optimizing deductions, an entrepreneur without employer pensions, or an NRI anchoring part of your retirement in India, NPS provides a versatile platform. \nFinask Value, we simplify this entire landscape: from selecting among top-tier pension fund managers to guiding optimal equity exposure based on your horizon, recalibrating annually, and planning your eventual annuity so post-retirement income feels seamless.",
    features: [
      {
        title: "Tax Efficiency",
        icon: "/insurance-icons/national-pension-system-1.png",
        description: "Additional deduction of ₹50,000 under 80CCD(1B).",
      },
      {
        title: "Low Cost",
        icon: "/insurance-icons/national-pension-system-2.png",
        description: "One of the lowest cost investment products globally.",
      },
      {
        title: "Market Linked",
        icon: "/insurance-icons/national-pension-system-3.png",
        description: "Option to invest in equity for higher long-term returns.",
      },
      {
        title: "Customized Asset Allocation",
        icon: "/insurance-icons/national-pension-system-4.png",
        description: "Align equity and debt exposure with your age and goals.",
      },
    ],
    faq: [
      {
        question: "Who can invest in NPS?",
        answer:
          "Any Indian citizen (resident or NRI) between 18 and 70 years of age can open an NPS account, subject to KYC compliance.",
      },
      {
        question: "What are the types of NPS Accounts?",
        answer:
          "There are two types:\nTier I – A primary retirement account with tax benefits and withdrawal restrictions.\nTier II – A voluntary savings account with flexible withdrawals but limited tax benefits.",
      },
      {
        question: "How does NPS invest my money?",
        answer:
          "Your contributions are invested in a mix of Equity (E), Corporate Bonds (C), Government Securities (G), and Alternative Assets (A). You can choose either Active Choice (custom allocation) or Auto Choice (age-based allocation).",
      },
      {
        question: "What is the lock-in period for NPS?",
        answer:
          "Tier I accounts are locked until retirement (age 60), with partial withdrawal allowed under specific conditions. Tier II accounts have no lock-in.",
      },
    ],
    bgImage: "/finask/national-pension-sceme.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "stock-broking",
    uspLayout: "original",
    category: "Investments",
    title: "Stock & Broking",
    tagline: "Bringing Clarity and Conviction to Your Equity Journey",
    description:
      "Equities offer promise. But navigating them requires more than intuition; it demands structure, foresight, and an ally who understands that investing is about compounding both capital and confidence.\nFinask Value, our stock and broking services are designed to cut through the noise. We combine research-backed insights with personalized guidance to help you build a portfolio that aligns with your goals, risk appetite, and timeline. Whether you're a seasoned trader or a first-time investor, we offer the tools, transparency, and expertise to help you make informed decisions — not impulsive ones.\nBecause in equities, it’s not about frequent thrills; it’s about enduring triumphs—structured, reviewed, and recalibrated.",
    features: [
      {
        title: "Research Backed",
        icon: "/insurance-icons/stock-broking-1.png",
        description:
          "Recommendations based on fundamental and technical analysis.",
      },
      {
        title: "Personalized Guidance",
        icon: "/insurance-icons/stock-broking-2.png",
        description: "Strategies tailored to your risk profile.",
      },
      {
        title: "Seamless Execution",
        icon: "/insurance-icons/stock-broking-3.png",
        description: "Advanced platforms for easy trading.",
      },
      {
        title: "Disciplined Investment Approach",
        icon: "/insurance-icons/stock-broking-4.png",
        description:
          "Focus on long-term wealth creation over short-term speculation.",
      },
    ],
    faq: [
      {
        question: "How can I start investing in Stocks?",
        answer:
          "You need to open a Demat and Trading account, complete KYC formalities, link your bank account, and then you can begin investing or trading through an online platform.",
      },
      {
        question: "What is the difference between Trading and Investing?",
        answer:
          " Investing focuses on long-term wealth creation by holding stocks over time, while Trading involves frequent buying and selling to benefit from short-term price movements.",
      },
      {
        question: "Are Stock Market Investments risky?",
        answer:
          "Yes, Stock Markets are subject to market volatility and price fluctuations. However, disciplined investing, diversification and proper research can help manage risk.",
      },
      {
        question: "Can NRIs invest in Indian Stock Markets?",
        answer:
          "Yes, NRIs can invest in Indian equities through a PIS (Portfolio Investment Scheme) account, subject to RBI and SEBI regulations.",
      },
    ],
    bgImage: "/finask/stock-roking.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "loan-against-securities",
    uspLayout: "horizontal-ribbon",
    category: "Loans",
    title: "Loan Against Securities",
    tagline: "Unlock Liquidity Without Selling Your Investments",
    description:
      "Your investments in mutual funds and shares are valuable financial assets. Instead of selling them when you need funds, you can pledge them and access instant liquidity through a Loan Against Securities (LAS). With Loan Against Mutual Funds (LAMF) and Loan Against Securities (LAS), you can meet your short-term financial needs while your investments remain invested and continue to grow.  \n Whether you need funds for business expansion, personal needs, emergencies or financial planning, Loan Against Securities offers a smart and cost-effective borrowing solution. It is a smart way to unlock funds while keeping your long-term investment strategy intact. \n At Finask Value, access liquidity without selling your portfolio through cost-effective borrowing backed by your securities.",
    features: [
      {
        title: "Instant Liquidity",
        icon: "/insurance-icons/loan-against-securities-1.png",
        description:
          "Access funds quickly by leveraging your investments without lengthy loan processes.",
      },
      {
        title: "Portfolio Protection",
        icon: "/insurance-icons/loan-against-securities-2.png",
        description:
          "Your mutual funds and shares remain invested, allowing you to benefit from potential market growth.",
      },
      {
        title: "Lower Borrowing Cost",
        icon: "/insurance-icons/loan-against-securities-3.png",
        description:
          "Loans against securities often come with lower interest rates than personal loans or credit cards.",
      },
      {
        title: "No Asset Liquidation Required",
        icon: "/insurance-icons/loan-against-securities-4.png",
        description: "Avoid Capital Gains Tax by retaining investments.",
      },
    ],
    faq: [
      {
        question: "How is interest charged in LAS?",
        answer:
          "Interest is charged only on the amount utilized from the sanctioned limit, not on the entire approved loan amount.",
      },
      {
        question: "Can I continue to earn returns on pledged securities?",
        answer:
          "Yes, you continue to earn dividends, interest, and capital appreciation on pledged assets.",
      },
      {
        question: "Can I use the Loan flexibly?",
        answer:
          "Yes, many LAS facilities work like an overdraft, allowing you to withdraw funds as needed and pay interest only on the amount utilized.",
      },
      {
        question: "Is LAS better during bullish or bearish markets?",
        answer:
          "LAS is generally more effective in bullish or stable markets where collateral value remains strong and margin calls are minimized.",
      },
    ],
    bgImage: "/finask/loan-against-securities.webp",
    backgroundPosition: "top",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "set-up-sip",
    uspLayout: "floating-pills",
    category: "Investment Planning",
    title: "Step-Up SIP",
    tagline: "Invest More As You Grow, Achieve More With Time.",
    description:
      "A Step-Up SIP is a smart and disciplined way to grow your wealth by gradually increasing your investment amount over time. It allows you to start with a comfortable monthly contribution and automatically step it up at regular intervals, typically in line with your rising income. This strategy not only helps you stay ahead of inflation but also accelerates wealth creation through the power of compounding. It is ideal for salaried individuals and long-term investors.\nIt ensures that your investments evolve with your financial growth, helping you achieve your life goals more efficiently without feeling a financial burden.",
    features: [
      {
        title: "The Compounding Advantage",
        icon: "",
        description:
          "Small increments create a big long-term impact on wealth creation.",
      },
      {
        title: "Step-by-Step Investing",
        icon: "",
        description:
          "Increase investments gradually without creating financial pressure.",
      },
      {
        title: "Better Goal Mapping",
        icon: "",
        description:
          "Bridge the gap between your savings and future aspirations more effectively.",
      },
      {
        title: "Inflation Beating Strategy",
        icon: "",
        description:
          "Increase your investments over time to stay ahead of rising costs.",
      },
    ],
    faq: [
      {
        question: "How is a Step-Up SIP different from a regular SIP?",
        answer:
          "In a regular SIP, you invest a fixed amount every month, whereas in a Step-Up SIP, your investment amount increases at predefined intervals.",
      },
      {
        question: "How often can I increase my SIP step-up amount?",
        answer:
          "Most people prefer to step up their SIP annually, though you also have the option to increase it semi-annually or at custom intervals based on your needs.",
      },
      {
        question: "Can I stop or modify the step-up feature later?",
        answer:
          "Yes, you can modify, pause, or cancel the step-up feature anytime.",
      },
      {
        question: "Is Step-Up SIP risky?",
        answer:
          "The risk level is the same as the mutual funds you invest in. The step-up feature only affects the contribution amount, not the market risk.",
      },
    ],
    bgImage: "/finask/sip.png",
    backgroundPosition: "bottom",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },

  // --- Services ---

  {
    slug: "trust-formation",
    uspLayout: "bottom-sticky-banner",
    category: "Goal Planning",
    title: "Trust Formation",
    tagline: "Safeguard Today. Shape Tomorrow.",
    description:
      "True wealth extends beyond mere accumulation; it is measured by how thoughtfully it is preserved and how purposefully it is passed on. For families, business owners, and philanthropists alike, establishing a trust remains one of the most nuanced tools to secure a legacy — ensuring your assets are protected, your intentions honored, and your loved ones provided for without complication or conflict.\nA trust legally transfers assets from you, the settlor, to chosen trustees, who hold and manage these for beneficiaries under carefully designed terms. From private family trusts that prioritize multi-generational wealth transfer, to irrevocable structures that shield assets from potential liabilities, to discretionary models that offer flexibility in distributions — each trust serves as a bespoke safeguard for what matters most.\nFinask Value, we coordinate the entire journey — advising on trust structures, engaging premier legal partners, ensuring regulatory compliance, and guiding you through post-formation nuances such as audits and trustee management. Because for legacies to last, they must be built on clarity, control, and confidence.",
    features: [
      {
        title: "Wealth Protection",
        icon: "/insurance-icons/trust-formation-1.png",
        description:
          "Safeguard your assets against risks, liabilities, and uncertainties.",
      },
      {
        title: "Asset Security",
        icon: "/insurance-icons/trust-formation-2.png",
        description:
          "Create legally robust frameworks to protect what matters most.",
      },
      {
        title: "Trustee Management",
        icon: "/insurance-icons/trust-formation-3.png",
        description:
          "Professional oversight to ensure smooth execution and compliance.",
      },
      {
        title: "Philanthropic Planning",
        icon: "/insurance-icons/trust-formation-4.png",
        description:
          "Channel your wealth into meaningful social impact with structured giving.",
      },
    ],
    faq: [
      {
        question: "Is a Trust only for the wealthy?",
        answer:
          "No, a Trust is a useful tool for anyone wanting specific control over asset distribution, protecting beneficiaries or caring for a special needs child.",
      },
      {
        question: "What is a Private Family Trust?",
        answer:
          "It is a trust created for the benefit of family members, helping in tax planning, asset protection, and succession.",
      },
      {
        question: "Can I be a trustee?",
        answer:
          "Yes, the settlor (creator) can also be a trustee and manage the assets during their lifetime.",
      },
      {
        question: "Are Trusts revocable?",
        answer:
          "Trusts can be revocable (can be cancelled) or irrevocable (permanent). Irrevocable trusts offer better asset protection.",
      },
    ],
    bgImage: "/finask/trust.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "will-writing",
    uspLayout: "bottom-sticky-blue",
    category: "Goal Planning",
    title: "Will Writing",
    tagline: "A Gentle Blueprint for Lasting Peace",
    description:
      "A lifetime of diligence deserves more than just fond memories; it deserves clear direction. Yet, many individuals delay writing a will, inadvertently leaving behind a maze of legal uncertainties and emotional strain for those they cherish most.\nFinask Value, we bring empathy and expertise together to simplify the process of creating a will that’s both legally robust and deeply personal. By clearly outlining how your assets — from properties and investments to heirlooms and guardianships — should be distributed, a well-crafted will ensures your family navigates the future with certainty, not confusion.\nWe view will writing not as a somber task, but as an empowering opportunity to guide your family with love and forethought — ensuring they receive your wealth with gratitude, not grievances.",
      features: [
        {
          title: "Legal Clarity",
          icon: "/insurance-icons/will-writing-1.png",
          description: "Avoid ambiguity and legal disputes.",
        },
        {
          title: "Asset Distribution",
          icon: "/insurance-icons/will-writing-2.png",
          description: "Ensure assets go to the intended beneficiaries.",
        },
        {
          title: "Guardianship",
          icon: "/insurance-icons/will-writing-3.png",
          description: "Appoint guardians for minor children.",
        },
        {
          title: "Legacy Preservation",
          icon: "/insurance-icons/will-writing-4.png",
          description: "Helps preserve intentions and values across generations.",
        },
      ],
    faq: [
      {
        question: "Do I need a Lawyer while writing my Will?",
        answer:
          "While not mandatory, professional help ensures your Will is legally sound, clear, and leaves no room for misinterpretation.",
      },
      {
        question: "Does a Will need to be registered?",
        answer:
          "Registration is optional but highly recommended as it proves the authenticity of the Will and reduces the chances of it being challenged.",
      },
      {
        question: "What happens if I die without a Will?",
        answer:
          "You are considered 'intestate', and your assets are distributed according to the succession laws of your religion, which may not align with your wishes.",
      },
      {
        question: "Can I change my Will?",
        answer:
          "Yes, you can update or revoke your Will as many times as you like during your lifetime. Only the last valid Will is considered.",
      },
    ],
    bgImage: "/finask/will-writing.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "executor-services",
    uspLayout: "scroll-popup-modal",
    category: "Goal Planning",
    title: "Executor Services",
    tagline:
      "Because Legacies Deserve More Than Emotion — They Deserve Precise Execution",
    description:
      "Wills and trusts hold your intentions, but it’s the executor who ensures they come alive, without delay, dispute, or dilution. Our executor services stand as an unwavering hand to manage distributions, settle obligations, and uphold your wishes with absolute integrity.\n\nSo your lifetime of effort becomes a source of harmony, not heartache, for those you leave behind.\n At Finask Value, our executor services go beyond paperwork. We step in with compassion, clarity, and complete confidentiality—coordinating with legal, financial, and family stakeholders to ensure every step reflects your intent. Whether it’s handling complex assets, addressing cross-border beneficiaries, or mediating sensitive transitions, we provide the calm, competent presence your legacy deserves. Because honouring your life’s work shouldn’t be left to chance.",
      features: [
        {
          title: "Faithful Execution",
          icon: "/insurance-icons/executor-services-1.png",
          description: "Ensure your wishes are carried out exactly as intended.",
        },
        {
          title: "Confidential Handling",
          icon: "/insurance-icons/executor-services-2.png",
          description:
            "Maintain complete discretion across sensitive financial matters.",
        },
        {
          title: "Dispute Mitigation",
          icon: "/insurance-icons/executor-services-3.png",
          description:
            "Proactively address conflicts to ensure smooth transitions.",
        },
        {
          title: "Debt & Obligation Settlement",
          icon: "/insurance-icons/executor-services-4.png",
          description:
            "Handles outstanding liabilities and financial dues efficiently.",
        },
      ],
    faq: [
      {
        question: "Can multiple executors be appointed?",
        answer:
          "Yes, a Will can appoint more than one executor to jointly manage estate administration, depending on complexity and preference.",
      },
      {
        question: "Can an executor sell property from the estate?",
        answer:
          "Yes, if required, an executor can liquidate assets such as property to settle debts or distribute proceeds among heirs.",
      },
      {
        question: "Can a family member act as an executor?",
        answer:
          "Yes, a family member can act as an executor, but many people prefer a neutral professional to avoid conflicts of interest.",
      },
      {
        question: "What happens if no executor is named in a Will?",
        answer:
          "If no executor is named, the court appoints an administrator to manage and settle the estate.",
      },
    ],
    bgImage: "/finask/executor-services.png",
    backgroundPosition: "Top center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "legal-advisory",
    uspLayout: "bottom-sticky-blue",
    category: "Consultation",
    title: "Legal Advisory",
    tagline: "Turning Law into A Shield, Not A Stressor",
    description:
      "In a world of increasing regulatory oversight and legal complexity, protecting your wealth isn’t just about what you earn—it’s about how well you’re prepared. From property disputes to contract clarity, founder agreements to legacy documentation, every legal oversight can have a lasting financial impact.\n At Finask Value, legal advisory is not a last-minute rescue. It’s built into your journey from the start—offering proactive legal structuring, due diligence, and risk mitigation that safeguards your assets, relationships, and long-term intentions.\nWhether you're acquiring real estate, drafting succession documents, reviewing investor agreements, or setting up holding structures, our legal team partners with your goals—not just the paperwork. We guide you with clarity, confidentiality, and a strategic lens that turns law from a limitation into a legacy protector.",
      features: [
        {
          title: "Property Due Diligence",
          icon: "/insurance-icons/legal-advisory-1.png",
          description: "Verification of titles and documents.",
        },
        {
          title: "Contract Review",
          icon: "/insurance-icons/legal-advisory-2.png",
          description: "Reviewing financial and business agreements.",
        },
        {
          title: "Family Settlement",
          icon: "/insurance-icons/legal-advisory-3.png",
          description: "Drafting family settlement deeds.",
        },
        {
          title: "Risk Mitigation",
          icon: "/insurance-icons/legal-advisory-4.png",
          description:
            "Identify and address legal vulnerabilities across your wealth ecosystem.",
        },
      ],
    faq: [
      {
        question: "Do you handle Litigation?",
        answer:
          "We primarily focus on non-litigation advisory, documentation and preventive law. We can refer you to Litigators if court representation is needed.",
      },
      {
        question: "Why is due diligence important?",
        answer:
          "It uncovers potential legal risks (like unclear property titles or hidden liabilities) before you commit to a transaction.",
      },
      {
        question: "Can you help with Startup Incorporation?",
        answer:
          "Yes, we assist with entity selection (LLP, Pvt Ltd), registration, and founder agreements.",
      },
      {
        question: "What is a Family Settlement Deed?",
        answer:
          "It is a document recording the amicable distribution of family assets to prevent future disputes.",
      },
    ],
    bgImage: "/finask/legal-advisory.webp",
    backgroundPosition: "top center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "Plans starting from \u20B91000/month",
    },
  },
  {
    slug: "tax-advisory",
    uspLayout: "horizontal-ribbon",
    category: "Consultation",
    title: "Tax Advisory",
    tagline: "Because Wealth Should Grow, Not Leak",
    description:
      "Every rupee saved in taxes is a rupee reinvested in your future. Finask Value, tax advisory isn’t just about compliance—it’s about optimisation, foresight, and aligning your personal or business growth with evolving tax frameworks.\nWe help individuals, families, professionals, and entrepreneurs uncover intelligent strategies—be it through HUF structuring, capital gains planning, investment-linked deductions, or multi-entity income management.\nFor businesses, we integrate GST planning, director remuneration strategies, ESOP tax treatment, and cross-border tax implications into a cohesive framework. And for NRIs, we simplify global reporting, repatriation rules, and DTAA considerations.\nYou don’t just stay compliant—you stay confident. Because with Finask Value, your tax story isn’t about burden. It’s about benefit, built into every step of your financial journey.",
      features: [
        {
          title: "Cross-Border Tax Advisory",
          icon: "/insurance-icons/tax-advisory-1.png",
          description: "Manages global income and international tax implications.",
        },
        {
          title: "Business Tax Efficiency",
          icon: "/insurance-icons/tax-advisory-2.png",
          description:
            "Structure remuneration, expenses, and profits for optimal tax outcomes.",
        },
        {
          title: "Future-Ready Tax Strategy",
          icon: "/insurance-icons/tax-advisory-3.png",
          description: "Stay ahead of evolving tax laws with proactive planning.",
        },
        {
          title: "Tax Optimisation",
          icon: "/insurance-icons/tax-advisory-4.png",
          description:
            "Maximise savings by structuring income and investments efficiently.",
        },
      ],
    faq: [
      {
        question: "Do you help with Income Tax Returns?",
        answer:
          "Yes, we assist with comprehensive Income Tax Return (ITR) filing for individuals, HUFs, and businesses.",
      },
      {
        question: "How often should I review my tax plan?",
        answer:
          "It is recommended to review tax planning regularly at the starting of every financial year or whenever there are major income or regulatory changes.",
      },
      {
        question: "What is Capital Gains Tax?",
        answer:
          "It is the tax on profit from the sale of assets like property or stocks. We help calculate and optimize this liability.",
      },
      {
        question: " Is tax advisory only for the financial year-end?",
        answer:
          "No, it is most effective when done throughout the year for proactive tax planning.",
      },
    ],
    bgImage: "/finask/tax-advisory.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "financial-literacy",
    uspLayout: "floating-pills",
    category: "Empowerment",
    title: "Financial Literacy Workshops",
    tagline: "Empowering Clarity, Inspiring Confidence",
    description:
      "Finask Value, we believe that the most valuable asset any individual can own is clarity. In a world full of noise and financial quick fixes, informed decision-making isn’t just smart—it’s empowering.\nOur Financial Literacy Workshops and SEBI-compliant Investor Awareness Programs (IAPs) are designed to democratize that empowerment. Whether you're a salaried professional, homemaker, entrepreneur, student, or retiree—we meet you where you are, and help you move forward with confidence.\nEach program is thoughtfully curated to simplify complex concepts: from budgeting and SIPs to tax planning, insurance design, and wealth transfer. We address real-life questions, bust financial myths, and help participants build a framework they can actually apply—today, tomorrow, and 20 years from now.\nDelivered virtually or on-site, our sessions use relatable stories, practical illustrations, and interactive Q&A formats led by certified experts. And most importantly, every IAP is 100% educational—zero product pitching, full commitment to SEBI’s mission of protecting and uplifting Indian investors.\nBecause when financial literacy improves, everything else follows: financial dignity, family wellbeing, and the confidence to build a better life. Finask Value, that’s the kind of wealth we aim to co-create.",
      features: [
        {
          title: "Confidence to Grow",
          icon: "/insurance-icons/financial-literacy-workshops-1.png",
          description:
            "Empowers you to take control of your financial journey.",
        },
        {
          title: "Inclusive Learning",
          icon: "/insurance-icons/financial-literacy-workshops-2.png",
          description:
            "Designed for professionals, homemakers, students, and retirees alike.",
        },
        {
          title: "Smart Investing Basics",
          icon: "/insurance-icons/financial-literacy-workshops-3.png",
          description:
            "Builds understanding of SIPs, asset allocation, and wealth-building fundamentals.",
        },
        {
          title: "Interactive Learning Experience",
          icon: "/insurance-icons/financial-literacy-workshops-4.png",
          description:
            "Engaging sessions with real-life examples and open Q&A.",
        },
      ],
    faq: [
      {
        question: "Are these Financial Literacy Workshops paid?",
        answer:
          "We offer both free awareness programs (often sponsored) and advanced paid workshops for in-depth learning.",
      },
      {
        question: "Do you conduct Financial Literacy Workshops for employees?",
        answer:
          "Yes, we offer corporate financial wellness programs tailored to employee needs.",
      },
      {
        question:
          "Do I need prior finance knowledge before attending these workshops?",
        answer:
          "No, our workshops are designed to be beginner-friendly and jargon-free.",
      },
      {
        question:
          "Do workshops address behavioural aspects of money management?",
        answer:
          "Yes, they often include behavioural finance concepts to help participants understand spending habits, biases and decision-making patterns.",
      },
    ],
    bgImage: "/finask/financial-literacy.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  // {
  //   slug: "next-gen-coaching",
    // uspLayout: "bottom-sticky-banner",
  //   category: "Empowerment",
  //   title: "Next-Gen Financial Coaching",
  //   tagline: "Building Wealth with Wisdom, Not Just Wallets",
  //   description:
  //     "They’ve grown up with apps, algorithms, and ambition. But what today’s generation often lacks is what no school or screen teaches — the financial wisdom to make wealth decisions with confidence, responsibility, and foresight.\nFinask Value, our Next-Gen Financial Coaching goes beyond numbers and jargon. We help young adults, heirs, first-jobbers, and aspiring entrepreneurs decode the language of money — from managing credit and investments to understanding equity, taxes, insurance, and legacy.\nBecause wealth is no longer inherited — it’s learned. And we’re here to make sure the next generation doesn’t just receive assets, but the ability to grow and respect them.",
  //   features: [
  //     {
  //       title: "Money Management",
  //       description: "Budgeting, saving, and credit basics.",
  //     },
  //     {
  //       title: "Investment Basics",
  //       description: "Introduction to asset classes and compounding.",
  //     },
  //     {
  //       title: "Wealth Responsibility",
  //       description: "Understanding the stewardship of family wealth.",
  //     },
  //   ],
  //   faq: [
  //     {
  //       question: "What age group?",
  //       answer:
  //         "Typically 18-30 years old, including students, first-time earners, and young professionals.",
  //     },
  //     {
  //       question: "Why do I need coaching so young?",
  //       answer:
  //         "Starting early allows you to harness the power of compounding and build good financial habits for life.",
  //     },
  //     {
  //       question: "Do you help with student loans?",
  //       answer:
  //         "Yes, we help you create a strategy to pay off student loans efficiently while saving for other goals.",
  //     },
  //     {
  //       question: "Is it about getting rich quick?",
  //       answer:
  //         "No, we teach sustainable wealth creation through discipline, patience, and smart decision-making.",
  //     },
  //   ],
  //   bgImage: "/finask/next-gen.webp",
  //   faqSection: {
  //     title: "General Question",
  //     description:
  //       "Answers to common questions about our services and how we can help you achieve your financial goals.",
  //     image: "/faq.webp",
  //     consultationTitle: "Connect with an Expert",
  //     consultationButton: "Get Started",
  //   },
  // },
  {
    slug: "credit-cards",
    uspLayout: "bottom-sticky-blue",
    category: "Financial Services",
    title: "Credit Cards",
    tagline: "Use Credit Smartly, Invest Strategically",
    description:
      "A credit card is a powerful financial tool that offers convenience, short-term liquidity, and benefits such as reward points, cashback, and interest-free periods. When used wisely, it enables efficient management of everyday expenses while maintaining financial flexibility. \n  It can also play an important role in your financial planning by supporting cash flow—allowing your surplus funds to remain invested in wealth-creating avenues like mutual funds, rather than being withdrawn for short-term needs. However, disciplined usage is key. Timely payments and avoiding revolving credit help prevent high interest costs and keep your finances on track. \n We help you choose the right credit card based on your lifestyle and financial goals, guide you on maximizing reward points and benefits, and assist in upgrading or replacing your existing card so you can take full advantage of better features and enhanced value.",
    features: [
      {
        title: "Smart Spending",
        icon: "/insurance-icons/credit-cards-1.png",
        description:
          "Manage everyday expenses efficiently with convenience and control.",
      },
      {
        title: "Rewards & Benefits",
        icon: "/insurance-icons/credit-cards-2.png",
        description:
          "Earn cashback, reward points, and exclusive perks on your spending.",
      },
      {
        title: "Global Acceptance",
        icon: "/insurance-icons/credit-cards-3.png",
        description:
          "Use your card seamlessly across countries for travel and online purchases.",
      },
      {
        title: "Expense Tracking",
        icon: "/insurance-icons/credit-cards-4.png",
        description:
          "Monitor and categorize your spending to stay in control of your finances.",
      },
    ],
    faq: [
      {
        question: "How does the interest-free period work?",
        answer:
          "Most credit cards offer an interest-free period, typically 20–50 days, if you pay the full outstanding amount by the due date.",
      },
      {
        question:
          "What happens if I do not pay the full credit card due amount?",
        answer:
          "If you pay only the minimum due, interest is charged on the remaining balance, often at a high rate, which can increase your financial burden.",
      },
      {
        question: "Do credit cards affect my credit score?",
        answer:
          "Yes, timely payments and responsible usage improve your credit score, while missed payments or high utilization can negatively impact it.",
      },
      {
        question: "Can I convert credit card purchases into EMI?",
        answer:
          "Yes, most credit cards allow conversion of eligible transactions into easy monthly installments (EMIs).",
      },
    ],
    bgImage: "/finask/credit-cards.png",
    backgroundPosition: "bottom center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "nri-corner",
    uspLayout: "scroll-popup-modal",
    category: "Goal Planning",
    title: "NRI's corner",
    tagline:
      "Because Home Isn’t Just Where You Live. It’s Also Where You Grow.",
    description:
      "From the avenues of London to the towers of Dubai, India is never far. For NRIs, India represents unmatched economic momentum and the unique joy of watching your roots flourish. At , we help global Indians turn emotional ties into financial advantage. Whether it’s building cross-currency wealth with tax-optimized strategies, protecting family assets in India while you’re overseas, or planning legacies that gracefully span continents, we bring structure, compliance, and vision to your India-linked investments.",
      features: [
        {
          title: "Global Wealth Structuring",
          icon: "/insurance-icons/nri-corner-1.png",
          description:
            "Build and manage wealth seamlessly across multiple geographies.",
        },
        {
          title: "NRI Tax & Compliance",
          icon: "/insurance-icons/nri-corner-2.png",
          description:
            "Navigate FEMA, DTAA, and global tax regulations with ease.",
        },
        {
          title: "Rooted Yet Global",
          icon: "/insurance-icons/nri-corner-3.png",
          description:
            "Stay connected to India while building a borderless financial future.",
        },
        {
          title: "Family Asset Protection in India",
          icon: "/insurance-icons/nri-corner-4.png",
          description:
            "Safeguards family wealth and assets while residing abroad.",
        },
      ],
    faq: [
      {
        question: "Can NRIs invest in Mutual Funds?",
        answer:
          "Yes, NRIs can invest in most Indian mutual funds, subject to KYC compliance.",
      },
      {
        question: "What is NRE vs NRO account?",
        answer:
          "NRE (Non-Resident External) is for foreign earnings and is repatriable. NRO (Non-Resident Ordinary) is for income earned in India.",
      },
      {
        question: "Is PIS mandatory?",
        answer:
          "PIS (Portfolio Investment Scheme) is mandatory for investing in stocks on repatriation basis, but not for mutual funds.",
      },
      {
        question: "How are taxes handled?",
        answer:
          "TDS is deducted on capital gains for NRIs. However, you can claim DTAA benefits if applicable.",
      },
    ],
    bgImage: "/finask/nri-corner.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "women-corner",
    uspLayout: "original",
    category: "Goal Planning",
    title: "Women's corner",
    tagline: "Because She Needs More Than Advice. She Needs Advocacy.",
    description:
      "From her relationships to her marriage, from her career to her household, a woman navigates complexities at every turn. Often, she puts others ahead of herself—her spouse, children, aging parents. She may pause her career to care for family, adjust her ambitions to support a partner, or stay silent on financial matters that intimately shape her life.\nEven today, despite earning more than ever, many women hesitate to take the lead in conversations about investing, insurance, or inheritance. They’re told money is complicated. Or that it's simply not their domain. As a result, too many brilliant, resilient women continue to carry emotional, social, and even financial weight—without the security, knowledge, or confidence they deserve.\nFinask Value, we created Women Corner not as a marketing vertical, but as a stand — to show that her goals matter, her security matters, and her choices deserve to be as expansive and informed as anyone else's.\nWe work with:\n● Young professionals who juggle EMIs, family expectations, and ambitions no one fully understands.\n● Mothers who quietly prioritize school fees over retirement funds, fearing tomorrow’s uncertainty.\n ● Homemakers who wish to grasp how family wealth is truly structured—so they aren’t left in the dark if life shifts.\n● Women rebuilding after separation or loss, who need clarity, compassion, and a map to financial independence.",
      features: [
        {
          title: "Women-Centric Financial Planning",
          icon: "/insurance-icons/women-corner-1.png",
          description:
            "Dedicated solutions designed around women’s life stages and priorities.",
        },
        {
          title: "Income Continuity Awareness",
          icon: "/insurance-icons/women-corner-2.png",
          description:
            "Encourages planning for financial stability across life transitions.",
        },
        {
          title: "Holistic Life-Centric Planning",
          icon: "/insurance-icons/women-corner-3.png",
          description:
            "Integrates career, family, and personal financial goals.",
        },
        {
          title: "Legacy & Inheritance Planning Support",
          icon: "/insurance-icons/women-corner-4.png",
          description:
            "Helps structure secure and informed wealth transfer decisions.",
        },
      ],
    faq: [
      {
        question: "Do you have women advisors?",
        answer:
          "Yes, we have a diverse team and understand that some women may prefer speaking with a female advisor.",
      },
      {
        question: "I have no financial knowledge, can you help?",
        answer:
          "Absolutely. We start from the basics and guide you at your own pace.",
      },
      {
        question: "Do you help with divorce settlements?",
        answer:
          "We provide financial guidance on asset division and post-divorce financial planning, but not legal representation.",
      },
      {
        question: "How can I become financially independent?",
        answer:
          "We help you build a personal corpus, manage your own investments, and plan for your future security.",
      },
    ],
    bgImage: "/finask/women-corner.png",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
  {
    slug: "family-office",
    uspLayout: "horizontal-ribbon",
    category: "Consultation",
    title: "Family Office",
    tagline:
      "A Comprehensive Wealth Management Solution for Ultra-High-Net-Worth Families ",
    description:
      "A comprehensive wealth management solution for ultra-high-net-worth families, managing everything from investments to lifestyle. We provide integrated management of all family assets and liabilities, ensuring smooth transition of wealth across generations.",
      features: [
        {
          title: "Holistic Wealth Management",
          icon: "/insurance-icons/family-office-1.png",
          description:
            "Integrated management of all family assets and liabilities.",
        },
        {
          title: "Intergenerational Transfer",
          icon: "/insurance-icons/family-office-2.png",
          description: "Ensuring smooth transition of wealth across generations.",
        },
        {
          title: "Lifestyle Services",
          icon: "/insurance-icons/family-office-3.png",
          description: "Concierge services for family needs.",
        },
        {
          title: "Consolidated Reporting",
          icon: "/insurance-icons/family-office-4.png",
          description:
            "Gain a clear, unified view of your entire financial ecosystem.",
        },
      ],
    faq: [
      {
        question: "Who needs a Family Office?",
        answer:
          "Typically families with investable assets above ₹50-100 Crores who have complex financial and administrative needs.",
      },
      {
        question: "What services do you provide?",
        answer:
          "Investment management, estate planning, tax advisory, philanthropy, lifestyle management, and administrative support.",
      },
      {
        question: "Is it expensive?",
        answer:
          "Costs are higher than standard advisory but offer a dedicated team and highly personalized, comprehensive service.",
      },
      {
        question: "Do you handle non-financial assets?",
        answer:
          "Yes, we can oversee real estate, art collections, and other passion assets.",
      },
    ],
    bgImage: "/family-office1.webp",
    backgroundPosition: "center",
    faqSection: {
      promoTitle: "Invest \u20B910k/month & Get",
      promoText: "\u20B91 Crore*Tax-Free",
      promoBadges1: "Plans starting from \u20B91000/month",
      promoBadges2: "In-built life cover",
    },
  },
];

export function getServiceBySlug(slug) {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServices() {
  return servicesData;
}


