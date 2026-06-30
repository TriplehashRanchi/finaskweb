"use client";
import React, { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

const USP_DISCLAIMER_TEXT =
  "* Features, support timelines and coverage are subject to policy/product terms, insurer guidelines and applicable conditions.";

function hasAsterisk(...values) {
  return values.flat().some(
    (v) => typeof v === "string" && v.includes("*")
  );
}

function UspDisclaimerNote({ light = false, className = "" }) {
  return (
    <p
      className={`text-xs mt-3 text-center ${light ? "text-white/70" : "text-slate-500"} ${className}`}
    >
      {USP_DISCLAIMER_TEXT}
    </p>
  );
}

// Layout 2: Horizontal Ribbon (Updated to Family Promo Layout)
export function HorizontalRibbon({ promoTitle, promoText, promoBadges }) {
  return (
    <div className="w-[100vw] ml-[calc(-50vw+50%)] bg-[#F0F4F8] py-6 px-6  border-y border-blue-50/50">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Content & Cards */}
        <div className="w-full lg:w-2/3">
          <h3 className="font-sans text-3xl md:text-[1.8rem] font-medium capitalize text-[#D44659] leading-tight mb-2 pr-0 lg:pr-12">
            {promoTitle}
          </h3>
          <h3 className="font-sans text-3xl md:text-[2.4rem] font-medium capitalize leading-[1] text-[#00394E]  mb-10 pr-0 lg:pr-12">
            {promoText}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6   flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2196F3]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold capitalize text-[#00394E] text-[1.1rem] mb-0.5 leading-tight">
                  {promoBadges[0] || "45 Lacs+"}
                </p>
                
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6   flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2196F3]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <p className="font-bold capitalize text-[#00394E] text-[1.1rem] mb-0.5 leading-tight">
                  {promoBadges[1] || "45 Lacs+"}
                </p>
               
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2196F3]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <div>
                <p className="font-bold capitalize text-[#00394E] text-[1.1rem] mb-0.5 leading-tight">
                  {promoBadges[2] || "45 Lacs+"}
                </p>

              </div>
            </div>
          </div>
          {hasAsterisk(promoBadges) && <UspDisclaimerNote />}
        </div>

        {/* Right Side: Image with organic mask */}
        <div className="w-full lg:w-1/3 flex justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[320px] bg-[#F4D7DE] rounded-[3rem] -z-10 ml-6 mt-6"></div>
          <div className="w-[250px] h-[300px] relative rounded-b-[10rem] rounded-t-[3.4rem] overflow-hidden  bo  border-white bg-white">
            <img
              src="/family-promo.png"
              alt="Happy Family"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Layout 2b: Horizontal Ribbon - Business variant
export function HorizontalRibbonBusiness({ promoTitle, promoText, promoBadges }) {
  return (
    <div className="w-[100vw] ml-[calc(-50vw+50%)] bg-[#F0F4F8] py-6 px-6  border-y border-blue-50/50">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Content & Cards */}
        <div className="w-full lg:w-2/3">
          <h3 className="font-sans text-3xl md:text-[1.8rem] font-medium capitalize text-[#D44659] leading-tight mb-2 pr-0 lg:pr-12">
            {promoTitle}
          </h3>
          <h3 className="font-sans text-3xl md:text-[2.4rem] font-medium capitalize leading-[1] text-[#00394E]  mb-10 pr-0 lg:pr-12">
            {promoText}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6   flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2196F3]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold capitalize text-[#00394E] text-[1.1rem] mb-0.5 leading-tight">
                  {promoBadges[0] || "45 Lacs+"}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6   flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2196F3]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <p className="font-bold capitalize text-[#00394E] text-[1.1rem] mb-0.5 leading-tight">
                  {promoBadges[1] || "45 Lacs+"}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2196F3]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <div>
                <p className="font-bold capitalize text-[#00394E] text-[1.1rem] mb-0.5 leading-tight">
                  {promoBadges[2] || "45 Lacs+"}
                </p>
              </div>
            </div>
          </div>
          {hasAsterisk(promoBadges) && <UspDisclaimerNote />}
        </div>

        {/* Right Side: Image with organic mask */}
        <div className="w-full lg:w-1/3 flex justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[320px] bg-[#F4D7DE] rounded-[3rem] -z-10 ml-6 mt-6"></div>
          <div className="w-[250px] h-[300px] relative rounded-b-[10rem] rounded-t-[3.4rem] overflow-hidden border-white bg-white">
            <img
              src="/businessribbon2.png"
              alt="Business Insurance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Layout 6: Floating Pills (Above FAQ)
