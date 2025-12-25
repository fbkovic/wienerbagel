import { Section } from "./ui/section";
import { motion } from "framer-motion";
import { Wheat, Globe, Flame } from "lucide-react";

const usps = [
  {
    icon: Wheat,
    title: "Hand-Rolled",
    description: "Every single bagel is rolled by hand, boiled in kettle water with honey, and baked on stone."
  },
  {
    icon: Globe,
    title: "Vienna Born",
    description: "Legend says the bagel was invented here in 1683. We're bringing the original recipe back home."
  },
  {
    icon: Flame,
    title: "Fresh Daily",
    description: "Baked fresh every single morning. No preservatives, just flour, water, yeast, salt, and malt."
  }
];

export function USPSection() {
  return (
    <Section bg="white" className="border-b border-border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {usps.map((usp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="group p-6 rounded-2xl hover:bg-background transition-colors duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-secondary/10 text-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <usp.icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{usp.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {usp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
