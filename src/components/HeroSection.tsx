import { Button } from "@/components/ui/button";
import IDCard from "./IDCard";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden pt-32">
      <div className="absolute inset-0 gradient-radial" />
      
      <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-solana-purple/10 border border-solana-purple/20 mb-2">
              <span className="text-xs text-solana-purple font-light">Powered by Solana</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-semibold leading-tight">
              <span className="bg-gradient-to-r from-solana-purple via-purple-400 to-solana-green bg-clip-text text-transparent">
                Digital Identity
              </span>
              <br />
              <span className="text-foreground">Reimagined</span>
            </h1>
            
            <p className="text-base lg:text-lg text-muted-foreground max-w-xl font-light leading-relaxed">
              Secure, verifiable identity cards on Solana blockchain. Your credentials, always accessible, fully decentralized.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="default" className="bg-gradient-to-r from-solana-purple to-solana-green hover:opacity-90 transition-opacity text-sm px-6 py-5">
                Get Your ID Card
              </Button>
              <Button size="default" variant="outline" className="border-border/50 hover:border-solana-purple/50 text-sm px-6 py-5">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            
          </div>

          {/* Right Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-float" style={{
                animationDelay: "0s",
                animationDuration: "8s"
              }}>
                  <IDCard holderName="Alex Johnson" walletAddress="7xKX...9pQm" variant="purple" />
                </div>
                <div className="absolute top-32 right-0 animate-float" style={{
                animationDelay: "1s",
                animationDuration: "9s"
              }}>
                  <IDCard holderName="Sarah Chen" walletAddress="9kLm...4rTn" variant="green" />
                </div>
                <div className="absolute top-64 left-0 animate-float" style={{
                animationDelay: "2s",
                animationDuration: "7s"
              }}>
                  <IDCard holderName="Mike Davis" walletAddress="2bNp...8sXw" variant="dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(1deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(0.5deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
      `}</style>
    </section>;
};
export default HeroSection;