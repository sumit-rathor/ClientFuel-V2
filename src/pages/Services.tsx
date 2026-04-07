import { Helmet } from "react-helmet-async";
import { FadeIn, StaggerContainer } from "@/src/components/ui/Animations";
import { Button } from "@/src/components/ui/Button";
import { CheckCircle } from "lucide-react";

export const Services = () => {
  const services = [
    {
      id: "01",
      title: "Website Design",
      description: "We build trust instantly. Your website is your digital shop. We make sure it looks professional and premium, so your customers feel safe buying from you.",
      image: "https://picsum.photos/seed/design/800/450",
      features: [
        "Professional look that builds trust",
        "Easy for customers to find information",
        "Modern layouts that beat your competitors"
      ]
    },
    {
      id: "02",
      title: "Website Development",
      description: "Fast, reliable, and mobile-first. Most of your customers in India will visit from their phones. We ensure your site is blazing fast and works perfectly on every device.",
      image: "https://picsum.photos/seed/code/800/450",
      features: [
        "Super fast loading on mobile data",
        "Secure and reliable hosting",
        "Google Search (SEO) friendly code"
      ]
    },
    {
      id: "03",
      title: "Conversion Optimization",
      description: "Turns visitors into paying customers. We don't just want people to see your site; we want them to call you. We optimize your site to get you more inquiries.",
      image: "https://picsum.photos/seed/data/800/450",
      features: [
        "WhatsApp and Call button integration",
        "Easy-to-fill inquiry forms",
        "Clear 'Call to Action' for your customers"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Design Services in India | Affordable Business Websites | ClientFuel</title>
        <meta name="description" content="Affordable website design services in India for local businesses. We build websites that get clients, not just clicks." />
      </Helmet>

      <main className="pt-32">
        {/* Header */}
        <header className="max-w-7xl mx-auto px-8 mb-40">
          <FadeIn direction="right">
            <div className="text-[0.75rem] font-bold tracking-[0.1em] text-[#fb5c01] mb-6 uppercase">Our Expertise</div>
            <h1 className="text-[3.5rem] md:text-[5rem] font-black leading-[1.1] tracking-[-0.04em] text-[#1d1b18] max-w-4xl mb-8">
              Affordable <span className="text-[#fb5c01]">Website Design India</span> for Local Businesses.
            </h1>
            <p className="text-[1.125rem] leading-[1.6] text-[#5b4137] max-w-2xl">
              We focus on outcomes, not just technology. Every service we offer is designed to help your Indian business grow online.
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
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="text-[#fb5c01] w-5 h-5 mt-0.5" />
                        <span className="font-medium text-[#1d1b18]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact">Book a Call for {service.title}</Button>
                </FadeIn>
              </div>
            </div>
          ))}
        </section>

        {/* Final CTA */}
        <section className="bg-[#f8f3ed] py-40">
          <FadeIn className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="text-[3rem] md:text-[4rem] font-black leading-none mb-12 text-[#1d1b18]">
              Ready to get more <br /><span className="text-[#fb5c01]">customers online?</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button to="/contact" size="lg">Book a Call Now</Button>
              <Button to="/portfolio" variant="secondary" size="lg">See Our Results</Button>
            </div>
          </FadeIn>
        </section>
      </main>
    </>
  );
};
