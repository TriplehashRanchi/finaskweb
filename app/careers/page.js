"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

function DotGrid({ className }) {
  return (
    <div
      className={className}
      style={{
        backgroundImage:
          "radial-gradient(circle, #93c5fd 1.5px, transparent 1.5px)",
        backgroundSize: "16px 16px",
      }}
    />
  );
}

export default function CareersPage() {
  return (
    <main className=" ">
      {/* ----------------------------- */}
      {/*        HERO SECTION           */}
      {/* ----------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#DCE9FA] via-[#E9F1FB] to-white pt-60 pb-0">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -left-40 w-[500px] h-[500px] rounded-full bg-[#BFD9F5]/50 blur-3xl" />
        <div className="absolute top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#BFD9F5]/40 blur-3xl translate-x-1/3" />

        {/* Decorative dot grids */}
        <DotGrid className="absolute top-32 right-10 w-32 h-28 opacity-70 hidden md:block" />
        <DotGrid className="absolute bottom-10 left-6 w-24 h-20 opacity-60 hidden md:block" />

        {/* Heading */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#00394E] mb-6 leading-tight">
            Where Purpose Meets Profession
          </h1>
          <div className="w-16 h-1 bg-[#00394E] mx-auto mb-6" />
          <p className="text-slate-600 text-lg leading-[1.4] max-w-2xl mx-auto">
            We are building a team that redefines financial Well-Being in
            India and beyond. If you believe in responsibility over revenue
            and empathy alongside expertise, we would love to hear from you.
          </p>
        </div>

        {/* ----------------------------- */}
        {/*        RESUME CARD SECTION    */}
        {/* ----------------------------- */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 mt-16">
          <div className="flex flex-col md:flex-row items-end gap-8 md:gap-0">
            {/* Left Card */}
            <div className="relative z-20 w-full md:w-[420px] bg-white/90 backdrop-blur rounded-2xl shadow-xl p-10 md:p-12 shrink-0">
              <div className="w-16 h-16 rounded-full bg-[#00394E]/10 text-[#00394E] flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#00394E] mb-4 leading-tight">
                Ready To Take Your Next Step?
              </h2>
              <div className="w-10 h-1 bg-[#00394E] mb-4" />
              <p className="text-slate-600 leading-[1.5] mb-8">
                We believe exceptional people create exceptional impact. If
                you are ready to help redefine financial Well-Being, we look
                forward to connecting with you.
              </p>
              <a
                href="mailto:careers@finask.com"
                className="inline-flex items-center gap-2 bg-[#00394E] text-white px-6 py-3.5 rounded-lg font-bold hover:bg-[#002836] transition-colors group"
              >
                Send us your resume
                <span className="group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </div>

            {/* Right Image */}
            <div className="relative w-full md:flex-1 h-[380px] md:h-[560px] -mt-16 md:mt-0 md:-ml-8">
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
