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
                By accessing or using this website, you agree to be bound by these Terms & Conditions, along with our Privacy Policy and Disclaimer. If you do not agree with these Terms & Conditions, please discontinue use of this website immediately.
            </p>
            <p>
                In these Terms & Conditions, <b>"FinAsk Value"</b>, <b>"we"</b>, <b>"us"</b> or <b>"our"</b> refers to FinAsk Value, a Tax Advisory and Financial Product Distribution Firm. <b>"You"</b> or <b>"your"</b> refers to any visitor, user, client or prospective client of this website.
            </p>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">1. Our Role & Regulatory Position</h2>
                <p className="mb-2">FinAsk Value operates primarily as a Tax Advisor and Financial Product Distributor.</p>
                <p className="mb-2">We assist clients in understanding financial products and making informed financial decisions based on their financial goals and requirements.</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>We distribute mutual funds under a valid AMFI Registration Number (ARN) and PMS Under (APMI).</li>
                    <li>We distribute insurance products and other financial instruments through empanelment with regulated financial institutions.</li>
                    <li>Unless specifically disclosed in writing, we are not acting as a SEBI-registered Investment Adviser (RIA).</li>
                    <li>We do not provide fee-based investment advisory services unless separately registered and contractually agreed.</li>
                    <li>Our services include financial guidance, suitability assistance and execution support in our capacity as a Financial Product Distributor.</li>
                </ul>
                <p>Registration, empanelment or association with any regulatory authority or financial institution does not constitute an endorsement of FinAsk Value or guarantee the performance of any financial product or service.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">2. Nature of Financial Guidance</h2>
                <p className="mb-2">The information provided on this website:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Is intended for educational and informational purposes only.</li>
                    <li>Is based on publicly available information and our professional understanding.</li>
                    <li>Does not constitute personalized financial, investment, tax or legal advice unless provided through a formal client engagement.</li>
                </ul>
                <p className="mb-2">Any financial decision made by you is at your sole discretion and based on your independent judgment.</p>
                <p>We strongly recommend consulting your tax advisor, legal advisor or other qualified professionals before making any financial decisions, wherever appropriate.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">3. No Guaranteed Returns</h2>
                <p className="mb-2">Financial markets are subject to market risks and volatility.</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing.</li>
                    <li>Past performance is not indicative of future results.</li>
                    <li>Insurance products are governed by applicable policy terms, conditions, exclusions and IRDAI regulations.</li>
                    <li>We do not guarantee any fixed or assured returns except where expressly provided under a regulated financial product.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">4. Commission & Compensation Disclosure</h2>
                <p className="mb-2">As a Financial Product Distributor:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>We may receive commissions, trail commissions or other forms of compensation from Asset Management Companies (AMCs), insurers or other financial product manufacturers.</li>
                    <li>We do not charge advisory fees unless a separate written agreement exists under an applicable regulatory framework.</li>
                    <li>Our recommendations may include products offered by empanelled financial institutions.</li>
                </ul>
                <p>Where applicable, all commissions and compensation are governed by the regulations prescribed by the respective regulatory authorities.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">5. Client Responsibility</h2>
                <p className="mb-2">Before investing or purchasing any financial product, you agree to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Read all applicable scheme-related documents, including the Scheme Information Document (SID) and Key Information Memorandum (KIM), where applicable.</li>
                    <li>Understand the associated risks and product features.</li>
                    <li>Provide accurate, complete and updated KYC, financial and personal information.</li>
                    <li>Assess the suitability of any product based on your financial objectives, investment horizon and risk appetite.</li>
                </ul>
                <p>All investment decisions are subject to your final approval and are undertaken at your own risk.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">6. Website Use</h2>
                <p className="mb-2">You agree not to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Attempt unauthorized access to this website or its systems.</li>
                    <li>Upload, transmit or distribute malicious software, viruses or harmful code.</li>
                    <li>Copy, reproduce, modify or distribute website content without our prior written permission.</li>
                    <li>Interfere with or disrupt the functionality, security or availability of this website.</li>
                </ul>
                <p>We reserve the right to suspend or restrict access to this website in the event of any misuse or violation of these Terms & Conditions.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">7. Intellectual Property</h2>
                <p className="mb-2">All content available on this website, including text, graphics, logos, images, designs, trademarks, software and other intellectual property, is the exclusive property of FinAsk Value or its licensors, unless otherwise stated.</p>
                <p>You may access and use the content solely for your personal, non-commercial use. Any unauthorized reproduction, modification, distribution or commercial use is strictly prohibited without our prior written consent.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">8. Third-Party Platforms</h2>
                <p className="mb-2">This website may contain links to third-party websites or platforms, including:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Asset Management Companies</li>
                    <li>Insurance Companies</li>
                    <li>Registrars and Transfer Agents</li>
                    <li>Regulatory Authorities</li>
                    <li>Other Financial Service Providers</li>
                </ul>
                <p>These links are provided solely for your convenience. We do not control, endorse or assume responsibility for the content, security, availability, privacy practices or accuracy of any third-party website or platform.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">9. Limitation of Liability</h2>
                <p className="mb-2">To the maximum extent permitted by applicable law, FinAsk Value shall not be liable for any direct, indirect, incidental, consequential or special loss or damage arising from or relating to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Market losses or investment risks.</li>
                    <li>NAV fluctuations.</li>
                    <li>The performance of any financial product.</li>
                    <li>Claim settlement decisions made by insurers.</li>
                    <li>Changes in laws, regulations or taxation.</li>
                    <li>Technical failures, website interruptions or events beyond our reasonable control.</li>
                    <li>Financial decisions made based on the information available on this website.</li>
                </ul>
                <p>Users are solely responsible for evaluating the suitability of any financial product before making an investment or purchase.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">10. Governing Law & Jurisdiction</h2>
                <p className="mb-2">These Terms & Conditions shall be governed by and construed in accordance with the laws of India.</p>
                <p>Any dispute arising out of or in connection with these Terms & Conditions shall be subject to the exclusive jurisdiction of the competent courts in Delhi, India.</p>
            </section>

            <p>--------</p>

            <p>
                FinAsk Value reserves the right to amend, modify or update these Terms & Conditions at any time without prior notice. Continued use of this website following any changes constitutes your acceptance of the revised Terms & Conditions.
            </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
