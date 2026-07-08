import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";

const GoogleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function RatingCard() {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl p-6 mb-8   flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-5 w-full md:w-auto">
        <div className="w-[72px] h-[72px] bg-[#F3F4F6] rounded-lg flex items-center justify-center shrink-0">
          <GoogleIcon />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <div className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-[18px] h-[18px] fill-[#00394E] text-[#00394E]" />
              ))}
              <div className="relative w-[18px] h-[18px]">
                <Star className="absolute inset-0 w-[18px] h-[18px] fill-[#E2E8F0] text-[#E2E8F0]" />
                <div className="absolute inset-y-0 left-0 overflow-hidden w-[60%]">
                   <Star className="w-[18px] h-[18px] fill-[#00394E] text-[#00394E]" />
                </div>
              </div>
            </div>
            <span className="text-[#00394E] font-semibold text-[0.95rem]">4.9/5</span>
          </div>
          <h4 className="text-slate-800 font-medium text-[1.1rem] leading-tight mb-0.5">Read what our customers have to say</h4>
          <p className="text-slate-500 text-[0.85rem] mb-1.5">Rated 4.9/5 with over 100+ reviews on Google</p>
         </div>
      </div>
      
      <div className="w-full md:w-auto flex justify-end">
        <Link href="/contact" className="bg-[#D44659] cursor-pointer hover:bg-[#b03548] text-white font-semibold py-2.5 px-6 rounded-lg transition-colors">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
