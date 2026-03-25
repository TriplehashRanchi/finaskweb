"use client";

import Image from "next/image";

export default function PurposeSection() {
  return (
    <section id="purpose" className="  bg-[#FDF9FB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-0">
                
                {/* LEFT: Tall Image */}
                <div className="relative w-full lg:w-[45%] h-[600px] z-0   overflow-hidden shadow-2xl">
                    <Image 
                        src="/purpose.webp" 
                        alt="Purpose Beyond Profit" 
                        fill 
                        className="object-cover object-center" 
                    />
                </div>

                {/* RIGHT: Content Card (Vertically Centered & Smaller) */}
                <div className="w-full lg:w-[55%] z-10 -ml-0 lg:-ml-25 mt-8 lg:mt-0">
                    <div className="bg-[#001F2B] p-10 md:p-14    flex flex-col justify-center min-h-[400px]">
                        
                        {/* Header Section */}
                        <div className="mb-8">
                           
                            <h2 className="font-serif text-4xl md:text-3xl font-bold text-[#F5F5F5] mb-6 leading-tight">
                                Purpose Beyond <span className=" text-[#DAA434]">Profit</span>
                            </h2>
                            
                     
                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light ">
                                <strong className="text-[#F5F5F5] font-bold">True wealth is measured by the good it does.</strong> Our success is intrinsically linked to the well-being of the communities we serve.
                            </p>
                        </div>

                        {/* User Content: Concise Paragraphs */}
                        <div className=" text-lg text-gray-400 leading-relaxed text-justify">
                            <p className="mb-4">
                                <strong className="text-[#F5F5F5] font-medium ">Financial Literacy & Legacy:</strong> Through workshops and our "1% Pledge", we empower the next generation with the knowledge to build lasting legacies. We prepare heirs not just to inherit wealth, but to steward values, philanthropy, and family unity.
                            </p>
                            <div className="w-full h-px bg-gray-100/80" />
                            <p className="mt-4">
                                <strong className="text-[#F5F5F5] font-medium">Sustainable Growth & Community:</strong> We invest in businesses and initiatives that prioritize ethical practices and build a better future for all. Success is shared we actively participate in and contribute to the local ecosystems where we operate.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}