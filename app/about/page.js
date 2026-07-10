import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ValuesSection from "@/components/about/ValuesSection";
import AboutHero from "@/components/about/AboutHero";
import EthosSection from "@/components/about/EthosSection";
import WhyWeExistSection from "@/components/about/WhyWeExistSection";
import HowWeWorkSection from "@/components/about/HowWeWorkSection";
 import PurposeSection from "@/components/about/PurposeSection";
import AwardsSection from "@/components/about/AwardsSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn how FinAsk Value builds, protects and preserves wealth for individuals, families and businesses through transparent, character-led financial planning.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#b08d55] selection:text-white">

      {/* ----------------------------- */}
      {/*        HERO SECTION           */}
      {/* ----------------------------- */}
      <AboutHero />

      {/* ----------------------------- */}
      {/*        THE ETHOS              */}
      {/* ----------------------------- */}
      <EthosSection />

      {/* ----------------------------- */}
      {/*        WHY WE EXIST           */}
      {/* ----------------------------- */}
      <WhyWeExistSection />

      {/* ----------------------------- */}
      {/*        HOW WE WORK            */}
      {/* ----------------------------- */}
      <HowWeWorkSection />
      
      {/* ----------------------------- */}
      {/*        OUR VALUES           */}
      {/* ----------------------------- */}
      <ValuesSection />

      {/* ----------------------------- */}
      {/*        PURPOSE / IMPACT       */}
      {/* ----------------------------- */}
      <PurposeSection />

      {/* ----------------------------- */}
      {/*        AWARDS                 */}
      {/* ----------------------------- */}
      <AwardsSection />
     
      {/* ----------------------------- */}
      {/*        PARTNERSHIP CTA        */}
      {/* ----------------------------- */}
      <CTASection />

      <Footer />
    </main>
  );
}