export function FloatingPills({ promoTitle, promoText, promoBadges }) {
  return (
    <div className="w-full px-10 py-16 rounded-xl text-center bg-white">
      {/* <h3 className=" text-2xl capitalize text-[#D44659]  font-medium">{promoText}</h3> */}
      {/* <p className=" text-4xl capitalize text-[#00394E] leading-tight mb-8 font-medium">
        {promoTitle}
      </p> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg bg-[#C8F0B0] px-4 py-3 text-center content-center text-sm font-semibold text-[#245633] ">
          <p className="text-lg font-bold capitalize text-[#00394E]">{promoBadges[0]}</p>
        </div>
        <div className="rounded-lg bg-[#C9DCF8] px-4 py-3 text-center content-center text-sm font-semibold text-[#1D4C8F] ">
          <p className="text-lg font-bold capitalize text-[#00394E]">{promoBadges[1]}</p>
        </div>
        <div className="rounded-lg bg-[#F0F4F8] px-4 py-3 text-center content-center text-sm font-semibold text-[#00394E] ">
          <p className="text-lg font-bold capitalize text-[#00394E]">{promoBadges[2]}</p>
        </div>
      </div>
      {hasAsterisk(promoBadges) && <UspDisclaimerNote />}
    </div>
  );
}

// Layout 7: Bottom Sticky Banner (Appears on scroll)
export function BottomStickyBanner({ promoTitle, promoText, promoBadges }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isClosed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="bg-[#F0F4F8] w-full  mx-auto rounded-t-2xl  shadow-[0_-10px_40px_rgba(0,0,0,0.15)] px-20 py-8 flex flex-col md:flex-row items-center justify-between gap-6 relative border-t border-[#E2E8F0]">
        <button
          onClick={() => setIsClosed(true)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-500  transition z-10"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L13 13M1 13L13 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-6 w-full md:w-auto md:pl-32">
          {/* Image pinned to absolute bottom */}
          <div className="hidden md:flex absolute bottom-0 left-12 z-10 pointer-events-none">
            <img
              src="/image.png"
              alt=""
              className="h-[7rem] object-contain object-bottom drop-shadow-md"
            />
          </div>

          <div className="flex-1 relative z-20">
            <h3 className="  text-4xl capitalize text-[#00394E] leading-tight font-medium mb-2">
              {promoText}
            </h3>
            <p className=" text-[1.4rem] capitalize font-semibold text-[#D44659] leading-tight">
              {promoTitle}
            </p>
            {hasAsterisk(promoTitle, promoText) && <UspDisclaimerNote />}
          </div>
        </div>

        <div className="flex flex-col items-start w-full md:w-auto shrink-0">
          <Link className="bg-[#D44659] hover:bg-[#b03548] text-white px-6 py-3 rounded-lg font-semibold text-[0.95rem] transition-colors whitespace-nowrap flex items-center gap-2" href="/contact">
            Contact Now
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Layout 8: Bottom Sticky Blue Variant
export function BottomStickyBlue({ promoTitle, promoText, promoBadges }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isClosed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="bg-[#00394E] w-full  mx-auto rounded-t-2xl  shadow-[0_-10px_40px_rgba(0,0,0,0.25)] px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-40 relative">
        <button
          onClick={() => setIsClosed(true)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition shadow-sm z-10"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L13 13M1 13L13 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="hidden md:flex flex-col items-center justify-end shrink-0 relative ">
            <img src="/investmentBtmstickyImg.svg" alt="" className="h-24" />
          </div>

          <div className="flex flex-col">
            <p className="text-[#DAA434] text-3xl capitalize leading-tight font-medium mb-1">
              {promoTitle}
            </p>
            <h3 className="font-sans text-[1.6rem] md:text-[2rem] font-semibold capitalize text-white leading-tight">
              {promoText}
            </h3>
            {hasAsterisk(promoTitle, promoText) && <UspDisclaimerNote light />}
          </div>
        </div>

        <div className="flex flex-col items-cente  w-full md:w-auto shrink-0 md:pr-10">
          <Link className="bg-[#D44659] hover:bg-[#b03548] text-white px-8 py-3 rounded-lg font-bold text-[1rem] transition-colors whitespace-nowrap flex items-center gap-2 mb-2 shadow-md" href="/contact">
            Contact Now
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Layout 9: Scroll Popup Modal
export function ScrollPopupModal({ promoTitle, promoText, promoBadges }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true); // Only trigger once
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasTriggered]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 transition-opacity"
        onClick={() => setIsVisible(false)}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header / Graphic */}
        <div className="  p-8 text-center relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 w-8 h-8 bg-[#00394E] rounded-full flex items-center justify-center text-white   transition"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L13 13M1 13L13 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="w-50 h-50 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-white/20">
            <img src="/image1.webp" alt="" />
          </div>

          <p className="text-[#DAA434] capitalize font-medium text-[1.1rem] md:text-[1.4rem] mb-1 leading-tight">
            {promoTitle}
          </p>
          <h3 className=" text-4xl font-semibold capitalize text-[#00394E] leading-[1]">
            {promoText}
          </h3>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="flex items-center justify-between  gap-3 mb-6">
            <div className="rounded-lg bg-[#C8F0B0] px-4 py-3 text-center text-sm  font-semibold text-[#245633] ">
              <p className="text-lg capitalize font-semibold text-[#00394E]">
                {promoBadges[0]}
              </p>
            </div>
            <div className="rounded-lg bg-[#C9DCF8] px-4 py-3 text-center text-sm font-semibold text-[#1D4C8F] ">
              <p className="text-lg font-semibold capitalize text-[#00394E]">
                {promoBadges[1]}
              </p>
            </div>
          </div>
          {hasAsterisk(promoBadges) && <UspDisclaimerNote />}
        </div>
      </div>
    </div>
  );
}

export function PromoUSPRenderer({
  layoutType,
  promoTitle,
  promoText,
  promoBadges,
}) {
  const props = { promoTitle, promoText, promoBadges };
  switch (layoutType) {
    case "horizontal-ribbon":
      return <HorizontalRibbon {...props} />;
    case "horizontal-ribbon-business":
      return <HorizontalRibbonBusiness {...props} />;
    case "floating-pills":
      return <FloatingPills {...props} />;
    case "bottom-sticky-banner":
      return <BottomStickyBanner {...props} />;
    case "bottom-sticky-blue":
      return <BottomStickyBlue {...props} />;
    case "scroll-popup-modal":
      return <ScrollPopupModal {...props} />;
    default:
      return null;
  }
}
