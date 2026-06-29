"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CareersPage() {
  return (
    <main className=" ">
      {/* ----------------------------- */}
      {/*        HERO SECTION           */}
      {/* ----------------------------- */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/joinourteam.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.35) ",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00394E]/90 via-[#00394E]/30 to-[#00394E]/40" />

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto ">
          <h1 className="font-serif text-5xl   font-bold text-white my-6 drop-shadow-lg">
            Join Our Team
          </h1>
          <p className="text-gray-200 text-lg  font-light leading-[1.2] max-w-lg mx-auto">
            Be a Part Of a Team That Turns Financial Aspirations Into Lasting Achievements
          </p>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*        CAREERS CONTENT        */}
      {/* ----------------------------- */}
      <section className="py-14 px-6 md:px-12 bg-[#FDF9FB] text-center relative overflow-hidden">
        {/* Decorative Elements */}

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block py-2 px-6 rounded-full bg-[#DAA434]/10 text-[#DAA434] font-semibold tracking-widest text-2xl   mb-6 animate-fade-in-up">
            Careers
          </span>

          <h2 className="font-serif capitalize text-4xl md:text-4xl text-[#00394E] mb-4 leading-tight font-semibold  ">
            Where purpose meets profession
          </h2>

          <p className="text-lg  text-slate-600 leading-[1.4] font-light   max-w-3xl mx-auto">
           We are building a team that redefines financial Well-Being in India and beyond. If you believe in responsibility over revenue and empathy alongside expertise, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*        RESUME CARD SECTION    */}
      {/* ----------------------------- */}
      <section className="  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-20 py-20 md:py-0">
            {/* Left Content */}
            <div className="w-full md:w-1/2 md:py-20 z-10">
                <h2 className="font-serif text-4xl  font-medium text-[#00394E] mb-4 leading-tight">
                    Ready To Take Your Next Step?
                </h2>
                <p className="text-slate-600 text-md leading-[1.2] mb-6 max-w-xl font-light">
                   We believe exceptional people create exceptional impact. If you are ready to help redefine financial Well-Being, we look forward to connecting with you.
                </p>
                <a
                    href="mailto:careers@finask.com"
                    className="inline-flex items-center gap-2 bg-[#00394E] text-white px-8 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-[#002836] transition-colors   group"
                >
                    Send us your resume 
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] w-full flex items-end justify-center">
                 <div className="relative w-full h-full">
                    <Image
                        src="/career.webp" 
                        alt="Professional Team"
                        fill
                        className="object-contain object-bottom"
                    />
                 </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
