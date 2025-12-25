import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoImg from "@assets/wienerbagel1683_1766673703223.png";

export function Hero() {
  return (
    <div id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Unsplash: Artisan Bagels */}
        <img
          src="https://images.unsplash.com/photo-1623334053912-3269ae9df407?q=80&w=2070&auto=format&fit=crop"
          alt="Fresh Bagels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.img 
            src={logoImg} 
            alt="Wienerbagel Logo" 
            className="h-32 w-auto mx-auto mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-medium tracking-widest uppercase">
            From Vienna to NYC & Back
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-logo font-bold tracking-tighter leading-tight drop-shadow-2xl">
            THE ORIGINAL <br />
            <span className="text-primary">WIENER</span>BAGEL
          </h1>
          
          <p className="max-w-xl mx-auto text-lg md:text-2xl text-white/90 font-light leading-relaxed">
            Where the bagel was born in 1683 – and finally returned home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white border-0 shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
              <a href="#menu">View Menu</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-2 border-white text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm transition-all" asChild>
              <a href="#story">Our Story <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </div>
  );
}
