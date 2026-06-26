'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    // Check if it has been shown in this session
    const shown = sessionStorage.getItem('exitIntentShown');
    if (shown) {
      setHasShown(true);
    }

    const mouseEvent = (e) => {
      // Trigger when mouse leaves mainly from the top
      if (e.clientY <= 20) {
        if (!hasShown && !sessionStorage.getItem('exitIntentShown')) {
          setShowPopup(true);
          setHasShown(true);
          sessionStorage.setItem('exitIntentShown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', mouseEvent);

    return () => {
      document.removeEventListener('mouseleave', mouseEvent);
    };
  }, [hasShown]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-3xl bg-[#FDF9FB] p-10 md:p-20 rounded-3xl shadow-2xl transform transition-all">
        
        {/* Close Button */}
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute top-5 right-5 bg-[#00394E] cursor-pointer text-white p-1.5 rounded-full  transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#00394E]  tracking-tight font-sans">
              Ready To Achieve Your Financial Goals?
            </h2>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#00394E] tracking-tight font-sans">
              Whether It's Investment, Insurance, Tax Planning Or Wealth Creation, We Are Here To Help.
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact" onClick={() => setShowPopup(false)} className="w-full sm:w-auto px-10 py-3.5 bg-[#D44659] hover:bg-[#b03a4b] text-white font-semibold rounded-xl transition-colors shadow-sm">
              Book A Free Call
            </Link>
            <Link href="https://wa.me/918076351485" target="_blank" onClick={() => setShowPopup(false)} className="w-full sm:w-auto px-10 py-3.5 bg-transparent border focus:outline-none rounded-xl focus:ring-2 focus:ring-black border-[#00394E]   text-black font-semibold   transition-colors">
              Connect On WhatsApp
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
