"use client";

import React from "react";
import { Shield, TrendingUp, MessageSquare, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const insurance = [
  {
    id: 1,
    title: "Health Insurance",
    description:
      "Comprehensive health coverage to safeguard you and your family from medical expenses.",
    icon: Shield,
    link: "/insurance/health-insurance",
  },
  {
    id: 2,
    title: "Super Health Top-Up",
    description:
      "Enhance your base health plan with additional coverage at a lower premium.",
    icon: Shield,
    link: "/insurance/super-health-top-up",
  },
  {
    id: 3,
    title: "Personal Accident",
    description:
      "Financial protection against accidental injuries, disability, or death.",
    icon: Shield,
    link: "/insurance/personal-accident-insurance",
  },
  {
    id: 4,
    title: "Critical Illness",
    description:
      "Lump sum payout coverage for major life-threatening illnesses.",
    icon: Shield,
    link: "/insurance/critical-illness-insurance",
  },
  {
    id: 5,
    title: "Life Insurance",
    description:
      "Secure your family’s financial future with comprehensive life protection plans.",
    icon: Shield,
    link: "/insurance/life-insurance",
  },
  {
    id: 6,
    title: "Term Insurance",
    description:
      "High coverage life insurance at affordable premiums for pure protection.",
    icon: Shield,
    link: "/insurance/term-insurance",
  },
  {
    id: 7,
    title: "ULIP",
    description:
      "Market-linked insurance plans combining investment and life cover benefits.",
    icon: Shield,
    link: "/insurance/ulip",
  },
  {
    id: 8,
    title: "Traditional Guaranteed Plans",
    description:
      "Safe investment-cum-insurance plans offering guaranteed returns and stability.",
    icon: Shield,
    link: "/insurance/traditional-savings",
  },
  {
    id: 9,
    title: "Motor Insurance",
    description:
      "Protect your vehicle against accidents, theft, and third-party liabilities.",
    icon: Shield,
    link: "/insurance/motor-insurance",
  },
  {
    id: 10,
    title: "Travel Insurance",
    description:
      "Stay protected during trips with coverage for medical emergencies, delays, and losses.",
    icon: Shield,
    link: "/insurance/travel-insurance",
  },
  {
    id: 11,
    title: "Fire & Burglary Insurance",
    description:
      "Coverage against fire damage and theft for your home or business assets.",
    icon: Shield,
    link: "/insurance/fire-burglary-insurance",
  },
  {
    id: 12,
    title: "Property Insurance",
    description:
      "Secure your property against natural disasters and unforeseen damages.",
    icon: Shield,
    link: "/insurance/property-insurance",
  },
  {
    id: 13,
    title: "Marine & Cargo Insurance",
    description:
      "Protect goods in transit against loss or damage during transportation.",
    icon: Shield,
    link: "/insurance/marine-cargo-insurance",
  },
  {
    id: 14,
    title: "Corporate Insurance",
    description:
      "Comprehensive business risk coverage tailored for corporate needs.",
    icon: Shield,
    link: "/insurance/corporate-insurance",
  },
  {
    id: 15,
    title: "Director Liability",
    description:
      "Protect directors and officers from legal liabilities arising from business decisions.",
    icon: Shield,
    link: "/insurance/directors-life-insurance",
  },
  {
    id: 16,
    title: "Cyber Insurance",
    description:
      "Coverage against cyber threats, data breaches, and digital risks.",
    icon: Shield,
    link: "/insurance/cyber-insurance",
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
            backgroundImage: 'url("/image.png")',
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00394E]/90 via-[#00394E]/30 to-[#00394E]/40" />

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto ">
          <h1 className="font-serif text-5xl   font-bold text-white my-6 drop-shadow-lg">
            Insurance
          </h1>
          <p className="text-gray-200 text-lg  font-light leading-[1.2] max-w-md mx-auto">
            Expert financial solutions tailored to your unique needs and goals.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto  ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  divide-gray-200">
            {insurance.map((service) => (
              <div
                key={service.id}
                className="px-10 py-10 flex flex-col items-start text-left  group border border-[#00394E]/40 rounded-tl-2xl rounded-br-2xl "
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
                  className="mt-auto inline-flex items-center text-sm font-bold text-[#00394E] hover:text-[#DAA434] transition-colors uppercase tracking-wider"
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
