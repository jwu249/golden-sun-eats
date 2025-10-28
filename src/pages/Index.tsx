import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Menu />
        <Contact />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
