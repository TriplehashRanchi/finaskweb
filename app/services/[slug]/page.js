"use client";

import { use } from "react";
import { getServiceBySlug, getAllServices } from "@/data/services";

import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceContent from "@/components/services/ServiceContent";
import { notFound } from "next/navigation";

export default function ServicePage({ params }) {
  const unwrappedParams = use(params);
  const service = getServiceBySlug(unwrappedParams.slug);
  const allServices = getAllServices();

  if (!service) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#FDF9FB] text-slate-800 font-sans selection:bg-[#b08d55] selection:text-white">
      {/* HERO SECTION */}
      <ServiceHero service={service} />

      {/* MAIN CONTENT */}
      {/* MAIN CONTENT */}
      <section className="py-10   max-w-6xl mx-auto">
        <ServiceContent service={service} />
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
