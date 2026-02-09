"use client";

import Image from "next/image";

export default function EthosSection() {
  return (
    <section id="philosophy" className=" py-24 bg-[#FDF9FB] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full">
            
            {/* LEFT COLUMN: Content */}
            <div className="w-full lg:w-[60%] px-6 md:px-16 lg:px-24 py-12 flex flex-col justify-center">
                
                {/* Intro Text */}
                <div className="mb-8">
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                        <strong className="text-[#00394E] font-bold">Wealth is not a balance sheet.</strong> It is a child’s future funded without stress. A retirement that gives back more than it takes. It is the joy of giving, the calm of knowing, the quiet power of being prepared. 
                        At <span className="text-[#00394E] font-bold">FinAsk</span>, we believe that wealth is not just grown. It is <strong className="text-[#DAA434]">stewarded</strong>—with care, with clarity, and with character.
                    </p>
                </div>

                <div className="w-full h-px bg-gray-200 mb-8" />

                {/* Section 1: The Belief */}
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                    <div className="w-full md:w-1/3">
                        <h3 className="font-serif text-3xl text-[#00394E]">The Belief</h3>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="text-gray-600 text-base leading-relaxed">
                            FinAsk was founded on a deeply personal belief: that no family should suffer because they didn’t know how to plan. Built in India. Designed for lives that dream bigger. Our clients are not accounts. They are stories in motion.
                        </p>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 mb-8" />

                {/* Section 2: Our Approach */}
                <div className="flex flex-col md:flex-row gap-8">
                     <div className="w-full md:w-1/3">
                        <h3 className="font-serif text-3xl text-[#00394E]">Our Approach</h3>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="text-gray-600 text-base leading-relaxed">
                             What sets us apart is our role as listeners first. From goal-based investments to tax-efficient structures, we partner with people not just for portfolios, but for purpose. Because numbers don’t drive us. People do. We remain present quiet custodians of your peace of mind.
                        </p>
                    </div>
                </div>

            </div>

             {/* RIGHT COLUMN: Image */}
             <div className="w-full lg:w-[34%] relative min-h-[500px] lg:min-h-auto">
                <Image 
                    src="/ethos.png" 
                    alt="FinAsk Team" 
                    fill 
                    className="object-cover object-center"
                />
             </div>

        </div>
    </section>
  );
}
