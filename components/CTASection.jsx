"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full py-16 sm:py-20 px-6 md:px-8 bg-[#001F2B] overflow-hidden mb-14">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop")', // Corporate/Building
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#001F2B]/95 via-[#001F2B]/90 to-transparent md:bg-gradient-to-r md:from-[#001F2B] md:via-[#001F2B]/90 md:to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
        
        {/* Text Content */}
        <div className="text-center md:text-left  ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-white tracking-tight leading-tight mb-6">
            Your Legacy.  <span className="text-[#DAA434]  ">Our Strategy.</span> 
           
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-[1.6] capitalize max-w-lg mx-auto md:mx-0">
             Let's build a financial future that aligns with your values. Expert guidance, every step of the way.
          </p>
        </div>

        {/* Action Button */}
        <div className="shrink-0">
          <div className="inline-block p-0.5 sm:p-1 rounded-full bg-gradient-to-r from-[#DAA434] to-[#F2C94C]">
             <div className="bg-[#00394E] rounded-full p-0.5 sm:p-1">
               <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-3 px-6 py-2.5 sm:px-10 sm:py-3 bg-white text-[#00394E] rounded-full font-bold uppercase tracking-wider text-sm sm:text-base hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20 group"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#DAA434] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
