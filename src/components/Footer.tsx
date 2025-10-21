import { MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/50 to-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Golden Sun" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="font-bold text-xl text-foreground">Golden Sun</h3>
                <p className="text-sm text-muted-foreground">Restaurant</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Authentic Chinese cuisine in Homer Glen, Illinois. Experience quality ingredients 
              and friendly service.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>14211 S Bell Rd</p>
                  <p>Homer Glen, IL 60491</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a 
                  href="tel:7083018689" 
                  className="text-sm text-primary hover:text-accent transition-colors font-semibold"
                >
                  (708) 301-8689
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">Hours</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Mon: <span className="text-destructive font-semibold">Closed</span></p>
              <p>Tue-Thu: 11:00 AM - 8:30 PM</p>
              <p>Fri-Sat: 11:00 AM - 9:00 PM</p>
              <p>Sun: 12:00 PM - 8:30 PM</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Golden Sun Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
