import React from "react";
import { SEO } from "@/src/components/SEO";
import { FadeIn } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";

export const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 Page Not Found | ClientFuel"
        description="The page you are looking for doesn't exist. Please navigate back to home to find what you need."
        robots="noindex, follow"
      />
      <main className="min-h-screen flex items-center justify-center p-8 bg-[#fef9f2]">
        <div className="max-w-xl w-full text-center">
          <FadeIn>
            <div className="text-[8rem] md:text-[12rem] font-black text-[#fb5c01] leading-none mb-4 opacity-20">404</div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1d1b18] mb-8">Page Not Found.</h1>
            <p className="text-xl text-[#5b4137] mb-12">Oops! The page you're searching for seems to have vanished or never existed.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button to="/">Back to Home</Button>
              <Button to="/services" variant="outline">View Services</Button>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  );
};
