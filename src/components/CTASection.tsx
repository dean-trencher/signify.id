import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 lg:px-12 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-solana-purple via-purple-600 to-solana-green p-12 lg:p-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-white leading-tight">
              Ready to Transform Your Identity?
            </h2>
            <p className="text-base lg:text-lg text-white/90 mb-8 font-light leading-relaxed">
              Join thousands who trust Signify.ai for secure, blockchain-verified identity
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="default" 
                className="bg-white text-solana-purple hover:bg-white/90 transition-all text-sm px-8 py-6 group"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="default" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-sm px-8 py-6"
              >
                Schedule Demo
              </Button>
            </div>

            <p className="mt-6 text-xs text-white/70 font-light">
              No credit card required • Setup in minutes • 30-day guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
