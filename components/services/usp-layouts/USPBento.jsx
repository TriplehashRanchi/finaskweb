"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Shield, Zap, BarChart, Users,
  CheckCircle, TrendingUp, Globe, Settings,
} from "lucide-react";

const fallbackIcons = [Shield, Zap, BarChart, Users, CheckCircle, TrendingUp, Globe, Settings];

/* Tile colour palette — cycles through brand-inspired combos */
const tilePalettes = [
  { bg: "bg-gradient-to-br from-[#00394E] to-[#001F2B]", text: "text-white", desc: "text-gray-300", iconBg: "bg-[#DAA434]/15 border border-[#DAA434]/25", iconFilter: "[filter:brightness(0)_saturate(100%)_invert(82%)_sepia(30%)_saturate(600%)_hue-rotate(5deg)_brightness(95%)_contrast(90%)]" },
  { bg: "bg-white border border-slate-100", text: "text-[#00394E]", desc: "text-slate-500", iconBg: "bg-[#00394E]", iconFilter: "[filter:brightness(0)_saturate(100%)_invert(72%)_sepia(47%)_saturate(749%)_hue-rotate(359deg)_brightness(92%)_contrast(87%)]" },
  { bg: "bg-gradient-to-br from-[#DAA434]/10 to-[#DAA434]/5 border border-[#DAA434]/15", text: "text-[#00394E]", desc: "text-slate-600", iconBg: "bg-[#00394E]", iconFilter: "[filter:brightness(0)_saturate(100%)_invert(72%)_sepia(47%)_saturate(749%)_hue-rotate(359deg)_brightness(92%)_contrast(87%)]" },
  { bg: "bg-[#F0F4F8] border border-slate-100", text: "text-[#00394E]", desc: "text-slate-500", iconBg: "bg-[#00394E]", iconFilter: "[filter:brightness(0)_saturate(100%)_invert(72%)_sepia(47%)_saturate(749%)_hue-rotate(359deg)_brightness(92%)_contrast(87%)]" },
];

export default function USPBento({ features }) {
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

  const heroFeature = features[0];
  const restFeatures = features.slice(1);
  const HeroIcon = fallbackIcons[0];

  return (
    <div ref={ref} className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
        {/* --- HERO TILE (spans 2 cols, 2 rows on desktop) --- */}
        <div
          className={`md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden ${tilePalettes[0].bg} p-8 md:p-10 flex flex-col justify-between min-h-[260px] md:min-h-[320px] group transition-all duration-700 hover:shadow-[0_12px_40px_rgba(0,57,78,0.2)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className={`w-16 h-16 rounded-2xl ${tilePalettes[0].iconBg} flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110`}>
              {heroFeature.icon ? (
                <Image
                  src={heroFeature.icon}
                  alt={heroFeature.title}
                  width={40}
                  height={40}
                  className={`w-10 h-10 object-contain ${tilePalettes[0].iconFilter}`}
                />
              ) : (
                <HeroIcon className="w-8 h-8 text-[#DAA434]" />
              )}
            </div>
            <h3 className={`font-serif text-2xl md:text-3xl font-bold ${tilePalettes[0].text} leading-tight`}>
              {heroFeature.title}
            </h3>
            <p className={`${tilePalettes[0].desc} text-[0.95rem] leading-relaxed mt-3 max-w-md`}>
              {heroFeature.description}
            </p>
          </div>
          {/* Decorative corner accent */}
          <div className="self-end mt-6 w-12 h-1 rounded-full bg-[#DAA434]/40" />
        </div>

        {/* --- SMALLER TILES --- */}
        {restFeatures.map((feature, idx) => {
          const palette = tilePalettes[(idx + 1) % tilePalettes.length];
          const Icon = fallbackIcons[(idx + 1) % fallbackIcons.length];

          return (
            <div
              key={idx}
              className={`rounded-2xl ${palette.bg} p-6 flex flex-col justify-between min-h-[150px] group transition-all duration-700 hover:shadow-[0_8px_28px_rgba(0,57,78,0.12)] hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(idx + 1) * 120}ms` }}
            >
              <div className={`w-11 h-11 rounded-xl ${palette.iconBg} flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110`}>
                {feature.icon ? (
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className={`w-6 h-6 object-contain ${palette.iconFilter}`}
                  />
                ) : (
                  <Icon className="w-5 h-5 text-[#DAA434]" />
                )}
              </div>
              <div>
                <h3 className={`font-serif text-[1.15rem] font-bold ${palette.text} leading-tight`}>
                  {feature.title}
                </h3>
                <p className={`${palette.desc} text-sm leading-relaxed mt-1.5`}>
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
