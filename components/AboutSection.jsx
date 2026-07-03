"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-[#FDF9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
          {/* LEFT: Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#00394E] mb-6 font-serif leading-[1.2] sm:leading-[1.1]">
             Not Just Growing Wealth, But Guiding Its Journey
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-[1.4] mb-4 max-w-xl">
              We believe wealth is more than numbers it is security for
              families, dignity in retirement and continuity across generations.
              At FinAsk Value, we listen before we advise and design financial
              frameworks that protect, grow and transfer wealth with clarity,
              care and character.{" "}
            </p>

            <div>
              {[
                { label: "The Ethos", href: "/about#philosophy" },
                { label: "How We Work", href: "/about#how-we-work" },
                { label: "Why We Exist", href: "/about#why-we-exist" },
                { label: "Our 7 Values", href: "/about#values" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between py-4 sm:py-5 border-b border-gray-100"
                >
                  <span className="text-lg sm:text-xl font-serif text-[#001F2B] group-hover:text-[#DAA434] transition-colors duration-300">
                    {item.label}
                  </span>
                  <ArrowUpRight
                    className="text-gray-300 group-hover:text-[#DAA434] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    size={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT: Image Composition */}
          <div className="order-1 lg:order-2 relative">
            {/* Main Image with Chamfered Effect (Matching EmpowerSection vibe) */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[520px] overflow-hidden shadow-2xl">
              <Image
                src="/about.jpg"
                alt="Business Meeting"
                fill
                className="object-cover  "
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001F2B]/40 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
