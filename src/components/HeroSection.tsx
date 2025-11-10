import { Button } from "@/components/ui/button";
import IDCard from "./IDCard";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-radial" />
      
      {/* Animated cards container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-8 justify-center items-center opacity-20">
            <div className="animate-float" style={{ animationDelay: "0s", animationDuration: "8s" }}>
              <IDCard holderName="Alex Johnson" walletAddress="7xKX...9pQm" variant="purple" />
            </div>
            <div className="animate-float" style={{ animationDelay: "1s", animationDuration: "9s" }}>
              <IDCard holderName="Sarah Chen" walletAddress="9kLm...4rTn" variant="green" />
            </div>
            <div className="animate-float" style={{ animationDelay: "2s", animationDuration: "7s" }}>
              <IDCard holderName="Mike Davis" walletAddress="2bNp...8sXw" variant="dark" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
          <span className="bg-gradient-to-r from-solana-purple via-purple-400 to-solana-green bg-clip-text text-transparent">
            Blockchain Identity
          </span>
          <br />
          <span className="text-foreground">on Solana</span>
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
          Secure, verifiable digital identity cards powered by Solana blockchain. 
          Your credentials, always accessible, fully decentralized.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="default" className="bg-gradient-to-r from-solana-purple to-solana-green hover:opacity-90 transition-opacity text-sm px-6 py-5">
            Get Your ID Card
          </Button>
          <Button size="default" variant="outline" className="border-border/50 hover:border-solana-purple/50 text-sm px-6 py-5">
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div>
            <div className="text-2xl font-semibold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              50K+
            </div>
            <div className="text-xs text-muted-foreground mt-1">Active Users</div>
          </div>
          <div>
            <div className="text-2xl font-semibold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              200+
            </div>
            <div className="text-xs text-muted-foreground mt-1">Countries</div>
          </div>
          <div>
            <div className="text-2xl font-semibold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              99.9%
            </div>
            <div className="text-xs text-muted-foreground mt-1">Uptime</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(1deg);
          }
          50% {
            transform: translateY(-10px) rotate(-1deg);
          }
          75% {
            transform: translateY(-15px) rotate(0.5deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
