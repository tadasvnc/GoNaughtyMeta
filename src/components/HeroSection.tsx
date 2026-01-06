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
  { image: screenshot1 },
  { image: screenshot2 },
  { image: screenshot3 },
  { image: screenshot4 },
  { image: screenshot5 },
  { image: screenshot6 },
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
    <section className="min-h-[70vh] flex items-center pt-20 pb-0 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#590C6B]/90 via-[#3B0645]/85 to-[#28024D]"></div>
      </div>
      
      {/* Decorative Elements for Depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
              The Ultimate{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Cards Game
              </span>
              {" "}for Couples
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
              Enjoy <span className="font-bold">1,500 fun challenges</span> and <span className="font-bold">1,000 romantic questions</span> together.
            </p>
          </div>
          
          {/* Download Button - App Store Badge */}
          <div className="flex items-center justify-center">
            <button 
              onClick={() => handleDownloadClick('hero_app_store_badge')}
              className="inline-block cursor-pointer transform hover:scale-105 transition-all duration-300 hover:drop-shadow-2xl"
            >
              <img 
                src={appStoreButton}
                alt="Download on the App Store"
                className="h-16 md:h-20 w-auto drop-shadow-xl"
              />
            </button>
          </div>
          
          {/* Rating */}
          <div className="flex items-center justify-center space-x-2">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current drop-shadow-lg" />)}
            </div>
            <span className="text-xs md:text-sm text-white/90">
              Rated 4.8/5 based on 52,000+ downloads
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* Screenshots Section - Below Hero */}
    <section className="pt-12 pb-16 bg-gradient-to-b from-[#28024D] via-[#1F0238] to-[#1C0232] relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-xl">
            Inside the Game
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
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
              <CarouselContent className="-ml-2 md:-ml-4">
                {screenshots.map((screenshot, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/2 lg:basis-1/3">
                    <div className="flex flex-col items-center">
                      <div className="relative w-full max-w-sm">
                        <img 
                          src={screenshot.image} 
                          alt={`Screenshot ${index + 1}`}
                          className="w-full h-auto rounded-2xl shadow-2xl ring-2 ring-white/10"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
            </Carousel>
          </div>

          {/* Mobile - Vertical List */}
          <div className="block md:hidden max-w-sm mx-auto space-y-6">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={screenshot.image} 
                  alt={`Screenshot ${index + 1}`}
                  className="w-full max-w-[320px] h-auto rounded-2xl shadow-2xl ring-2 ring-white/10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>;
};