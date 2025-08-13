import { Heart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image3.jpg";
import appStoreButton from "@/assets/app-store-button.png";
export const HeroSection = () => {
  return <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-[#590C6B] via-[#3B0645] to-[#28024D] relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit">
              #1 Sex-Game for couples
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Experience{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Sex
                </span>{" "}
                like never before
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Ignite your intimacy with over 1000+ expert-approved sex-challenges and questions designed for every couple.
              </p>
            </div>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-block">
                <img 
                  src={appStoreButton}
                  alt="Download on the App Store"
                  className="h-14 md:h-20 w-auto"
                />
              </a>
            </div>
            
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <span className="text-sm text-muted-foreground">
                Rated 4.7/5 based on 6000 downloads
              </span>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-card-glow">
              <img src={heroImage} alt="Intimate couple" className="w-full h-full object-cover" />
              
              {/* Feature Overlay Cards */}
              <div className="absolute top-6 right-6 space-y-3">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-4 h-4 text-white fill-current" />
                    </div>
                    <span className="text-sm font-semibold text-white drop-shadow-lg">Sex Positions & Location</span>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-4 h-4 text-white fill-current" />
                    </div>
                    <span className="text-sm font-semibold text-white drop-shadow-lg">Erotic Dares & Challenges</span>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-4 h-4 text-white fill-current" />
                    </div>
                    <span className="text-sm font-semibold text-white drop-shadow-lg">Intimate Questions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};