import { Download, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const steps = [
  {
    number: 1,
    icon: Download,
    title: "Download the App",
    description: "Free on iPhone & iPad"
  },
  {
    number: 2,
    icon: Users,
    title: "Get Cozy Together",
    description: "Turn on the game with your partner"
  },
  {
    number: 3,
    icon: Heart,
    title: "Start Connecting",
    description: "Begin your journey together"
  }
];

export const HowItWorksSection = () => {
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
      // Desktop - scroll to download section
      const downloadSection = document.querySelector('[data-download-section]');
      if (downloadSection) {
        downloadSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-[#0F0119] to-[#1C0232]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="md:hidden">How It Works</span>
            <span className="hidden md:inline">Get Started in 3 Simple Steps</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Start your journey to a deeper connection in just minutes
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex flex-col items-center text-center max-w-xs">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl mb-6">
                    {step.number}
                  </div>
                  <div className="bg-white/10 p-6 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block text-4xl text-pink-500 font-bold">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => handleDownloadClick('how_it_works_section')}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <Download className="w-6 h-6 mr-3" />
            Download Now
          </Button>
          <p className="text-sm text-white/70 mt-4">
            Free to download for iPhone & iPad
          </p>
        </div>
      </div>
    </section>
  );
};

