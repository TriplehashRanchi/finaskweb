"use client";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-brand-white text-brand-navy font-sans">
      <PageHero title="Terms & Conditions" />
      <div className="container mx-auto px-4 max-w-4xl py-16">
        
        <div className="space-y-8 text-lg text-justify leading-relaxed opacity-90">
            <p>
                By accessing or using this website, you agree to be bound by these Terms & Conditions, along with our Privacy Policy and Disclaimer. If you do not agree, please discontinue use of this website.
            </p>
            <p>
                In this document, “FinAsk Value”, “we”, “us”, or “our” refers to FinAsk Value, a financial advisory and financial product distribution firm. “You” refers to any visitor, user, client, or prospective client.
            </p>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">1. Our Role & Regulatory Position</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>FinAsk Value operates primarily as a Financial Advisor and Financial Product Distributor.</li>
                    <li>We assist clients in understanding financial products and making informed financial decisions.</li>
                    <li>We distribute mutual funds under a valid AMFI Registration Number (ARN).</li>
                    <li>We distribute insurance products and other financial instruments through empanelment with regulated financial institutions.</li>
                    <li>Unless specifically disclosed in writing, we are not acting as a SEBI-registered Investment Adviser (RIA).</li>
                    <li>We do not provide fee-based investment advisory services unless separately registered and contractually agreed.</li>
                    <li>Our services are advisory in nature for guidance and suitability assistance, and execution support as a distributor.</li>
                </ul>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">2. Nature of Financial Guidance</h2>
                <p className="mb-2">The information shared on this website:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Is educational and awareness-oriented</li>
                    <li>Is based on publicly available information and professional understanding</li>
                    <li>Is not personalized advice unless provided through a formal client engagement</li>
                </ul>
                <p>Any financial decision taken by you is based on your independent judgment.</p>
                <p>We strongly recommend consulting your tax advisor, legal advisor, or other professionals wherever required.</p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">3. No Guaranteed Returns</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Financial markets are subject to risk and volatility.</li>
                    <li>Mutual fund investments are subject to market risks.</li>
                    <li>Past performance is not indicative of future results.</li>
                    <li>Insurance products are governed by policy terms, exclusions, and IRDAI regulations.</li>
                    <li>We do not guarantee fixed or assured returns unless explicitly stated in a regulated product approved by authorities.</li>
                </ul>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">4. Commission & Compensation Disclosure</h2>
                <p className="mb-2">As a financial product distributor:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>We may receive commission, trail commission, or other compensation from Asset Management Companies (AMCs), insurers, or product manufacturers.</li>
                    <li>We do not charge advisory fees unless a separate written agreement exists under a regulated structure.</li>
                    <li>Our recommendations may include products from empanelled institutions.</li>
                </ul>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">5. Client Responsibility</h2>
                <p className="mb-2">Before investing, you agree to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Read all scheme-related documents including SID and KIM</li>
                    <li>Understand associated risks</li>
                    <li>Provide accurate KYC and financial information</li>
                    <li>Assess suitability based on your goals and risk appetite</li>
                </ul>
                <p>All investments are subject to your final approval and risk.</p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">6. Website Use</h2>
                <p className="mb-2">You agree not to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Attempt unauthorized access</li>
                    <li>Upload malicious software</li>
                    <li>Misuse or reproduce content without permission</li>
                    <li>Disrupt website functionality</li>
                </ul>
                <p>We reserve the right to restrict access in case of misuse.</p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">7. Intellectual Property</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>All website content, branding, graphics, materials, and intellectual assets are the property of FinAsk Value.</li>
                    <li>You may use the content for personal, non-commercial purposes only.</li>
                </ul>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">8. Third-Party Platforms</h2>
                <p className="mb-2">This website may contain links to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Asset Management Companies</li>
                    <li>Insurance companies</li>
                    <li>Registrars & Transfer Agents</li>
                    <li>Regulatory authorities</li>
                </ul>
                <p>We do not control third-party websites and are not responsible for their content or policies.</p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">9. Limitation of Liability</h2>
                <p className="mb-2">FinAsk Value shall not be liable for:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Market losses</li>
                    <li>NAV fluctuations</li>
                    <li>Product performance</li>
                    <li>Claim settlement decisions by insurers</li>
                    <li>Regulatory changes</li>
                    <li>Technical issues beyond our control</li>
                    <li>Financial decisions taken based on website content</li>
                </ul>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">10. Governing Law</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>These Terms are governed by the laws of India.</li>
                    <li>All disputes shall fall under the exclusive jurisdiction of courts in Delhi.</li>
                </ul>
            </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
