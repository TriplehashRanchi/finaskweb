"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// helper: name → slug
const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

function Chevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-300 group-hover:-rotate-180 opacity-60"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

// ── Insurance Mega Menu — Icon Grid Style (like reference image) ──────────────
function InsuranceMegaMenu() {
  const [activeTab, setActiveTab] = useState("personal");

  const personalSections = [
    {
      title: "Health & Life",
      items: [
        "Health Insurance",
        "Health Super Top-up",
        "Critical Illness Insurance",
        "Personal Accident Insurance",
        "Term Insurance",
        "Term - ROP",
        " Unit Link Insurance Plan ",
        "Traditional Life Insurance Plans",
      ],
    },
    {
      title: "Motor, Travel & More",
      items: [
        "Motor Insurance",
        "Taxi Insurance",
        "Travel Insurance",
        "Home Insurance",
        "Pet Insurance",
        "Cycle Insurance",
        "Personal Cyber Insurance",
        "Roadside Assistance",
      ],
    },
  ];

  const businessSections = [
    {
      title: "Marine & Property",
      items: [
        "Marine & Cargo Insurance",
        "Fire & Burglary Insurance",
        "Office Package Policy",
        "Shop Owner Insurance",
      ],
    },
    {
      title: "General Business",
      items: [
        "Surety Bond Insurance",
        "Trade Credit Insurance",
        "Errors and Omissions",
        "Commercial Vehicle Insurance",
        "Fleet Insurance",
      ],
    },
    {
      title: "Engineering",
      items: [
        "Contractor All Risk",
        "Erection All Risk",
        "Contractor Plant & Machinery",
      ],
    },
    {
      title: "Liability",
      items: [
        "Prof. Indemnity for Doctors",
        "Professional Indemnity",
        "Workmen Compensation",
        "General Liability Insurance",
        "Corporate Cyber Insurance",
        "Director & Officer's Liability",
      ],
    },
    {
      title: "Employee Benefits",
      items: [
        "Group Personal Accident",
        "Group Health Insurance",
        "Group Term Life",
      ],
    },
  ];

  const sections =
    activeTab === "personal" ? personalSections : businessSections;

  const Item = ({ label }) => (
    <Link
      href={`/services/${toSlug(label)}`}
      className="flex items-center gap-2 px-3 py-2 rounded-sm text-[13px] text-gray-500 hover:text-[#00394E] hover:bg-[#EBF4F7] transition-colors duration-100 leading-snug"
    >
      <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
      <span>{label}</span>
    </Link>
  );

  return (
    <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-[48%] w-[1000px] bg-white rounded-md shadow-[0_16px_48px_rgba(0,57,78,0.14)] border border-gray-100 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50 overflow-hidden">
      {/* ── Tabs ── */}
      <div className="flex gap-6 px-8 pt-5 pb-0 border-b border-gray-100">
        {[
          { id: "personal", label: "Personal Insurance" },
          { id: "business", label: "Business Insurance" },
        ].map((t) => (
          <button
            key={t.id}
            onMouseEnter={() => setActiveTab(t.id)}
            onClick={() => setActiveTab(t.id)}
            className={`pb-2 cursor-pointer text-[14px] font-semibold transition-all duration-150 border-b-2 ${
              activeTab === t.id
                ? "border-[#00394E] text-[#00394E]"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      <div className="p-8 py-6 space-y-5 max-h-[420px] overflow-y-auto">
        {sections.map((sec) => (
          <div key={sec.title}>
            {/* Section header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[13px] font-bold text-gray-800">
                {sec.title}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-x-2 gap-y-0.5">
              {sec.items.map((item) => (
                <Item key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvestmentMegaMenu() {
  const mutualFundItems = [
    {
      label: "Mutual Funds",
      href: "/services/mutual-funds",
    },
    {
      label: "Systematic Investment Plan (SIP)",
      href: "/services/systematic-investment-plan",
    },
    {
      label: "Systematic Withdrawal Plan (SWP)",
      href: "/services/systematic-withdrawal-plan",
    },
    { label: "Systematic Transfer Plan (STP)", href: "/services/systematic-transfer-plan" },
  ];

  const investmentItems = [
    { label: "Bonds", href: "/services/bonds" },
    {
      label: "Portfolio Management Services",
      href: "/services/pms",
    },
    {
      label: "Alternative Investment Funds",
      href: "/services/aifs",
    },
    { label: "Unlisted Equity", href: "/services/unlisted-equity" },
    { label: "Real Estate Investment Trusts ", href: "/services/reits" },
    { label: "Infrastructure Investment Trusts", href: "/services/invits" },
    {
      label: "Fractional Commercial Real Estate",
      href: "/services/fractional-commercial-real-estate",
    },
    { label: "Peer-to-Peer Lending", href: "/services/p2p-lending" },
    {
      label: "Alternative Fixed Income",
      href: "/services/alternative-fixed-income",
    },
    { label: "Corporate FDRs", href: "/services/corporate-fdrs" },
    { label: "Gift City", href: "/services/gift-city" },
    { label: "E-Gold", href: "/services/e-gold" },
    { label: "National Pension System ", href: "/services/nps" },
    { label: "Stock & Broking", href: "/services/stock-broking" },
    {
      label: "Loan Against Securities",
      href: "/services/loan-against-securities",
    },
    {
      label: "Specialised Investment Fund (SIF)",
      href: "/services/specialised-investment-fund",
    },
    {
      label: "Step-Up SIP",
      href: "/services/set-up-sip",
    },
  ];

  return (
    <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[830px] max-w-[calc(100vw-40px)] bg-white rounded-md shadow-[0_16px_48px_rgba(0,57,78,0.14)] border border-gray-100 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50 overflow-hidden">
      <div className="p-8 py-6 space-y-1 max-h-[500px] overflow-y-auto">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[13px] font-bold text-gray-800">
              Mutual Funds
            </span>
          </div>
          <div className="grid grid-cols-3 gap-x-4 gap-y-0.5">
            {mutualFundItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 px-2 py-2 rounded-sm text-[13px] text-gray-500 hover:text-[#00394E] hover:bg-[#EBF4F7] transition-colors duration-100 leading-snug"
              >
                <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-4 gap-y-1 border-t border-gray-100 pt-1">
          {investmentItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 py-[7px] px-2 rounded-md hover:bg-[#f5f9fa] transition-colors duration-150"
            >
              <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
              <span className="text-[13.5px] text-gray-600 hover:text-[#00394E] transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled ? "text-[#00394E]" : "text-white";
  const navLinkClass = `text-[15px] font-medium transition-colors duration-200 hover:text-[#DAA434] ${textColor}`;

  const dropdownBase =
    "absolute top-[calc(100%+12px)] bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-250 ease-out z-50 p-5";

  const MenuItem = ({ href, children }) => (
    <li>
      <Link
        href={href}
        className="flex items-center gap-2 py-[7px] px-2 rounded-md group/li hover:bg-[#f5f9fa] transition-colors duration-150"
      >
        <span className="w-1 h-1 rounded-full bg-gray-300   transition-colors shrink-0" />
        <span className="text-[13.5px] text-gray-600 group-hover/li:text-[#00394E] transition-colors">
          {children}
        </span>
      </Link>
    </li>
  );

  const serviceItems = [
    { name: "Trust Formation", slug: "trust-formation" },
    { name: "Will Writing", slug: "will-writing" },
    { name: "Executor Services", slug: "executor-services" },
    { name: "Legal Advisory", slug: "legal-advisory" },
    { name: "Tax Advisory", slug: "tax-advisory" },
    { name: "Financial Literacy Workshop", slug: "financial-literacy" },
    // { name: "Next Gen Financial Coaching", slug: "next-gen-coaching" },
    { name: "Credit cards", slug: "credit-cards" },
    {
      name: "Health Assistance",
      slug: "health-assistance",
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-700 ${
        isScrolled ? "pt-2" : "pt-6"
      }`}
    >
      <nav
        className={`relative flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled
            ? "w-[92%] max-w-[1600px] bg-[#FDF9FB] border border-gray-200/50 shadow-2xl backdrop-blur-md px-6 py-2.5 rounded-full"
            : "w-full max-w-[1500px] bg-transparent border-transparent px-10 py-4 shadow-none rounded-none"
        }`}
      >
        {/* Logo */}
        <div
          className={`shrink-0 mr-4 flex items-center ${
            !isScrolled ? "bg-white px-2 py-1 rounded-full shadow-lg" : ""
          }`}
        >
          <Link href="/" className="block">
            <Image
              src="/logo.webp"
              alt="Finask Logo"
              width={160}
              height={45}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden xl:flex items-center gap-6 grow justify-center">
          <Link href="/about" className={navLinkClass}>
            About Us
          </Link>

          {/* Investment */}
          <div className="group relative flex items-center h-full">
            <span
              className={`${navLinkClass} flex items-center gap-1.5 py-5 cursor-pointer`}
            >
              Investment <Chevron />
            </span>
            <InvestmentMegaMenu />
          </div>

          {/* Services */}
          <div className="group relative flex items-center h-full">
            <span
              className={`${navLinkClass} flex items-center gap-1.5 py-5 cursor-pointer`}
            >
              Services <Chevron />
            </span>
            <div
              className={`${dropdownBase} w-[260px] left-1/2 -translate-x-1/2`}
            >
              <ul className="space-y-0.5">
                {serviceItems.map((item) => (
                  <MenuItem key={item.slug} href={`/services/${item.slug}`}>
                    {item.name}
                  </MenuItem>
                ))}
              </ul>
            </div>
          </div>

          {/* Insurance */}
          <div className="group relative flex items-center h-full">
            <span
              className={`${navLinkClass} flex items-center gap-1.5 py-5 cursor-pointer`}
            >
              Insurance <Chevron />
            </span>
            <InsuranceMegaMenu />
          </div>

          <Link href="/services/family-office" className={navLinkClass}>
            Family Office
          </Link>
          <Link href="/services/nri-corner" className={navLinkClass}>
           NRI Corner 
          </Link>
          <Link href="/services/women-corner" className={navLinkClass}>
            Women Corner
          </Link>
        </div>

        {/* CTA */}
        <div className="shrink-0 ml-4">
          <Link
            href="/contact"
            className="bg-[#D44659] hover:bg-[#b03a4b] text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-[#D44659]/20 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            Get an Appointment
          </Link>
        </div>
      </nav>
    </div>
  );
}
