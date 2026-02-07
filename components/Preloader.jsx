
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds display time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#FDF9FB] transition-opacity duration-500 ease-in-out ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className={`relative w-64 h-32 transition-transform duration-700 ${loading ? "scale-100" : "scale-110"}`}>
        <Image
          src="/logo.webp"
          alt="FinAsk Loading..."
          fill
          className="object-contain animate-pulse"
          priority
        />
      </div>
    </div>
  );
}
