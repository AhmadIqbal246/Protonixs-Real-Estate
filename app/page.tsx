import { ContactSection } from "@/components/landing-page-section/contact/contact-section";
import { FeaturedPropertiesSection } from "@/components/landing-page-section/featured-properties/featured-properties-section";
import { HeroSection } from "@/components/landing-page-section/hero/hero-section";
import { HomepageLuxuryAtmosphere } from "@/components/landing-page-section/homepage-luxury-atmosphere";
import { MarketsSection } from "@/components/landing-page-section/markets/markets-section";
import { StatisticsSection } from "@/components/landing-page-section/statistics/statistics-section";
import { TestimonialsSection } from "@/components/landing-page-section/testimonials/testimonials-section";
import { WhyChooseUsSection } from "@/components/landing-page-section/why-choose-us/why-choose-us-section";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Footer } from "@/components/shared-components/footer";
import { Navbar } from "@/components/shared-components/navbar";
import { ScrollZoom } from "@/components/shared-components/scroll-zoom";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="home-cinematic relative isolate overflow-x-clip">
        <HomepageLuxuryAtmosphere />
        <Navbar variant="cinematic" />
        <ScrollZoom>
          <div data-scroll-zoom className="w-full will-change-transform">
            <HeroSection />
          </div>
          <div data-scroll-zoom className="w-full will-change-transform">
            <MarketsSection />
          </div>
          <div className="w-full">
            <WhyChooseUsSection />
          </div>
          <div data-scroll-zoom className="w-full will-change-transform">
            <FeaturedPropertiesSection />
          </div>
          <div data-scroll-zoom className="w-full will-change-transform">
            <StatisticsSection />
          </div>
          <div data-scroll-zoom className="w-full will-change-transform">
            <TestimonialsSection />
          </div>
          <div data-scroll-zoom className="w-full will-change-transform">
            <ContactSection />
          </div>
          <Footer variant="cinematic" />
        </ScrollZoom>
      </main>
    </SmoothScrollProvider>
  );
}
