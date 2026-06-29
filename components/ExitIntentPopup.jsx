'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sessionKey = 'popupShownThisSession';
    const firstVisitKey = 'popupShownFirstVisit';

    const alreadyShownThisSession = sessionStorage.getItem(sessionKey);

    const triggerPopup = () => {
      if (sessionStorage.getItem(sessionKey)) return;
      sessionStorage.setItem(sessionKey, 'true');
      localStorage.setItem(firstVisitKey, 'true');
      setShowPopup(true);
    };

    // First-visit: show after 8 seconds if never seen before
    let firstVisitTimer = null;
    if (!localStorage.getItem(firstVisitKey) && !alreadyShownThisSession) {
      firstVisitTimer = setTimeout(triggerPopup, 8000);
    }

    // Exit intent: mouse leaves viewport from the top
    const handleExitIntent = (e) => {
      if (e.clientY <= 0) {
        triggerPopup();
      }
    };

    document.documentElement.addEventListener('mouseleave', handleExitIntent);

    return () => {
      clearTimeout(firstVisitTimer);
      document.documentElement.removeEventListener('mouseleave', handleExitIntent);
    };
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-3xl bg-[#FDF9FB] p-10 md:p-20 rounded-3xl shadow-2xl transform transition-all">

        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-5 right-5 bg-[#00394E] cursor-pointer text-white p-1.5 rounded-full transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#00394E] tracking-tight font-sans">
              Ready To Achieve Your Financial Goals?
            </h2>
            <h3 className="text-xl md:text-2xl font-semi  bold text-[#00394E] tracking-tight font-sans">
              Whether It's Investment, Insurance, Tax Planning Or Wealth Creation, We Are Here To Help.
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              onClick={() => setShowPopup(false)}
              className="w-full sm:w-auto px-10 py-3.5 bg-[#D44659] hover:bg-[#b03a4b] text-white font-semibold rounded-xl transition-colors shadow-sm"
            >
              Book A Free Call
            </Link>
            <Link
              href="https://wa.me/918076351485"
              target="_blank"
              onClick={() => setShowPopup(false)}
              className="w-full sm:w-auto px-10 py-3.5 bg-transparent border focus:outline-none rounded-xl focus:ring-2 focus:ring-black border-[#00394E] text-black font-semibold transition-colors"
            >
              Connect On WhatsApp
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
