import { Star } from "lucide-react";

const reviews = [
  {
    username: "Ash23TJ",
    stars: 5,
    text: "Makes things fun when we're apart. We love racking up points together!"
  },
  {
    username: "Hutchins_Dakotas",
    stars: 5,
    text: "Friends told me to try it — super fun! Gets you doing stuff you’d never expect."
  },
  {
    username: "LeesaJackelinel",
    stars: 5,
    text: "Totally worth it. Didn’t expect all the updates either, nice job!"
  },
  {
    username: "Frederick Callaway",
    stars: 5,
    text: "Crazy how much closer we’ve gotten. Learned so much about each other!"
  },
  {
    username: "Herrera_Schmidr",
    stars: 4,
    text: "We’ve been using it since Jan and still loving all the challenges. Never boring!"
  },
  {
    username: "brazybaby1997",
    stars: 5,
    text: "Love it! So many fun questions and levels. Perfect for couples."
  },
  {
    username: "racingsnail5582",
    stars: 5,
    text: "Easy to use, fun to play. Been together 33 years and this still spices it up!"
  },
  {
    username: "Dominick Barbour 6",
    stars: 5,
    text: "Saw it on TikTok and gave it a shot — huge upgrade for our relationship!"
  },
  {
    username: "Reta Alfredia",
    stars: 5,
    text: "My bf always wanted to try new things. Now we just use the app for ideas!"
  },
  {
    username: "urroyalhighness420",
    stars: 5,
    text: "Finally found an app we both actually enjoy. So much fun!"
  }
];


const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
  return (
    <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6 w-[320px] sm:w-[380px] mx-4 shadow-2xl flex flex-col">
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-shrink-0">
        <h4 className="text-white font-bold text-base sm:text-lg truncate flex-1">{review.username}</h4>
        <div className="flex gap-1 flex-shrink-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 sm:w-4 sm:h-4 ${
                i < review.stars
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="pb-2">
        <p className="text-slate-200 leading-relaxed text-xs sm:text-sm break-words">{review.text}</p>
      </div>
    </div>
  );
};

export const ReviewsSection = () => {
  // Split reviews into two groups for the two rows
  const topRowReviews = reviews.slice(0, 5);
  const bottomRowReviews = reviews.slice(5, 10);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What other couples say
          </h2>
        </div>
      </div>

      {/* Top Row - Moving Right */}
      <div className="relative mb-8 overflow-hidden">
        <div className="flex animate-scroll-right-custom whitespace-nowrap">
          {/* Duplicate the reviews to create seamless loop */}
          {[...topRowReviews, ...topRowReviews, ...topRowReviews].map((review, index) => (
            <ReviewCard key={`top-${index}`} review={review} />
          ))}
        </div>
      </div>

      {/* Bottom Row - Moving Left */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-left-custom whitespace-nowrap">
          {/* Duplicate the reviews to create seamless loop */}
          {[...bottomRowReviews, ...bottomRowReviews, ...bottomRowReviews].map((review, index) => (
            <ReviewCard key={`bottom-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};
