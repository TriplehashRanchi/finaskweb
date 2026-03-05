"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDF9FB] text-[#00394E] font-sans selection:bg-[#DAA434] selection:text-white">
      {/* ----------------------------- */}
      {/*        HERO SECTION           */}
      {/* ----------------------------- */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/contact.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.35) ",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00394E]/90 via-[#00394E]/30 to-[#00394E]/40" />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white my-6 drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light leading-[1.2] max-w-2xl mx-auto">
            Because a 10-minute conversation can create 10 years of clarity.
          </p>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*      FLOATING CARD            */}
      {/* ----------------------------- */}
      <section className="px-6 relative z-20 -mt-24 md:-mt-18 mb-6">
        <div className="max-w-7xl mx-auto bg-white   shadow-xl shadow-slate-200/50   overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Title Column - Clean White with Navy Text */}
            <div className="w-full md:w-1/3 bg-[#FDF9FB] p-10 flex flex-col items-center justify-center text-left border-b md:border-b-0 md:border-r border-slate-100 relative overflow-hidden">
              <h3 className="font-bold text-3xl md:text-4xl text-[#00394E] leading-tight text-center ">
                How can we help you?
              </h3>
            </div>

            {/* Options Container - Clean White with Dividers */}
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {/* Option 1: Call */}
              <a
                href="tel:+918076351485"
                className="group p-10 flex flex-col items-center justify-center text-center hover:bg-[#FDF9FB] transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-full bg-[#DAA434]/10 text-[#DAA434] flex items-center justify-center mb-6 group-hover:bg-[#DAA434] group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg text-[#00394E] mb-2 group-hover:font-bold transition-all">
                  Schedule a call
                </h4>
                <p className="text-xs text-slate-500 font-light uppercase tracking-wide">
                  Advisor Support
                </p>
              </a>

              {/* Option 2: Chat */}
              <a
                href="https://wa.me/918076351485"
                target="_blank"
                className="group p-10 flex flex-col items-center justify-center text-center hover:bg-[#FDF9FB] transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-full bg-[#DAA434]/10 text-[#DAA434] flex items-center justify-center mb-6 group-hover:bg-[#DAA434] group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg text-[#00394E] mb-2 group-hover:font-bold transition-all">
                  Chat with us
                </h4>
                <p className="text-xs text-slate-500 font-light uppercase tracking-wide">
                  WhatsApp
                </p>
              </a>

              {/* Option 3: Email */}
              <a
                href="mailto:wecare@finaskvalue.com"
                className="group p-10 flex flex-col items-center justify-center text-center hover:bg-[#FDF9FB] transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-full bg-[#DAA434]/10 text-[#DAA434] flex items-center justify-center mb-6 group-hover:bg-[#DAA434] group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg text-[#00394E] mb-2 group-hover:font-bold transition-all">
                  Send an email
                </h4>
                <p className="text-xs text-slate-500 font-light uppercase tracking-wide">
                  Inquiries
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*        OFFICE LOCATIONS       */}
      {/* ----------------------------- */}
      <section className="  pt-24 pb-30 px-6 md:px-12 bg-[#FDF9FB] relative">
        <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center justify-center min-h-[500px]">
          {/* Center Image */}
          <div className="relative w-full lg:w-[45%] h-[350px] lg:h-[570px] rounded-xl overflow-hidden shadow-2xl z-0 order-2 lg:order-1 lg:absolute lg:left-1/2 lg:-translate-x-1/2 bg-gray-200">
            <Image
              src="/about-team.png"
              alt="Our Office"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#00394E]/30" />
          </div>

          {/* Left Card: Gurugram */}
          <div className="w-full lg:w-[32%] bg-[#00394E] p-16 rounded-lg flex flex-col  justify-center shadow-xl z-20 relative mt-[-40px] lg:mt-0 lg:mr-auto order-3 lg:order-2 text-white  hover:scale-105 transition-transform duration-500">
            <h3 className="font-serif text-2xl mb-6">Gurugram</h3>

            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#DAA434]">
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
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#DAA434] text-sm mb-1">
                    Our Location
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    1st Floor, Badshahpur Sohna Road, near Subhash Chowk,
                    Central Park II, Sector 48, Gurugram, Haryana – 122018
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#DAA434]">
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
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#DAA434] text-sm mb-1">
                    Contact Us
                  </h4>
                  <a
                    href="tel:+918076351485"
                    className="text-gray-300 hover:text-white transition-colors block text-sm"
                  >
                    +91 80763 51485
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#DAA434]">
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
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#DAA434] text-sm mb-1">
                    Email Us
                  </h4>
                  <a
                    href="tel:+911140007000"
                    className="text-gray-300 hover:text-white transition-colors block text-sm"
                  >
                    wecare@finaskvalue.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Delhi */}
          <div className="w-full lg:w-[32%] bg-[#00394E] p-16 rounded-lg flex flex-col  justify-center shadow-2xl z-20 relative mt-6 lg:mt-0 lg:ml-auto order-1 lg:order-3 animate-fade-in-up  hover:scale-105 transition-transform duration-500">
            <h3 className="font-serif text-2xl text-[#ffffff] mb-6">Delhi</h3>

            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#DAA434]">
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
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#DAA434] text-sm mb-1">
                    Our Location
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    Pocket 10, YC Co-Working Space, 3rd Floor, Plot No. 94,
                    Sector 13, Dwarka, Delhi – 110078
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#DAA434]">
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
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#DAA434] text-sm mb-1">
                    Contact Us
                  </h4>
                  <a
                    href="tel:+911140007000"
                    className="text-gray-300 hover:text-white transition-colors block text-sm"
                  >
                    +91 80763 51485
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#DAA434]">
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
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#DAA434] text-sm mb-1">
                    Email Us
                  </h4>
                  <a
                    href="tel:+911140007000"
                    className="text-gray-300 hover:text-white transition-colors block text-sm"
                  >
                    wecare@finaskvalue.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

    

      <Footer />
    </main>
  );
}
