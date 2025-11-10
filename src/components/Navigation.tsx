import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, Home, Star, Shield, Info, Github } from "lucide-react";
import { WalletButton } from "./WalletButton";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className={`fixed left-6 top-20 z-50 flex flex-col gap-6 rounded-2xl border border-border/40 bg-background/95 backdrop-blur-xl shadow-lg transition-all duration-300 ${isExpanded ? 'p-6 w-48' : 'p-4 w-16'}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-solana-purple to-solana-green hover:opacity-90 transition-opacity"
      >
        <Menu className="w-5 h-5" />
      </button>
      
      {isExpanded && (
        <>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-solana-purple to-solana-green">
              <span className="text-xl font-bold">S</span>
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Signify.ai
            </span>
          </div>
          
          <div className="flex flex-col items-start gap-4">
            <a href="#features" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light flex items-center gap-2">
              <Star className="w-4 h-4" />
              Core Features
            </a>
            <a href="#scenarios" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light flex items-center gap-2">
              <Home className="w-4 h-4" />
              Use Cases
            </a>
            <a href="#security" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Security
            </a>
            <a href="#about" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light flex items-center gap-2">
              <Info className="w-4 h-4" />
              About Us
            </a>
          </div>

          <div className="pt-4 border-t border-border/40 space-y-3">
            <WalletButton />
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          <Button size="sm" className="bg-gradient-to-r from-solana-purple to-solana-green hover:opacity-90 transition-opacity text-xs px-4 w-full">
            Apply Now
          </Button>
        </>
      )}
    </nav>
  );
};

export default Navigation;
