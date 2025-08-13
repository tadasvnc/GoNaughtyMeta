import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import bananaIcon from "@/assets/banana.svg";

const games = [
  {
    icon: <img src={bananaIcon} alt="Game Icon" className="w-12 h-12" />,
    title: "Scratch off Bedroom Game",
    description: "Recreate sex positions, complete indoor and outdoor locations, try d*rty extras and get rewarded for each completed challenge.",
  },
  {
    icon: <img src={bananaIcon} alt="Game Icon" className="w-12 h-12" />,
    title: "Dice to Spice Game",
    description: "Each player takes turns spinning the wheels, one determining an action and the other specifying a body part.",
  },
  {
    icon: <img src={bananaIcon} alt="Game Icon" className="w-12 h-12" />,
    title: "Long Distance Game",
    description: "Send affectionate, cute, or even naughty notifications to your partner's device, instantly capturing their attention and creating a playful connection.",
  },
  {
    icon: <img src={bananaIcon} alt="Game Icon" className="w-12 h-12" />,
    title: "Squeeze | Lick | Suck Game",
    description: "The randomly specified body part becomes the focal point for the chosen action and must be performed by the player on his partner.",
  },
  {
    icon: <img src={bananaIcon} alt="Game Icon" className="w-12 h-12" />,
    title: "Date Night Questions",
    description: "Encourage for open & honest communication with questions that serve as a catalyst for deepening understanding and discovering hidden sexual fantasies.",
  },
  {
    icon: <img src={bananaIcon} alt="Game Icon" className="w-12 h-12" />,
    title: "Augmented Reality Game",
    description: "Overlay private videos onto specific pictures of your choosing, effectively blending reality with your personal world.",
  },
];

export const SpiceUpSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get ready to spice things up
          </h2>
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
