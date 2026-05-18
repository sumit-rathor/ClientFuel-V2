import React from "react";
import { SEO } from "@/src/components/SEO";
import { FadeIn, StaggerContainer } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us | Hire the Best Web Agency in India"
        description="Ready to fuel your business growth? Contact ClientFuel today for a free consultation. We offer premium web design and development across India."
        canonicalPath="/contact"
      />

      <main className="pt-32">
        <header className="max-w-7xl mx-auto px-8 mb-24">
          <FadeIn direction="right">
            <div className="text-[0.75rem] font-bold tracking-[0.1em] text-[#fb5c01] mb-6 uppercase">Get in touch</div>
            <h1 className="text-[3.5rem] md:text-[5rem] font-black leading-[1.1] tracking-[-0.04em] text-[#1d1b18] mb-8">
              Let's build your <br /><span className="text-[#fb5c01]">Success Story.</span>
            </h1>
          </FadeIn>
        </header>

        <section className="max-w-7xl mx-auto px-8 pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <FadeIn direction="right">
                <div className="space-y-12">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-[#f8f3ed] rounded-full flex items-center justify-center group-hover:bg-[#fb5c01] transition-all duration-300">
                      <Mail className="text-[#fb5c01] w-5 h-5 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#fb5c01] uppercase tracking-widest mb-2">Email us</p>
                      <a href="mailto:hello@clientfuel.in" className="text-2xl font-bold text-[#1d1b18] hover:text-[#fb5c01] transition-colors">hello@clientfuel.in</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-[#f8f3ed] rounded-full flex items-center justify-center group-hover:bg-[#fb5c01] transition-all duration-300">
                      <MessageSquare className="text-[#fb5c01] w-5 h-5 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#fb5c01] uppercase tracking-widest mb-2">WhatsApp</p>
                      <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-[#1d1b18] hover:text-[#fb5c01] transition-colors">+91 WhatsApp Support</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-[#f8f3ed] rounded-full flex items-center justify-center group-hover:bg-[#fb5c01] transition-all duration-300">
                      <MapPin className="text-[#fb5c01] w-5 h-5 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#fb5c01] uppercase tracking-widest mb-2">Service Area</p>
                      <p className="text-2xl font-bold text-[#1d1b18]">JAIPUR & ALL INDIA</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <FadeIn direction="left">
                <form className="bg-white p-12 rounded-3xl shadow-xl border border-[#e4bfb1]/10 space-y-8" action="#" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-bold text-[#1d1b18] uppercase tracking-widest">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="w-full bg-[#f8f3ed] border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#fb5c01] transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-bold text-[#1d1b18] uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full bg-[#f8f3ed] border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#fb5c01] transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="service" className="text-sm font-bold text-[#1d1b18] uppercase tracking-widest">Interested In</label>
                    <select 
                      id="service"
                      name="service"
                      className="w-full bg-[#f8f3ed] border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#fb5c01] transition-all appearance-none"
                    >
                      <option>Website Design</option>
                      <option>Website Development</option>
                      <option>Growth Package</option>
                      <option>Other Services</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-bold text-[#1d1b18] uppercase tracking-widest">Project Details</label>
                    <textarea 
                      id="message"
                      name="message"
                      placeholder="Tell us about your business..."
                      rows={5}
                      className="w-full bg-[#f8f3ed] border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#fb5c01] transition-all"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full py-6 rounded-xl flex items-center justify-center gap-3">
                    Send Inquiry <Send size={18} />
                  </Button>
                </form>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
