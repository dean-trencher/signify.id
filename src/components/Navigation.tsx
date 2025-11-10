import { Button } from "@/components/ui/button";
import { Github, Star, Shield, Info } from "lucide-react";
import { WalletButton } from "./WalletButton";

const Navigation = () => {
  return (
    <nav className="fixed top-16 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="relative">
        {/* Decorative glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-solana-purple/10 via-solana-green/10 to-solana-purple/10 blur-xl rounded-full" />
        
        {/* Main navigation container */}
        <div className="relative flex items-center justify-between gap-3 px-4 py-2 rounded-full border border-border/40 bg-background/80 backdrop-blur-2xl shadow-xl">
          {/* Logo */}
          <div className="flex items-center gap-2 px-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-solana-purple to-solana-green">
              <span className="text-sm font-semibold">S</span>
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Signify.ai
            </span>
          </div>
          
          {/* Divider */}
          <div className="h-8 w-px bg-border/40" />
          
          {/* Navigation links with icons */}
          <div className="flex items-center gap-2">
            <a 
              href="#features" 
              className="p-2.5 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent/50 group"
              aria-label="Features"
            >
              <Star className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#scenarios" 
              className="p-2.5 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent/50 group"
              aria-label="Use Cases"
            >
              <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#security" 
              className="p-2.5 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent/50 group"
              aria-label="Security"
            >
              <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-border/40" />

          {/* Right side actions */}
          <div className="flex items-center gap-2 px-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent/50 transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            
            <div className="scale-90">
              <WalletButton />
            </div>
            
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-solana-purple to-solana-green hover:opacity-90 transition-all hover:scale-105 text-sm font-semibold px-5 h-9 rounded-full shadow-lg"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
