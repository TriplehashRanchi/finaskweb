"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Shield, Zap, CheckCircle, BarChart,
  Users, TrendingUp, Globe, Settings, ChevronDown,
} from "lucide-react";
import { PromoUSPRenderer } from "./PromoUSPLayouts";
import RatingCard from "./RatingCard";
import { allInsuranceMenuItems } from "@/data/insuranceMenu";

const ALL_LAYOUTS = [
  "horizontal-ribbon",
  "horizontal-ribbon-business",
  "floating-pills",
  "bottom-sticky-banner",
  "bottom-sticky-blue",
  "scroll-popup-modal"
];

export default function ServiceContent({ service, hideFaq = false }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [layoutType] = useState(() => {
    // Allow forcing a specific layout via URL parameter for easy testing
    const params =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : null;
    const urlLayout = params?.get("layout");

    if (urlLayout && ALL_LAYOUTS.includes(urlLayout)) {
      return urlLayout;
    }

    if (service?.uspLayout && ALL_LAYOUTS.includes(service.uspLayout)) {
      // Use the layout defined in services.js if it exists
      return service.uspLayout;
    }

    // Otherwise fallback to a random layout
    return ALL_LAYOUTS[Math.floor(Math.random() * ALL_LAYOUTS.length)];
  });

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  if (!service) return null;

  const isInsuranceService = allInsuranceMenuItems.some(
    (item) => item.slug === service.slug
  );
  const shouldShowUSP =
    isInsuranceService && !hideFaq && service.slug !== "general-liability-insurance";

  const promoTitle = service.faqSection?.promoTitle || "Invest \u20B910k/month & Get";
  const promoText = service.faqSection?.promoText || "\u20B91 Crore*Tax-Free";
  const promoBadges = [
    service.faqSection?.promoBadges1 || "Plans starting from \u20B91000/month",
    service.faqSection?.promoBadges2 || "In-built life cover",
    service.faqSection?.promoBadges3 || "Flexible tenure up to 30 years"
  ];

  const getIcon = (index) => {
    const icons = [Shield, Zap, BarChart, Users, CheckCircle, TrendingUp, Globe, Settings];
    const Icon = icons[index % icons.length];
    return <Icon className="w-8 h-8 text-[#DAA434]" />;
  };

  const isLeftLayout = false;

  return (
    <div className={`w-full transition-opacity duration-500 ${layoutType ? 'opacity-100' : 'opacity-0'}`}>
      


      <div className="mb-8">
        <h2 className="mb-5 font-serif text-3xl font-medium leading-tight text-[#00394E] sm:mb-8 md:text-5xl">
          {service.title}
        </h2>
        <div className="space-y-3 text-base leading-relaxed text-slate-600 sm:text-[1.05rem] text-justify">
          {(() => {
            const lines = service.description.split("\n");
            const elements = [];
            let currentBullets = [];

            const renderBullets = (bulletsList, key) => (
              <div key={`bullets-${key}`} className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:my-8 sm:p-6 md:p-8">
                <div className="grid grid-cols-1  gap-4">
                  {bulletsList.map((b, idx) => (
                    <div key={idx} className="group flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 transition-all sm:items-center sm:gap-4 sm:p-5">
                      <div className="w-8 h-8 rounded-full bg-[#00394E]/5 flex items-center justify-center shrink-0  transition-colors">
                        <CheckCircle className="w-4 h-4 text-[#00394E]   transition-colors" strokeWidth={2.5} />
                      </div>
                      <p className="text-slate-700 font-medium text-md leading-snug">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            );

            lines.forEach((line, i) => {
              const trimmed = line.trim();
              if (trimmed.startsWith("●")) {
                currentBullets.push(trimmed.substring(1).trim());
              } else {
                if (currentBullets.length > 0) {
                  elements.push(renderBullets(currentBullets, i));
                  currentBullets = [];
                }
              if (trimmed.toLowerCase() === "we work with:") {
                elements.push(
                  <h3
                    key={`heading-${i}`}
                    className="mt-10 mb-5 text-[#00394E] text-xl"
                  >
                    {line}
                  </h3>
                );
              } else {
                elements.push(<p key={`p-${i}`} className="mb-2">{line}</p>);
              }
              }
            });

            if (currentBullets.length > 0) {
              elements.push(renderBullets(currentBullets, 'end'));
            }

            return elements;
          })()}
        </div>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-y-7 md:mb-12 md:grid-cols-2 md:gap-x-12">
        {service.features &&
          service.features.map((feature, idx) => (
            <div key={idx} className="grid min-w-0 grid-cols-[3.5rem_minmax(0,1fr)] items-start gap-3 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center self-start rounded-full bg-[#00394E] sm:h-16 sm:w-16">
                {feature.icon ? (
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="h-8 w-8 object-contain transition duration-500 sm:h-10 sm:w-10 [filter:brightness(0)_saturate(100%)_invert(72%)_sepia(47%)_saturate(749%)_hue-rotate(359deg)_brightness(92%)_contrast(87%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(100%)]"
                  />
                ) : (
                  getIcon(idx)
                )}
              </div>
              <div className="min-w-0">
                <h3 className="break-words font-serif text-xl font-bold leading-tight text-[#00394E] sm:text-[1.4rem]">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-[1.2] text-md">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
      </div>

      {layoutType && ["horizontal-ribbon", "horizontal-ribbon-business", "floating-pills"].includes(layoutType) && shouldShowUSP && (
        <div className="mb-16">
          <PromoUSPRenderer layoutType={layoutType} promoTitle={promoTitle} promoText={promoText} promoBadges={promoBadges} />
        </div>
      )}

      {["bottom-sticky-banner", "bottom-sticky-blue", "scroll-popup-modal"].includes(layoutType) && shouldShowUSP && (
        <PromoUSPRenderer layoutType={layoutType} promoTitle={promoTitle} promoText={promoText} promoBadges={promoBadges} />
      )}

      {service.faq && !hideFaq && (
        <div className="">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {isLeftLayout && layoutType && shouldShowUSP && (
              <div className="w-full lg:w-[45%]">
                <PromoUSPRenderer layoutType={layoutType} promoTitle={promoTitle} promoText={promoText} promoBadges={promoBadges} />
              </div>
            )}

            <div className={`w-full ${isLeftLayout ? 'lg:w-[55%]' : 'lg:w-full max-w-5xl mx-auto'} `}>
              
              {/* RATING CARD PLACEMENT (Exactly as requested) */}
              <RatingCard />

              <h2 className="font-serif text-3xl font-bold text-[#00394E] mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {service.faq.map((item, idx) => (
                  <div key={idx} className="bg-[#F0F4F8] transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full items-center justify-between p-4 sm:p-5 text-left focus:outline-none group hover:bg-[#E2E8F0] transition-colors"
                    >
                      <span className="font-bold text-[#00394E] text-md pr-4">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#00394E] transition-transform duration-300 shrink-0 ${
                          openFaqIndex === idx ? "rotate-180" : "rotate-0"
                        }`}
                        strokeWidth={2.5}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaqIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-5 pt-0 text-slate-600 text-md leading-normal border-t border-slate-200/50 mt-2">
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
