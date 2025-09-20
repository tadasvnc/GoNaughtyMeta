import { Heart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero8.jpeg";
import appStoreButton from "@/assets/app-store-button.png";
export const HeroSection = () => {
  return <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-[#590C6B] via-[#3B0645] to-[#28024D] relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit">
              #1 Romantic Game for couples
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Rediscover{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Connection
                </span>{" "}
                with your partner
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Spark your connection with 1000+ bold, curious, and wildly fun romantic challenges & questions made for every kind of couple.
              </p>
            </div>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://apps.apple.com/us/app/sex-game-for-couples-kinky/id6503987806?ppid=0f68efee-b52c-4c94-b961-50a016c3450f', '_blank')}
                className="inline-block cursor-pointer"
              >
                <img 
                  src={appStoreButton}
                  alt="Download on the App Store"
                  className="h-14 md:h-20 w-auto hover:scale-105 transition-transform"
                />
              </button>
            </div>
            
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <span className="text-sm text-muted-foreground">
                Rated 4.8/5 based on 6000 downloads
              </span>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-card-glow">
              <img src={heroImage} alt="Intimate couple" className="w-full h-full object-cover" />
              
              {/* Feature Overlay Cards */}
              <div className="absolute top-6 right-6 space-y-2 md:space-y-3">
                <div className="bg-black/30 backdrop-blur-md p-2 md:p-4 rounded-lg md:rounded-xl border border-white/10 shadow-xl hover:bg-black/50 transition-all duration-300">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-3 h-3 md:w-4 md:h-4 text-white fill-current" />
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-white drop-shadow-lg">Fun Surprises</span>
                  </div>
                </div>
                
                <div className="bg-black/30 backdrop-blur-md p-2 md:p-4 rounded-lg md:rounded-xl border border-white/10 shadow-xl hover:bg-black/50 transition-all duration-300">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-3 h-3 md:w-4 md:h-4 text-white fill-current" />
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-white drop-shadow-lg">Romantic Dares & Challenges</span>
                  </div>
                </div>
                
                <div className="bg-black/30 backdrop-blur-md p-2 md:p-4 rounded-lg md:rounded-xl border border-white/10 shadow-xl hover:bg-black/50 transition-all duration-300">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-3 h-3 md:w-4 md:h-4 text-white fill-current" />
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-white drop-shadow-lg">Flirty Questions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};