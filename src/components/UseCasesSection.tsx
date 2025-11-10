import { Building2, GraduationCap, Plane, Building } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Corporate Access",
    description: "Streamline employee verification and building access with blockchain-based ID cards.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: GraduationCap,
    title: "Educational Credentials",
    description: "Issue and verify educational certificates and student IDs on the blockchain.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Plane,
    title: "Travel & Immigration",
    description: "Fast-track border control with blockchain-verified travel documents.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Building,
    title: "Government Services",
    description: "Modernize public services with secure, digital identity verification.",
    color: "from-orange-500 to-red-500",
  },
];

const UseCasesSection = () => {
  return (
    <section id="scenarios" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial opacity-50" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-semibold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Application
            </span>
            <br />
            <span className="text-foreground">Scenarios</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Transforming identity verification across industries
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-card/50 border border-border/50 hover:border-solana-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-solana-purple/10"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <useCase.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4">{useCase.title}</h3>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
