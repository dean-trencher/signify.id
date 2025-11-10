import { useState } from "react";
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
import { useEffect } from "react";

const Index = () => {
  const { connected, publicKey } = useWallet();
  const [showIDForm, setShowIDForm] = useState(false);

  useEffect(() => {
    if (connected && publicKey) {
      setShowIDForm(true);
    }
  }, [connected, publicKey]);

  return (
    <div className="min-h-screen bg-background pt-12">
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
  );
};

export default Index;
