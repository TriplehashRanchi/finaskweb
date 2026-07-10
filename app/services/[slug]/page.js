import { getServiceBySlug, getAllServices } from "@/data/services";
import { allInsuranceMenuItems } from "@/data/insuranceMenu";
import { ROADSIDE_ASSISTANCE_LIVE } from "@/data/featureFlags";

import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceHero from "@/components/services/ServiceHero";
 import ServiceContent from "@/components/services/ServiceContent";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";

function isOnHold(slug) {
  const isInsurance = allInsuranceMenuItems.some((item) => item.slug === slug);
  const isRoadsideAssistance =
    slug === "roadside-assistance" && !ROADSIDE_ASSISTANCE_LIVE;
  return isInsurance || isRoadsideAssistance;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const description =
    service.description?.replace(/\s+/g, " ").trim().slice(0, 160) ||
    `Explore ${service.title} with tailored guidance from FinAsk Value.`;

  return buildMetadata({
    title: service.title,
    description,
    path: `/services/${slug}`,
    noIndex: isOnHold(slug),
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const allServices = getAllServices();

  if (!service) {
    return notFound();
  }

  const hideFaqSlugs = ['family-office', 'nri-corner', 'nri-services', 'women-corner'];
  const hideFaq = hideFaqSlugs.includes(slug);

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
