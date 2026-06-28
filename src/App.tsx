import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import * as ReactHelmetAsync from "react-helmet-async";
const { HelmetProvider } = ReactHelmetAsync;
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { AnalyticsTracker } from "./components/AnalyticsTracker";
import { AnimatePresence, motion } from "motion/react";

// Lazy loading for performance
const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Services = lazy(() => import("./pages/Services").then(m => ({ default: m.Services })));
const Portfolio = lazy(() => import("./pages/Portfolio").then(m => ({ default: m.Portfolio })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const NotFound = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));

// New SEO Sub-pages
const WebDesign = lazy(() => import("./pages/services/WebDesign"));
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const ConversionOptimization = lazy(() => import("./pages/services/ConversionOptimization"));
const CaseStudy = lazy(() => import("./pages/portfolio/CaseStudy"));

// Legal Pages
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/legal/TermsConditions"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#fef9f2]">
    <div className="w-12 h-12 border-4 border-[#fb5c01]/20 border-t-[#fb5c01] rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <AnalyticsTracker />
      <div className="min-h-screen bg-[#fef9f2] text-[#1d1b18] selection:bg-[#fb5c01] selection:text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
              
              {/* Sub-services */}
              <Route path="/services/website-design" element={<PageWrapper><WebDesign /></PageWrapper>} />
              <Route path="/services/website-development" element={<PageWrapper><WebDevelopment /></PageWrapper>} />
              <Route path="/services/conversion-optimization" element={<PageWrapper><ConversionOptimization /></PageWrapper>} />
              
              <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
              <Route path="/portfolio/:slug" element={<PageWrapper><CaseStudy /></PageWrapper>} />
              
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              
              {/* Legal */}
              <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
              <Route path="/terms" element={<PageWrapper><TermsConditions /></PageWrapper>} />
              
              <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
          </Suspense>
        </AnimatePresence>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
