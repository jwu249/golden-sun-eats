import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "11:00 AM - 8:30 PM" },
  { day: "Wednesday", time: "11:00 AM - 8:30 PM" },
  { day: "Thursday", time: "11:00 AM - 8:30 PM" },
  { day: "Friday", time: "11:00 AM - 9:00 PM" },
  { day: "Saturday", time: "11:00 AM - 9:00 PM" },
  { day: "Sunday", time: "12:00 PM - 8:30 PM" },
];

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Visit Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 space-y-6 bg-card hover:shadow-xl transition-all border-primary/10">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">14211 S Bell Rd</p>
                  <p className="text-muted-foreground">Homer Glen, IL 60491</p>
                  <Button 
                    variant="link" 
                    className="px-0 text-primary hover:text-accent"
                    asChild
                  >
                    <a 
                      href="https://maps.google.com/?q=14211+S+Bell+Rd,+Homer+Glen,+IL+60491" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Get Directions →
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-2">Phone</h3>
                  <a 
                    href="tel:7083018689" 
                    className="text-lg text-primary hover:text-accent transition-colors font-semibold"
                  >
                    (708) 301-8689
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Call us to place your order</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card hover:shadow-xl transition-all border-primary/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl text-foreground">Hours</h3>
            </div>
            <div className="space-y-3">
              {hours.map((item) => (
                <div 
                  key={item.day} 
                  className="flex justify-between items-center py-2 border-b border-border last:border-0"
                >
                  <span className={`font-medium ${item.time === "Closed" ? "text-muted-foreground" : "text-foreground"}`}>
                    {item.day}
                  </span>
                  <span className={item.time === "Closed" ? "text-destructive font-semibold" : "text-muted-foreground"}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 transition-all"
            asChild
          >
            <a href="tel:7083018689">
              <Phone className="mr-2 h-5 w-5" />
              Call Now to Order
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
