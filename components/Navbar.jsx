'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { usePathname } from "next/navigation";

export default function Navbar() {
 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Brand Theme:
  // Text: Navy (#00394E) or White (when transparent)
  // Hover/Accent: Gold (#DAA434)
  // Button: Coral (#D44659)

  const textColorClass = isScrolled ? "text-[#00394E]" : "text-white";
  const hoverColorClass = "text-[#DAA434]";
  
  const navLinkClass = `text-[15px] font-medium transition-colors duration-300 hover:${hoverColorClass} ${textColorClass}`;
  
  // Mega Menu Container Style (Wide, White, Shadow)
  const megaMenuClass = "absolute  top-17 left-0 w-[600px] bg-white shadow-2xl rounded-md   opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 p-6 border border-gray-100";
  
  // List Item Style with Chevron
  const ListItem = ({ href, children }) => (
    <li>
      <Link href={href} className="group/item flex items-center space-x-2 text-[13px] font-medium text-[#00394E] hover:text-[#DAA434] transition-colors py-1.5">
         <ChevronRight className="w-3.5 h-3.5 text-[#00394E]/40 group-hover/item:text-[#DAA434] transition-colors" />
         <span>{children}</span>
      </Link>
    </li>
  );

  // Data lists
  const insuranceItems = [
    { name: "Health Insurance", slug: "health-insurance" },
    { name: "Super Health Top-Up", slug: "super-health-top-up" },
    { name: "Personal Accident Insurance", slug: "personal-accident-insurance" },
    { name: "Critical Illness Insurance", slug: "critical-illness-insurance" },
    { name: "Life Insurance", slug: "life-insurance" },
    { name: "Term Insurance", slug: "term-insurance" },
    { name: "ULIP", slug: "ulip" },
    { name: "Traditional Guaranteed Savings products", slug: "traditional-savings" },
    { name: "Motor Insurance", slug: "motor-insurance" },
    { name: "Travel Insurance", slug: "travel-insurance" },
    { name: "Fire & Burglary Insurance", slug: "fire-burglary-insurance" },
    { name: "Property Insurance", slug: "property-insurance" },
    { name: "Marine & Cargo Insurance", slug: "marine-cargo-insurance" },
    { name: "Corporate Insurance", slug: "corporate-insurance" },
    { name: "Director Liability ", slug: "directors-life-insurance" },
    { name: "Cyber Insurance", slug: "cyber-insurance" }
  ];

  const investmentItems = [
    { name: "Mutual Funds", slug: "mutual-funds" },
    { name: "Bonds ", slug: "bonds" },
    { name: "Portfolio Management Services", slug: "pms" },
    { name: "Alternative Investment Funds", slug: "aifs" },
    { name: "Unlisted Equity", slug: "unlisted-equity" },
    { name: "REITs", slug: "reits" },
    { name: "InvITs", slug: "invits" },
    { name: "Fractional Commercial Real Estate", slug: "fractional-commercial-real-estate" },
    { name: "P2P Lending", slug: "p2p-lending" },
    { name: "Alternative Fixed Income", slug: "alternative-fixed-income" },
    { name: "Corporate FDRs", slug: "corporate-fdrs" },
    { name: "GIFT City", slug: "gift-city" },
    { name: "E-Gold", slug: "e-gold" },
    { name: "National Pension System", slug: "nps" },
    { name: "Stock & Broking", slug: "stock-broking" }
  ];

  
  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-700 ${isScrolled ? "pt-2" : "pt-6"}`}>
      <nav 
        className={`
          relative flex items-center justify-between transition-all duration-500 ease-in-out 
          ${isScrolled 
            ? "w-[92%] max-w-[1600px] bg-[#FDF9FB] border-gray-200/50 border shadow-2xl backdrop-blur-md px-6 py-2.5 rounded-full" 
            : "w-full max-w-[1500px] bg-transparent border-transparent px-10 py-4 shadow-none rounded-none backdrop-blur-none"}
        `}
      >
        
        {/* Logo */}
        <div className={`shrink-0 mr-4 flex items-center ${!isScrolled ? "bg-white px-2 py-1.5 rounded-full shadow-lg" : ""}`}>
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

        {/* Navigation */}
        <div className="hidden xl:flex items-center gap-6 2xl:gap-6 grow justify-center">

            {/* About Us */}
            <Link href="/about" className={navLinkClass}>About Us</Link>

            {/* Insurance Mega Menu */}
            <div className="group relative h-full flex items-center cursor-pointer">
                <span className={`${navLinkClass} flex items-center gap-1 py-4`}>
                   Insurance
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-rotate-180 opacity-70"><path d="m6 9 6 6 6-6"/></svg>
                </span>
                 <div className={megaMenuClass}>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <ul className="space-y-1">
                                {insuranceItems.slice(0, 8).map((item) => (
                                    <ListItem key={item.slug} href={`/services/${item.slug}`}>{item.name}</ListItem>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-1">
                                {insuranceItems.slice(8).map((item) => (
                                    <ListItem key={item.slug} href={`/services/${item.slug}`}>{item.name}</ListItem>
                                ))}
                            </ul>
                        </div>
                    </div>
                 </div>
            </div>

            {/* Investment Mega Menu */}
             <div className="group relative h-full flex items-center cursor-pointer">
                <span className={`${navLinkClass} flex items-center gap-1 py-4`}>
                   Investment
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-rotate-180 opacity-70"><path d="m6 9 6 6 6-6"/></svg>
                </span>
                 <div className={megaMenuClass}>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <ul className="space-y-1">
                                {investmentItems.slice(0, 8).map((item) => (
                                    <ListItem key={item.slug} href={`/services/${item.slug}`}>{item.name}</ListItem>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-1">
                                {investmentItems.slice(8).map((item) => (
                                    <ListItem key={item.slug} href={`/services/${item.slug}`}>{item.name}</ListItem>
                                ))}
                            </ul>
                        </div>
                    </div>
                 </div>
            </div>

            {/* Services Mega Menu */}
            <div className="group relative h-full flex items-center cursor-pointer">
                <span className={`${navLinkClass} flex items-center gap-1 py-4`}>
                   Services
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-rotate-180 opacity-70"><path d="m6 9 6 6 6-6"/></svg>
                </span>
                 <div className="absolute top-17 left-1/2 -translate-x-1/2 w-[300px] bg-white shadow-2xl rounded-md   opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 p-4 border border-gray-100 cursor-default">
                    <ul className="space-y-1">
                         {[
                            { name: "Trust Formation", slug: "trust-formation" },
                            { name: "Will Writing", slug: "will-writing" },
                            { name: "Executor Services", slug: "executor-services" },
                            { name: "Legal Advisory", slug: "legal-advisory" },
                            { name: "Tax Advisory and Execution", slug: "tax-advisory" },
                            { name: "Investment Education Programme", slug: "investment-education" },
                            { name: "Financial Literacy Workshop", slug: "financial-literacy" },
                            { name: "Next Gen Financial Coaching", slug: "next-gen-coaching" }
                         ].map(item => <ListItem key={item.slug} href={`/services/${item.slug}`}>{item.name}</ListItem>)}
                    </ul>
                 </div>
            </div>

            <Link href="/services/family-office" className={navLinkClass}>Family Office</Link>
            <Link href="/services/nri-corner" className={navLinkClass}>NRI Services</Link>
            <Link href="/services/women-corner" className={navLinkClass}>Women Corner</Link>

        </div>

        {/* CTA */}
        <div className="shrink-0 ml-4">
           <Link href="/contact" className={`${!isScrolled ? "  px-5 py-4 rounded-full shadow-lg" : ""} bg-[#D44659] hover:bg-[#b03a4b] text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-[#D44659]/20 transition-all transform hover:-translate-y-0.5 whitespace-nowrap`}>
             Get an Appointment
           </Link>
        </div>

      </nav>
    </div>
  );
}
