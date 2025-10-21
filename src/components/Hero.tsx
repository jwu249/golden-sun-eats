import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import pandaDecoration from "@/assets/panda-decoration.png";
import dragonDecoration from "@/assets/dragon-decoration.png";
import pandaSmall from "@/assets/panda-small.png";

export const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Traditional cloud pattern background */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'var(--pattern-clouds)' }} />
      
      {/* Cartoon character decorations */}
      <img 
        src={pandaDecoration} 
        alt="" 
        className="absolute left-8 top-24 w-32 h-32 md:w-48 md:h-48 opacity-80 animate-pulse hidden md:block"
        style={{ animationDuration: '3s' }}
      />
      <img 
        src={dragonDecoration} 
        alt="" 
        className="absolute right-8 top-32 w-32 h-32 md:w-48 md:h-48 opacity-80 animate-pulse hidden md:block"
        style={{ animationDuration: '4s' }}
      />
      <img 
        src={pandaSmall} 
        alt="" 
        className="absolute left-16 bottom-24 w-16 h-16 md:w-24 md:h-24 opacity-70 animate-pulse hidden lg:block"
        style={{ animationDuration: '2.5s' }}
      />
      <img 
        src={pandaSmall} 
        alt="" 
        className="absolute right-24 bottom-32 w-16 h-16 md:w-20 md:h-20 opacity-70 animate-pulse hidden lg:block"
        style={{ animationDuration: '3.5s' }}
      />
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary opacity-60" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-secondary opacity-60" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-secondary opacity-60" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary opacity-60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Logo with decorative frame */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-20 blur-2xl rounded-full" />
            <img 
              src={logo} 
              alt="Golden Sun Restaurant" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 relative z-10"
            />
          </div>
          
          <div className="space-y-4">
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="w-2 h-2 rotate-45 bg-secondary" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-cinzel bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent tracking-wide">
              Golden Sun Restaurant
            </h1>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-secondary to-transparent" />
              <div className="text-secondary text-2xl">◆</div>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-secondary to-transparent" />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-noto">
              正宗中餐 · Authentic Chinese Cuisine in Homer Glen
            </p>
            <p className="text-lg text-muted-foreground font-noto italic">
              Experience the perfect blend of tradition and flavor
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 font-cinzel bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all border-2 border-secondary/30"
              onClick={scrollToMenu}
            >
              View Menu
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 font-cinzel border-2 border-primary bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all"
              asChild
            >
              <a href="tel:7083018689">
                <Phone className="mr-2 h-5 w-5" />
                Call to Order
              </a>
            </Button>
          </div>

          <div className="pt-8 space-y-3">
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-1 h-1 bg-secondary rounded-full" />
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="w-1 h-1 bg-secondary rounded-full" />
            </div>
            <p className="text-sm text-muted-foreground font-noto">14211 S Bell Rd, Homer Glen, IL 60491</p>
            <p className="text-lg font-semibold text-primary font-cinzel tracking-wider">(708) 301-8689</p>
          </div>
        </div>
      </div>
    </section>
  );
};
