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
    { id: 1, category: "Classic", name: t("menu.lachs.name"), description: t("menu.lachs.desc") },
    { id: 2, category: "Classic", name: t("menu.pastrami.name"), description: t("menu.pastrami.desc") },
    { id: 3, category: "Classic", name: t("menu.french.name"), description: t("menu.french.desc") },
    { id: 4, category: "Classic", name: t("menu.hummus.name"), description: t("menu.hummus.desc") },
    { id: 5, category: "Classic", name: t("menu.leberkaese.name"), description: t("menu.leberkaese.desc") },
    { id: 6, category: "Classic", name: t("menu.chicken.name"), description: t("menu.chicken.desc") },
    { id: 7, category: "Classic", name: t("menu.sloppy.name"), description: t("menu.sloppy.desc") },
    { id: 8, category: "Sweet", name: t("menu.apfel.name"), description: t("menu.apfel.desc") },
    { id: 9, category: "Sweet", name: t("menu.nutella.name"), description: t("menu.nutella.desc") },
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
