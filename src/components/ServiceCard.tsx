import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  const { elementRef, isVisible } = useScrollReveal();
  
  return (
    <Card 
      ref={elementRef}
      className={`group shadow-xl border-primary/50 hover:shadow-2xl transition-all duration-700 bg-card ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <CardContent className="p-6 space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center scale-110 group-hover:scale-100 transition-transform">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        
        <h3 className="text-xl font-semibold text-primary group-hover:text-foreground transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
