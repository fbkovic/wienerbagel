import { Section } from "./ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function MenuSection() {
  const { t } = useI18n();

  const categories = [
    { key: "Classic", label: t("menu.classic") },
    { key: "Sweet", label: t("menu.sweet") }
  ];

  const menuItemsProposal = [
    { id: 1, category: "Classic", name: "Lachs Bagel", description: "Creamcheese, Gurke, Senf oder Siracha Mayonnaise, Kapern", price: "€ 9.50" },
    { id: 2, category: "Classic", name: "Pastrami Bagel", description: "Creamcheese, Pastrami, Bergkäse, Senf oder Siracha Mayonnaise", price: "€ 9.80" },
    { id: 3, category: "Classic", name: "French Bagel", description: "Creamcheese, Brie, Bergkäse, Fruchtchutney", price: "€ 8.90" },
    { id: 4, category: "Classic", name: "Hummus Bagel", description: "Hummus, Melanzani, Gurke. Vegane Option verfügbar", price: "€ 8.50" },
    { id: 5, category: "Classic", name: "Leberkäse Bagel", description: "Leberkäse, Senf, Essiggurken", price: "€ 7.90" },
    { id: 6, category: "Classic", name: "Chicken Mayo Bagel", description: "Chicken, Mayonnaise, Gurke", price: "€ 8.80" },
    { id: 7, category: "Classic", name: "Sloppy Joe Bagel", description: "Rindfleisch, Sauce, Parmesan", price: "€ 9.20" },
    { id: 8, category: "Sweet", name: "Apfelstrudel Bagel", description: "Warme Apfel-Zimt Füllung, Vanillesauce", price: "€ 5.50" },
    { id: 9, category: "Sweet", name: "Nutella Bagel", description: "Nutella, Banane oder Erdbeeren", price: "€ 4.90" },
    { id: 10, category: "Sweet", name: "Dessert Bagel", description: "Täglich wechselnde Überraschung", price: "€ 5.20" },
  ];

  return (
    <Section id="menu" bg="creme">
      <div className="text-center mb-12">
        <span className="text-primary font-bold tracking-widest uppercase text-sm">{t("menu.label")}</span>
        <h2 className="text-4xl md:text-5xl font-logo font-bold mt-2 uppercase tracking-tight">{t("menu.title")}</h2>
      </div>

      <Tabs defaultValue="Classic" className="w-full max-w-4xl mx-auto">
        <TabsList className="flex flex-wrap justify-center w-full h-auto bg-transparent gap-2 mb-12">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.key}
              value={cat.key}
              className="px-6 py-3 rounded-full border border-border data-[state=active]:bg-foreground data-[state=active]:text-white text-lg font-medium transition-all"
            >
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.key} value={cat.key} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItemsProposal
                ?.filter((item) => item.category.includes(cat.key))
                .map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-md transition-all group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold font-logo uppercase tracking-tight group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-lg font-bold text-foreground bg-secondary/10 px-3 py-1 rounded-md">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
            </div>

            {menuItemsProposal?.filter((item) => item.category.includes(cat.key)).length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                {t("menu.empty")}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
