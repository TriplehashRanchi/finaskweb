"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";

const awards = [
  {
    year: "2026",
    month: "May",
    title: "Certificate of Excellence",
    detail: "Prudent Learning Conclave",
    image: "/award-two.png",
  },
  {
    year: "2026",
    month: "Jan",
    title: "Platinum Circle",
    detail: "Lead The League",
    image: "/award-one.png",
  },
  {
    year: "2026",
    month: "Jan",
    title: "Cluster Runner-Up",
    detail: "Gross Sales Recognition",
    image: "/award-three.png",
  },
  {
    year: "2025",
    month: "Jan",
    title: "Josh Hai Toh Jeet Hai",
    detail: "Naya Saal Naya Josh",
    image: "/award-four.png",
  },
  {
    year: "2025",
    month: "2025",
    title: "24th Year Anniversary",
    detail: "Finask Value Milestone",
    image: "/award-five.png",
  },
];

const yearGroups = Array.from(
  awards.reduce((groups, award) => {
    groups.set(award.year, [...(groups.get(award.year) || []), award]);
    return groups;
  }, new Map()),
).map(([year, items]) => ({ year, items }));

function AwardImage({ award, className = "", priority = false }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={award.image}
        alt={`${award.year} ${award.title}`}
        fill
        priority={priority}
        sizes="(max-width: 768px) 82vw, (max-width: 1200px) 34vw, 430px"
        className="object-contain drop-shadow-[0_24px_32px_rgba(0,31,43,0.18)]"
      />
    </div>
  );
}

export function AwardsHeroStage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAward = awards[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % awards.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="awards" className="bg-[#00394E] px-6 pb-16 pt-16 md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h1 className="font-serif text-5xl font-medium leading-tight text-white md:text-7 xl">
            Awards &amp; Recognition
          </h1>
          <p className="mt-5 max-w-xl text-justify text-lg leading-8 text-slate-200">
           Our journey has been shaped by the trust of our clients and the recognition of the industry. These awards reflect our passion for delivering transparent advice, personalized strategies and exceptional service. Each recognition inspires us to uphold the highest standards of professionalism, integrity and client care. As we continue to grow, our commitment remains the same: to help our clients build, protect and preserve their wealth with confidence.
          </p>
          
        </div>

        <div className="relative min-h-[560px]">
          <div className="absolute left-1/2 top-0 h-[430px] w-[430px] -translate-x-1/2 rounded-full " />

          <div className="relative mx-auto flex h-[390px] max-w-[560px] items-center justify-center">
            <AwardImage
              key={activeAward.image}
              award={activeAward}
              priority
              className="h-[360px] w-[88%] max-w-[430px] animate-fade-in-up"
            />
          </div>

          <div className="relative mx-auto -mt-4 max-w-xl text-center">
            {/* <p className="text-2xl font-bold uppercase tracking-[0.02em] text-[#DAA434]">
              {activeAward.month} {activeAward.year}
            </p> */}
            <h2 className="mt-2 font-serif text-3xl font-medium text-white">
              {activeAward.title}
            </h2>
            <p className="mt-2 text-lg text-slate-300">{activeAward.detail}</p>
          </div>

          <div className="relative mt-6 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
            {awards.map((award, index) => (
              <button
                key={award.image}
                type="button"
                aria-label={`Show ${award.title}`}
                onClick={() => setActiveIndex(index)}
                className={`min-w-[118px] rounded-md p-3 text-center transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white text-[#00394E] shadow-[0_18px_40px_rgba(0,57,78,0.12)]"
                    : "bg-white/10 text-white/75 opacity-80 hover:bg-white/15 hover:opacity-100"
                }`}
              >
                <AwardImage award={award} className="mx-auto h-24 w-full" />
                {/* <p className="mt-2 text-xs font-bold">{award.year}</p> */}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AwardsShowcaseConcepts() {
  return <AwardsHeroStage />;
}
