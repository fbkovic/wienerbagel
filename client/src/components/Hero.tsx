import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Snowflake } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Snowfall } from "./XmasDecor";
import logoImg from "@assets/wienerbagel_logo_new.png";

export function Hero() {
  const { t } = useI18n();

  return (
    <div id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,#5a1220_0%,#2a0d14_40%,#0b0b0b_100%)]">
        <Snowfall />
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
            alt="Wiener Bagel - Original New York Bagels in Wien Logo"
            className="h-64 w-auto mx-auto mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-medium tracking-widest uppercase">
            {t("hero.tagline")}
          </span>

          <div>
            <a
              href="#xmas"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-secondary/70 bg-secondary/15 text-secondary text-sm font-semibold tracking-wide hover:bg-secondary hover:text-black transition-colors"
            >
              <Snowflake size={16} strokeWidth={1.75} />
              {t("xmas.heroBadge")}
              <ArrowRight size={16} />
            </a>
          </div>

          <h1 className="sr-only">Wiener Bagel - Authentische New York Bagels in Wien</h1>

          <p className="max-w-xl mx-auto text-lg md:text-2xl text-white/90 font-light leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white border-0 shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
              <a href="#menu">{t("hero.viewMenu")}</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-2 border-white text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm transition-all" asChild>
              <a href="#story">{t("hero.ourStory")} <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
          </div>
        </motion.div>
      </div>

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
