"use client";
import React from "react";

const PageHero = ({ title, subtitle }) => {
  return (
    <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/contact.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.35) ",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#00394E]/90 via-[#00394E]/30 to-[#00394E]/40" />
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white my-6 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-200 text-lg md:text-xl font-light leading-[1.2] max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
