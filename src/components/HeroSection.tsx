import { Star } from "lucide-react";
import appStoreButton from "@/assets/app-store-button.png";
import heroImage from "@/assets/ChatGPT Image Jan 6, 2026, 12_40_54 PM.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import screenshot1 from "@/assets/1.png";
import screenshot2 from "@/assets/2.png";
import screenshot3 from "@/assets/3.png";
import screenshot4 from "@/assets/4.png";
import screenshot5 from "@/assets/5.png";
import screenshot6 from "@/assets/6.png";

const screenshots = [
  { image: screenshot2 },
  { image: screenshot3 },
  { image: screenshot4 },
  { image: screenshot5 },
  { image: screenshot6 },
  { image: screenshot1 },
];

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
  return <>
    {/* Hero Content Section */}
    <section className="min-h-[60vh] flex items-center pt-24 pb-8 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#590C6B]/95 via-[#3B0645]/90 to-[#28024D]"></div>
      </div>
      
      {/* Decorative Elements for Depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Trust Badge */}
          <div className="flex items-center justify-center space-x-2 animate-fade-in">
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-white/90 text-sm font-medium">⭐ #1 Couples Game App</span>
            </div>
          </div>
          
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
              Turn Any Night Into the{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Best Date Ever
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-lg font-medium">
              Fun challenges and deep questions that help you <span className="text-pink-300 font-bold">laugh more</span> and <span className="text-purple-300 font-bold">feel closer</span>—all in one simple app
            </p>
          </div>
          
          {/* Download Button - App Store Badge */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <button 
              onClick={() => handleDownloadClick('hero_app_store_badge')}
              className="inline-block cursor-pointer transform hover:scale-110 transition-all duration-300 hover:drop-shadow-2xl animate-bounce-subtle"
            >
              <img 
                src={appStoreButton}
                alt="Download on the App Store"
                className="h-20 md:h-24 w-auto drop-shadow-2xl"
              />
            </button>
          
            {/* Social Proof */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current drop-shadow-lg" />)}
                </div>
                <span className="text-sm md:text-base text-white/90 font-semibold">
                  4.8/5
                </span>
              </div>
              <div className="text-sm md:text-base text-white/80">
                <span className="font-bold text-white">52,000+ couples</span> already playing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Screenshots Section - Below Hero */}
    <section className="py-20 bg-gradient-to-b from-[#28024D] via-[#1F0238] to-[#1C0232] relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-xl">
            Inside the Game
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore hot moments, funny challenges, and intimate conversations
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop Carousel */}
          <div className="hidden md:block">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-6">
                {screenshots.map((screenshot, index) => (
                  <CarouselItem key={index} className="pl-4 md:pl-6 basis-1/2 md:basis-1/2 lg:basis-1/3">
                    <div className="flex flex-col items-center group">
                      <div className="relative w-full max-w-md transition-all duration-300 group-hover:scale-105">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img 
                          src={screenshot.image} 
                          alt={`Screenshot ${index + 1}`}
                          className="relative w-full h-auto rounded-2xl shadow-2xl ring-2 ring-white/20 group-hover:ring-pink-500/50 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex -left-12 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20" />
              <CarouselNext className="hidden lg:flex -right-12 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20" />
            </Carousel>
          </div>

          {/* Mobile - Horizontal Scroll */}
          <div className="block md:hidden">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {screenshots.map((screenshot, index) => (
                  <CarouselItem key={index} className="pl-4 basis-[85%]">
                    <div className="flex justify-center">
                      <img 
                        src={screenshot.image} 
                        alt={`Screenshot ${index + 1}`}
                        className="w-full max-w-[320px] h-auto rounded-2xl shadow-2xl ring-2 ring-white/20"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* Swipe Indicator */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span>Swipe to explore</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Below Screenshots */}
        <div className="text-center mt-16">
          <button 
            onClick={() => handleDownloadClick('screenshots_cta')}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/50"
          >
            Download Now - It's Free
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <p className="text-white/60 text-sm mt-4">
            Join 52,000+ couples already playing
          </p>
        </div>
      </div>
    </section>
  </>;
};