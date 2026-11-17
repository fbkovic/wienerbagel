import { Section } from "./ui/section";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { menuSections } from "@/lib/menu-data";
import signatureImg from "@assets/speisekarte-signature.webp";
import breakfastImg from "@assets/speisekarte-fruehstueck.webp";
import drinksImg from "@assets/speisekarte-getraenke.webp";

export function MenuSection() {
  const { t } = useI18n();

  const menuImages = [
    { src: signatureImg, title: t("menu.board1.title"), alt: t("menu.img1.alt") },
    { src: breakfastImg, title: t("menu.board2.title"), alt: t("menu.img2.alt") },
    { src: drinksImg, title: t("menu.board3.title"), alt: t("menu.img3.alt") },
  ];

  return (
    <Section id="menu" bg="creme">
      <div className="text-center mb-12">
        <span className="text-primary font-bold tracking-widest uppercase text-sm">{t("menu.label")}</span>
        <h2 className="text-4xl md:text-5xl font-logo font-bold mt-2 uppercase tracking-tight">{t("menu.title")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-md md:max-w-none mx-auto">
        {menuImages.map((img, i) => (
          <motion.figure
            key={img.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <figcaption className="mb-4 text-center">
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl md:text-2xl font-logo font-bold uppercase tracking-tight">{img.title}</h3>
            </figcaption>
            <a
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${img.title} – ${t("menu.enlarge")}`}
              className="group block overflow-hidden rounded-2xl shadow-lg border border-border/50 bg-white transition-shadow hover:shadow-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1463}
                height={2600}
                className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">{t("menu.enlarge")}</p>
          </motion.figure>
        ))}
      </div>

      <p className="text-center text-muted-foreground mt-10 text-sm">
        {t("menu.priceNote")}
      </p>

      {/* Crawlable + screen-reader version of the menu boards above.
          Keeps the dish names, descriptions and prices indexable by search
          engines (the photos alone are not) and accessible to screen readers. */}
      <div className="sr-only">
        <h3>Speisekarte Wienerbagel – Bagels, Frühstück &amp; Preise in Wien</h3>
        {menuSections.map((section) => (
          <section key={section.title}>
            <h4>{section.title}</h4>
            {section.note && <p>{section.note}</p>}
            <ul>
              {section.items.map((item) => (
                <li key={item.name}>
                  {item.name}
                  {item.tags?.length ? ` (${item.tags.join(", ")})` : ""}
                  {item.description ? `: ${item.description}` : ""}
                  {` – ${item.price} €`}
                  {item.allergens ? ` [Allergene: ${item.allergens}]` : ""}
                </li>
              ))}
            </ul>
          </section>
        ))}
        <p>{t("menu.priceNote")}</p>
      </div>
    </Section>
  );
}
