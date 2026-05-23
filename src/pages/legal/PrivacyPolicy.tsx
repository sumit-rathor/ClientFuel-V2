import React from "react";
import { SEO } from "@/src/components/SEO";
import { FadeIn } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy | ClientFuel"
        description="Privacy policy for ClientFuel - Web Design Agency India. Learn how we handle your data."
        canonicalPath="/privacy"
        robots="noindex, follow"
      />
      <main className="pt-32 pb-40">
        <div className="max-w-4xl mx-auto px-8">
          <FadeIn>
            <h1 className="text-4xl font-black text-[#1d1b18] mb-12">Privacy Policy</h1>
            <div className="prose prose-lg text-[#5b4137] prose-headings:text-[#1d1b18]">
              <p>Last updated: May 18, 2024</p>
              <p>At ClientFuel, we take your privacy seriously. This policy explains what information we collect and how we use it.</p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">1. Information We Collect</h2>
              <p>We collect information you provide directly to us through our contact forms, including your name, email, phone number, and project details.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">2. How We Use Information</h2>
              <p>We use your information to provide our services, communicate with you about your project, and occasionally send you updates about our services.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">3. Data Protection</h2>
              <p>We implement industry-standard security measures to protect your digital assets and personal information.</p>

              <h2 className="text-2xl font-bold mt-12 mb-6">4. Contact Us</h2>
              <p>If you have any questions about our privacy practices, please contact us at hello@clientfuel.in</p>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
