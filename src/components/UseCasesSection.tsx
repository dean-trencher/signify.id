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
    <section id="scenarios" className="py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial opacity-50" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-4">
            Application Scenarios
          </h2>
          <p className="text-base text-muted-foreground font-light">
            Transforming identity verification across industries
          </p>
        </div>

        {/* Diagonal zigzag layout */}
        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground text-base font-light leading-relaxed">
                  {useCase.description}
                </p>
              </div>
              
              <div className="lg:w-1/2">
                <div className={`h-64 rounded-3xl bg-gradient-to-br ${useCase.color} opacity-20`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
