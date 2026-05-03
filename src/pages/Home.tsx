import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FadeIn, StaggerContainer } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { CheckCircle, BadgeCheck, Gauge, TrendingUp, Brush, Code, Zap, ShieldCheck, MessageCircle, Clock, CreditCard, Target } from "lucide-react";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Web Design Agency in India | Websites that Get Clients | ClientFuel</title>
        <meta name="description" content="ClientFuel is a premier web design agency in India building affordable websites for local businesses. We focus on conversion-focused design that brings real customers." />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-[95vh] flex items-center px-8 pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <FadeIn direction="right" delay={0.1}>
              <span className="text-[0.75rem] uppercase tracking-[0.2em] font-bold text-[#fb5c01] mb-8 block">
                We fuel your client growth
              </span>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.05] font-black tracking-[-0.04em] text-[#1d1b18] mb-10">
                Where Great Design Meets <span className="text-[#fb5c01]">Real Results.</span>
              </h1>
            </FadeIn>
            <FadeIn direction="right" delay={0.3}>
              <p className="text-lg md:text-xl text-[#5b4137] max-w-xl leading-[1.6] mb-12">
                Helping local Indian businesses get more inquiries and customers through conversion-focused website design. Stop losing leads to outdated designs.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.4}>
              <div className="flex flex-wrap gap-6 mb-12">
                <Button to="/contact" size="lg">
                  Book a Call
                </Button>
                <Button to="/portfolio" variant="ghost" size="lg" className="group">
                  View Our Work <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
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
              <p className="font-bold text-sm tracking-tight text-[#1d1b18]">Trusted by growing local businesses</p>
            </FadeIn>
            <FadeIn className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#e6e2dc] rounded-full flex items-center justify-center">
                <Gauge className="text-[#fb5c01] w-5 h-5" />
              </div>
              <p className="font-bold text-sm tracking-tight text-[#1d1b18]">Fast delivery. Real results.</p>
            </FadeIn>
            <FadeIn className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#e6e2dc] rounded-full flex items-center justify-center">
                <TrendingUp className="text-[#fb5c01] w-5 h-5" />
              </div>
              <p className="font-bold text-sm tracking-tight text-[#1d1b18]">Built for Indian businesses</p>
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
              <h2 className="text-[2.5rem] font-black tracking-tight leading-none text-[#1d1b18]">Websites that work for you.</h2>
            </FadeIn>
            <FadeIn direction="left" className="max-w-md">
              <p className="text-[#5b4137] leading-relaxed">We don't just build sites; we build business tools that help Indian small businesses grow their client base.</p>
            </FadeIn>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn className="bg-white p-12 rounded-xl shadow-sm border border-[#e4bfb1]/10 transition-all duration-300 group hover:shadow-xl hover:-translate-y-2 hover:bg-[#fef9f2]">
              <Brush className="w-10 h-10 text-[#ffb599] group-hover:text-[#fb5c01] mb-8 transition-all duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-black mb-4 transition-colors duration-300 group-hover:text-[#fb5c01]">Website Design</h3>
              <p className="text-[#5b4137] leading-relaxed">Builds trust instantly with your customers through clean, professional, and premium layouts.</p>
            </FadeIn>
            <FadeIn className="bg-white p-12 rounded-xl shadow-sm border border-[#e4bfb1]/10 transition-all duration-300 group hover:shadow-xl hover:-translate-y-2 hover:bg-[#fef9f2]">
              <Code className="w-10 h-10 text-[#ffb599] group-hover:text-[#fb5c01] mb-8 transition-all duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-black mb-4 transition-colors duration-300 group-hover:text-[#fb5c01]">Website Development</h3>
              <p className="text-[#5b4137] leading-relaxed">Fast, reliable, and mobile-first. Your website will look perfect on every smartphone in India.</p>
            </FadeIn>
            <FadeIn className="bg-white p-12 rounded-xl shadow-sm border border-[#e4bfb1]/10 transition-all duration-300 group hover:shadow-xl hover:-translate-y-2 hover:bg-[#fef9f2]">
              <TrendingUp className="w-10 h-10 text-[#ffb599] group-hover:text-[#fb5c01] mb-8 transition-all duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-black mb-4 transition-colors duration-300 group-hover:text-[#fb5c01]">Conversion Optimization</h3>
              <p className="text-[#5b4137] leading-relaxed">Turns visitors into paying customers by making it easy for them to contact you and book your services.</p>
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
              <Link to="/portfolio" className="text-sm font-bold text-[#fb5c01] relative group pb-1">
                View All Projects
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#fb5c01] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
              </Link>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <a href="https://royal-horizon-realty.vercel.app/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <FadeIn>
                <div className="aspect-video overflow-hidden rounded-lg bg-[#ded9d4] mb-8 border border-[#e4bfb1]/10">
                  <img 
                    referrerPolicy="no-referrer"
                    src="https://res.cloudinary.com/dgts9ksog/image/upload/v1777795115/royal-horizon-realty_rpxbkr.webp" 
                    alt="Royal Horizon Realty" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                </div>
                <p className="text-[0.7rem] uppercase tracking-widest text-[#fb5c01] font-bold mb-2">Luxury Real Estate</p>
                <h3 className="text-2xl font-black text-[#1d1b18]">Royal Horizon Realty</h3>
                <p className="text-[#5b4137] mt-2">A modern luxury real estate website crafted to showcase premium Jaipur properties with elegance, trust, and high-converting design.</p>
              </FadeIn>
            </a>
            <a href="https://iron-forge-fitness-gym.vercel.app/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer md:mt-32">
              <FadeIn>
                <div className="aspect-video overflow-hidden rounded-lg bg-[#ded9d4] mb-8 border border-[#e4bfb1]/10">
                  <img 
                    referrerPolicy="no-referrer"
                    src="https://res.cloudinary.com/dgts9ksog/image/upload/v1777795114/iron-forge-fitness_rf06xc.webp" 
                    alt="Iron Forge Fitness" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                </div>
                <p className="text-[0.7rem] uppercase tracking-widest text-[#fb5c01] font-bold mb-2">Fitness & Gym</p>
                <h3 className="text-2xl font-black text-[#1d1b18]">Iron Forge Fitness</h3>
                <p className="text-[#5b4137] mt-2">A bold and energetic gym website built to attract members, highlight services, and reflect a professional fitness brand.</p>
              </FadeIn>
            </a>
          </div>
        </div>
      </section>

      {/* Why ClientFuel */}
      <section className="py-40 px-8 bg-[#fef9f2]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-24">
            <h2 className="text-[2.5rem] font-black tracking-tight text-[#1d1b18]">Why Indian businesses trust us.</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn className="space-y-4">
              <Zap className="text-[#fb5c01] w-8 h-8" />
              <h3 className="text-xl font-bold text-[#1d1b18]">Fast 3–7 Day Delivery</h3>
              <p className="text-[#5b4137]">We value your time. Get your professional business website live in less than a week.</p>
            </FadeIn>
            <FadeIn className="space-y-4">
              <ShieldCheck className="text-[#fb5c01] w-8 h-8" />
              <h3 className="text-xl font-bold text-[#1d1b18]">Transparent Pricing</h3>
              <p className="text-[#5b4137]">No hidden fees. No surprises. You know exactly what you are paying for from day one.</p>
            </FadeIn>
            <FadeIn className="space-y-4">
              <MessageCircle className="text-[#fb5c01] w-8 h-8" />
              <h3 className="text-xl font-bold text-[#1d1b18]">Hindi & English Support</h3>
              <p className="text-[#5b4137]">We speak your language. Comfortable communication in both Hindi and English.</p>
            </FadeIn>
            <FadeIn className="space-y-4">
              <Target className="text-[#fb5c01] w-8 h-8" />
              <h3 className="text-xl font-bold text-[#1d1b18]">Focus on Results</h3>
              <p className="text-[#5b4137]">We don't just focus on design; we focus on how many clients your website brings in.</p>
            </FadeIn>
            <FadeIn className="space-y-4">
              <BadgeCheck className="text-[#fb5c01] w-8 h-8" />
              <h3 className="text-xl font-bold text-[#1d1b18]">Direct Founder Access</h3>
              <p className="text-[#5b4137]">No middleman. You work directly with the experts who are building your vision.</p>
            </FadeIn>
            <FadeIn className="space-y-4">
              <CheckCircle className="text-[#fb5c01] w-8 h-8" />
              <h3 className="text-xl font-bold text-[#1d1b18]">Built for India</h3>
              <p className="text-[#5b4137]">Specifically designed for the needs and behavior of local Indian customers.</p>
            </FadeIn>
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-40 px-8 bg-[#f8f3ed]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-24">
            <h2 className="text-[2.5rem] font-black tracking-tight text-[#1d1b18]">Simple, Transparent Pricing.</h2>
            <p className="text-[#5b4137] mt-4">No hidden fees. No surprises. One-time payment.</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn className="bg-white p-10 lg:p-12 rounded-3xl border border-[#e4bfb1]/20 flex flex-col transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(251,92,1,0.15)] hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#fb5c01]/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
              
              <p className="text-[10px] text-[#fb5c01] font-black uppercase tracking-[0.2em] mb-4">Discovery Tier</p>
              <h3 className="text-3xl font-black text-[#1d1b18] mb-6 group-hover:text-[#fb5c01] transition-colors">Launch</h3>
              
              <p className="text-base text-[#5b4137] mb-8 font-medium italic border-l-2 border-[#fb5c01]/20 pl-4">“Get your business online with a professional, trust-building presence”</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-[#1d1b18]">₹27,000</span>
                <span className="text-[#5b4137]/60 text-sm font-bold uppercase">One-time</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow relative z-10">
                <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Strong first impression website</li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Mobile-first design</li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Enquiry-ready (WhatsApp + forms)</li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Clean, fast, modern UI</li>
                
                <li className="mt-8 pt-8 border-t border-[#e4bfb1]/20">
                  <div className="flex items-center gap-2 text-[10px] font-black text-[#1d1b18] mb-4 uppercase tracking-[0.2em] opacity-50">Business Outcome</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-[#1d1b18] font-bold py-2 px-4 bg-[#f8f3ed] rounded-lg border border-[#e4bfb1]/10"><BadgeCheck size={18} className="text-green-600" /> You look legit</div>
                    <div className="flex items-center gap-3 text-sm text-[#1d1b18] font-bold py-2 px-4 bg-[#f8f3ed] rounded-lg border border-[#e4bfb1]/10"><BadgeCheck size={18} className="text-green-600" /> Stop losing customers</div>
                  </div>
                </li>
              </ul>
              <Button to="/contact" variant="outline" className="w-full py-6 rounded-2xl border-2 hover:bg-[#fb5c01] hover:text-white transition-all duration-300">Get Started</Button>
            </FadeIn>

            <FadeIn className="bg-[#fef9f2] p-10 lg:p-12 rounded-3xl border-2 border-[#fb5c01] flex flex-col relative lg:scale-110 shadow-[0_20px_50px_rgba(251,92,1,0.15)] transition-all duration-500 hover:-translate-y-4 group z-20 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#fb5c01]/10 rounded-bl-full -mr-20 -mt-20 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm text-[#fb5c01] font-black uppercase tracking-[0.2em]">Revenue Engine</p>
                <div className="bg-[#fb5c01] text-white text-[9px] font-black uppercase tracking-[0.1em] px-3 py-1 rounded-full shadow-md whitespace-nowrap">Most Popular ⭐</div>
              </div>
              
              <h3 className="text-3xl font-black text-[#1d1b18] mb-2 group-hover:text-[#fb5c01] transition-colors">Growth</h3>
              
              <p className="text-base text-[#5b4137] mb-8 font-medium italic border-l-2 border-[#fb5c01] pl-4">“Turn your website into a consistent enquiry generator”</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-[#1d1b18]">₹42,000</span>
                <span className="text-[#5b4137]/60 text-sm font-bold uppercase">One-time</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow relative z-10">
                <li className="flex items-center gap-3 text-sm font-medium text-[#1d1b18]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Everything in Launch</li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#1d1b18]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Self-editable website (CMS)</li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#1d1b18]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Better page structure</li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#1d1b18]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Trust-building sections</li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#1d1b18]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> SEO-ready setup</li>
                
                <li className="mt-8 pt-8 border-t border-[#fb5c01]/10">
                  <div className="flex items-center gap-2 text-[10px] font-black text-[#1d1b18] mb-4 uppercase tracking-[0.2em] opacity-50">Business Outcome</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-[1d1b18] font-bold py-2 px-4 bg-white rounded-lg border border-[#fb5c01]/20 shadow-sm"><BadgeCheck size={18} className="text-green-600" /> More enquiries</div>
                    <div className="flex items-center gap-3 text-sm text-[1d1b18] font-bold py-2 px-4 bg-white rounded-lg border border-[#fb5c01]/20 shadow-sm"><BadgeCheck size={18} className="text-green-600" /> More trust & control</div>
                  </div>
                </li>
              </ul>
              <Button to="/contact" className="w-full py-6 rounded-2xl shadow-[#fb5c01]/40 shadow-xl hover:scale-[1.02] transform transition-all duration-300">Get Started</Button>
            </FadeIn>

            <FadeIn className="bg-white p-10 lg:p-12 rounded-3xl border border-[#e4bfb1]/20 flex flex-col transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(251,92,1,0.15)] hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#fb5c01]/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
              
              <p className="text-[10px] text-[#fb5c01] font-black uppercase tracking-[0.2em] mb-4">Market Leader</p>
              <h3 className="text-3xl font-black text-[#1d1b18] mb-6 group-hover:text-[#fb5c01] transition-colors">Authority</h3>
              
              <p className="text-base text-[#5b4137] mb-8 font-medium italic border-l-2 border-[#fb5c01]/20 pl-4">“Build a premium presence that positions you above competitors”</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-[#1d1b18]">₹62,000</span>
                <span className="text-[#5b4137]/60 text-sm font-bold uppercase">One-time</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow relative z-10">
                <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Everything in Growth</li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Custom UI (not layout-based)</li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Advanced CMS sections</li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Conversion-focused landing</li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Performance + UX optimization</li>
                
                <li className="mt-8 pt-8 border-t border-[#e4bfb1]/20">
                  <div className="flex items-center gap-2 text-[10px] font-black text-[#1d1b18] mb-4 uppercase tracking-[0.2em] opacity-50">Business Outcome</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-[#1d1b18] font-bold py-2 px-4 bg-[#f8f3ed] rounded-lg border border-[#e4bfb1]/10"><BadgeCheck size={18} className="text-green-600" /> Premium brand perception</div>
                    <div className="flex items-center gap-3 text-sm text-[#1d1b18] font-bold py-2 px-4 bg-[#f8f3ed] rounded-lg border border-[#e4bfb1]/10"><BadgeCheck size={18} className="text-green-600" /> Higher conversion rates</div>
                  </div>
                </li>
              </ul>
              <Button to="/contact" variant="outline" className="w-full py-6 rounded-2xl border-2 hover:bg-[#fb5c01] hover:text-white transition-all duration-300">Get Started</Button>
            </FadeIn>
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-8 bg-[#fef9f2]">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="text-[3rem] md:text-[4.5rem] font-black tracking-tight leading-[1.05] text-[#1d1b18] mb-12">
            Let's build a website that brings you real customers.
          </h2>
          <Button to="/contact" size="lg" className="shadow-2xl shadow-[#fb5c01]/20">
            Book a Call Now
          </Button>
        </FadeIn>
      </section>
    </>
  );
};

