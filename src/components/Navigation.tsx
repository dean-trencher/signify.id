import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed left-6 top-6 z-50 flex flex-col gap-8 rounded-2xl border border-border/40 bg-background/80 backdrop-blur-xl p-6 shadow-lg">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-solana-purple to-solana-green">
          <span className="text-xl font-bold">S</span>
        </div>
        <span className="text-sm font-semibold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
          Signify.ai
        </span>
      </div>
      
      <div className="flex flex-col items-start gap-4">
        <a href="#features" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">
          Core Features
        </a>
        <a href="#scenarios" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">
          Use Cases
        </a>
        <a href="#security" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">
          Security
        </a>
        <a href="#about" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">
          About Us
        </a>
      </div>

      <Button size="sm" className="bg-gradient-to-r from-solana-purple to-solana-green hover:opacity-90 transition-opacity text-xs px-4 w-full">
        Apply Now
      </Button>
    </nav>
  );
};

export default Navigation;
