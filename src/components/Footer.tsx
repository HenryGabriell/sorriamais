import { Smile, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Smile className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Sorria Mais</span>
            </div>
            <p className="text-muted-foreground">
              Cuidando do seu sorriso com excelência e dedicação.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Contato</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>(11) 9999-9999</p>
              <p>contato@sorriamais.com.br</p>
              <p>Av. Paulista, 1000 - São Paulo/SP</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sorria Mais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
