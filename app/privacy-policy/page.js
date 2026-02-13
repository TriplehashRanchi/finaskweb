"use client";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-brand-white text-brand-navy font-sans">
      <PageHero title="Privacy Policy" />
      <div className="container mx-auto px-4 max-w-4xl py-16">
        
        <div className="space-y-8 text-lg leading-relaxed opacity-90">
            <p>
                We value client confidentiality and data protection.
            </p>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">1. Information We Collect</h2>
                <p className="mb-2">We may collect:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Personal details (name, contact details)</li>
                    <li>PAN and KYC information</li>
                    <li>Financial and investment preferences</li>
                    <li>Transaction records</li>
                    <li>Website usage data</li>
                </ul>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">2. Why We Collect Information</h2>
                <p className="mb-2">We collect data for:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Regulatory compliance (KYC/AML)</li>
                    <li>Transaction processing</li>
                    <li>Portfolio servicing</li>
                    <li>Record maintenance</li>
                    <li>Communication regarding products</li>
                    <li>Regulatory reporting</li>
                </ul>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">3. Data Sharing</h2>
                <p className="mb-2">We may share information with:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Asset Management Companies</li>
                    <li>Insurance providers</li>
                    <li>Registrars & Transfer Agents</li>
                    <li>Regulatory bodies</li>
                    <li>Authorized service partners</li>
                </ul>
                <p>We do not sell personal data.</p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">4. Data Protection</h2>
                <p>We implement reasonable security measures. However, no system can guarantee complete digital security.</p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">5. Your Rights</h2>
                <p>You may request access, correction, or update of your personal information, subject to regulatory record retention requirements.</p>
            </section>
            
        </div>
      </div>
      <Footer />
    </main>
  );
}
