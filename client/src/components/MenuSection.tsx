import { Section } from "./ui/section";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import menuImg1 from "@assets/speisekarte-1.jpg";
import menuImg2 from "@assets/speisekarte-2.jpg";

export function MenuSection() {
  const { t } = useI18n();

  const menuImages = [
    { src: menuImg1, alt: t("menu.img1.alt") },
    { src: menuImg2, alt: t("menu.img2.alt") },
  ];

  return (
    <Section id="menu" bg="creme">
      <div className="text-center mb-12">
        <span className="text-primary font-bold tracking-widest uppercase text-sm">{t("menu.label")}</span>
        <h2 className="text-4xl md:text-5xl font-logo font-bold mt-2 uppercase tracking-tight">{t("menu.title")}</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {menuImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl shadow-lg border border-border/50 bg-white"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="block w-full h-auto"
            />
          </motion.div>
        ))}
      </div>

      <p className="text-center text-muted-foreground mt-10 text-sm">
        {t("menu.priceNote")}
      </p>
    </Section>
  );
}
