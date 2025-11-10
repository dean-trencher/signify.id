import { CheckCircle2 } from "lucide-react";

const securityFeatures = [
  "End-to-end encryption for all personal data",
  "Decentralized storage on Solana blockchain",
  "Multi-signature verification protocols",
  "Regular security audits by leading firms",
  "GDPR and international compliance",
  "Zero-knowledge proof technology",
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-32 px-6 lg:px-12 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-6xl font-semibold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
                  Military-Grade
                </span>
                <br />
                <span className="text-foreground">Security</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light max-w-lg">
                Your identity security is our top priority. Protected by Solana's robust blockchain infrastructure.
              </p>
            </div>

            <div className="grid gap-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-2xl bg-card/50 border border-border/30 hover:border-solana-purple/30 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-solana-green flex-shrink-0 mt-0.5" />
                  <span className="text-base font-light">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="lg:pl-8">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-solana-purple/20 to-solana-green/20 border border-border/50 p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-solana-purple to-solana-green flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-3">Bank-Level Security</h3>
                <p className="text-base text-muted-foreground font-light">
                  Protected by the same standards used by financial institutions worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
