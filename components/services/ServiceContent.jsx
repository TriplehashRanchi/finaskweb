"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Zap,
  CheckCircle,
  BarChart,
  Users,
  Briefcase,
  TrendingUp,
  Globe,
  Settings,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export default function ServiceContent({ service, hideFaq = false }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  if (!service) return null;

  // Helper to get icon for feature
  const getIcon = (index) => {
    const icons = [
      Shield,
      Zap,
      BarChart,
      Users,
      CheckCircle,
      TrendingUp,
      Globe,
      Settings,
    ];
    const Icon = icons[index % icons.length];
    return <Icon className="w-8 h-8 text-[#DAA434]" />; // Warm Mustard
  };

  return (
    <div className="w-full">
      {/* ----------------------------- */}
      {/* ----------------------------- */}
      {/*        TOP SECTION            */}
      {/* ----------------------------- */}
      <div className="mb-8">
        <h2 className="font-serif text-3xl md:text-5xl text-[#00394E] mb-8 font-medium">
          {" "}
          {/* Deep Teal */}
          {service.title}
        </h2>
        <div className="space-y-2 text-slate-600 leading-[1.4] text-md text-justify ">
          {service.description.split("\n").map((line, i) => (
            <p key={i} className="mb-2">
              {line}
            </p>
          ))}
          <p>{service.introText}</p>
        </div>
      </div>

      {/* ----------------------------- */}
      {/*        FEATURES GRID          */}
      {/* ----------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-8">
        {service.features &&
          service.features.map((feature, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full  flex items-center justify-center shrink-0 bg-[#00394E]   ">
                {" "}
                {/* Soft White BG */}
                {getIcon(idx)}
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#00394E] mb-2">
                  {" "}
                  {/* Deep Teal */}
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
      </div>

      <p className="text-slate-600 leading-[1.3] mb-10 text-md">
        {service.closingText}
      </p>

      {/* ----------------------------- */}
      {/*        FAQ SECTION            */}
      {/* ----------------------------- */}
      {service.faq && !hideFaq && (
        <div className="  ">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column: Image + Highlight Box */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-[600px] w-full bg-slate-100 overflow-hidden">
                {" "}
                {/* Reduced height slightly for proportion */}
                <Image
                  src={service.faqSection?.image || "/faq.jpg"}
                  alt="Consultation"
                  fill
                  className="object-cover  "
                />
              </div>
              {/* Overlay Consultation Box */}
              <div className="absolute top-10 right-0 bg-[#00394E] p-6 w-[260px] shadow-2xl z-10">
                {" "}
                {/* Deep Teal Box */}
                <h3 className="text-white text-xl font-serif font-bold mb-6 leading-tight">
                  {service.faqSection?.consultationTitle ||
                    "If You Need Help, Get A Consultation"}
                </h3>
                <Link
                  href="/contact"
                  className="text-[#DAA434] font-bold text-sm   flex items-center gap-2 hover:gap-3 transition-all group"
                >
                  {" "}
                  {/* Warm Mustard Link */}
                  {service.faqSection?.consultationButton || "Get Started"}
                  <div className="bg-[#DAA434] rounded-full p-0.5 group-hover:bg-[#ffbf40] transition-colors">
                    <ArrowRight
                      className="w-4 h-4 text-[#00394E]"
                      strokeWidth={3}
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Column: FAQ Accordion */}
            <div className="w-full lg:w-1/2 pt-4">
              <span className="text-[#DAA434] font-bold tracking-widest text-sm uppercase mb-3 block">
                FAQ
              </span>{" "}
              {/* Warm Mustard Label */}
              <h2 className="font-serif text-3xl font-bold text-[#00394E] mb-4">
                {" "}
                {/* Deep Teal Heading */}
                {service.faqSection?.title || "General Question"}
              </h2>
              <p className="text-slate-600 mb-8 leading-[1.2]">
                {service.faqSection?.description ||
                  "Answers to common questions about our services."}
              </p>
              <div className="space-y-4">
                {service.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F0F4F8] transition-all duration-300" // Light Grayish BG
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none group hover:bg-[#E2E8F0] transition-colors"
                    >
                      <span
                        className="font-bold text-[#00394E] text-md pr-4" // Deep Teal Question
                      >
                        {item.question}
                      </span>

                      <ChevronDown
                        className={`w-5 h-5 text-[#00394E] transition-transform duration-300 shrink-0 ${
                          // Deep Teal Icon
                          openFaqIndex === idx ? "rotate-180" : "rotate-0"
                        }`}
                        strokeWidth={2.5}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaqIndex === idx
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-200/50 mt-2">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
