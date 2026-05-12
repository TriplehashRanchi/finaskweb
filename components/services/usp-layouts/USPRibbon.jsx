"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Shield, Zap, BarChart, Users,
  CheckCircle, TrendingUp, Globe, Settings,
} from "lucide-react";

const fallbackIcons = [Shield, Zap, BarChart, Users, CheckCircle, TrendingUp, Globe, Settings];

export default function USPRibbon({ features }) {
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
    <div ref={ref} className="relative w-[100vw] ml-[calc(-50vw+50%)] mb-14">
      {/* Decorative top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA434]/40 to-transparent z-10" />

      <div className="relative overflow-hidden bg-gradient-to-r from-[#001520] via-[#00394E] to-[#001520] py-10 md:py-12 px-6">
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Mobile: vertical stack, Desktop: horizontal with dividers */}
          <div className="flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x divide-white/10">
            {features.map((feature, idx) => {
              const Icon = fallbackIcons[idx % fallbackIcons.length];
              return (
                <div
                  key={idx}
                  className={`flex-1 px-2 md:px-6 py-5 md:py-0 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DAA434]/20 to-[#DAA434]/5 border border-[#DAA434]/25 flex items-center justify-center shrink-0">
                      {feature.icon ? (
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={26}
                          height={26}
                          className="w-[26px] h-[26px] object-contain [filter:brightness(0)_saturate(100%)_invert(82%)_sepia(30%)_saturate(600%)_hue-rotate(5deg)_brightness(95%)_contrast(90%)]"
                        />
                      ) : (
                        <Icon className="w-5 h-5 text-[#DAA434]" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-white font-serif font-semibold text-[1.05rem] leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mt-1.5">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA434]/40 to-transparent z-10" />
    </div>
  );
}
