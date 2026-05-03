import { Helmet } from "react-helmet-async";
import { FadeIn, StaggerContainer } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Royal Horizon Realty",
      category: "Luxury Real Estate",
      description: "A modern luxury real estate website crafted to showcase premium Jaipur properties with elegance, trust, and high-converting design.",
      image: `${import.meta.env.BASE_URL}royal-horizon-realty.webp`,
      link: "https://royal-horizon-realty.vercel.app/",
      size: "wide"
    },
    {
      id: 2,
      title: "Iron Forge Fitness",
      category: "Fitness & Gym",
      description: "A bold and energetic gym website built to attract members, highlight services, and reflect a professional fitness brand.",
      image: `${import.meta.env.BASE_URL}iron-forge-fitness.webp`,
      link: "https://iron-forge-fitness-gym.vercel.app/",
      size: "wide",
      offset: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Work | ClientFuel Portfolio | Websites for Indian Businesses</title>
        <meta name="description" content="See how we've helped local Indian businesses grow their client base with conversion-focused web design." />
      </Helmet>

      <main className="pt-32">
        <header className="max-w-7xl mx-auto px-8 mb-24">
          <FadeIn direction="right">
            <span className="text-[0.75rem] uppercase tracking-widest text-[#fb5c01] font-bold mb-4 block">Selected Projects</span>
            <h1 className="text-[3.5rem] md:text-[5rem] font-black leading-[1.1] tracking-[-0.04em] text-[#1d1b18] max-w-3xl">Our Work — Websites for Local Business Success</h1>
            <p className="mt-8 text-lg text-[#5b4137] max-w-xl leading-relaxed">
              We build websites that bring results. Every project here was designed with one goal: to get more clients for the business.
            </p>
          </FadeIn>
        </header>

        <section className="max-w-7xl mx-auto px-8 pb-40">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((project) => (
              <FadeIn 
                key={project.id} 
                className={project.offset ? "md:mt-32" : ""}
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group cursor-pointer block"
                >
                  <div className={`overflow-hidden rounded-lg bg-[#f8f3ed] mb-6 border border-[#e4bfb1]/10 ${project.size === 'wide' ? 'aspect-video' : 'aspect-[4/5]'}`}>
                    <img 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100" 
                      src={project.image} 
                      alt={project.title} 
                    />
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#fb5c01] font-bold mb-2 block">{project.category}</span>
                      <h3 className="text-[1.75rem] font-bold tracking-tight text-[#1d1b18] group-hover:text-[#fb5c01] transition-colors duration-300">{project.title}</h3>
                      <p className="text-sm text-[#5b4137] mt-2 max-w-xs">{project.description}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-[#e4bfb1]/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#fb5c01] group-hover:border-[#fb5c01] group-hover:-translate-y-2 group-hover:translate-x-2">
                      <ArrowUpRight className="text-[#1d1b18] group-hover:text-white transition-colors duration-300 w-5 h-5" />
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </StaggerContainer>
        </section>

        {/* CTA Section */}
        <section className="bg-[#ece7e2] py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative text-center">
            <FadeIn>
              <h2 className="text-[3.5rem] font-black mb-8 text-[#1d1b18] leading-[1.1]">Ready to grow your business?</h2>
              <p className="text-xl text-[#5b4137] mb-12 max-w-2xl mx-auto leading-relaxed">
                Stop guessing. Start growing. Let's build a website that brings you real customers.
              </p>
              <Button to="/contact" size="lg">
                Book a Call Now
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
};

