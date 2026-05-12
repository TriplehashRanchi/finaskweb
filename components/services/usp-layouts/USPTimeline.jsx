"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Shield, Zap, BarChart, Users,
  CheckCircle, TrendingUp, Globe, Settings,
} from "lucide-react";

const fallbackIcons = [Shield, Zap, BarChart, Users, CheckCircle, TrendingUp, Globe, Settings];

export default function USPTimeline({ features }) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx);
            setVisibleItems((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.3 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [features]);

  if (!features || features.length === 0) return null;

  return (
    <div className="relative py-8 mb-10">
      {/* Center vertical line — desktop only */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#DAA434]/0 via-[#DAA434]/30 to-[#DAA434]/0" />

      <div className="space-y-8 md:space-y-12">
        {features.map((feature, idx) => {
          const Icon = fallbackIcons[idx % fallbackIcons.length];
          const isLeft = idx % 2 === 0;
          const isVis = visibleItems.has(idx);

          return (
            <div
              key={idx}
              ref={(el) => (itemRefs.current[idx] = el)}
              data-idx={idx}
              className="relative"
            >
              {/* Timeline dot — desktop only */}
              <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-4 h-4 rounded-full border-[3px] border-[#DAA434] bg-[#FDF9FB] shadow-[0_0_0_4px_rgba(218,164,52,0.15)]" />

              {/* Card container */}
              <div
                className={`md:w-[44%] transition-all duration-700 ease-out ${
                  isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                } ${
                  isVis
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${isLeft ? "-translate-x-12" : "translate-x-12"}`
                }`}
              >
                <div className="relative group bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,57,78,0.06)] hover:shadow-[0_8px_30px_rgba(0,57,78,0.1)] transition-shadow duration-300">
                  {/* Accent border */}
                  <div
                    className={`absolute top-4 bottom-4 w-[3px] rounded-full bg-gradient-to-b from-[#DAA434] to-[#DAA434]/40 ${
                      isLeft ? "right-0 md:-right-[1.1rem]" : "left-0 md:-left-[1.1rem]"
                    } hidden md:block`}
                  />

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#00394E] flex items-center justify-center shrink-0">
                      {feature.icon ? (
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain [filter:brightness(0)_saturate(100%)_invert(72%)_sepia(47%)_saturate(749%)_hue-rotate(359deg)_brightness(92%)_contrast(87%)]"
                        />
                      ) : (
                        <Icon className="w-6 h-6 text-[#DAA434]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-serif text-[1.25rem] font-bold text-[#00394E] leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 text-[0.92rem] leading-relaxed mt-1.5">
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
  );
}
