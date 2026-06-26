"use client";

import Link from "next/link";
import { Briefcase, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/services";

const serviceItems = [
  { name: "Credit Cards", slug: "credit-cards" },
  { name: "Executor Services", slug: "executor-services" },
  { name: "Family Office", slug: "family-office" },
  { name: "Financial Literacy Workshops", slug: "financial-literacy" },
  { name: "Health Assistance", slug: "health-assistance" },
  { name: "Legal Advisory", slug: "legal-advisory" },
  { name: "NRI's Corner", slug: "nri-corner" },
  { name: "Tax Advisory", slug: "tax-advisory" },
  { name: "Trust Formation", slug: "trust-formation" },
  { name: "Will Writing", slug: "will-writing" },
  { name: "Women's Corner", slug: "women-corner" },
];

const services = serviceItems.map((item, index) => {
  const service = servicesData.find((entry) => entry.slug === item.slug);
  const description =
    service?.description?.replace(/\s+/g, " ").trim() ||
    "Explore this service with tailored guidance from FinAsk Value.";

  return {
    id: index + 1,
    title: item.name,
    description,
    link: `/services/${item.slug}`,
  };
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-[70vh] flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/image.webp")',
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00394E]/90 via-[#00394E]/30 to-[#00394E]/40" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-white my-6 drop-shadow-lg">
            Services
          </h1>
          <p className="text-gray-200 text-lg font-light leading-[1.2] max-w-md mx-auto">
            Complete Solutions Under One Roof
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="px-10 py-10 flex flex-col items-center text-center group border border-[#00394E]/40 rounded-tl-2xl rounded-br-2xl"
              >
                <div className="mb-6 p-3 rounded-full border-2 border-[#DAA434] transition-colors duration-300">
                  <Briefcase
                    strokeWidth={1.5}
                    size={32}
                    className="text-[#DAA434] transition-colors duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#00394E] mb-6 font-serif leading-tight group-hover:text-[#DAA434] transition-colors">
                  {service.title}
                </h3>

                <p
                  className="text-gray-800 text-base leading-relaxed mb-20 overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="mt-auto inline-flex items-center text-sm font-bold text-[#00394E] hover:text-[#DAA434] transition-colors uppercase tracking-wider"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
