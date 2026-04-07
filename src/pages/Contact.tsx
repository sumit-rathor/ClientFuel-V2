import { Helmet } from "react-helmet-async";
import { FadeIn } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | ClientFuel Agency</title>
        <meta name="description" content="Ready to scale? Let's get started. We don't do generic proposals. Tell us where you want to be in 12 months." />
      </Helmet>

      <main className="pt-48 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-12">
              <FadeIn direction="right">
                <span className="text-[0.75rem] uppercase tracking-[0.1em] text-[#fb5c01] font-bold mb-4 block">Ready to scale?</span>
                <h1 className="text-[3.5rem] font-black leading-[1.1] tracking-[-0.04em] text-[#1d1b18] mb-8">Let's Get Started</h1>
                <p className="text-[#5b4137] text-lg leading-relaxed max-w-md">
                  We don't do generic proposals. Tell us where you want to be in 12 months, and we'll show you how to get there.
                </p>
              </FadeIn>

              {/* Booking Card */}
              <FadeIn direction="right" delay={0.2}>
                <div className="p-10 bg-white rounded-lg border border-[#e4bfb1]/10 shadow-sm group transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[#f8f3ed]">
                      <img 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover" 
                        src="https://picsum.photos/seed/contact/100/100" 
                        alt="Team Member" 
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1d1b18]">Meet with our team</h3>
                      <p className="text-xs text-[#5b4137] uppercase tracking-widest">15-minute Discovery Call</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#5b4137] mb-8 leading-relaxed">
                    Skip the back-and-forth. Select a time that works for you and let's discuss your performance goals directly.
                  </p>
                  <Button size="lg" className="w-full">
                    Book a Call
                  </Button>
                </div>
              </FadeIn>

              {/* Quick Options */}
              <FadeIn direction="right" delay={0.3} className="space-y-4 pt-8">
                <h4 className="text-[0.75rem] uppercase tracking-[0.1em] text-[#5b4137] font-bold">Quick Connect</h4>
                <div className="flex flex-col gap-3">
                  <a href="#" className="flex items-center gap-3 text-[#1d1b18] hover:text-[#fb5c01] transition-colors group">
                    <MessageSquare size={18} className="text-[#fb5c01]" />
                    <span className="text-sm font-medium">WhatsApp: +1 (555) 000-0000</span>
                  </a>
                  <a href="mailto:hello@clientfuel.com" className="flex items-center gap-3 text-[#1d1b18] hover:text-[#fb5c01] transition-colors group">
                    <Mail size={18} className="text-[#fb5c01]" />
                    <span className="text-sm font-medium">Email: hello@clientfuel.com</span>
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <FadeIn direction="left">
                <div className="bg-[#f8f3ed] p-12 lg:p-20 rounded-xl relative overflow-hidden">
                  <form className="space-y-12 relative z-10">
                    <div className="space-y-10">
                      <div className="group relative">
                        <label className="block text-xs uppercase tracking-widest text-[#5b4137] font-bold mb-2 transition-all group-focus-within:text-[#fb5c01]">Your Name</label>
                        <input 
                          className="w-full bg-transparent border-0 border-b border-[#e4bfb1]/30 py-4 focus:ring-0 focus:border-[#fb5c01] text-xl placeholder:text-stone-300 transition-all outline-none" 
                          placeholder="John Doe" 
                          type="text"
                        />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs uppercase tracking-widest text-[#5b4137] font-bold mb-2 transition-all group-focus-within:text-[#fb5c01]">Email Address</label>
                        <input 
                          className="w-full bg-transparent border-0 border-b border-[#e4bfb1]/30 py-4 focus:ring-0 focus:border-[#fb5c01] text-xl placeholder:text-stone-300 transition-all outline-none" 
                          placeholder="john@company.com" 
                          type="email"
                        />
                      </div>
                      <div className="group relative">
                        <label className="block text-xs uppercase tracking-widest text-[#5b4137] font-bold mb-2 transition-all group-focus-within:text-[#fb5c01]">What do you need help with?</label>
                        <div className="flex flex-wrap gap-3 mt-4">
                          {["Scaling Ads", "Creative Strategy", "Email Marketing", "Other"].map((option) => (
                            <button 
                              key={option}
                              type="button"
                              className="px-5 py-2 rounded-full border border-[#e4bfb1]/50 text-xs font-bold uppercase tracking-widest hover:bg-[#fb5c01] hover:border-[#fb5c01] hover:text-white transition-all"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="group relative">
                        <label className="block text-xs uppercase tracking-widest text-[#5b4137] font-bold mb-2 transition-all group-focus-within:text-[#fb5c01]">Tell us about your project</label>
                        <textarea 
                          className="w-full bg-transparent border-0 border-b border-[#e4bfb1]/30 py-4 focus:ring-0 focus:border-[#fb5c01] text-xl placeholder:text-stone-300 transition-all outline-none resize-none" 
                          placeholder="How can we help you win?" 
                          rows={4}
                        />
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-4 text-[#1d1b18] font-black text-2xl group transition-all" type="submit">
                      Send Message
                      <ArrowRight className="text-[#fb5c01] group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </form>
                  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#fb5c01]/5 rounded-full blur-3xl pointer-events-none"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
