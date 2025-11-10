import { Button } from "@/components/ui/button";
import { Star, Shield, Info, Github } from "lucide-react";
import { WalletButton } from "./WalletButton";

const Navigation = () => {
  return (
    <nav className="fixed top-14 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="relative">
        {/* Decorative glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-solana-purple/20 via-solana-green/20 to-solana-purple/20 blur-xl rounded-full" />
        
        {/* Main navigation container */}
        <div className="relative flex items-center gap-2 px-4 py-3 rounded-full border border-border/40 bg-background/80 backdrop-blur-2xl shadow-2xl">
          {/* Logo */}
          <div className="flex items-center gap-2 pr-4 border-r border-border/40">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-solana-purple to-solana-green">
              <span className="text-sm font-bold">S</span>
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent hidden sm:block">
              Signify.ai
            </span>
          </div>
          
          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-1">
            <a 
              href="#features" 
              className="group px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent flex items-center gap-2"
            >
              <Star className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Features</span>
            </a>
            <a 
              href="#scenarios" 
              className="group px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent flex items-center gap-2"
            >
              <Info className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Use Cases</span>
            </a>
            <a 
              href="#security" 
              className="group px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent flex items-center gap-2"
            >
              <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Security</span>
            </a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 pl-4 border-l border-border/40">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
            
            <div className="scale-90">
              <WalletButton />
            </div>
            
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-solana-purple to-solana-green hover:opacity-90 transition-all hover:scale-105 text-xs px-4 rounded-full shadow-lg"
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
