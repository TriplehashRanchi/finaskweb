"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="">
     

      <div className="relative w-full h-[500px] lg:h-[100vh]">
        <video
          src="/happy-family.webm"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* <div className="absolute inset-0 bg-[#00394E]/20"></div> */}
      </div>
    </section>
  );
}
