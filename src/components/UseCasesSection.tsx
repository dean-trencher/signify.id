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
    <section id="scenarios" className="py-24 px-6 relative">
      <div className="absolute inset-0 gradient-radial opacity-50" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Application Scenarios
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">
            Transforming identity verification across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-8 hover:border-solana-purple/50 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-medium mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm font-light">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
