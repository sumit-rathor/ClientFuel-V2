import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FadeIn } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { MessageSquare, Mail, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [selectedService, setSelectedService] = useState("Starter Website");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    formData.append("service", selectedService);

    try {
      const response = await fetch("https://formspree.io/f/mgopqlwo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Book a Call | ClientFuel | Web Design Agency in India</title>
        <meta name="description" content="Ready to get more customers? Book a call with ClientFuel. We offer quick WhatsApp and Email support for local Indian businesses." />
      </Helmet>

      <main className="pt-48 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-12">
              <FadeIn direction="right">
                <span className="text-[0.75rem] uppercase tracking-[0.1em] text-[#fb5c01] font-bold mb-4 block">Ready to grow?</span>
                <h1 className="text-[3.5rem] font-black leading-[1.1] tracking-[-0.04em] text-[#1d1b18] mb-8">Small Business Website India — Book a Call</h1>
                <p className="text-[#5b4137] text-lg leading-relaxed max-w-md">
                  We don't do generic proposals. Tell us where you want your business to be in 12 months, and we'll show you how to get there.
                </p>
              </FadeIn>

              {/* Booking Card */}
              <FadeIn direction="right" delay={0.2}>
                <div className="p-10 bg-white rounded-xl border border-[#e4bfb1]/10 shadow-sm group transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[#f8f3ed]">
                      <img 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover" 
                        src="https://picsum.photos/seed/contact/100/100" 
                        alt="Founder" 
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1d1b18]">Talk to the Founder</h3>
                      <p className="text-xs text-[#5b4137] uppercase tracking-widest">15-minute Discovery Call</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#5b4137] mb-8 leading-relaxed">
                    Skip the back-and-forth. Select a time that works for you and let's discuss your business growth directly.
                  </p>
                  <Button size="lg" className="w-full">
                    Book a Call Now
                  </Button>
                </div>
              </FadeIn>

              {/* Quick Options */}
              <FadeIn direction="right" delay={0.3} className="space-y-4 pt-8">
                <h4 className="text-[0.75rem] uppercase tracking-[0.1em] text-[#5b4137] font-bold">Quick Connect</h4>
                <div className="flex flex-col gap-3">
                  <a href="https://wa.me/917727995722" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#1d1b18] hover:text-[#fb5c01] transition-colors group">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-[18px] h-[18px] text-[#fb5c01]"
                    >
                      <path d="M21 12a9 9 0 0 1-9 9c-1.5 0-3-.4-4.3-1.1L3 21l1.1-5.7C3.4 14 3 12.5 3 11a9 9 0 1 1 18 1z" />
                      <path d="M17.47 14.39c-.34-.17-2.01-.99-2.32-1.11-.31-.11-.54-.17-.77.17-.23.34-.89 1.11-1.09 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.54-.28-.67-.56-.58-.77-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.19 1.16-1.19 2.83 0 1.67 1.22 3.28 1.39 3.51.17.23 2.4 3.66 5.81 5.13.81.35 1.44.56 1.93.72.82.26 1.56.22 2.15.14.65-.1 2.01-.82 2.29-1.61.28-.79.28-1.47.2-1.61-.09-.14-.31-.22-.65-.39z" />
                    </svg>
                    <span className="text-sm font-medium">WhatsApp Support: +91 7727995722</span>
                  </a>
                  <a href="mailto:clientfuel.in@gmail.com" className="flex items-center gap-3 text-[#1d1b18] hover:text-[#fb5c01] transition-colors group">
                    <Mail size={18} className="text-[#fb5c01]" />
                    <span className="text-sm font-medium">Email: clientfuel.in@gmail.com</span>
                  </a>
                </div>
                <p className="text-xs text-[#8f7065]">We usually respond within 2-4 hours.</p>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <FadeIn direction="left">
                <div className="bg-[#f8f3ed] p-12 lg:p-20 rounded-xl relative overflow-hidden">
                  {status === "success" ? (
                    <div className="relative z-10 flex flex-col items-center justify-center text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h2 className="text-3xl font-black text-[#1d1b18] mb-4">Message Sent!</h2>
                      <p className="text-[#5b4137] text-lg mb-8 max-w-sm">
                        Thanks for reaching out. We've received your message and will get back to you within 2-4 hours.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setStatus("idle")}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                      <div className="space-y-10">
                        <div className="group relative">
                          <label className="block text-xs uppercase tracking-widest text-[#5b4137] font-bold mb-2 transition-all group-focus-within:text-[#fb5c01]">Your Name</label>
                          <input 
                            required
                            name="name"
                            className="w-full bg-transparent border-0 border-b border-[#e4bfb1]/30 py-4 focus:ring-0 focus:border-[#fb5c01] text-xl placeholder:text-stone-300 transition-all outline-none" 
                            placeholder="Enter your name" 
                            type="text"
                          />
                        </div>
                        <div className="group relative">
                          <label className="block text-xs uppercase tracking-widest text-[#5b4137] font-bold mb-2 transition-all group-focus-within:text-[#fb5c01]">Email Address</label>
                          <input 
                            required
                            name="email"
                            className="w-full bg-transparent border-0 border-b border-[#e4bfb1]/30 py-4 focus:ring-0 focus:border-[#fb5c01] text-xl placeholder:text-stone-300 transition-all outline-none" 
                            placeholder="Enter your email" 
                            type="email"
                          />
                        </div>
                        <div className="group relative">
                          <label className="block text-xs uppercase tracking-widest text-[#5b4137] font-bold mb-2 transition-all group-focus-within:text-[#fb5c01]">What do you need help with?</label>
                          <div className="flex flex-wrap gap-3 mt-4">
                            {["Starter Website", "Growth Website", "Premium Website", "Other"].map((option) => (
                              <button 
                                key={option}
                                type="button"
                                onClick={() => setSelectedService(option)}
                                className={`px-5 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${
                                  selectedService === option 
                                    ? "bg-[#fb5c01] border-[#fb5c01] text-white" 
                                    : "border-[#e4bfb1]/50 hover:bg-[#fb5c01] hover:border-[#fb5c01] hover:text-white"
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="group relative">
                          <label className="block text-xs uppercase tracking-widest text-[#5b4137] font-bold mb-2 transition-all group-focus-within:text-[#fb5c01]">Tell us about your business</label>
                          <textarea 
                            required
                            name="message"
                            className="w-full bg-transparent border-0 border-b border-[#e4bfb1]/30 py-4 focus:ring-0 focus:border-[#fb5c01] text-xl placeholder:text-stone-300 transition-all outline-none resize-none" 
                            placeholder="How can we help you get more clients?" 
                            rows={4}
                          />
                        </div>
                      </div>

                      {status === "error" && (
                        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                          <AlertCircle size={18} />
                          <p className="text-sm font-medium">Something went wrong. Please try again or contact us via WhatsApp.</p>
                        </div>
                      )}

                      <button 
                        disabled={status === "loading"}
                        className="inline-flex items-center gap-4 text-[#1d1b18] font-black text-2xl group transition-all disabled:opacity-50 disabled:cursor-not-allowed" 
                        type="submit"
                      >
                        {status === "loading" ? "Sending..." : "Send Message"}
                        <ArrowRight className="text-[#fb5c01] group-hover:translate-x-2 transition-transform duration-300" />
                      </button>
                    </form>
                  )}
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

