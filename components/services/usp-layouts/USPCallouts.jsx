"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Shield, Zap, BarChart, Users,
  CheckCircle, TrendingUp, Globe, Settings,
} from "lucide-react";

const fallbackIcons = [Shield, Zap, BarChart, Users, CheckCircle, TrendingUp, Globe, Settings];

export default function USPCallouts({ features }) {
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
    <div className="mb-10 space-y-5">
      {features.map((feature, idx) => {
        const Icon = fallbackIcons[idx % fallbackIcons.length];
        const isVis = visibleItems.has(idx);

        return (
          <div
            key={idx}
            ref={(el) => (itemRefs.current[idx] = el)}
            data-idx={idx}
            className={`relative group rounded-xl bg-gradient-to-r from-[#DAA434]/[0.04] to-transparent border-l-[4px] border-[#DAA434] pl-6 pr-6 py-6 transition-all duration-600 hover:from-[#DAA434]/[0.08] hover:shadow-[0_4px_20px_rgba(218,164,52,0.08)] ${
              isVis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-start gap-5">
              {/* Decorative quote-style number */}
              <div className="hidden sm:flex flex-col items-center shrink-0">
                <span className="font-serif text-[2.5rem] leading-none font-bold text-[#DAA434]/20 select-none">
                  &ldquo;
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#00394E] flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {feature.icon ? (
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain [filter:brightness(0)_saturate(100%)_invert(72%)_sepia(47%)_saturate(749%)_hue-rotate(359deg)_brightness(92%)_contrast(87%)]"
                  />
                ) : (
                  <Icon className="w-6 h-6 text-[#DAA434]" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-serif text-[1.25rem] font-bold text-[#00394E] leading-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-[0.92rem] leading-relaxed mt-1.5">
                  {feature.description}
                </p>
              </div>
            </div>

            {/* Subtle decorative line at bottom */}
            <div className="absolute bottom-0 left-[4px] right-0 h-px bg-gradient-to-r from-[#DAA434]/10 to-transparent" />
          </div>
        );
      })}
    </div>
  );
}
