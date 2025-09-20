export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/20 bg-gradient-to-b from-black to-[#1C0232]">
      <div className="container mx-auto px-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} CoupleChallenges. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Made with ❤️ for couples everywhere.
        </p>
      </div>
    </footer>
  );
};
