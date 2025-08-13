import { Star, Quote } from "lucide-react";

const reviews = [
  {
    username: "Ash23TJ",
    stars: 5,
    text: "This keeps things fun while we are away and we are always excited to rack up the points when we are together. So much fun and excitement!!!"
  },
  {
    username: "Hutchins_Dakotas", 
    stars: 5,
    text: "A few friends of mine downloaded it recently, and told me of its power, so i gave it a try myself. It is a blast of fun and you really get out of your comfort zone to try new stuff, definitely recommendable to couples that really want to spice things up."
  },
  {
    username: "LeesaJackelinel",
    stars: 5,
    text: "Definitely worth the money, cool game. I also never expected so many updates, you do a good job actually"
  },
  {
    username: "Frederick Callaway",
    stars: 5,
    text: "It is crazy to see what impact Scratch Adventure has on so many couples out there. Me and my partner definitely got to know each other way better and from a complete new side."
  },
  {
    username: "Herrera_Schmidr",
    stars: 4,
    text: "We started to use Scratch Adventure in January 2022 and we are still thrilled by all the games this app includes. Due to the amount of challenges it is very hard to get bored at any time."
  },
  {
    username: "brazybaby1997",
    stars: 5,
    text: "I absolutely love this game! There's so many different questions and activities and so much different stuff. There's also so many different levels that it's perfect for couples."
  }
];

// OPTION 1: Masonry/Pinterest Style Grid
export const ReviewsMasonryGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1C0232] via-[#0F0119] to-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What other couples say
          </h2>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="break-inside-avoid mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Quote className="w-6 h-6 text-pink-400" />
                  <h4 className="text-white font-bold text-lg">{review.username}</h4>
                  <div className="flex gap-1 ml-auto">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.stars
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// OPTION 2: Vertical Scrolling Feed
export const ReviewsVerticalFeed = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What other couples say
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-8">
          {reviews.map((review, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-pink-500/30 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.username.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-white font-bold text-xl">{review.username}</h4>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.stars
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">{review.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// OPTION 3: Testimonial Slider with Auto-play
export const ReviewsTestimonialSlider = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What other couples say
          </h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex animate-testimonial-slide">
            {/* Duplicate reviews for seamless loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div key={index} className="min-w-full px-8">
                <div className="text-center">
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl">
                    <Quote className="w-16 h-16 text-pink-400 mx-auto mb-8" />
                    <p className="text-white text-2xl leading-relaxed mb-8 italic">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {review.username.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl">{review.username}</h4>
                        <div className="flex gap-1 justify-center mt-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < review.stars
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// OPTION 4: Floating Bubbles Animation
export const ReviewsFloatingBubbles = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black overflow-hidden relative min-h-[600px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What other couples say
          </h2>
        </div>
      </div>
      
      <div className="absolute inset-0">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`absolute animate-float-${index % 3} bubble-${index}`}
            style={{
              left: `${(index * 15 + 10) % 80}%`,
              top: `${(index * 20 + 20) % 60 + 20}%`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-6 max-w-xs shadow-xl hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < review.stars
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{review.username}</h4>
                <p className="text-white/80 text-xs leading-relaxed">
                  {review.text.substring(0, 80)}...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
