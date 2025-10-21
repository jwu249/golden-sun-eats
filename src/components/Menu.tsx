import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { menuData } from "@/data/menuData";

export const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Menu</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground">Explore our delicious selection of authentic Chinese dishes</p>
        </div>

        <Tabs defaultValue="appetizers" className="w-full">
          <TabsList className="w-full flex-wrap h-auto gap-2 bg-muted/50 p-2 mb-8">
            {Object.keys(menuData).map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground"
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
                    className="p-4 hover:shadow-lg transition-all hover:scale-[1.02] border-primary/10 hover:border-primary/30"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1 flex-1">
                        <h3 className="font-semibold text-foreground leading-tight">{item.name}</h3>
                        {item.details && (
                          <p className="text-sm text-muted-foreground">{item.details}</p>
                        )}
                      </div>
                      <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground shrink-0">
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
