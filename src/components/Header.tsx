import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import couplesLogo from "@/assets/couples-challenges-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={couplesLogo} alt="CoupleChallenges Logo" className="w-12 h-12" />
            <span className="hidden md:block text-2xl font-bold text-foreground font-quicksand tracking-tight">CoupleChallenges</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a 
              href="#inside-the-game" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('inside-the-game');
              }}
            >
              Games
            </a>
            <a href="/privacy-policy" className="text-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-foreground hover:text-primary transition-colors">Terms of Service</a>
          </nav>
          
          {/* Desktop Download Button */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={() => window.open('https://apps.apple.com/us/app/sex-game-for-couples-kinky/id6503987806?ppid=0f68efee-b52c-4c94-b961-50a016c3450f', '_blank')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Download Now
            </Button>
          </div>

          {/* Mobile Menu Button and Download */}
          <div className="md:hidden flex items-center space-x-4">
            <Button 
              onClick={() => window.open('https://apps.apple.com/us/app/sex-game-for-couples-kinky/id6503987806?ppid=0f68efee-b52c-4c94-b961-50a016c3450f', '_blank')}
              size="sm"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Download
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-primary/20">
            <nav className="container mx-auto px-6 py-4 space-y-4">
              <a 
                href="/" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#inside-the-game" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('inside-the-game');
                }}
              >
                Games
              </a>
              <a 
                href="/privacy-policy" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms of Service
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};