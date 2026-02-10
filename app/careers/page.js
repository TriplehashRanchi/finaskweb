"use client";


import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#b08d55] selection:text-white">


      {/* ----------------------------- */}
      {/*        HERO SECTION           */}
      {/* ----------------------------- */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/banner1.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.3) contrast(1.2)",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0b1218] via-transparent to-black/60" />
        
        {/* Vertical Lines */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
            <div className="absolute top-0 bottom-0 left-[16.33%] w-px bg-[#ffcca8]" />
            <div className="absolute top-0 bottom-0 left-[50%] w-[2px] bg-[#ffcca8]" />
            <div className="absolute top-0 bottom-0 left-[83.66%] w-px bg-[#ffcca8]" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <h5 className="text-[#b08d55] uppercase tracking-[0.3em] text-xs md:text-xs font-bold mb-6 animate-fade-in-up border border-[#b08d55]/30 inline-block px-4 py-1 rounded-full backdrop-blur-sm">
            Join Our Team
          </h5>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Where Purpose <br />
            <span className="italic font-light text-[#dfa882] relative">
              Meets Profession
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#b08d55] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            We’re building a team that redefines financial wellbeing in India and beyond.
          </p>
        </div>
      </section>

      {/* ----------------------------- */}
      {/*        THE ETHOS (Split)      */}
      {/* ----------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 relative z-10">
                <span className="inline-block w-16 h-1 bg-[#b08d55] mb-8"></span>
                <h2 className="font-serif text-4xl md:text-6xl text-slate-900 mb-8 leading-tight">
                    Responsibility <br/> <span className="text-[#b08d55] italic">Before Revenue</span>
                </h2>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                    <p>
                        If you believe in <strong className="text-slate-900 font-medium">empathy before execution</strong>, we’d love to hear from you.
                    </p>
                    <p>
                        At FinAsk, we don't just hire employees; we invite custodians of trust. We are looking for individuals who understand that behind every portfolio is a person, a family, and a dream.
                    </p>
                    <p>
                        We are not in the business of selling. We are in the business of solving.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-4">
                            <div className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden"><Image src="/testimonial-michael.png" alt="Team" fill className="object-cover" /></div>
                            <div className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden"><Image src="/testimonial-sarah.png" alt="Team" fill className="object-cover" /></div>
                            <div className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden"><Image src="/testimonial-andrew.png" alt="Team" fill className="object-cover" /></div>
                        </div>
                        <p className="text-sm font-medium text-slate-500">Join 50+ visionaries</p>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl group">
                 <Image 
                    src="/about-detail.png" 
                    alt="Team Discussion" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
                    <p className="font-serif italic text-slate-800 text-lg">"The best way to predict the future is to create it."</p>
                </div>
            </div>
        </div>
      </section>

  

 

      {/* ----------------------------- */}
      {/*        OPEN POSITIONS         */}
      {/* ----------------------------- */}
      <section className="py-24 px-6 md:px-12 bg-[#0b1218] text-white relative">
     
        <div className="max-w-5xl mx-auto relative z-10">
        
     
            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#b08d55] to-[#dfa882] text-center">
                <h3 className="font-serif text-2xl font-bold text-white mb-4">Don't see a role that fits?</h3>
                <p className="text-white/90 mb-8 max-w-xl mx-auto">We are always looking for exceptional talent. If you think you can make a difference, we want to hear from you.</p>
                <a href="mailto:careers@finask.com" className="inline-flex items-center gap-2 bg-white text-[#b08d55] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                    Send us your resume
                </a>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
