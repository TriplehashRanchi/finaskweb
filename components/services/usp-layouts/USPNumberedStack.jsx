"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Shield, Zap, BarChart, Users,
  CheckCircle, TrendingUp, Globe, Settings,
} from "lucide-react";

const fallbackIcons = [Shield, Zap, BarChart, Users, CheckCircle, TrendingUp, Globe, Settings];

export default function USPNumberedStack({ features }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (!features || features.length === 0) return null;

  return (
    <div ref={ref} className="mb-10">
      <div className="relative pl-4">
        {/* Vertical connecting line */}
        <div className="absolute left-[1.45rem] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#DAA434]/30 via-[#DAA434]/15 to-[#DAA434]/5 rounded-full" />

        <div className="space-y-2">
          {features.map((feature, idx) => {
            const Icon = fallbackIcons[idx % fallbackIcons.length];
            const isActive = activeIdx === idx;

            return (
              <div
                key={idx}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-20px]"
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
                onMouseEnter={() => setActiveIdx(idx)}
              >
                <div className="flex items-start gap-5">
                  {/* Number circle */}
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-serif text-lg font-bold transition-all duration-400 ${
                      isActive
                        ? "bg-[#DAA434] text-white shadow-[0_0_16px_rgba(218,164,52,0.35)] scale-110"
                        : "bg-white text-[#DAA434]/40 border-2 border-[#DAA434]/20"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 rounded-xl py-5 px-5 transition-all duration-400 ${
                      isActive
                        ? "bg-white shadow-[0_6px_24px_rgba(0,57,78,0.08)] border border-slate-100"
                        : "bg-transparent"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-400 ${
                          isActive ? "bg-[#00394E]" : "bg-[#00394E]/5"
                        }`}
                      >
                        {feature.icon ? (
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={24}
                            height={24}
                            className={`w-6 h-6 object-contain transition-all duration-400 ${
                              isActive
                                ? "[filter:brightness(0)_saturate(100%)_invert(72%)_sepia(47%)_saturate(749%)_hue-rotate(359deg)_brightness(92%)_contrast(87%)]"
                                : "[filter:brightness(0)_saturate(100%)_invert(20%)_sepia(10%)_saturate(200%)_hue-rotate(180deg)]"
                            }`}
                          />
                        ) : (
                          <Icon
                            className={`w-5 h-5 transition-colors duration-400 ${
                              isActive ? "text-[#DAA434]" : "text-slate-400"
                            }`}
                          />
                        )}
                      </div>
                      <div>
                        <h3
                          className={`font-serif text-[1.15rem] font-bold leading-tight transition-colors duration-400 ${
                            isActive ? "text-[#00394E]" : "text-slate-500"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed mt-1 transition-all duration-400 overflow-hidden ${
                            isActive
                              ? "max-h-24 opacity-100 text-slate-500"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
