"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ServiceSidebar({ service, allServices }) {
  if (!service || !allServices) return null;

  return (
    <aside className="w-full lg:w-1/3 space-y-8">
      {/* Service Navigation */}
      <div className="bg-[#f8f5f2] rounded-2xl p-6 border border-[#b08d55]/10">
        <h3 className="font-serif text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span className="w-5 h-2 bg-[#b08d55] rounded-full"></span>
          Our Services
        </h3>
        <ul className="space-y-3">
          {allServices
            .filter((s) => s.category === service.category)
            .map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className={`flex items-center justify-start gap-3 px-5 py-3 rounded-full transition-all font-medium text-sm border ${
                    s.slug === service.slug
                      ? "bg-[#b08d55] text-white border-[#b08d55] shadow-md"
                      : "bg-white text-slate-600 border-slate-100 hover:border-[#b08d55] hover:text-[#b08d55] shadow-sm"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={
                      s.slug === service.slug
                        ? "text-white"
                        : "text-[#b08d55]"
                    }
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  {s.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Downloads */}
      <div className="bg-white rounded-2xl px-6 py-3 border border-slate-100  ">
        <div className="bg-white rounded-xl">
          {/* Item 1 */}
          <div className="flex items-center justify-between py-4 border-b border-slate-100 group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1f2937] flex items-center justify-center text-white shrink-0 group-hover:bg-[#b08d55] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">
                  Business Broucher.doc
                </p>
                <p className="text-xs text-slate-500 mt-1">78 KB</p>
              </div>
            </div>
            <div className="text-slate-400 group-hover:text-[#b08d55] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between py-4 group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1f2937] flex items-center justify-center text-white shrink-0 group-hover:bg-[#b08d55] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">
                  Company Flow.pdf
                </p>
                <p className="text-xs text-slate-500 mt-1">58 KB</p>
              </div>
            </div>
            <div className="text-slate-400 group-hover:text-[#b08d55] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-gradient-to-br from-[#1f2937] to-[#0b1218] rounded-2xl p-8 py-30 text-white relative overflow-hidden text-center group">
        <div className="absolute inset-0 bg-[url('/building.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="relative z-10 flex flex-col items-center">
          <h3 className="font-serif text-5xl font-bold mb-6 tracking-widest">
            FINASK<span className="text-[#b08d55]">.</span>
          </h3>
          <p className="text-xl font-medium mb-8 leading-snug">
            Unlock Your Financial Potential Today!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-bold text-sm transition-all uppercase tracking-wider"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>
      </div>
    </aside>
  );
}
