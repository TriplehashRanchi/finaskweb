import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="relative h-[60vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/contact.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.35) contrast(1.1)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#00394E]/90 via-[#00394E]/30 to-[#00394E]/40" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto ">
          <h1 className="font-serif text-5xl   font-bold text-white my-6 drop-shadow-lg">We Are Here To Resolve</h1>

          <p className="text-gray-200 text-lg  font-light leading-[1.3] max-w-xl mx-auto">A Clear, Three-Level Escalation Path So Your Concern Is Heard, Resolved And Closed With Care.</p>
        </div>
      </section>
      <section className=" pt-10 px-6 md:px-12 bg-[#FDF9FB] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center">
          <div className="space-y-0">
            {/* Level 1 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-8 border-b border-slate-200 group hover:bg-white/50 transition-colors rounded-xl md:px-8">
              <div className="shrink-0">
                <span className="text-6xl md:text-7xl font-serif text-[#DAA434]/20 group-hover:text-[#DAA434] transition-colors font-bold">
                  01
                </span>
              </div>
              <div className="grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-[#FDF9FB] border border-[#00394E]/10 text-[#00394E] text-[14px] font-bold uppercase tracking-wider rounded-full">
                    Level 1
                  </span>
                  <h3 className="font-serif text-2xl text-[#00394E]">
                    Customer Care
                  </h3>
                </div>
                <p className="text-slate-500 mb-6 font-light">
                  For general queries and immediate assistance regarding your
                  policy or payments.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="mailto:wecare@finaskvalue.com"
                    className="flex items-center gap-3 text-slate-600 hover:text-[#DAA434] transition-colors group/link"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#DAA434] group-hover/link:border-[#DAA434] transition-all">
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
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="font-medium">wecare@finaskvalue.com</span>
                  </a>
                  <a
                    href="tel:+918076351485"
                    className="flex items-center gap-3 text-slate-600 hover:text-[#DAA434] transition-colors group/link"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#DAA434] group-hover/link:border-[#DAA434] transition-all">
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <span className="font-medium">+91 80763 51485</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Level 2 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-slate-200 group hover:bg-white/50 transition-colors rounded-xl md:px-8">
              <div className="shrink-0">
                <span className="text-6xl md:text-7xl font-serif text-[#DAA434]/20 group-hover:text-[#DAA434] transition-colors font-bold">
                  02
                </span>
              </div>
              <div className="grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-[#FDF9FB] border border-[#00394E]/10 text-[#00394E] text-[14px] font-bold uppercase tracking-wider rounded-full">
                    Level 2
                  </span>
                  <h3 className="font-serif text-2xl text-[#00394E]">
                    Head of Service
                  </h3>
                </div>
                <p className="text-slate-500 mb-6 font-light">
                  If your concern remains unresolved after contacting Level 1.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="mailto:shradhamittal@finaskvalue.com"
                    className="flex items-center gap-3 text-slate-600 hover:text-[#DAA434] transition-colors group/link"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#DAA434] group-hover/link:border-[#DAA434] transition-all">
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
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="font-medium break-all">
                      shradhamittal@finaskvalue.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Level 3 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-12 group hover:bg-white/50 transition-colors rounded-xl md:px-8">
              <div className="shrink-0">
                <span className="text-6xl md:text-7xl font-serif text-[#00394E]/20 group-hover:text-[#00394E] transition-colors font-bold">
                  03
                </span>
              </div>
              <div className="grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-[#00394E] text-white text-[14px] font-bold uppercase tracking-wider rounded-full">
                    Level 3
                  </span>
                  <h3 className="font-serif text-2xl text-[#00394E]">
                    Chief Grievance Officer
                  </h3>
                </div>
                <p className="text-slate-500 mb-6 font-light">
                  Final authority for critical issues that require high-level
                  intervention.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="mailto:palashmalik@finaskvalue.com"
                    className="flex items-center gap-3 text-slate-600 hover:text-[#DAA434] transition-colors group/link"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#DAA434] group-hover/link:border-[#DAA434] transition-all">
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
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="font-medium break-all">
                      palashmalik@finaskvalue.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default page;
