import { Star } from "lucide-react";

const testimonials = [
  {
    text: "This app brought us so much closer! We've been together 7 years and it feels like we're dating again. The challenges are fun and helped us communicate better.",
    author: "Sarah & Mike",
    relationship: "Together 7 years",
    stars: 5
  },
  {
    text: "We were stuck in a routine. CoupleChallenges helped us break out of it and reconnect in ways we never expected. It's become our weekly date night tradition!",
    author: "Jessica & Tom",
    relationship: "Married 4 years",
    stars: 5
  },
  {
    text: "Finally, an app that's actually fun for BOTH of us! We use it every week and always discover something new about each other. Highly recommend!",
    author: "Alex & Jordan",
    relationship: "Together 3 years",
    stars: 5
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1C0232] via-[#0F0119] to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Couples Are Saying
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join 52,000+ couples who've transformed their relationship
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="mb-4">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.stars
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-white/90 text-base leading-relaxed italic mb-6">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="font-bold text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-white/60">
                  {testimonial.relationship}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

