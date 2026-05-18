import React from "react";
import { useParams, Navigate, Link } from "react-router";
import { SEO } from "@/src/components/SEO";
import { FadeIn } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { CheckCircle } from "lucide-react";

const projects = {
  "royal-horizon-realty": {
    title: "Royal Horizon Realty",
    category: "Luxury Real Estate",
    description: "A modern luxury real estate website crafted to showcase premium Jaipur properties with elegance and trust.",
    challenge: "The client needed a digital platform that matched the luxury and premium nature of their high-end Jaipur properties while being extremely fast and user-friendly on mobile devices.",
    solution: "We built a high-performance custom website using React and Vite, focusing on huge imagery, minimal interface, and strategic lead generation forms.",
    results: ["45% increase in online inquiries", "Average page load time under 1.5s", "Significantly improved brand perception"],
    image: "https://res.cloudinary.com/dgts9ksog/image/upload/v1777795115/royal-horizon-realty_rpxbkr.webp",
    tech: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
    clientLink: "https://royal-horizon-realty.vercel.app/"
  },
  "iron-forge-fitness": {
    title: "Iron Forge Fitness",
    category: "Fitness & Gym",
    description: "A bold and energetic gym website built to attract members and reflect a professional fitness brand.",
    challenge: "The gym was struggling with a dated website that didn't reflect their modern facility or attract younger, fitness-conscious members.",
    solution: "A bold, high-contrast design with high-impact typography and smooth scroll animations. We integrated WhatsApp for instant membership queries.",
    results: ["30% boost in new membership inquiries", "Improved mobile conversion by 50%", "100% positive feedback on new brand identity"],
    image: "https://res.cloudinary.com/dgts9ksog/image/upload/v1777795114/iron-forge-fitness_rf06xc.webp",
    tech: ["React", "Vite", "Tailwind CSS", "WhatsApp Cloud API"],
    clientLink: "https://iron-forge-fitness-gym.vercel.app/"
  }
};

const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects[slug as keyof typeof projects];

  if (!project) return <Navigate to="/portfolio" />;

  return (
    <>
      <SEO 
        title={`${project.title} Case Study | ClientFuel Portfolio`}
        description={project.description}
        canonicalPath={`/portfolio/${slug}`}
        ogImage={project.image}
      />
      
      <main className="pt-32">
        <header className="max-w-7xl mx-auto px-8 mb-40 text-center">
          <FadeIn>
            <div className="text-[0.75rem] font-bold tracking-[0.1em] text-[#fb5c01] mb-6 uppercase">{project.category} Case Study</div>
            <h1 className="text-[3.5rem] md:text-[5rem] font-black leading-[1.1] tracking-[-0.04em] text-[#1d1b18] max-w-4xl mx-auto mb-12">
              {project.title}
            </h1>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full aspect-video object-cover rounded-2xl shadow-2xl mb-12 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </FadeIn>
        </header>

        <section className="max-w-5xl mx-auto px-8 mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
            <FadeIn direction="right">
              <h2 className="text-2xl font-bold text-[#1d1b18] mb-6">The Challenge</h2>
              <p className="text-lg leading-relaxed text-[#5b4137] italic">{project.challenge}</p>
            </FadeIn>
            <FadeIn direction="left">
              <h2 className="text-2xl font-bold text-[#1d1b18] mb-6">The Solution</h2>
              <p className="text-lg leading-relaxed text-[#5b4137]">{project.solution}</p>
            </FadeIn>
          </div>

          <div className="bg-[#f8f3ed] p-12 rounded-2xl mb-20">
            <FadeIn>
              <h2 className="text-2xl font-bold text-[#1d1b18] mb-8">Results & Impact</h2>
              <ul className="space-y-6">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="text-[#fb5c01] w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-xl font-medium text-[#1d1b18]">{result}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="flex flex-wrap gap-4 mb-20">
            {project.tech.map(t => (
              <span key={t} className="px-6 py-2 bg-[#1d1b18] text-[#f8f3ed] rounded-full text-sm font-bold uppercase tracking-wider">{t}</span>
            ))}
          </div>

          <div className="text-center">
             <Button href={project.clientLink} size="lg">Visit Live Website</Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudy;
