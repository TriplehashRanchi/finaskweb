"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhyWeExistSection() {
  return (
    <section
      id="why-we-exist"
      className="  px-6 md:px-12 bg-[#FDF9FB] relative overflow-hidden  "
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT COLUMN: Large Stats */}
          <div className="w-full lg:w-[50%] flex flex-col relative  py-10">
            {/* Top Label */}
            <h5 className="text-[#00394E] font-bold text-sm tracking-widest uppercase mb-2">
              Why we exist ?
            </h5>

            {/* Big Number Area with Rotated Text */}
            <div className="flex items-start">
              <span className="text-[14rem] sm:text-[16rem] leading-none font-medium text-[#00394E] font-sans -ml-2 sm:-ml-4 tracking-tighter">
                8+
              </span>
              <div className="writing-vertical-rl rotate-90 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#DAA434] h-[12rem] sm:h-[16rem] mt-6 sm:mt-8   self-start">
                YEARS OF WORK <br /> EXPERIENCE
              </div>
            </div>

            {/* Clients / Reviews */}
            <div className="flex items-center gap-6 mt-8 pl-2">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 relative overflow-hidden"
                  >
                    <Image
                      src={`/testimonial-michael.webp`} // Using placeholder/existing image
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                    
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-[#00394E] text-sm tracking-wide uppercase leading-tight">
                  MORE THAN 500+ FAMILIES
                </p>
                <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">
                  SERVED
                </p>
              </div>
            </div>

            {/* Vertical Divider (Desktop only) */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />
          </div>

          {/* RIGHT COLUMN: Content & Image */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4  py-10">
            <p className="  text-gray-600 leading-relaxed ">
              We founded FinAsk on a simple philosophy:
              <strong className="text-[#00394E] block my-4 leading-[1.3]">
                That every family deserves to approach life’s most meaningful
                moments unburdened by financial anxiety.
              </strong>
              Whether it’s safeguarding your enterprise, structuring a
              succession plan that prevents future disputes, or crafting health
              and life covers that ensure no hospital bill or sudden tragedy
              ever forces distress sales — we serve as quiet custodians of your
              peace of mind.
            </p>

            <Link
              href="/contact"
              className="text-[#00394E] font-bold underline decoration-[#DAA434] decoration-2 underline-offset-4 hover:text-[#DAA434] transition-colors inline-block"
            >
              Let's create something extraordinary!
            </Link>

            <div className="relative w-full h-[350px]   overflow-hidden shadow-xl mt-4 group">
              <Image
                src="/why.webp"
                alt="Team Working"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#001F2B]/40 to-transparent pointer-events-none"></div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
