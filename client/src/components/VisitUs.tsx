import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";

export function VisitUs() {
  return (
    <Section id="visit" bg="white" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Info Side */}
        <div className="space-y-8">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-logo font-bold mt-2 mb-6 uppercase tracking-tight">Vienna's First<br />NYC Bagel Shop</h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of the 1st District, we're bringing the authentic New York bagel experience back to where it all began.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-background p-3 rounded-full border border-border">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p className="text-muted-foreground">Bäckerstraße 12<br />1010 Wien, Austria</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-background p-3 rounded-full border border-border">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Opening Hours</h4>
                <p className="text-muted-foreground">
                  Mon - Fri: 07:00 - 16:00<br />
                  Sat - Sun: 08:00 - 15:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-background p-3 rounded-full border border-border">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Contact</h4>
                <p className="text-muted-foreground">+43 1 234 5678<br />hello@wienerbagel.at</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full sm:w-auto bg-foreground text-white hover:bg-foreground/90 rounded-full h-14 px-8 text-lg">
            Get Directions <ArrowUpRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Image/Map Side */}
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            {/* Unsplash: Coffee Shop Exterior */}
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
              alt="Storefront"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                 <p className="text-white font-medium">"Best Bagel I've had outside of Brooklyn. Finally in Vienna!"</p>
                 <div className="flex gap-1 mt-2">
                   {[1,2,3,4,5].map(i => (
                     <span key={i} className="text-secondary text-lg">★</span>
                   ))}
                 </div>
                 <p className="text-white/60 text-sm mt-1">- Anna S., Local Guide</p>
              </div>
            </div>
        </div>
      </div>
    </Section>
  );
}
