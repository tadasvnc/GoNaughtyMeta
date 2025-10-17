import { Button } from "@/components/ui/button";
import { Star, Download, Heart, Users } from "lucide-react";
// Removed App Store badge image import

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const DownloadCTA = () => {
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
  return (
    <section className="py-20 bg-gradient-to-b from-[#1C0232] to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-purple-500/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Spice up tonight with playful couple challenges
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Join <span className="text-pink-400 font-bold">52,000+ couples</span> using quick, fun prompts to feel closer—
              free download with <span className="text-pink-300 font-semibold">5‑day Premium</span> included.
            </p>
          </div>

          {/* Social Proof */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                <span className="text-2xl font-bold text-white ml-2">4.8/5</span>
              </div>
              <p className="text-white/80">Average App Store rating</p>
              <p className="text-sm text-white/60">52,000+ downloads</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-pink-400" />
                <span className="text-2xl font-bold text-white ml-2">6K+</span>
              </div>
              <p className="text-white/80">Happy Couples</p>
              <p className="text-sm text-white/60">Worldwide</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center mb-3">
                <Heart className="w-8 h-8 text-red-400 fill-red-400" />
                <span className="text-2xl font-bold text-white ml-2">1500+</span>
              </div>
              <p className="text-white/80">Challenges</p>
              <p className="text-sm text-white/60">Made with Passion</p>
            </div>
          </div>

          {/* Urgency/Scarcity */}
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 mb-10 border border-pink-500/30 transform hover:scale-105 transition-all duration-300">
            <p className="text-white font-semibold mb-2 text-lg">💝 Special Offer</p>
            <p className="text-white/90 text-base">Start today and enjoy <span className="text-pink-300 font-bold">5 days FREE</span> Premium access. Cancel anytime, no commitment.</p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={() => handleDownloadClick('cta_primary_button')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 min-w-[220px] cursor-pointer"
            >
              <Download className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>100% Safe & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>No Ads or Spam</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Private & Discreet</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Cancel Anytime</span>
            </div>
          </div>

          {/* Final Push */}
          <div className="mt-10 p-8 bg-black/30 rounded-2xl border border-white/10 transform hover:scale-102 transition-all duration-300">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Transform your relationship tonight. Open the app and start connecting in minutes.
            </p>
            <p className="text-pink-300 font-bold text-lg mt-3">Try it free for 5 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};
