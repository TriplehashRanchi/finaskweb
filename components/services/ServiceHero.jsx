"use client";

import React from "react";

export default function ServiceHero({ service }) {
  if (!service) return null;

  return (
    <section className="relative h-[60vh] flex flex-col justify-center overflow-hidden bg-[#0b1218]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${service.bgImage || '/service.jpg'}")`,
          backgroundSize: "cover",
           backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
         
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#00394E]/90 via-[#00394E]/30 to-[#00394E]/40" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto ">
        <h1 className="font-serif text-5xl   font-bold text-white my-6 drop-shadow-lg">
          {service.title}
        </h1>
        {service.tagline && (
          <p className="text-gray-200 text-lg  font-light leading-[1.2] max-w-2xl mx-auto">
            {service.tagline}
          </p>
        )}
      </div>
    </section>
  );
}
