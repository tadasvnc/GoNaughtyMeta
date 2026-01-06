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
    <section className="py-20 relative overflow-hidden" style={{ background: 'radial-gradient(120% 80% at 50% 30%, #2a0a4a 0%, #1a062e 50%, #12031f 100%)' }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-xl">
            What Couples Are Saying
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Join 52,000+ couples who've transformed their relationship
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-pink-500/20 transform hover:-translate-y-2 transition-all duration-300">
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative">
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-lg"
                      />
                    ))}
                  </div>
                  <p className="text-white/80 text-base leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-white/60">
                    {testimonial.relationship}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

