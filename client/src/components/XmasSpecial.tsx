import { motion } from "framer-motion";
import { MapPin, Snowflake, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { xmasFaq } from "@/lib/xmas-faq";
import { FairyLights, Snowfall } from "./XmasDecor";
import duoImg from "@assets/xmas-special-duo.jpg";
import pastramiImg from "@assets/xmas-bagel-pastrami.jpg";
import brieImg from "@assets/xmas-bagel-brie.jpg";
import pamLogo from "@assets/xmas-logo-pam.webp";
import wbLogo from "@assets/xmas-logo-wienerbagel.webp";

export function XmasSpecial() {
  const { t, language } = useI18n();

  const bagels = [
    {
      img: pastramiImg,
      name: t("xmas.bagel1.name"),
      desc: t("xmas.bagel1.desc"),
    },
    {
      img: brieImg,
      name: t("xmas.bagel2.name"),
      desc: t("xmas.bagel2.desc"),
    },
  ];

  return (
    <section
      id="xmas"
      className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-[#F8F6F0] bg-[radial-gradient(ellipse_at_top,#17473a_0%,#0d2f26_45%,#081c17_100%)]"
    >
      <FairyLights />
      <Snowfall className="opacity-70" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 text-secondary font-bold tracking-[0.25em] uppercase text-sm">
            <Snowflake size={16} strokeWidth={1.75} />
            {t("xmas.label")}
            <Snowflake size={16} strokeWidth={1.75} />
          </span>
          <h2 className="text-5xl md:text-7xl font-logo font-bold mt-4 text-[#F8F6F0] tracking-tight">
            X-Mas <span className="italic text-secondary">Special</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6 text-secondary">
            <span className="h-px w-16 bg-secondary/60" />
            <Star size={14} fill="currentColor" strokeWidth={0} />
            <span className="h-px w-16 bg-secondary/60" />
          </div>
          <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-[#F8F6F0]/80 font-light leading-relaxed">
            {t("xmas.subtitle")}
          </p>
          <div className="mt-8 inline-flex items-center gap-5 sm:gap-8 rounded-2xl bg-[#F8F6F0] px-6 sm:px-10 py-4 border border-secondary/60 shadow-lg shadow-black/30">
            <img src={pamLogo} alt={t("xmas.logos.alt.pam")} className="h-16 sm:h-20 w-auto" />
            <span className="text-2xl font-logo text-secondary" aria-hidden="true">×</span>
            <img src={wbLogo} alt={t("xmas.logos.alt.wb")} className="h-20 sm:h-24 w-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-1.5 bg-gradient-to-br from-secondary via-[#f3dc8c] to-secondary shadow-2xl shadow-black/40"
          >
            <img
              src={duoImg}
              alt={t("xmas.duo.alt")}
              className="block w-full h-full object-cover rounded-xl"
            />
          </motion.div>

          <div className="flex flex-col gap-8">
            {bagels.map((bagel, i) => (
              <motion.article
                key={bagel.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
                className="group flex-1 flex flex-col sm:flex-row overflow-hidden rounded-2xl bg-[#F8F6F0] text-foreground border border-secondary/60 shadow-xl shadow-black/30"
              >
                <div className="sm:w-1/2 aspect-[3/2] sm:aspect-square shrink-0 overflow-hidden bg-[#f6ead9]">
                  <img
                    src={bagel.img}
                    alt={`${bagel.name} – ${t("xmas.bagel.altSuffix")}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="sm:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-primary font-bold tracking-widest uppercase text-xs">
                    {t("xmas.badge")}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-logo font-bold mt-2 tracking-tight">
                    {bagel.name}
                  </h3>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{bagel.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-logo font-bold text-center text-[#F8F6F0] tracking-tight">
            {t("xmas.visitors.title")}
          </h3>
          <p className="mt-4 text-center text-[#F8F6F0]/80 leading-relaxed">
            {t("xmas.visitors.intro")}
          </p>
          <div className="mt-8 divide-y divide-secondary/30 border-y border-secondary/30">
            {xmasFaq[language].map((entry) => (
              <details key={entry.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#F8F6F0] [&::-webkit-details-marker]:hidden">
                  {entry.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-secondary text-xl leading-none transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[#F8F6F0]/80 leading-relaxed">{entry.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col items-center gap-5 text-center">
          <p className="text-[#F8F6F0]/80">{t("xmas.availability")}</p>
          <Button
            size="lg"
            className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white border-0 shadow-lg shadow-black/30 hover:scale-105 transition-transform"
            asChild
          >
            <a href="#visit">
              <MapPin className="mr-2 w-5 h-5" />
              {t("xmas.cta")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
