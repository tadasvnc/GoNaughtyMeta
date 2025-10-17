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
      window.open('https://apps.apple.com/us/app/sex-game-for-couples-kinky/id6503987806?ppid=cc559d90-ba1d-4a7d-a2cf-f7cd6f175652', '_blank');
    } else {
      // Desktop - open in new tab
      window.open('https://apps.apple.com/us/app/sex-game-for-couples-kinky/id6503987806?ppid=cc559d90-ba1d-4a7d-a2cf-f7cd6f175652', '_blank');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 relative overflow-hidden" data-download-section>
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Reconnect With Your Partner?
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed">
            Download free and start your journey together tonight
          </p>
          
          <div className="flex flex-col gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => handleDownloadClick('final_cta_app_store')}
              className="inline-block cursor-pointer transform hover:scale-105 transition-transform"
            >
              <img 
                src={appStoreButton}
                alt="Download on the App Store"
                className="h-20 md:h-24 w-auto"
              />
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/90 text-sm md:text-base mb-8">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Free to download</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Available on iPhone & iPad</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>52,000+ happy couples</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

