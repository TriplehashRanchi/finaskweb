"use client";

import Image from "next/image";

export default function AwardsSection() {
  return (
    <section id="awards" className="py-14 px-6 md:px-12 bg-[#FDF9FB] relative">
        <div className="max-w-7xl mx-auto text-center">
            
            <div className="mb-16">
              
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#00394E]">
                    Awards & Recognition
                </h2>
            </div>

            {/* Placeholder Grid */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Placeholders for Awards - Styled as elegant cards */}
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="aspect-[4/3] bg-white   rounded-lg flex flex-col items-center justify-center hover:shadow-xl transition-all hover:-translate-y-2 group">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#b08d55]/10 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b08d55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                        </div>
                        <span className="text-slate-800 font-bold font-serif">Award {item}</span>
                        <span className="text-xs text-slate-400 mt-1">202{item}</span>
                    </div>
                ))}
            </div>

             <div className="mt-12 p-6 bg-gray-50 rounded-lg inline-block border border-gray-100">
                <p className="text-gray-500 italic">
                    Full list of industry accolades and recognitions to be revealed.
                </p>
            </div>

        </div>
    </section>
  );
}
