import { useMenu } from "@/hooks/use-menu";
import { Section } from "./ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export function MenuSection() {
  const { data: menuItems, isLoading } = useMenu();

  const categories = ["Classic", "Signature", "Sweet", "Drinks"];

  return (
    <Section id="menu" bg="creme">
      <div className="text-center mb-12">
        <span className="text-primary font-bold tracking-widest uppercase text-sm">Fresh from the Oven</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2">Our Menu</h2>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-primary w-10 h-10" />
        </div>
      ) : (
        <Tabs defaultValue="Classic" className="w-full max-w-4xl mx-auto">
          <TabsList className="flex flex-wrap justify-center w-full h-auto bg-transparent gap-2 mb-12">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="px-6 py-3 rounded-full border border-border data-[state=active]:bg-foreground data-[state=active]:text-white text-lg font-medium transition-all"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuItems
                  ?.filter((item) => item.category.includes(cat))
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-xl shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-md transition-all group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">
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
              
              {menuItems?.filter((item) => item.category.includes(cat)).length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  No items currently available in this category.
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </Section>
  );
}
