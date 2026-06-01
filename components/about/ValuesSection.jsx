"use client";

import Image from "next/image";

const values = [
  {
    id: 1,
    title: "Caring For People Before Numbers",
    description:
      "Behind every number is a life story. We lead with empathy, respect, clarity and honesty—because financial decisions are deeply personal, not just numerical.",
    icon: "/values-icons/value-1.png",
  },
  {
    id: 2,
    title: "Transparency - No Fine Print",
    description:
      "No hidden clauses. No surprises. We believe in absolute clarity—so you understand every recommendation, every cost and every commitment before you move forward. ",
    icon: "/values-icons/value-2.png",
  },
  {
    id: 3,
    title: "	Spam-Free - Your Time Is Sacred",
    description:
    "No noise chasing, no pushy selling, no unnecessary interruptions. We respect your focus and space — delivering value with intention. Peace of mind comes before pressure. ",
     icon: "/values-icons/value-3.png",
  },
  {
    id: 4,
    title: "	Growth Mindset - We Grow by Growing You ",
    description:
      "We believe in evolution, not just returns. Clients grow wealth the right way and our team grows with learning, support and opportunity. No one is stuck — everyone is supported. ",
    icon: "/values-icons/value-4.png",
  },
  {
    id: 5,
    title: "Co-Creation of Wealth - Win-Win Only",
    description:
      "We build wealth with clients, not just for them. Every milestone — client success, advisor growth, company progress is both a shared effort and a shared reward. We believe in sharing credit and growing together.",
    icon: "/values-icons/value-5.png",
  },
  {
    id: 6,
    title: "Built on Collaboration & Trust",
    description:
      "Great outcomes are built through teamwork. We partner with top insurers, fund managers and experts while internally breaking silos and sharing credit. Results improve when egos leave and collaboration leads.",
    icon: "/values-icons/value-6.png",
  },
  {
    id: 7,
    title: "Customer Obsession - We Champion You",
    description:
      "Every decision starts with you. We do not just serve clients—we advocate for them, ensuring every plan, product and strategy is aligned with what is truly in your best interest.",
    icon: "/values-icons/value-7.png",
  },
];

export default function ValuesSection() {
  return (
    <section id="values" className="py-14 px-6 scroll-mt-[100px]    bg-[#FDF9FB] ">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#00394E] mb-4">
            Our Core Principles
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Values that shape our decisions and define our character. 
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative h-[380px] w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] bg-white overflow-hidden cursor-pointer transition-all duration-300"
            >
              {/* Hover Overlay (Navy Slide) */}
              <div className="absolute inset-0 bg-[#00394E] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-10"></div>

              {/* Content Container */}
              <div className="absolute inset-0 p-8 pt-12 flex flex-col items-start justify-start z-20 transition-all duration-500 group-hover:items-start">
                {/* Icon */}
                <div className="mb-6 text-[#DAA434] bg-orange-50 p-2 rounded-xl group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain transition duration-500 [filter:brightness(0)_saturate(100%)_invert(72%)_sepia(47%)_saturate(749%)_hue-rotate(359deg)_brightness(92%)_contrast(87%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(100%)]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#00394E] mb-3 font-serif group-hover:text-white transition-colors duration-500 delay-75">
                  {value.title}
                </h3>

                {/* Description (Always Visible) */}
                <div className="transition-all duration-500 overflow-hidden">
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed mt-2 transition-colors duration-500">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
