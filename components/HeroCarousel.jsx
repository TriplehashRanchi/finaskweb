"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/1.webp", // Happy Family / Legacy
    title: "Where Wealth Meets Purpose and Legacies Find Direction.",
    subtitle:
      "Beyond returns, we transform financial complexity into clarity, helping families, entrepreneurs and visionaries build, protect and pass on wealth with purpose.",
    highlight: "Direction",
    theme: "light",
  },
  {
    id: 2,
    image: "/2.webp", // Clarity/Confidence/Advisor
    title: "Clarity Today. Confidence Tomorrow. Continuity Forever.",
    subtitle:
      "From Investments and Insurance to Tax, Estate and Succession Planning, we deliver integrated financial strategies designed to support every stage of your financial journey.",
    highlight: "Forever.",
    theme: "light",
  },
  {
    id: 3,
    image: "/3.webp", // Generations/Business Succession
    title: "Protecting Dreams. Preserving Legacies. Powering Generations.",
    subtitle:
      "Every financial milestone builds your legacy. We help you navigate change, seize opportunities and protect what matters most with a long-term perspective.",
    highlight: "Generations.",
    theme: "light",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-[#00394E]">


      {/* Slides Container */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-105"
              style={{
                backgroundImage: `url('${slide.image}')`,
                transform: index === current ? "scale(1.1)" : "scale(1.0)",
              }}
            />

            {/* Gradient Overlay (Darker at bottom for text readability) - Using Navy tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00394E]/90 via-[#00394E]/30 to-[#00394E]/40" />
          </div>
        ))}
      </div>

      {/* MAIN CONTENT (Bottom Right Alignment on Desktop, Vertically Centered on Right on Mobile) */}
      <div className="absolute inset-0 z-20 flex items-center md:items-end justify-end  md:pb-20 px-4 md:px-16 pointer-events-none">
        <div className="max-w-3xl text-right pointer-events-auto">
          {/* Dynamic Headline from Slides */}
          <h1 className="font-serif text-[23px] sm:text-3xl md:text-5xl font-normal text-white mb-6 leading-[1.2] md:leading-[1.1] tracking-tight drop-shadow-lg">
            {slides[current].title}
          </h1>

          {/* Horizontal Line Separator - Brand Gold */}
          <div className=" w-48 md:w-full h-[1.5px] bg-[#DAA434] mb-6 ml-auto"></div>

          {/* Subheadline */}
          <p className="text-white/90 text-sm sm:text-lg md:text-[1.15rem] font-light mb-8 md:mb-10 leading-relaxed max-w-3xl ml-auto drop-shadow-md">
            {slides[current].subtitle}
          </p>

          {/* Action Button (Brand Coral) */}
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 md:px-10 md:py-4 bg-[#D44659] text-white font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-[#b03a4b] transition-colors shadow-lg"
          >
            Start a Conversation
          </Link>
        </div>
      </div>

      {/* LEFT SIDEBAR (Social Icons + Vertical Line) */}
      <div className="absolute left-16 bottom-0 top-0 w-12 z-30 hidden md:flex flex-col items-center justify-end pb-20 gap-8">
        <div className="flex flex-col gap-6 text-white/80">
          <a
            href="https://www.facebook.com/finaskvalue/"
            target="_blank"
            className="hover:text-[#DAA434] transition-colors hover:-translate-y-1 transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/finask-value/?viewAsMember=true"
            target="_blank"
            className="hover:text-[#DAA434] transition-colors hover:-translate-y-1 transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/finask_value/"
            target="_blank"
            className="hover:text-[#DAA434] transition-colors hover:-translate-y-1 transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
        {/* Vertical Line - Brand Gold */}
        <div className="w-[1px] h-32 bg-[#DAA434]/60 mt-4"></div>

      </div>

      {/* SCROLL INDICATOR (Bottom Center) */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-3 cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        {/* Mouse Body */}
        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2 backdrop-blur-sm group-hover:border-[#DAA434]/80 transition-colors duration-300 shadow-sm relative bg-white/5">
           {/* Scrolling Wheel */}
           <motion.div 
             className="w-1.5 h-1.5 bg-[#DAA434] rounded-full"
             animate={{ 
               y: [0, 18, 0],
               opacity: [1, 0.5, 0] 
             }}
             transition={{ 
               duration: 2, 
               repeat: Infinity, 
               ease: "easeInOut",
             }}
           />
        </div>
        
        {/* Text */}
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-white/50 group-hover:text-[#DAA434] transition-colors duration-300 drop-shadow-md">Scroll</span>
      </motion.div>
    </section>
  );
}
