import { Button } from "@/components/ui/button";
import goNaughtyLogo from "@/assets/gonaughty-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={goNaughtyLogo} alt="GoNaughty! Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold text-foreground font-quicksand tracking-tight">GoNaughty!</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a 
              href="#inside-the-game" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('inside-the-game');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Games
            </a>
            <a href="/privacy-policy" className="text-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-foreground hover:text-primary transition-colors">Terms of Service</a>
          </nav>
          
          <div className="flex items-center">
            <Button 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Download Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};