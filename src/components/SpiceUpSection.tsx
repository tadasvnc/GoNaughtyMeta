import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import bananaIcon from "@/assets/banana.svg";

const games = [
  {
    icon: <img src={bananaIcon} alt="Game Icon" className="w-12 h-12" />,
    title: "Adventure Challenge Game",
    description: "Complete fun challenges in various locations, try exciting activities and get rewarded for each completed task together.",
  },
  {
    icon: <img src={bananaIcon} alt="Game Icon" className="w-12 h-12" />,
    title: "Playful Discovery Game",
    description: "Take turns with interactive activities that encourage playful connection and bring you closer together.",
  },
  {
    icon: <img src={bananaIcon} alt="Game Icon" className="w-12 h-12" />,
    title: "Long Distance Game",
    description: "Send affectionate, cute, or playful notifications to your partner's device, instantly capturing their attention and creating a fun connection.",
  },
  {
    icon: <img src={bananaIcon} alt="Game Icon" className="w-12 h-12" />,
    title: "Interactive Connection Game",
    description: "Engage with fun, spontaneous activities designed to strengthen your bond and create memorable moments together.",
  },
  {
    icon: <img src={bananaIcon} alt="Game Icon" className="w-12 h-12" />,
    title: "Date Night Questions",
    description: "Encourage open & honest communication with questions that deepen understanding and help you discover new things about each other.",
  },
  {
    icon: <img src={bananaIcon} alt="Game Icon" className="w-12 h-12" />,
    title: "Augmented Reality Game",
    description: "Create personalized experiences with interactive AR features that blend your real world with fun digital elements.",
  },
];

export const SpiceUpSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Fun Ways to Connect & Play Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore activities designed to strengthen your bond and create lasting memories
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => {
            return (
              <Card key={index} className="bg-slate-900/95 border-slate-700/50 rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl backdrop-blur-sm hover:shadow-3xl hover:bg-slate-800/95">
                <CardHeader className="flex flex-row items-center gap-4 p-6">
                  <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                    {game.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{game.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-slate-200 font-medium leading-relaxed">{game.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
