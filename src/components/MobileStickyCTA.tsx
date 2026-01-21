import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadClick = () => {
    // Track event in Google Analytics
    if (window.gtag) {
      window.gtag('event', 'download_click', {
        event_category: 'engagement',
        event_label: 'mobile_sticky_cta',
        value: 1
      });
    }
    
    // Smart device detection
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const android = /Android/.test(navigator.userAgent);
    
    if (iOS || android) {
      window.open('https://apps.apple.com/us/app/dirty-sex-game-for-couples-18/id6503987806?ppid=e20110e1-56c3-478a-98c1-773988170b55', '_blank');
    }
  };

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t-2 border-pink-500 shadow-2xl z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="p-4">
        <Button 
          onClick={handleDownloadClick}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 text-lg rounded-full shadow-xl transition-all duration-300 cursor-pointer"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Free
        </Button>
        <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-2">
          7-day free trial • Available on iPhone & iPad
        </p>
      </div>
    </div>
  );
};

