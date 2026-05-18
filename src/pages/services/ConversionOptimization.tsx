import React from "react";
import { SEO } from "@/src/components/SEO";
import { FadeIn } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { CheckCircle, BarChart3, Target, MousePointer2, MessageSquare, TrendingUp, Users } from "lucide-react";

const ConversionOptimization = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conversion Rate Optimization India",
    "provider": { "@type": "Organization", "name": "ClientFuel" },
    "description": "Expert CRO services to turn your website visitors into paying customers. Specialized in lead generation for Indian businesses.",
    "areaServed": "IN",
    "serviceType": "CRO"
  };

  return (
    <>
      <SEO 
        title="Conversion Optimization India | Turn Visitors into Customers"
        description="Don't just get traffic, get revenue. Our conversion optimization services help Indian businesses increase leads and sales through strategic UX and psychological triggers."
        canonicalPath="/services/conversion-optimization"
        schema={schema}
      />
      
      <main className="pt-32">
        <header className="max-w-7xl mx-auto px-8 mb-40 text-center">
          <FadeIn>
            <div className="text-[0.75rem] font-bold tracking-[0.1em] text-[#fb5c01] mb-6 uppercase">Revenue Growth</div>
            <h1 className="text-[3.5rem] md:text-[5rem] font-black leading-[1.1] tracking-[-0.04em] text-[#1d1b18] max-w-4xl mx-auto mb-8">
              Turn Clicks into <span className="text-[#fb5c01]">Paying Customers</span>.
            </h1>
            <p className="text-[1.125rem] leading-[1.6] text-[#5b4137] max-w-2xl mx-auto">
              Having a beautiful website is only half the battle. We optimize your user journey to ensure your visitors take action and contact you.
            </p>
          </FadeIn>
        </header>

        <section className="max-w-7xl mx-auto px-8 mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Target, title: "Strategic CTAs", desc: "Clear 'Call to Action' buttons placed at high-intent areas." },
              { icon: MessageSquare, title: "WhatsApp Integration", desc: "Instant chat connection for the Indian market." },
              { icon: BarChart3, title: "Engagement Tracking", desc: "Data-driven insights on where your users drop off." },
              { icon: MousePointer2, title: "Heatmap Analysis", desc: "See exactly where your customers are clicking." },
              { icon: TrendingUp, title: "A/B Testing", desc: "Refining designs based on real-world performance." },
              { icon: Users, title: "Psychological Triggers", desc: "Using trust signals to reduce friction in the buying process." }
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
                  src="https://res.cloudinary.com/dgts9ksog/image/upload/v1777795114/conversion-optimization_kshslx.webp" 
                  alt="Conversion Optimization Strategies"
                  className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </FadeIn>
              <FadeIn direction="left">
                <h2 className="text-[2.5rem] font-black text-[#1d1b18] mb-8 leading-tight">Focus on <span className="text-[#fb5c01]">ROAS</span>.</h2>
                <p className="text-lg text-[#5b4137] mb-8">
                  If you are running Google Ads or Meta Ads, conversion rate is your most important metric. Improving it from 1% to 2% effectively doubles your marketing budget without spending a rupee more on ads.
                </p>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-center gap-3 text-[#1d1b18] font-medium">
                    <CheckCircle className="text-[#fb5c01] w-5 h-5" /> Landing Page Optimization
                  </li>
                  <li className="flex items-center gap-3 text-[#1d1b18] font-medium">
                    <CheckCircle className="text-[#fb5c01] w-5 h-5" /> Form Friction Reduction
                  </li>
                  <li className="flex items-center gap-3 text-[#1d1b18] font-medium">
                    <CheckCircle className="text-[#fb5c01] w-5 h-5" /> Speed Optimization for Lower Bounce Rates
                  </li>
                </ul>
                <Button to="/contact">Audit My Website Conversion</Button>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ConversionOptimization;
