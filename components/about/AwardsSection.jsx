"use client";

import Image from "next/image";

export default function AwardsSection() {
  return (
    <section id="awards" className="py-24 px-6 md:px-12 bg-[#FDF9FB] relative">
        <div className="max-w-7xl mx-auto text-center">
            
            <div className="mb-16">
              
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#00394E]">
                    Awards & Recognition
                </h2>
            </div>

            {/* Placeholder Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="aspect-[4/3] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center p-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse" />
                            <p className="text-gray-400 text-sm font-medium">Award Details Coming Soon</p>
                        </div>
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
