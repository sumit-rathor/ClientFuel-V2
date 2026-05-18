import React from "react";
import { SEO } from "@/src/components/SEO";
import { FadeIn } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { CheckCircle, Paintbrush, Layout, Smartphone, Search, Zap } from "lucide-react";

const WebDesign = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Website Design India",
    "provider": { "@type": "Organization", "name": "ClientFuel" },
    "description": "High-converting, professional website design services tailored for local Indian businesses.",
    "areaServed": "IN",
    "serviceType": "Web Design"
  };

  return (
    <>
      <SEO 
        title="Professional Website Design India | High-Converting UI/UX"
        description="Get a modern, professional website designed for your Indian business. We focus on trust, luxury branding, and conversion optimization to grow your revenue."
        canonicalPath="/services/website-design"
        schema={schema}
      />
      
      <main className="pt-32">
        <header className="max-w-7xl mx-auto px-8 mb-40 text-center">
          <FadeIn>
            <div className="text-[0.75rem] font-bold tracking-[0.1em] text-[#fb5c01] mb-6 uppercase">Modern Aesthetics</div>
            <h1 className="text-[3.5rem] md:text-[5rem] font-black leading-[1.1] tracking-[-0.04em] text-[#1d1b18] max-w-4xl mx-auto mb-8">
              Professional <span className="text-[#fb5c01]">Website Design</span> for Indian Businesses.
            </h1>
            <p className="text-[1.125rem] leading-[1.6] text-[#5b4137] max-w-2xl mx-auto">
              We create digital experiences that build trust instantly. In the Indian market, your digital presence is your reputation. We make it count.
            </p>
          </FadeIn>
        </header>

        <section className="max-w-7xl mx-auto px-8 mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Paintbrush, title: "Custom Branding", desc: "Uniform brand identity across all digital touchpoints." },
              { icon: Layout, title: "Modern Layouts", desc: "Clean, minimal, and premium designs that stand out." },
              { icon: Smartphone, title: "Responsive UX", desc: "Native-like experience on every screen size." },
              { icon: Search, title: "User Centric", desc: "Focused on how your customers find information." },
              { icon: Zap, title: "Fast Delivery", desc: "Live website in around 7-10 days." },
              { icon: CheckCircle, title: "Trust Signals", desc: "Strategic placement of social proof and CTAs." }
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
              <FadeIn direction="right">
                <img 
                  src="https://res.cloudinary.com/dgts9ksog/image/upload/v1777795115/website-design_sumtiq.webp" 
                  alt="Modern Web Design"
                  className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </FadeIn>
              <FadeIn direction="left">
                <h2 className="text-[2.5rem] font-black text-[#1d1b18] mb-8 leading-tight">Design That <span className="text-[#fb5c01]">Sells</span>.</h2>
                <p className="text-lg text-[#5b4137] mb-8">
                  Most website designers focus on color and fonts. We focus on human psychology and sales. We audit your competition and build a site that positions you as the market leader.
                </p>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-center gap-3 text-[#1d1b18] font-medium">
                    <CheckCircle className="text-[#fb5c01] w-5 h-5" /> Optimized Information Architecture
                  </li>
                  <li className="flex items-center gap-3 text-[#1d1b18] font-medium">
                    <CheckCircle className="text-[#fb5c01] w-5 h-5" /> High-DPI / 4K Graphics Ready
                  </li>
                  <li className="flex items-center gap-3 text-[#1d1b18] font-medium">
                    <CheckCircle className="text-[#fb5c01] w-5 h-5" /> Professional Content Guidance
                  </li>
                </ul>
                <Button to="/contact">Discuss Your Design Project</Button>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f3ed] py-40">
          <FadeIn className="max-w-7xl mx-auto px-8 text-center text-[#1d1b18]">
            <h2 className="text-[3rem] font-black mb-8 leading-none">Ready for a Premium <br /><span className="text-[#fb5c01]">Digital Presence?</span></h2>
            <p className="text-lg text-[#5b4137] max-w-2xl mx-auto mb-12">
              Join dozens of Indian businesses that have transformed their brand with ClientFuel.
            </p>
            <Button to="/contact" size="lg">Get Started Today</Button>
          </FadeIn>
        </section>
      </main>
    </>
  );
};

export default WebDesign;
