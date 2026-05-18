import React from "react";
import { SEO } from "@/src/components/SEO";
import { FadeIn } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { CheckCircle, Code, Cpu, Globe, Rocket, Shield, Terminal } from "lucide-react";

const WebDevelopment = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Development Agency India",
    "provider": { "@type": "Organization", "name": "ClientFuel" },
    "description": "High-performance website development services for businesses in India. Fast, scalable, and mobile-first solutions.",
    "areaServed": "IN",
    "serviceType": "Web Development"
  };

  return (
    <>
      <SEO 
        title="Website Development Agency India | Fast & Scalable Solutions"
        description="ClientFuel is a leading website development agency in India. We build blazing fast, mobile-friendly websites using modern technologies like React and Vite."
        canonicalPath="/services/website-development"
        schema={schema}
      />
      
      <main className="pt-32">
        <header className="max-w-7xl mx-auto px-8 mb-40 text-center">
          <FadeIn>
            <div className="text-[0.75rem] font-bold tracking-[0.1em] text-[#fb5c01] mb-6 uppercase">Engineering Excellence</div>
            <h1 className="text-[3.5rem] md:text-[5rem] font-black leading-[1.1] tracking-[-0.04em] text-[#1d1b18] max-w-4xl mx-auto mb-8">
              High-Performance <span className="text-[#fb5c01]">Web Development</span>.
            </h1>
            <p className="text-[1.125rem] leading-[1.6] text-[#5b4137] max-w-2xl mx-auto">
              We build websites that are fast, secure, and ready to scale. No templates, no bloat—just clean, efficient code that delivers results.
            </p>
          </FadeIn>
        </header>

        <section className="max-w-7xl mx-auto px-8 mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Code, title: "Modern Tech Stack", desc: "React, Vite, and Tailwind CSS for peak performance." },
              { icon: Rocket, title: "Lighthouse 100", desc: "We aim for perfect performance scores." },
              { icon: Shield, title: "Secure Hosting", desc: "SSL, CDN, and high-uptime infrastructure." },
              { icon: Globe, title: "Mobile First", desc: "Optimized for India's mobile-dominated internet usage." },
              { icon: Terminal, title: "Clean Architecture", desc: "Maintainable code meant for long-term growth." },
              { icon: Cpu, title: "API Integrations", desc: "WhatsApp, CRM, and Payment Gateway connections." }
            ].map((item, i) => (
              <FadeIn key={i} className="p-8 bg-[#f8f3ed] rounded-2xl hover:shadow-xl transition-all duration-300">
                <item.icon className="w-10 h-10 text-[#fb5c01] mb-6" />
                <h3 className="text-xl font-bold text-[#1d1b18] mb-4">{item.title}</h3>
                <p className="text-[#5b4137]">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="bg-white py-40">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <FadeIn direction="left">
                <h2 className="text-[2.5rem] font-black text-[#1d1b18] mb-8 leading-tight">Speed is a <span className="text-[#fb5c01]">Business Advantage</span>.</h2>
                <p className="text-lg text-[#5b4137] mb-8">
                  In India, many users access the web via mobile data. A slow website is a lost customer. We optimize every kilobyte to ensure your site loads instantly on 4G and 5G networks.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-12">
                  <div className="p-6 border border-[#f8f3ed] rounded-xl">
                    <div className="text-4xl font-black text-[#fb5c01] mb-2">90+</div>
                    <div className="text-sm font-bold text-[#1d1b18]">CORE WEB VITALS</div>
                  </div>
                  <div className="p-6 border border-[#f8f3ed] rounded-xl">
                    <div className="text-4xl font-black text-[#fb5c01] mb-2">&lt;2s</div>
                    <div className="text-sm font-bold text-[#1d1b18]">LOAD TIME TARGET</div>
                  </div>
                </div>
                <Button to="/contact">Build My Performance Site</Button>
              </FadeIn>
              <FadeIn direction="right">
                <img 
                  src="https://res.cloudinary.com/dgts9ksog/image/upload/v1777795117/website-development_xncabe.webp" 
                  alt="High Performance Web Development"
                  className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebDevelopment;
