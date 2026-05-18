import { Link } from "react-router";
import { Linkedin, Mail, ShieldCheck, FileText, Lock, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#f8f3ed] border-t border-[#e4bfb1]/10 pt-24 pb-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105 active:scale-95 w-fit" aria-label="ClientFuel Home">
              <img src="/logo.svg" alt="" className="h-10 w-auto" aria-hidden="true" />
              <span className="ml-2.5 text-2xl font-black tracking-[-0.04em] text-[#1d1b18]">ClientFuel</span>
            </Link>
            <p className="text-base text-[#5b4137] leading-relaxed max-w-sm">
              We build high-performance websites for Indian businesses. Our mission is simple: to turn your online presence into a client-generating machine.
            </p>
          </div>

          {/* Services Section */}
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#1d1b18]">
              Services
            </h3>
            <nav className="flex flex-col gap-4" aria-label="Footer Services Navigation">
              <Link to="/services/website-design" className="text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                Website Design
              </Link>
              <Link to="/services/website-development" className="text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                Web Development
              </Link>
              <Link to="/services/conversion-optimization" className="text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                CRO Testing
              </Link>
            </nav>
          </div>

          {/* Navigation Section */}
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#1d1b18]">
              Resources
            </h3>
            <nav className="flex flex-col gap-4" aria-label="Footer Resources Navigation">
              <Link to="/portfolio" className="text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                Our Work
              </Link>
              <Link to="/about" className="text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                About Us
              </Link>
              <Link to="/privacy" className="text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors flex items-center gap-2">
                <Lock size={14} /> Privacy
              </Link>
              <Link to="/terms" className="text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors flex items-center gap-2">
                <FileText size={14} /> Terms
              </Link>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="md:col-span-3 space-y-8">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#1d1b18]">
              Connect
            </h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:contact@clientfuel.in" className="group flex items-center gap-3 text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#e4bfb1]/20 group-hover:border-[#fb5c01]/30 transition-colors">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </div>
                contact@clientfuel.in
              </a>
              <a href="https://wa.me/917727995722" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#e4bfb1]/20 group-hover:border-[#fb5c01]/30 transition-colors">
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                </div>
                WhatsApp Support
              </a>
              <a href="https://www.linkedin.com/company/clientfuel/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#e4bfb1]/20 group-hover:border-[#fb5c01]/30 transition-colors">
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </div>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-[#e4bfb1]/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-[#8f7065] font-medium">
            © 2026 ClientFuel. All rights reserved. Registered Professional Service in India.
          </p>
          <div className="flex gap-8">
             <span className="text-[10px] uppercase tracking-widest text-[#8f7065] font-black border-l-2 border-[#fb5c01] pl-3 flex items-center gap-2">
               <ShieldCheck size={14} className="text-[#fb5c01]" /> Secure Digital Partner
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
