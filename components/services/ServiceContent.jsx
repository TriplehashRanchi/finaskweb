"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Shield,
  Zap,
  CheckCircle,
  BarChart,
  Users,
  TrendingUp,
  Globe,
  Settings,
  ChevronDown,
  Star,
} from "lucide-react";

export default function ServiceContent({ service, hideFaq = false }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  if (!service) return null;

  const promoTitle =
    service.faqSection?.promoTitle || "Invest \u20B910k/month & Get";
  const promoText = service.faqSection?.promoText || "\u20B91 Crore*Tax-Free";
  const promoBadges = [
    service.faqSection?.promoBadges1 || "Plans starting from \u20B91000/month",
    service.faqSection?.promoBadges2 || "In-built life cover",
  ];

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
        </div>
      </div>

      {/* ----------------------------- */}
      {/*        FEATURES GRID          */}
      {/* ----------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-10">
        {service.features &&
          service.features.map((feature, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full  flex items-center justify-center shrink-0 bg-[#00394E]   ">
                {feature.icon ? (
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain transition duration-500 [filter:brightness(0)_saturate(100%)_invert(72%)_sepia(47%)_saturate(749%)_hue-rotate(359deg)_brightness(92%)_contrast(87%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(100%)]"
                  />
                ) : (
                  getIcon(idx)
                )}
              </div>
              <div className=" ">
                <h3 className="font-serif text-[1.4rem] font-bold text-[#00394E] ">
                  {" "}
                  {/* Deep Teal */}
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-[1.2] text-md">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* ----------------------------- */}
      {/*        FAQ SECTION            */}
      {/* ----------------------------- */}
      {service.faq && !hideFaq && (
        <div className="  ">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column: Image + Highlight Box */}
            <div className="w-full lg:w-[45%]">
              <div className="overflow-hidden rounded-[1rem] bg-gradient-to-b from-[#001F2B] to-[#00394E] px-5 py-8 text-white shadow-[0_24px_60px_rgba(21,83,199,0.25)] md:px-8 md:py-16 md:pb-12">
                <div className="mx-auto max-w-[460px]">
                  <div className="text-center">
                    <p className="text-[1.2rem] font-light leading-tight md:text-[1.2rem]">
                      {promoTitle}
                    </p>
                    <h3 className="mt-2 text-[2rem] font-semibold leading-none ">
                      {promoText}
                    </h3>
                  </div>

                  <div className="mt-6 flex flex-col gap-2.5 md:flex-row md:justify-center">
                    <div className="rounded-lg bg-[#C8F0B0] px-4 py-2 text-center text-sm font-semibold text-[#245633] ">
                      {promoBadges[0]}
                    </div>
                    <div className="rounded-lg bg-[#C9DCF8] px-4 py-2 text-center text-sm font-semibold text-[#1D4C8F] ">
                      {promoBadges[1]}
                    </div>
                  </div>

                  <div className="mt-20 rounded-[1rem] bg-white px-1 py-6 text-[#44546A] shadow-[0_18px_40px_rgba(15,23,42,0.12)] ">
                    <p className="text-center text-xl font-medium md:text-[1rem]">
                      We are rated~
                    </p>

                    <div className="mt-2 flex items-center justify-center gap-1">
                      {[0, 1, 2, 3].map((star) => (
                        <Star
                          key={star}
                          className="h-6 w-6 fill-[#FFC72C] text-[#FFC72C] md:h-6 md:w-6"
                        />
                      ))}
                      <div className="relative h-8 w-8 md:h-6 md:w-6">
                        <Star className="absolute inset-0 h-8 w-8 fill-[#D9DCE3] text-[#D9DCE3] md:h-6 md:w-6" />
                        <div className="absolute inset-y-0 left-0 overflow-hidden w-1/2">
                          <Star className="h-8 w-8 fill-[#FFC72C] text-[#FFC72C] md:h-6 md:w-6" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1  text-center sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
                      <div className="sm:px-4">
                        <p className="text-[1.2rem] font-semibold leading-none text-[#4B58C1] md:text-[1.4rem]">
                          13.2 <span className="text-lg md:text-sm">Crore</span>
                        </p>
                        <p className="mt-2 text-[0.64rem] text-slate-600  ">
                          Registered Consumers
                        </p>
                      </div>
                      <div className="sm:px-4">
                        <p className="text-[1.2rem] font-semibold leading-none text-[#4B58C1] md:text-[1.4rem]">
                          53
                        </p>
                        <p className="mt-2 text-[0.64rem] text-slate-600 ">
                          Insurance Partners
                        </p>
                      </div>
                      <div className="sm:px-4">
                        <p className="text-[1.2rem] font-semibold leading-none text-[#4B58C1] md:text-[1.4rem]">
                          6.29 <span className="text-lg md:text-sm">Crore</span>
                        </p>
                        <p className="mt-2 text-[0.64rem] text-slate-600 ">
                          Policies Sold
                        </p>
                      </div>
                    </div>

                    <p className="mx-auto mt-8 max-w-[360px] text-center text-[0.95rem] leading-relaxed text-[#43526B] md:max-w-[390px] md:text-[1rem] md:leading-[1.4]">
                      Policybazaar is{" "}
                      <span className="font-semibold">
                        one of India's leading
                      </span>{" "}
                      digital insurance platform
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: FAQ Accordion */}
            <div className="w-full lg:w-[55%] pt-4">
              {/* Warm Mustard Label */}
              <h2 className="font-serif text-3xl font-bold text-[#00394E] mb-4">
                {" "}
                {/* Deep Teal Heading */}
                Frequently Asked Questions
              </h2>

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
                      <div className="p-5 pt-0  text-slate-600 text-md leading-normal border-t border-slate-200/50 mt-2">
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
