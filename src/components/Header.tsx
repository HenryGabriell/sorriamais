import { Smile } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Smile className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">Sorria Mais</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection("servicos")} 
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection("contato")} 
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            Contato
          </button>
        </nav>
        
        <Button 
          onClick={() => scrollToSection("contato")}
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
        >
          Agende sua consulta
        </Button>
      </div>
    </header>
  );
};

export default Header;
