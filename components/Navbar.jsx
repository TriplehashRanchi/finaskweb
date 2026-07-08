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
    <div className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[850px] max-w-[calc(100vw-40px)] bg-white rounded-md shadow-[0_24px_60px_rgba(0,57,78,0.16)] border border-gray-100/80 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50 overflow-hidden">
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
            className={`flex items-center gap-2 px-6 py-2 text-[16px] font-semibold transition-all duration-150 cursor-pointer border-b-2 ${
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
        <div className="w-[260px] shrink-0  border-r border-gray-100 py-4 px-3 flex flex-col gap-1">
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
                <span className="text-[15px] font-semibold leading-snug">
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
            <span className="text-[16px] font-bold text-[#00394E]">
              {currentSection.title}
            </span>
          </div>

          {/* Items grid */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 max-h-[280px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
            {currentSection.items.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="flex items-center gap-2 px-2.5 py-2 rounded-sm text-[14px] text-gray-500 hover:text-[#00394E]/70 hover:bg-[#EBF4F7] transition-all duration-100 leading-snug group/item"
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
    <div className="absolute top-[calc(100%+14px)] left-50 -translate-x-1/2 w-[900px] max-w-[calc(100vw-40px)] bg-white rounded-md shadow-[0_24px_60px_rgba(0,57,78,0.16)] border border-gray-100/80 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50 overflow-hidden">
      <div className="flex" style={{ minHeight: "280px" }}>
        <div className="w-[310px] shrink-0 border-r border-gray-100 py-6 px-4 flex flex-col gap-2">
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
                <span className="text-[14px] font-semibold leading-snug">
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
            <span className="text-[16px] font-bold text-[#00394E]">
              {currentSection.title}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 max-h-[280px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
            {currentSection.items.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="flex items-center gap-2 px-2.5 py-2 rounded-sm text-[14px] text-gray-500 hover:text-[#00394E]/70 hover:bg-[#EBF4F7] transition-all duration-100 leading-snug group/item"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInvestmentOpen, setIsInvestmentOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isInsuranceOpen, setIsInsuranceOpen] = useState(false);
  const [mobileInsuranceTab, setMobileInsuranceTab] = useState("personal");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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
        <span className="text-[14px] text-gray-600 group-hover/li:text-[#00394E] transition-colors">
          {children}
        </span>
      </Link>
    </li>
  );

  const serviceItems = [
    { name: "Credit Cards", slug: "credit-cards" },
    { name: "Executor Services", slug: "executor-services" },
    { name: "Financial Literacy Workshops", slug: "financial-literacy" },
    {name: "Health Assistance", slug: "health-assistance"},
    { name: "Legal Advisory", slug: "legal-advisory" },
     { name: "Roadside Assistance", slug: "roadside-assistance" },
    { name: "Tax Advisory", slug: "tax-advisory" },
    { name: "Trust Formation", slug: "trust-formation" },
    { name: "Will Writing", slug: "will-writing" },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-700 ${
          isScrolled ? "pt-2" : "pt-6"
        }`}
      >
        <nav
          className={`relative flex items-center justify-between transition-all duration-500 ease-in-out ${
            isScrolled
              ? "w-[95%] xl:w-[92%] max-w-[1600px] bg-[#FDF9FB] border border-gray-200/50 shadow-2xl backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-full"
              : "w-full max-w-[1500px] bg-transparent border-transparent px-4 sm:px-10 py-4 shadow-none rounded-none"
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
                Investments <Chevron />
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

          <div className="hidden md:block shrink-0 ml-4">
            <Link
              href="/contact"
              className="bg-[#D44659] hover:bg-[#b03a4b] text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-[#D44659]/20 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get an Appointment
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`xl:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full transition-all duration-300 focus:outline-none shadow-md ml-4 shrink-0 cursor-pointer ${
              isScrolled
                ? "bg-[#00394E] text-white hover:bg-[#002635]"
                : "bg-white text-[#00394E] hover:bg-gray-100"
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center relative">
              <span
                className={`h-0.5 w-full bg-current rounded transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition-transform duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[360px] sm:max-w-[400px] bg-white z-[201] shadow-2xl flex flex-col transition-transform duration-300 ease-out xl:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block">
            <Image
              src="/logo.webp"
              alt="Finask Logo"
              width={130}
              height={36}
              className="object-contain"
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer Body - Scrollable Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 scrollbar-none">
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-[16px] font-semibold text-[#00394E] hover:text-[#DAA434] py-1 transition-colors"
          >
            About Us
          </Link>

          {/* Investment Accordion */}
          <div className="border-b border-gray-100/80 pb-3">
            <button
              onClick={() => setIsInvestmentOpen(!isInvestmentOpen)}
              className="w-full flex items-center justify-between text-[16px] font-semibold text-[#00394E] hover:text-[#DAA434] py-1 text-left transition-colors focus:outline-none cursor-pointer"
            >
              <span>Investment</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 opacity-60 ${
                  isInvestmentOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isInvestmentOpen && (
              <div className="pl-3 mt-2 border-l-2 border-[#EBF4F7] space-y-4 max-h-[300px] overflow-y-auto pr-1">
                {investmentSections.map((section) => (
                  <div key={section.title} className="space-y-1">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      {section.title}
                    </div>
                    <div className="space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/services/${item.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1 text-[13px] text-gray-600 hover:text-[#00394E] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Services Accordion */}
          <div className="border-b border-gray-100/80 pb-3">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between text-[16px] font-semibold text-[#00394E] hover:text-[#DAA434] py-1 text-left transition-colors focus:outline-none cursor-pointer"
            >
              <span>Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 opacity-60 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="pl-3 mt-2 border-l-2 border-[#EBF4F7] space-y-1.5 max-h-[250px] overflow-y-auto pr-1">
                {serviceItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1 text-[13px] text-gray-600 hover:text-[#00394E] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Insurance Accordion */}
          <div className="border-b border-gray-100/80 pb-3">
            <button
              onClick={() => setIsInsuranceOpen(!isInsuranceOpen)}
              className="w-full flex items-center justify-between text-[16px] font-semibold text-[#00394E] hover:text-[#DAA434] py-1 text-left transition-colors focus:outline-none cursor-pointer"
            >
              <span>Insurance</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 opacity-60 ${
                  isInsuranceOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isInsuranceOpen && (
              <div className="mt-2 space-y-3">
                {/* Tabs */}
                <div className="flex bg-gray-50 p-0.5 rounded-md border border-gray-100">
                  <button
                    onClick={() => setMobileInsuranceTab("personal")}
                    className={`flex-1 py-1 text-[12px] font-bold rounded-sm transition-all focus:outline-none cursor-pointer ${
                      mobileInsuranceTab === "personal"
                        ? "bg-white text-[#00394E] shadow-sm"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    Personal
                  </button>
                  <button
                    onClick={() => setMobileInsuranceTab("business")}
                    className={`flex-1 py-1 text-[12px] font-bold rounded-sm transition-all focus:outline-none cursor-pointer ${
                      mobileInsuranceTab === "business"
                        ? "bg-white text-[#00394E] shadow-sm"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    Business
                  </button>
                </div>
                {/* Tab sections */}
                <div className="pl-3 border-l-2 border-[#EBF4F7] space-y-4 max-h-[250px] overflow-y-auto pr-1">
                  {(mobileInsuranceTab === "personal"
                    ? personalInsuranceSections
                    : businessInsuranceSections
                  ).map((section) => (
                    <div key={section.title} className="space-y-1">
                      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {section.title}
                      </div>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/services/${item.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-1 text-[13px] text-gray-600 hover:text-[#00394E] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/services/family-office"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-[16px] font-semibold text-[#00394E] hover:text-[#DAA434] py-1 transition-colors"
          >
            Family Office
          </Link>
          <Link
            href="/services/nri-corner"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-[16px] font-semibold text-[#00394E] hover:text-[#DAA434] py-1 transition-colors"
          >
            NRI's Corner
          </Link>
          <Link
            href="/services/women-corner"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-[16px] font-semibold text-[#00394E] hover:text-[#DAA434] py-1 transition-colors"
          >
            Women's Corner
          </Link>
        </div>

        {/* Drawer Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full bg-[#D44659] hover:bg-[#b03a4b] text-white py-3 rounded-full text-center text-sm font-bold shadow-lg shadow-[#D44659]/20 transition-all transform active:scale-95 cursor-pointer"
          >
            Get an Appointment
          </Link>
        </div>
      </div>
    </>
  );
}
