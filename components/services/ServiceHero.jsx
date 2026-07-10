"use client";

import React from "react";

export default function ServiceHero({ service }) {
  if (!service) return null;

  return (
    <section className="relative flex h-[58svh] min-h-[420px] flex-col sm:h-[65vh] sm:min-h-[500px] lg:h-[70vh] justify-center overflow-hidden bg-[#0b1218]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${service.bgImage || '/service.webp'}")`,
          backgroundSize: "cover",
          backgroundPosition: service.backgroundPosition || "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#00394E]/90 via-[#00394E]/30 to-[#00394E]/40" />

      <div className="relative z-20 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h1 className="my-4 font-serif text-4xl font-bold leading-tight text-white drop-shadow-lg sm:my-6 sm:text-5xl lg:text-6xl">
          {service.title}
        </h1>
        {service.tagline && (
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-gray-200 sm:text-lg">
            {service.tagline}
          </p>
        )}
      </div>
    </section>
  );
}
