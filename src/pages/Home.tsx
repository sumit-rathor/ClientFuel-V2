import React from "react";
import { Link } from "react-router";
import { FadeIn, StaggerContainer } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { SEO } from "@/src/components/SEO";
import { 
  BadgeCheck, Gauge, TrendingUp, Brush, Code, Zap, 
  ShieldCheck, MessageCircle, Target, CheckCircle,
  HelpCircle, ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-[#e4bfb1]/20">
      <button 
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-xl font-bold text-[#1d1b18] group-hover:text-[#fb5c01] transition-colors">{question}</span>
        <ChevronDown className={`text-[#fb5c01] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#5b4137] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Home = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a website cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing starts from ₹27,000 for a professional business website. We offer transparent, one-time payment packages with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "What is the timeline for website development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We typically deliver professional business websites in 7-10 days, depending on the complexity and content readiness."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide WhatsApp integration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our websites come with strategic WhatsApp integration to help you connect with your Indian customers instantly."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Web Design Agency India | Website Development for Businesses"
        description="ClientFuel is the leading web design agency in India. We build high-converting, affordable websites for small businesses to help them grow their revenue and get more inquiries."
        canonicalPath="/"
        schema={faqSchema}
      />

      <main>
        {/* Hero Section */}
        <section className="min-h-[95vh] flex items-center px-8 pt-24 lg:pt-32" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <FadeIn direction="right" delay={0.1}>
                <span className="text-[0.75rem] uppercase tracking-[0.2em] font-bold text-[#fb5c01] mb-8 block">
                  Best Web Design Agency in India
                </span>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <h1 id="hero-heading" className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.05] font-black tracking-[-0.04em] text-[#1d1b18] mb-10">
                  Affordable <span className="text-[#fb5c01]">Website Design</span> for Indian Businesses.
                </h1>
              </FadeIn>
              <FadeIn direction="right" delay={0.3}>
                <p className="text-lg md:text-xl text-[#5b4137] max-w-xl leading-[1.6] mb-12">
                  ClientFuel helps local businesses across India get more inquiries and customers through conversion-focused design. We build tools, not just websites.
                </p>
              </FadeIn>
              <FadeIn direction="right" delay={0.4}>
                <div className="flex flex-wrap gap-6 mb-12">
                  <Button to="/contact" size="lg">
                    Book a Free Consultation
                  </Button>
                  <Button to="/portfolio" variant="outline" size="lg" className="group">
                    View Our Results <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-[#f8f3ed] py-16 px-8" aria-label="Trust indicators">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FadeIn className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#e6e2dc] rounded-full flex items-center justify-center" aria-hidden="true">
                  <BadgeCheck className="text-[#fb5c01] w-5 h-5" />
                </div>
                <p className="font-bold text-sm tracking-tight text-[#1d1b18]">Trusted by Indian MSMEs</p>
              </FadeIn>
              <FadeIn className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#e6e2dc] rounded-full flex items-center justify-center" aria-hidden="true">
                  <Gauge className="text-[#fb5c01] w-5 h-5" />
                </div>
                <p className="font-bold text-sm tracking-tight text-[#1d1b18]">Blazing Fast Performance</p>
              </FadeIn>
              <FadeIn className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#e6e2dc] rounded-full flex items-center justify-center" aria-hidden="true">
                  <TrendingUp className="text-[#fb5c01] w-5 h-5" />
                </div>
                <p className="font-bold text-sm tracking-tight text-[#1d1b18]">Built for India Intent</p>
              </FadeIn>
            </StaggerContainer>
          </div>
        </section>

        {/* Services Summary */}
        <section className="py-40 px-8 bg-[#fef9f2]" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <FadeIn direction="right">
                <span className="text-[0.75rem] uppercase tracking-[0.15em] font-bold text-[#fb5c01] mb-4 block">Our Expertise</span>
                <h2 id="services-heading" className="text-[2.5rem] font-black tracking-tight leading-none text-[#1d1b18]">Full-Service Digital Solutions.</h2>
              </FadeIn>
              <FadeIn direction="left" className="max-w-md">
                <p className="text-[#5b4137] leading-relaxed">From design to development, we provide end-to-end solutions tailored for the Indian business ecosystem.</p>
              </FadeIn>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/services/website-design" className="block">
                <FadeIn className="bg-white p-12 rounded-xl shadow-sm border border-[#e4bfb1]/10 transition-all duration-300 group hover:shadow-xl hover:-translate-y-2 hover:bg-[#fef9f2]">
                  <Brush className="w-10 h-10 text-[#ffb599] group-hover:text-[#fb5c01] mb-8 transition-all duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-black mb-4 transition-colors duration-300 group-hover:text-[#fb5c01]">Website Design</h3>
                  <p className="text-[#5b4137] leading-relaxed mb-6">Builds trust instantly with your customers through clean, professional, and premium layouts.</p>
                  <span className="text-sm font-bold text-[#fb5c01] flex items-center gap-2">Learn More <span className="transition-transform group-hover:translate-x-1">→</span></span>
                </FadeIn>
              </Link>
              <Link to="/services/website-development" className="block">
                <FadeIn className="bg-white p-12 rounded-xl shadow-sm border border-[#e4bfb1]/10 transition-all duration-300 group hover:shadow-xl hover:-translate-y-2 hover:bg-[#fef9f2]">
                  <Code className="w-10 h-10 text-[#ffb599] group-hover:text-[#fb5c01] mb-8 transition-all duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-black mb-4 transition-colors duration-300 group-hover:text-[#fb5c01]">Web Development</h3>
                  <p className="text-[#5b4137] leading-relaxed mb-6">Fast, reliable, and mobile-first. Your website will look perfect on every smartphone in India.</p>
                  <span className="text-sm font-bold text-[#fb5c01] flex items-center gap-2">Learn More <span className="transition-transform group-hover:translate-x-1">→</span></span>
                </FadeIn>
              </Link>
              <Link to="/services/conversion-optimization" className="block">
                <FadeIn className="bg-white p-12 rounded-xl shadow-sm border border-[#e4bfb1]/10 transition-all duration-300 group hover:shadow-xl hover:-translate-y-2 hover:bg-[#fef9f2]">
                  <TrendingUp className="w-10 h-10 text-[#ffb599] group-hover:text-[#fb5c01] mb-8 transition-all duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-black mb-4 transition-colors duration-300 group-hover:text-[#fb5c01]">Conversion Optimization</h3>
                  <p className="text-[#5b4137] leading-relaxed mb-6">Turns visitors into paying customers by making it easy for them to contact you and book your services.</p>
                  <span className="text-sm font-bold text-[#fb5c01] flex items-center gap-2">Learn More <span className="transition-transform group-hover:translate-x-1">→</span></span>
                </FadeIn>
              </Link>
            </StaggerContainer>
          </div>
        </section>

        {/* Portfolio Summary */}
        <section className="py-40 px-8 bg-[#f8f3ed]" aria-labelledby="portfolio-heading">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-4">
              <FadeIn direction="right">
                <h2 id="portfolio-heading" className="text-[2.5rem] font-black tracking-tight text-[#1d1b18]">Proven Success in India.</h2>
              </FadeIn>
              <FadeIn direction="left">
                <Link to="/portfolio" className="text-sm font-bold text-[#fb5c01] relative group pb-1">
                  View All Case Studies
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#fb5c01] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
                </Link>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <Link to="/portfolio/royal-horizon-realty" className="group cursor-pointer">
                <FadeIn>
                  <div className="aspect-video overflow-hidden rounded-lg bg-[#ded9d4] mb-8 border border-[#e4bfb1]/10">
                    <img 
                      loading="lazy"
                      src="https://res.cloudinary.com/dgts9ksog/image/upload/v1777795115/royal-horizon-realty_rpxbkr.webp" 
                      alt="Royal Horizon Realty - Luxury Web Design Jaipur" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                  </div>
                  <p className="text-[0.7rem] uppercase tracking-widest text-[#fb5c01] font-bold mb-2">Luxury Real Estate</p>
                  <h3 className="text-2xl font-black text-[#1d1b18]">Royal Horizon Realty</h3>
                  <p className="text-[#5b4137] mt-2">A modern luxury real estate website crafted to showcase premium Jaipur properties.</p>
                </FadeIn>
              </Link>
              <Link to="/portfolio/iron-forge-fitness" className="group cursor-pointer md:mt-32">
                <FadeIn>
                  <div className="aspect-video overflow-hidden rounded-lg bg-[#ded9d4] mb-8 border border-[#e4bfb1]/10">
                    <img 
                      loading="lazy"
                      src="https://res.cloudinary.com/dgts9ksog/image/upload/v1777795114/iron-forge-fitness_rf06xc.webp" 
                      alt="Iron Forge Fitness - Gym Website Design" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                  </div>
                  <p className="text-[0.7rem] uppercase tracking-widest text-[#fb5c01] font-bold mb-2">Fitness & Gym</p>
                  <h3 className="text-2xl font-black text-[#1d1b18]">Iron Forge Fitness</h3>
                  <p className="text-[#5b4137] mt-2">A bold and energetic gym website built to attract members and reflect a professional brand.</p>
                </FadeIn>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-40 px-8 bg-[#fef9f2]" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-24">
              <HelpCircle className="w-12 h-12 text-[#fb5c01] mx-auto mb-6" aria-hidden="true" />
              <h2 id="faq-heading" className="text-[2.5rem] font-black text-[#1d1b18]">Common Questions</h2>
              <p className="text-[#5b4137] mt-4">Everything you need to know about getting your business website live in India.</p>
            </FadeIn>
            <FadeIn>
              <div className="space-y-4">
                <FAQItem 
                  question="How much does a website cost in India?"
                  answer="Our pricing starts from ₹27,000 for a professional business website. We offer transparent, one-time payment packages with no hidden monthly fees for the design and development."
                />
                <FAQItem 
                  question="How long does it take to build a website?"
                  answer="Most of our projects go live in 7-10 days. We focus on efficiency and clear communication to ensure your digital presence is built quickly without compromising quality."
                />
                <FAQItem 
                  question="Will my website work on mobile phones?"
                  answer="Absolutely. Over 80% of web traffic in India comes from mobile devices. We build every site with a mobile-first philosophy to ensure it looks and works perfectly on all smartphones."
                />
                <FAQItem 
                  question="Do I need to be tech-savvy to manage my site?"
                  answer="Not at all. We build using modern but simple systems, and we provide guidance on how to make small updates. For our Growth and Authority tiers, we include an easy-to-use CMS."
                />
                <FAQItem 
                  question="Is SEO included in your services?"
                  answer="Yes, all our websites are built with clean, search-engine-friendly code. We ensure proper metadata, fast loading speeds, and structured data are implemented from day one."
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-40 px-8 bg-[#f8f3ed]" aria-labelledby="pricing-heading">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-24">
              <h2 id="pricing-heading" className="text-[2.5rem] font-black tracking-tight text-[#1d1b18]">Simple, Transparent Pricing.</h2>
              <p className="text-[#5b4137] mt-4">No hidden fees. One-time payment for your professional presence.</p>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn className="bg-white p-10 lg:p-12 rounded-3xl border border-[#e4bfb1]/20 flex flex-col transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(251,92,1,0.15)] hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fb5c01]/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" aria-hidden="true"></div>
                <p className="text-[10px] text-[#fb5c01] font-black uppercase tracking-[0.2em] mb-4">Discovery Tier</p>
                <h3 className="text-3xl font-black text-[#1d1b18] mb-6 group-hover:text-[#fb5c01] transition-colors">Launch</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-[#1d1b18]">₹27,000</span>
                  <span className="text-[#5b4137]/60 text-sm font-bold uppercase">One-time</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Professional 5-Page Website</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Mobile-first Responsive Design</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> WhatsApp & Call Integration</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Google Search Optimized</li>
                </ul>
                <Button to="/contact" variant="outline" className="w-full">Get Started</Button>
              </FadeIn>

              <FadeIn className="bg-[#fef9f2] p-10 lg:p-12 rounded-3xl border-2 border-[#fb5c01] flex flex-col relative lg:scale-110 shadow-[0_20px_50px_rgba(251,92,1,0.15)] transition-all duration-500 hover:-translate-y-4 group z-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#fb5c01]/10 rounded-bl-full -mr-20 -mt-20 transition-transform duration-500 group-hover:scale-150" aria-hidden="true"></div>
                <div className="flex justify-between items-start mb-4">
                  <p className="text-sm text-[#fb5c01] font-black uppercase tracking-[0.2em]">Revenue Engine</p>
                  <div className="bg-[#fb5c01] text-white text-[9px] font-black uppercase tracking-[0.1em] px-3 py-1 rounded-full shadow-md">Most Popular ⭐</div>
                </div>
                <h3 className="text-3xl font-black text-[#1d1b18] mb-6 group-hover:text-[#fb5c01] transition-colors">Growth</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-[#1d1b18]">₹42,000</span>
                  <span className="text-[#5b4137]/60 text-sm font-bold uppercase">One-time</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3 text-sm font-medium text-[#1d1b18]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Everything in Launch</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-[#1d1b18]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Self-Editable CMS Content</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-[#1d1b18]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Domain & Hosting Included (1yr)</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-[#1d1b18]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Priority Support</li>
                </ul>
                <Button to="/contact" className="w-full">Choose Growth</Button>
              </FadeIn>

              <FadeIn className="bg-white p-10 lg:p-12 rounded-3xl border border-[#e4bfb1]/20 flex flex-col transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(251,92,1,0.15)] hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fb5c01]/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" aria-hidden="true"></div>
                <p className="text-[10px] text-[#fb5c01] font-black uppercase tracking-[0.2em] mb-4">Market Leader</p>
                <h3 className="text-3xl font-black text-[#1d1b18] mb-6 group-hover:text-[#fb5c01] transition-colors">Authority</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-[#1d1b18]">₹62,000</span>
                  <span className="text-[#5b4137]/60 text-sm font-bold uppercase">One-time</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Custom Branding & Identity</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Advanced UI/UX Effects</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Performance Optimization</li>
                  <li className="flex items-center gap-3 text-sm font-medium text-[#5b4137]"><CheckCircle size={18} className="text-[#fb5c01] shrink-0" /> Full Market Strategy Audit</li>
                </ul>
                <Button to="/contact" variant="outline" className="w-full">Go Authority</Button>
              </FadeIn>
            </StaggerContainer>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-48 px-8 bg-[#fef9f2]">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="text-[3rem] md:text-[4.5rem] font-black tracking-tight leading-[1.05] text-[#1d1b18] mb-12">
              Ready to grow your Indian <br /><span className="text-[#fb5c01]">business?</span>
            </h2>
            <Button to="/contact" size="lg" className="shadow-2xl shadow-[#fb5c01]/20">
              Get Your Solution Now
            </Button>
          </FadeIn>
        </section>
      </main>
    </>
  );
};
