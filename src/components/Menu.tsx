import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { menuData } from "@/data/menuData";
import pandaSmall from "@/assets/panda-small.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

export const Menu = () => {
  const [selectedItem, setSelectedItem] = useState<{ name: string; price: string; details?: string; category: string } | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (selectedItem) {
      addToCart({
        ...selectedItem,
        price: parseFloat(selectedItem.price)
      });
      setSelectedItem(null);
    }
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'var(--pattern-clouds)' }} />
      
      {/* Floating cartoon decorations */}
      <img 
        src={pandaSmall} 
        alt="" 
        className="absolute left-8 top-1/3 w-16 h-16 md:w-20 md:h-20 opacity-50 animate-pulse hidden lg:block"
        style={{ animationDuration: '3s' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-12">
          {/* Decorative top element */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="w-3 h-3 rotate-45 bg-secondary" />
            <div className="w-3 h-3 rotate-45 bg-primary" />
            <div className="w-3 h-3 rotate-45 bg-secondary" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-cinzel text-foreground tracking-wide">菜单 · Our Menu</h2>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-secondary to-transparent" />
            <div className="text-primary text-xl">❖</div>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          </div>
          
          <p className="text-lg text-muted-foreground font-noto">Explore our delicious selection of authentic Chinese dishes</p>
        </div>

        <Tabs defaultValue="appetizers" className="w-full">
          <TabsList className="w-full flex-wrap h-auto gap-2 bg-card/50 backdrop-blur-sm p-3 mb-8 border-2 border-primary/20">
            {Object.keys(menuData).map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="font-cinzel data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-primary-foreground data-[state=active]:border-2 data-[state=active]:border-secondary/50 data-[state=active]:shadow-lg transition-all"
              >
                {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(menuData).map(([category, items]) => (
            <TabsContent key={category} value={category} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, index) => (
                  <Card 
                    key={index} 
                    onClick={() => setSelectedItem({ ...item, category })}
                    className="p-5 hover:shadow-xl transition-all hover:scale-[1.02] border-2 border-primary/20 hover:border-primary/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
                  >
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary/40" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary/40" />
                    
                    <div className="flex justify-between items-start gap-4 relative z-10">
                      <div className="space-y-1 flex-1">
                        <h3 className="font-semibold font-noto text-foreground leading-tight">{item.name}</h3>
                        {item.details && (
                          <p className="text-sm text-muted-foreground font-noto">{item.details}</p>
                        )}
                      </div>
                      <Badge className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shrink-0 border border-secondary/30 shadow-sm font-cinzel">
                        ${item.price}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-noto text-xl">{selectedItem?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-16 h-16 text-primary/40" />
            </div>
            {selectedItem?.details && (
              <p className="text-muted-foreground font-noto">{selectedItem.details}</p>
            )}
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-2xl font-bold text-primary font-cinzel">${selectedItem?.price}</span>
              <Button onClick={handleAddToCart} className="font-cinzel">
                Add to Cart
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
