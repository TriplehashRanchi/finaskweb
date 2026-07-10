"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ScheduleCallModal from "@/components/ScheduleCallModal";

export default function ScheduleCallTrigger() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [portalContainer, setPortalContainer] = useState(null);

  useEffect(() => {
    const container = document.createElement("div");
    container.setAttribute("data-schedule-call-portal", "");
    document.body.appendChild(container);
    setPortalContainer(container);

    return () => {
      container.remove();
    };
  }, []);

  useEffect(() => {
    if (!isScheduleOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsScheduleOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isScheduleOpen]);

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

      {portalContainer && isScheduleOpen && createPortal(
        <div
          className="fixed inset-0 z-[10000] flex items-start justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-sm sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Schedule a call"
          onClick={() => setIsScheduleOpen(false)}
        >
          <div
            className="relative my-auto w-full max-w-xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain rounded-lg bg-white shadow-2xl sm:max-h-[90vh]"
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
        </div>,
        portalContainer
      )}
    </>
  );
}
