import { Helmet } from "react-helmet-async";
import { FadeIn, StaggerContainer } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Real Estate Website",
      category: "Architecture & Dev",
      description: "Designed to increase property inquiries and trust for a luxury real estate firm.",
      image: "https://picsum.photos/seed/re/800/1000",
      size: "large"
    },
    {
      id: 2,
      title: "Direct-to-Consumer Tech",
      category: "Brand & UI/UX",
      description: "A clean, modern interface built to turn tech enthusiasts into loyal customers.",
      image: "https://picsum.photos/seed/tech/800/1000",
      size: "large",
      offset: true
    },
    {
      id: 3,
      title: "Enterprise Rebrand",
      category: "Strategy",
      description: "Repositioning a traditional business as a modern market leader in India.",
      image: "https://picsum.photos/seed/corp/800/600",
      size: "wide"
    },
    {
      id: 4,
      title: "Fashion Platform",
      category: "Full-Stack Dev",
      description: "A fast-loading retail site built for better mobile shopping engagement.",
      image: "https://picsum.photos/seed/fashion/800/1000",
      size: "large"
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
                <div className="group cursor-pointer">
                  <div className={`overflow-hidden rounded-lg bg-[#f8f3ed] mb-6 ${project.size === 'wide' ? 'aspect-[4/3]' : 'aspect-[4/5]'}`}>
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
                      <h3 className="text-[1.75rem] font-bold tracking-tight text-[#1d1b18]">{project.title}</h3>
                      <p className="text-sm text-[#5b4137] mt-2 max-w-xs">{project.description}</p>
                    </div>
                    <ArrowUpRight className="text-[#5b4137] group-hover:text-[#fb5c01] transition-colors duration-300" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </section>

        {/* CTA Section */}
        <section className="bg-[#ece7e2] py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
              <FadeIn direction="right">
                <h2 className="text-[3.5rem] font-black mb-8 text-[#1d1b18] leading-[1.1]">Ready to grow your business?</h2>
                <p className="text-xl text-[#5b4137] mb-12 max-w-md leading-relaxed">
                  Stop guessing. Start growing. Let's build a website that brings you real customers.
                </p>
                <Button to="/contact" size="lg">
                  Book a Call Now
                </Button>
              </FadeIn>
              <FadeIn direction="left" className="relative hidden md:block">
                <div className="relative p-12 bg-white rounded-xl border border-[#e4bfb1]/10 shadow-sm">
                  <blockquote className="text-2xl font-medium leading-snug italic text-[#1d1b18]">
                    "The team at ClientFuel didn't just build a site; they built a revenue engine. The ROI was visible within the first 60 days."
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#ece7e2] overflow-hidden">
                      <img 
                        referrerPolicy="no-referrer"
                        src="https://picsum.photos/seed/ceo/100/100" 
                        alt="Jameson Thorne" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[#1d1b18]">Jameson Thorne</p>
                      <p className="text-xs uppercase tracking-widest text-[#5b4137]">CEO, Altus Group</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

