import { Star } from "lucide-react";

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
    text: "It is crazy to see what impact GoNaughty has on so many couples out there. Me and my partner definitely got to know each other way better and from a complete new side."
  },
  {
    username: "Herrera_Schmidr",
    stars: 4,
    text: "We started to use GoNaughty in January 2024 and we are still thrilled by all the games this app includes. Due to the amount of challenges it is very hard to get bored at any time."
  },
  {
    username: "brazybaby1997",
    stars: 5,
    text: "I absolutely love this game! There's so many different questions and activities and so much different stuff. There's also so many different levels that it's perfect for couples."
  },
  {
    username: "racingsnail5582",
    stars: 5,
    text: "We like this game as it's set out nice and user friendly. Navigation is easy with categories and some nicely put tasks. Been together for 33 years and this game spices things up a bit"
  },
  {
    username: "Dominick Barbour 6",
    stars: 5,
    text: "Our FY on TikTok was flooded by videos about the app so we decided to try it ourself. After 2 month of playing around I can definitely say that this app had a huge impact on our relationship."
  },
  {
    username: "Reta Alfredia",
    stars: 5,
    text: "My boyfriend is this kind of guys that always wants to try new stuff. Since we started playing GoNaughty this changed completely… now we take a lot of inspiration for new stuff from the app."
  },
  {
    username: "urroyalhighness420",
    stars: 5,
    text: "Me and my bf have been trying to find an app that actually makes things fun. This's is the first and only app that we actually like!"
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
