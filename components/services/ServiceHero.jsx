"use client";

import React from "react";

export default function ServiceHero({ service }) {
  if (!service) return null;

  return (
    <section className="relative flex h-[58svh] min-h-[420px] flex-col sm:h-[65vh] sm:min-h-[500px] lg:h-[70vh] justify-center overflow-hidden bg-[#0b1218]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 service-hero-bg"
        style={{
          backgroundImage: `url("${service.bgImage || '/service.webp'}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          "--bg-pos-mobile": service.mobileBackgroundPosition || service.backgroundPosition || "center",
          "--bg-pos-desktop": service.backgroundPosition || "center",
        }}
      />
      <style jsx>{`
        .service-hero-bg {
          background-position: var(--bg-pos-mobile);
        }
        @media (min-width: 640px) {
          .service-hero-bg {
            background-position: var(--bg-pos-desktop);
          }
        }
      `}</style>

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
