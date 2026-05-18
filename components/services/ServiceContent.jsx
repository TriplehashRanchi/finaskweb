"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Shield, Zap, CheckCircle, BarChart,
  Users, TrendingUp, Globe, Settings, ChevronDown,
} from "lucide-react";
import { PromoUSPRenderer } from "./PromoUSPLayouts";
import RatingCard from "./RatingCard";

const ALL_LAYOUTS = [
  "horizontal-ribbon",
  "floating-pills",
  "bottom-sticky-banner",
  "bottom-sticky-blue",
  "scroll-popup-modal"
];

export default function ServiceContent({ service, hideFaq = false }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [layoutType, setLayoutType] = useState(null);

  useEffect(() => {
    // Allow forcing a specific layout via URL parameter for easy testing
    const params = new URLSearchParams(window.location.search);
    const urlLayout = params.get('layout');

    if (urlLayout && ALL_LAYOUTS.includes(urlLayout)) {
      setLayoutType(urlLayout);
    } else if (service?.uspLayout && ALL_LAYOUTS.includes(service.uspLayout)) {
      // Use the layout defined in services.js if it exists
      setLayoutType(service.uspLayout);
    } else {
      // Otherwise fallback to a random layout
      const randomLayout = ALL_LAYOUTS[Math.floor(Math.random() * ALL_LAYOUTS.length)];
      setLayoutType(randomLayout);
    }
  }, [service]);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  if (!service) return null;

  const promoTitle = service.faqSection?.promoTitle || "Invest \u20B910k/month & Get";
  const promoText = service.faqSection?.promoText || "\u20B91 Crore*Tax-Free";
  const promoBadges = [
    service.faqSection?.promoBadges1 || "Plans starting from \u20B91000/month",
    service.faqSection?.promoBadges2 || "In-built life cover",
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
        <h2 className="font-serif text-3xl md:text-5xl text-[#00394E] mb-8 font-medium">
          {service.title}
        </h2>
        <div className="space-y-3 text-slate-600 leading-[1.6] text-[1.05rem] text-justify ">
          {(() => {
            const lines = service.description.split("\n");
            const elements = [];
            let currentBullets = [];

            const renderBullets = (bulletsList, key) => (
              <div key={`bullets-${key}`} className="bg-slate-50 border border-slate-200 rounded-[1rem] p-6 md:p-8 my-8">
                <div className="grid grid-cols-1  gap-4">
                  {bulletsList.map((b, idx) => (
                    <div key={idx} className="flex gap-4 items-center bg-white p-5 rounded-xl border border-slate-100    transition-all group">
                      <div className="w-8 h-8 rounded-full bg-[#00394E]/5 flex items-center justify-center shrink-0  transition-colors">
                        <CheckCircle className="w-4 h-4 text-[#00394E]   transition-colors" strokeWidth={2.5} />
                      </div>
                      <p className="text-slate-700 font-medium text-[0.95rem] leading-snug">{b}</p>
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
                if (trimmed) {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
        {service.features &&
          service.features.map((feature, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 bg-[#00394E]">
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
              <div>
                <h3 className="font-serif text-[1.4rem] font-bold text-[#00394E]">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-[1.2] text-md">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
      </div>

      {layoutType && ["horizontal-ribbon", "floating-pills"].includes(layoutType) && !hideFaq && (
        <div className="mb-16">
          <PromoUSPRenderer layoutType={layoutType} promoTitle={promoTitle} promoText={promoText} promoBadges={promoBadges} />
        </div>
      )}

      {["bottom-sticky-banner", "bottom-sticky-blue", "scroll-popup-modal"].includes(layoutType) && !hideFaq && (
        <PromoUSPRenderer layoutType={layoutType} promoTitle={promoTitle} promoText={promoText} promoBadges={promoBadges} />
      )}

      {service.faq && !hideFaq && (
        <div className="">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {isLeftLayout && layoutType && (
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
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none group hover:bg-[#E2E8F0] transition-colors"
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
