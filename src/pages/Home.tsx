import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FadeIn, StaggerContainer } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { CheckCircle, BadgeCheck, Gauge, TrendingUp, Brush, Code } from "lucide-react";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>ClientFuel | Websites that get clients.</title>
        <meta name="description" content="Stop losing leads to outdated design. We build conversion-first websites that turn visitors into high-value clients." />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <FadeIn direction="right" delay={0.1}>
              <span className="text-[0.75rem] uppercase tracking-[0.2em] font-bold text-[#fb5c01] mb-8 block">
                Performance-Driven Design
              </span>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.05] font-black tracking-[-0.04em] text-[#1d1b18] mb-10">
                Websites that<br />get clients.
              </h1>
            </FadeIn>
            <FadeIn direction="right" delay={0.3}>
              <p className="text-lg md:text-xl text-[#5b4137] max-w-xl leading-[1.6] mb-12">
                Stop losing leads to outdated design. We build conversion-first websites that turn visitors into high-value clients and fuel your business growth.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.4}>
              <div className="flex flex-wrap gap-6">
                <Button to="/contact" size="lg">
                  Book a Call
                </Button>
                <Button to="/portfolio" variant="ghost" size="lg" className="group">
                  View Work <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-[#f8f3ed] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#e6e2dc] rounded-full flex items-center justify-center">
                <BadgeCheck className="text-[#fb5c01] w-5 h-5" />
              </div>
              <p className="font-bold text-sm tracking-tight text-[#1d1b18]">Built for real businesses</p>
            </FadeIn>
            <FadeIn className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#e6e2dc] rounded-full flex items-center justify-center">
                <Gauge className="text-[#fb5c01] w-5 h-5" />
              </div>
              <p className="font-bold text-sm tracking-tight text-[#1d1b18]">Fast, mobile-first websites</p>
            </FadeIn>
            <FadeIn className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#e6e2dc] rounded-full flex items-center justify-center">
                <TrendingUp className="text-[#fb5c01] w-5 h-5" />
              </div>
              <p className="font-bold text-sm tracking-tight text-[#1d1b18]">Conversion-focused design</p>
            </FadeIn>
          </StaggerContainer>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-40 px-8 bg-[#fef9f2]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <FadeIn direction="right">
              <span className="text-[0.75rem] uppercase tracking-[0.15em] font-bold text-[#fb5c01] mb-4 block">Our Expertise</span>
              <h2 className="text-[2.5rem] font-black tracking-tight leading-none text-[#1d1b18]">Precision services for growth.</h2>
            </FadeIn>
            <FadeIn direction="left" className="max-w-md">
              <p className="text-[#5b4137] leading-relaxed">We combine editorial design with technical performance to ensure your digital presence is more than just a brochure.</p>
            </FadeIn>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 bg-[#e4bfb1]/10">
            <FadeIn className="bg-white p-12 hover:bg-[#f8f3ed] transition-colors group">
              <Brush className="w-10 h-10 text-[#ffb599] group-hover:text-[#fb5c01] mb-8 transition-colors" />
              <h3 className="text-xl font-black mb-4">Website Design</h3>
              <p className="text-[#5b4137] leading-relaxed">High-end editorial layouts that position your brand as a market leader from the first second.</p>
            </FadeIn>
            <FadeIn className="bg-white p-12 hover:bg-[#f8f3ed] transition-colors group">
              <Code className="w-10 h-10 text-[#ffb599] group-hover:text-[#fb5c01] mb-8 transition-colors" />
              <h3 className="text-xl font-black mb-4">Website Development</h3>
              <p className="text-[#5b4137] leading-relaxed">Blazing-fast, pixel-perfect code optimized for all devices and core web vitals.</p>
            </FadeIn>
            <FadeIn className="bg-white p-12 hover:bg-[#f8f3ed] transition-colors group">
              <TrendingUp className="w-10 h-10 text-[#ffb599] group-hover:text-[#fb5c01] mb-8 transition-colors" />
              <h3 className="text-xl font-black mb-4">Conversion Optimization</h3>
              <p className="text-[#5b4137] leading-relaxed">Strategic funneling and A/B testing designed to maximize every click into a client.</p>
            </FadeIn>
          </StaggerContainer>
        </div>
      </section>

      {/* Portfolio Summary */}
      <section className="py-40 px-8 bg-[#f8f3ed]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-4">
            <FadeIn direction="right">
              <h2 className="text-[2.5rem] font-black tracking-tight text-[#1d1b18]">Selected Work</h2>
            </FadeIn>
            <FadeIn direction="left">
              <Link to="/portfolio" className="text-sm font-bold text-[#fb5c01] border-b-2 border-[#fb5c01] pb-1">All Projects</Link>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <FadeIn className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-[#ded9d4] mb-8">
                <img 
                  referrerPolicy="no-referrer"
                  src="https://picsum.photos/seed/realestate/800/1000" 
                  alt="Luxury Estates Collective" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <p className="text-[0.7rem] uppercase tracking-widest text-[#fb5c01] font-bold mb-2">Real Estate</p>
              <h3 className="text-2xl font-black text-[#1d1b18]">Luxury Estates Collective</h3>
            </FadeIn>
            <FadeIn className="group cursor-pointer md:mt-32">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-[#ded9d4] mb-8">
                <img 
                  referrerPolicy="no-referrer"
                  src="https://picsum.photos/seed/education/800/1000" 
                  alt="The Heights Academy" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <p className="text-[0.7rem] uppercase tracking-widest text-[#fb5c01] font-bold mb-2">Education</p>
              <h3 className="text-2xl font-black text-[#1d1b18]">The Heights Academy</h3>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-8 bg-[#fef9f2]">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="text-[3rem] md:text-[4.5rem] font-black tracking-tight leading-[1.05] text-[#1d1b18] mb-12">
            Let's build a website that fuels your client growth.
          </h2>
          <Button to="/contact" size="lg" className="shadow-2xl shadow-[#fb5c01]/20">
            Book a Call
          </Button>
        </FadeIn>
      </section>
    </>
  );
};
