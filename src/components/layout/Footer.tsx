import { Link } from "react-router-dom";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#f8f3ed] border-t border-[#e4bfb1]/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="inline-block">
              <img src="/logo.svg" alt="ClientFuel Logo" className="h-10 w-auto" />
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
              <a href="mailto:contact@clientfuel.in" className="group flex items-center gap-3 text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#e4bfb1]/20 group-hover:border-[#fb5c01]/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                contact@clientfuel.in
              </a>
              <a href="https://wa.me/917727995722" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm font-medium text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#e4bfb1]/20 group-hover:border-[#fb5c01]/30 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M21 12a9 9 0 0 1-9 9c-1.5 0-3-.4-4.3-1.1L3 21l1.1-5.7C3.4 14 3 12.5 3 11a9 9 0 1 1 18 1z" />
                    <path d="M17.47 14.39c-.34-.17-2.01-.99-2.32-1.11-.31-.11-.54-.17-.77.17-.23.34-.89 1.11-1.09 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.54-.28-.67-.56-.58-.77-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.19 1.16-1.19 2.83 0 1.67 1.22 3.28 1.39 3.51.17.23 2.4 3.66 5.81 5.13.81.35 1.44.56 1.93.72.82.26 1.56.22 2.15.14.65-.1 2.01-.82 2.29-1.61.28-.79.28-1.47.2-1.61-.09-.14-.31-.22-.65-.39z" />
                  </svg>
                </div>
                WhatsApp
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
            © 2026 ClientFuel. All rights reserved.
          </p>
          <div className="flex gap-8">
             <span className="text-[10px] uppercase tracking-widest text-[#8f7065] font-bold">Web Design Agency India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
