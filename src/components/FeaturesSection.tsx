const features = [
  {
    emoji: "🔥",
    title: "Deepen Your Connection",
    description: "Thought-provoking questions and activities designed by relationship experts to help you understand each other on a deeper level.",
    gradient: "from-pink-500 to-red-500"
  },
  {
    emoji: "✨",
    title: "Break the Routine",
    description: "Fresh challenges and creative ideas to break out of your routine and create unforgettable moments together.",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    emoji: "🔒",
    title: "Private & Just for You",
    description: "Your connection is completely private. No social media, no sharing—just you and your partner.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    emoji: "💕",
    title: "Easy & Fun",
    description: "Get started in minutes. Perfect for date nights, road trips, or cozy evenings at home.",
    gradient: "from-pink-500 to-purple-500"
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'radial-gradient(120% 80% at 50% 20%, #1a062e 0%, #12031f 60%, #0a0118 100%)' }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-xl">
            Why Couples Love CoupleChallenges
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to strengthen your bond and create lasting memories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center shadow-2xl hover:shadow-pink-500/20 transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {feature.emoji}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

