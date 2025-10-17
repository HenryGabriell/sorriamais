import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const Hero = () => {
  const { elementRef, isVisible } = useScrollReveal();
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={elementRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Placeholder Background */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10 animate-pulse" />
      )}
      
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="metadata"
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src="/videoclinica.mp4" type="video/mp4" />
      </video>
      
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-background/15 backdrop-blur-[2px]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Seu sorriso é nossa
              <span className="text-white" style={{ textShadow: '0 0 20px hsl(var(--primary) / 0.6), 0 0 40px hsl(var(--primary) / 0.4)' }}> prioridade</span>
            </h1>
            
            <p className="text-xl text-white leading-relaxed" style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              Clínica moderna especializada em diagnóstico, prevenção e tratamento completo para sua saúde bucal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Agendar Consulta
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-primary text-primary bg-background/70 hover:text-white hover:bg-primary/10 hover:border-primary hover:scale-105 active:scale-95 transition-all"
              >
                Conheça nossos serviços
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
