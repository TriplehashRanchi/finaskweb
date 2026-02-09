"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] flex flex-col items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://bizfic.themeht.com/wp-content/uploads/2025/06/04.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.35) ",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#00394E]/90 via-[#00394E]/30 to-[#00394E]/40" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto ">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white my-6 drop-shadow-lg">
          Who Are We
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light leading-[1.2] max-w-2xl mx-auto">
          Stewarding wealth with character. Built in India, designed for lives
          that dream bigger.
        </p>
      </div>
    </section>
  );
}
