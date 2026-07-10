import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
 import VideoSection from "@/components/VideoSection";
import GoalSection from "@/components/GoalSection";
import EmpowerSection from "@/components/EmpowerSection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
 import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FinAsk Value | Wealth Management, Investment & Financial Planning",
  description:
    "FinAsk Value helps individuals, families and businesses build, protect and grow wealth through personalized investment, tax and financial planning services across India.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      {/* <VideoSection /> */}
      <GoalSection />
      <EmpowerSection />
     
      {/* <ServicesSection /> */}
      <ValuesSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </>
  );
}
