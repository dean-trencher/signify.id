import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import SecuritySection from "@/components/SecuritySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TickerDisplay } from "@/components/TickerDisplay";
import { VisitorCounter } from "@/components/VisitorCounter";
import { IDCardForm } from "@/components/IDCardForm";
import { IDCardHistory } from "@/components/IDCardHistory";

const Index = () => {
  const { connected, publicKey } = useWallet();
  const [showIDForm, setShowIDForm] = useState(false);

  useEffect(() => {
    if (connected && publicKey) {
      setShowIDForm(true);
    }
  }, [connected, publicKey]);

  return (
    <div className="min-h-screen bg-background pt-12 flex">
      <div className="flex-1 pr-80">
        <TickerDisplay />
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <SecuritySection />
        <CTASection />
        <Footer />
        <VisitorCounter />
        
        {connected && publicKey && (
          <IDCardForm
            open={showIDForm}
            onOpenChange={setShowIDForm}
            walletAddress={publicKey.toString()}
          />
        )}
      </div>

      {/* History Sidebar */}
      <div className="w-80 border-l border-border bg-card/50 backdrop-blur-sm fixed right-0 top-12 bottom-0 overflow-hidden">
        <IDCardHistory />
      </div>
    </div>
  );
};

export default Index;
