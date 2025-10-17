import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { elementRef, isVisible } = useScrollReveal();
  
  return (
    <section ref={elementRef} id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agende sua consulta e comece a cuidar do seu sorriso hoje mesmo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className={`border-border hover:shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                  <p className="text-muted-foreground">(11) 9999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                  <p className="text-muted-foreground">contato@sorriamais.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Avenida Paulista, 1000<br />
                    São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Horário</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h - 18h<br />
                    Sábado: 8h - 13h
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className={`border-border bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Agende sua Consulta
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Nossa equipe está pronta para atendê-lo e cuidar do seu sorriso com todo carinho e profissionalismo.
              </p>
              
              <div className="space-y-4 pt-4">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary/5"
                  onClick={() => window.location.href = "tel:+551199999999"}
                >
                  Ligar Agora
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground text-center pt-4">
                Respondemos em até 24 horas
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
