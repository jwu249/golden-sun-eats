import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Golden Sun" className="w-12 h-12 object-contain" />
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              Golden Sun Restaurant
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("about")}
              className="hover:text-primary"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("menu")}
              className="hover:text-primary"
            >
              Menu
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary"
            >
              Contact
            </Button>
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all"
              asChild
            >
              <a href="tel:7083018689">
                <Phone className="mr-2 h-4 w-4" />
                Order Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border bg-background/95 backdrop-blur-md">
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => scrollToSection("about")}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => scrollToSection("menu")}
            >
              Menu
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
            <Button 
              className="w-full bg-gradient-to-r from-primary to-accent"
              asChild
            >
              <a href="tel:7083018689">
                <Phone className="mr-2 h-4 w-4" />
                Order Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
