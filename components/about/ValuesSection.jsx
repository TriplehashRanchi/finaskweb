"use client";

import Image from "next/image";

const values = [
   {
    id: 1,
    title: "Caring People Before Numbers",
    description:
      "Behind every investment is a life story. We show up with empathy, clarity, and honesty — simplifying complexity and never promising what we can’t deliver. Clients and team members both feel seen, respected, and supported here.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Transparency No Fine Print",
    description:
      "Every plan, product, and strategy revolves around what’s best for you. We don’t just serve clients — we advocate for them with precision, care, and responsibility.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Spam-Free Your Time Is Sacred",
    description:
      "No noisy chasing, no pushy selling, no unnecessary interruptions. We respect your focus and space — delivering value with intention. Peace of mind comes before pressure.",
   icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Growth Mindset We Grow by Growing You",
    description:
      "We believe in evolution, not just returns. Clients grow wealth the right way, and our team grows with learning, support, and opportunity. No one is stuck — everyone is supported.",
   icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    )
  },
 {
    id: 5,
    title: "Co-Creation of Wealth Win-Win Only",
    description:
      "We build wealth with clients, not just for them. Every milestone client success, advisor growth, company progress is shared effort and shared reward. We believe in shared credit and shared growth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Collaboration Built Together",
    description:
      "Great outcomes need teamwork. We partner with top insurers, fund managers, and experts while internally breaking silos and sharing credit. Results improve when egos leave and collaboration leads.",
   icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      </svg>
    )
  },
  {
    id: 7,
    title: "Customer Obsession We Champion You",
    description:
      "Every plan, product, and strategy revolves around what’s best for you. We don’t just serve clients — we advocate for them with precision, care, and responsibility.",
  icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    )
  },
  {
    id: 8,
    title: "Respect Human First Culture",
    description:
      "Respect flows both ways here — across clients, advisors, and teams. When people feel valued, clarity, commitment, and success naturally follow. Human values come before business metrics.",
       icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )
  },
];

export default function ValuesSection() {
  return (
    <section id="values" className="py-14 px-6   bg-[#FDF9FB] ">
        <div className="max-w-8xl mx-auto">
             <div className="text-center mb-16">
              
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#00394E] mb-4">
                       Our Core Principles
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                    Values that guide our advice and define our character.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {values.map((value, index) => (
                    <div 
                        key={index} 
                        className="group relative h-[380px] bg-white   overflow-hidden cursor-pointer transition-all duration-300"
                    >
                     

                        {/* Hover Overlay (Navy Slide) */}
                        <div className="absolute inset-0 bg-[#00394E] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-10"></div>

                        {/* Content Container */}
                        <div className="absolute inset-0 p-8 flex flex-col items-start justify-center z-20 transition-all duration-500 group-hover:items-start">
                            
                            {/* Icon */}
                            <div className="mb-6 text-[#DAA434] bg-orange-50 p-2 rounded-xl group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
                                {value.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-[#00394E] mb-3 font-serif group-hover:text-white transition-colors duration-500 delay-75">
                                {value.title}
                            </h3>

                            {/* Description (Always Visible) */}
                            <div className="transition-all duration-500 overflow-hidden">
                                <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed mt-2 transition-colors duration-500">
                                    {value.description}
                                </p>
                            </div>

                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
