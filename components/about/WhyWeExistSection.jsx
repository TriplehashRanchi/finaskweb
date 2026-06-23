"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhyWeExistSection() {
  const image = [
    {
      src: "/why1.png",
      alt: "Team Working",
    },
    {
      src: "/why2.png",
      alt: "Team Working",
    },
    {
      src: "/why3.png",
      alt: "Team Working",
    },
  ];
  return (
    <section
      id="why-we-exist"
      className="scroll-mt-[100px] px-6 md:px-12 bg-[#FDF9FB] relative overflow-hidden  "
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT COLUMN: Large Stats */}
          <div className="w-full lg:w-[50%] flex flex-col relative  py-10">
            {/* Top Label */}
            <h5 className="text-[#00394E] text-center -ml-12 font-bold text-2xl tracking-widest uppercase">
              Why we exist ?
            </h5>

            {/* Big Number Area with Rotated Text */}
            <div className="flex items-start">
              <span className="text-[14rem] sm:text-[16rem] leading-none font-medium text-[#00394E] font-sans -ml-2 sm:-ml-4 tracking-tighter">
                8+
              </span>
              <div className="writing-vertical text-center rotate-90 text-xs sm:text-lg font-bold tracking-[0.2em] text-[#DAA434] h-[12rem] sm:h-[16rem] mt-6 sm:mt-8 -ml-10 sm:-ml-32 self-center">
                YEARS OF SERVING <br /> FAMILIES
              </div>
            </div>

            {/* Clients / Reviews */}
            <div className="flex items-center gap-6 mt-8 pl-2">
              <div className="flex -space-x-4">
                {/* {image.map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 relative overflow-hidden"
                  >
                    <Image
                      src={i.src} // Using placeholder/existing image
                      alt={i.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))} */}
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-[#00394E]  text-lg tracking-wide uppercase leading-tight">
                  MORE THAN 5000+ FAMILIES SERVED
                </p>
               
              </div>
            </div>

            {/* Vertical Divider (Desktop only) */}
            <div className="absolute right-10 top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />
          </div>

          {/* RIGHT COLUMN: Content & Image */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4  py-10">
            <p className="  text-gray-600 text-lg leading-[1.3] text-justify">
              We founded FinAsk Value on a simple philosophy: -
              <strong className="text-[#00394E] block my-4 text-lg leading-[1.3] text-justify">
                That every family deserves to approach life’s most meaningful
                moments unburdened by financial anxiety.
              </strong>
              Whether it’s safeguarding your enterprise, structuring a
              succession plan that prevents future disputes or crafting health
              and life covers that ensure no hospital bill or sudden tragedy
              ever forces distress sales — we remain your quiet custodians,
              focused on your peace of mind.
            </p>

            <Link
              href="/contact"
              className="text-[#00394E] font-bold underline decoration-[#DAA434] decoration-2 underline-offset-4 hover:text-[#DAA434] transition-colors inline-block"
            >
              Let's create something extraordinary!
            </Link>

            <div className="relative w-full h-[350px]   overflow-hidden shadow-xl mt-4 group">
              <Image
                src="/why.jpeg"
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
