import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-solana-purple to-solana-green p-12 md:p-16 text-center">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
              Ready to Get Your Digital ID?
            </h2>
            <p className="text-base text-white/90 mb-6 max-w-2xl mx-auto font-light">
              Join thousands of users who trust Signify.ai for secure, blockchain-verified identity cards
            </p>
            
            <Button 
              size="default" 
              className="bg-white text-solana-purple hover:bg-white/90 transition-all text-sm px-6 py-5 group"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="mt-4 text-xs text-white/70 font-light">
              No credit card required • Setup in minutes • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
