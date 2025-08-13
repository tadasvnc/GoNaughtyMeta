import { Button } from "@/components/ui/button";
import { Star, Download, Heart, Users } from "lucide-react";
import appStoreButton from "@/assets/app-store-button.png";

export const DownloadCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1C0232] to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-purple-500/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Spice Things Up?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Join over <span className="text-pink-400 font-bold">2,000,000+ couples</span> who've already transformed their relationship
            </p>
          </div>

          {/* Social Proof */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                <span className="text-2xl font-bold text-white ml-2">4.6/5</span>
              </div>
              <p className="text-white/80">App Store Rating</p>
              <p className="text-sm text-white/60">6000 downloads</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-pink-400" />
                <span className="text-2xl font-bold text-white ml-2">100K+</span>
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
              <p className="text-sm text-white/60">Expert-approved</p>
            </div>
          </div>

          {/* Urgency/Scarcity */}
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 mb-10 border border-pink-500/30">
            <p className="text-white font-semibold mb-2">💝 Limited Time Offer</p>
            <p className="text-white/90">Download now and get <span className="text-pink-300 font-bold">5 days FREE</span> access to premium content!</p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 min-w-[200px]">
              <Download className="w-5 h-5 mr-2" />
              Download Free
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
          <div className="mt-10 p-6 bg-black/30 rounded-2xl border border-white/10">
            <p className="text-white/90 italic text-lg">
              "Don't let another boring night pass by. Your relationship deserves the spark it once had."
            </p>
            <p className="text-pink-300 font-semibold mt-2">- Start your adventure today -</p>
          </div>
        </div>
      </div>
    </section>
  );
};
