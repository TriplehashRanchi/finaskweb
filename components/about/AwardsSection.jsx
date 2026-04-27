"use client";

import Image from "next/image";

export default function AwardsSection() {
  return (
    <section id="awards" className="py-14 px-6 md:px-12 bg-[#FDF9FB]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-5">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#00394E]">
            Awards &amp; Recognition
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["/award1.png", "/award2.png", "/award3.png"].map((src, i) => (
            <div key={i} className="relative w-full aspect-[3/4]">
              <Image
                src={src}
                alt={`Award ${i + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
