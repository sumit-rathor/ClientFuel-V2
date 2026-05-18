import React from "react";
import { SEO } from "@/src/components/SEO";
import { FadeIn } from "@/src/components/ui/Animations";

const TermsConditions = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions | ClientFuel"
        description="Terms and conditions for ClientFuel web design services."
        canonicalPath="/terms"
      />
      <main className="pt-32 pb-40">
        <div className="max-w-4xl mx-auto px-8">
          <FadeIn>
            <h1 className="text-4xl font-black text-[#1d1b18] mb-12">Terms & Conditions</h1>
            <div className="prose prose-lg text-[#5b4137] prose-headings:text-[#1d1b18]">
              <p>Welcome to ClientFuel. By using our website and services, you agree to the following terms.</p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">1. Services</h2>
              <p>ClientFuel provides web design, development, and digital marketing services as outlined in project proposals.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">2. Payments</h2>
              <p>Payment terms are specified on a per-project basis. Generally, a deposit is required before work commences.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">3. Intellectual Property</h2>
              <p>Upon full payment, the ownership of the website design and code is transferred to the client, excluding licensed third-party assets.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">4. Limitation of Liability</h2>
              <p>ClientFuel is not liable for any indirect or consequential damages arising from the use of our services.</p>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  );
};

export default TermsConditions;
