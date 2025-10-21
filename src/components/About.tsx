import { Card } from "@/components/ui/card";
import { Clock, MapPin, Star } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur border-2 border-primary/10 hover:border-primary/30 transition-all shadow-lg">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Golden Sun Restaurant offers authentic and delicious tasting Chinese cuisine in Homer Glen, IL. 
              Golden Sun's convenient location and affordable prices make our restaurant a natural choice for 
              dine-in or take-out meals in the Homer Glen community. Our restaurant is known for its variety 
              of tastes and high quality fresh ingredients. Come and experience our friendly atmosphere and 
              excellent service.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center space-y-4 bg-card hover:shadow-xl transition-all hover:scale-105 border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Quality Ingredients</h3>
              <p className="text-muted-foreground">Fresh, high-quality ingredients in every dish</p>
            </Card>

            <Card className="p-6 text-center space-y-4 bg-card hover:shadow-xl transition-all hover:scale-105 border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Fast Service</h3>
              <p className="text-muted-foreground">Quick preparation for dine-in and take-out</p>
            </Card>

            <Card className="p-6 text-center space-y-4 bg-card hover:shadow-xl transition-all hover:scale-105 border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Convenient Location</h3>
              <p className="text-muted-foreground">Easy to find in Homer Glen</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
