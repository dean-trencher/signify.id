import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-solana-purple to-solana-green">
              <span className="text-xl font-bold">S</span>
            </div>
            <span className="text-lg font-semibold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Signify.ai
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
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

          <Button size="sm" className="bg-gradient-to-r from-solana-purple to-solana-green hover:opacity-90 transition-opacity text-xs px-4">
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
