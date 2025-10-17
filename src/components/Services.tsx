import { Card, CardContent } from "./ui/card";
import { 
  Stethoscope, 
  Shield, 
  Pill, 
  Activity, 
  Sparkles, 
  Scissors,
  FileHeart,
  Crown
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Stethoscope,
    title: "Diagnóstico",
    description: "Avaliação completa e precisa da sua saúde bucal com tecnologia de ponta"
  },
  {
    icon: Shield,
    title: "Prevenção",
    description: "Tratamentos preventivos para manter seu sorriso sempre saudável"
  },
  {
    icon: Pill,
    title: "Tratamento de Cáries",
    description: "Restaurações modernas e minimamente invasivas"
  },
  {
    icon: Activity,
    title: "Doenças Gengivais",
    description: "Tratamento especializado para problemas periodontais"
  },
  {
    icon: FileHeart,
    title: "Restaurações",
    description: "Recuperação da estrutura dental com materiais de alta qualidade"
  },
  {
    icon: Scissors,
    title: "Extrações e Cirurgias",
    description: "Procedimentos cirúrgicos com conforto e segurança"
  },
  {
    icon: Crown,
    title: "Próteses",
    description: "Reabilitação oral completa com próteses personalizadas"
  },
  {
    icon: Sparkles,
    title: "Estética Dental",
    description: "Transforme seu sorriso com tratamentos estéticos modernos"
  }
];

const Services = () => {
  const { elementRef, isVisible } = useScrollReveal();
  
  return (
    <section ref={elementRef} id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em odontologia para cuidar do seu sorriso
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group shadow-xl border-primary/50 hover:shadow-2xl transition-all duration-700 bg-card ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center scale-110 group-hover:scale-100 transition-transform">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-primary group-hover:text-foreground transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
