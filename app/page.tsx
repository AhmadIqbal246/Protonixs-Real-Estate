import { ContactSection } from "@/components/landing-page-section/contact/contact-section";
import { FeaturedPropertiesSection } from "@/components/landing-page-section/featured-properties/featured-properties-section";
import { HeroSection } from "@/components/landing-page-section/hero/hero-section";
import { PageBackgroundVideo } from "@/components/landing-page-section/page-background-video";
import { ServicesSection } from "@/components/landing-page-section/services/services-section";
import { StatisticsSection } from "@/components/landing-page-section/statistics/statistics-section";
import { TestimonialsSection } from "@/components/landing-page-section/testimonials/testimonials-section";
import { WhyChooseUsSection } from "@/components/landing-page-section/why-choose-us/why-choose-us-section";
import { Footer } from "@/components/shared-components/footer";

export default function Home() {
  return (
    <main className="relative">
      <PageBackgroundVideo />
      <HeroSection />
      <FeaturedPropertiesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
