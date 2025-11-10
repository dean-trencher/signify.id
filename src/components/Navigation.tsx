import { Button } from "@/components/ui/button";
import { Star, Shield, Info, Github } from "lucide-react";
import { WalletButton } from "./WalletButton";

const Navigation = () => {
  return (
    <nav className="fixed top-16 left-1/2 -translate-x-1/2 z-50 animate-fade-in max-w-5xl w-auto">
      <div className="relative">
        {/* Decorative glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-solana-purple/10 via-solana-green/10 to-solana-purple/10 blur-lg rounded-full" />
        
        {/* Main navigation container */}
        <div className="relative flex items-center gap-2 px-6 py-2.5 rounded-full border border-border/40 bg-background/70 backdrop-blur-2xl shadow-lg">
          {/* Logo */}
          <div className="flex items-center gap-3 pr-6 border-r border-border/40">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-solana-purple to-solana-green">
              <span className="text-sm font-light">S</span>
            </div>
            <span className="text-sm font-light bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent hidden sm:block">
              Signify.ai
            </span>
          </div>
          
          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-2">
            <a 
              href="#features" 
              className="group px-5 py-2 text-sm font-light text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent flex items-center gap-2"
            >
              <Star className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Features</span>
            </a>
            <a 
              href="#scenarios" 
              className="group px-5 py-2 text-sm font-light text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent flex items-center gap-2"
            >
              <Info className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Use Cases</span>
            </a>
            <a 
              href="#security" 
              className="group px-5 py-2 text-sm font-light text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent flex items-center gap-2"
            >
              <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Security</span>
            </a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 pl-6 border-l border-border/40">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
            
            <div className="scale-90 origin-center">
              <WalletButton />
            </div>
            
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-solana-purple to-solana-green hover:opacity-90 transition-all hover:scale-105 text-sm font-light px-6 py-2 h-9 rounded-full shadow-md"
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
