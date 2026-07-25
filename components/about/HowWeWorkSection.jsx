"use client";

import Image from "next/image";

export default function HowWeWorkSection() {
  return (
    <section
      id="how-we-work"
      className="py-10 md:py-24 px-6 md:px-12 bg-[#001F2B] text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#DAA434] to-transparent hidden md:block opacity-40" />

          {/* Step 1: Listening */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-14 relative group">
            <div className="w-full md:w-[45%] text-left pr-0 md:pr-12 mb-8 md:mb-0 order-2 md:order-1">
              <h3 className="text-2xl font-serif font-bold text-[#DAA434] mb-4">
                Patient Listening
              </h3>
              <p className="text-gray-300 leading-relaxed font-light text-justify">
                We begin not with policies or portfolios, but with listening carefully to understand your ambitions, family aspirations, business complexities and the deeper motivations that drive your decisions.
              </p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#DAA434] border-4 border-[#00394E] z-10 hidden md:block shadow-[0_0_15px_rgba(218,164,52,0.5)] group-hover:scale-125 transition-transform duration-500" />
            <div className="order-1 mb-6 w-full pl-0 md:order-2 md:mb-0 md:w-[45%] md:pl-12">
              <div className="relative h-64 w-full  overflow-hidden  ">
                <Image
                 src="/how3.webp"
                  alt="Listening"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Frameworks */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-14 relative group">
            <div className="w-full md:w-[45%] text-right pr-0 md:pr-12 mb-8 md:mb-0 order-1">
              <div className="relative h-64 w-full overflow-hidden  ">
                <Image
                   src="/how1.jpg"
                  alt="Curating"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#DAA434] border-4 border-[#00394E] z-10 hidden md:block shadow-[0_0_15px_rgba(218,164,52,0.5)] group-hover:scale-125 transition-transform duration-500" />
            <div className="w-full md:w-[45%] pl-0 md:pl-12 order-2">
              <h3 className="text-2xl font-serif font-bold text-[#DAA434] mb-4">
                Curated Frameworks
              </h3>
              <p className="text-gray-300 leading-relaxed font-light mb-4">
                From there, we curate finely tuned frameworks:
              </p>
              <ul className="list-disc list-outside  ml-5 text-gray-300 space-y-2 font-light">
                <li>
                  <strong className="text-white">Insurance plans</strong> that
                  stand resilient when life surprises you.
                </li>
                <li>
                  <strong className="text-white">Investment pathways</strong>{" "}
                  that grow with measured confidence.
                </li>
                <li>
                  <strong className="text-white">Legacy structures</strong> that
                  transfer not just assets, but values.
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3: Living Richly */}
          <div className="flex flex-col md:flex-row items-center justify-between   relative group">
            <div className="w-full md:w-[45%] text-left pr-0 md:pr-12 mb-8 md:mb-0 order-2 md:order-1">
           
              <h4 className="text-2xl font-serif font-bold text-[#DAA434] mt-6 mb-2">
                A Partnership Across Generations
              </h4>
              <p className="text-gray-300 leading-relaxed font-light text-md  text-justify">
                Over the years, we have quietly stood beside families as they
                navigated joyous occasions and life’s inevitable tests. Because At
                FinAsk Value, success is not about accounts; it's about lives
                continuing seamlessly.
              </p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#DAA434] border-4 border-[#00394E] z-10 hidden md:block shadow-[0_0_15px_rgba(218,164,52,0.5)] group-hover:scale-125 transition-transform duration-500" />
            <div className="order-1 mb-6 w-full pl-0 md:order-2 md:mb-0 md:w-[45%] md:pl-12">
              <div className="relative h-64 w-full   overflow-hidden  ">
                <Image
                  src="/howwework.jpeg"
                  alt="Living Richly"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
