import { Shield, Zap, Globe, Lock, Fingerprint, Wallet } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Blockchain Verified",
    description: "Every ID card is secured and verified on the Solana blockchain, ensuring authenticity and tamper-proof records.",
  },
  {
    icon: Zap,
    title: "Instant Verification",
    description: "Verify identity in milliseconds with Solana's high-speed blockchain technology.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Access your digital identity anywhere in the world, anytime you need it.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your personal data remains encrypted and under your control at all times.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Integration",
    description: "Enhanced security with optional biometric authentication features.",
  },
  {
    icon: Wallet,
    title: "Wallet Integration",
    description: "Seamlessly connects with your favorite Solana wallets like Phantom and Solflare.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 lg:px-12 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="text-foreground">Signify.ai</span>
          </h2>
          <p className="text-base text-muted-foreground font-light">
            Built on Solana's cutting-edge blockchain for unparalleled security
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large card */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 group p-8 rounded-3xl bg-gradient-to-br from-solana-purple/10 to-solana-green/10 border border-border/50 hover:border-solana-purple/50 transition-all duration-300">
            <Shield className="w-8 h-8 text-solana-purple mb-4" />
            <h3 className="text-2xl font-medium mb-3">{features[0].title}</h3>
            <p className="text-sm text-muted-foreground font-light max-w-md">{features[0].description}</p>
          </div>

          {/* Small cards */}
          {features.slice(1, 3).map((feature, index) => (
            <div key={index} className="group p-6 rounded-3xl bg-card border border-border/50 hover:border-solana-purple/50 transition-all duration-300">
              <feature.icon className="w-6 h-6 text-solana-purple mb-3" />
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground font-light">{feature.description}</p>
            </div>
          ))}

          {/* Medium cards */}
          {features.slice(3).map((feature, index) => (
            <div key={index} className="group p-6 rounded-3xl bg-card border border-border/50 hover:border-solana-purple/50 transition-all duration-300">
              <feature.icon className="w-6 h-6 text-solana-purple mb-3" />
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
