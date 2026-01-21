import { Check } from "lucide-react";
import appStoreButton from "@/assets/app-store-button.png";

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const FinalCTASection = () => {
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
      window.open('https://apps.apple.com/us/app/dirty-sex-game-for-couples-18/id6503987806?ppid=e20110e1-56c3-478a-98c1-773988170b55', '_blank');
    } else {
      // Desktop - open in new tab
      window.open('https://apps.apple.com/us/app/dirty-sex-game-for-couples-18/id6503987806?ppid=e20110e1-56c3-478a-98c1-773988170b55', '_blank');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'radial-gradient(120% 80% at 50% 50%, #c026d3 0%, #9333ea 40%, #7c3aed 100%)' }} data-download-section>
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Ready to Reconnect With Your Partner?
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed drop-shadow-lg">
            Download free and start your journey together tonight
          </p>
          
          <div className="flex flex-col gap-4 justify-center items-center mb-10">
            <button 
              onClick={() => handleDownloadClick('final_cta_app_store')}
              className="inline-block cursor-pointer transform hover:scale-110 transition-all duration-300 hover:drop-shadow-2xl"
            >
              <img 
                src={appStoreButton}
                alt="Download on the App Store"
                className="h-20 md:h-24 w-auto drop-shadow-2xl"
              />
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-white text-sm md:text-base mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Check className="w-5 h-5" />
              <span className="font-medium">Free to download</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Check className="w-5 h-5" />
              <span className="font-medium">iPhone & iPad</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Check className="w-5 h-5" />
              <span className="font-medium">52,000+ couples</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

