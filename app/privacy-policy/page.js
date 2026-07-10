import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Understand how FinAsk Value collects, uses, stores and protects your personal information across our website and services.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-brand-white text-brand-navy font-sans">
      <PageHero title="Privacy Policy" />
      <div className="container mx-auto px-4 max-w-4xl py-16">
        
        <div className="space-y-8 text-lg leading-relaxed opacity-90">
            <p>
                At FinAsk Value, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, store, disclose and protect the information you provide while using our website or availing of our services.
            </p>
            <p>
                By accessing or using this website, you consent to the collection and use of your information in accordance with this Privacy Policy.
            </p>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">1. Information We Collect</h2>
                <p className="mb-2">We may collect the following categories of information:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Personal information, including your name, email address, mobile number and postal address.</li>
                    <li>Identity and KYC information, including PAN, Aadhaar (where applicable and legally permitted), date of birth and other documents required for regulatory compliance.</li>
                    <li>Financial information, including income details, investment objectives, risk profile and financial preferences.</li>
                    <li>Transaction and portfolio-related information.</li>
                    <li>Communications exchanged through forms, emails, phone calls or other channels.</li>
                    <li>Technical information such as IP address, browser type, device information, cookies and website usage analytics.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">2. Purpose of Collection</h2>
                <p className="mb-2">We collect and process your information for legitimate business and regulatory purposes, including:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Completing Know Your Customer (KYC) and Anti-Money Laundering (AML) requirements.</li>
                    <li>Processing applications, investments and financial transactions.</li>
                    <li>Providing financial planning, product distribution and portfolio servicing.</li>
                    <li>Responding to your enquiries and service requests.</li>
                    <li>Maintaining client records and transaction history.</li>
                    <li>Sending service-related communications and important updates.</li>
                    <li>Complying with applicable legal, regulatory and statutory obligations.</li>
                    <li>Improving our website, services and user experience.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">3. Sharing of Information</h2>
                <p className="mb-2">Your personal information may be shared, where necessary, with:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Asset Management Companies (AMCs).</li>
                    <li>Insurance companies.</li>
                    <li>Registrars and Transfer Agents (RTAs).</li>
                    <li>Banks and payment service providers.</li>
                    <li>Regulatory authorities, government agencies or statutory bodies.</li>
                    <li>Authorized technology, compliance and service partners engaged by us.</li>
                </ul>
                <p className="mb-2">We share information only to the extent necessary for providing services, complying with legal obligations or fulfilling regulatory requirements.</p>
                <p>We do not sell, rent or trade your personal information to third parties for marketing purposes.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">4. Cookies and Website Analytics</h2>
                <p className="mb-2">Our website may use cookies and similar technologies to improve website functionality, analyze visitor behaviour and enhance user experience.</p>
                <p>You may choose to disable cookies through your browser settings. However, doing so may affect certain features of the website.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">5. Data Security</h2>
                <p className="mb-2">We implement reasonable administrative, technical and organizational safeguards to protect your personal information against unauthorized access, alteration, disclosure or destruction.</p>
                <p>While we strive to protect your information using commercially reasonable security measures, no method of electronic transmission or storage is completely secure. Accordingly, we cannot guarantee absolute security.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">6. Data Retention</h2>
                <p className="mb-2">We retain personal information only for as long as necessary to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Provide our services.</li>
                    <li>Comply with applicable laws and regulatory requirements.</li>
                    <li>Resolve disputes.</li>
                    <li>Enforce our contractual and legal rights.</li>
                </ul>
                <p>Certain records may be retained for longer periods where required under applicable laws or regulatory guidelines.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">7. Your Rights</h2>
                <p className="mb-2">Subject to applicable laws and regulatory requirements, you may request to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Access your personal information.</li>
                    <li>Correct or update inaccurate information.</li>
                    <li>Withdraw consent where legally permissible.</li>
                    <li>Request deletion of personal information where retention is no longer required by law.</li>
                    <li>Raise concerns regarding the processing of your personal information.</li>
                </ul>
                <p>Requests may be subject to applicable legal, regulatory and record-retention requirements.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">8. Third-Party Websites</h2>
                <p>This website may contain links to third-party websites. We do not control or assume responsibility for the privacy practices, content or security of such websites. We encourage you to review their respective privacy policies before sharing any personal information.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">9. Changes to this Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our business practices, legal requirements or regulatory obligations. The revised Privacy Policy will become effective upon being published on this website.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold font-serif mb-4 text-brand-gold">10. Contact Us</h2>
                <p>If you have any questions regarding this Privacy Policy or the handling of your personal information, please contact us through the details provided on our website.</p>
            </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
