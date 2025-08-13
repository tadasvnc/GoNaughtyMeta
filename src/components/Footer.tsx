import { Twitter, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/20 bg-gradient-to-b from-black to-[#1C0232]">
      <div className="container mx-auto px-6 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-primary transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} GoNaughty. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Made with ❤️ for couples everywhere.
        </p>
      </div>
    </footer>
  );
};
