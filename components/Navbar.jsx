"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { investmentSections } from "@/data/investmentMenu";
import {
  personalInsuranceSections,
  businessInsuranceSections,
} from "@/data/insuranceMenu";

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

function InsuranceMegaMenu() {
  const [activeTab, setActiveTab] = useState("personal");
  const sections =
    activeTab === "personal"
      ? personalInsuranceSections
      : businessInsuranceSections;
  const [activeSection, setActiveSection] = useState(
    personalInsuranceSections[0]?.title,
  );
  const currentSection =
    sections.find((section) => section.title === activeSection) || sections[0];

  const handleTabChange = (tabId, firstSection) => {
    setActiveTab(tabId);
    setActiveSection(firstSection);
  };

  return (
    <div className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[740px] max-w-[calc(100vw-40px)] bg-white rounded-md shadow-[0_24px_60px_rgba(0,57,78,0.16)] border border-gray-100/80 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50 overflow-hidden">
      {/* ── Header / Tab Bar ── */}
      <div className="flex items-center gap-10 px-5 pt-2 pb-0">
        {[
          {
            id: "personal",
            label: "Personal Insurance",
            firstSection: personalInsuranceSections[0]?.title,
          },
          {
            id: "business",
            label: "Business Insurance",
            firstSection: businessInsuranceSections[0]?.title,
          },
        ].map((tab) => (
          <button
            key={tab.id}
            onMouseEnter={() => handleTabChange(tab.id, tab.firstSection)}
            onClick={() => handleTabChange(tab.id, tab.firstSection)}
            className={`flex items-center gap-2 px-6 py-2 text-[13.5px] font-semibold transition-all duration-150 cursor-pointer border-b-2 ${
              activeTab === tab.id
                ? "border-[#00394E] text-[#00394E]"
                : "border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="h-px bg-gray-100 mx-5" />

      {/* ── Body ── */}
      <div className="flex" style={{ minHeight: "280px" }}>
        {/* Left sidebar */}
        <div className="w-[230px] shrink-0  border-r border-gray-100 py-4 px-3 flex flex-col gap-1">
          {sections.map((section) => {
            const isActive = currentSection.title === section.title;
            return (
              <button
                key={section.title}
                onMouseEnter={() => setActiveSection(section.title)}
                onClick={() => setActiveSection(section.title)}
                className={`w-full flex items-center rounded-sm px-2 py-2 text-left transition-all duration-150 cursor-pointer group/sec ${
                  isActive
                    ? "bg-[#EBF4F7] text-[#00394E]"
                    : "text-gray-500 hover:text-[#00394E] hover:bg-[#EBF4F7]"
                }`}
              >
                <span className="text-[13px] font-semibold leading-snug">
                  {section.title}
                </span>
                {isActive && (
                  <span className="ml-auto shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3 h-3 text-[#00394E]"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right content panel */}
        <div className="min-w-0 flex-1 py-5 px-5 ">
          {/* Section heading */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[14px] font-bold text-[#00394E]">
              {currentSection.title}
            </span>
          </div>

          {/* Items grid */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 max-h-[280px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
            {currentSection.items.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="flex items-center gap-2 px-2.5 py-2 rounded-sm text-[12.5px] text-gray-500 hover:text-[#00394E]/70 hover:bg-[#EBF4F7] transition-all duration-100 leading-snug group/item"
              >
                <span className="w-1 h-1 rounded-full bg-[#00394E]/10   shrink-0 transition-colors" />
                <span className="truncate">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InvestmentMegaMenu() {
  const [activeSection, setActiveSection] = useState(
    investmentSections[0]?.title,
  );
  const currentSection =
    investmentSections.find((section) => section.title === activeSection) ||
    investmentSections[0];

  return (
    <div className="absolute top-[calc(100%+14px)] left-50 -translate-x-1/2 w-[740px] max-w-[calc(100vw-40px)] bg-white rounded-md shadow-[0_24px_60px_rgba(0,57,78,0.16)] border border-gray-100/80 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50 overflow-hidden">
      <div className="flex" style={{ minHeight: "280px" }}>
        <div className="w-[230px] shrink-0 border-r border-gray-100 py-4 px-3 flex flex-col gap-1">
          {investmentSections.map((section) => {
            const isActive = currentSection.title === section.title;

            return (
              <button
                key={section.title}
                onMouseEnter={() => setActiveSection(section.title)}
                onClick={() => setActiveSection(section.title)}
                className={`w-full flex items-center rounded-sm px-2 py-2 text-left transition-all duration-150 cursor-pointer group/sec ${
                  isActive
                    ? "bg-[#EBF4F7] text-[#00394E]"
                    : "text-gray-500 hover:text-[#00394E] hover:bg-[#EBF4F7]"
                }`}
              >
                <span className="text-[13px] font-semibold leading-snug">
                  {section.title}
                </span>
                {isActive && (
                  <span className="ml-auto shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3 h-3 text-[#00394E]"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="min-w-0 flex-1 py-5 px-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[14px] font-bold text-[#00394E]">
              {currentSection.title}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 max-h-[280px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
            {currentSection.items.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="flex items-center gap-2 px-2.5 py-2 rounded-sm text-[12.5px] text-gray-500 hover:text-[#00394E]/70 hover:bg-[#EBF4F7] transition-all duration-100 leading-snug group/item"
              >
                <span className="w-1 h-1 rounded-full bg-[#00394E]/10 shrink-0 transition-colors" />
                <span className="truncate">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <span className="w-1 h-1 rounded-full bg-gray-300 transition-colors shrink-0" />
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

        <div className="hidden xl:flex items-center gap-6 grow justify-center">
          <Link href="/about" className={navLinkClass}>
            About Us
          </Link>

          <div className="group relative flex items-center h-full">
            <span
              className={`${navLinkClass} flex items-center gap-1.5 py-5 cursor-pointer`}
            >
              Investment <Chevron />
            </span>
            <InvestmentMegaMenu />
          </div>

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
            NRI's Corner
          </Link>
          <Link href="/services/women-corner" className={navLinkClass}>
            Women's Corner
          </Link>
        </div>

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
