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
    <section id="security" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
                Security & Compliance
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your identity security is our top priority. Built with military-grade encryption 
              and protected by Solana's robust blockchain infrastructure.
            </p>

            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-solana-green flex-shrink-0 mt-1" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-solana-purple/20 to-solana-green/20 border border-border/50 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-solana-purple to-solana-green flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Bank-Level Security</h3>
                <p className="text-muted-foreground">
                  Protected by the same security standards used by financial institutions worldwide
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
