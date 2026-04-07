import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { cn } from "@/src/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Work", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 py-6 px-8",
        isScrolled
          ? "bg-[#fef9f2]/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-[#1d1b18]"
        >
          ClientFuel
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-tight transition-all duration-300 hover:text-[#fb5c01]",
                location.pathname === link.path
                  ? "text-[#1d1b18] border-b-2 border-[#fb5c01] pb-1"
                  : "text-[#5b4137]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button to="/contact" size="sm">
            Book a Call
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#1d1b18]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#fef9f2] border-t border-[#e4bfb1]/20 p-8 flex flex-col gap-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-lg font-bold tracking-tight",
                  location.pathname === link.path
                    ? "text-[#fb5c01]"
                    : "text-[#1d1b18]"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button to="/contact" size="lg" className="w-full">
              Book a Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
