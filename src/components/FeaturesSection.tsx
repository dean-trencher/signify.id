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
    <section id="features" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            <span className="bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Core Features
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">
            Built on Solana's cutting-edge blockchain technology for unparalleled security and performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-solana-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-solana-purple/10"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-solana-purple/20 to-solana-green/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <feature.icon className="w-5 h-5 text-solana-purple" />
              </div>
              <h3 className="text-lg font-medium mb-1.5">{feature.title}</h3>
              <p className="text-sm text-muted-foreground font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
