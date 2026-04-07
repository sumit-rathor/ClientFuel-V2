import { Link } from "react-router-dom";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#f8f3ed] border-t border-[#e4bfb1]/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="text-2xl font-black text-[#1d1b18] tracking-tight">
              ClientFuel
            </Link>
            <p className="text-base text-[#5b4137] leading-relaxed max-w-sm">
              We build high-performance websites for local Indian businesses. Our mission is simple: to turn your online presence into a client-generating machine.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="md:col-span-3 space-y-8">
            <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-[#1d1b18]">
              Explore
            </h5>
            <nav className="flex flex-col gap-4">
              <Link to="/portfolio" className="text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                Our Work
              </Link>
              <Link to="/services" className="text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                Get in Touch
              </Link>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="md:col-span-4 space-y-8">
            <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-[#1d1b18]">
              Connect
            </h5>
            <div className="flex flex-col gap-4">
              <a href="mailto:clientfuel.in@gmail.com" className="group flex items-center gap-3 text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#e4bfb1]/20 group-hover:border-[#fb5c01]/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                clientfuel.in@gmail.com
              </a>
              <a href="https://wa.me/917727995722" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#e4bfb1]/20 group-hover:border-[#fb5c01]/30 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                +91 7727995722
              </a>
              <a href="https://www.linkedin.com/in/sumitclientfuel/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#e4bfb1]/20 group-hover:border-[#fb5c01]/30 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-[#e4bfb1]/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-[#8f7065] font-medium">
            © 2026 ClientFuel Agency. All rights reserved.
          </p>
          <div className="flex gap-8">
             <span className="text-[10px] uppercase tracking-widest text-[#8f7065] font-bold">Web Design Agency India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
