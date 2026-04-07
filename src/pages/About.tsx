import { Helmet } from "react-helmet-async";
import { FadeIn, StaggerContainer } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { Activity, Rocket, Handshake, Heart, ShieldCheck, Globe } from "lucide-react";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About ClientFuel | Helping Indian Businesses Grow Online</title>
        <meta name="description" content="ClientFuel is dedicated to helping local Indian businesses grow through conversion-focused web design. We focus on results, not just design." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <FadeIn direction="right">
              <span className="text-[0.75rem] uppercase tracking-widest text-[#fb5c01] font-bold mb-6 block">Our Story</span>
              <h1 className="text-[3.5rem] font-black leading-[1.1] tracking-[-0.04em] text-[#1d1b18] mb-8">
                Helping Local Businesses in India Grow Online.
              </h1>
              <p className="text-[1.75rem] font-medium leading-tight text-[#5b4137] max-w-2xl">
                We don't build projects. We build growth engines for local businesses that are ready to scale in the digital age.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-[#f8f3ed] py-40 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-start-5 lg:col-span-8">
              <FadeIn>
                <h2 className="text-[1.75rem] font-bold mb-12 tracking-tight text-[#1d1b18]">Focusing on your growth, not just code.</h2>
                <div className="space-y-12">
                  <p className="text-lg leading-[1.6] text-[#5b4137] max-w-2xl">
                    ClientFuel was founded with one goal: to help the local Indian business owner succeed online. We realized that most agencies focus on fancy designs, but business owners focus on getting more customers.
                  </p>
                  <p className="text-lg leading-[1.6] text-[#5b4137] max-w-2xl">
                    We bridged that gap. When you work with us, you are not just getting a website; you are getting a partner who cares about your business inquiries as much as you do.
                  </p>
                  <p className="text-lg leading-[1.6] text-[#5b4137] max-w-2xl">
                    You get direct access to the founder. No account managers, no layers of corporate talk. Just honest work that brings real results.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values Bento Grid */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn className="bg-white p-12 rounded-lg flex flex-col justify-between min-h-[320px] border border-[#e4bfb1]/10">
            <Heart className="text-[#fb5c01] w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#1d1b18]">Built for India</h3>
              <p className="text-sm leading-relaxed text-[#5b4137]">Our designs are tailored to the behavior and trust factors of Indian customers.</p>
            </div>
          </FadeIn>
          <FadeIn className="bg-gradient-to-br from-[#a73a00] to-[#fb5c01] p-12 rounded-lg flex flex-col justify-between min-h-[320px] text-white">
            <Target className="w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold mb-4">Results First</h3>
              <p className="text-sm leading-relaxed opacity-90">Every pixel we place is designed to help you get more inquiries and sales.</p>
            </div>
          </FadeIn>
          <FadeIn className="bg-white p-12 rounded-lg flex flex-col justify-between min-h-[320px] border border-[#e4bfb1]/10">
            <Handshake className="text-[#fb5c01] w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#1d1b18]">Direct Support</h3>
              <p className="text-sm leading-relaxed text-[#5b4137]">Talk directly to the people building your site. Quick support over WhatsApp and Email.</p>
            </div>
          </FadeIn>
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="bg-[#ece7e2] py-32 px-8">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="text-[2.5rem] font-black tracking-tight mb-8 text-[#1d1b18]">Ready to grow your business?</h2>
          <Button to="/contact" size="lg">
            Let's Talk
          </Button>
        </FadeIn>
      </section>
    </>
  );
};

import { Target } from "lucide-react";
