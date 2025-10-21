import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { menuData } from "@/data/menuData";

export const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'var(--pattern-clouds)' }} />
      
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
                    className="p-5 hover:shadow-xl transition-all hover:scale-[1.02] border-2 border-primary/20 hover:border-primary/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group"
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
    </section>
  );
};
