import { Helmet } from "react-helmet-async";
import { FadeIn, StaggerContainer } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { Activity, Rocket, Handshake } from "lucide-react";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About ClientFuel | Our Story & Values</title>
        <meta name="description" content="We don't build projects. We build momentum for businesses that refuse to stay stagnant." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <FadeIn direction="right">
              <span className="text-[0.75rem] uppercase tracking-widest text-[#fb5c01] font-bold mb-6 block">Our Story</span>
              <h1 className="text-[3.5rem] font-black leading-[1.1] tracking-[-0.04em] text-[#1d1b18] mb-8">
                About ClientFuel
              </h1>
              <p className="text-[1.75rem] font-medium leading-tight text-[#5b4137] max-w-2xl">
                We don't build projects. We build momentum for businesses that refuse to stay stagnant.
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
                <h2 className="text-[1.75rem] font-bold mb-12 tracking-tight text-[#1d1b18]">Focusing on outcome, not output.</h2>
                <div className="space-y-12">
                  <p className="text-lg leading-[1.6] text-[#5b4137] max-w-2xl">
                    ClientFuel was founded on a simple realization: most agencies focus on deliverables, while clients focus on growth. We bridged that gap by making real business impact our primary metric of success.
                  </p>
                  <p className="text-lg leading-[1.6] text-[#5b4137] max-w-2xl">
                    We are a lean team of specialists. We don't hide behind layers of account managers or corporate jargon. When you work with us, you work directly with the people executing your strategy.
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
            <Activity className="text-[#fb5c01] w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#1d1b18]">Radical Trust</h3>
              <p className="text-sm leading-relaxed text-[#5b4137]">We operate with open books and honest timelines. No fluff, just results.</p>
            </div>
          </FadeIn>
          <FadeIn className="bg-gradient-to-br from-[#a73a00] to-[#fb5c01] p-12 rounded-lg flex flex-col justify-between min-h-[320px] text-white">
            <Rocket className="w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold mb-4">Growth First</h3>
              <p className="text-sm leading-relaxed opacity-90">Every line of code and every pixel is designed to move your needle forward.</p>
            </div>
          </FadeIn>
          <FadeIn className="bg-white p-12 rounded-lg flex flex-col justify-between min-h-[320px] border border-[#e4bfb1]/10">
            <Handshake className="text-[#fb5c01] w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#1d1b18]">True Partnership</h3>
              <p className="text-sm leading-relaxed text-[#5b4137]">Your business goals become our team's daily obsession.</p>
            </div>
          </FadeIn>
        </StaggerContainer>
      </section>

      {/* Imagery Section */}
      <section className="pb-40 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <FadeIn direction="right">
              <img 
                referrerPolicy="no-referrer"
                className="w-full h-[600px] object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://picsum.photos/seed/teamwork/1200/800" 
                alt="ClientFuel Team" 
              />
            </FadeIn>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <FadeIn direction="left">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#fb5c01] mb-6">The Commitment</h4>
              <p className="text-lg leading-[1.6] italic text-[#1d1b18]">
                "We treat every client's capital as if it were our own. That responsibility dictates every decision we make."
              </p>
              <div className="mt-8 pt-8 border-t border-[#e4bfb1]/20">
                <p className="font-bold text-[#1d1b18]">Team ClientFuel</p>
                <p className="text-xs uppercase tracking-widest text-[#5b4137]">Founded 2020</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#ece7e2] py-32 px-8">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="text-[2.5rem] font-black tracking-tight mb-8 text-[#1d1b18]">Ready to fuel your next phase?</h2>
          <Button to="/contact" size="lg">
            Book a Call
          </Button>
        </FadeIn>
      </section>
    </>
  );
};
