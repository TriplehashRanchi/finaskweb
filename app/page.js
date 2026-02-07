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

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <VideoSection />
      <GoalSection />
      <EmpowerSection />
     
      <ServicesSection />
      <ValuesSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </>
  );
}
