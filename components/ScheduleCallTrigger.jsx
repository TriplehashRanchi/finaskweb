"use client";

import { useState } from "react";
import ScheduleCallModal from "@/components/ScheduleCallModal";

export default function ScheduleCallTrigger() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsScheduleOpen(true)}
        className="group p-10 flex flex-col items-center justify-center text-center hover:bg-[#FDF9FB] transition-all duration-300 cursor-pointer relative overflow-hidden"
      >
        <div className="w-14 h-14 rounded-full bg-[#DAA434]/10 text-[#DAA434] flex items-center justify-center mb-6 group-hover:bg-[#DAA434] group-hover:text-white transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <h4 className="font-serif text-2xl text-[#00394E] mb-2 group-hover:font-bold transition-all">
          Schedule a call
        </h4>
        <p className="text-md text-slate-500 font-normal uppercase tracking-wide">
          Advisor Support
        </p>
      </button>

      {isScheduleOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setIsScheduleOpen(false)}
        >
          <div
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsScheduleOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-[#00394E] text-white flex items-center justify-center hover:bg-[#DAA434] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ScheduleCallModal onClose={() => setIsScheduleOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
