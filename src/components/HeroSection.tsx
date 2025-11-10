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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-solana-purple via-purple-400 to-solana-green bg-clip-text text-transparent">
            Blockchain Identity
          </span>
          <br />
          <span className="text-foreground">on Solana</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Secure, verifiable digital identity cards powered by Solana blockchain. 
          Your credentials, always accessible, fully decentralized.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-solana-purple to-solana-green hover:opacity-90 transition-opacity text-lg px-8 py-6">
            Get Your ID Card
          </Button>
          <Button size="lg" variant="outline" className="border-border/50 hover:border-solana-purple/50 text-lg px-8 py-6">
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              50K+
            </div>
            <div className="text-sm text-muted-foreground mt-2">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              200+
            </div>
            <div className="text-sm text-muted-foreground mt-2">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              99.9%
            </div>
            <div className="text-sm text-muted-foreground mt-2">Uptime</div>
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
