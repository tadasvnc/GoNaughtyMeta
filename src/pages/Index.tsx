import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AppScreenshots } from "@/components/AppScreenshots";
import { ReviewsMasonryGrid as ReviewsSection } from "@/components/ReviewsAlternative";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AppScreenshots />
        <ReviewsSection />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
