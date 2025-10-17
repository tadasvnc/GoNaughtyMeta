export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/20 bg-gradient-to-b from-black to-[#1C0232]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} CoupleChallenges. All Rights Reserved.</p>
            <p className="text-sm mt-2">
              Made with ❤️ for couples everywhere.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a 
              href="/privacy-policy" 
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
