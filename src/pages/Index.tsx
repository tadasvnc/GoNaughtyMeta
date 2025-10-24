import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AppScreenshots } from "@/components/AppScreenshots";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DownloadCTA } from "@/components/DownloadCTA";
import { FinalCTASection } from "@/components/FinalCTASection";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AppScreenshots />
        <FeaturesSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <DownloadCTA />
        <FinalCTASection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
