"use client";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-brand-white text-brand-navy font-sans">
      <PageHero title="Disclaimer" />
      <div className="container mx-auto px-4 max-w-4xl py-16">
        
        <div className="space-y-6 text-lg leading-relaxed text-justify opacity-90">
            <p className="font-medium text-xl mb-4">The content on this website is for informational purposes only.</p>
            
            <ul className="list-disc pl-5 space-y-4 ">
                <li>Finask Value acts as a Financial Advisor and Financial Product Distributor and does not provide investment advisory services unless separately registered and contractually agreed.</li>
                <li>Nothing on this website constitutes a solicitation or recommendation to buy or sell securities.</li>
                <li>Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing.</li>
                <li>Insurance products are governed by policy terms and regulatory guidelines.</li>
                <li>Finask Value shall not be responsible for any loss arising from reliance on website information.</li>
            </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
