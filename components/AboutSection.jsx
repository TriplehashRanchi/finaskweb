"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-[#FDF9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* LEFT: Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
             
            {/* Sub-heading */}
            <span className="text-[#DAA434] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
                ABOUT FINASK
            </span>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#001F2B] mb-6 font-serif leading-[1.1]">
              Smart and Effective <br/>
              <span className="italic font-light text-[#DAA434]">Business Agency.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-lg">
                We believe in the power of collaboration and personalized solutions. By understanding our clients' unique needs, we tailor our approach to deliver strategic insights and creative solutions.
            </p>

            {/* Links / Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                {[
                    { label: "The Ethos", href: "/about#philosophy" },
                    { label: "How We Work", href: "/about#how-we-work" },
                    { label: "Why We Exist", href: "/about#why-we-exist" },
                    { label: "Our 8 Values", href: "/about#values" }
                ].map((item) => (
                    <Link key={item.label} href={item.href} className="group flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#DAA434]/10 flex items-center justify-center text-[#DAA434] group-hover:bg-[#DAA434] group-hover:text-white transition-all duration-300">
                             <ArrowRight size={14} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                        <span className="text-[#001F2B] font-medium group-hover:text-[#DAA434] transition-colors">
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>

            {/* CTA Button */}
            <div>
                 <Link href="/about" className="inline-flex items-center gap-2 text-[#001F2B] font-bold border-b-2 border-[#DAA434] pb-1 hover:text-[#DAA434] transition-all duration-300">
                    Discover More 
                    <ArrowRight size={18} />
                 </Link>
            </div>

          </div>

          {/* RIGHT: Image Composition */}
          <div className="order-1 lg:order-2 relative">
             
             {/* Main Image with Chamfered Effect (Matching EmpowerSection vibe) */}
             <div 
                className="relative w-full h-[500px] overflow-hidden shadow-2xl"
                style={{
                    clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
                }}
             >
                 <Image
                  src="/hero3.png"
                  alt="Business Meeting"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#001F2B]/40 to-transparent pointer-events-none"></div>
             </div>

             {/* Decorative Border */}
             <div 
                className="absolute inset-0 border-2 border-[#DAA434] pointer-events-none -z-10 translate-x-4 translate-y-4"
                style={{
                     clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
                }}
             />

          </div>

        </div>
      </div>
    </section>
  );
}
