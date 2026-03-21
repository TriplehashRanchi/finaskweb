"use client";

import React from "react";
import { Shield, TrendingUp, MessageSquare, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const investment = [
  {
    id: 1,
    title: "Mutual Funds",
    description:
      "Strategic mutual fund investments to build long-term wealth with diversified portfolio exposure.",
    icon: TrendingUp,
    link: "/services/mutual-funds",
  },
  {
    id: 2,
    title: "Bonds",
    description:
      "Stable income instruments offering predictable returns with lower risk compared to equities.",
    icon: TrendingUp,
    link: "/services/bonds",
  },
  {
    id: 3,
    title: "Portfolio Management Services",
    description:
      "Expert-managed portfolios tailored to your financial goals with active monitoring and optimization.",
    icon: TrendingUp,
    link: "/services/pms",
  },
  {
    id: 4,
    title: "Alternative Investment Funds",
    description:
      "Access high-growth opportunities beyond traditional markets through curated AIF strategies.",
    icon: TrendingUp,
    link: "/services/aifs",
  },
  {
    id: 5,
    title: "Unlisted Equity",
    description:
      "Invest in pre-IPO companies and unlock early-stage wealth creation opportunities.",
    icon: TrendingUp,
    link: "/services/unlisted-equity",
  },
  {
    id: 6,
    title: "REITs",
    description:
      "Earn passive income through real estate investments without owning physical property.",
    icon: TrendingUp,
    link: "/services/reits",
  },
  {      
    id: 7,
    title: "InvITs",
    description:
      "Infrastructure-backed investment trusts offering stable returns and long-term growth.",
    icon: TrendingUp,
    link: "/services/invits",
  },
  {
    id: 8,
    title: "Fractional Commercial Real Estate",
    description:
      "Own premium commercial properties with lower capital through fractional ownership.",
    icon: TrendingUp,
    link: "/services/fractional-commercial-real-estate",
  },
  {
    id: 9,
    title: "P2P Lending",
    description:
      "Earn attractive returns by lending directly to borrowers through regulated platforms.",
    icon: TrendingUp,
    link: "/services/p2p-lending",
  },
  {
    id: 10,
    title: "Alternative Fixed Income",
    description:
      "Diversified fixed income options beyond traditional FDs for better yield potential.",
    icon: TrendingUp,
    link: "/services/alternative-fixed-income",
  },
  {
    id: 11,
    title: "Corporate FDRs",
    description:
      "Higher return fixed deposits offered by corporates with structured risk profiles.",
    icon: TrendingUp,
    link: "/services/corporate-fdrs",
  },
  {
    id: 12,
    title: "GIFT City",
    description:
      "Global investment opportunities through India’s international financial services hub.",
    icon: TrendingUp,
    link: "/services/gift-city",
  },
  {
    id: 13,
    title: "E-Gold",
    description:
      "Digitally invest in gold with high liquidity and zero storage hassles.",
    icon: TrendingUp,
    link: "/services/e-gold",
  },
  {
    id: 14,
    title: "National Pension System",
    description:
      "Tax-efficient retirement planning solution with market-linked growth.",
    icon: TrendingUp,
    link: "/services/nps",
  },
  {
    id: 15,
    title: "Stock & Broking",
    description:
      "Direct equity investments with expert broking support and market insights.",
    icon: TrendingUp,
    link: "/services/stock-broking",
  },
];


export default function ServicesSection() {
  return (
    <>
      <section className="relative h-[70vh] flex flex-col items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/image.webp")',
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            
          }}
        />
       <div className="absolute inset-0 bg-gradient-to-t from-[#00394E]/90 via-[#00394E]/30 to-[#00394E]/40" />

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto ">
          <h1 className="font-serif text-5xl   font-bold text-white my-6 drop-shadow-lg">
            Investment
          </h1>
          <p className="text-gray-200 text-lg  font-light leading-[1.2] max-w-md mx-auto">
            Expert financial solutions tailored to your unique needs and goals.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto  ">
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-8  divide-gray-200">
            {investment.map((service) => (
              <div
                key={service.id}
                className="px-10 py-10 flex flex-col items-start text-left group border border-[#00394E]/40 rounded-tl-2xl rounded-br-2xl "
              >
                <div className="mb-6 p-3 rounded-full border-2  border-[#DAA434] transition-colors duration-300">
                  <service.icon
                    strokeWidth={1.5}
                    size={32}
                    className=" text-[#DAA434] transition-colors duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#00394E] mb-6 font-serif leading-tight group-hover:text-[#DAA434] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-800 text-base leading-relaxed mb-20 ">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  className="mt-auto inline-flex items-center text-sm font-bold    text-[#00394E] hover:text-[#DAA434] transition-colors uppercase tracking-wider"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
