'use client';
import { useState, useEffect } from 'react';
import { MessageCircle, PhoneCallIcon, X } from 'lucide-react';
import Link from 'next/link';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';

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
      <div className="relative w-full max-w-4xl bg-[#FDF9FB] p-10 md:p-20 rounded-3xl shadow-2xl transform transition-all">

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
            <h2 className="text-3xl md:text-[32px] mb-4 font-extrabold text-[#00394E] tracking-tight font-sans">
              Ready To Achieve Your Financial Goals?
            </h2>
            <h3 className="text-xl md:text-[24px] font-semi  bold text-[#00394E] tracking-tight font-sans">
              Whether It's Investment, Insurance, Tax Planning or Wealth Creation
            </h3>
            <h2 className="text-3xl md:text-3xl font-extrabold text-[#00394E] tracking-tight font-sans">
              We Are Here To Help You
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              onClick={() => setShowPopup(false)}
              className="w-full flex gap-2 sm:w-auto px-10 py-3.5 bg-[#D44659] hover:bg-[#b03a4b] text-white font-semibold rounded-xl transition-colors shadow-sm"
            >
              <PhoneCallIcon size={20}/>
              Talk To Our Certified Expert
            </Link>
            <Link
              href="https://wa.me/918076351485"
              target="_blank"
              onClick={() => setShowPopup(false)}
              className="w-full flex gap-2 sm:w-auto px-10 py-3.5 bg-green-500 border focus:outline-none rounded-xl focus:ring-2 focus:ring-black border-[#f5f5f5] text-white font-semibold transition-colors"
            >
              <SiWhatsapp color='white'/>
              Connect On WhatsApp
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
