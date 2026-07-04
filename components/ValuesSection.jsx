"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";


const values = [
  {
    id: 1,
    title: "Caring For People Before Numbers",
    description:
      "Behind every number is a life story. We lead with empathy, respect, clarity and honesty because financial decisions are deeply personal, not just numerical.",
    icon: "/values-icons/value-1.png",
  },
  {
    id: 2,
    title: "Transparency - No Fine Print",
    description:
      "No hidden clauses. No surprises. We believe in absolute clarity, so you understand every recommendation, every cost and every commitment before you move forward. ",
    icon: "/values-icons/value-2.png",
  },
  {
    id: 3,
    title: "	Spam-Free - Your Time Is Sacred",
    description:
      "No noise chasing, no pushy selling, no unnecessary interruptions. We respect your focus and space, delivering value with intention. Peace of mind comes before pressure. ",
    icon: "/values-icons/value-3.png",
  },
  {
    id: 4,
    title: "Growth Mindset - We Grow by Growing You ",
    description:
      "We believe in evolution, not just returns. Clients grow wealth the right way and our team grows with learning, support and opportunity. No one is stuck, everyone is supported. ",
    icon: "/values-icons/value-4.png",
  },
  {
    id: 5,
    title: "Co-Creation of Wealth - Win-Win Only",
    description:
      "We build wealth with clients, not just for them. Every milestone, client success, advisor growth, company progress is both a shared effort and a shared reward. We believe in sharing credit and growing together.",
    icon: "/values-icons/value-5.png",
  },
  {
    id: 6,
    title: "Built on Collaboration & Trust",
    description:
      "Great outcomes are built through teamwork. We partner with top insurers, fund managers and experts while internally breaking silos and sharing credit. Results improve when egos leave and collaboration leads.",
    icon: "/values-icons/value-6.png",
  },
  {
    id: 7,
    title: "Customer Obsession - We Champion You",
    description:
      "Every decision starts with you. We do not just serve clients, we advocate for them, ensuring every plan, product and strategy is aligned with what is truly in your best interest.",
    icon: "/values-icons/value-7.png",
  },
];

export default function ValuesSection() {
  const [currentIndex, setCurrentIndex] = useState(4); // Start at first real item (after 4 clones)
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Clone slides for infinite loop
  const extendedValues = [
    ...values.slice(-4),
    ...values,
    ...values.slice(0, 4)
  ];
  const totalRealSlides = values.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };

    // Initial call
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-sliding interval
  useEffect(() => {
    if (isHovered) return; // Pause auto-slide when hovered

    const slideInterval = setInterval(() => {
      // Create a local nextSlide equivalent to avoid dependency issues with the full function
      if (!isTransitioning) {
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(true);
      }
    }, 1000); // Change slide every 1.5 seconds

    return () => clearInterval(slideInterval);
  }, [isHovered, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // Snap forward to real start
    if (currentIndex >= totalRealSlides + 4) {
      setCurrentIndex(currentIndex - totalRealSlides);
    }
    // Snap backward to real end
    if (currentIndex < 4) {
      setCurrentIndex(currentIndex + totalRealSlides);
    }
  };

  // Adjust index on resize to ensure we stay on a valid real slide (optional safety)
  useEffect(() => {
    if (!isTransitioning) {
      // Keep it simple or clamp if necessary, but with clones infinite loop usually handles itself
    }
  }, [cardsToShow]);

  return (
    <section className="w-full py-14 px-4 md:px-8  ">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#00394E] font-serif tracking-tight">
          Our Core <span className="text-[#DAA434]">Values</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          Values that shape our decisions and define our character.
        </p>
      </div>

      <div
        className="relative group/carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Buttons (Absolute) */}
        <button
          onClick={prevSlide}
          className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full cursor-pointer bg-white shadow-lg border border-[#00394E]/10 flex items-center justify-center text-[#00394E] hover:bg-[#00394E] hover:text-white transition-all duration-300 active:scale-95 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 translate-x-0 md:translate-x-4 md:group-hover/carousel:translate-x-0"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full cursor-pointer bg-white shadow-lg border border-[#00394E]/10 flex items-center justify-center text-[#00394E] hover:bg-[#00394E] hover:text-white transition-all duration-300 active:scale-95 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 translate-x-0 md:-translate-x-4 md:group-hover/carousel:translate-x-0"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        <div className="overflow-hidden">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedValues.map((value, index) => (
              <div
                key={`${value.id}-${index}`}
                className="px-2 flex-shrink-0"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <div
                  className="group relative h-[420px] sm:h-[380px] bg-white overflow-hidden cursor-pointer transition-all duration-300   hover:shadow-xl border border-gray-100/50"
                >
                  {/* Hover Overlay (Navy Slide) */}
                  <div className="absolute inset-0 bg-[#00394E] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-10"></div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-6 pt-10 sm:p-8 sm:pt-12 flex flex-col items-center justify-start z-20 transition-all duration-500 group-hover:items-center">
                    {/* Icon */}
                    <div className="mb-4 sm:mb-6 text-[#DAA434] bg-orange-50 p-2 rounded-xl group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
                      <Image
                        src={value.icon}
                        alt={value.title}
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain transition duration-500 [filter:brightness(0)_saturate(100%)_invert(72%)_sepia(47%)_saturate(749%)_hue-rotate(359deg)_brightness(92%)_contrast(87%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(100%)]"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl text-center font-bold text-[#00394E] mb-3 font-serif group-hover:text-white transition-colors duration-500 delay-75">
                      {value.title}
                    </h3>

                    {/* Description (Always Visible) */}
                    <div className="transition-all duration-500 overflow-hidden">
                      <p className="text-gray-500 group-hover:text-gray-300 text-justify text-sm leading-relaxed mt-2 transition-colors duration-500">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
