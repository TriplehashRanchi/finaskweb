"use client";

import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-16">
                  <div className="w-full md:w-1/2">
                      <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">The Stewards</h2>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          Our team is a collective of seasoned professionals, financial architects, and empathetic listeners. We don't just manage money; we manage trust.
                      </p>
                      <div className="grid grid-cols-2 gap-6">
                          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                              <h4 className="font-bold text-3xl text-[#b08d55] mb-2">15+</h4>
                              <p className="text-slate-600 text-sm">Years of Experience</p>
                          </div>
                          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                              <h4 className="font-bold text-3xl text-[#b08d55] mb-2">500+</h4>
                              <p className="text-slate-600 text-sm">Families Served</p>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image 
                        src="/about-team.png" 
                        alt="Our Team" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                  </div>
              </div>
          </div>
      </section>
  );
}
