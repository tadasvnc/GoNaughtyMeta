import { Star, Users, Heart } from "lucide-react";

export const SocialProofBar = () => {
  return (
    <section className="bg-gradient-to-r from-[#28024D] to-[#1F0238] py-8 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-base md:text-lg font-semibold text-white">
              4.8/5 Rating
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-pink-400" />
            <span className="text-base md:text-lg font-semibold text-white">
              52,000+ Downloads
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-red-400 fill-red-400" />
            <span className="text-base md:text-lg font-semibold text-white">
              #1 App for Couples
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

