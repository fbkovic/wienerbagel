import { motion } from "framer-motion";
import { Section } from "./ui/section";
import { useI18n } from "@/lib/i18n";
import { menuSections, type MenuItem } from "@/lib/menu-data";
import { cn } from "@/lib/utils";
import veganoushImg from "@assets/bagel-veganoush.webp";
import leberkaesImg from "@assets/bagel-leberkaes.webp";
import chickenImg from "@assets/bagel-chicken.webp";
import omeletteImg from "@assets/bagel-omelette.webp";
import pastramiImg from "@assets/bagel-pastrami.webp";
import classicImg from "@assets/bagel-classic.webp";
import thunfischImg from "@assets/bagel-thunfisch.webp";
import lachsImg from "@assets/bagel-lachs.webp";
import guacamoleImg from "@assets/bagel-guacamole.webp";
import vegastiImg from "@assets/fruehstueck-vegasti.webp";
import hamshukaImg from "@assets/fruehstueck-hamshuka.webp";

interface Photo {
  /** Name exactly as in menu-data.ts – price, tags and German text come from there. */
  menuName: string;
  img: string;
  /** English description (menu-data.ts is German only). */
  descEn?: string;
  /** Photos that are cut-outs are shown whole; full-frame photos fill the card. */
  fit?: "cover" | "contain";
}

const signature: Photo[] = [
  { menuName: "Salmon", img: lachsImg, descEn: "Cream cheese, smoked salmon, capers, red cabbage, mustard, lettuce" },
  { menuName: "Pastrami", img: pastramiImg, descEn: "Cream cheese, beef pastrami, mountain cheese, lettuce, cabbage, pickles, mustard" },
  { menuName: "Classic", img: classicImg, descEn: "Cream cheese, turkey ham, mountain cheese, cabbage, mayonnaise, lettuce" },
  { menuName: "Tuna", img: thunfischImg, descEn: "Tuna, capers, olive oil, red cabbage, mayonnaise" },
  { menuName: "Steirer TropiChick", img: chickenImg, descEn: "Styrian chicken, lettuce, curry-mango sauce" },
  { menuName: "Breakfast", img: omeletteImg, descEn: "Cream cheese, two-egg omelette, lettuce" },
  { menuName: "Veganoush", img: veganoushImg, descEn: "Hummus, eggplant, sun-dried tomatoes, red cabbage, cabbage, lettuce" },
  { menuName: "Leberkäs", img: leberkaesImg, descEn: "Chicken cheese Leberkäse, mustard, cabbage" },
];

const breakfast: Photo[] = [
  { menuName: "Vegasti", img: vegastiImg, fit: "contain", descEn: "Hummus, eggplant, guacamole, sun-dried tomato" },
  { menuName: "Ham Shuka", img: hamshukaImg, fit: "contain", descEn: "Hummus, minced beef, jalapeño" },
  { menuName: "Guacamole", img: guacamoleImg, fit: "contain" },
];

const TAG_EN: Record<string, string> = {
  vegan: "vegan",
  vegetarisch: "vegetarian",
  warm: "warm",
};

const allItems: MenuItem[] = menuSections.flatMap((s) => s.items);
const findItem = (name: string) => allItems.find((i) => i.name === name);

function PhotoCard({ photo, index }: { photo: Photo; index: number }) {
  const { language } = useI18n();
  const item = findItem(photo.menuName);
  const desc = language === "en" ? photo.descEn : item?.description;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-border/60 shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden bg-[#efe6d8]">
        <img
          src={photo.img}
          alt={`${photo.menuName} Bagel – Wienerbagel`}
          loading="lazy"
          className={cn(
            "w-full h-full transition-transform duration-500 group-hover:scale-105",
            photo.fit === "contain" ? "object-contain p-4" : "object-cover",
          )}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-logo font-bold tracking-tight">{photo.menuName}</h3>
          {item && (
            <span className="shrink-0 font-display font-bold text-primary">
              {item.price}&nbsp;€
            </span>
          )}
        </div>
        {desc && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>}
        {item?.tags?.length ? (
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-foreground/70"
              >
                {language === "en" ? TAG_EN[tag] ?? tag : tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export function BagelGallery() {
  const { t } = useI18n();

  return (
    <Section id="bagels" bg="creme">
      <div className="text-center mb-12">
        <span className="text-primary font-bold tracking-widest uppercase text-sm">{t("bagels.label")}</span>
        <h2 className="text-4xl md:text-5xl font-logo font-bold mt-2 uppercase tracking-tight">{t("bagels.title")}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {signature.map((photo, i) => (
          <PhotoCard key={photo.menuName} photo={photo} index={i} />
        ))}
      </div>

      <h3 className="text-2xl md:text-3xl font-logo font-bold uppercase tracking-tight text-center mt-16 mb-8">
        {t("bagels.breakfast")}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {breakfast.map((photo, i) => (
          <PhotoCard key={photo.menuName} photo={photo} index={i} />
        ))}
      </div>
    </Section>
  );
}
