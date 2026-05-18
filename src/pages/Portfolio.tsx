import React from "react";
import { SEO } from "@/src/components/SEO";
import { Link } from "react-router";
import { FadeIn, StaggerContainer } from "@/src/components/ui/Animations";

export const Portfolio = () => {
  const projects = [
    {
      slug: "royal-horizon-realty",
      title: "Royal Horizon Realty",
      category: "Luxury Real Estate",
      description: "A modern luxury real estate website crafted to showcase premium Jaipur properties with elegance, trust, and high-converting design.",
      image: "https://res.cloudinary.com/dgts9ksog/image/upload/v1777795115/royal-horizon-realty_rpxbkr.webp",
      size: "wide"
    },
    {
      slug: "iron-forge-fitness",
      title: "Iron Forge Fitness",
      category: "Fitness & Gym",
      description: "A bold and energetic gym website built to attract members, highlight services, and reflect a professional fitness brand.",
      image: "https://res.cloudinary.com/dgts9ksog/image/upload/v1777795114/iron-forge-fitness_rf06xc.webp",
      size: "wide",
      offset: true
    }
  ];

  return (
    <>
      <SEO 
        title="Portfolio | Successful Web Projects in India"
        description="Explore our portfolio of high-performing websites. We've helped brands in Jaipur and across India achieve their digital goals."
        canonicalPath="/portfolio"
      />
      <main className="pt-32">
        <header className="max-w-7xl mx-auto px-8 mb-40" aria-labelledby="portfolio-heading">
          <FadeIn direction="right">
            <div className="text-[0.75rem] font-bold tracking-[0.1em] text-[#fb5c01] mb-6 uppercase">Our Portfolio</div>
            <h1 id="portfolio-heading" className="text-[3.5rem] md:text-[5rem] font-black leading-[1.1] tracking-[-0.04em] text-[#1d1b18] max-w-4xl mb-8">
              Work that gets <span className="text-[#fb5c01]">Results.</span>
            </h1>
            <p className="text-[1.125rem] leading-[1.6] text-[#5b4137] max-w-2xl">
              We collaborate with ambitious Indian brands to create digital standards that others follow.
            </p>
          </FadeIn>
        </header>

        <section className="max-w-7xl mx-auto px-8 mb-60" aria-label="Project showcase">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-40 items-start">
            {projects.map((project, index) => (
              <div 
                key={project.slug} 
                className={`lg:col-span-12 group cursor-pointer ${project.offset ? "lg:mt-32" : ""}`}
              >
                <Link to={`/portfolio/${project.slug}`}>
                  <FadeIn>
                    <div className="aspect-[21/9] overflow-hidden rounded-2xl bg-[#f8f3ed] mb-12 border border-[#e4bfb1]/10 shadow-sm transition-shadow hover:shadow-xl">
                      <img 
                        loading="lazy"
                        src={project.image} 
                        alt={`${project.title} Case Study - ${project.category}`} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                      <div className="max-w-2xl">
                        <p className="text-[0.75rem] uppercase tracking-[0.2em] text-[#fb5c01] font-bold mb-4">{project.category}</p>
                        <h2 className="text-[3rem] font-black leading-none text-[#1d1b18] mb-6">{project.title}</h2>
                        <p className="text-lg text-[#5b4137] leading-relaxed">{project.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="text-sm font-bold text-[#fb5c01] flex items-center gap-2 pb-1 relative overflow-hidden">
                          View Case Study
                          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </div>
                  </FadeIn>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1d1b18] py-40 px-8 text-white">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-black mb-12 leading-tight">Your project could be <br /><span className="text-[#fb5c01]">the next success story.</span></h2>
            <Link to="/contact">
              <button className="bg-[#fb5c01] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#ff6d1a] transition-all hover:scale-105">Start Your Project</button>
            </Link>
          </FadeIn>
        </section>
      </main>
    </>
  );
};
