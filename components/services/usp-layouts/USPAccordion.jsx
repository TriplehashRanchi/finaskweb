"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Shield, Zap, BarChart, Users,
  CheckCircle, TrendingUp, Globe, Settings,
  ChevronRight,
} from "lucide-react";

const fallbackIcons = [Shield, Zap, BarChart, Users, CheckCircle, TrendingUp, Globe, Settings];

export default function USPAccordion({ features }) {
  const [openIdx, setOpenIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (!features || features.length === 0) return null;

  return (
    <div ref={ref} className="mb-10 space-y-3">
      {features.map((feature, idx) => {
        const Icon = fallbackIcons[idx % fallbackIcons.length];
        const isOpen = openIdx === idx;

        return (
          <div
            key={idx}
            className={`rounded-2xl overflow-hidden transition-all duration-700 ${
              isOpen
                ? "bg-gradient-to-r from-[#00394E] to-[#00293A] shadow-[0_8px_30px_rgba(0,57,78,0.15)]"
                : "bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_4px_16px_rgba(0,57,78,0.06)]"
            } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            {/* Header bar */}
            <button
              onClick={() => setOpenIdx(isOpen ? -1 : idx)}
              className="w-full flex items-center gap-4 px-6 py-5 text-left focus:outline-none group"
            >
              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                  isOpen
                    ? "bg-[#DAA434]/15 border border-[#DAA434]/25 scale-110 rotate-3"
                    : "bg-[#00394E]/5 group-hover:bg-[#00394E]/10"
                }`}
              >
                {feature.icon ? (
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className={`w-6 h-6 object-contain transition-all duration-400 ${
                      isOpen
                        ? "[filter:brightness(0)_saturate(100%)_invert(82%)_sepia(30%)_saturate(600%)_hue-rotate(5deg)_brightness(95%)_contrast(90%)]"
                        : "[filter:brightness(0)_saturate(100%)_invert(20%)_sepia(10%)_saturate(200%)_hue-rotate(180deg)]"
                    }`}
                  />
                ) : (
                  <Icon
                    className={`w-5 h-5 transition-colors duration-400 ${
                      isOpen ? "text-[#DAA434]" : "text-slate-400 group-hover:text-[#00394E]"
                    }`}
                  />
                )}
              </div>

              {/* Title */}
              <h3
                className={`flex-1 font-serif text-[1.15rem] font-bold leading-tight transition-colors duration-400 ${
                  isOpen ? "text-white" : "text-[#00394E]"
                }`}
              >
                {feature.title}
              </h3>

              {/* Chevron */}
              <ChevronRight
                className={`w-5 h-5 shrink-0 transition-all duration-400 ${
                  isOpen ? "rotate-90 text-[#DAA434]" : "text-slate-300 group-hover:text-slate-500"
                }`}
                strokeWidth={2.5}
              />
            </button>

            {/* Expandable content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 pl-[4.5rem]">
                <div className="w-10 h-[2px] rounded-full bg-[#DAA434]/40 mb-3" />
                <p className="text-gray-300 text-[0.92rem] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
