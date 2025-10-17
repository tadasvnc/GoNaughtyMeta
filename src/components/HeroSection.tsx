import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import appStoreButton from "@/assets/app-store-button.png";
import heroImage from "@/assets/pixels.jpg";

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const HeroSection = () => {
  const handleDownloadClick = (location: string) => {
    // Track event in Google Analytics
    if (window.gtag) {
      window.gtag('event', 'download_click', {
        event_category: 'engagement',
        event_label: location,
        value: 1
      });
    }
    
    // Smart device detection
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const android = /Android/.test(navigator.userAgent);
    
    if (iOS || android) {
      window.open('https://apps.apple.com/us/app/sex-game-for-couples-kinky/id6503987806?ppid=cc559d90-ba1d-4a7d-a2cf-f7cd6f175652', '_blank');
    } else {
      window.open('https://apps.apple.com/us/app/sex-game-for-couples-kinky/id6503987806?ppid=cc559d90-ba1d-4a7d-a2cf-f7cd6f175652', '_blank');
    }
  };
  return <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#590C6B]/90 via-[#3B0645]/85 to-[#28024D]/90"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <Badge variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-4 py-2">
            #1 Connection App for Couples
          </Badge>
          
          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Bring the Spark Back to Your{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Relationship
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Join 52,000+ couples using CoupleChallenges to deepen connection and create unforgettable moments together
            </p>
          </div>
          
          {/* Download Button - App Store Badge */}
          <div className="flex flex-col gap-4 items-center">
            <button 
              onClick={() => handleDownloadClick('hero_app_store_badge')}
              className="inline-block cursor-pointer transform hover:scale-105 transition-transform"
            >
              <img 
                src={appStoreButton}
                alt="Download on the App Store"
                className="h-16 md:h-20 w-auto"
              />
            </button>
            
            <p className="text-sm md:text-base text-white/80">
              Available on iPhone & iPad
            </p>
          </div>
          
          {/* Rating */}
          <div className="flex items-center justify-center space-x-2">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />)}
            </div>
            <span className="text-sm md:text-base text-white/90">
              Rated 4.8/5 based on 52,000+ downloads
            </span>
          </div>
        </div>
      </div>
    </section>;
};