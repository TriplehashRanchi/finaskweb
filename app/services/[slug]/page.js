"use client";

import { use } from "react";
import { getServiceBySlug, getAllServices } from "@/data/services";

import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceHero from "@/components/services/ServiceHero";
 import ServiceContent from "@/components/services/ServiceContent";
import { notFound } from "next/navigation";

export default function ServicePage({ params }) {
  const unwrappedParams = use(params);
  const service = getServiceBySlug(unwrappedParams.slug);
  const allServices = getAllServices();

  if (!service) {
    return notFound();
  }

  const hideFaqSlugs = ['family-office', 'nri-corner', 'nri-services', 'women-corner'];
  const hideFaq = hideFaqSlugs.includes(unwrappedParams.slug);

  return (
    <main className="min-h-screen bg-[#FDF9FB] text-slate-800 font-sans selection:bg-[#b08d55] selection:text-white">
      {/* HERO SECTION */}
      <ServiceHero service={service} />

      {/* MAIN CONTENT */}
      {/* MAIN CONTENT */}
      <section className="py-10   max-w-6xl mx-auto">
        <ServiceContent service={service} hideFaq={hideFaq} />
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
