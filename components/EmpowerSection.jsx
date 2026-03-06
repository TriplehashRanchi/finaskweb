"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const features = [
  {


    id: "family-office",
    title: "Family Office",
    image: "/family.png", 
    description: "Helping families protect harmony, purpose, and prosperity across generations.",
     link: "/services/family-office"
  },
  {
    id: "nri-corner",
    title: "NRI Corner",
    image: "/nri.png",
    description: "Helping NRIs protect, grow, and repatriate wealth with confidence.",
    link: "/services/nri-corner"
  },
  {
    id: "women-corner",
    title: "Women Corner",
    image: "/women-corner.png",
    description: "For every woman balancing dreams, duties, and tomorrow this is her corner.",
    link: "/services/women-corner"
  }
];

export default function EmpowerSection() {
  const [activeFeature, setActiveFeature] = useState(0); 

  return (
    <section className="py-20  bg-[#001F2B] text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* LEFT: Dynamic Image with Chamfered Corner */}
        <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
             {/* Render active image with key to force animation or just smooth swap */}
             <div 
                className="relative h-full w-full overflow-hidden   transition-all duration-500 ease-in-out"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                     
                }}
             >
                <Image
                    key={activeFeature} // changing key forces re-mount for animation effect if desired, or just src swap
                    src={features[activeFeature].image} 
                    alt={features[activeFeature].title}
                    fill
                    className="object-cover object-center animate-fadeIn" // simple fade in
                    priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F2B]/60 to-transparent pointer-events-none"></div>
             </div>
 
        </div>

        {/* RIGHT: Content List */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            {/* Top Heading */}
            <h4 className="text-white font-bold tracking-wide uppercase text-sm mb-8 relative inline-block">
                Because Every Journey Deserves a Financial Blueprint
             </h4>

            {/* Interactive Feature List */}
            <div className="flex flex-col gap-4 mb-10 relative">
                {features.map((feature, index) => (
                    <div 
                        key={feature.id}
                        className="group cursor-pointer"
                        onClick={() => setActiveFeature(index)}
                    >
                        <h3 
                            className={`text-4xl md:text-3xl font-bold transition-colors duration-300 select-none ${
                                activeFeature === index 
                                    ? "text-white" 
                                    : "text-gray-600 hover:text-gray-400"
                            }`}
                        >
                            {feature.title}
                        </h3>
                    </div>
                ))}
            </div>

           
            <div className="border-t border-gray-700/50 pt-10 transition-opacity duration-300 ease-in-out">
                <h4 className="text-xl font-bold text-white mb-4">
                    {activeFeature === 0 ? "Innovative Financial Solutions" : features[activeFeature].title + " Solutions"}
                </h4>
                <p className="text-gray-400 leading-relaxed mb-8 max-w-md min-h-[3rem]">
                    {features[activeFeature].description}
                </p>

                {/* Circle Arrow Button */}
                <Link   href={features[activeFeature].link} className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full hover:bg-[#DAA434] transition-all duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#001F2B] group-hover:text-white transition-colors transform -rotate-45 group-hover:rotate-0 duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
            </div>

        </div>

      </div>
    </section>
  );
}
