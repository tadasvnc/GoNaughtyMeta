import { Heart, Sparkles, Lock, Smartphone } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Deepen Your Connection",
    description: "Thought-provoking questions and activities designed by relationship experts to help you understand each other on a deeper level.",
    gradient: "from-pink-500 to-red-500"
  },
  {
    icon: Sparkles,
    title: "Break the Routine",
    description: "Fresh challenges and creative ideas to break out of your routine and create unforgettable moments together.",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Lock,
    title: "Private & Just for You",
    description: "Your connection is completely private. No social media, no sharing—just you and your partner.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Easy & Fun",
    description: "Get started in minutes. Perfect for date nights, road trips, or cozy evenings at home.",
    gradient: "from-pink-500 to-purple-500"
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1F0238] via-[#28024D] to-[#1C0232]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Couples Love CoupleChallenges
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Everything you need to strengthen your bond and create lasting memories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

