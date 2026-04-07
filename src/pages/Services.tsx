import { Helmet } from "react-helmet-async";
import { FadeIn, StaggerContainer } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { CheckCircle } from "lucide-react";

export const Services = () => {
  const services = [
    {
      id: "01",
      title: "Website Design",
      description: "Your digital presence is your most valuable salesman. We create bespoke visual identities that resonate with high-intent audiences, positioning your brand as the inevitable choice in your market.",
      image: "https://picsum.photos/seed/design/800/450",
      features: [
        "Identity that commands premium pricing",
        "Frictionless user journeys designed for speed",
        "Responsive layouts that maintain soul on any screen"
      ]
    },
    {
      id: "02",
      title: "Website Development",
      description: "Precision engineering meets rapid execution. We build high-performance engines that power your business growth, ensuring every millisecond of load time is optimized for retention and ranking.",
      image: "https://picsum.photos/seed/code/800/450",
      features: [
        "Blazing fast core vitals for search dominance",
        "Scalable infrastructure that grows as you do",
        "Seamless integrations with your existing sales stack"
      ]
    },
    {
      id: "03",
      title: "Conversion Optimization",
      description: "The science of turning traffic into revenue. We analyze user behavior to identify and remove barriers, transforming your website from a digital brochure into a relentless lead-generation machine.",
      image: "https://picsum.photos/seed/data/800/450",
      features: [
        "Psychology-backed A/B testing frameworks",
        "Heatmap analysis to uncover hidden opportunities",
        "Strategic CTA placement for maximum impact"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | ClientFuel Agency</title>
        <meta name="description" content="Services designed for aggressive growth. Website design, development, and conversion optimization." />
      </Helmet>

      <main className="pt-32">
        {/* Header */}
        <header className="max-w-7xl mx-auto px-8 mb-40">
          <FadeIn direction="right">
            <div className="text-[0.75rem] font-bold tracking-[0.1em] text-[#fb5c01] mb-6 uppercase">Our Expertise</div>
            <h1 className="text-[3.5rem] md:text-[5rem] font-black leading-[1.1] tracking-[-0.04em] text-[#1d1b18] max-w-4xl mb-8">
              Services designed for <span className="text-[#fb5c01]">aggressive growth.</span>
            </h1>
            <p className="text-[1.125rem] leading-[1.6] text-[#5b4137] max-w-2xl">
              We don't just build sites; we engineer digital performance layers that capture attention and convert it into measurable capital.
            </p>
          </FadeIn>
        </header>

        {/* Services Breakdown */}
        <section className="max-w-7xl mx-auto px-8 space-y-40 mb-40">
          {services.map((service, index) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className={index % 2 === 0 ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"}>
                <FadeIn direction={index % 2 === 0 ? "right" : "left"}>
                  <div className="aspect-[16/9] bg-[#f8f3ed] rounded-lg overflow-hidden group">
                    <img 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" 
                      src={service.image} 
                      alt={service.title} 
                    />
                  </div>
                </FadeIn>
              </div>
              <div className={index % 2 === 0 ? "lg:col-span-5 lg:pl-12 pt-8" : "lg:col-span-5 lg:pr-12 pt-8 lg:order-1"}>
                <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                  <div className="text-[0.75rem] font-bold tracking-[0.1em] text-[#fb5c01] mb-4 uppercase">Phase {service.id}</div>
                  <h2 className="text-[2.5rem] font-black leading-tight mb-6 text-[#1d1b18]">{service.title}</h2>
                  <p className="text-lg leading-[1.6] text-[#5b4137] mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="text-[#fb5c01] w-5 h-5 mt-0.5" />
                        <span className="font-medium text-[#1d1b18]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
          ))}
        </section>

        {/* Final CTA */}
        <section className="bg-[#f8f3ed] py-40">
          <FadeIn className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="text-[3rem] md:text-[4rem] font-black leading-none mb-12 text-[#1d1b18]">
              Ready to fuel your next <br /><span className="text-[#fb5c01]">growth cycle?</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button to="/contact" size="lg">Book a Call</Button>
              <Button to="/portfolio" variant="secondary" size="lg">View Case Studies</Button>
            </div>
          </FadeIn>
        </section>
      </main>
    </>
  );
};
