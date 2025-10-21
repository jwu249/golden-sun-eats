import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <img 
            src={logo} 
            alt="Golden Sun Restaurant" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Golden Sun Restaurant
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Authentic Chinese Cuisine in Homer Glen
            </p>
            <p className="text-lg text-muted-foreground">
              Experience the perfect blend of tradition and flavor
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 transition-all"
              onClick={scrollToMenu}
            >
              View Menu
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
              asChild
            >
              <a href="tel:7083018689">
                <Phone className="mr-2 h-5 w-5" />
                Call to Order
              </a>
            </Button>
          </div>

          <div className="pt-8 space-y-2">
            <p className="text-sm text-muted-foreground">14211 S Bell Rd, Homer Glen, IL 60491</p>
            <p className="text-sm font-semibold text-secondary">(708) 301-8689</p>
          </div>
        </div>
      </div>
    </section>
  );
};
