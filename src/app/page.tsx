import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { FeaturedPuppies } from "@/components/home/featured-puppies";
import { VideoShowcase } from "@/components/home/video-showcase";
import { LifestyleGuide } from "@/components/home/lifestyle-guide";
import { HowItWorks } from "@/components/home/how-it-works";
import { TrustSection } from "@/components/home/trust-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";
import { ContactSection } from "@/components/home/contact-section";
import { FAQ } from "@/components/home/faq";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedPuppies />
        <VideoShowcase />
        <LifestyleGuide />
        <HowItWorks />
        <TrustSection />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
