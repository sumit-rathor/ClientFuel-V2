import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#f8f3ed] border-t border-[#e4bfb1]/10">
      <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-lg font-black text-[#1d1b18]">
            ClientFuel
          </Link>
          <p className="text-xs uppercase tracking-widest text-[#5b4137] leading-loose max-w-xs">
            Editorial performance agency for high-growth tech firms. Crafting digital authority through intentional design and code.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h5 className="text-xs uppercase tracking-widest font-bold text-[#1d1b18]">
              Navigation
            </h5>
            <div className="flex flex-col gap-2">
              <Link to="/portfolio" className="text-xs uppercase tracking-widest text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                Work
              </Link>
              <Link to="/services" className="text-xs uppercase tracking-widest text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-xs uppercase tracking-widest text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-xs uppercase tracking-widest text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-xs uppercase tracking-widest font-bold text-[#1d1b18]">
              Connect
            </h5>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@clientfuel.com" className="text-xs uppercase tracking-widest text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                Email
              </a>
              <a href="#" className="text-xs uppercase tracking-widest text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                WhatsApp
              </a>
              <a href="#" className="text-xs uppercase tracking-widest text-[#5b4137] hover:text-[#fb5c01] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between md:items-end">
          <div className="space-y-4 md:text-right">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1d1b18] block">
              Office
            </span>
            <p className="text-xs uppercase tracking-widest text-[#5b4137]">
              Design District<br />Greater London, UK
            </p>
          </div>
          <div className="pt-12 md:pt-0">
            <p className="text-[10px] uppercase tracking-widest text-[#8f7065]">
              © 2024 ClientFuel Agency. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
